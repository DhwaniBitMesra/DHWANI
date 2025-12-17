"use client";

import React from 'react';
import { AuroraBackground, BentoGrid, BentoGridItem } from '../ui/aurora-bento-grid';
import { Calendar, Music, Mic, Star } from 'lucide-react';

export const EventsSection = () => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <AuroraBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Upcoming Events
                </h2>

                <BentoGrid>
                    <BentoGridItem
                        className="md:col-span-4"
                        gradientFrom="from-purple-900/50"
                        gradientTo="to-blue-900/50"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="p-2 bg-white/10 w-fit rounded-lg mb-4">
                                <Music className="w-6 h-6 text-purple-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Bitotsav '25</h3>
                                <p className="text-gray-300">The biggest cultural fest of East India. Prepare for the Battle of Bands!</p>
                                <div className="mt-4 inline-flex items-center text-sm font-semibold text-purple-300">
                                    Feb 14-17 • Main Arena
                                </div>
                            </div>
                        </div>
                    </BentoGridItem>

                    <BentoGridItem
                        className="md:col-span-2"
                        gradientFrom="from-pink-900/50"
                        gradientTo="to-rose-900/50"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="p-2 bg-white/10 w-fit rounded-lg mb-4">
                                <Mic className="w-6 h-6 text-pink-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Mandra Mayhem</h3>
                                <p className="text-gray-300 text-sm">Distortions, Riffs and Beats.</p>
                                <div className="mt-4 text-sm font-semibold text-pink-300">
                                    25th Dec • CAT Hall
                                </div>
                            </div>
                        </div>
                    </BentoGridItem>

                    <BentoGridItem
                        className="md:col-span-2"
                        gradientFrom="from-blue-900/50"
                        gradientTo="to-cyan-900/50"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="p-2 bg-white/10 w-fit rounded-lg mb-4">
                                <Star className="w-6 h-6 text-blue-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Dhun</h3>
                                <p className="text-gray-300 text-sm">Solo Instrumental Competition.</p>
                                <div className="mt-4 text-sm font-semibold text-blue-300">
                                    Coming Soon
                                </div>
                            </div>
                        </div>
                    </BentoGridItem>

                    <BentoGridItem
                        className="md:col-span-4"
                        gradientFrom="from-indigo-900/50"
                        gradientTo="to-violet-900/50"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="p-2 bg-white/10 w-fit rounded-lg mb-4">
                                <Calendar className="w-6 h-6 text-indigo-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Weekly Jam Sessions</h3>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Whatever your musical taste, there&apos;s a place for you at Dhwani. Join us for our upcoming events and be part of the rhythm.
                                </p>
                                <div className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-300">
                                    Every Friday • Music Room
                                </div>
                            </div>
                        </div>
                    </BentoGridItem>
                </BentoGrid>
            </div>
        </div>
    );
};
