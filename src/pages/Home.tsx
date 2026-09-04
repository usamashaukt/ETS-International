import { Link } from "react-router";
import { useTheme } from "@/lib/store";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import {
  IconPlane, IconFactory, IconAnchor, IconShield, IconLeaf, IconNoSolvent,
  IconRecycle, IconCoins, IconDrop, IconDiamond, IconArrowRight,
} from "@/lib/icons";

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
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden scanlines"
        style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1920&h=1080&fit=crop&auto=format"
            alt="Jet turbine engine macro" className="w-full h-full object-cover object-center" style={{ opacity: "var(--img-opacity)" }} />
          <div className="absolute inset-0" style={{ background: T.heroOverlay }} />
        </div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)", opacity: isDark ? 0.5 : 0.25 }} />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wider"
              style={{ borderColor: T.certBorder, background: T.certBg, color: T.certText }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: T.certText }} />
              ISO 9001 CERTIFIED · REACH COMPLIANT · NATO APPROVED
            </div>
          </div>

          <h1 className="fade-up delay-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight mb-6 max-w-5xl"
            style={{ fontFamily: JK, color: T.fg }}>
            Free your{" "}
            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", background: "linear-gradient(90deg, #00FF66 0%, #00ccff 100%)" }}>
              environmental
            </span>
            {" "}thinking for a better, clean world.
          </h1>

          <p className="fade-up delay-3 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: T.muted }}>
            {i.heroBody}
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            <Link to="/industries" className="glow-btn flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: GREEN, color: "#050505" }}>
              {i.heroCta1} <IconArrowRight />
            </Link>
            <Link to="/certifications" className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm border transition-all duration-200"
              style={{ borderColor: T.border, color: T.fg }}>
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
                <span className="text-3xl font-black" style={{ fontFamily: JK, color: GREEN }}>{s.val}</span>
                <span className="text-xs tracking-wide uppercase" style={{ color: T.dim }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: T.dim }}>Scroll</span>
          <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${T.dim}, transparent)` }} />
        </div>
      </section>

      {/* TRUST TICKER */}
      <section id="certifications" className="py-10 border-t border-b" style={{ borderColor: T.borderSubtle }}>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${T.bg}, transparent)` }} />
          <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${T.bg}, transparent)` }} />
          <div className="ticker-track">
            {[...TrustLogos, ...TrustLogos, ...TrustLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 px-10 shrink-0" style={{ opacity: "var(--ticker-opacity)" }}>
                <span className="text-lg font-black tracking-widest" style={{ fontFamily: JK, color: T.fg }}>{logo.name}</span>
                <span className="text-xs tracking-wider uppercase" style={{ color: T.dim }}>{logo.sub}</span>
                <div className="w-px h-4 ml-6" style={{ background: T.border }} />
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
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>{i.industryTitle}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-lg" style={{ fontFamily: JK, color: T.fg }}>
              Built for the world's most demanding environments.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {/* Aviation */}
            <div className="bento-card relative overflow-hidden rounded-2xl border lg:col-span-2 lg:row-span-2" style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: "380px" }}>
              <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=900&h=600&fit=crop&auto=format"
                alt="Aircraft jet turbine engine" className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.3) 55%, rgba(0,0,0,0) 100%)" }} />
              <div className="relative z-10 h-full flex flex-col justify-between p-7" style={{ minHeight: "380px" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,255,102,0.1)", border: "1px solid rgba(0,255,102,0.2)", color: GREEN }}>
                  <IconPlane />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: "rgba(255,255,255,0.5)" }}>{i.aviationSub}</span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ fontFamily: JK, color: "#ffffff" }}>{i.aviation}</h3>
                  <p className="text-sm leading-relaxed max-w-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>{i.aviationDesc}</p>
                  <Link to="/industries/aviation" className="inline-flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200" style={{ color: GREEN }}>
                    {i.aviationCta} <IconArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className="bento-card relative overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: "180px" }}>
              <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format"
                alt="Industrial factory" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full" style={{ minHeight: "180px" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,204,255,0.15)", border: "1px solid rgba(0,204,255,0.3)", color: CYAN }}>
                  <IconFactory />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block" style={{ color: "rgba(255,255,255,0.5)" }}>{i.industrialSub}</span>
                  <h3 className="text-lg font-black mb-1" style={{ fontFamily: JK, color: "#ffffff" }}>{i.industrial}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{i.industrialDesc}</p>
                </div>
              </div>
            </div>

            {/* Marine */}
            <div className="bento-card relative overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: "180px" }}>
              <img src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format"
                alt="Offshore drilling rig" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full" style={{ minHeight: "180px" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(10,25,47,0.6)", border: "1px solid rgba(0,100,200,0.4)", color: "#4499ff" }}>
                  <IconAnchor />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block" style={{ color: "rgba(255,255,255,0.5)" }}>{i.marineSub}</span>
                  <h3 className="text-lg font-black mb-1" style={{ fontFamily: JK, color: "#ffffff" }}>{i.marine}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{i.marineDesc}</p>
                </div>
              </div>
            </div>

            {/* HACCP */}
            <div className="bento-card relative overflow-hidden rounded-2xl border sm:col-span-2 lg:col-span-3" style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: "160px" }}>
              <img src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&h=300&fit=crop&auto=format"
                alt="Food safety clean room" className="absolute inset-0 w-full h-full object-cover object-top" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.7) 30%, rgba(0,0,0,0) 100%)" }} />
              <div className="relative z-10 flex items-center gap-8 p-6 h-full" style={{ minHeight: "160px" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,255,102,0.08)", border: "1px solid rgba(0,255,102,0.2)", color: GREEN }}>
                  <IconShield />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold tracking-widest uppercase mb-1 block" style={{ color: "rgba(255,255,255,0.5)" }}>{i.haccpSub}</span>
                  <h3 className="text-xl font-black mb-1.5" style={{ fontFamily: JK, color: "#ffffff" }}>{i.haccp}</h3>
                  <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{i.haccpDesc}</p>
                </div>
                <Link to="/industries/haccp" className="hidden lg:flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200 shrink-0 mr-4" style={{ color: GREEN }}>
                  {i.haccpCta} <IconArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ETS */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>The ETS Advantage</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: JK, color: T.fg }}>{i.whySubtitle}</h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: T.muted }}>
              Our formulations outperform conventional solvents — without the environmental cost, health hazards, or regulatory burden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="bento-card group p-6 rounded-2xl border transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN, boxShadow: "0 0 20px rgba(0,255,102,0.08)" }}>
                  {adv.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: JK, color: T.fg }}>{adv.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{adv.desc}</p>
                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(to right, #00FF66, transparent)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,102,0.08) 0%, transparent 70%)", opacity: isDark ? 0.8 : 0.35 }} />
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>Feature Spotlight</span>
          </div>

          {/* AquaSmarter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
              <img src="https://images.unsplash.com/photo-1781707436000-18016e244e87?w=800&h=600&fit=crop&auto=format"
                alt="AquaSmarter" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.08) 0%, rgba(0,204,255,0.06) 100%)" }} />
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                style={{ background: "rgba(0,255,102,0.15)", border: "1px solid rgba(0,255,102,0.3)", color: GREEN }}>
                AQUASMARTER™
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 w-fit"
                style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
                <IconDrop /> Water-Based Technology
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: JK, color: T.fg }}>
                AquaSmarter™ <br /><span style={{ color: T.dim }}>Next-gen clean.</span>
              </h2>
              <p className="leading-relaxed mb-8 text-base" style={{ color: T.muted }}>
                AquaSmarter represents a breakthrough in water-activated chemistry. Engineered without solvents, phosphates, or caustic agents — completely safe for operators, surfaces, and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["pH-neutral formula", "Non-flammable", "No PPE required", "REACH registered"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm" style={{ color: T.muted }}>
                    <span style={{ color: GREEN, fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <Link to="/technology/aquasmarter" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200" style={{ color: GREEN }}>
                View AquaSmarter specifications <IconArrowRight />
              </Link>
            </div>
          </div>

          {/* Nano Diamond */}
          <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12"
            style={{
              background: isDark ? "linear-gradient(135deg, rgba(10,25,47,0.9) 0%, rgba(5,5,5,0.95) 100%)" : "linear-gradient(135deg, rgba(10,25,47,0.06) 0%, rgba(10,25,47,0.03) 100%)",
              border: "1px solid rgba(0,255,102,0.12)",
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.6 }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit"
                  style={{ background: "rgba(0,204,255,0.08)", border: "1px solid rgba(0,204,255,0.2)", color: CYAN }}>
                  <IconDiamond /> Nano Diamond Technology
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: JK, color: T.fg }}>Nano Diamond™</h2>
                <p className="leading-relaxed mb-6" style={{ color: T.muted }}>
                  Our patented Nano Diamond lubricant additive reduces engine friction at the molecular level. Independent testing across commercial fleets confirms measurable fuel savings and extended engine life.
                </p>
                <Link to="/technology/nano-diamond" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200" style={{ color: T.fg }}>
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
                  <div key={stat.label} className="p-5 rounded-xl" style={{ background: T.statBg, border: `1px solid ${T.border}` }}>
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: JK, color: stat.color }}>{stat.val}</div>
                    <div className="text-xs leading-snug" style={{ color: T.dim }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl px-8 py-16 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.06) 0%, rgba(0,100,200,0.04) 100%)", border: "1px solid rgba(0,255,102,0.12)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.5 }} />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: JK, color: T.fg }}>
                Ready to go <span style={{ color: GREEN }}>solvent-free?</span>
              </h2>
              <p className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: T.muted }}>
                Speak with our technical team about a custom cleaning solution. We provide free sample kits and full regulatory documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote" className="glow-btn px-10 py-4 rounded-full font-semibold text-sm" style={{ background: GREEN, color: "#050505" }}>
                  Request a Free Sample
                </Link>
                <Link to="/products" className="px-10 py-4 rounded-full font-semibold text-sm border transition-colors" style={{ borderColor: T.border, color: T.fg }}>
                  Download Product Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
