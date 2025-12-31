import { TheBand } from "@/components/sections/TheBand";
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
        </main>
    );
}
