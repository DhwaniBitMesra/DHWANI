"use client";

import { VoiceChat } from "@/components/ui/audio-chat";
import MusicArtwork from "@/components/ui/music-artwork";

export function LoungeView() {
    return (
        <div className="relative z-10 block mb-24">
            <h1 className="text-4xl md:text-6xl font-black mb-4">The Lounge</h1>
            <p className="text-zinc-400 mb-16 max-w-xl">
                Chill, chat, and stream. The digital hangout for Dhwani members.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Voice Chat */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Live Channels</h2>
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>
                    <VoiceChat />
                </div>

                {/* Right: Music Player */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center">
                    <div className="mb-8 w-full">
                        <h2 className="text-2xl font-bold">Now Streaming</h2>
                    </div>
                    <div className="transform scale-110 my-8">
                        <MusicArtwork
                            artist="Dhwani Originals"
                            music="Jam Session #42"
                            albumArt="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"
                            isSong={true}
                        />
                    </div>
                    <div className="w-full mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                            Up Next: Acoustic Night (Live)
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
