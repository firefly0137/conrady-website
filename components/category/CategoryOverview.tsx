import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/ui/Reveal';
import Kicker from '@/components/ui/Kicker';

type Item = { slug: string; title: string; description: string };

type Props = {
  namespace: 'expertise';
  baseHref: string;
  images: Record<string, string>;
};

export default function CategoryOverview({ namespace, baseHref, images }: Props) {
  const t = useTranslations(namespace);
  const items = t.raw('items') as Item[];

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10 lg:pb-32">
        <Reveal className="max-w-3xl">
          <Kicker>{t('kicker')}</Kicker>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.06] font-medium text-navy-800">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">{t('intro')}</p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.12}>
              <Link href={`${baseHref}/${item.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={images[item.slug]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-navy-900/25 transition-opacity duration-500 group-hover:opacity-0"
                  />
                </div>
                <div className="border-b border-line pt-6 pb-8">
                  <span className="text-[0.68rem] font-semibold tracking-[0.26em] text-bronze">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl leading-snug font-semibold text-navy-800 transition-colors group-hover:text-bronze-dark">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[0.94rem] leading-relaxed text-mist">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
