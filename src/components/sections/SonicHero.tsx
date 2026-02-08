"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, Variants } from "framer-motion";
import { Play, Sparkles, Music, Mic2 } from "lucide-react";
// import { cn } from "@/lib/utils";

const LETTER_ANIMATION: Variants = {
    initial: { y: 100, opacity: 0, rotateX: -80 },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 1.2,
            delay: i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
            type: "spring",
            damping: 12,
            stiffness: 100
        }
    }),
    hover: {
        y: -20,
        color: "#818cf8", // indigo-400
        transition: { duration: 0.3 }
    }
};

const SHAPES = [
    { icon: Music, x: "10%", y: "20%", delay: 0 },
    { icon: Mic2, x: "80%", y: "15%", delay: 2 },
    { icon: Sparkles, x: "85%", y: "70%", delay: 1 },
    { icon: Music, x: "15%", y: "80%", delay: 3 },
];

export function SonicHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse for parallax
    const springConfig = { damping: 20, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Spotlight effect
    const spotX = useMotionValue(0);
    const spotY = useMotionValue(0);
    
    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        
        // Parallax values (-0.5 to 0.5)
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);

        // Spotlight pixel values
        spotX.set(clientX - left);
        spotY.set(clientY - top);
    }

    const titleLetters = "DHWANI".split("");

    return (
        <section 
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center group"
        >
            
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${spotX}px ${spotY}px,
                            rgba(79, 70, 229, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />
                
                {/* Parallax Orbs */}
                <motion.div 
                    style={{ x: useTransform(springX, [-0.5, 0.5], [-80, 80]), y: useTransform(springY, [-0.5, 0.5], [-80, 80]) }}
                    className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" 
                />
                 <motion.div 
                    style={{ x: useTransform(springX, [-0.5, 0.5], [60, -60]), y: useTransform(springY, [-0.5, 0.5], [60, -60]) }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-40" 
                />

                {/* Floating Shapes */}
                {SHAPES.map((Shape, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/10"
                        style={{ left: Shape.x, top: Shape.y }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: Shape.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <Shape.icon size={48} />
                    </motion.div>
                ))}
            </div>

            {/* Grid Pattern & Grain */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>

            {/* Main Content */}
            <motion.div 
                style={{ y: y1, opacity }} 
                className="relative z-20 text-center px-6 perspective-[1000px]"
            >
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] cursor-default"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[ping_1.5s_ease-in-out_infinite]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Live Frequency • 1998</span>
                </motion.div>

                {/* Hero Title - Staggered 3D Letters */}
                <div className="flex justify-center overflow-hidden mb-6">
                    {titleLetters.map((letter, i) => (
                        <motion.h1
                            key={i}
                            custom={i}
                            variants={LETTER_ANIMATION}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="text-[15vw] md:text-[13vw] leading-[0.85] font-black tracking-tighter bg-linear-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent cursor-default transform-gpu"
                            style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                        >
                            {letter}
                        </motion.h1>
                    ))}
                </div>

                {/* Subtext */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        We are the <span className="text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)]">Amplifiers</span> of Culture. 
                        The <span className="text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)]">Distortion</span> in the Silence. 
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <button className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-wider overflow-hidden hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-3">
                                <Play className="w-5 h-5 fill-current" /> START THE SHOW
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                        </button>
                        
                        <button className="group px-10 py-5 rounded-full border border-white/20 font-mono uppercase tracking-widest hover:bg-white/5 transition-all hover:border-white/50 relative overflow-hidden">
                            <span className="relative z-10">Explore Club</span>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Visualizer Bars */}
            <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-1.5 opacity-30 pointer-events-none px-4">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 md:w-3 bg-linear-to-t from-indigo-500 to-transparent rounded-t-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        initial={{ height: "5%" }}
                        animate={{
                            height: ["5%", "40%", "15%", "90%", "30%", "60%", "10%"]
                        }}
                        transition={{
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                 style={{ opacity }}
                 className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <div className="w-px h-12 bg-linear-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
                    <motion.div 
                        animate={{ y: [-20, 40] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute w-full h-1/2 bg-white blur-[1px]"
                    />
                </div>
            </motion.div>

        </section>
    );
}
