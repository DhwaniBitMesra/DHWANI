"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Instagram, Youtube, Twitter } from "lucide-react";

export function FanMail() {
    return (
        <section className="py-24 bg-black relative" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info - Stylized as "Booking Info" */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                                Book the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experience.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                Whether you want to jam, collaborate, or book us for your next gig, here are our frequencies.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: Mail, label: "Booking Agent", val: "dhwani@bitmesra.ac.in" },
                                { icon: MapPin, label: "Studio Location", val: "Music Room, BIT Mesra" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-white font-medium text-lg">{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[Instagram, Youtube, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Form - Stylized as "Message Rider" */}
                    <div className="relative">
                        {/* Tape Effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-500/80 rotate-2 z-20 shadow-lg"></div>

                        <div className="bg-[#f0f0f0] text-black p-8 md:p-10 rounded-sm shadow-2xl rotate-1 max-w-lg mx-auto relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-red-400/30"></div>
                            <div className="absolute top-2 left-0 w-full h-2 bg-blue-400/30"></div>

                            <h3 className="font-mono text-2xl font-bold uppercase tracking-tighter mb-8 border-b-2 border-black pb-4 text-center">
                                Artist Inquiry Form
                            </h3>

                            <form className="space-y-6">
                                <div className="space-y-1">
                                    <label className="font-mono text-xs uppercase font-bold tracking-widest text-zinc-500">Artist Name</label>
                                    <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg" placeholder="Your Name" />
                                </div>

                                <div className="space-y-1">
                                    <label className="font-mono text-xs uppercase font-bold tracking-widest text-zinc-500">Frequency (Email)</label>
                                    <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg" placeholder="you@email.com" />
                                </div>

                                <div className="space-y-1">
                                    <label className="font-mono text-xs uppercase font-bold tracking-widest text-zinc-500">The Message</label>
                                    <textarea rows={4} className="w-full bg-transparent border-b-2 border-black/10 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg resize-none" placeholder="Let's make magic..."></textarea>
                                </div>

                                <button className="w-full py-4 bg-black text-white font-mono uppercase tracking-widest font-bold hover:bg-zinc-800 transition-colours flex items-center justify-center gap-2 mt-8 group">
                                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <div className="font-handwriting text-2xl rotate-[-4deg] text-indigo-600 opacity-80" style={{ fontFamily: 'cursive' }}>
                                    Can't wait to hear from you!
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
