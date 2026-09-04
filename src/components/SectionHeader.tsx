import { T, JK, GREEN } from "@/lib/theme";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: Props) {
  const align = center ? "items-center justify-center text-center" : "items-start";
  return (
    <div className={`flex flex-col ${align} mb-12`}>
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-10 bg-[#00FF66]" />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>{eyebrow}</span>
        {center && <div className="h-px w-10 bg-[#00FF66]" />}
      </div>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-2xl" style={{ fontFamily: JK, color: T.fg }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: T.muted }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
