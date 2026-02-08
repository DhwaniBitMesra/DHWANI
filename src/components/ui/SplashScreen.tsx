"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Force splash screen to show for at least 4 seconds, even on fast loads
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white overflow-hidden pointer-events-none"
                >
                    {/* Background Atmosphere */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black opacity-80" />

                    <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-md px-6">
                        
                        {/* 1. Visualizer Animation */}
                        <div className="flex items-end gap-1.5 h-20">
                            <div className="w-3 bg-white/90 rounded-full animate-music-bar-1" />
                            <div className="w-3 bg-white/90 rounded-full animate-music-bar-2" />
                            <div className="w-3 bg-white/90 rounded-full animate-music-bar-3" />
                            <div className="w-3 bg-white/90 rounded-full animate-music-bar-4" />
                            <div className="w-3 bg-white/90 rounded-full animate-music-bar-2" />
                        </div>

                        {/* 2. Text */}
                        <div className="flex flex-col items-center gap-3 text-center">
                            <h2 className="text-2xl font-bold tracking-[0.2em] text-white/90 uppercase font-gotu">
                                Soundchecking
                            </h2>
                            <p className="text-sm font-mono text-white/40 animate-pulse tracking-widest">
                                Setting the stage...
                            </p>
                        </div>

                         {/* 3. Sponsor Section */}
                        <div className="mt-12 w-full">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 text-center mb-4">
                                Sponsored By
                            </p>
                            
                            {/* Glassmorphism Sponsor Card */}
                            <div className="relative group w-full aspect-[3/1] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                
                                {/* Placeholder Content */}
                                <div className="flex flex-col items-center animate-pulse">
                                    <div className="w-32 h-8 bg-white/10 rounded mb-2" /> 
                                    <span className="text-xs font-mono text-white/20 uppercase tracking-widest">
                                        Your Brand Here
                                    </span>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                            </div>
                        </div>

                    </div>

                    {/* CSS styles for keyframes (scoped to avoid global pollution if needed, but safe here) */}
                    <style jsx>{`
                        @keyframes music-bar-1 { 0%, 100% { height: 20%; opacity: 0.3; } 50% { height: 80%; opacity: 1; } }
                        @keyframes music-bar-2 { 0%, 100% { height: 30%; opacity: 0.3; } 50% { height: 60%; opacity: 1; } }
                        @keyframes music-bar-3 { 0%, 100% { height: 40%; opacity: 0.3; } 50% { height: 100%; opacity: 1; } }
                        @keyframes music-bar-4 { 0%, 100% { height: 25%; opacity: 0.3; } 50% { height: 75%; opacity: 1; } }

                        .animate-music-bar-1 { animation: music-bar-1 0.8s ease-in-out infinite; }
                        .animate-music-bar-2 { animation: music-bar-2 0.9s ease-in-out infinite 0.1s; }
                        .animate-music-bar-3 { animation: music-bar-3 1.1s ease-in-out infinite 0.2s; }
                        .animate-music-bar-4 { animation: music-bar-4 0.7s ease-in-out infinite 0.3s; }

                         @keyframes shimmer {
                            100% { transform: translateX(100%); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
