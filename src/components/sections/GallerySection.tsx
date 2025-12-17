"use client";

import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/aurora-bento-grid';
import { motion } from 'framer-motion';

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2940&auto=format&fit=crop",
        alt: "Concert Crowd",
        span: "md:col-span-4"
    },
    {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop",
        alt: "DJ Set",
        span: "md:col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2940&auto=format&fit=crop",
        alt: "Guitar Performance",
        span: "md:col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2940&auto=format&fit=crop",
        alt: "Studio Session",
        span: "md:col-span-4"
    }
];

export const GallerySection = () => {
    return (
        <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Captured Moments
                </h2>

                <BentoGrid>
                    {galleryImages.map((img, idx) => (
                        <BentoGridItem
                            key={idx}
                            className={`${img.span} p-0 overflow-hidden relative group`}
                            gradientFrom="from-gray-900"
                            gradientTo="to-black"
                        >
                            <motion.img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{img.alt}</span>
                            </div>
                        </BentoGridItem>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};
