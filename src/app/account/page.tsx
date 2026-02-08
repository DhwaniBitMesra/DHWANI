"use client";

import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NaadPass from "@/components/ui/NaadPass";
import Link from "next/link";
import { MoveLeft, LogOut } from "lucide-react";

export default function AccountPage() {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        // Simple client-side protection
        // If user is null (and not loading, but useUser doesn't expose loading explicitly in simple hook usually, 
        // though it might return null initially. Stack handles this well usually)
        // Ideally we'd wait for auth load, but for now we'll check if user appears.
        // If user is explicitly null after some time, we redirect. 
        // Logic: For now, if user is undefined/null, we show loading or redirect. 
        // Stack's useUser returns null if not logged in.
        if (user === null) {
            router.push('/enter');
        }
    }, [user, router]);

    if (!user) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="animate-pulse font-mono tracking-widest text-xs">AUTHENTICATING...</div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6 relative overflow-hidden">
             {/* Background Atmosphere */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-12">
                    <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                            <MoveLeft className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest hidden md:block">Back to Home</span>
                    </Link>
                    
                    <button 
                        onClick={() => user.signOut()}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-mono uppercase tracking-widest border border-red-500/20"
                    >
                        <LogOut className="w-3 h-3" /> Sign Out
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Left: Introduction */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2">
                                BACKSTAGE
                            </h1>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                                Welcome home, {user.displayName?.split(' ')[0] || "Artist"}.
                            </p>
                        </div>
                        
                        <div className="prose prose-invert prose-sm text-zinc-400">
                            <p>
                                You have successfully accessed the Dhwani Artist Lounge. Your NAAD ID is your key to all upcoming events, workshops, and jamming sessions.
                            </p>
                            <p>
                                Keep this pass accessible. It will be required for entry at the Main Gate during Bitotsav and NAAD '25.
                            </p>
                        </div>

                         <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-500/20">
                            <h4 className="text-blue-400 font-bold mb-1 text-sm">Upcoming Session</h4>
                            <p className="text-xs text-blue-200/70 mb-2">Jamming Session #42 - "Riffs & Ragas"</p>
                            <div className="w-full bg-blue-900/30 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-blue-500 w-3/4 h-full rounded-full" />
                            </div>
                            <div className="flex justify-between text-[10px] text-blue-400/50 mt-1 font-mono">
                                <span>Sat, 12 Feb</span>
                                <span>5:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Pass */}
                    <div className="flex flex-col items-center">
                        <NaadPass user={user} />
                        
                        <button className="mt-8 text-xs font-mono text-zinc-500 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all">
                            Download Pass as Image
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}
