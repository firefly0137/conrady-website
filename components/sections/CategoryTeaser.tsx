import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type Item = { slug: string; title: string; description: string };

type Props = {
  namespace: 'expertise' | 'network';
  baseHref: string;
  id?: string;
  tint?: 'cream' | 'paper';
};

export default function CategoryTeaser({ namespace, baseHref, id, tint = 'cream' }: Props) {
  const t = useTranslations(namespace);
  const items = t.raw('items') as Item[];

  return (
    <section id={id} className={tint === 'cream' ? 'bg-cream' : 'bg-paper'}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Kicker>{t('kicker')}</Kicker>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-medium text-navy-800">
              {t('title')}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">{t('intro')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={baseHref}
              className="group inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
            >
              {t('viewAllLabel')}
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <Link
                href={`${baseHref}/${item.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-t border-line py-5 last:border-b sm:grid-cols-[2.5rem_1fr_1fr_auto]"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.24em] text-bronze">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl font-semibold text-navy-800 transition-colors group-hover:text-bronze-dark sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="hidden text-sm leading-snug text-mist sm:block">
                  {item.description}
                </p>
                <span
                  aria-hidden
                  className="justify-self-end text-navy-800 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
