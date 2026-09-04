import { Link } from "react-router";
import { IconArrowRight } from "@/components/icons";

export interface CtaBannerProps {
  title: string;
  accent?: string;
  subtitle: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
}

export default function CtaBanner({ title, accent, subtitle, ctaPrimary, ctaSecondary }: CtaBannerProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl px-8 py-16 overflow-hidden card-glass">
          <div className="absolute inset-0 pointer-events-none grid-bg opacity-50" />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 font-display text-theme-fg">
              {accent ? (
                <>
                  {title.split(accent)[0]}
                  <span className="text-theme-neon">{accent}</span>
                  {title.split(accent)[1]}
                </>
              ) : title}
            </h2>
            <p className="max-w-xl mx-auto mb-8 leading-relaxed text-theme-muted">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ctaPrimary.to} className="btn-neon px-10 py-4 glow-btn">
                {ctaPrimary.label} <IconArrowRight />
              </Link>
              {ctaSecondary && (
                <Link to={ctaSecondary.to} className="btn-secondary px-10 py-4">
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
