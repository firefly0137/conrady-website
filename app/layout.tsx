import type { ReactNode } from 'react';

// Root layout is minimal — html/body come from app/[locale]/layout.tsx
// This allows the locale layout to set lang={locale} correctly (i18n pattern)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: ReactNode }): any {
  return children;
}
