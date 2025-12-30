'use client';

import { Instagram, Linkedin, Youtube, Music, Disc, Heart } from 'lucide-react';
import Link from 'next/link';

const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/dhwanibitmesra', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
];

const trackList = [
    { title: "Home", href: "/", time: "03:42" },
    { title: "News", href: "/news", time: "02:15" },
    { title: "Events", href: "/events", time: "04:20" },
    { title: "Music", href: "/music", time: "03:10" },
    { title: "Team", href: "/team", time: "05:00" },
    { title: "Gallery", href: "/gallery", time: "02:45" },
];

export function FanClub() {
    return (
        <footer className="bg-neutral-950 text-white relative w-full pt-32 pb-10 overflow-hidden border-t border-white/5">
            {/* Vinyl Record Visual */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 rotate-12 pointer-events-none">
                <div className="w-[800px] h-[800px] border-[40px] border-neutral-800 rounded-full flex items-center justify-center">
                    <div className="w-[700px] h-[700px] border-[2px] border-neutral-800 rounded-full" />
                    <div className="w-[600px] h-[600px] border-[2px] border-neutral-800 rounded-full" />
                    <div className="w-[300px] h-[300px] bg-neutral-900 rounded-full flex items-center justify-center">
                        {/* Small animated label */}
                        <div className="w-32 h-32 bg-indigo-600 rounded-full animate-spin-slow opacity-20" />
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Left: Brand & Newsletter */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                                <Music className="w-6 h-6 fill-current" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">DHWANI</h2>
                                <p className="text-white/40 text-sm font-mono tracking-widest">EST. 1998 • RANCHI</p>
                            </div>
                        </div>

                        <p className="text-white/60 max-w-md text-lg leading-relaxed">
                            The rhythm of BIT Mesra. Where every note tells a story and every beat connects a community.
                        </p>

                        {/* Newsletter / "Fan Mail" */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-1 max-w-md flex items-center backdrop-blur-sm group focus-within:border-indigo-500/50 transition-colors">
                            <input
                                type="email"
                                placeholder="Join the Fan Club..."
                                className="bg-transparent border-none focus:ring-0 text-white placeholder-white/30 flex-1 px-4 py-2 outline-none"
                            />
                            <button className="bg-white text-black px-6 py-2.5 rounded-xl font-medium hover:bg-neutral-200 transition-colors">
                                Subscribe
                            </button>
                        </div>

                        <div className="flex gap-4">
                            {socialIcons.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: "Tracklist" Links */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-white/5 rounded-3xl -z-10 rotate-1" />
                        <div className="bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-8">
                            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                <h3 className="font-mono text-white/50 uppercase tracking-widest text-sm">Side A: Navigation</h3>
                                <Disc className="w-5 h-5 text-white/50 animate-spin-slow" />
                            </div>
                            <ul className="space-y-3">
                                {trackList.map((track, i) => (
                                    <li key={i} className="group flex items-center justify-between hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                                        <Link href={track.href} className="flex items-center gap-4 flex-1">
                                            <span className="text-white/30 font-mono text-sm group-hover:text-indigo-400 transition-colors">0{i + 1}</span>
                                            <span className="font-medium text-white/80 group-hover:text-white transition-colors">{track.title}</span>
                                        </Link>
                                        <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-0.5 rounded group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">{track.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Dhwani Music Club. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <div className="flex items-center gap-1.5 text-white/20">
                            Made with <Heart className="w-3 h-3 fill-current text-red-500/50" /> and Music
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
        }
      `}</style>
        </footer>
    );
}
