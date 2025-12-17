import { HeroSection } from "@/components/ui/hero-odyssey";
import { EventsSection } from "@/components/sections/EventsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
	return (
		<main className="bg-black min-h-screen">
			<HeroSection />
			<EventsSection />
			<TeamSection />
			<GallerySection />
			<ContactSection />
		</main>
	);
}
