"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Calendar, MapPin, Ticket, ArrowUpRight } from "lucide-react";

const events = [
    {
        id: 1,
        title: "Bitotsav Headliner '25",
        date: "FEB 14",
        time: "20:00 EST",
        location: "Main Auditorium",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2574&auto=format&fit=crop",
        status: "SELLING FAST",
        type: "CONCERT"
    },
    {
        id: 2,
        title: "Unplugged: Rooftop Sessions",
        date: "MAR 03",
        time: "18:00 EST",
        location: "IC Arena Roof",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
        status: "RSVP OPEN",
        type: "ACOUSTIC"
    },
    {
        id: 3,
        title: "Battle of Bands: Regionals",
        date: "APR 10",
        time: "14:00 EST",
        location: "CAT Hall",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2670&auto=format&fit=crop",
        status: "REGISTRATION CLOSED",
        type: "COMPETITION"
    }
];

function EventCard({ event, index }: { event: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative w-full md:h-[400px] flex flex-col md:flex-row border-t border-white/10 hover:border-white/30 transition-colors"
        >
            {/* Date Column */}
            <div className="md:w-1/4 py-8 md:py-12 px-4 flex flex-col justify-between border-r border-white/5 bg-black/50 backdrop-blur-sm group-hover:bg-white/5 transition-colors">
                <div>
                    <span className="inline-block px-3 py-1 mb-4 text-[10px] font-mono border border-white/20 rounded-full uppercase tracking-widest text-zinc-400">
                        {event.type}
                    </span>
                    <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 font-sans tracking-tighter">
                        {event.date.split(" ")[0]}<br />
                        <span className="text-stroke-2 text-white/0 lg:text-8xl">{event.date.split(" ")[1]}</span>
                    </h3>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase mt-4 md:mt-0">
                    <Calendar className="w-3 h-3" />
                    {event.time}
                </div>
            </div>

            {/* Image & Title Column */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-end p-8 md:p-12">
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                    <Image src={event.image} alt={event.title} fill className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <div className="flex items-center gap-2 text-blue-400 mb-2 font-mono text-xs uppercase tracking-widest">
                                <MapPin className="w-3 h-3" /> {event.location}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                                {event.title}
                            </h2>
                        </div>
                        <div className="hidden md:block">
                            <ArrowUpRight className="w-12 h-12 text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Column */}
            <div className="md:w-1/6 border-l border-white/5 flex items-center justify-center p-6 bg-black">
                <button className="w-full h-full py-4 md:py-0 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300 group/btn flex flex-col items-center justify-center gap-2">
                    <Ticket className="w-5 h-5 group-hover/btn:-rotate-12 transition-transform" />
                    <span className="font-bold text-sm uppercase tracking-widest">{event.status === "SELLING FAST" ? "Get Tickets" : "Details"}</span>
                </button>
            </div>
        </motion.div>
    );
}

export function EventsView() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-blue-500/30">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15vw] leading-[0.8] font-black tracking-tighter text-white"
                    >
                        WORLD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">TOUR</span>
                    </motion.h1>

                    <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-8">
                        <p className="max-w-md text-zinc-400 text-lg leading-relaxed">
                            Don't miss the beat. Catch us live at our upcoming performances, workshops, and jam sessions across campus and beyond.
                        </p>

                        <div className="mt-8 md:mt-0 flex gap-4">
                            <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-mono uppercase">
                                Upcoming: {events.length}
                            </div>
                            <div className="px-4 py-2 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase animate-pulse">
                                Live Now: Studio 1
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events List */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-40">
                <div className="flex flex-col">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-zinc-600 font-mono text-sm uppercase tracking-widest">End of List</p>
                    <div className="w-px h-20 bg-gradient-to-b from-zinc-800 to-transparent mx-auto mt-4"></div>
                </div>
            </section>

        </main>
    );
}
