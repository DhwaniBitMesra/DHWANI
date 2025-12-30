import { GallerySection } from "@/components/sections/GallerySection";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";
import { getGallery } from "@/lib/api";
import { CircularGallery } from "@/components/ui/circular-gallery";
import { PhotoGallery } from "@/components/ui/gallery";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";

export default async function GalleryPage() {
    const galleryImages = await getGallery();

    // Prepare items for Circular Gallery
    const circularItems = galleryImages.slice(0, 8).map((img: any, i: number) => ({
        common: img.alt,
        binomial: "Featured Shot",
        photo: {
            url: img.src,
            text: img.alt,
            by: "Dhwani Club",
            pos: 'center'
        }
    }));

    // Prepare items for Photo Gallery (rest of images)
    const scatteredItems = galleryImages.slice(8).map((img: any) => ({
        src: img.src,
        alt: img.alt
    }));

    // If scattered items are too few, reuse some from top to make it look good
    if (scatteredItems.length < 5) {
        galleryImages.slice(0, 5).forEach((img: any) => {
            scatteredItems.push({ src: img.src, alt: img.alt });
        });
    }

    return (
        <main className="bg-black min-h-screen text-white overflow-x-hidden">
            <div className="pt-24 pb-12 text-center space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    Visual Symphony
                </h1>
                <p className="text-white/60 font-mono">Captured moments in time</p>
            </div>
            <section className="py-20 px-4 min-h-[800px]">
                <PhotoGallery
                    images={scatteredItems}
                    title="Scattered Memories"
                    subtitle="Drag to Explore"
                />
            </section>
            {/* Section 2: 3D Rotating Showcase */}
            <section className="h-[600px] relative w-full overflow-hidden flex items-center justify-center bg-zinc-900/20 my-10 border-y border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                <CircularGallery
                    items={circularItems}
                    radius={600}
                    className="scale-75 md:scale-90"
                />
            </section>

            {/* Section 3: Community Moments (Masonry) */}
            <section className="py-20 px-4 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-2 text-white">Community Moments</h2>
                    <p className="text-white/60 mb-8">Snapshots from our jams and events</p>
                </div>
                <MasonryGrid columns={3} gap={4} className="max-w-7xl mx-auto">
                    {galleryImages.map((img: any, i: number) => (
                        <div key={i} className="relative rounded-xl overflow-hidden group">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </MasonryGrid>
            </section>


            <FooterNewsletter />
        </main>
    );
}
