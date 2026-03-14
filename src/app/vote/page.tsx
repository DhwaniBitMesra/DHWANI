"use client";

import Script from "next/script";

export default function VotePage() {
    return (
        <main className="min-h-screen pt-20 relative overflow-hidden bg-black flex flex-col items-center">
            <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
            />
            
            <div className="w-full max-w-5xl px-4 flex-grow flex flex-col">
                <div className="text-center mb-10 mt-12">
                    <h1 className="text-6xl md:text-8xl font-gotu text-white mb-4 tracking-tighter">
                        VOTE <span className="text-white/20">NOW</span>
                    </h1>
                    <p className="text-white/40 font-mono tracking-widest text-sm uppercase">
                        Choose your favorite performance
                    </p>
                </div>

                <div className="relative flex-grow min-h-[700px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none group-hover:from-white/10 transition-all duration-500" />
                    
                    <iframe
                        data-tally-src="https://tally.so/r/zxeXo0?transparentBackground=1"
                        width="100%"
                        height="100%"
                        title="Karaoke Votes"
                        className="absolute inset-0 border-0"
                    />
                </div>
                
                <div className="py-12 text-center">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
                        Secured by Tally & Dhwani Auth
                    </p>
                </div>
            </div>
        </main>
    );
}
