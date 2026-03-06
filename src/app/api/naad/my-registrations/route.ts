import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createServerSupabaseClient();

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
        { registrations: [] },
        { status: 200 }
      );
    }

    // Get all registrations where the user is the leader
    const { data: registrations, error: regError } = await supabase
      .from("registrations")
      .select(`
        id,
        event_id,
        team_name,
        created_at,
        events (
          id,
          name,
          slug,
          is_group_event
        )
      `)
      .eq("leader_naad_id", naadUser.naad_id)
      .order("created_at", { ascending: false });

    if (regError) {
      console.error("Error fetching registrations:", regError);
      return NextResponse.json(
        { error: "Failed to fetch registrations" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      registrations: registrations || [],
    });
  } catch (error) {
    console.error("My registrations error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
