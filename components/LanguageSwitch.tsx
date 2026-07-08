'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

type Props = {
  light?: boolean;
};

export default function LanguageSwitch({ light = false }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: 'de' | 'en') => {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  };

  const base = 'px-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors';
  const active = light ? 'text-paper' : 'text-navy-800';
  const inactive = light
    ? 'text-paper/40 hover:text-paper/80'
    : 'text-mist/60 hover:text-navy-800';

  return (
    <div className="flex items-center gap-1" aria-label="Language">
      <button
        type="button"
        onClick={() => switchTo('de')}
        className={`${base} ${locale === 'de' ? active : inactive}`}
        aria-current={locale === 'de' ? 'true' : undefined}
      >
        DE
      </button>
      <span aria-hidden className={light ? 'text-paper/30' : 'text-line'}>
        /
      </span>
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={`${base} ${locale === 'en' ? active : inactive}`}
        aria-current={locale === 'en' ? 'true' : undefined}
      >
        EN
      </button>
    </div>
  );
}
