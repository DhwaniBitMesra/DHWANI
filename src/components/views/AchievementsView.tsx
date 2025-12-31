"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Trophy, Star, Crown, Award } from "lucide-react";

// Mock Data for Achievements
const awards = [
    {
        id: 1,
        title: "Best Band - Spring Fest '24",
        recipient: "The Riot",
        year: "2024",
        category: "Gold Record",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Battle of Bands Champions",
        recipient: "Iron Raga",
        year: "2023",
        category: "Platinum Record",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Best Vocalist - Mood Indigo",
        recipient: "Sreya G.",
        year: "2022",
        category: "Spotlight Award",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Album of the Year",
        recipient: "Dhwani Originals Vol. 1",
        year: "2025",
        category: "Diamond Certification",
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"
    }
];

function GoldRecord({ item, index }: { item: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group w-full aspect-square"
        >
            {/* Frame */}
            <div className="absolute inset-0 bg-neutral-900 border-8 border-neutral-800 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Matting */}
                <div className="absolute inset-4 bg-neutral-950 rounded-sm"></div>

                {/* The Record */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-black shadow-xl flex items-center justify-center animate-spin-slow group-hover:animate-none transition-all">
                    {/* Grooves */}
                    <div className="absolute inset-0 rounded-full border-[12px] border-neutral-800 opacity-50"></div>

                    {/* Gold Plating */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-yellow-700 via-yellow-300 to-yellow-600 opacity-80 mix-blend-overlay"></div>
                    <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(#333_0px,_#000_2px,_#333_4px)] opacity-30"></div>

                    {/* Label */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-600 z-10 bg-red-600">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                </div>

                {/* Plaque */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 w-48 h-16 rounded-sm shadow-lg flex flex-col items-center justify-center text-center p-2 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="w-[95%] h-[90%] border border-black/20 flex flex-col items-center justify-center">
                        <h3 className="text-black font-serif font-black uppercase text-[10px] tracking-widest mb-0.5">{item.category}</h3>
                        <p className="text-black/80 font-bold text-xs leading-none mb-0.5">{item.recipient}</p>
                        <p className="text-black/60 font-mono text-[8px] uppercase">{item.title}</p>
                    </div>
                </div>
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-lg z-20"></div>
        </motion.div>
    );
}

export function AchievementsView() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#080808] text-white selection:bg-yellow-500/30 overflow-hidden">

            {/* Hero: Wall of Fame */}
            <section className="relative pt-40 pb-20 px-4 md:px-8">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                <div className="max-w-[1600px] mx-auto text-center mb-24 relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                        <Crown className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-mono uppercase tracking-widest text-yellow-500/80">Hall of Fame</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-2xl">
                        Gold <br /> Standard
                    </h1>
                </div>

                {/* Grid of Records */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto px-4 z-10 relative">
                    {awards.map((item, i) => (
                        <GoldRecord key={item.id} item={item} index={i} />
                    ))}
                </div>
            </section>

            {/* The Trophy Case */}
            <section className="py-32 px-4 relative bg-gradient-to-b from-[#080808] to-neutral-950">
                <div className="max-w-5xl mx-auto border-t border-white/10 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
                                <Trophy className="w-8 h-8 text-yellow-500" /> Trophy Cabinet
                            </h2>
                            <p className="text-neutral-500">Collected victories from across the nation.</p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-5xl font-black text-white/10">35+</div>
                            <div className="text-xs font-mono uppercase text-neutral-600">Awards Won</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { year: "2024", event: "IIT Kharagpur Spring Fest", award: "1st Place - Western Group Song", icon: Award },
                            { year: "2023", event: "IIT Bombay Mood Indigo", award: "2nd Place - Battle of Bands", icon: Star },
                            { year: "2022", event: "Bitotsav Home Ground", award: "Best Overall Music Society", icon: Crown },
                        ].map((trophy, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-xl hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-colors group"
                            >
                                <div className="text-2xl font-black text-white/20 font-mono group-hover:text-yellow-500/50 transition-colors">{trophy.year}</div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white group-hover:text-yellow-400 transition-colors">{trophy.award}</h3>
                                    <p className="text-sm text-neutral-400">{trophy.event}</p>
                                </div>
                                <trophy.icon className="w-6 h-6 text-neutral-700 group-hover:text-yellow-500 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx global>{`
           @keyframes spin-slow {
               0% { transform: rotate(0deg); }
               100% { transform: rotate(360deg); }
           }
           .animate-spin-slow {
               animation: spin-slow 8s linear infinite;
           }
        `}</style>
        </main>
    );
}
