'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type Item = {
  quote: string;
  author: string;
};

const AUTOPLAY_MS = 9000;

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    timer.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduceMotion, go]);

  const item = items[index];

  return (
    <section id="testimonials" className="bg-paper">
      <div
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Kicker>{t('kicker')}</Kicker>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.08] font-medium text-navy-800">
              {t('title')}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mist">{t('intro')}</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link
                href="/stimmen"
                className="group inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
              >
                {t('viewAllLabel')}
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
                />
              </Link>
              <a
                href="https://www.google.com/search?q=Jannik+Conrady+Rezensionen"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-mist"
              >
                {t('googleCta')}
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-line transition-all duration-300 group-hover:w-12"
                />
              </a>
            </div>
          </Reveal>

          <div className="flex min-h-[22rem] flex-col justify-between border-t border-line pt-10 lg:col-span-8 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-14">
            <div aria-live="polite">
              <span aria-hidden className="block font-serif text-6xl leading-none text-bronze">
                &ldquo;
              </span>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-serif text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.4] font-medium text-ink">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-bronze" />
                    <span className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-navy-800">
                      {item.author}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-between">
              <p className="font-serif text-lg text-mist tabular-nums">
                <span className="text-navy-800">{String(index + 1).padStart(2, '0')}</span>
                <span className="mx-2 text-line">/</span>
                {String(items.length).padStart(2, '0')}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t('prev')}
                  className="flex h-12 w-12 items-center justify-center border border-line text-navy-800 transition-colors hover:border-navy-800"
                >
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
                    <path d="M17 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t('next')}
                  className="flex h-12 w-12 items-center justify-center border border-line text-navy-800 transition-colors hover:border-navy-800"
                >
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
                    <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
