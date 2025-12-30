import { EventsSection } from '@/components/sections/EventsSection';
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getEvents } from '@/lib/api';

export default async function EventsPage() {
    const events = await getEvents();
    return (
        <main className="bg-black min-h-screen">
            <div className="py-20 lg:py-32">
                <EventsSection events={events} />
            </div>
            <FooterNewsletter />
        </main>
    );
}