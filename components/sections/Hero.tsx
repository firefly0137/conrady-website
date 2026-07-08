import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative lg:flex lg:min-h-svh lg:items-center lg:overflow-hidden">
      {/* Mobile: image as its own block below the header */}
      <div className="relative mt-20 h-[52svh] lg:hidden">
        <Image
          src="/images/jannikhero.png"
          alt={t('imageAlt')}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_top]"
        />
      </div>

      {/* Desktop: full-bleed image with soft wash for type legibility */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden>
        <Image
          src="/images/jannikhero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#d8d6d3]/90 via-[#d8d6d3]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 pb-20 lg:px-10 lg:pt-20">
        <div className="lg:ml-auto lg:w-[54%]">
          <Reveal>
            <Kicker>{t('kicker')}</Kicker>
            <h1 className="mt-6 font-serif text-[clamp(2.9rem,7.5vw,5.6rem)] leading-[1.02] font-medium text-navy-800">
              {t('title')}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="border border-navy-800 bg-navy-800 px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-transparent hover:text-navy-800"
              >
                {t('ctaPrimary')}
              </Link>
              <Link
                href="/kerngebiete"
                className="group flex items-center gap-3 px-2 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
              >
                {t('ctaSecondary')}
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
