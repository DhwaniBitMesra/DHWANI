import { HeroSection } from "@/components/ui/hero-odyssey";
import dynamic from 'next/dynamic';
import { ContactSection } from "@/components/sections/ContactSection";
import { LegacySection } from "@/components/sections/LegacySection";
import GlowingCard from "@/components/mvpblocks/glow-card";
import Link from "next/link";

const FooterNewsletter = dynamic(() => import('@/components/mvpblocks/footer-newsletter'));
import { TheStudio } from "@/components/sections/TheStudio";
import { TheHeadliner } from "@/components/sections/TheHeadliner";
import { TheVault } from "@/components/sections/TheVault";
import { FanMail } from "@/components/sections/FanMail";
import { FanClub } from "@/components/sections/FanClub";
import { Testimonial } from "@/components/ui/design-testimonial";

export default function Home() {
	return (
		<main className="bg-black min-h-screen">
			<section id="hero"><HeroSection /></section>

			<TheStudio />

			<TheHeadliner />

			<section id="legacy"><TheVault /></section>
			<section id="contact"><FanMail /></section>
			<section id="testimonials"><Testimonial /></section>
			<FanClub />
		</main>
	);
}
