import Team4 from '@/components/mvpblocks/team-4';
import { HeroSection } from "@/components/ui/hero-odyssey"; // Reusing Hero or Navbar if needed, but for now simple page.
// Actually, I should probably reuse the Navbar or have a layout. 
// Since HeroOdyssey has a built-in Navbar, I might need to extract it or just use a simple layout for other pages.
// For now, I'll just render the Team component. The assignment is "create /team page and add this component there".

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen">
            <Team4 />
        </main>
    );
}
