import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import CategoryDetail from '@/components/category/CategoryDetail';

const SLUGS = [
  'portfolio-solutions',
  'forex-trading',
  'copy-trading',
  'private-equity',
  'real-estate',
  'commodities',
];

const IMAGES: Record<string, string> = {
  'portfolio-solutions': '/images/portfolio-solutions.jpg',
  'forex-trading': '/images/forex-trading.jpg',
  'copy-trading': '/images/copy-trading.jpg',
  'private-equity': '/images/private-equity.jpg',
  'real-estate': '/images/real-estate.jpg',
  commodities: '/images/commodities.jpg',
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'network' });
  const items = t.raw('items') as { slug: string; title: string; description: string }[];
  const item = items.find((i) => i.slug === slug);
  return { title: item?.title, description: item?.description };
}

export default async function NetzwerkDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <CategoryDetail namespace="network" baseHref="/netzwerk" slug={slug} images={IMAGES} />;
}
