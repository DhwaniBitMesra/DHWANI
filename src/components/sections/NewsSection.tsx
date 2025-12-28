"use client";

import React from 'react';
import { AuroraBackground, BentoGrid, BentoGridItem } from '../ui/aurora-bento-grid';
import { Calendar, ArrowRight, Bell, Award, Speaker } from 'lucide-react';

const newsItems = [
    {
        title: "Dhwani Wins 'Best Band' at Bitotsav '24",
        date: "Feb 18, 2024",
        excerpt: "Our team secured the first position in the Battle of Bands, mesmerizing the judges with an original composition.",
        category: "Achievement",
        icon: Award,
        span: "md:col-span-4",
        gradientFrom: "from-blue-900/50",
        gradientTo: "to-cyan-900/50"
    },
    {
        title: "New Album 'Echoes' Release Date Announced",
        date: "Mar 10, 2024",
        excerpt: "We are thrilled to announce that our debut album 'Echoes' will be available on all streaming platforms soon.",
        category: "Announcement",
        icon: Speaker,
        span: "md:col-span-2",
        gradientFrom: "from-purple-900/50",
        gradientTo: "to-pink-900/50"
    },
    {
        title: "Auditions for Class of 2028",
        date: "Aug 05, 2024",
        excerpt: "Calling all musical talents! Auditions for the new batch will commence from next week at the Music Room.",
        category: "Recruitment",
        icon: Bell,
        span: "md:col-span-6",
        gradientFrom: "from-amber-900/50",
        gradientTo: "to-orange-900/50"
    }
];

export const NewsSection = () => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <AuroraBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div className="text-center w-full">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                            Latest News
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Updates, achievements, and announcements from the club.
                        </p>
                    </div>
                </div>

                <BentoGrid>
                    {newsItems.map((item, idx) => (
                        <BentoGridItem
                            key={idx}
                            className={item.span}
                            gradientFrom={item.gradientFrom}
                            gradientTo={item.gradientTo}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-white/10 w-fit rounded-lg">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs bg-black/30 px-2 py-1 rounded-full">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {item.date}
                                    </div>
                                </div>

                                <div>
                                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] uppercase tracking-wider font-bold rounded mb-2 inline-block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-gray-300 text-sm mb-6">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center text-white/70 text-sm font-semibold group-hover:text-white transition-colors cursor-pointer group/link">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </BentoGridItem>
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
};
