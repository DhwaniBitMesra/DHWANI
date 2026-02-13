"use client";

import { useUser } from "@stackframe/stack";
import NaadPass from "@/components/ui/NaadPass";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NaadRegisterPage() {
    const user = useUser();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
                <Link href="/naad" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-mono uppercase tracking-widest">Back to NAAD</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Info */}
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
                                Get your official NAAD &apos;26 Digital Pass. This ID grants you access to workshops, jam sessions, and the main stage battleground.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Exclusive Access", desc: "Priority entry to all events." },
                                    { title: "Artist Profile", desc: "Build your reputation in the community." },
                                    { title: "Certification", desc: "Verified participation in NAAD '26." }
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

                    {/* Right: ID/Login */}
                    <div className="flex flex-col items-center justify-center">
                        {user ? (
                            <div className="w-full max-w-sm space-y-8">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mb-2">Welcome, {user.displayName?.split(' ')[0]}</h2>
                                    <p className="text-zinc-500 text-sm mb-8">Your NAAD ID is linked and ready.</p>
                                </div>
                                <NaadPass user={user} />
                                <div className="text-center">
                                    <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mt-8">
                                        Registration Status: <span className="text-green-500">Active</span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-md p-10 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl text-center"
                            >
                                <h2 className="text-3xl font-black italic tracking-tight mb-4">
                                    IDENTIFY YOURSELF
                                </h2>
                                <p className="text-zinc-400 mb-10">
                                    Log in or create an account to generate your unique NAAD ID.
                                </p>
                                <Link 
                                    href="/enter"
                                    className="inline-block w-full py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-xl"
                                >
                                    Login / Sign Up
                                </Link>
                                <p className="mt-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                                    Secure Authentication powered by Stack
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
