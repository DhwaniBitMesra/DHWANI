"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, ArrowDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SonicHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth) - 0.5);
            mouseY.set((clientY / innerHeight) - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center">
            
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />
                
                {/* Moving Orbs */}
                <motion.div 
                    style={{ x: useTransform(springX, [-0.5, 0.5], [-50, 50]), y: useTransform(springY, [-0.5, 0.5], [-50, 50]) }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" 
                />
                <motion.div 
                    style={{ x: useTransform(springX, [-0.5, 0.5], [50, -50]), y: useTransform(springY, [-0.5, 0.5], [50, -50]) }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" 
                />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

            {/* Main Content */}
            <motion.div 
                style={{ y: y1, opacity }} 
                className="relative z-10 text-center px-6"
            >
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Est. 1998 • BIT Mesra</span>
                </motion.div>

                {/* Hero Title */}
                <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-difference relative select-none">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent"
                    >
                        DHWANI
                    </motion.span>
                </h1>

                {/* Subtext & Interactive Elements */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 flex flex-col items-center gap-6"
                >
                    <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        We are the <span className="text-white font-medium">Amplifiers</span> of Culture. 
                        The <span className="text-white font-medium">Distortion</span> in the Silence. 
                        The <span className="text-white font-medium">Rhythm</span> of BIT Mesra.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform">
                            <span className="relative z-10 flex items-center gap-2">
                                <Play className="w-4 h-4 fill-current" /> Listen Live
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                        </button>
                        
                        <button className="px-8 py-4 rounded-full border border-white/20 font-mono uppercase tracking-widest hover:bg-white/5 transition-colors text-sm">
                            Join The Club
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Visualizer Bars (Decorative) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 opacity-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 md:w-4 bg-white rounded-t-full"
                        animate={{
                            height: ["20%", "60%", "30%", "80%", "20%"]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                 style={{ opacity }}
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-zinc-500">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-4 h-4" />
                </div>
            </motion.div>

        </section>
    );
}
