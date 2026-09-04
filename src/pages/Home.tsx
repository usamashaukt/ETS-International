import { Link } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { T, GREEN, CYAN } from "@/theme";
import {
  IconPlane, IconFactory, IconAnchor, IconShield, IconLeaf, IconNoSolvent,
  IconRecycle, IconCoins, IconDrop, IconDiamond, IconArrowRight,
} from "@/components/icons";
import { CtaBanner } from "@/components/shared";

const TrustLogos = [
  { name: "AIRBUS", sub: "Approved" }, { name: "BOEING", sub: "Qualified" },
  { name: "NATO", sub: "Compliant" }, { name: "REACH", sub: "Registered" },
  { name: "ISO 9001", sub: "Certified" }, { name: "EASA", sub: "Compliant" }, { name: "OSHA", sub: "Verified" },
];

const advantages = [
  { icon: <IconLeaf />, title: "100% Biodegradable", desc: "Fully breaks down in natural environments. Zero toxic residue. Certifiably safe for ecosystems." },
  { icon: <IconNoSolvent />, title: "Solvent-Free", desc: "No petroleum distillates, no VOCs, no hazardous solvents. Safe for operators and surfaces." },
  { icon: <IconRecycle />, title: "Re-useable Formula", desc: "Concentrated solutions dilute up to 1:100. Recyclable packaging with refill programs available." },
  { icon: <IconCoins />, title: "Cost-Efficient", desc: "Lower total cost of ownership versus conventional solvents — reduced disposal fees and PPE costs." },
];

