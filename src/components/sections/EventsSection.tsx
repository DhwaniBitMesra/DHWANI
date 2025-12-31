"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { Calendar, Music, Mic, Star, MapPin } from 'lucide-react';

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
    location?: string;
    gradientFrom: string;
    gradientTo: string;
    span: string; // Kept for compatibility but unused in timeline
};

export const EventsSection = ({ events = [] }: { events?: EventItem[] }) => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter uppercase">
                    Tour <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Dates</span>
                </h2>

                <div className="relative">
                    {/* The Guitar String */}
                    <GuitarString />

                    {/* Events List */}
                    <div className="space-y-24">
                        {events.map((event, idx) => (
                            <TimelineEvent key={idx} event={event} index={idx} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_50%)]" />
        </div>
    );
};

const GuitarString = () => {
    // A simplified visual string that runs down the center
    return (
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 z-0 hidden md:block">
            {/* The core string */}
            <div className="w-0.5 h-full bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 mx-auto" />
            {/* The vibration effect container - simplified for performance */}
            <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-amber-500/20 blur-[1px]" />
        </div>
    );
}

const TimelineEvent = ({ event, index }: { event: EventItem, index: number }) => {
    const isLeft = index % 2 === 0;
    const Icon = iconMap[event.iconName] || Calendar;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Content Side */}
            <div className="flex-1 w-full md:w-auto text-left md:text-right">
                <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/50 transition-colors group ${!isLeft ? 'md:text-left' : ''}`}>
                    <div className={`flex items-center gap-4 mb-4 ${!isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <span className="px-3 py-1 rounded-full text-xs font-mono border border-white/20 text-white/60 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-colors">
                            {event.category}
                        </span>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{event.title}</h3>
                    <p className="text-white/60 mb-4">{event.description}</p>

                    {event.location && (
                        <div className={`flex items-center gap-2 text-sm text-white/40 ${!isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                            <MapPin className="w-3 h-3" />
                            {event.location}
                        </div>
                    )}
                </div>
            </div>

            {/* Fret/Node Marker (Center) */}
            <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border-2 border-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <Icon className="w-6 h-6 text-amber-500" />
                </div>
            </div>

            {/* Empty Space for Balance */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
};
