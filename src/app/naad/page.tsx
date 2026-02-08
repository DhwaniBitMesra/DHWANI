"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Mic2, Music, Users, Trophy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    {
        title: "Dhwani Icon",
        type: "Solo Vocal",
        description: "The search for the ultimate voice. Western, Eastern, or Fusion - show us your range.",
        prize: "₹15,000",
        icon: Mic2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Battle of Bands",
        type: "Group",
        description: "The flagship event. 20 minutes to melt faces and win hearts.",
        prize: "₹45,000",
        icon: Users,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    {
        title: "Instrumental Wars",
        type: "Solo Instrumental",
        description: "Strings, keys, or beats. Let your instrument do the talking.",
        prize: "₹10,000",
        icon: Music,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    }
];

export default function NaadPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                             <Calendar className="w-4 h-4 text-indigo-400" />
                             <span className="text-sm font-mono uppercase tracking-widest text-zinc-300">Spring 2026</span>
                             <span className="w-1 h-1 rounded-full bg-zinc-600 mx-2" />
                             <MapPin className="w-4 h-4 text-indigo-400" />
                             <span className="text-sm font-mono uppercase tracking-widest text-zinc-300">BIT Mesra, Ranchi</span>
                        </div>

                        <h1 className="text-[12vw] leading-[0.8] font-black italic tracking-tighter mb-8 bg-linear-to-b from-white via-indigo-100 to-indigo-900 bg-clip-text text-transparent">
                            NAAD
                            <span className="text-[4vw] align-top ml-2 not-italic text-indigo-500 block md:inline-block md:mt-0 mt-4">&apos;26</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            The Festival of Frequencies. <br className="hidden md:block" />
                            Where 50+ Colleges compete for the ultimate sonic supremacy.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-wider rounded-full hover:scale-105 transition-transform shadow-xl shadow-indigo-900/20 w-full md:w-auto">
                                Register Your Team
                            </button>
                            <button className="px-10 py-5 border border-white/20 rounded-full font-mono uppercase tracking-widest hover:bg-white/5 transition-colors w-full md:w-auto">
                                Download Rulebook
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-24 border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Prize Pool", value: "₹1.5L+" },
                            { label: "Footfall", value: "5000+" },
                            { label: "Colleges", value: "50+" },
                            { label: "Events", value: "12+" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="text-4xl md:text-6xl font-black italic text-white mb-2">{stat.value}</h3>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                                The Arena
                            </h2>
                            <p className="text-zinc-400 max-w-md">
                                Three distinct battlegrounds designed to test every facet of musicality.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm uppercase tracking-widest">
                            <Trophy className="w-4 h-4" />
                            Total Prizes worth ₹1,50,000
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CATEGORIES.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={cn(
                                    "group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2",
                                    cat.border,
                                    "bg-zinc-900/50 hover:bg-zinc-900"
                                )}
                            >
                                <div className={cn("inline-flex p-4 rounded-2xl mb-8 transition-colors", cat.bg, cat.color)}>
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{cat.title}</h3>
                                <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs font-mono uppercase tracking-wide text-zinc-400 mb-6">
                                    {cat.type}
                                </div>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    {cat.description}
                                </p>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Winner Takes</p>
                                        <p className={cn("text-xl font-bold", cat.color)}>{cat.prize}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Footer CTA */}
             <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-8 opacity-20">
                        MAKE HISTORY
                    </h2>
                    <div className="-mt-12 md:-mt-20 relative z-20">
                        <h3 className="text-3xl md:text-5xl font-bold mb-8">
                            Registration Lines Open Soon
                        </h3>
                        <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
                            Join the waitlist to get notified when slots open. Limited entries for Battle of Bands.
                        </p>
                        
                        <form className="max-w-md mx-auto flex gap-2">
                            <input 
                                type="email" 
                                placeholder="band_leader@email.com" 
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-colors">
                                Notify Me
                            </button>
                        </form>
                    </div>
                </div>
             </section>

        </main>
    );
}
