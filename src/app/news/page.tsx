import { NewsView } from "@/components/views/NewsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Press - Dhwani | The Resonance Newsletter",
  description: "Read the latest from the club: New album releases, battle of bands victories, workshop recaps, and exclusive interviews.",
  openGraph: {
    title: "The Resonance - Dhwani Official News",
    description: "Covering the noise, the melody, and everything in between.",
    images: ["/og-news.jpg"],
  },
};

export default function NewsPage() {
  return <NewsView />;
}
