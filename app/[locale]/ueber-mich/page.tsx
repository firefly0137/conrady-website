import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import About from '@/components/sections/About';
import QuoteBand from '@/components/sections/QuoteBand';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('p1') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-20">
      <About />
      <QuoteBand />
    </div>
  );
}
