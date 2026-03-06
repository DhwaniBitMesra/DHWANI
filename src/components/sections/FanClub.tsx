'use client';

import { Instagram, Linkedin, Youtube, Music, Disc, Heart } from 'lucide-react';
import Link from 'next/link';

const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/dhwani.bitmesra?igsh=cngyNTcwazV5cmRp', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/dhwani-music-club-bit-mesra-56b63a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com/@dhwani-musicclubbitmesra4525?si=mcizwu9f5qDLVB3r', label: 'YouTube' },
];

const trackList = [
    { title: "Home", href: "/", time: "03:42" },
    { title: "News", href: "/news", time: "02:15" },
    // { title: "Events", href: "/events", time: "04:20" },
    { title: "Music", href: "/music", time: "03:10" },
    { title: "Team", href: "/team", time: "05:00" },
    { title: "Archive", href: "/archive", time: "02:45" },
];

export function FanClub() {
    return (
        <footer className="bg-neutral-950 text-white relative w-full pt-20 lg:pt-32 pb-8 lg:pb-10 overflow-hidden border-t border-white/5">
            {/* Vinyl Record Visual */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 rotate-12 pointer-events-none scale-75 lg:scale-100 origin-top-right">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
                    {/* Left: Brand & Newsletter */}
                    <div className="space-y-6 lg:space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0">
                                <Music className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold tracking-tight">DHWANI</h2>
                                <p className="text-white/40 text-xs lg:text-sm font-mono tracking-widest">EST. 1998 • RANCHI</p>
                            </div>
                        </div>

                        <p className="text-white/60 max-w-md text-base lg:text-lg leading-relaxed">
                            The rhythm of BIT Mesra. Where every note tells a story and every beat connects a community.
                        </p>

                        {/* Newsletter / "Fan Mail" */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-1 max-w-md flex items-center backdrop-blur-sm group focus-within:border-indigo-500/50 transition-colors">
                            <input
                                type="email"
                                placeholder="Join the Fan Club..."
                                className="bg-transparent border-none focus:ring-0 text-white placeholder-white/30 flex-1 px-3 lg:px-4 py-2 outline-none text-sm lg:text-base min-w-0"
                            />
                            <button className="bg-white text-black px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base font-medium hover:bg-neutral-200 transition-colors shrink-0">
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
                    <div className="relative mt-4 lg:mt-0">
                        <div className="absolute -inset-2 lg:-inset-4 bg-white/5 rounded-3xl -z-10 rotate-1" />
                        <div className="bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-5 sm:p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-4 lg:mb-6 border-b border-white/10 pb-4">
                                <h3 className="font-mono text-white/50 uppercase tracking-widest text-xs lg:text-sm">Side A: Navigation</h3>
                                <Disc className="w-4 h-4 lg:w-5 lg:h-5 text-white/50 animate-spin-slow" />
                            </div>
                            <ul className="space-y-2 lg:space-y-3">
                                {trackList.map((track, i) => (
                                    <li key={i} className="group flex items-center justify-between hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
                                        <Link href={track.href} className="flex items-center gap-3 lg:gap-4 flex-1">
                                            <span className="text-white/30 font-mono text-xs lg:text-sm group-hover:text-indigo-400 transition-colors">0{i + 1}</span>
                                            <span className="font-medium text-sm lg:text-base text-white/80 group-hover:text-white transition-colors">{track.title}</span>
                                        </Link>
                                        <span className="text-[10px] lg:text-xs font-mono text-white/30 border border-white/10 px-1.5 lg:px-2 py-0.5 rounded group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">{track.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-6 lg:pt-8 border-t border-white/10 text-xs lg:text-sm text-white/40 text-center md:text-left">
                    <p>© {new Date().getFullYear()} Dhwani Music Club. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <div className="flex items-center gap-1.5 text-white/20 w-full md:w-auto justify-center md:justify-start mt-2 md:mt-0">
                            Made with <Heart className="w-3 h-3 fill-current text-red-500/50" /> and Music by <a href='https://www.instagram.com/dhwani.bitmesra?igsh=cngyNTcwazV5cmRp' className="hover:text-white transition-colors">Dhwani</a>
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