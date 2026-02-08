"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Music, Mic2, Lightbulb, Headphones, Users, Heart, Zap, Cable } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Map for serializable icon names
const iconMap: Record<string, any> = {
    Music, Mic2, Lightbulb, Headphones, Users, Heart
};

interface TheStudioProps {
    modules: {
        iconName: string; 
        label: string;
        desc: string;
        knobColor: string;
        patch: string;
        grid: string;
    }[];
}

const Knob = ({ color }: { color: string }) => {
    const [rotation, setRotation] = useState(Math.random() * 270 - 135);
    
    return (
        <motion.div 
            className="relative w-16 h-16 rounded-full bg-zinc-900 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-grab active:cursor-grabbing group"
            whileHover={{ scale: 1.05 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(e, info) => {
                setRotation(r => Math.max(-135, Math.min(135, r - info.delta.y * 2)));
            }}
            style={{ rotate: rotation }}
        >
            {/* Knob Texture */}
            <div className="absolute inset-1 rounded-full border-2 border-zinc-800 bg-[conic-gradient(from_180deg,transparent_0deg,rgba(255,255,255,0.1)_180deg,transparent_360deg)] opacity-20" />
            
            {/* Indicator */}
            <div className="absolute top-2 w-1.5 h-6 bg-zinc-800 rounded-full shadow-[inset_0_-1px_2px_rgba(0,0,0,0.8)]">
                <div className={`w-1 h-3 mt-1 mx-auto rounded-full ${color} shadow-[0_0_5px_currentColor]`} />
            </div>
            
            {/* Tick Marks */}
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-zinc-800 opacity-30 pointer-events-none" />
        </motion.div>
    );
};

const Screw = () => (
    <div className="w-4 h-4 rounded-full bg-zinc-400/20 flex items-center justify-center shadow-inner">
        <div className="w-full h-0.5 bg-zinc-900/50 rotate-45 transform scale-75"></div>
        <div className="w-full h-0.5 bg-zinc-900/50 -rotate-45 absolute transform scale-75"></div>
    </div>
);

const Jack = ({ active = false }: { active?: boolean }) => (
    <div className={`w-10 h-10 rounded-full border-4 border-zinc-700 bg-black shadow-inner flex items-center justify-center group cursor-pointer hover:border-zinc-500 transition-colors`}>
        <div className={`w-3 h-3 rounded-full bg-zinc-900 ${active ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : ''}`} />
    </div>
);

const Oscilloscope = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let frameId: number;
        let time = 0;

        const draw = () => {
            time += 0.05;
            ctx.fillStyle = "#18181b"; // zinc-950
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "#4ade80"; // green-400
            ctx.shadowBlur = 4;
            ctx.shadowColor = "#4ade80";
            
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin(x * 0.05 + time) * 20 + Math.sin(x * 0.1 - time * 2) * 10;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Grid
            ctx.strokeStyle = "#27272a"; // zinc-800
            ctx.shadowBlur = 0;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i=0; i<canvas.width; i+=20) { ctx.moveTo(i,0); ctx.lineTo(i, canvas.height); }
            for(let i=0; i<canvas.height; i+=20) { ctx.moveTo(0,i); ctx.lineTo(canvas.width, i); }
            ctx.stroke();

            frameId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(frameId);
    }, []);

    return <canvas ref={canvasRef} width={200} height={80} className="w-full h-20 rounded bg-zinc-950 border border-zinc-800 mb-4" />;
};


export function TheStudio({ modules }: TheStudioProps) {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden select-none">
            
            {/* Studio Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,40,0.8),black)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hover:opacity-10 transition-opacity pointer-events-none mix-blend-overlay" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Rack Unit */}
                <div className="mb-16 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-2 shadow-2xl max-w-4xl mx-auto relative group">
                    {/* Metal Texture */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_3px)] opacity-50 rounded-lg pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none">
                        <div className="flex justify-between"><Screw /><Screw /></div>
                        <div className="flex justify-between"><Screw /><Screw /></div>
                    </div>
                    
                    <div className="py-8 text-center relative z-10">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-zinc-200 to-zinc-600 font-(family-name:--font-gotu) uppercase tracking-tighter"
                        >
                            THE RACK
                        </motion.h2>
                        <div className="flex items-center justify-center gap-4 mt-2">
                             <div className="h-px w-20 bg-indigo-500/50" />
                             <span className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-400">Modular Creativity </span>
                             <div className="h-px w-20 bg-indigo-500/50" />
                        </div>
                    </div>
                </div>


                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, i) => {
                        const IconComponent = iconMap[mod.iconName] || Music;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, type: "spring" }}
                                viewport={{ once: true }}
                                className="relative bg-zinc-800 rounded-sm border-t-2 border-b-2 border-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
                            >
                                {/* Rack Mount Ears */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 bg-zinc-700 border-r border-black/50 flex flex-col justify-between py-2 items-center">
                                    <Screw /><Screw />
                                </div>
                                <div className="absolute right-0 top-0 bottom-0 w-4 bg-zinc-700 border-l border-black/50 flex flex-col justify-between py-2 items-center">
                                    <Screw /><Screw />
                                </div>

                                <div className="mx-6 p-6 h-full bg-zinc-800 relative group-hover:bg-zinc-800/80 transition-colors">
                                    {/* Module Label */}
                                    <div className="flex justify-between items-start border-b border-zinc-700 pb-4 mb-6">
                                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">{mod.label}</h3>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_red]" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-50" />
                                        </div>
                                    </div>

                                    {/* Primary Control Zone */}
                                    <div className="flex items-center justify-between mb-8">
                                        {/* Icon Display */}
                                        <div className="w-20 h-20 bg-black rounded border border-zinc-700 flex items-center justify-center shadow-inner relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] opacity-20 pointer-events-none" />
                                            <IconComponent className={`w-8 h-8 ${mod.knobColor.replace('bg-', 'text-')} opacity-80`} />
                                        </div>
                                        
                                        {/* Main Knob */}
                                        <div className="flex flex-col items-center gap-2">
                                            <Knob color={mod.knobColor} />
                                            <span className="text-[10px] uppercase font-mono text-zinc-500">Frequency</span>
                                        </div>
                                    </div>
                                    
                                    {/* Description (LCD-ish) */}
                                    <div className="bg-emerald-900/10 border border-emerald-900/30 p-3 rounded mb-6 font-mono text-xs text-emerald-500/80 leading-relaxed h-24 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_2px] opacity-10 pointer-events-none" />
                                        {mod.desc}
                                        <span className="animate-pulse">_</span>
                                    </div>

                                    {/* Patch Bay */}
                                    <div className="mt-auto pt-4 border-t border-zinc-700 grid grid-cols-4 gap-2 items-center">
                                        <div className="col-span-2">
                                            <Oscilloscope />
                                        </div>
                                        <div className="col-span-2 flex justify-end gap-2">
                                            <div className="text-center">
                                                <Jack />
                                                <span className="text-[8px] uppercase text-zinc-500 mt-1 block">IN</span>
                                            </div>
                                            <div className="text-center">
                                                <Jack active />
                                                <span className="text-[8px] uppercase text-zinc-500 mt-1 block">OUT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Cables Overlay (Decorative) */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full z-20 opacity-40 mix-blend-screen" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.5))" }}>
                     <path d="M 100 100 C 150 400, 300 400, 400 800" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" />
                     <path d="M 800 200 C 850 500, 700 600, 600 900" stroke="#eab308" strokeWidth="6" fill="none" strokeLinecap="round" />
                     <path d="M 1200 150 C 1100 400, 1300 600, 1000 850" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>

            </div>
        </section>
    );
}
