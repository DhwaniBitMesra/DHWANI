import { TheBand } from "@/components/sections/TheBand";
import { Github, Linkedin } from "lucide-react";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getTeam } from "@/lib/api";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Band - Dhwani Team | Musicians & Crew",
    description: "Meet the lineup. The vocalists, guitarists, drummers, and tech wizards who make Dhwani the pulse of BIT Mesra.",
    openGraph: {
        title: "Dhwani - The Official Lineup",
        description: "Meet the artists behind the sound.",
        images: ["/og-team.jpg"],
    },
};

export default async function TeamPage() {
    const teamMembers = await getTeam();

    return (
        <main className="bg-black min-h-screen">
            <TheBand teamMembers={teamMembers} />
            <FooterNewsletter />
            
            {/* Credits Section */}
            <section className="py-12 bg-black border-t border-white/5 text-center">
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-6">
                    Website Designed & Developed by
                </p>
                <div className="flex items-center justify-center gap-8">
                    <a 
                        href="https://github.com/sh20raj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                        <span className="font-mono text-sm">@sh20raj</span>
                    </a>
                    <a 
                        href="https://linkedin.com/in/sh20raj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                        <span className="font-mono text-sm">@sh20raj</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
