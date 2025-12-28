import { GallerySection } from "@/components/sections/GallerySection";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen">
            <div className="pt-20">
                <GallerySection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
