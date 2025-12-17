"use client";

import React, { useState } from 'react';
import { ProfileCard } from '../ui/profile-card';
import { motion, AnimatePresence } from 'framer-motion';

const execMembers = [
    {
        name: "Apurv Dhwani",
        role: "President",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
        handle: "@apurv"
    },
    {
        name: "Sarah Music",
        role: "Vice President",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
        handle: "@sarah_m"
    },
    {
        name: "John Beat",
        role: "General Secretary",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
        handle: "@johnbeat"
    }
];

const members = [
    {
        name: "Mike Guitar",
        role: "Lead Guitarist",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
        handle: "@mike_g"
    },
    {
        name: "Elena Keys",
        role: "Keyboardist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
        handle: "@elenakeys"
    },
    {
        name: "David Drum",
        role: "Drummer",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2687&auto=format&fit=crop",
        handle: "@daviddrums"
    },
    {
        name: "Lisa Voice",
        role: "Vocalist",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2787&auto=format&fit=crop",
        handle: "@lisav"
    }
];

export const TeamSection = () => {
    const [activeTab, setActiveTab] = useState<'exe' | 'members'>('exe');

    return (
        <div className="w-full py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
                        Meet The Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The talented individuals behind the rhythm and soul of Dhwani.
                    </p>

                    <div className="flex justify-center mt-8 gap-4">
                        <button
                            onClick={() => setActiveTab('exe')}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'exe'
                                ? 'bg-white text-black font-bold'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            Executive Members
                        </button>
                        <button
                            onClick={() => setActiveTab('members')}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'members'
                                ? 'bg-white text-black font-bold'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            Members
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode='wait'>
                        {(activeTab === 'exe' ? execMembers : members).map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <ProfileCard {...member} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
