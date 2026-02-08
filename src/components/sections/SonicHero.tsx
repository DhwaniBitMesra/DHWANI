"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, Variants } from "framer-motion";
import { Play, Sparkles, Music, Mic2, Radio, Disc } from "lucide-react";
import { useState, Suspense, lazy, useEffect } from "react";
// import { cn } from "@/lib/utils";

// Lazy load the Dithering shader
const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

const LETTER_ANIMATION: Variants = {
    initial: { y: 120, opacity: 0, rotateX: -90, filter: "blur(10px)" },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.4,
            delay: i * 0.12,
            type: "spring",
            damping: 18,
            stiffness: 80
        }
    }),
    hover: {
        y: -20,
        scale: 1.1,
        color: "#a5b4fc", // indigo-300
        transition: { duration: 0.3 }
    }
};

const SHAPES = [
    { icon: Music, x: "10%", y: "20%", delay: 0 },
    { icon: Mic2, x: "85%", y: "15%", delay: 2 },
    { icon: Sparkles, x: "80%", y: "70%", delay: 1 },
    { icon: Disc, x: "15%", y: "65%", delay: 3 },
    { icon: Radio, x: "50%", y: "85%", delay: 1.5 },
];

export function SonicHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    const titleLetters = "DHWANI".split("");
    const [isHovered, setIsHovered] = useState(false);

    // Audio bar random heights generator
    const [barHeights, setBarHeights] = useState<number[]>([]);
    useEffect(() => {
        setBarHeights(Array.from({ length: 40 }, () => Math.random()));
    }, []);

    return (
        <section 
            className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* Dithering Shader Background */}
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 pointer-events-none">
                 <Suspense fallback={<div className="absolute inset-0 bg-indigo-900/10 animate-pulse" />}>
                    <Dithering
                        colorBack="#000000"
                        colorFront="#4f46e5" // Indigo-600
                        shape="warp" 
                        type="4x4"
                        speed={isHovered ? 0.8 : 0.2}
                        className="w-full h-full"
                        minPixelRatio={1}
                    />
                 </Suspense>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none mix-blend-overlay" />
            
            {/* Film Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>

            {/* Floating Shapes */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {SHAPES.map((Shape, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/20"
                        style={{ left: Shape.x, top: Shape.y }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 15, -15, 0],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            delay: Shape.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <Shape.icon size={i % 2 === 0 ? 64 : 40} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <motion.div 
                style={{ y: y1, opacity, scale }} 
                className="relative z-20 text-center px-6 perspective-[1200px]"
            >
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-16 hover:bg-indigo-500/20 transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300">Live Frequency • Est. 1998</span>
                </motion.div>

                {/* Hero Title - Staggered 3D Letters */}
                <div className="flex justify-center flex-wrap overflow-visible mb-10 perspective-[1000px]">
                    {titleLetters.map((letter, i) => (
                        <motion.h1
                            key={i}
                            custom={i}
                            variants={LETTER_ANIMATION}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="text-[17vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter bg-linear-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent cursor-default transform-gpu select-none drop-shadow-2xl"
                            style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                        >
                            {letter}
                        </motion.h1>
                    ))}
                </div>

                {/* Subtext */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-10"
                >
                    <p className="max-w-2xl text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mix-blend-screen">
                        The <span className="text-indigo-400 font-medium">Amplifiers</span> of Culture. 
                        The <span className="text-purple-400 font-medium">Distortion</span> in the Silence. 
                        <br className="hidden md:block"/>
                        The <span className="text-white font-bold">Rhythm</span> of BIT Mesra.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-4 relative z-30">
                        <button className="group relative px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-wider overflow-hidden hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(79,70,229,0.4)]">
                            <span className="relative z-10 flex items-center gap-3">
                                <Play className="w-5 h-5 fill-current" /> START THE SHOW
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                        </button>
                        
                        <button className="group px-10 py-5 rounded-full border border-white/20 font-mono uppercase tracking-widest hover:bg-white/5 transition-all hover:border-white/50 relative overflow-hidden backdrop-blur-sm">
                            <span className="relative z-10">Explore Club</span>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Dynamic Visualizer Bars */}
            <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center gap-1 md:gap-2 opacity-40 pointer-events-none px-4 mask-[linear-gradient(0deg,black,transparent)]">
                {barHeights.map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-2 md:w-3 bg-linear-to-t from-indigo-500 via-purple-500 to-transparent rounded-t-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                        initial={{ height: "5%" }}
                        animate={{
                            height: ["5%", `${20 + h * 80}%`, "10%"]
                        }}
                        transition={{
                            duration: 0.8 + h,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: i * 0.02
                        }}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                 style={{ opacity }}
                 className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
            >
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Scroll to Tune In</span>
                <div className="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
                    <motion.div 
                        animate={{ y: [-60, 60] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute w-full h-1/3 bg-white blur-[2px]"
                    />
                </div>
            </motion.div>

        </section>
    );
}
