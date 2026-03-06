import { redirect } from "next/navigation";
import NaadPass from "@/components/ui/NaadPass";
import Link from "next/link";
import { MoveLeft, Sparkles, Calendar, Music } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { mapSupabaseUser } from "@/lib/auth-user";
import SignOutButton from "@/components/ui/SignOutButton";
import type { NaadUser } from "@/lib/naad-types";

export default async function AccountPage() {
	const supabase = await createServerSupabaseClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/enter?next=/account");
	}

	const accountUser = mapSupabaseUser(user);

	// Check if user is registered for NAAD
	const { data: naadUserData } = await supabase
		.from("naad_users")
		.select("naad_id, full_name, phone, created_at")
		.eq("auth_user_id", user.id)
		.single();

	const isNaadRegistered = !!naadUserData;
	const naadUser = naadUserData as NaadUser | null;

	return (
		<main className="min-h-screen bg-black text-white pt-24 pb-12 px-6 relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

			<div className="max-w-4xl mx-auto relative z-10">
				<div className="flex justify-between items-center mb-12">
					<Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
						<div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
							<MoveLeft className="w-4 h-4" />
						</div>
						<span className="text-sm font-mono uppercase tracking-widest hidden md:block">Back to Home</span>
					</Link>

					<SignOutButton className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-mono uppercase tracking-widest border border-red-500/20" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
					<div className="space-y-6">
						<div>
							<h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2">BACKSTAGE</h1>
							<p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
								Welcome home, {accountUser.displayName.split(" ")[0] || "Artist"}.
							</p>
						</div>

						{isNaadRegistered ? (
							<>
								<div className="prose prose-invert prose-sm text-zinc-400">
									<p>
										You have successfully registered for NAAD &apos;26. Your NAAD ID is your key to all events, workshops, and jamming sessions.
									</p>
									<p>
										Keep your pass accessible. It will be required for registration and entry to all NAAD events.
									</p>
								</div>

								<div className="p-4 rounded-xl bg-indigo-900/10 border border-indigo-500/20">
									<div className="flex items-start gap-3 mb-3">
										<Calendar className="w-5 h-5 text-indigo-400 mt-0.5" />
										<div>
											<h4 className="text-indigo-400 font-bold mb-1 text-sm">NAAD &apos;26 - Musical Extravaganza</h4>
											<p className="text-xs text-indigo-200/70 mb-2">March 13-15, 2026 • BIT Mesra</p>
										</div>
									</div>
									<div className="space-y-2 text-xs text-zinc-400">
										<div className="flex items-center gap-2">
											<Sparkles className="w-3 h-3 text-indigo-400" />
											<span>8+ Competitive Events</span>
										</div>
										<div className="flex items-center gap-2">
											<Music className="w-3 h-3 text-indigo-400" />
											<span>Solo & Group Performances</span>
										</div>
									</div>
								</div>

								<Link
									href="/naad"
									className="block w-full text-center px-6 py-3 bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-indigo-600 transition-colors"
								>
									View All Events
								</Link>
							</>
						) : (
							<>
								<div className="prose prose-invert prose-sm text-zinc-400">
									<p>
										Welcome to Dhwani, BIT Mesra&apos;s premier music club! We&apos;re excited to announce our flagship event.
									</p>
								</div>

								<div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 space-y-4">
									<div className="flex items-start gap-3">
										<div className="p-2 rounded-lg bg-indigo-500/20">
											<Calendar className="w-6 h-6 text-indigo-400" />
										</div>
										<div>
											<h4 className="text-indigo-400 font-bold mb-1">NAAD &apos;26</h4>
											<p className="text-sm text-zinc-300 font-semibold">March 13-15, 2026</p>
										</div>
									</div>
									
									<p className="text-sm text-zinc-400 leading-relaxed">
										Join us for three days of musical competitions, workshops, and performances. From solo vocals to band battles, NAAD has something for every music enthusiast.
									</p>

									<div className="space-y-2 text-xs text-zinc-400">
										<div className="flex items-center gap-2">
											<Sparkles className="w-3 h-3 text-indigo-400" />
											<span>8+ Competitive Events</span>
										</div>
										<div className="flex items-center gap-2">
											<Music className="w-3 h-3 text-indigo-400" />
											<span>Solo & Group Performances</span>
										</div>
										<div className="flex items-center gap-2">
											<Music className="w-3 h-3 text-indigo-400" />
											<span>Prizes & Certificates</span>
										</div>
									</div>
								</div>

								<Link
									href="/naad/register"
									className="block w-full text-center px-6 py-3 bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
								>
									Register for NAAD
								</Link>
							</>
						)}
					</div>

					<div className="flex flex-col items-center">
						{isNaadRegistered && naadUser ? (
							<>
								<NaadPass user={accountUser} naadId={naadUser.naad_id} />
								<div className="mt-6 text-center">
									<p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Your NAAD ID</p>
									<p className="text-2xl font-black font-mono text-indigo-400">
										NAAD-26-{naadUser.naad_id.toString().padStart(4, "0")}
									</p>
								</div>
								<Link
									href="/naad/registrations"
									className="mt-6 text-xs font-mono text-zinc-500 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all"
								>
									View My Registered Events
								</Link>
							</>
						) : (
							<div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl text-center">
								<div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
									<Music className="w-8 h-8 text-indigo-400" />
								</div>
								<h3 className="text-xl font-bold mb-2">Get Your NAAD Pass</h3>
								<p className="text-sm text-zinc-400 mb-6">
									Register for NAAD to receive your unique digital pass and unlock access to all events.
								</p>
								<Link
									href="/naad/register"
									className="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors text-sm"
								>
									Get Started
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
