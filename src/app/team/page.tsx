import Team4 from "@/components/mvpblocks/team-4";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen">
            <div className="py-20">
                <Team4 />
            </div>
            <FooterNewsletter />
        </main>
    );
}
