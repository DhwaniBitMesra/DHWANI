"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Music2, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function NaadPromo() {
    return (
        <section className="relative py-32 overflow-hidden bg-black text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1459749411177-260f114c1c95?q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs font-mono uppercase tracking-widest text-yellow-500">Coming Soon • Spring 2026</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 bg-linear-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-transparent leading-[0.9]">
                            NAAD
                            <span className="block text-4xl md:text-6xl text-white/50 not-italic font-bold mt-2">
                            &apos;26
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                            The largest inter-college music phenomenon in East India. 
                            Where legends are born and frequencies collide. 
                            Are you ready to make some noise?
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/naad" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full hover:scale-105 transition-transform">
                                <span className="relative z-10 flex items-center gap-2">
                                    Register Interest <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                            </Link>
                            <Link href="/naad" className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
                                Explore The Event
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visuals */}
                    <div className="relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:border-indigo-500/50 transition-colors group"
                            >
                                <Trophy className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-2">₹1.5 Lakh+</h3>
                                <p className="text-sm text-zinc-500 font-mono">PRIZE POOL</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl backdrop-blur-sm mt-8 hover:border-pink-500/50 transition-colors group"
                            >
                                <Users className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-2">5000+</h3>
                                <p className="text-sm text-zinc-500 font-mono">ATTENDEES</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-zinc-900/50 border border-white/10 p-6 rounded-3xl backdrop-blur-sm -mt-8 hover:border-blue-500/50 transition-colors group"
                            >
                                <Music2 className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-2">3 Days</h3>
                                <p className="text-sm text-zinc-500 font-mono">NON-STOP MUSIC</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="relative rounded-3xl overflow-hidden h-full min-h-[160px]"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-indigo-600 to-purple-700 opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-black italic tracking-tighter opacity-50 rotate-[-15deg]">NAAD</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Decorative Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
