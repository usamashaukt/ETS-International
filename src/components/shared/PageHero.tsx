import { Link } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { useTheme } from "@/context/ThemeContext";
import { IconArrowRight } from "@/components/icons";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  accent?: string; // word(s) to render in gradient
  subtitle?: string;
  imgUrl?: string;
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  badge?: string;
  stats?: { val: string; label: string }[];
  minHeight?: string;
}

export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  imgUrl,
  ctaPrimary,
  ctaSecondary,
  badge,
  stats,
  minHeight = "min-h-[70vh]",
}: PageHeroProps) {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative ${minHeight} flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden scanlines grid-bg`}
    >
      {imgUrl && (
        <div className="absolute inset-0 z-0">
          <img src={imgUrl} alt="" className="w-full h-full object-cover object-center" style={{ opacity: "var(--img-opacity)" }} />
          <div className="absolute inset-0" style={{ background: T.heroOverlay }} />
        </div>
      )}

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)", opacity: isDark ? 0.5 : 0.25 }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {badge && (
          <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8">
            <div className="badge-cert">
              <span className="badge-dot" />
              {badge}
            </div>
          </div>
        )}

        {eyebrow && (
          <div className="fade-up delay-1 eyebrow-accent mb-6">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span>{eyebrow}</span>
          </div>
        )}

        <h1 className="fade-up delay-2 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 max-w-4xl font-display text-theme-fg">
          {accent ? (
            <>
              {title.split(accent)[0]}
              <span className="text-gradient-neon">
                {accent}
              </span>
              {title.split(accent)[1]}
            </>
          ) : title}
        </h1>

        {subtitle && (
          <p className="fade-up delay-3 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed text-theme-muted">
            {subtitle}
          </p>
        )}

        {(ctaPrimary || ctaSecondary) && (
          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            {ctaPrimary && (
              <Link to={ctaPrimary.to} className="btn-neon glow-btn hover:scale-105">
                {ctaPrimary.label} <IconArrowRight />
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="fade-up delay-4 mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.val} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black font-display text-theme-neon">{s.val}</span>
                <span className="text-xs tracking-wide uppercase text-theme-dim">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
