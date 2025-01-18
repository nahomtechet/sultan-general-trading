import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sultangeneraltrading.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: 'https://sultangeneraltrading.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sultangeneraltrading.com/logistics', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sultangeneraltrading.com/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://sultangeneraltrading.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
