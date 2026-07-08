import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

export default function Contact() {
  const t = useTranslations('contact');

  const rows = [
    {
      label: t('emailLabel'),
      value: 'jannik@jannikconrady.com',
      href: 'mailto:jannik@jannikconrady.com',
      external: false,
    },
    {
      label: t('phoneLabel'),
      value: '+49 171 210 70 06',
      href: 'tel:+491712107006',
      external: false,
    },
    {
      label: t('linkedinLabel'),
      value: 'linkedin.com/in/jannik-conrady',
      href: 'https://www.linkedin.com/in/jannik-conrady',
      external: true,
    },
  ];

  return (
    <section id="contact" className="bg-navy-900 text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker light>{t('kicker')}</Kicker>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[1.06] font-medium">
                {t('title')}
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/70">
                {t('text')}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-12">
              <ul>
                {rows.map((row) => (
                  <li key={row.label} className="border-t border-line-dark last:border-b">
                    <a
                      href={row.href}
                      {...(row.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex flex-wrap items-baseline justify-between gap-2 py-5"
                    >
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-paper/40">
                        {row.label}
                      </span>
                      <span className="flex items-center gap-3 font-serif text-xl font-medium text-paper transition-colors group-hover:text-bronze-light lg:text-2xl">
                        {row.value}
                        <span
                          aria-hidden
                          className="inline-block h-px w-6 bg-bronze-light transition-all duration-300 group-hover:w-10"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -right-5 -bottom-5 hidden h-full w-full border border-bronze/40 lg:block"
              />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/jannikcontact.png"
                  alt={t('imageAlt')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[65%_top]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
