"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Instagram, Youtube, Twitter } from "lucide-react";

export function FanMail() {
    return (
        <section className="py-24 bg-black relative" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info - Stylized as "Flight Case Stickers" */}
                    <div className="space-y-12 relative">
                        {/* Background scribbles/texture */}
                        <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="relative">
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.8]">
                                LOUD <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">&</span> CLEAR
                            </h2>
                            <p className="mt-6 text-zinc-400 font-mono text-sm max-w-xs border-l-2 border-white/20 pl-4">
                                // SIGNAL_FLOW: ON<br />
                                WE ARE LISTENING directly to the underground. Reach out.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            {/* Booking "Sticker" */}
                            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-fit">
                                <div className="bg-[#facc15] text-black p-4 px-6 shadow-xl relative overflow-hidden group cursor-pointer inline-block">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-black/10 -mr-4 -mt-4 transform rotate-45"></div>
                                    <div className="flex items-center gap-4">
                                        <div className="border-2 border-black rounded-full p-2">
                                            <Mail className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Booking Agent</div>
                                            <div className="text-xl font-bold font-mono">dhwani@bitmesra.ac.in</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location "Tag" */}
                            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 w-fit ml-8">
                                <div className="bg-white text-black p-4 px-6 shadow-xl border-l-[6px] border-red-600 relative overflow-hidden group cursor-pointer inline-block">
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-red-600" />
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Base of Ops</div>
                                            <div className="text-lg font-bold">Music Room, BIT Mesra</div>
                                        </div>
                                    </div>
                                    {/* "Tape" visual */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Social "Pick" Stickers */}
                        <div className="flex gap-4 pt-4 pl-4">
                            {[
                                { Icon: Instagram, color: "bg-pink-500", rotate: "rotate-6" },
                                { Icon: Youtube, color: "bg-red-600", rotate: "-rotate-12" },
                                { Icon: Twitter, color: "bg-blue-400", rotate: "rotate-3" }
                            ].map((item, i) => (
                                <a key={i} href="#" className={`w-14 h-14 ${item.color} shadow-lg flex items-center justify-center text-white transform ${item.rotate} hover:rotate-0 hover:scale-110 transition-all duration-300 border-2 border-white/20`}>
                                    <item.Icon className="w-6 h-6 fill-current" />
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
