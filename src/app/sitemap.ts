import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://dhwani.strivio.world',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
