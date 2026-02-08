"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Disc } from "lucide-react";
import { useRef } from "react";

const CATEGORIES = [
    {
        id: 1,
        title: "Dhwani Icon",
        hindi: "ध्वनि आइकन",
        type: "Solo Vocal",
        description: "The ultimate search for the golden voice. Western, Eastern, or Fusion.",
        prize: "₹15,000",
        color: "text-blue-500",
        img: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Battle of Bands",
        hindi: "बैतेल् ओफ् बैन्द्स्",
        type: "Group",
        description: "20 minutes of pure adrenaline. The flagship showdown.",
        prize: "₹45,000",
        color: "text-red-500",
        img: "https://images.unsplash.com/photo-1459749411177-260f114c1c95?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Instrumental Wars",
        hindi: "इन्स्त्रुमेन्ताल्",
        type: "Solo Instrumental",
        description: "Let your instrument speak. Strings, percussion, or keys.",
        prize: "₹10,000",
        color: "text-yellow-500",
        img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function NaadPage() {
    return (
        <main className="bg-black text-white font-sans selection:bg-indigo-500/30">
            <Hero />
            <Manifesto />
            <HorizontalGallery />
            <Footer />
        </main>
    );
}

function Hero() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
             {/* Background Video/Image Placeholder */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2600')] bg-cover bg-center opacity-40 saturate-0 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

             <div className="relative z-10 text-center mix-blend-difference px-4">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 >
                     <h1 className="text-[20vw] font-black leading-none tracking-tighter font-(family-name:--font-gotu) text-white">
                        नाद
                     </h1>
                     <p className="text-xl md:text-3xl font-light tracking-widest uppercase mt-4">
                        Spring 2026
                     </p>
                 </motion.div>
             </div>

             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                     <Disc className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-mono uppercase text-zinc-400">
                     Scroll to Explore
                 </span>
             </div>
        </section>
    )
}

function Manifesto() {
    return (
        <section className="py-32 px-6 max-w-4xl mx-auto text-center relative z-20 bg-black">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-indigo-500" />
            <p className="text-3xl md:text-5xl font-light leading-tight text-zinc-300 mt-24">
                <span className="text-white font-bold italic">Music is not just sound.</span> It is the architecture of emotion. 
                At Naad '26, we don't just play instruments; we construct <span className="text-indigo-400">universes</span>.
            </p>
        </section>
    )
}

function HorizontalGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-6 md:p-20 relative overflow-hidden group border-r border-white/5 bg-black">
                           
                           {/* BG Content */}
                           <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" />
                           </div>

                           <div className="relative z-20 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 bg-black/50 backdrop-blur-md text-white`}>
                                        {cat.type}
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-black mb-2 leading-[0.9] text-white mix-blend-difference">
                                        {cat.title}
                                    </h2>
                                    <p className="text-4xl text-white/70 font-(family-name:--font-gotu) mb-8">
                                        {cat.hindi}
                                    </p>
                                    <p className="text-xl md:text-2xl text-zinc-200 max-w-md mb-12 drop-shadow-lg">
                                        {cat.description}
                                    </p>
                                    
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <p className="text-xs uppercase text-white/60 tracking-widest mb-1">Prize Pool</p>
                                            <p className={`text-4xl font-bold ${cat.color} drop-shadow-md`}>{cat.prize}</p>
                                        </div>
                                        <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-white/10">
                                            <ArrowUpRight className="w-8 h-8" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Decorative Number */}
                                <div className="hidden md:block text-right pointer-events-none select-none">
                                    <span className="text-[25rem] font-black text-white/5 leading-none font-serif italic">
                                        0{cat.id}
                                    </span>
                                </div>
                           </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


function Footer() {
    return (
        <section className="h-[80vh] bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),transparent_60%)] pointer-events-none" />
             <div className="relative z-10 max-w-4xl">
                 <h2 className="text-[15vw] md:text-[8rem] font-black font-(family-name:--font-gotu) leading-none mb-8 text-white mix-blend-overlay opacity-80">
                     कुरु निर्माणम्
                 </h2>
                 <p className="text-2xl md:text-4xl font-light text-zinc-400 mb-12 tracking-tight">
                     Create. Compete. Conquer.
                 </p>
                 <button className="px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform hover:bg-zinc-200 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
                     Join The Waitlist
                 </button>
             </div>
        </section>
    )
}
