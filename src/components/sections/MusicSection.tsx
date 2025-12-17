"use client";

import React from 'react';
import {
    AudioPlayerProvider,
    AudioPlayerButton,
    AudioPlayerProgress,
    AudioPlayerTime,
    AudioPlayerDuration,
    exampleTracks
} from '../ui/audio-player';
import { SkipForward, SkipBack } from 'lucide-react';

const tracks = exampleTracks.map(track => ({
    ...track,
    src: track.url
}));

export const MusicSection = () => {
    return (
        <section className="py-20 bg-zinc-900 text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                        Original Compositions
                    </h2>
                    <p className="text-gray-400">
                        Listen to the soul-stirring melodies composed by our very own members.
                    </p>
                </div>

                <AudioPlayerProvider>
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Artwork Placeholder */}
                            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Player Controls */}
                            <div className="w-full md:w-2/3 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Dhwani Mixtape Vol. 1</h3>
                                    <p className="text-gray-400 text-sm">Various Artists</p>
                                </div>

                                <div className="space-y-4">
                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <AudioPlayerProgress className="h-2 bg-white/10 rounded-full" />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono">
                                            <AudioPlayerTime />
                                            <AudioPlayerDuration />
                                        </div>
                                    </div>

                                    {/* Playback Controls */}
                                    <div className="flex items-center justify-center gap-6">
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <SkipBack className="w-6 h-6" />
                                        </button>

                                        {/* Main Play Button - using the first track for demo */}
                                        <AudioPlayerButton
                                            item={tracks[0]}
                                            className="w-16 h-16 rounded-full bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105 flex items-center justify-center"
                                        />

                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <SkipForward className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                {/* Track List (Simple) */}
                                <div className="space-y-2 h-48 overflow-y-auto pr-2 custom-scrollbar">
                                    {tracks.map((track) => (
                                        <div key={track.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <AudioPlayerButton
                                                    item={track}
                                                    className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center scale-90"
                                                />
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-200 group-hover:text-green-400 transition-colors">{track.name}</div>
                                                    <div className="text-xs text-gray-500">Artist Name</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-600 font-mono">3:45</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AudioPlayerProvider>
            </div>
        </section>
    );
};
