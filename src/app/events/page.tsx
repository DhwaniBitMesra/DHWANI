import { EventsSection } from "@/components/sections/EventsSection";
import Navbar from "@/components/ui/Navbar";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";

export default function EventsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-20">
                <EventsSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
