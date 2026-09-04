import { T, JK, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconShield, IconLeaf, IconCheck, IconFileText } from "@/components/icons";

const products = [
  { name: "ETS FoodSafe Cleaner", desc: "NSF H1 registered food-contact-safe cleaner for food processing surfaces, conveyors, and equipment. Zero flavor taint.", cert: "NSF H1" },
  { name: "ETS PackhouseClean", desc: "Specialist formulation for fresh produce packhouse environments. Safe for use around open food products.", cert: "NSF H1 · REACH" },
  { name: "AquaSmarter™ HACCP", desc: "pH-neutral, non-corrosive cleaner for commercial kitchen surfaces, stainless steel equipment, and food preparation areas.", cert: "NSF H1 · REACH" },
  { name: "ETS CIP Cleaner", desc: "Clean-In-Place concentrate for food and beverage processing equipment. Full HACCP documentation package included.", cert: "NSF H1" },
];

const haccpSteps = [
  { num: "01", title: "Hazard Analysis", desc: "ETS provides full documentation of product chemical composition to support HACCP hazard analysis at CCP." },
  { num: "02", title: "Critical Control Points", desc: "Products are tested and certified safe for incidental food contact — compliant with CCP cleaning and sanitisation." },
  { num: "03", title: "Monitoring", desc: "Consistent formulation across batch production enables reliable HACCP monitoring and verification records." },
  { num: "04", title: "Documentation", desc: "Full regulatory documentation pack available: CoA, SDS, NSF H1 registration, and HACCP compliance letter." },
];

export default function HACCP() {
  return (
    <>
      <PageHero
        eyebrow="HACCP / Food Safety"
        title="NSF H1 registered. Zero taint. Full compliance."
        accent="Zero taint."
        subtitle="Certified food-safe cleaning formulations for food processing, packhouses, and commercial kitchens — with complete HACCP documentation."
        imgUrl="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1920&h=1080&fit=crop&auto=format"
        badge="NSF H1 REGISTERED · HACCP COMPLIANT · REACH"
        ctaPrimary={{ label: "Talk to a Food Safety Specialist", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
        stats={[
          { val: "NSF H1", label: "Registered" },
          { val: "0", label: "Flavor taint risk" },
          { val: "100%", label: "Biodegradable" },
          { val: "HACCP", label: "Documentation included" },
        ]}
      />

      {/* Challenge */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Food Safety Challenge" title="Clean food facilities demand certified chemistry." />
            <p className="text-base leading-relaxed mb-5" style={{ color: T.muted }}>
              Food production facilities operate under HACCP plans that govern every cleaning product used in the facility. A single non-compliant cleaner can result in a failed audit, product recall, or production shutdown.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              ETS food-safe formulations are NSF H1 registered, confirming their safety for incidental food contact. Full HACCP compliance documentation — including product SDS, NSF registration certificates, and HACCP compliance letters — is provided with every commercial order.
            </p>
            <div className="space-y-3">
              {[
                "NSF H1 registered — approved for incidental food contact",
                "Zero flavor or odor taint on food contact surfaces",
                "No allergen cross-contamination risk",
                "Biodegradable — safe for food facility wastewater systems",
                "Full HACCP documentation package on request",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: GREEN }}><IconCheck /></span>
                  <span className="text-sm" style={{ color: T.muted }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "420px" }}>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format"
              alt="Food processing facility" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.5) 0%, rgba(0,0,0,0) 50%)" }} />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="ETS HACCP Products" title="NSF H1 certified. Ready for your HACCP plan." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {products.map((p) => (
              <div key={p.name} className="bento-card p-5 rounded-2xl border flex flex-col" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  <IconShield />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{p.name}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: T.muted }}>{p.desc}</p>
                <span className="text-xs font-semibold" style={{ color: GREEN }}>{p.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HACCP process */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>HACCP Integration</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white" style={{ fontFamily: JK }}>
              ETS fits your HACCP plan.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {haccpSteps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-3xl font-black mb-3" style={{ fontFamily: JK, color: GREEN }}>{step.num}</div>
                <h3 className="font-bold text-sm mb-2 text-white" style={{ fontFamily: JK }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Documentation" title="Every document your HACCP team needs." center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { name: "NSF H1 Registration Certificate", desc: "Official NSF International H1 registration certificate for food-grade use." },
              { name: "Safety Data Sheet (SDS)", desc: "REACH-compliant SDS in multiple languages for all HACCP product lines." },
              { name: "HACCP Compliance Letter", desc: "Formal HACCP compliance letter for inclusion in facility HACCP documentation." },
              { name: "Certificate of Analysis (CoA)", desc: "Batch-level CoA confirming product composition and specification compliance." },
              { name: "Dilution & Application Guide", desc: "Validated dilution ratios, contact times, and application methods for HACCP records." },
              { name: "Environmental Declaration", desc: "Biodegradability and aquatic toxicity data for wastewater compliance." },
            ].map((doc) => (
              <div key={doc.name} className="bento-card p-5 rounded-2xl border flex gap-4 items-start" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  <IconFileText />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ fontFamily: JK, color: T.fg }}>{doc.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to update your HACCP plan?"
        accent="HACCP plan?"
        subtitle="Our food safety specialists will provide the documentation your team needs to integrate ETS products into your HACCP system."
        ctaPrimary={{ label: "Contact Food Safety Team", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
      />
    </>
  );
}
