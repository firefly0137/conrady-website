import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL('https://jannikconrady.com'),
    title: {
      default: t('title'),
      template: '%s · Jannik Conrady Consulting',
    },
    description: t('description'),
    authors: [{ name: 'Jannik Conrady' }],
    alternates: {
      canonical: `/${locale}`,
      languages: { de: '/de', en: '/en' },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://jannikconrady.com/${locale}`,
      siteName: 'Jannik Conrady Consulting',
      images: ['/images/jannikhero.png'],
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/jannikhero.png'],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jannik Conrady Consulting',
    url: 'https://jannikconrady.com',
    image: 'https://jannikconrady.com/images/jannikportrait.png',
    telephone: '+49 171 2107006',
    email: 'jannik@jannikconrady.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sommerweg 91',
      postalCode: '26209',
      addressLocality: 'Hatten',
      addressCountry: 'DE',
    },
    founder: {
      '@type': 'Person',
      name: 'Jannik Conrady',
      sameAs: ['https://www.linkedin.com/in/jannik-conrady'],
    },
  };

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
