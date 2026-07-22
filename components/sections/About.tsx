import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

const NUMERALS = ['I', 'II', 'III', 'IV', 'V'];

export default function About() {
  const t = useTranslations('about');
  const values = t.raw('values') as string[];

  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -top-5 -left-5 hidden h-full w-full border border-bronze/50 lg:block"
              />
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/jannikcontact.png"
                  alt={t('portraitAlt')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <Kicker>{t('kicker')}</Kicker>
              <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.08] font-medium text-navy-800">
                {t('title')}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink/80">{t('p1')}</p>
              <p className="mt-5 text-base leading-relaxed text-mist">{t('p2')}</p>
            </Reveal>

            <Reveal delay={0.15} className="mt-12">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-bronze">
                {t('valuesTitle')}
              </h3>
              <ul className="mt-6">
                {values.map((value, i) => (
                  <li
                    key={value}
                    className="flex items-baseline gap-5 border-t border-line py-4 last:border-b"
                  >
                    <span className="w-7 shrink-0 font-serif text-lg text-bronze italic">
                      {NUMERALS[i]}.
                    </span>
                    <span className="font-serif text-xl leading-snug font-medium text-navy-800">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
