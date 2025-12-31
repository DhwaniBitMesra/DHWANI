"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
    "Where words leave off, music begins.",
    "Music can change the world because it can change people.",
    "Without music, life would be a mistake.",
    "The rhythm of BIT Mesra. Connecting souls since 1998.",
    "One good thing about music, when it hits you, you feel no pain.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Play it loud. Play it proud. Dhwani.",
];

export function QuoteRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-16 flex items-center">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-white/60 max-w-md text-lg leading-relaxed font-light italic"
                >
                    "{quotes[index]}"
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
