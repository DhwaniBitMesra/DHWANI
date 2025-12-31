import { AchievementsView } from "@/components/views/AchievementsView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Achievements - Dhwani Hall of Fame | Awards & Trophies",
    description: "The wall of sound. Celebrating our victories at IIT Spring Fest, Mood Indigo, and Bitotsav. See our gold records and trophy cabinet.",
    openGraph: {
        title: "Dhwani Hall of Fame - Gold Standard",
        description: "Excellence in music since 1998.",
        images: ["/og-achievements.jpg"],
    },
};

export default function AchievementsPage() {
    return <AchievementsView />;
}
