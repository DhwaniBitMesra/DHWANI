"use client";

import { motion } from "framer-motion";
import { User } from "@stackframe/stack";
import { Ticket, QrCode } from "lucide-react";

interface NaadPassProps {
    user: User;
}

export default function NaadPass({ user }: NaadPassProps) {
    // Generate deterministic NAAD ID
    // Format: NAAD-25-[First 6 chars of User ID in CAPS]
    const naadId = `NAAD-26-${(user.id || "GUEST").slice(0, 6).toUpperCase()}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto perspective-distant"
        >
            {/* Holographic Card Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(120,60,255,0.15)] group">
                
                {/* Visual Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
                <div className="absolute -inset-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Content Layout */}
                <div className="relative p-6 flex flex-col gap-6">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black italic tracking-tighter text-white">NAAD &apos;25</h3>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Official Access Pass</span>
                        </div>
                        <Ticket className="w-8 h-8 text-white/20" />
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 py-4 border-t border-white/10 border-b">
                        {user.profileImageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={user.profileImageUrl} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white/10 object-cover" />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">
                                {(user.displayName || "U")[0]}
                            </div>
                        )}
                        <div>
                            <h4 className="text-lg font-bold text-white leading-tight">{user.displayName || "Music Lover"}</h4>
                            <p className="text-xs font-mono text-white/40 truncate max-w-[150px]">{user.primaryEmail}</p>
                        </div>
                    </div>

                    {/* Footer / ID */}
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono uppercase text-white/30">Pass ID</span>
                            <span className="font-mono text-xl font-bold text-blue-400 tracking-wider shadow-blue-500/20 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                                {naadId}
                            </span>
                        </div>
                        <QrCode className="w-12 h-12 text-white bg-white/5 p-1 rounded" />
                    </div>
                </div>

                {/* Animated Border Shine */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                </div>
            </div>

            {/* Reflection/Glow underneath */}
            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-purple-500/20 blur-xl rounded-full" />
        </motion.div>
    );
}
