import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

export default function AboutTeaser() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden">
              <Image
                src="/images/jannikportrait.png"
                alt={t('portraitAlt')}
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <Kicker>{t('kicker')}</Kicker>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-medium text-navy-800">
                {t('title')}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
                {t('teaser')}
              </p>
              <Link
                href="/ueber-mich"
                className="group mt-8 inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
              >
                {t('ctaLabel')}
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
