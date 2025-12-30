import { GallerySection } from "@/components/sections/GallerySection";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";
import { getGallery } from "@/lib/api";

export default async function GalleryPage() {
    const galleryImages = await getGallery();
    return (
        <main className="bg-black min-h-screen">
            <div className="pt-20">
                <GallerySection galleryImages={galleryImages} />
            </div>
            <FooterNewsletter />
        </main>
    );
}
