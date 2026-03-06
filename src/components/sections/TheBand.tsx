"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Instagram, Linkedin, Github, Mail, Mic2, Guitar, Drum, Music, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TeamMember } from '@/components/mvpblocks/team-4'; // Importing type for compatibility

interface TheBandProps {
    teamMembers: TeamMember[];
}

const instruments = [Mic2, Guitar, Drum, Music, Volume2];

export function TheBand({ teamMembers }: TheBandProps) {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <section className="min-h-screen bg-neutral-950 py-32 px-4 md:px-8 relative overflow-hidden" id="team">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#333_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header: "The Lineup" */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block border-2 border-white px-6 py-2 mb-6 transform -rotate-2"
                    >
                        <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-white">Official Lineup '25</span>
                    </motion.div>
                    <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 uppercase tracking-tighter leading-[0.8]">
                        The Band
                    </h2>
                </div>

                {/* The Grid - "Festival Poster" Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, i) => {
                        const InstrumentIcon = instruments[i % instruments.length];

                        return (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedMember(member)}
                                className="group relative aspect-[3/4] cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-white/50 transition-colors duration-500 overflow-hidden"
                            >
                                {/* Member Image */}
                                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                </div>

                                {/* Overlay Info */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="p-1.5 bg-white text-black rounded-full">
                                                <InstrumentIcon size={12} />
                                            </div>
                                            <span className="text-xs font-mono uppercase tracking-widest text-white">{member.role}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white uppercase leading-none mb-1 group-hover:text-blue-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        {member.bio && (
                                            <p className="text-xs text-neutral-400 line-clamp-2 mt-2 font-mono opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                                {member.bio}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Decorative "Tape" */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-500/80 rotate-3 shadow-md group-hover:rotate-0 transition-transform duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Artist Pass Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedMember(null)}>
                        <motion.div
                            initial={{ y: 100, opacity: 0, rotate: 5 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 100, opacity: 0, rotate: 5 }}
                            className="bg-white text-black w-full max-w-2xl overflow-hidden shadow-2xl relative rotate-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Lanyard Hole */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full border-4 border-neutral-800 z-20"></div>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Photo Side */}
                                <div className="md:w-2/5 h-64 md:h-auto relative bg-neutral-900">
                                    <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover grayscale contrast-125" unoptimized />
                                    <div className="absolute bottom-4 left-4 right-4 bg-red-600 text-white text-center text-xs font-bold uppercase py-1 tracking-widest">
                                        All Access
                                    </div>
                                </div>

                                {/* Info Side */}
                                <div className="md:w-3/5 p-8 md:p-12 relative">
                                    <button
                                        className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors"
                                        onClick={() => setSelectedMember(null)}
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="mb-6">
                                        <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Artist Profile</div>
                                        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{selectedMember.name}</h2>
                                        <div className="text-lg font-bold text-red-600 mt-1 uppercase">{selectedMember.role}</div>
                                    </div>

                                    <p className="text-sm font-mono text-neutral-600 leading-relaxed mb-8">
                                        {selectedMember.bio || "No biography available. This artist speaks through their music."}
                                    </p>

                                    {/* Skills Pills */}
                                    {selectedMember.skills && (
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedMember.skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Socials */}
                                    <div className="flex gap-4 pt-6 border-t border-neutral-200">
                                        {selectedMember.socialMedia?.instagram && (
                                            <a href={selectedMember.socialMedia.instagram} target="_blank" className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
                                        )}
                                        {selectedMember.socialMedia?.linkedin && (
                                            <a href={selectedMember.socialMedia.linkedin} target="_blank" className="hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                                        )}
                                        {selectedMember.socialMedia?.email && (
                                            <a href={`mailto:${selectedMember.socialMedia.email}`} className="hover:scale-110 transition-transform"><Mail size={20} /></a>
                                        )}
                                    </div>

                                    {/* Barcode */}
                                    <div className="absolute bottom-4 right-8 opacity-50">
                                        <div className="h-8 flex gap-1 items-end">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="bg-black w-0.5" style={{ height: `${Math.random() * 100}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
