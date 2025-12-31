import { VisualSitemapView } from "@/components/views/VisualSitemapView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "System Map - Dhwani Network Topology",
    description: "Navigate the Dhwani frequency network.",
};

export default function SitemapPage() {
    return <VisualSitemapView />;
}
