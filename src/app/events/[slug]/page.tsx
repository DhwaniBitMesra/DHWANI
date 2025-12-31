import { events } from "@/lib/events-data";
import { EventDetailView } from "@/components/views/EventDetailView";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        return {
            title: "Event Not Found - Dhwani",
        };
    }

    return {
        title: `${event.title} - Dhwani Events`,
        description: event.description || `Join us for ${event.title} on ${event.date}.`,
        openGraph: {
            title: event.title,
            description: event.description || "Live performance by Dhwani.",
            images: [event.image],
        },
    };
}

export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.slug,
    }));
}

export default async function EventPage({ params }: Props) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return <EventDetailView event={event} />;
}
