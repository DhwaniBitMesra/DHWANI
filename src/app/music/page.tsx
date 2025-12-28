import { MusicSection } from "@/components/sections/MusicSection";
import Navbar from "@/components/ui/Navbar";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function MusicPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-20">
                <MusicSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
