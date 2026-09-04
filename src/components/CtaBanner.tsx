import { Link } from "react-router";
import { T, JK, GREEN } from "@/lib/theme";
import { IconArrowRight } from "@/lib/icons";

interface Props {
  title: string;
  accent?: string;
  subtitle: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
}

export default function CtaBanner({ title, accent, subtitle, ctaPrimary, ctaSecondary }: Props) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl px-8 py-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.06) 0%, rgba(0,100,200,0.04) 100%)", border: "1px solid rgba(0,255,102,0.12)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.5 }} />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: JK, color: T.fg }}>
              {accent ? (
                <>
                  {title.split(accent)[0]}
                  <span style={{ color: GREEN }}>{accent}</span>
                  {title.split(accent)[1]}
                </>
              ) : title}
            </h2>
            <p className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: T.muted }}>{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ctaPrimary.to} className="glow-btn px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 justify-center"
                style={{ background: GREEN, color: "#050505" }}>
                {ctaPrimary.label} <IconArrowRight />
              </Link>
              {ctaSecondary && (
                <Link to={ctaSecondary.to} className="px-10 py-4 rounded-full font-semibold text-sm border transition-colors"
                  style={{ borderColor: T.border, color: T.fg }}>
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
