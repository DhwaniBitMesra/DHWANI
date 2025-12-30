"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function TheHeadliner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} className="relative py-32 bg-neutral-950 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            {/* Spotlight Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Record */}
                    <motion.div
                        style={{ y }}
                        className="relative flex justify-center order-2 lg:order-1"
                    >
                        {/* The Sleeve/Frame */}
                        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-neutral-900 rounded-lg shadow-2xl border border-white/10 p-4 transform -rotate-6">
                            <div className="absolute inset-0 bg-neutral-800/50 backdrop-blur-sm"></div>

                            {/* The Record Itself */}
                            <motion.div
                                style={{ rotate }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]"
                            >
                                <div className="relative w-full h-full rounded-full border-[12px] border-neutral-900 bg-black shadow-2xl flex items-center justify-center overflow-hidden">
                                    {/* Vinyl Grooves */}
                                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ background: 'repeating-radial-gradient(#111 0, #111 2px, #222 3px, #222 4px)' }}></div>

                                    {/* Gold Label / Image */}
                                    <div className="relative w-1/2 h-1/2 rounded-full overflow-hidden border-4 border-yellow-600/50 z-10">
                                        <Image
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=512&h=512&q=80"
                                            alt="President"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Shine effect on label */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: The Content */}
                    <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium tracking-wider uppercase"
                        >
                            <Quote className="w-3 h-3" />
                            The Headliner
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black text-white leading-tight"
                        >
                            Lead with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Rhythm.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-xl text-neutral-400 leading-relaxed font-light">
                                "Music isn't just about what you hear, it's about what you invoke in others. At Dhwani, we aren't just a club; we are an orchestra of innovation."
                            </p>

                            <div>
                                <h3 className="text-2xl font-bold text-white">Ramendra Proytanshu</h3>
                                <p className="text-yellow-500/80 font-mono text-sm mt-1 uppercase tracking-widest">President • Drummer • Visionary</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link href="/team" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors">
                                Meet the Full Lineup
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
