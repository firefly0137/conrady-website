import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const nav = [
    { key: 'expertise', href: '/kerngebiete' },
    { key: 'about', href: '/ueber-mich' },
    { key: 'testimonials', href: '/stimmen' },
    { key: 'memos', href: '/memos' },
    { key: 'contact', href: '/kontakt' },
  ] as const;

  return (
    <footer className="bg-navy-950 text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="leading-tight">
                <span className="block font-serif text-2xl font-semibold tracking-wide">
                  Jannik Conrady
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-bronze-light">
                  Consulting
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-serif text-xl leading-relaxed text-paper/80 italic">
              {t('footer.claim')}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-paper/40">
              {t('footer.navTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-paper/40">
              {t('footer.legalTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {t('nav.imprint')}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {t('nav.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-paper/40">
              {t('footer.contactTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:jannik@jannikconrady.com"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  jannik@jannikconrady.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+491712107006"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  +49 171 210 70 06
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jannik-conrady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-paper/40">
            {t('footer.disclaimer')}
          </p>
          <p className="mt-6 text-xs text-paper/50">
            © {year} Jannik Conrady Consulting. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
