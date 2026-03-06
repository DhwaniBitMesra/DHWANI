import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type RouteParams = {
  params: Promise<{ eventId: string }>;
};

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const supabase = await createServerSupabaseClient();
    const { eventId } = await params;

    // Verify user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get user's NAAD ID
    const { data: naadUser, error: naadError } = await supabase
      .from("naad_users")
      .select("naad_id")
      .eq("auth_user_id", user.id)
      .single();

    if (naadError || !naadUser) {
      return NextResponse.json(
        { error: "You must register for NAAD first to participate in events" },
        { status: 400 }
      );
    }

    const body = await request.json() as { team_name?: string; members?: { naad_id: number; role: string }[] };
    const { team_name, members } = body;
    // members = [{ naad_id: number, role: string }, ...]

    // Verify event exists
    const { data: event, error: eventError } = await supabase
      .from("events")
      .select("*")
      .eq("id", parseInt(eventId))
      .single();

    if (eventError || !event) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    // Check if already registered
    const { data: existingReg } = await supabase
      .from("registrations")
      .select("id")
      .eq("event_id", parseInt(eventId))
      .eq("leader_naad_id", naadUser.naad_id)
      .single();

    if (existingReg) {
      return NextResponse.json(
        { error: "You are already registered for this event" },
        { status: 400 }
      );
    }

    // Create registration
    const { data: registration, error: regError } = await supabase
      .from("registrations")
      .insert({
        event_id: parseInt(eventId),
        team_name: event.is_group_event ? team_name : null,
        leader_naad_id: naadUser.naad_id,
      })
      .select()
      .single();

    if (regError) {
      console.error("Error creating registration:", regError);
      return NextResponse.json(
        { error: "Failed to register for event" },
        { status: 500 }
      );
    }

    // For group events, add members
    if (event.is_group_event && members && Array.isArray(members)) {
      // Verify all member NAAD IDs exist
      const memberIds = members.map((m: { naad_id: number }) => m.naad_id);
      const { data: validMembers } = await supabase
        .from("naad_users")
        .select("naad_id")
        .in("naad_id", memberIds);

      if (!validMembers || validMembers.length !== memberIds.length) {
        // Rollback registration
        await supabase
          .from("registrations")
          .delete()
          .eq("id", registration.id);

        return NextResponse.json(
          { error: "One or more member NAAD IDs are invalid" },
          { status: 400 }
        );
      }

      // Insert members
      const memberRecords = members.map((m: { naad_id: number; role: string }) => ({
        registration_id: registration.id,
        naad_id: m.naad_id,
        role: m.role || "Member",
      }));

      const { error: membersError } = await supabase
        .from("registration_members")
        .insert(memberRecords);

      if (membersError) {
        console.error("Error adding members:", membersError);
        // Rollback registration
        await supabase
          .from("registrations")
          .delete()
          .eq("id", registration.id);

        return NextResponse.json(
          { error: "Failed to add team members" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      registration,
      message: "Successfully registered for event",
    });
  } catch (error) {
    console.error("Event registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Get all registrations for an event (admin use)
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const supabase = await createServerSupabaseClient();
    const { eventId } = await params;

    // Verify user is authenticated (admin check could be added here)
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get all registrations for this event with leader info
    const { data: registrations, error: regError } = await supabase
      .from("registrations")
      .select(`
        *,
        leader:naad_users!registrations_leader_naad_id_fkey(*),
        event:events(*)
      `)
      .eq("event_id", parseInt(eventId))
      .order("created_at", { ascending: false });

    if (regError) {
      console.error("Error fetching registrations:", regError);
      return NextResponse.json(
        { error: "Failed to fetch registrations" },
        { status: 500 }
      );
    }

    // Get members for each registration
    for (const reg of registrations || []) {
      const { data: members } = await supabase
        .from("registration_members")
        .select(`
          *,
          user:naad_users(*)
        `)
        .eq("registration_id", reg.id);

      reg.members = members || [];
    }

    return NextResponse.json({
      success: true,
      registrations,
    });
  } catch (error) {
    console.error("Fetch registrations error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
