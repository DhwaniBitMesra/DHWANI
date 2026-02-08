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
                        <div className="flex items-end gap-2 h-24 mb-4">
                            {[1, 2, 3, 4, 3, 2, 1].map((i, index) => (
                                <div 
                                    key={index}
                                    className={`w-3 bg-gradient-to-t from-blue-600 to-purple-400 rounded-full animate-music-bar-${i}`}
                                    style={{
                                        boxShadow: "0 0 20px rgba(120,60,255,0.5)",
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                />
                            ))}
                        </div>

                        {/* 2. Text */}
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white animate-pulse">
                                SOUNDCHECKING
                            </h2>
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30"></span>
                                <p className="text-xs font-mono text-blue-400/80 tracking-[0.3em] uppercase glow-text">
                                    Setting the stage
                                </p>
                                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30"></span>
                            </div>
                        </div>

                         {/* 3. Sponsor Section */}
                        <div className="mt-16 w-full relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-1000 group-hover:duration-200"></div>
                            
                            <div className="relative aspect-[3/1] rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6">
                                
                                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                                    Powering the Experience
                                </p>

                                {/* Placeholder Content */}
                                <div className="flex flex-col items-center justify-center gap-2 w-full h-full border border-dashed border-white/10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest animate-pulse">
                                        Partner Slot Available
                                    </span>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
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
