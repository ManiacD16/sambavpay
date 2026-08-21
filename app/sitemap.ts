import type {
  MetadataRoute,
} from 'next';

import {
  products,
} from '@/data/products';

import {
  siteConfig,
} from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/company',
    '/contact',
    '/developers',
    '/industries',
    '/security',
    '/get-started',
    '/book-demo',
  ];

  const productRoutes =
    products.map(
      (product) =>
        `/products/${product.slug}`,
    );

  return [
    ...staticRoutes,
    ...productRoutes,
  ].map((route) => ({
    url:
      `${siteConfig.url}${route}`,

    lastModified:
      new Date(),

    changeFrequency:
      route === ''
        ? 'weekly'
        : 'monthly',

    priority:
      route === ''
        ? 1
        : 0.8,
  }));
}