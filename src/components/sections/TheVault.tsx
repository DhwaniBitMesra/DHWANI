"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Disc, Play, Rewind, FastForward } from "lucide-react";

const milestones = [
    { year: "1998", title: "The First Jam", desc: "Dhwani is founded in a small dorm room." },
    { year: "2005", title: "Bitotsav Debut", desc: "First headline performance at the annual fest." },
    { year: "2012", title: "Studio One", desc: "The club gets its first dedicated music room." },
    { year: "2018", title: "Battle of Bands", desc: "National champions for three consecutive years." },
    { year: "2023", title: "Silver Jubilee", desc: "Celebrating 25 years of rhythm and soul." },
];

export function TheVault() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden min-h-[150vh]">
            <div className="sticky top-0 h-screen flex flex-col justify-center">
                {/* Header */}
                <div className="absolute top-10 left-0 right-0 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">RECORDING SINCE 1998</span>
                    </div>
                    <h2 className="mt-4 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">
                        THE VAULT
                    </h2>
                </div>

                {/* Timeline Strip */}
                <div className="relative w-full overflow-hidden py-20">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2"></div>

                    <motion.div
                        style={{ x }}
                        className="flex gap-20 pl-[50vw] w-max items-center"
                    >
                        {milestones.map((item, i) => (
                            <div key={i} className="relative group w-[300px] md:w-[400px]">
                                {/* Connector Dot */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:bg-white group-hover:scale-150 transition-all duration-300 z-10"></div>

                                {/* Card - alternating position */}
                                <div className={`
                         relative p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md
                         ${i % 2 === 0 ? '-translate-y-[60%]' : 'translate-y-[60%]'}
                         transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-zinc-800/80
                      `}>
                                    <h3 className="text-4xl font-bold text-white/10 absolute -top-4 right-4 group-hover:text-blue-500/20 transition-colors">{item.year}</h3>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Disc className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 group-hover:animate-spin" />
                                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Line to connector */}
                                <div className={`
                         absolute left-1/2 w-px bg-white/10 h-[50px] -translate-x-1/2
                         ${i % 2 === 0 ? 'bottom-[50%] bg-gradient-to-t' : 'top-[50%] bg-gradient-to-b'}
                         from-transparent to-white/20
                      `}></div>
                            </div>
                        ))}

                        {/* Future Placeholder */}
                        <div className="pl-20 text-center opacity-50">
                            <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto mb-4">
                                <Play className="w-6 h-6 text-white/20 ml-1" />
                            </div>
                            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Next Chapter...</span>
                        </div>
                    </motion.div>
                </div>

                {/* Controls Decoration */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 opacity-30">
                    <Rewind className="w-8 h-8 text-white" />
                    <Play className="w-8 h-8 text-white fill-current" />
                    <FastForward className="w-8 h-8 text-white" />
                </div>
            </div>
        </section>
    );
}
