"use client";

import React from 'react';
import { AuroraBackground, BentoGrid, BentoGridItem } from '../ui/aurora-bento-grid';
import { Calendar, Music, Mic, Star } from 'lucide-react';


const iconMap: Record<string, React.ElementType> = {
    Music,
    Mic,
    Star,
    Calendar
};

export type EventItem = {
    title: string;
    description: string;
    date: string;
    category: string;
    iconName: string;
    gradientFrom: string;
    gradientTo: string;
    span: string;
};

export const EventsSection = ({ events = [] }: { events?: EventItem[] }) => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <AuroraBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Upcoming Events
                </h2>

                <BentoGrid>
                    {events.map((event, idx) => {
                        const Icon = iconMap[event.iconName] || Calendar;
                        return (
                            <BentoGridItem
                                key={idx}
                                className={event.span}
                                gradientFrom={event.gradientFrom}
                                gradientTo={event.gradientTo}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="p-2 bg-white/10 w-fit rounded-lg mb-4">
                                        <Icon className="w-6 h-6 text-purple-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                        <p className="text-gray-300">{event.description}</p>
                                        <div className="mt-4 inline-flex items-center text-sm font-semibold text-purple-300">
                                            {event.date}
                                        </div>
                                    </div>
                                </div>
                            </BentoGridItem>
                        );
                    })}
                </BentoGrid>
            </div>
        </div>
    );
};

