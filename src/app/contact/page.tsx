import { ContactView } from "@/components/views/ContactView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Dhwani | Booking & Auditions",
    description: "Want to book Dhwani for your event? Or looking to join the club? Reach out to our management team or visit the Music Room (Room 404).",
    openGraph: {
        title: "Contact Dhwani",
        description: "Let's make some noise together.",
        images: ["/og-contact.jpg"],
    },
};

export default function ContactPage() {
    return <ContactView />;
}
