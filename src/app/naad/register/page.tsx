"use client";

import { useEffect, useMemo, useState } from "react";
import NaadPass from "@/components/ui/NaadPass";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Loader2 } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mapSupabaseUser, type AuthUser } from "@/lib/auth-user";
import type { NaadUser } from "@/lib/naad-types";

export default function NaadRegisterPage() {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [naadUser, setNaadUser] = useState<NaadUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [registering, setRegistering] = useState(false);
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");
	const supabase = useMemo(() => createBrowserSupabaseClient(), []);

	useEffect(() => {
		const loadUser = async () => {
			const {
				data: { user: rawUser },
			} = await supabase.auth.getUser();
			const authUser = rawUser ? mapSupabaseUser(rawUser) : null;
			setUser(authUser);

			if (authUser) {
				// Check if user has NAAD registration
				try {
					const response = await fetch("/api/naad/register");
					const data = await response.json() as { registered: boolean; naad_user: NaadUser };
					if (data.registered) {
						setNaadUser(data.naad_user);
						setFullName(data.naad_user.full_name);
						setPhone(data.naad_user.phone || "");
					}
				} catch (err) {
					console.error("Failed to fetch NAAD user:", err);
				}
			}
			setLoading(false);
		};

		void loadUser();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ? mapSupabaseUser(session.user) : null);
		});

		return () => subscription.unsubscribe();
	}, [supabase]);

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setRegistering(true);

		try {
			const response = await fetch("/api/naad/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ full_name: fullName, phone }),
			});

			const data = await response.json() as { naad_user?: NaadUser; error?: string };

			if (!response.ok) {
				setError(data.error || "Failed to register");
				setRegistering(false);
				return;
			}

			if (data.naad_user) {
				setNaadUser(data.naad_user);
			}
		} catch (err) {
			setError("Network error. Please try again.");
			console.error(err);
		} finally {
			setRegistering(false);
		}
	};

	if (loading) {
		return (
			<main className="min-h-screen bg-black text-white flex items-center justify-center">
				<Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-hidden relative">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
				<Link href="/naad" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group">
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					<span className="text-xs font-mono uppercase tracking-widest">Back to NAAD</span>
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none">
								JOIN THE <span className="text-indigo-500">VOICE.</span>
							</h1>
							<p className="text-xl text-zinc-400 font-light max-w-lg mb-8 leading-relaxed">
								Get your official NAAD &apos;26 Digital Pass. This ID grants you access to workshops, jam sessions, and event registrations.
							</p>

							<div className="space-y-6">
								{[
									{ title: "Event Registration", desc: "Register for all NAAD events with your unique ID." },
									{ title: "Artist Profile", desc: "Build your reputation in the community." },
									{ title: "Certification", desc: "Verified participation in NAAD '26." },
								].map((item, i) => (
									<div key={i} className="flex gap-4">
										<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
											<Sparkles className="w-5 h-5 text-indigo-400" />
										</div>
										<div>
											<h4 className="font-bold text-white">{item.title}</h4>
											<p className="text-sm text-zinc-500">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>

					<div className="flex flex-col items-center justify-center">
						{user ? (
							naadUser ? (
								<div className="w-full max-w-sm space-y-8">
									<div className="text-center">
										<h2 className="text-2xl font-bold mb-2">Welcome, {user.displayName.split(" ")[0]}</h2>
										<p className="text-zinc-500 text-sm mb-4">Your NAAD ID is active and ready.</p>
										<div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
											<span className="text-emerald-400 font-mono text-sm">NAAD-26-{naadUser.naad_id.toString().padStart(4, "0")}</span>
										</div>
									</div>
									<NaadPass user={user} naadId={naadUser.naad_id} />
									<div className="text-center">
										<p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
											Registration Status: <span className="text-green-500">Active</span>
										</p>
										<Link
											href="/naad"
											className="inline-block px-6 py-3 bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-indigo-600 transition-colors"
										>
											View Events
										</Link>
									</div>
								</div>
							) : (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="w-full max-w-md p-10 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl"
								>
									<h2 className="text-3xl font-black italic tracking-tight mb-4 text-center">GET YOUR NAAD ID</h2>
									<p className="text-zinc-400 mb-8 text-center">Complete your registration to receive your unique NAAD ID.</p>
									
									<form onSubmit={handleRegister} className="space-y-6">
										<div>
											<label className="block text-sm font-medium text-zinc-400 mb-2">Full Name *</label>
											<input
												type="text"
												value={fullName}
												onChange={(e) => setFullName(e.target.value)}
												placeholder="Enter your full name"
												className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number (Optional)</label>
											<input
												type="tel"
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												placeholder="+91 XXXXX XXXXX"
												className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
											/>
										</div>
										{error && (
											<p className="text-red-400 text-sm text-center">{error}</p>
										)}
										<button
											type="submit"
											disabled={registering || !fullName}
											className="w-full py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
										>
											{registering ? (
												<>
													<Loader2 className="w-4 h-4 animate-spin" />
													Registering...
												</>
											) : (
												"Register for NAAD"
											)}
										</button>
									</form>
								</motion.div>
							)
						) : (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="w-full max-w-md p-10 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl text-center"
							>
								<h2 className="text-3xl font-black italic tracking-tight mb-4">IDENTIFY YOURSELF</h2>
								<p className="text-zinc-400 mb-10">Log in or create an account to generate your unique NAAD ID.</p>
								<Link
									href="/enter?next=/naad/register"
									className="inline-block w-full py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-xl"
								>
									Login / Sign Up
								</Link>
								<p className="mt-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
									Secure Authentication powered by Supabase
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
