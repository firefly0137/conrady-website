# Jannik Conrady Consulting — Website

Moderne, mehrsprachige (DE/EN) Website im Stil institutioneller Vermögensverwalter
(Referenz: oaktreecapital.com). Gebaut mit Next.js App Router — vorbereitet für
zukünftige Erweiterungen wie Blog oder Login-Bereiche.

## Stack

- **Next.js 16** (App Router, statisch generiert, self-hosted tauglich)
- **Tailwind CSS 4** — Design-Tokens in `app/globals.css` (`@theme`)
- **next-intl** — Locales `de` (Default) und `en`, Texte in `messages/*.json`
- **framer-motion** — dezente Scroll-Reveals (`components/ui/Reveal.tsx`)
- Fonts: Cormorant Garamond (Display-Serif) + Inter (Body) via `next/font`

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000 → leitet auf /de um
npm run build    # Production-Build (alle Seiten SSG)
```

## Struktur

- `app/[locale]/page.tsx` — Startseite (Hero, Versprechen, Kerngebiete, Über mich,
  Zitat, Stimmen, Memos, Kontakt)
- `app/[locale]/impressum` · `app/[locale]/datenschutz` — Rechtsseiten
- `components/sections/*` — Sektionen der Startseite
- `messages/de.json` / `messages/en.json` — sämtliche Inhalte (auch Reviews & Memos)
- `public/memos/*.pdf` — Klienten-Memos (von der alten Website übernommen)
- `public/images/*` — Fotos (Jannik) + Unsplash-Stockbilder

## Inhalte pflegen

Alle Texte, Testimonials und Memo-Einträge liegen in `messages/de.json` und
`messages/en.json` — neue Memos dort ergänzen und das PDF in `public/memos/` legen.
