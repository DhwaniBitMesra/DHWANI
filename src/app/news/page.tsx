import { NewsSection } from '@/components/sections/NewsSection';
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';
import { getNews } from '@/lib/api';

export default async function NewsPage() {
    const newsItems = await getNews();
    return (
        <main className="bg-black min-h-screen">
            <div className="py-20 lg:py-32">
                <NewsSection newsItems={newsItems} />
            </div>
            <FooterNewsletter />
        </main>
    );
}
