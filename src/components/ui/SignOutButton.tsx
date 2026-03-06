"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

interface SignOutButtonProps {
	className?: string;
	redirectTo?: string;
}

export default function SignOutButton({ className, redirectTo = "/" }: SignOutButtonProps) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSignOut = async () => {
		setLoading(true);
		const supabase = createBrowserSupabaseClient();
		await supabase.auth.signOut();
		router.push(redirectTo);
		router.refresh();
		setLoading(false);
	};

	return (
		<button
			type="button"
			onClick={handleSignOut}
			disabled={loading}
			className={cn("disabled:opacity-60 disabled:cursor-not-allowed", className)}
		>
			<LogOut className="w-3 h-3" />
			{loading ? "Signing out" : "Sign Out"}
		</button>
	);
}
