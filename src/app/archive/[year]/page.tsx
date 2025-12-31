import { ArchiveYearView } from "@/components/views/ArchiveYearView";
import { archivePosts } from "@/lib/archive-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        year: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { year } = await params;
    return {
        title: `The Archive: ${year} - Dhwani`,
        description: `Explore the photos and memories from ${year}.`,
    };
}

export async function generateStaticParams() {
    const years = Array.from(new Set(archivePosts.map((post) => post.year)));
    return years.map((year) => ({
        year: year,
    }));
}

export default async function ArchiveYearPage({ params }: Props) {
    const { year } = await params;
    const posts = archivePosts.filter((post) => post.year === year);

    if (posts.length === 0) {
        notFound();
    }

    return <ArchiveYearView year={year} posts={posts} />;
}
