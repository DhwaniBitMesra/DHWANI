"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
    {
        title: "Dhwani Wins 'Best Band' at Bitotsav '24",
        date: "Feb 18, 2024",
        excerpt: "Our team secured the first position in the Battle of Bands, mesmerizing the judges with an original composition.",
        category: "Achievement"
    },
    {
        title: "New Album 'Echoes' Release Date Announced",
        date: "Mar 10, 2024",
        excerpt: "We are thrilled to announce that our debut album 'Echoes' will be available on all streaming platforms soon.",
        category: "Announcement"
    },
    {
        title: "Auditions for Class of 2028",
        date: "Aug 05, 2024",
        excerpt: "Calling all musical talents! Auditions for the new batch will commence from next week at the Music Room.",
        category: "Recruitment"
    }
];

export const NewsSection = () => {
    return (
        <section className="py-20 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Latest News</h2>
                        <p className="text-gray-400">Updates, achievements, and announcements from the club.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                                    {item.category}
                                </span>
                                <div className="flex items-center text-gray-500 text-xs">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {item.date}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {item.excerpt}
                            </p>
                            <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
