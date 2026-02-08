"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Music2, Trophy, Users, MoveRight } from "lucide-react";
import { useRef } from "react";

export function NaadPromo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    return (
        <section ref={containerRef} className="relative py-40 overflow-hidden bg-black text-white min-h-[120vh] flex items-center">
            
            {/* Kinetic Background Typography */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-10 pointer-events-none select-none overflow-hidden">
                <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
                    <span className="text-[25vw] font-black font-(family-name:--font-gotu) text-transparent bg-clip-text bg-linear-to-b from-zinc-800 to-transparent">
                        नाद&nbsp;नाद&nbsp;नाद
                    </span>
                </motion.div>
                <motion.div style={{ x: xRight }} className="whitespace-nowrap -mt-[10vw]">
                    <span className="text-[25vw] font-black font-(family-name:--font-gotu) text-transparent bg-clip-text bg-linear-to-b from-zinc-800 to-transparent">
                        NAAD&nbsp;2026
                    </span>
                </motion.div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Content */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-block relative"
                        >
                            <span className="absolute -top-6 -left-6 text-6xl text-indigo-500/20 font-serif italic">The</span>
                            <h2 className="text-8xl md:text-9xl font-black tracking-tighter text-white font-(family-name:--font-gotu) relative z-10">
                                नाद
                            </h2>
                            <span className="absolute -bottom-4 -right-8 text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 font-sans">
                                '26
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-12 space-y-8"
                        >
                            <div className="pl-6 border-l-2 border-indigo-500/50">
                                <h3 className="text-2xl font-light text-zinc-300">
                                    The <span className="text-white font-bold">Frequency</span> of the Future.
                                </h3>
                                <p className="text-zinc-500 mt-2 max-w-md text-lg">
                                    East India's largest cultural phenomenon returns. 
                                    Prepare for a sonic distortion that rewrites history.
                                </p>
                            </div>

                            <Link href="/naad" className="group inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors">
                                <span className="border-b border-white group-hover:border-indigo-400 pb-1 transition-colors">
                                    Enter The Event
                                </span>
                                <div className="p-3 bg-white text-black rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                                    <MoveRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Glass Card Stack */}
                    <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">
                        
                        {/* Card 1 */}
                        <motion.div 
                            style={{ y: yParallax, rotate: rotate, zIndex: 1 }}
                            className="absolute top-10 right-10 w-72 h-80 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500 hover:z-20 hover:scale-110 group cursor-pointer"
                        >
                            <Trophy className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-4xl font-black italic mb-2">₹1.5L</h4>
                            <p className="font-mono text-xs uppercase text-zinc-500">Total Prize Pool</p>
                            <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 to-transparent pointer-events-none" />
                        </motion.div>

                         {/* Card 2 (Center dominant) */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="absolute z-10 w-80 h-96 bg-black/60 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl shadow-indigo-500/20 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start">
                                    <Music2 className="w-14 h-14 text-indigo-500 mb-6" />
                                    <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono">LIVE</span>
                                </div>
                                <h4 className="text-5xl font-black italic mb-2 tracking-tighter">72H</h4>
                                <p className="font-mono text-sm uppercase text-zinc-400 w-full border-t border-white/10 pt-4 mt-4">Non-Stop Music</p>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-mono text-indigo-400">SYNC_ID: 2026.03</span>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div 
                            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), rotate: -6 }}
                            className="absolute bottom-10 left-0 md:left-10 w-72 h-80 bg-zinc-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-20 hover:scale-110 group cursor-pointer"
                        >
                            <Users className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-4xl font-black italic mb-2">5K+</h4>
                            <p className="font-mono text-xs uppercase text-zinc-500">Attendees</p>
                             <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-transparent pointer-events-none" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
