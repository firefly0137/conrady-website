import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CategoryOverview from '@/components/category/CategoryOverview';

const IMAGES: Record<string, string> = {
  allfinanz: '/images/allfinanz.jpg',
  'asset-protection': '/images/asset-protection.jpg',
  kapitalmanagement: '/images/kapitalmanagement.jpg',
  vorsorge: '/images/vorsorge.jpg',
  risikomanagement: '/images/risikomanagement.jpg',
  vermoegensaufbau: '/images/vermoegensaufbau.jpg',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'expertise' });
  return { title: t('title'), description: t('intro') };
}

export default async function KerngebietePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CategoryOverview namespace="expertise" baseHref="/kerngebiete" images={IMAGES} />;
}
