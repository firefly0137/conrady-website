import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Promise_ from '@/components/sections/Promise';
import CategoryTeaser from '@/components/sections/CategoryTeaser';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Testimonials from '@/components/sections/Testimonials';
import MemosTeaser from '@/components/sections/MemosTeaser';
import ContactBand from '@/components/sections/ContactBand';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Promise_ />
      <CategoryTeaser namespace="expertise" baseHref="/kerngebiete" id="expertise" tint="cream" />
      <AboutTeaser />
      <Testimonials />
      <MemosTeaser />
      <ContactBand />
    </>
  );
}
