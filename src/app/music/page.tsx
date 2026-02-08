import { MusicSection } from "@/components/sections/MusicSection";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getMusic } from "@/lib/api";
import { Metadata } from "next";
import { LoungeView } from "@/components/views/LoungeView";
import { HeroSection as HeroOdyssey } from "@/components/ui/hero-odyssey";

export const metadata: Metadata = {
    title: "Music Lounge & Releases - Dhwani | Listen Now",
    description: "Stream original compositions from Dhwani artists and join the live voice lounge. The digital stage for our musical experiments.",
    openGraph: {
        title: "Dhwani Music - Listen & Jam",
        description: "Original tracks, live jams, and the community voice lounge.",
        images: ["/og-music.jpg"],
    },
};

export default async function MusicPage() {
    const musicTracks = await getMusic();
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
             {/* Background Ambience */}
             <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black pointer-events-none"></div>
            
            <HeroOdyssey />

            <div className="max-w-7xl mx-auto mt-20 relative z-10 px-6 md:px-12">
                <LoungeView />
                
                <div className="mt-24">
                    <MusicSection musicTracks={musicTracks} />
                </div>
            </div>
            <FooterNewsletter />
        </main>
    );
}
