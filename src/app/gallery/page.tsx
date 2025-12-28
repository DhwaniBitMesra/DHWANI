import { GallerySection } from "@/components/sections/GallerySection";
import Navbar from "@/components/ui/Navbar";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-20">
                <GallerySection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
