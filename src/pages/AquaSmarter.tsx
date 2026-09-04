import { GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconDrop, IconLeaf, IconShield, IconPlane, IconAnchor, IconFactory } from "@/components/icons";

const steps = [
  { num: "01", title: "Water Activation", desc: "AquaSmarter concentrates are diluted with water at ratios from 1:10 to 1:100 — the water activates the surfactant system." },
  { num: "02", title: "Surface Contact", desc: "The activated formula penetrates and lifts contamination at the molecular level — oils, greases, carbon deposits, and biological soiling." },
  { num: "03", title: "Safe Removal", desc: "Contamination is held in suspension for removal without damaging underlying surfaces, coatings, or seals." },
  { num: "04", title: "Complete Breakdown", desc: "Rinsate and residues biodegrade completely in natural water systems — leaving no toxic trace." },
];

const features = [
  { icon: <IconLeaf />, title: "pH-Neutral Formula", desc: "No alkaline or acid damage to sensitive surfaces including composites, anodized aluminum, and rubber seals." },
  { icon: <IconShield />, title: "Non-Flammable", desc: "No flash point — no hot work permits, no explosion-proof storage, no ventilation requirements." },
  { icon: <IconDrop />, title: "REACH Registered", desc: "Full EU chemical substance registration. Complete SDS documentation in all major languages." },
  { icon: <IconLeaf />, title: "No PPE Required", desc: "Safe for skin contact. No gloves, respirators, or protective eyewear required for standard application." },
];

export default function AquaSmarter() {
  return (
    <>
      <PageHero
        eyebrow="AquaSmarter™ Technology"
        title="Water. Activated. Powerful."
        accent="Powerful."
        subtitle="AquaSmarter is ETS International's water-based cleaning platform — engineered without solvents, phosphates, or caustic agents. Performance without compromise."
        imgUrl="https://images.unsplash.com/photo-1781707436000-18016e244e87?w=1920&h=1080&fit=crop&auto=format"
        badge="pH-NEUTRAL · NON-FLAMMABLE · REACH REGISTERED · 100% BIODEGRADABLE"
        ctaPrimary={{ label: "Discover AquaSmarter", to: "/quote" }}
        ctaSecondary={{ label: "Contact Technical Team", to: "/contact" }}
        stats={[
          { val: "1:100", label: "Maximum dilution ratio" },
          { val: "pH 7", label: "Neutral — surface safe" },
          { val: "100%", label: "Biodegradable" },
          { val: "0", label: "Solvents or VOCs" },
        ]}
      />

      {/* What is AquaSmarter */}
      <section className="py-24 px-6 border-t border-theme-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="What is AquaSmarter?" title="Cleaning chemistry. Reinvented." />
              <p className="text-lg leading-relaxed mb-6 text-theme-muted">
                AquaSmarter is ETS International's proprietary water-based cleaning platform. Unlike conventional cleaners that rely on petroleum solvents, caustic alkalis, or phosphates, AquaSmarter uses advanced surfactant and emulsifier technology activated purely by water.
              </p>
              <p className="text-base leading-relaxed mb-6 text-theme-muted">
                The result is a cleaning system that is genuinely safe for operators, genuinely safe for surfaces, and genuinely safe for the environment — without sacrificing the cleaning performance that professional maintenance operations demand.
              </p>
              <p className="text-base leading-relaxed text-theme-muted">
                AquaSmarter products are used in aviation MRO, marine maintenance, food processing, and industrial manufacturing across 40+ countries.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px" }}>
              <img src="https://images.unsplash.com/photo-1611095973763-414019e72400?w=800&h=700&fit=crop&auto=format"
                alt="AquaSmarter water chemistry" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.06) 0%, rgba(0,204,255,0.04) 100%)" }} />
              <div className="absolute top-5 left-5 badge-cert">
                <span className="badge-dot" />
                AQUASMARTER™
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-theme-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="How It Works" title="Four steps. Complete clean." center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px z-10" style={{ background: `linear-gradient(to right, ${GREEN}40, transparent)` }} />
                )}
                <div className="card-glass p-6 rounded-2xl">
                  <div className="text-3xl font-black mb-4 font-display text-theme-neon">{step.num}</div>
                  <h3 className="font-bold text-base mb-2 font-display text-theme-fg">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-theme-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-theme-neon">{f.icon}</div>
                <h3 className="font-bold text-sm mb-2 text-white font-display">{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6 border-t border-theme-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Applications" title="AquaSmarter across industries." subtitle="One technology platform — multiple industry applications." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <IconPlane />, label: "Aviation MRO", desc: "Aircraft exterior, engine nacelles, cabin interiors, and ground support equipment. AIRBUS and BOEING approved variants.", to: "/industries/aviation", color: GREEN },
              { icon: <IconAnchor />, label: "Marine & Offshore", desc: "Hull maintenance, engine rooms, and offshore platform equipment. MARPOL compliant — safe for overboard discharge.", to: "/industries/marine", color: "#4499ff" },
              { icon: <IconFactory />, label: "Industrial", desc: "Manufacturing equipment, metal surfaces, precision parts cleaning, and weld preparation. Zero VOC.", to: "/industries/industrial", color: CYAN },
            ].map((app) => (
              <div key={app.label} className="card-glass group p-6 rounded-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `rgba(${app.color === GREEN ? "0,255,102" : app.color === CYAN ? "0,204,255" : "68,153,255"},0.08)`, border: `1px solid rgba(${app.color === GREEN ? "0,255,102" : app.color === CYAN ? "0,204,255" : "68,153,255"},0.2)`, color: app.color }}>
                  {app.icon}
                </div>
                <h3 className="font-bold text-base mb-2 font-display text-theme-fg">{app.label}</h3>
                <p className="text-xs leading-relaxed text-theme-muted">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Discover AquaSmarter™"
        accent="AquaSmarter™"
        subtitle="Request a technical briefing, free sample, or product specification pack from our team."
        ctaPrimary={{ label: "Request a Sample", to: "/quote" }}
        ctaSecondary={{ label: "Technical Documentation", to: "/contact" }}
      />
    </>
  );
}
