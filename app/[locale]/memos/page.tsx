import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Memos from '@/components/sections/Memos';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'memos' });
  return { title: t('title'), description: t('intro') };
}

export default async function MemosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-20">
      <Memos />
    </div>
  );
}
