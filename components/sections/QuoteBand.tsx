import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';

export default function QuoteBand() {
  const t = useTranslations('quote');

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/quote-band.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-navy-950/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
        <Reveal>
          <span
            aria-hidden
            className="block font-serif text-7xl leading-none text-bronze-light"
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 font-serif text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.3] font-medium text-paper italic">
            {t('text')}
          </blockquote>
          <span aria-hidden className="mx-auto mt-10 block h-px w-16 bg-bronze-light" />
          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-paper/60">
            {t('attribution')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
