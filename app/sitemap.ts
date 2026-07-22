import type { MetadataRoute } from 'next';

const BASE = 'https://jannikconrady.com';

const EXPERTISE_SLUGS = [
  'allfinanz',
  'asset-protection',
  'kapitalmanagement',
  'vorsorge',
  'risikomanagement',
  'vermoegensaufbau',
];

const STATIC_PATHS = [
  '',
  '/kerngebiete',
  '/ueber-mich',
  '/stimmen',
  '/memos',
  '/kontakt',
  '/impressum',
  '/datenschutz',
];

const PATHS = [
  ...STATIC_PATHS,
  ...EXPERTISE_SLUGS.map((slug) => `/kerngebiete/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    ['de', 'en'].map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.6,
    }))
  );
}