export default function Home() {
  const { isDark, i } = useTheme();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden scanlines grid-bg">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1920&h=1080&fit=crop&auto=format"
            alt="Jet turbine engine macro" className="w-full h-full object-cover object-center" style={{ opacity: "var(--img-opacity)" }} />
          <div className="absolute inset-0" style={{ background: T.heroOverlay }} />
        </div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)", opacity: isDark ? 0.5 : 0.25 }} />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8">
            <div className="badge-cert">
              <span className="badge-dot" />
              ISO 9001 CERTIFIED · REACH COMPLIANT · NATO APPROVED
            </div>
          </div>

          <h1 className="fade-up delay-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight mb-6 max-w-5xl font-display text-theme-fg">
            Free your{" "}
            <span className="text-gradient-neon">
              environmental
            </span>
            {" "}thinking for a better, clean world.
          </h1>

          <p className="fade-up delay-3 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed text-theme-muted">
            {i.heroBody}
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            <Link to="/industries" className="btn-neon glow-btn hover:scale-105">
              {i.heroCta1} <IconArrowRight />
            </Link>
            <Link to="/certifications" className="btn-secondary">
              {i.heroCta2}
            </Link>
          </div>

          <div className="fade-up delay-4 mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { val: "6%+", label: "Fuel savings with Nano Diamond" },
              { val: "100%", label: "Biodegradable formulations" },
              { val: "40+", label: "Countries served globally" },
              { val: "1:100", label: "Dilution ratio — cost efficient" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black font-display text-theme-neon">{s.val}</span>
                <span className="text-xs tracking-wide uppercase text-theme-dim">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-theme-dim">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--fg-dim)] to-transparent" />
        </div>
      </section>

      {/* TRUST TICKER */}
      <section id="certifications" className="py-10 border-t border-b border-theme-subtle">
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg)] to-transparent" />
          <div className="ticker-track">
            {[...TrustLogos, ...TrustLogos, ...TrustLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 px-10 shrink-0" style={{ opacity: "var(--ticker-opacity)" }}>
                <span className="text-lg font-black tracking-widest font-display text-theme-fg">{logo.name}</span>
                <span className="text-xs tracking-wider uppercase text-theme-dim">{logo.sub}</span>
                <div className="w-px h-4 ml-6 border-r border-theme" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES BENTO */}
      <section id="industries" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-theme-neon">{i.industryTitle}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-lg font-display text-theme-fg">
              Built for the world's most demanding environments.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {/* Aviation */}
            <div className="card-bento relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2" style={{ minHeight: "380px" }}>
              <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=900&h=600&fit=crop&auto=format"
                alt="Aircraft jet turbine engine" className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,18,0.92)] via-[rgba(3,8,18,0.3)] to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-7" style={{ minHeight: "380px" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(0,255,102,0.1)] border border-[rgba(0,255,102,0.2)] text-theme-neon">
                  <IconPlane />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-2 block text-white/50">{i.aviationSub}</span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3 font-display text-white">{i.aviation}</h3>
                  <p className="text-sm leading-relaxed max-w-sm mb-5 text-white/70">{i.aviationDesc}</p>
                  <Link to="/industries/aviation" className="inline-flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200 text-theme-neon">
                    {i.aviationCta} <IconArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className="card-bento relative overflow-hidden rounded-2xl" style={{ minHeight: "180px" }}>
              <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format"
                alt="Industrial factory" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,18,0.92)] via-[rgba(3,8,18,0.2)] to-transparent" />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full" style={{ minHeight: "180px" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(0,204,255,0.15)] border border-[rgba(0,204,255,0.3)] text-theme-cyan">
                  <IconFactory />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block text-white/50">{i.industrialSub}</span>
                  <h3 className="text-lg font-black mb-1 font-display text-white">{i.industrial}</h3>
                  <p className="text-xs leading-relaxed text-white/70">{i.industrialDesc}</p>
                </div>
              </div>
            </div>

            {/* Marine */}
            <div className="card-bento relative overflow-hidden rounded-2xl" style={{ minHeight: "180px" }}>
              <img src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format"
                alt="Offshore drilling rig" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,18,0.92)] via-[rgba(3,8,18,0.2)] to-transparent" />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full" style={{ minHeight: "180px" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(10,25,47,0.6)] border border-[rgba(0,100,200,0.4)] text-[#4499ff]">
                  <IconAnchor />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block text-white/50">{i.marineSub}</span>
                  <h3 className="text-lg font-black mb-1 font-display text-white">{i.marine}</h3>
                  <p className="text-xs leading-relaxed text-white/70">{i.marineDesc}</p>
                </div>
              </div>
            </div>

            {/* HACCP */}
            <div className="card-bento relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-3" style={{ minHeight: "160px" }}>
              <img src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&h=300&fit=crop&auto=format"
                alt="Food safety clean room" className="absolute inset-0 w-full h-full object-cover object-top" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(3,8,18,0.92)] via-[rgba(3,8,18,0.7)] to-transparent" />
              <div className="relative z-10 flex items-center gap-8 p-6 h-full" style={{ minHeight: "160px" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(0,255,102,0.08)] border border-[rgba(0,255,102,0.2)] text-theme-neon">
                  <IconShield />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block text-white/50">{i.haccpSub}</span>
                  <h3 className="text-xl font-black mb-1.5 font-display text-white">{i.haccp}</h3>
                  <p className="text-sm max-w-xl leading-relaxed text-white/70">{i.haccpDesc}</p>
                </div>
                <Link to="/industries/haccp" className="hidden lg:flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200 shrink-0 mr-4 text-theme-neon">
                  {i.haccpCta} <IconArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ETS */}
      <section className="py-24 px-6 border-t border-theme-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-theme-neon">The ETS Advantage</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-theme-fg">{i.whySubtitle}</h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-theme-muted">
              Our formulations outperform conventional solvents — without the environmental cost, health hazards, or regulatory burden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="card-glass group p-6 rounded-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 bg-[rgba(0,255,102,0.07)] border border-[rgba(0,255,102,0.15)] text-theme-neon shadow-[0_0_20px_rgba(0,255,102,0.08)]">
                  {adv.icon}
                </div>
                <h3 className="font-bold text-base mb-2 font-display text-theme-fg">{adv.title}</h3>
                <p className="text-xs leading-relaxed text-theme-muted">{adv.desc}</p>
                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#00FF66] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-theme-subtle">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,102,0.08) 0%, transparent 70%)", opacity: isDark ? 0.8 : 0.35 }} />
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-theme-neon">Feature Spotlight</span>
          </div>

          {/* AquaSmarter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
              <img src="https://images.unsplash.com/photo-1781707436000-18016e244e87?w=800&h=600&fit=crop&auto=format"
                alt="AquaSmarter" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,102,0.08)] to-[rgba(0,204,255,0.06)]" />
              <div className="absolute top-5 left-5 badge-cert">
                <span className="badge-dot" />
                AQUASMARTER™
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6 w-fit badge-cert">
                <IconDrop /> Water-Based Technology
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 font-display text-theme-fg">
                AquaSmarter™ <br /><span className="text-theme-dim">Next-gen clean.</span>
              </h2>
              <p className="leading-relaxed mb-8 text-base text-theme-muted">
                AquaSmarter represents a breakthrough in water-activated chemistry. Engineered without solvents, phosphates, or caustic agents — completely safe for operators, surfaces, and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["pH-neutral formula", "Non-flammable", "No PPE required", "REACH registered"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-theme-muted">
                    <span className="text-theme-neon font-bold">✓</span> {f}
                  </div>
                ))}
              </div>
              <Link to="/technology/aquasmarter" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 text-theme-neon">
                View AquaSmarter specifications <IconArrowRight />
              </Link>
            </div>
          </div>

          {/* Nano Diamond */}
          <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 card-glass border border-[rgba(0,255,102,0.12)]">
            <div className="absolute inset-0 pointer-events-none grid-bg opacity-60" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit bg-[rgba(0,204,255,0.08)] border border-[rgba(0,204,255,0.2)] text-theme-cyan">
                  <IconDiamond /> Nano Diamond Technology
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 font-display text-theme-fg">Nano Diamond™</h2>
                <p className="leading-relaxed mb-6 text-theme-muted">
                  Our patented Nano Diamond lubricant additive reduces engine friction at the molecular level. Independent testing across commercial fleets confirms measurable fuel savings and extended engine life.
                </p>
                <Link to="/technology/nano-diamond" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-theme-fg hover:text-theme-neon">
                  Download test results <IconArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "6%+", label: "Minimum fuel savings", color: GREEN },
                  { val: "40%", label: "Reduction in engine wear", color: CYAN },
                  { val: "2×", label: "Extended oil change intervals", color: GREEN },
                  { val: "0", label: "Toxic nanoparticle release", color: CYAN },
                ].map((stat) => (
                  <div key={stat.label} className="p-5 rounded-xl bg-theme-surface border border-theme">
                    <div className="text-3xl font-black mb-1 font-display" style={{ color: stat.color }}>{stat.val}</div>
                    <div className="text-xs leading-snug text-theme-dim">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner
        title="Ready to go solvent-free?"
        accent="solvent-free?"
        subtitle="Speak with our technical team about a custom cleaning solution. We provide free sample kits and full regulatory documentation."
        ctaPrimary={{ label: "Request a Free Sample", to: "/quote" }}
        ctaSecondary={{ label: "Download Product Catalog", to: "/products" }}
      />
    </>
  );
}
