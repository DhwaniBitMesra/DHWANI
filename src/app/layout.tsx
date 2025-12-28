import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "DHWANI - Music Club of BIT Mesra",
	description: "The official website of Dhwani, the Music Club of BIT Mesra. Where distinct notes come together to form a beautiful melody. We are the rhythm and soul of BIT Mesra.",
	keywords: ["Dhwani", "Music Club", "BIT Mesra", "Band", "Music", "Events", "Bitotsav", "College Band", "Live Music", "Ranchi"],
	authors: [{ name: "Dhwani Music Club" }],
	creator: "Dhwani Music Club",
	metadataBase: new URL("https://dhwani.shraj.workers.dev"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://dhwani.strivio.world",
		title: "DHWANI - Music Club of BIT Mesra",
		description: "The official website of Dhwani, the Music Club of BIT Mesra. Join us for events, workshops, and musical jamming sessions.",
		siteName: "Dhwani Music Club",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Dhwani Music Club",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "DHWANI - Music Club of BIT Mesra",
		description: "The official website of Dhwani, the Music Club of BIT Mesra.",
		creator: "@dhwanibitmesra",
		images: ["/og-image.png"],
	},
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "DHWANI",
	},
	formatDetection: {
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

import Navbar from "@/components/ui/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png"></link>
				<link rel="apple-touch-icon" href="/icon-192.png"></link>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
