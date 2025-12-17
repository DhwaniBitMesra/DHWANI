"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
    return (
        <section className="py-20 bg-black text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-400">Want to perform with us or just say hi? Drop us a message!</p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 ml-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                            placeholder="Tell us something..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};
