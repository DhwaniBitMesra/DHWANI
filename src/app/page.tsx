import { HeroSection } from "@/components/ui/hero-odyssey";
import dynamic from 'next/dynamic';
import { EventsSection } from "@/components/sections/EventsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { LegacySection } from "@/components/sections/LegacySection";


const FooterNewsletter = dynamic(() => import('@/components/mvpblocks/footer-newsletter'));
const DhwaniFeatures = dynamic(() => import('@/components/mvpblocks/feature-3'));

export default function Home() {
	return (
		<main className="bg-black min-h-screen">
			<section id="hero"><HeroSection /></section>
			<DhwaniFeatures />
			<section id="events"><EventsSection /></section>
			<section id="music"><MusicSection /></section>
			<section id="team"><TeamSection /></section>
			<section id="gallery"><GallerySection /></section>
			<section id="news"><NewsSection /></section>
			<section id="legacy"><LegacySection /></section>
			<section id="contact"><ContactSection /></section>
			<FooterNewsletter />
		</main>
	);
}
