"use client";

import { useEffect, useMemo, useState } from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export default function EnterPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const nextPath = searchParams.get("next") ?? "/account";
    const errorParam = searchParams.get("error");
    const supabase = useMemo(() => createBrowserSupabaseClient(), []);

    const [mode, setMode] = useState<"signin" | "signup">("signin");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(errorParam);

    useEffect(() => {
        const loadSession = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (user) {
                router.replace(nextPath);
            }
        };

        void loadSession();
    }, [nextPath, router, supabase]);

    const handleGoogleSignIn = async () => {
        setError(null);
        setMessage(null);
        setLoading(true);

        const { error: googleError } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
            },
        });

        if (googleError) {
            setError(googleError.message);
            setLoading(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);

        if (!email || !password) {
            setLoading(false);
            setError("Email and password are required.");
            return;
        }

        if (mode === "signin") {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                setError(signInError.message);
                setLoading(false);
                return;
            }

            router.replace(nextPath);
            router.refresh();
            return;
        }

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    display_name: displayName.trim() || email.split("@")[0],
                },
            },
        });

        if (signUpError) {
            setError(signUpError.message);
            setLoading(false);
            return;
        }

        if (data.session) {
            router.replace(nextPath);
            router.refresh();
            return;
        }

        setMessage("Account created. Check your email to verify your account.");
        setLoading(false);
    };

    return (
        <main className="min-h-[100dvh] bg-black text-white relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Background Gradients & Images */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black pointer-events-none"></div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] bg-indigo-600/30 rounded-full mix-blend-screen"></div>
                <div className="absolute -right-20 bottom-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] bg-rose-600/30 rounded-full mix-blend-screen"></div>
                
                <div className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-[0.15]">
                    <Image src="/music-studio-dark.png" alt="" fill className="object-cover blur-sm" priority />
                </div>
                <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 opacity-[0.15]">
                    <Image src="/indian-instruments-cyber.png" alt="" fill className="object-cover blur-sm" priority />
                </div>
            </div>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 left-4 sm:top-8 sm:left-8 z-50"
            >
                <Link href="/" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <div className="p-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-all group-hover:scale-105">
                        <MoveLeft className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-widest hidden md:block">Back to Venue</span>
                </Link>
            </motion.div>

            {/* Main Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-[420px]"
            >
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-rose-200">Restricted Access</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black italic tracking-tighter mb-3 drop-shadow-lg">BACKSTAGE</h1>
                    <p className="text-zinc-400 font-mono text-xs sm:text-sm uppercase tracking-widest">Verify Credentials to Proceed</p>
                </div>

                {/* Form Card */}
                <div className="bg-zinc-950/60 border border-white/10 rounded-3xl p-1 backdrop-blur-2xl shadow-2xl shadow-black/80">
                    <div className="bg-black/50 rounded-[22px] p-6 sm:p-8 w-full">
                        
                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white hover:bg-zinc-200 active:scale-[0.98] text-black py-3.5 text-sm font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed mb-6"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>

                        {/* Divider */}
                        <div className="relative my-6 sm:my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] sm:text-xs uppercase">
                                <span className="bg-[#0a0a0a] px-3 py-1 rounded-full border border-white/10 text-zinc-500 font-mono tracking-widest">
                                    Or continue with email
                                </span>
                            </div>
                        </div>

                        {/* Email Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {mode === "signup" && (
                                <input
                                    type="text"
                                    placeholder="Display Name"
                                    value={displayName}
                                    onChange={(event) => setDisplayName(event.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
                                />
                            )}
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
                            />
                            
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-2 rounded-xl bg-indigo-600 text-white py-3.5 text-xs font-mono uppercase tracking-widest font-bold hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
                            >
                                {loading ? "Processing..." : mode === "signin" ? "Initialize Session" : "Request Access"}
                            </button>

                            {/* Status Messages */}
                            {error && (
                                <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-start gap-2">
                                    <span className="text-rose-400 text-xs font-mono leading-relaxed">{error}</span>
                                </div>
                            )}
                            {message && (
                                <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2">
                                    <span className="text-emerald-400 text-xs font-mono leading-relaxed">{message}</span>
                                </div>
                            )}

                            {/* Toggle Sign In / Sign Up */}
                            <div className="pt-4 flex justify-between items-center text-[11px] sm:text-xs font-mono text-zinc-500 border-t border-white/5 mt-6">
                                <span>{mode === "signin" ? "No credentials yet?" : "Already registered?"}</span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setError(null);
                                        setMessage(null);
                                        setMode((previous) => (previous === "signin" ? "signup" : "signin"));
                                    }}
                                    className="text-white hover:text-indigo-400 underline underline-offset-4 transition-colors"
                                >
                                    {mode === "signin" ? "Create Account" : "Sign In"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-8 text-center opacity-60">
                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest">DHWANI MUSIC CLUB • SECURE GATEWAY v2.0</p>
                </div>
            </motion.div>
        </main>
    );
}