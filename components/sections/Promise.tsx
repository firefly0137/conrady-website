import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';

export default function Promise_() {
  const t = useTranslations('promise');

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-bronze">
            {t('kicker')}
          </p>
          <h2 className="mt-8 font-serif text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.12] font-medium text-navy-800">
            {t('statement')}
          </h2>
          <span aria-hidden className="mx-auto mt-10 block h-px w-16 bg-bronze" />
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-mist">
            {t('support')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
