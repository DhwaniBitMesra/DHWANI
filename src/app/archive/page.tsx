import { ArchiveView } from "@/components/views/ArchiveView";
import { getGallery } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Archive - Dhwani History | Photos & Memories",
    description: "Explore the visual history of Dhwani since 1998. Concert photos, backstage moments, and the faces that built the club.",
    openGraph: {
        title: "Dhwani Archives - Preserving the Noise",
        description: "A digital vault of our journey.",
        images: ["/og-archive.jpg"],
    },
};

export default async function ArchivePage() {
    const galleryImages = await getGallery();
    return <ArchiveView initialImages={galleryImages} />;
}
