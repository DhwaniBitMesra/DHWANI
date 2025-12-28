import { EventsSection } from "@/components/sections/EventsSection";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function EventsPage() {
    return (
        <main className="bg-black min-h-screen">
            <div className="pt-20">
                <EventsSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
