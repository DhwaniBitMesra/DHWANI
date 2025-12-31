"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Disc, Rewind, FastForward } from 'lucide-react';

interface MusicTrack {
    title: string;
    embedUrl: string;
    description?: string;
}

export const MusicSection = ({ musicTracks = [] }: { musicTracks?: MusicTrack[] }) => {
    const tracksToDisplay = musicTracks.length > 0 ? musicTracks : [
        {
            title: "Dhwani Soundcloud Playlist",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1207990405&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            description: "Dhwani - Music Club, BIT Mesra"
        }
    ];

    return (
        <section className="py-32 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-orange-500 font-mono tracking-[0.2em] text-sm uppercase mb-2 block">Analog Soul</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Mixtape</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto text-lg">
                        Lo-fi beats, jam sessions, and studio recordings. Directly from the Dhwani vault.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Cassette Visual (Decorative) */}
                    <div className="relative group perspective-1000">
                        <div className="w-full aspect-[1.6] bg-neutral-800 rounded-3xl border-4 border-neutral-700 shadow-2xl relative overflow-hidden transform transition-transform group-hover:rotate-1 duration-500">
                            {/* Cassette Label */}
                            <div className="absolute top-4 left-4 right-4 bottom-4 bg-orange-100 rounded-xl p-4 flex flex-col items-center justify-center border-2 border-neutral-300">
                                <div className="w-full h-8 bg-neutral-800 rounded mb-4" /> {/* Top bar */}

                                <div className="w-full flex justify-between gap-4 mb-2">
                                    {/* Left Reel */}
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-neutral-300 flex items-center justify-center animate-spin-slow">
                                        <div className="w-20 h-20 border-[6px] border-dashed border-neutral-400 rounded-full" />
                                        <div className="absolute w-3 h-3 bg-neutral-800 rounded-full" />
                                    </div>

                                    {/* Window */}
                                    <div className="flex-1 bg-transparent border-2 border-neutral-300 rounded mx-2 self-center h-12 flex items-center justify-center">
                                        <div className="w-full h-1 bg-neutral-800/20" />
                                    </div>

                                    {/* Right Reel */}
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-neutral-300 flex items-center justify-center animate-spin-slow">
                                        <div className="w-20 h-20 border-[6px] border-dashed border-neutral-400 rounded-full" />
                                        <div className="absolute w-3 h-3 bg-neutral-800 rounded-full" />
                                    </div>
                                </div>

                                <div className="mt-4 font-handwriting text-neutral-800 text-3xl rotate-[-2deg]">
                                    Dhwani Vol. 1
                                </div>
                                <div className="text-[10px] font-mono text-neutral-400 mt-2">TYPE I [NORMAL] POSITION</div>
                            </div>

                            {/* Screws */}
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-neutral-400 flex items-center justify-center"><div className="w-2 h-[1px] bg-neutral-600 rotate-45" /></div>
                            <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-neutral-400 flex items-center justify-center"><div className="w-2 h-[1px] bg-neutral-600 rotate-12" /></div>
                            <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-neutral-400 flex items-center justify-center"><div className="w-2 h-[1px] bg-neutral-600 rotate-90" /></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-neutral-400 flex items-center justify-center"><div className="w-2 h-[1px] bg-neutral-600 rotate-45" /></div>
                        </div>
                    </div>

                    {/* Embed Player */}
                    <div className="space-y-6">
                        {tracksToDisplay.map((track, idx) => (
                            <div key={idx} className="bg-neutral-900 border border-white/10 rounded-2xl p-2 shadow-2xl">
                                <iframe
                                    width="100%"
                                    height="300" // Reduced height for better fit
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src={track.embedUrl}
                                    className="rounded-xl w-full"
                                    title={track.title}
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .font-handwriting { font-family: 'Brush Script MT', cursive; }
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }
            `}</style>
        </section>
    );
};
