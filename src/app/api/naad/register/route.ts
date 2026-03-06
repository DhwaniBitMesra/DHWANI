import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
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

    const body = await request.json() as { full_name: string; phone?: string };
    const { full_name, phone } = body;

    if (!full_name) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    // Check if user already registered for NAAD
    const { data: existingUser } = await supabase
      .from("naad_users")
      .select("*")
      .eq("auth_user_id", user.id)
      .single();

    if (existingUser) {
      return NextResponse.json({
        success: true,
        naad_user: existingUser,
        message: "Already registered",
      });
    }

    // Create new NAAD user (naad_id will be auto-generated)
    const { data: naadUser, error: insertError } = await supabase
      .from("naad_users")
      .insert({
        auth_user_id: user.id,
        full_name,
        phone: phone || null,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error creating NAAD user:", insertError);
      return NextResponse.json(
        { error: "Failed to register for NAAD" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      naad_user: naadUser,
      message: "Successfully registered for NAAD",
    });
  } catch (error) {
    console.error("NAAD registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

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

    // Get NAAD user info
    const { data: naadUser, error: queryError } = await supabase
      .from("naad_users")
      .select("*")
      .eq("auth_user_id", user.id)
      .single();

    if (queryError) {
      if (queryError.code === "PGRST116") {
        // Not found
        return NextResponse.json(
          { registered: false, naad_user: null },
          { status: 200 }
        );
      }
      console.error("Error fetching NAAD user:", queryError);
      return NextResponse.json(
        { error: "Failed to fetch NAAD data" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      registered: true,
      naad_user: naadUser,
    });
  } catch (error) {
    console.error("NAAD user fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
