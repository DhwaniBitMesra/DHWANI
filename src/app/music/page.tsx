import { MusicSection } from "@/components/sections/MusicSection";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function MusicPage() {
    return (
        <main className="bg-black min-h-screen">
            <div className="pt-20">
                <MusicSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
