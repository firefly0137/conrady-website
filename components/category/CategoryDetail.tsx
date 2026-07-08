import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';

type Item = { slug: string; title: string; description: string; bullets: string[]; body: string };

type Props = {
  namespace: 'expertise' | 'network';
  baseHref: string;
  slug: string;
  images: Record<string, string>;
};

export default function CategoryDetail({ namespace, baseHref, slug, images }: Props) {
  const t = useTranslations(namespace);
  const tContact = useTranslations('contact');
  const items = t.raw('items') as Item[];
  const item = items.find((i) => i.slug === slug);

  if (!item) notFound();

  return (
    <article>
      <section className="relative flex h-[46svh] min-h-[340px] items-end overflow-hidden lg:h-[54svh]">
        <Image
          src={images[slug]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-transparent"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12 lg:px-10 lg:pb-16">
          <Reveal>
            <Link
              href={baseHref}
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-paper"
            >
              ← {t('backLabel')}
            </Link>
            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-bronze-light">
              {t('kicker')}
            </p>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] font-medium text-paper">
              {item.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink/80">{item.description}</p>
                <p className="mt-6 text-base leading-relaxed text-mist">{item.body}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-bronze">
                  {t('bulletsTitle')}
                </h2>
                <ul className="mt-6">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 border-t border-line py-4 text-[0.95rem] leading-snug text-ink/85 last:border-b"
                    >
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.15} className="mt-16 flex flex-wrap items-center gap-6 border-t border-line pt-10">
            <Link
              href="/kontakt"
              className="border border-navy-800 bg-navy-800 px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-transparent hover:text-navy-800"
            >
              {tContact('ctaLabel')}
            </Link>
            <Link
              href={baseHref}
              className="group flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-navy-800"
            >
              {t('viewAllLabel')}
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-bronze transition-all duration-300 group-hover:w-12"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
