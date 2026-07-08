import { useTranslations } from 'next-intl';
import Kicker from '@/components/ui/Kicker';

type Props = {
  namespace: 'imprint' | 'privacy';
};

type Section = {
  heading: string;
  body: string;
};

export default function LegalPage({ namespace }: Props) {
  const t = useTranslations(namespace);
  const sections = t.raw('sections') as Section[];

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-28">
        <Kicker>Jannik Conrady Consulting</Kicker>
        <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.06] font-medium text-navy-800">
          {t('title')}
        </h1>
        <div className="mt-14">
          {sections.map((section) => (
            <section key={section.heading} className="border-t border-line py-8 last:border-b">
              <h2 className="font-serif text-xl font-semibold text-navy-800">
                {section.heading}
              </h2>
              <p className="mt-4 text-[0.94rem] leading-relaxed whitespace-pre-line text-mist">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
