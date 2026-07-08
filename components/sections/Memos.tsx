import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type MemoLink = {
  label: string;
  file: string;
};

type Memo = {
  date: string;
  title: string;
  description: string;
  links: MemoLink[];
};

export default function Memos() {
  const t = useTranslations('memos');
  const items = t.raw('items') as Memo[];

  return (
    <section id="memos" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <Kicker>{t('kicker')}</Kicker>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.08] font-medium text-navy-800">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">{t('intro')}</p>
        </Reveal>

        <div className="mt-16">
          {items.map((memo, i) => (
            <Reveal key={memo.title} delay={i * 0.06}>
              <article className="group grid gap-5 border-t border-line py-9 transition-colors duration-300 last:border-b lg:grid-cols-12 lg:items-baseline">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-bronze lg:col-span-2">
                  {memo.date}
                </p>
                <div className="lg:col-span-7">
                  <h3 className="font-serif text-2xl leading-snug font-semibold text-navy-800 lg:text-[1.7rem]">
                    {memo.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.94rem] leading-relaxed text-mist">
                    {memo.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-3 lg:justify-end">
                  {memo.links.map((link) => (
                    <a
                      key={link.file}
                      href={link.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-line bg-paper px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-800 transition-colors hover:border-navy-800"
                    >
                      <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden>
                        <path
                          d="M5.5 1v8m0 0L2 5.7M5.5 9 9 5.7M1 12h9"
                          stroke="currentColor"
                          strokeWidth="1.1"
                        />
                      </svg>
                      {t('download')} · {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
