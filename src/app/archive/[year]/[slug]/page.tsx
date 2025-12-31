import { ArchivePostView } from "@/components/views/ArchivePostView";
import { archivePosts } from "@/lib/archive-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        year: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = archivePosts.find((p) => p.slug === slug);

    if (!post) return { title: "Not Found" };

    return {
        title: `${post.title} - Dhwani Archive`,
        description: post.description,
        openGraph: {
            images: [post.coverImage]
        }
    };
}

export async function generateStaticParams() {
    return archivePosts.map((post) => ({
        year: post.year,
        slug: post.slug,
    }));
}

export default async function ArchivePostPage({ params }: Props) {
    const { slug, year } = await params;
    const post = archivePosts.find((p) => p.slug === slug && p.year === year);

    if (!post) {
        notFound();
    }

    return <ArchivePostView post={post} />;
}
