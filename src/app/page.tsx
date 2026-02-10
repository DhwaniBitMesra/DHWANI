import { LuminaHero } from "@/components/ui/lumina-interactive-list";
import { TheStudio } from "@/components/sections/TheStudio";
import { TheVault } from "@/components/sections/TheVault";
import { FanMail } from "@/components/sections/FanMail";
import { FanClub } from "@/components/sections/FanClub";
import { NaadPromo } from "@/components/sections/NaadPromo";
import { Testimonial } from "@/components/ui/design-testimonial";
import { Metadata } from "next";
import { TheHeadliner } from "@/components/sections/TheHeadliner";
// import { getEvents } from "@/lib/api";

export const metadata: Metadata = {
	title: "Dhwani - Music Society of BIT Mesra | Est. 1998",
	description: "The official music society of Birla Institute of Technology, Mesra. Home to the region's finest musicians, bands, and audio engineers since 1998.",
	openGraph: {
		title: "Dhwani - Music Society of BIT Mesra",
		description: "Join the rhythm. Explore events, news, and the legacy of Dhwani.",
		images: ["/og-home.jpg"],
	},
};

// --- Static Data Moved from Client Components ---

// const MILESTONES_DATA = [
// 	{
// 		year: "1998",
// 		title: "The First Jam",
// 		description: "Dhwani is founded in a small dorm room in Hostel 6. First official performance at the freshers' night.",
// 		iconName: "Mic2",
// 		image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
// 	},
// 	{
// 		year: "2005",
// 		title: "Bitotsav Debut",
// 		description: "The club headlines the main stage of Bitotsav for the first time, establishing itself as the premier music society.",
// 		iconName: "Star",
// 		image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2670&auto=format&fit=crop"
// 	},
// 	{
// 		year: "2012",
// 		title: "Battle of Bands Victory",
// 		description: "Dhwani's metal wing, 'Iron Raga', wins the regional IIT Kharagpur Spring Fest competition.",
// 		iconName: "Trophy",
// 		image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop"
// 	},
// 	{
// 		year: "2018",
// 		title: "Studio 404 Opened",
// 		description: "Launch of our fully soundproofed jam room and recording studio in the Activity Centre.",
// 		iconName: "Radio",
// 		image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop"
// 	},
// 	{
// 		year: "2024",
// 		title: "Digital Era",
// 		description: "Dhwani launches its own streaming platform for original student compositions.",
// 		iconName: "Music",
// 		image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
// 	}
// ];

const MILESTONES_DATA = [
    {
        year: "September",
        title: "Live Jam",
        description: "A one-day musical showdown where Dhwani’s bands set the IC Arena alive. This event features performances by multiple bands, creating a vibrant platform for live music and artistic expression on campus.",
        iconName: "Mic2",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "December",
        title: "Jovial Jingles",
        description: "A week-long online initiative where members keep the Christmas spirit alive. Members showcase themed performances via curated music content on the club’s official Instagram page.",
        iconName: "Bell",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "Feb-March",
        title: "Hymn for the Weekend",
        description: "Members showcase musical talent through short performance videos. The most outstanding performer is recognized and felicitated at NAAD, the club’s flagship event.",
        iconName: "Video",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "March",
        title: "NAAD",
        description: "The flagship event of Dhwani conducted over three days. It features a wide range of musical competitions, bringing together the finest talent to celebrate the spirit of music across BIT Mesra.",
        iconName: "Trophy",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "May-July",
        title: "Cover the Summer",
        description: "An online music series where song covers drop as Instagram reels all summer long. This initiative keeps the music alive and engages the audience even during the summer break.",
        iconName: "Instagram",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "May-July",
        title: "Musicpedia",
        description: "A summer series where interesting music-related facts are shared during the vacation. These regular posts aim to inform, educate, and keep curiosity in tune all season long.",
        iconName: "BookOpen",
        image: "https://images.unsplash.com/photo-1507838596758-2ac6f7527473?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "June",
        title: "Music in a Minute",
        description: "An online series where members share one-minute song snippets. The winner is announced on World Music Day (June 21st), highlighting quick bursts of creativity.",
        iconName: "Timer",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
    },
    {
        year: "June 21st",
        title: "World Music Day",
        description: "Celebrated with the release of a specially curated video or audio cover. This tribute marks the joy and universality of music, bringing the club together for a collective creative release.",
        iconName: "Globe",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
    }
];

const STUDIO_MODULES = [
	{
		iconName: "Music",
		label: "Jam Sessions",
		desc: "Sync frequencies with fellow artists in our weekly improv circles.",
		knobColor: "bg-blue-500",
		patch: "Input A",
		grid: "col-span-1 md:col-span-2 lg:col-span-1"
	},
	{
		iconName: "Mic2",
		label: "Live Stage",
		desc: "From Bitotsav to Pantheon, the spotlight is yours to command.",
		knobColor: "bg-red-500",
		patch: "Output Main",
		grid: "col-span-1 md:col-span-1 lg:col-span-1"
	},
	{
		iconName: "Lightbulb",
		label: "Workshops",
		desc: "Masterclass sessions on theory, production, and instrument craft.",
		knobColor: "bg-yellow-500",
		patch: "CV In",
		grid: "col-span-1 md:col-span-1 lg:col-span-1"
	},
	{
		iconName: "Headphones",
		label: "The Studio",
		desc: "Access to pro-grade recording gear and soundproof practice rooms.",
		knobColor: "bg-purple-500",
		patch: "Aux Out",
		grid: "col-span-1 md:col-span-2 lg:col-span-2"
	},
	{
		iconName: "Users",
		label: "Network",
		desc: "Connect with our alumni working in top studios globally.",
		knobColor: "bg-green-500",
		patch: "Gate In",
		grid: "col-span-1"
	}
];

export default async function Home() {
	// Inline server data fetching
	// const events = await getEvents();
	// const upcomingEvent = events && events.length > 0 ? events[0] : null;

	return (
		<main className="bg-black min-h-screen">
			<section id="hero">
				<LuminaHero />
			</section>


			{/* <TheStudio modules={STUDIO_MODULES} /> */}
			{/* <TheHeadliner data={HEADLINER_DATA} /> */}

			<section id="naad-promo">
				<NaadPromo />
			</section>
			

			<section id="legacy">
				<TheVault milestones={MILESTONES_DATA} />
			</section>

			<section id="contact"><FanMail /></section>
			<section id="testimonials"><Testimonial /></section>
			<FanClub />
		</main>
	);
}
