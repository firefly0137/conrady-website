import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import CategoryDetail from '@/components/category/CategoryDetail';

const SLUGS = [
  'allfinanz',
  'asset-protection',
  'kapitalmanagement',
  'vorsorge',
  'risikomanagement',
  'vermoegensaufbau',
];

const IMAGES: Record<string, string> = {
  allfinanz: '/images/allfinanz.jpg',
  'asset-protection': '/images/asset-protection.jpg',
  kapitalmanagement: '/images/kapitalmanagement.jpg',
  vorsorge: '/images/vorsorge.jpg',
  risikomanagement: '/images/risikomanagement.jpg',
  vermoegensaufbau: '/images/vermoegensaufbau.jpg',
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'expertise' });
  const items = t.raw('items') as { slug: string; title: string; description: string }[];
  const item = items.find((i) => i.slug === slug);
  return { title: item?.title, description: item?.description };
}

export default async function KerngebietDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return (
    <CategoryDetail namespace="expertise" baseHref="/kerngebiete" slug={slug} images={IMAGES} />
  );
}
