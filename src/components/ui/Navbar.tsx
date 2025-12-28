'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-50 px-4 backdrop-blur-3xl bg-black/50 py-4 flex justify-between items-center border-b border-white/10"
            >
                <div className="flex items-center max-w-7xl mx-auto w-full justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="white" strokeWidth="2" />
                            </svg>
                            <span className="hidden sm:inline">DHWANI</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6 ml-8">
                            <Link href="/#hero" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
                            <Link href="/news" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">News</Link>
                            <Link href="/events" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Events</Link>
                            <Link href="/music" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Music</Link>
                            <Link href="/team" className="px-4 py-2 text-sm text-white font-medium transition-colors">Team</Link>
                            <Link href="/gallery" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Gallery</Link>
                            <Link href="/#contact" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="md:hidden p-2 rounded-md focus:outline-none text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
                        <button
                            className="absolute top-6 right-6 p-2 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link href="/" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/news" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>News</Link>
                        <Link href="/events" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                        <Link href="/music" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Music</Link>
                        <Link href="/team" className="px-6 py-3 text-white font-bold" onClick={() => setMobileMenuOpen(false)}>Team</Link>
                        <Link href="/gallery" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                        <Link href="/#contact" className="px-6 py-3 text-white" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </div>
                </motion.div>
            )}
        </>
    );
}
