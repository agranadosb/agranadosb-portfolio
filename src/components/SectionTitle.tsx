interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-ink-primary tracking-tight mb-4">
        {children}
      </h2>
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="w-8 h-px bg-border" />
      </div>
    </div>
  );
}
