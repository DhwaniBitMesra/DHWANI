import { MusicSection } from "@/components/sections/MusicSection";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getMusic } from "@/lib/api";

export default async function MusicPage() {
    const musicTracks = await getMusic();
    return (
        <main className="bg-black min-h-screen">
            <div className="pt-20">
                <MusicSection musicTracks={musicTracks} />
            </div>
            <FooterNewsletter />
        </main>
    );
}
