import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type Memo = { date: string; title: string; description: string };

export default function MemosTeaser() {
  const t = useTranslations('memos');
  const items = (t.raw('items') as Memo[]).slice(0, 2);

  return (
    <section id="memos" className="bg-cream">
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
              href="/memos"
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
          {items.map((memo, i) => (
            <Reveal key={memo.title} delay={i * 0.06}>
              <Link
                href="/memos"
                className="group grid gap-2 border-t border-line py-7 last:border-b lg:grid-cols-12 lg:items-baseline lg:gap-5"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-bronze lg:col-span-2">
                  {memo.date}
                </p>
                <h3 className="font-serif text-xl leading-snug font-semibold text-navy-800 transition-colors group-hover:text-bronze-dark lg:col-span-8">
                  {memo.title}
                </h3>
                <span
                  aria-hidden
                  className="text-navy-800 transition-transform duration-300 group-hover:translate-x-1 lg:col-span-2 lg:justify-self-end"
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
