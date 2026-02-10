'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Music4 } from 'lucide-react';
import { useUser, UserButton } from "@stackframe/stack";

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    // { name: 'Events', path: '/events' },
    // { name: 'Charts', path: '/bands' },
    { name: 'Music', path: '/music' },
    // { name: 'Team', path: '/team' },
    // { name: 'Archive', path: '/archive' },
    { name: 'NAAD', path: '/naad' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const user = useUser();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] flex justify-center py-4 px-4 transition-all duration-500 pointer-events-none", // pointer-events-none to let clicks pass through empty space
                    scrolled ? "pt-4" : "pt-8"
                )}
            >
                {/* The "Mixer" Bar */}
                <div
                    className={cn(
                        "relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border pointer-events-auto", // pointer-events-auto to capture clicks on nav
                        scrolled
                            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl w-full max-w-4xl"
                            : "bg-transparent border-transparent w-full max-w-7xl"
                    )}
                >
                    {/* Logo: Frequency Visualizer */}
                    <Link href="/" className="group flex items-center gap-3 relative z-10">
                        <div className="flex items-end gap-[2px] h-6 cursor-pointer">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-white rounded-t-sm animate-[music-bar_1s_ease-in-out_infinite]"
                                    style={{
                                        animationDelay: `${i * 0.1}s`,
                                        height: '100%'
                                    }}
                                />
                            ))}
                        </div>
                        <span className="font-black italic tracking-tighter text-xl group-hover:text-blue-400 transition-colors">DHWANI</span>
                    </Link>

                    {/* Desktop Mixer Channels */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="relative group flex flex-col items-center gap-1"
                                >
                                    {/* "Leve Meter" Dot */}
                                    <div className={cn(
                                        "w-1 h-1 rounded-full transition-all duration-300",
                                        isActive ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" : "bg-neutral-700 group-hover:bg-white"
                                    )}></div>

                                    <span className={cn(
                                        "text-xs font-mono uppercase tracking-widest transition-colors",
                                        isActive ? "text-white font-bold" : "text-neutral-400 group-hover:text-white"
                                    )}>
                                        {item.name}
                                    </span>

                                    {/* Hover Fader BG */}
                                    <div className={cn(
                                        "absolute -inset-x-3 -inset-y-2 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity",
                                        isActive && "opacity-100 bg-white/10"
                                    )}></div>
                                </Link>
                            );
                        })}
                        {/* ENTER Action Button or User Profile */}
                        {user ? (
                            <div className="ml-4 flex items-center gap-4">
                                <Link href="/account" className="hidden lg:block text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                                    My ID
                                </Link>
                                <UserButton />
                            </div>
                        ) : (
                            <Link
                                href="/enter"
                                className="relative group flex flex-col items-center gap-1 ml-4"
                            >
                                <div className={cn(
                                    "w-1 h-1 rounded-full transition-all duration-300 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                                )}></div>
                                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                                    Enter
                                </span>
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden p-2 text-white hover:text-blue-400 transition-colors pointer-events-auto"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile "Studio Overlay" Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center overflow-hidden"
                    >
                        {/* Background Visuals */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors z-20"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative z-10 w-full max-w-md px-8">
                            <div className="flex items-center gap-2 mb-12 opacity-50 justify-center">
                                <Music4 className="w-5 h-5" />
                                <span className="text-xs font-mono uppercase tracking-widest">Select Channel</span>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="group flex items-center justify-between py-2 border-b border-white/10 hover:border-white/50 transition-colors"
                                        >
                                            <span className={cn(
                                                "text-4xl font-black uppercase tracking-tighter italic transition-all group-hover:pl-4",
                                                pathname === item.path ? "text-blue-500" : "text-white"
                                            )}>
                                                {item.name}
                                            </span>
                                            <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                                                CH 0{i + 1}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                >
                                    {user ? (
                                        <div className="flex flex-col gap-2">
                                            <Link
                                                href="/account"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="group w-full flex items-center justify-between py-2 border-b border-white/10 hover:border-white/50 transition-colors"
                                            >
                                                <span className="text-4xl font-black uppercase tracking-tighter italic text-blue-500 transition-all group-hover:pl-4">
                                                    MY ID
                                                </span>
                                                <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                                                    ACCOUNT
                                                </span>
                                            </Link>
                                            <div className="group w-full flex items-center justify-between py-2 border-b border-white/10 hover:border-white/50 transition-colors pointer-events-auto">
                                                 <span className="text-xl font-bold uppercase tracking-tighter italic text-white/50 transition-all group-hover:pl-4">
                                                    SETTINGS
                                                </span>
                                                <UserButton />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href="/enter"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="group w-full flex items-center justify-between py-2 border-b border-white/10 hover:border-white/50 transition-colors"
                                        >
                                            <span className="text-4xl font-black uppercase tracking-tighter italic text-red-500 transition-all group-hover:pl-4">
                                                ENTER
                                            </span>
                                            <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                                                AUTH
                                            </span>
                                        </Link>
                                    )}
                                </motion.div>
                            </nav>

                            <div className="mt-12 text-center">
                                <p className="text-neutral-600 text-xs font-mono">
                                    © 2025 DHWANI MUSIC CLUB<br />
                                    EST. 1998
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes music-bar {
                    0%, 100% { height: 30%; }
                    50% { height: 100%; }
                }
            `}</style>
        </>
    );
}
