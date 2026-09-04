import { T, JK, GREEN } from "@/lib/theme";
import { useTheme } from "@/lib/store";
import { IconArrowRight } from "@/lib/icons";
import { Link } from "react-router";

interface PageHeroProps {
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
      className={`relative ${minHeight} flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden scanlines`}
      style={{
        backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
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
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wider"
              style={{ borderColor: T.certBorder, background: T.certBg, color: T.certText }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: T.certText }} />
              {badge}
            </div>
          </div>
        )}

        {eyebrow && (
          <div className="fade-up delay-1 flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>{eyebrow}</span>
          </div>
        )}

        <h1 className="fade-up delay-2 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 max-w-4xl"
          style={{ fontFamily: JK, color: T.fg }}>
          {accent ? (
            <>
              {title.split(accent)[0]}
              <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", background: "linear-gradient(90deg, #00FF66 0%, #00ccff 100%)" }}>
                {accent}
              </span>
              {title.split(accent)[1]}
            </>
          ) : title}
        </h1>

        {subtitle && (
          <p className="fade-up delay-3 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: T.muted }}>
            {subtitle}
          </p>
        )}

        {(ctaPrimary || ctaSecondary) && (
          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            {ctaPrimary && (
              <Link to={ctaPrimary.to} className="glow-btn flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: GREEN, color: "#050505" }}>
                {ctaPrimary.label} <IconArrowRight />
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: T.border, color: T.fg }}>
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="fade-up delay-4 mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.val} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black" style={{ fontFamily: JK, color: GREEN }}>{s.val}</span>
                <span className="text-xs tracking-wide uppercase" style={{ color: T.dim }}>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
