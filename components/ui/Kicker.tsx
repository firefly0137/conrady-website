type Props = {
  children: string;
  light?: boolean;
};

export default function Kicker({ children, light = false }: Props) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
        light ? 'text-bronze-light' : 'text-bronze'
      }`}
    >
      <span aria-hidden className={`h-px w-10 ${light ? 'bg-bronze-light' : 'bg-bronze'}`} />
      {children}
    </p>
  );
}
