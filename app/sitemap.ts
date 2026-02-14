import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://delartech.com';
  const now = new Date();

  const routes = [
    '/',
    '/about',
    '/services',
    '/services/cloud-solutions',
    '/services/consulting',
    '/services/web-development',
    '/people',
    '/careers',
    '/careers/apply',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
