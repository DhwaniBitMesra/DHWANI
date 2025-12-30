import Team4 from "@/components/mvpblocks/team-4";
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getTeam } from "@/lib/api";

export default async function TeamPage() {
    const teamMembers = await getTeam();

    return (
        <main className="bg-black min-h-screen">
            <div className="py-20">
                <Team4 teamMembers={teamMembers} />
            </div>
            <FooterNewsletter />
        </main>
    );
}

