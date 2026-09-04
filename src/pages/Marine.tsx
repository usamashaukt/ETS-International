import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconAnchor, IconLeaf, IconShield, IconCheck } from "@/components/icons";

const products = [
  { name: "ETS MarineClean", desc: "MARPOL-compliant biodegradable hull and deck cleaner. Safe for discharge in all sea areas.", cert: "MARPOL" },
  { name: "ETS EngineRoom", desc: "Heavy-duty engine room degreaser for marine propulsion systems, bilge areas, and fuel system components.", cert: "MARPOL · REACH" },
  { name: "AquaSmarter™ Marine", desc: "Water-activated all-surface cleaner for marine interiors, stainless fittings, and crew accommodation areas.", cert: "REACH" },
  { name: "ETS OffshoreClean", desc: "Specialist degreaser for offshore platform decks, lifting equipment, and industrial machinery in marine environments.", cert: "MARPOL · REACH" },
];

export default function Marine() {
  return (
    <>
      <PageHero
        eyebrow="Marine & Offshore"
        title="MARPOL-compliant. Ocean-safe."
        accent="Ocean-safe."
        subtitle="Biodegradable cleaning and maintenance solutions for commercial shipping, offshore platforms, and naval operations — certified for discharge in marine environments."
        imgUrl="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1920&h=1080&fit=crop&auto=format"
        badge="MARPOL COMPLIANT · 100% BIODEGRADABLE · REACH REGISTERED"
        ctaPrimary={{ label: "Talk to a Marine Specialist", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
        stats={[
          { val: "MARPOL", label: "Annex V & VI Compliant" },
          { val: "100%", label: "Biodegradable formula" },
          { val: "0", label: "VOC content" },
          { val: "Safe", label: "For ocean discharge" },
        ]}
      />

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Marine Challenge" title="Clean oceans start with clean ships." />
            <p className="text-base leading-relaxed mb-5" style={{ color: T.muted }}>
              The marine sector faces some of the most stringent environmental cleaning regulations in any industry. MARPOL Annex V and Annex VI, IMO regulations, and port state control requirements all mandate the use of biodegradable, ocean-safe cleaning chemistry.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              ETS marine formulations are independently tested for biodegradability and marine environmental safety — so ship operators can clean effectively while remaining in compliance, regardless of whether they are in MARPOL special areas or open ocean.
            </p>
            <div className="space-y-3">
              {[
                "MARPOL Annex V and VI compliant",
                "Certified biodegradable — safe for overboard discharge",
                "Effective on heavy fuel oil, grease, and marine fouling",
                "Non-toxic to aquatic life — OECD 306 tested",
                "Concentrated formulas reduce plastic packaging",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: "#4499ff" }}><IconCheck /></span>
                  <span className="text-sm" style={{ color: T.muted }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px" }}>
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=700&fit=crop&auto=format"
              alt="Marine offshore platform" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.6) 0%, rgba(0,0,0,0) 50%)" }} />
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="ETS Marine Products" title="Ocean-safe chemistry. No compromise." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {products.map((p) => (
              <div key={p.name} className="bento-card group p-5 rounded-2xl border flex flex-col" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(68,153,255,0.1)", border: "1px solid rgba(68,153,255,0.25)", color: "#4499ff" }}>
                  <IconAnchor />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{p.name}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: T.muted }}>{p.desc}</p>
                <span className="text-xs font-semibold" style={{ color: "#4499ff" }}>{p.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(68,153,255,0.1)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <IconShield />, title: "MARPOL Compliance", desc: "Products are tested to OECD 306 marine biodegradability standards, qualifying for use in all sea areas including MARPOL special areas." },
            { icon: <IconLeaf />, title: "Environmental Safety", desc: "Non-toxic to aquatic organisms. ETS marine formulations do not bioaccumulate and break down completely in seawater." },
            { icon: <IconAnchor />, title: "Operational Efficiency", desc: "Concentrated formulas at 1:50 to 1:100 dilution ratios reduce storage requirements on board — critical in confined marine spaces." },
          ].map((b) => (
            <div key={b.title} className="p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ color: "#4499ff" }}>{b.icon}</div>
              <h3 className="font-bold text-base mb-2 text-white" style={{ fontFamily: JK }}>{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to go ocean-safe?"
        accent="ocean-safe?"
        subtitle="Our marine specialists can advise on MARPOL-compliant alternatives to your current cleaning range."
        ctaPrimary={{ label: "Contact Marine Team", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
      />
    </>
  );
}
