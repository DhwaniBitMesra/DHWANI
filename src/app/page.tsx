import { HeroSection } from "@/components/ui/hero-odyssey";
import dynamic from 'next/dynamic';
import { ContactSection } from "@/components/sections/ContactSection";
import { LegacySection } from "@/components/sections/LegacySection";
import GlowingCard from "@/components/mvpblocks/glow-card";
import Link from "next/link";

const FooterNewsletter = dynamic(() => import('@/components/mvpblocks/footer-newsletter'));
const DhwaniFeatures = dynamic(() => import('@/components/mvpblocks/feature-3'));

export default function Home() {
	return (
		<main className="bg-black min-h-screen">
			<section id="hero"><HeroSection /></section>
			<DhwaniFeatures />

			{/* President Teaser - links to full team page */}
			<section className="py-20 bg-black">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
						Meet Our President
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto mb-12">
						Leading Dhwani with passion and rhythm.
					</p>
					<div className="flex justify-center mb-8">
						<GlowingCard
							name="Ramendra Proytanshu"
							role="President"
							image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						/>
					</div>
					<Link href="/team" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105">
						Meet the Full Team →
					</Link>
				</div>
			</section>

			<section id="legacy"><LegacySection /></section>
			<section id="contact"><ContactSection /></section>
			<FooterNewsletter />
		</main>
	);
}
