
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Radio } from "lucide-react";
import Link from 'next/link';
import { VoiceChat } from "../ui/audio-chat";
import MusicArtwork from "../ui/music-artwork";

// Aurora Background Component
const AuroraBackground = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg overflow-hidden ${className || ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a855f7_15%,#9333ea_20%,#3b82f6_25%,#60a5fa_30%)]
                [background-image:var(--white-gradient),var(--aurora)]
                dark:[background-image:var(--dark-gradient),var(--aurora)]
                [background-size:300%,_200%]
                [background-position:50%_50%,_50%_50%]
                filter blur-[10px] invert dark:invert-0
                after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                after:[background-size:200%,_100%] 
                after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                pointer-events-none
                absolute -inset-[10px] opacity-50 will-change-transform
            `}
        ></div>
      </div>
      {children}
    </div>
  );
};


export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: ev.clientX - rect.left, y: ev.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);


  return (
    <div ref={containerRef} className="relative flex flex-col items-center pt-20 min-h-screen bg-black text-slate-950 transition-bg overflow-hidden dark:bg-slate-950 dark:text-slate-100">
      {/* Background & Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 lg:opacity-100 mix-blend-soft-light"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,100,255,0.15), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <AuroraBackground className="opacity-30">
          <div />
        </AuroraBackground>
      </div>


      {/* Main Content Payload */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20"
      >

        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Bit Mesra • Est. 1998</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white"
          >
            Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Noise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            The official music society where sound meets soul.
            Jam, perform, and create history with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2">
              Join the Club <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#legacy" className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
              Explore Events
            </Link>
          </motion.div>
        </div>

        {/* Featured Dashboard - Glass Morphism Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-5xl"
        >
          {/* Left: Community Voice */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col items-center justify-center min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-2 mb-6 opacity-70">
              <Radio className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Live Lounge</span>
            </div>

            <div className="w-full transform transition-transform duration-500 hover:scale-[1.02]">
              <VoiceChat />
            </div>
          </div>

          {/* Right: Featured Music */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col items-center justify-center min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-2 mb-6 opacity-70">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Now Streaming</span>
            </div>

            <div className="transform scale-90 sm:scale-100 transition-transform duration-500 hover:scale-105">
              <MusicArtwork
                artist="Campus Beats"
                music="Dhwani Originals Vol. 1"
                albumArt="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"
                isSong={false}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
