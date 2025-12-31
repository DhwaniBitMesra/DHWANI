import { EventsView } from "@/components/views/EventsView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events - Dhwani Bitotsav & Gigs | Live Performances",
    description: "Catch Dhwani live. From the Battle of Bands to unplugged rooftop sessions, stay updated on our upcoming tour dates and campus gigs.",
    openGraph: {
        title: "Dhwani World Tour - Upcoming Events",
        description: "See where the music is happening next.",
        images: ["/og-events.jpg"],
    },
};

export default function EventsPage() {
    return <EventsView />;
}