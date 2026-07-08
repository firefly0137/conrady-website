import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CategoryOverview from '@/components/category/CategoryOverview';

const IMAGES: Record<string, string> = {
  'portfolio-solutions': '/images/portfolio-solutions.jpg',
  'forex-trading': '/images/forex-trading.jpg',
  'copy-trading': '/images/copy-trading.jpg',
  'private-equity': '/images/private-equity.jpg',
  'real-estate': '/images/real-estate.jpg',
  commodities: '/images/commodities.jpg',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'network' });
  return { title: t('title'), description: t('intro') };
}

export default async function NetzwerkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CategoryOverview namespace="network" baseHref="/netzwerk" images={IMAGES} />;
}
