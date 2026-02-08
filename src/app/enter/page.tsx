"use client";

import { SignIn } from "@stackframe/stack";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EnterPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center p-6">
            
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black pointer-events-none"></div>
            
            {/* Decorative Music Images */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-20">
                    <Image 
                        src="/music-studio-dark.png" 
                        alt="" 
                        fill 
                        className="object-cover blur-sm"
                    />
                </div>
                <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 opacity-20">
                    <Image 
                        src="/indian-instruments-cyber.png" 
                        alt="" 
                        fill 
                        className="object-cover blur-sm"
                    />
                </div>
            </div>
            
             {/* Back Link */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-8 left-8 z-50"
            >
                <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                        <MoveLeft className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-mono uppercase tracking-widest hidden md:block">Back to Venue</span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Restricted Access</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2">
                        BACKSTAGE
                    </h1>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                        Verify Credentials to Proceed
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-1 backdrop-blur-xl shadow-2xl shadow-black/50">
                     <div className="bg-black/40 rounded-xl p-8 flex justify-center w-full">
                        <SignIn 
                            fullPage={false}
                            automaticRedirect={true} 
                        />
                     </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-zinc-600 font-mono">
                        DHWANI MUSIC CLUB • SECURE GATEWAY v2.0
                    </p>
                </div>
            </motion.div>

        </main>
    );
}
