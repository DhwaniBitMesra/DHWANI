"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

export const ContactSection = () => {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative" id="contact">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Content & Info */}
                    <div className="space-y-12">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40"
                            >
                                Let&apos;s Make Some <br /> <span className="text-blue-500">Music</span> Together
                            </motion.h2>
                            <p className="text-gray-400 text-lg max-w-md">
                                Whether you&apos;re an artist looking to collaborate or just want to say hi, our doors are always open.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ContactInfoCard
                                icon={<Mail className="w-6 h-6" />}
                                title="Email Us"
                                value="dhwani@bitmesra.ac.in"
                                href="mailto:dhwani@bitmesra.ac.in"
                            />
                            <ContactInfoCard
                                icon={<MapPin className="w-6 h-6" />}
                                title="Visit Us"
                                value="Music Room, BIT Mesra, Ranchi"
                                href="https://maps.google.com"
                            />
                        </div>

                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/dhwani.bitmesra?igsh=cngyNTcwazV5cmRp" />
                            <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@dhwani-musicclubbitmesra4525?si=mcizwu9f5qDLVB3r" />
                            <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/dhwani-music-club-bit-mesra-56b63a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 relative shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[2.5rem] pointer-events-none"></div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-gray-600"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-gray-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-gray-600 resize-none"
                                    placeholder="What's on your mind?"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all text-white"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactInfoCard = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
        <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
            {icon}
        </div>
        <h4 className="text-sm text-gray-400 mb-1">{title}</h4>
        <p className="text-white font-medium">{value}</p>
    </a>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-blue-500 transition-all">
        {icon}
    </a>
);

