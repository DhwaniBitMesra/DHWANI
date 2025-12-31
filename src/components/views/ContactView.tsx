"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FanMail } from "@/components/sections/FanMail";

export function ContactView() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Top Section - Big Headline */}
            <section className="h-[50vh] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#222_1px,_transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[12vw] font-black leading-none tracking-tighter text-center uppercase mix-blend-overlay opacity-50 select-none"
                >
                    Reach Out
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 flex gap-12 text-sm font-mono text-neutral-500 uppercase tracking-widest"
                >
                    <div>Ranchi, India</div>
                    <div>EST. 1998</div>
                    <div>Available Worldwide</div>
                </motion.div>
            </section>

            {/* Reuse FanMail component specifically designed for contact */}
            <div className="pb-20">
                <FanMail />
            </div>

            {/* Extra Info Grid */}
            <section className="bg-white text-black py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase">Management</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                For press inquiries, brand partnerships, and official bookings, please contact our student body management details below.
                            </p>
                            <a href="mailto:mgmt@dhwani.club" className="inline-flex items-center gap-2 font-bold underline decoration-2 decoration-blue-500 hover:text-blue-600">
                                mgmt@dhwani.club <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase">Auditions</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We hold auditions twice a year (August & January). Keep an eye on our events page for the next open call.
                            </p>
                            <Link href="/events" className="inline-flex items-center gap-2 font-bold underline decoration-2 decoration-red-500 hover:text-red-600">
                                Check Audition Dates <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase">Visit Us</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Room 404, Activity Centre,<br />
                                Birla Institute of Technology, Mesra<br />
                                Ranchi, Jharkhand 835215
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 font-bold underline decoration-2 decoration-green-500 hover:text-green-600">
                                Get Directions <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
