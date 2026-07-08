import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

export default function ContactBand() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="bg-navy-900 text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <Kicker light>{t('kicker')}</Kicker>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.08] font-medium">
            {t('homeTitle')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/70">{t('homeText')}</p>
          <Link
            href="/kontakt"
            className="mt-9 inline-block border border-paper/40 bg-paper px-8 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-900 transition-colors hover:bg-transparent hover:text-paper"
          >
            {t('ctaLabel')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
