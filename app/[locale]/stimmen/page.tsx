import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import TestimonialsFull from '@/components/sections/TestimonialsFull';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'testimonials' });
  return { title: t('title'), description: t('intro') };
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TestimonialsFull />;
}
