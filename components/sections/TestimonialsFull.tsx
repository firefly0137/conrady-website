import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type Item = { quote: string; author: string };

export default function TestimonialsFull() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10 lg:pb-32">
        <Reveal className="max-w-2xl">
          <Kicker>{t('kicker')}</Kicker>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.06] font-medium text-navy-800">
            {t('title')}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-mist">{t('intro')}</p>
          <a
            href="https://www.google.com/search?q=Jannik+Conrady+Rezensionen"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
          >
            {t('googleCta')}
            <span
              aria-hidden
              className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
            />
          </a>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.author} delay={(i % 2) * 0.1} className="border-t border-line pt-8">
              <span aria-hidden className="block font-serif text-4xl leading-none text-bronze">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-lg leading-relaxed text-ink/85">
                {item.quote}
              </blockquote>
              <p className="mt-6 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-navy-800">
                {item.author}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
