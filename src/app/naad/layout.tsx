import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "NAAD '26 - Inter-College Music Festival | BIT Mesra",
	description: "The largest music competition in East India. Battle of Bands, Solo Vocals, and Instrumental Wars. Register now for the ultimate face-off.",
    openGraph: {
        title: "NAAD '26 - The Festival of Frequencies",
        description: "50+ Colleges. ₹1.5L+ Prize Pool. One Stage. Are you ready?",
        images: ["/og-naad.jpg"], // We should probably add this image later or use a generic one
    }
};

export default function NaadLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
