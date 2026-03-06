import type { User as SupabaseUser } from "@supabase/supabase-js";

export interface AuthUser {
	id: string;
	displayName: string;
	primaryEmail: string;
	profileImageUrl: string | null;
}

export function mapSupabaseUser(user: SupabaseUser): AuthUser {
	const displayName =
		typeof user.user_metadata?.display_name === "string"
			? user.user_metadata.display_name
			: typeof user.user_metadata?.full_name === "string"
				? user.user_metadata.full_name
				: user.email?.split("@")[0] ?? "Music Lover";

	const profileImageUrl =
		typeof user.user_metadata?.avatar_url === "string"
			? user.user_metadata.avatar_url
			: null;

	return {
		id: user.id,
		displayName,
		primaryEmail: user.email ?? "",
		profileImageUrl,
	};
}
