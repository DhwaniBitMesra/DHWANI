import { NewsSection } from '@/components/sections/NewsSection';
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';

export default function NewsPage() {
    return (
        <main className="bg-black min-h-screen">
            <div className="py-20 lg:py-32">
                <NewsSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
