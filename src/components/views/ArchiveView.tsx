"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, Film, Filter } from "lucide-react";

// Mock adding years to the images for filtering purposes
// In a real app, this would come from the CMS
interface ArchiveImage {
    src: string;
    alt: string;
    year: number;
    span?: string;
}

const years = [2025, 2024, 2023, 2022, 1998];

export function ArchiveView({ initialImages }: { initialImages: any[] }) {
    const [selectedYear, setSelectedYear] = useState<number | "ALL">("ALL");

    // Enrich images with mock years if not present
    const images: ArchiveImage[] = initialImages.map((img, i) => ({
        ...img,
        year: years[i % years.length], // Distribute across years
        id: i
    }));

    const filteredImages = selectedYear === "ALL"
        ? images
        : images.filter(img => img.year === selectedYear);

    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-orange-500/30">

            {/* Header */}
            <div className="pt-32 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto border-b border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">
                            <Film className="w-4 h-4" /> Tour Archives
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white/90 uppercase">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">Vault</span>
                        </h1>
                    </div>

                    <p className="max-w-md text-neutral-500 text-sm font-mono text-right">
                        PRESERVING THE NOISE SINCE 1998.<br />
                        A COLLECTION OF MEMORIES, GIGS, AND BACKSTAGE MOMENTS.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 overflow-x-auto">
                    <div className="flex items-center gap-8 py-6 min-w-max">
                        <button
                            onClick={() => setSelectedYear("ALL")}
                            className={`text-sm font-bold uppercase tracking-widest transition-colors ${selectedYear === "ALL" ? "text-orange-500" : "text-neutral-600 hover:text-white"}`}
                        >
                            All Years
                        </button>
                        <div className="w-px h-4 bg-white/10"></div>
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`text-sm font-bold uppercase tracking-widest transition-colors ${selectedYear === year ? "text-orange-500" : "text-neutral-600 hover:text-white"}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                key={img.id} // Ensure unique key for animation
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`relative group overflow-hidden rounded-md bg-neutral-900 ${img.span === 'md:col-span-2' ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-[3/4]'}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="bg-orange-500 text-black text-xs font-bold px-2 py-1 inline-block mb-2 rounded-sm">{img.year}</div>
                                        <p className="text-white font-medium leading-tight">{img.alt}</p>
                                    </div>
                                </div>

                                {/* Grain Overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <div className="py-20 text-center">
                        <Camera className="w-12 h-12 text-neutral-800 mx-auto mb-4" />
                        <p className="text-neutral-500 font-mono">No films found for this era.</p>
                    </div>
                )}
            </div>

        </main>
    );
}
