import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Contact from '@/components/sections/Contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('text') };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
