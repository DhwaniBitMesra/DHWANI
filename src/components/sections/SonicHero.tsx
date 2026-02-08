"use client";

import { motion, useScroll, useTransform, useMotionValue, Variants } from "framer-motion";
import { Sparkles, Music, Mic2, Radio, Disc, Zap } from "lucide-react";
import { useState, Suspense, lazy, useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";

// Lazy load the Dithering shader
const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

const LETTER_ANIMATION: Variants = {
    initial: { y: 150, opacity: 0, rotateX: -90, filter: "blur(20px)" },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.2,
            delay: i * 0.08,
            type: "spring",
            damping: 15,
            stiffness: 70
        }
    }),
    hover: {
        y: -10,
        scale: 1.1,
        textShadow: "4px 4px 0px rgba(79, 70, 229, 0.5), -4px -4px 0px rgba(236, 72, 153, 0.5)",
        transition: { duration: 0.2 }
    }
};

// Scramble Text Effect Hook
const useScrambleText = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        if (!isHovered) {
             setDisplayedText(text);
             return;
        }

        const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayedText(() => 
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, speed);

        return () => clearInterval(interval);
    }, [isHovered, text, speed]);

    return { displayedText, setIsHovered };
};

function MagneticButton({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3); // Magnetic pull strength
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.button>
    );
}

const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
    const { displayedText, setIsHovered } = useScrambleText(text);
    return (
        <span 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className={className}
        >
            {displayedText}
        </span>
    );
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

    const titleLetters = ["ध्व", "नि"];
    const [isHovered, setIsHovered] = useState(false);

    // Audio bar random heights generator
    const [barHeights, setBarHeights] = useState<number[]>([]);
    useEffect(() => {
        setBarHeights(Array.from({ length: 40 }, () => Math.random()));
    }, []);

    return (
        <section 
            className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* Dithering Shader Background */}
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 pointer-events-none">
                 <Suspense fallback={<div className="absolute inset-0 bg-indigo-900/10 animate-pulse" />}>
                    <Dithering
                        colorBack="#000000"
                        colorFront="#4338ca" // Indigo-700 darker
                        shape="warp" 
                        type="4x4"
                        speed={isHovered ? 0.9 : 0.2}
                        className="w-full h-full"
                        minPixelRatio={1}
                    />
                 </Suspense>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none mix-blend-overlay" />
            
            {/* Film Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>

            {/* Floating Shapes */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {SHAPES.map((Shape, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/10 mix-blend-difference"
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
                className="relative z-20 text-center px-6 perspective-[1200px] flex flex-col items-center"
            >

                {/* Hero Title - Chromatic Aberration */}
                <div className="relative flex justify-center flex-wrap overflow-visible mb-8 perspective-[1000px] mix-blend-screen">
                    {titleLetters.map((letter, i) => (
                        <motion.h1
                            key={i}
                            custom={i}
                            variants={LETTER_ANIMATION}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="text-[25vw] md:text-[20vw] leading-[0.8] font-black tracking-normal text-white cursor-default select-none relative z-10 font-(family-name:--font-gotu)"
                            style={{ 
                                display: "inline-block", 
                                transformStyle: "preserve-3d",
                                textShadow: "0px 0px 0px transparent" // Initial state
                            }}
                        >
                            {letter}
                        </motion.h1>
                    ))}
                    
                    {/* Decorative Stroke Copy for Depth */}
                    <div className="absolute top-2 left-2 w-full h-full flex justify-center flex-wrap opacity-20 pointer-events-none -z-10 blur-[2px]">
                         {titleLetters.map((letter, i) => (
                             <span key={i} className="text-[25vw] md:text-[20vw] leading-[0.8] font-black tracking-normal text-transparent bg-clip-text bg-linear-to-b from-indigo-500 to-transparent font-(family-name:--font-gotu)">
                                 {letter}
                             </span>
                         ))}
                    </div>
                </div>

                {/* Subtext */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-10"
                >
                    <p className="max-w-xl text-lg md:text-xl text-zinc-500 font-mono tracking-tight leading-relaxed">
                        <ScrambleText text="AMPLIFYING CULTURE SINCE 1998." className="text-zinc-300" />
                        <br />
                        <span className="text-xs uppercase tracking-widest opacity-50">
                            {"// DISTORTION DETECTED //"}
                        </span>
                    </p>

                    {/* Magnetic Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-6 relative z-30">
                        {/* Primary Button */}
                        <MagneticButton className="group relative px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                             <span className="relative z-20 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                                <Zap className="w-5 h-5 fill-current" /> <ScrambleText text="ENTER THE VOID" />
                            </span>
                            {/* Invert Fill Effect */}
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10" />
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0" />
                        </MagneticButton>
                        
                        {/* Secondary Button */}
                        <MagneticButton className="group px-8 py-6 rounded-full border border-white/10 font-mono text-sm uppercase tracking-[0.2em] text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all backdrop-blur-sm">
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform" />
                                EXPLORE
                            </span>
                        </MagneticButton>
                    </div>
                </motion.div>
            </motion.div>

            {/* Dynamic Visualizer Bars */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 opacity-30 pointer-events-none px-4 mask-[linear-gradient(0deg,black,transparent)]">
                {barHeights.map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-2 md:w-3 bg-white rounded-t-sm"
                        initial={{ height: "5%" }}
                        animate={{
                            height: ["5%", `${10 + h * 60}%`, "10%"],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: 0.5 + h,
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
                 className="absolute bottom-8 left-8 flex items-center gap-4 z-20 pointer-events-none mix-blend-difference"
            >
                <div className="h-px w-12 bg-white/50" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50"> SCROLL </span>
            </motion.div>

        </section>
    );
}
