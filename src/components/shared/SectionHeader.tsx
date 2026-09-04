export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  const align = center ? "items-center justify-center text-center" : "items-start";
  return (
    <div className={`flex flex-col ${align} mb-12`}>
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-10 bg-[#00FF66]" />
        <span className="text-xs font-semibold tracking-widest uppercase text-theme-neon">{eyebrow}</span>
        {center && <div className="h-px w-10 bg-[#00FF66]" />}
      </div>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-2xl font-display text-theme-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-theme-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
