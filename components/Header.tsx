'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitch from './LanguageSwitch';

type Child = { slug: string; title: string };
type NavGroup = { key: string; href: string; children?: Child[] };

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden className={className}>
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export default function Header() {
  const t = useTranslations('nav');
  const tExpertise = useTranslations('expertise');
  const tNetwork = useTranslations('network');
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopOpenKey, setDesktopOpenKey] = useState<string | null>(null);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);

  const expertiseChildren = (tExpertise.raw('items') as Child[]).map((i) => ({
    slug: i.slug,
    title: i.title,
  }));
  const networkChildren = (tNetwork.raw('items') as Child[]).map((i) => ({
    slug: i.slug,
    title: i.title,
  }));

  const groups: NavGroup[] = [
    { key: 'expertise', href: '/kerngebiete', children: expertiseChildren },
    { key: 'network', href: '/netzwerk', children: networkChildren },
    { key: 'about', href: '/ueber-mich' },
    { key: 'testimonials', href: '/stimmen' },
    { key: 'memos', href: '/memos' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDesktopOpenKey(null);
    setMobileOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopOpenKey(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-line bg-paper/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3.5"
          onClick={() => setOpen(false)}
          aria-label="Jannik Conrady Consulting"
        >
          <Image
            src="/images/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-[1.35rem] font-semibold tracking-wide text-navy-800">
              Jannik Conrady
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-bronze">
              Consulting
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
          onMouseLeave={() => setDesktopOpenKey(null)}
        >
          {groups.map((group) => (
            <div
              key={group.key}
              className="relative"
              onMouseEnter={() => group.children && setDesktopOpenKey(group.key)}
            >
              <Link
                href={group.href}
                className="flex items-center gap-1.5 py-8 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-navy-800"
              >
                {t(group.key)}
                {group.children && (
                  <ChevronDown
                    className={`text-bronze transition-transform duration-200 ${
                      desktopOpenKey === group.key ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {group.children && (
                <div
                  className={`absolute top-full left-1/2 w-72 -translate-x-1/2 border border-line bg-paper shadow-[0_18px_40px_-16px_rgba(15,35,55,0.25)] transition-all duration-200 ${
                    desktopOpenKey === group.key
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-1 opacity-0'
                  }`}
                >
                  <Link
                    href={group.href}
                    className="block border-b border-line px-5 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bronze hover:bg-cream"
                  >
                    {t('overview')}
                  </Link>
                  <ul className="py-2">
                    {group.children.map((child) => (
                      <li key={child.slug}>
                        <Link
                          href={`${group.href}/${child.slug}`}
                          className="block px-5 py-2.5 text-[0.94rem] leading-snug text-ink/80 transition-colors hover:bg-cream hover:text-navy-800"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <span aria-hidden className="h-5 w-px bg-line" />
          <LanguageSwitch />
          <Link
            href="/kontakt"
            className="border border-navy-800 bg-navy-800 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-transparent hover:text-navy-800"
          >
            {t('cta')}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? t('menuClose') : t('menuOpen')}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-navy-800 transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-navy-800 transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } absolute inset-x-0 top-full z-40 h-[calc(100svh-5rem)] overflow-y-auto bg-paper transition-opacity duration-300`}
      >
        <nav className="flex flex-col px-6 pt-2 pb-12" aria-label="Mobile">
          {groups.map((group) => (
            <div key={group.key} className="border-b border-line">
              {group.children ? (
                <>
                  <div className="flex items-center justify-between">
                    <Link
                      href={group.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-5 font-serif text-3xl font-medium text-navy-800"
                    >
                      {t(group.key)}
                    </Link>
                    <button
                      type="button"
                      aria-label={t(group.key)}
                      aria-expanded={mobileOpenKey === group.key}
                      onClick={() =>
                        setMobileOpenKey((k) => (k === group.key ? null : group.key))
                      }
                      className="flex h-14 w-14 shrink-0 items-center justify-center text-navy-800"
                    >
                      <ChevronDown
                        className={`h-2.5 w-4 transition-transform duration-200 ${
                          mobileOpenKey === group.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileOpenKey === group.key && (
                    <ul className="pb-4">
                      {group.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={`${group.href}/${child.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-2.5 text-lg text-ink/75"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={group.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-serif text-3xl font-medium text-navy-800"
                >
                  {t(group.key)}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="bg-navy-800 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-paper"
            >
              {t('cta')}
            </Link>
            <LanguageSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
