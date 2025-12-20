import Team4 from '@/components/mvpblocks/team-4';
import Navbar from '@/components/ui/Navbar';
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <Team4 />
            <FooterNewsletter />
        </main>
    );
}
