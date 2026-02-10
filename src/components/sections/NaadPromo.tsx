"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Music, Mic2, Users, MoveRight, Zap } from "lucide-react";
import { useRef } from "react";

export function NaadPromo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-black text-white min-h-[100vh] flex items-center">
            
            {/* Background Texture & Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            
            {/* Kinetic Background Typography */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.03] pointer-events-none select-none overflow-hidden leading-none">
                <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
                    <span className="text-[30vw] font-black tracking-tighter text-white">
                        AMPLIFY
                    </span>
                </motion.div>
                <motion.div style={{ x: xRight }} className="whitespace-nowrap -mt-[5vw]">
                    <span className="text-[30vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent stroke-white stroke-2">
                        CULTURE
                    </span>
                </motion.div>
            </div>

            {/* Glowing Orbs - More Subtle & Electric */}
            <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Content */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-12 bg-indigo-500"></span>
                                <span className="text-indigo-400 font-mono text-sm uppercase tracking-[0.3em]">The Main Event</span>
                            </div>
                            
                            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-2">
                                NAAD
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-white block text-5xl md:text-7xl mt-2 italic font-serif">
                                    '26 Edition
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-10 space-y-8"
                        >
                            <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
                                Three days of sonic architecture. From classical roots to electronic futures, witness the largest musical convergence in East India.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/naad" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                                    <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                                        Explore Lineup <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </Link>
                                <button className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors text-white/70">
                                    Watch Trailer
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Glass Card Stack */}
                    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[1000px] mt-12 lg:mt-0">
                        
                        {/* Card 1: Prize Pool - Floating Background */}

                        {/* <motion.div 
                            style={{ y: yParallax, rotate: -5, zIndex: 1 }}
                            className="absolute top-0 right-4 md:right-10 w-64 h-72 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:z-20 hover:scale-105 transition-all duration-500 group"
                        >
                            <div className="flex justify-between items-start">
                                <Zap className="w-8 h-8 text-yellow-400" />
                                <span className="text-xs font-mono text-zinc-500">REWARD</span>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black italic tracking-tighter text-white">1.5L+</h4>
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Prize Pool</p>
                            </div>
                        </motion.div> */}

                         {/* Card 2: Main Feature - Center */}
                        <motion.div 
                            whileHover={{ scale: 1.02, rotate: 0 }}
                            style={{ zIndex: 10 }}
                            className="absolute w-72 md:w-80 h-[26rem] bg-gradient-to-b from-zinc-800 to-black border border-white/20 rounded-[2rem] p-8 shadow-2xl shadow-indigo-500/10 flex flex-col justify-between group cursor-pointer"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                                        <Music className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-mono text-zinc-500">DATE</span>
                                        <span className="text-sm font-bold">MAR 13-15</span>
                                    </div>
                                </div>
                                <h4 className="text-5xl font-black italic tracking-tighter mb-2 group-hover:text-indigo-400 transition-colors">72H</h4>
                                <div className="h-px w-full bg-white/10 my-4" />
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Non-stop musical performances, battles, and jam sessions. Sleep is optional.
                                </p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Bit Mesra</span>
                                <MoveRight className="w-5 h-5 text-indigo-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                            </div>
                        </motion.div>

                        {/* Card 3: Stats - Floating Foreground */}
                        <motion.div 
                            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), rotate: 5, zIndex: 5 }}
                            className="absolute bottom-0 left-4 md:left-10 w-64 h-72 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:z-20 hover:scale-105 transition-all duration-500"
                        >
                             <div className="flex justify-between items-start">
                                <Users className="w-8 h-8 text-indigo-400" />
                                <span className="text-xs font-mono text-zinc-500">CROWD</span>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black italic tracking-tighter text-white">5K+</h4>
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Footfall</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}