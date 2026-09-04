import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconFactory, IconLeaf, IconCheck, IconArrowRight, IconZap, IconRecycle } from "@/lib/icons";

const products = [
  { name: "ETS Degreaser Pro", desc: "Heavy-duty biodegradable degreaser for machined metal, castings, and manufacturing equipment. Zero VOC.", cert: "REACH · OSHA" },
  { name: "AquaSmarter™ Industrial", desc: "Water-based industrial surface cleaner. Replaces solvent degreasers on all metal alloys without surface damage.", cert: "REACH" },
  { name: "ETS MetalClean", desc: "Precision metal surface preparation for coating and painting processes. Removes oils, cutting fluids, and particulates.", cert: "RoHS · REACH" },
  { name: "ETS WeldPrep", desc: "Pre-weld surface cleaning concentrate. Removes anti-spatter coatings, oxidation, and contamination from weld zones.", cert: "REACH" },
];

export default function Industrial() {
  return (
    <>
      <PageHero
        eyebrow="Industrial & Metal"
        title="Zero VOC. Maximum performance."
        accent="Maximum performance."
        subtitle="Solvent-free industrial degreasers and metal cleaning solutions — engineered for manufacturing, precision engineering, and heavy industry."
        imgUrl="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&auto=format"
        badge="REACH REGISTERED · ZERO VOC · OSHA VERIFIED"
        ctaPrimary={{ label: "Talk to an Industrial Specialist", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
        stats={[
          { val: "0", label: "VOC content" },
          { val: "1:100", label: "Dilution ratio" },
          { val: "100%", label: "Biodegradable" },
          { val: "REACH", label: "Registered" },
        ]}
      />

      {/* Challenge */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px" }}>
            <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&h=700&fit=crop&auto=format"
              alt="Industrial factory" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.6) 0%, rgba(0,0,0,0) 50%)" }} />
          </div>
          <div>
            <SectionHeader eyebrow="Industrial Challenge" title="Industry is under pressure to go clean." />
            <p className="text-base leading-relaxed mb-5" style={{ color: T.muted }}>
              Industrial degreasing is one of the largest single sources of VOC emissions in manufacturing environments. Regulatory pressure from REACH, OSHA, and national environmental agencies is forcing a rapid transition away from petroleum-based solvents and chlorinated degreasers.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              ETS biodegradable industrial degreasers eliminate the VOC problem without sacrificing the cleaning performance that production lines depend on — outperforming conventional solvents on heavy oil contamination, machining fluid residues, and carbon deposits.
            </p>
            <div className="space-y-3">
              {[
                "Zero VOC — eliminates solvent emission compliance costs",
                "Non-flammable — no hot work permits or explosion-proof storage",
                "Concentrated 1:100 — dramatically lower cost per litre",
                "Biodegradable — simplified wastewater disposal",
                "Safe for all common metal alloys, including aluminium and magnesium",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: GREEN }}><IconCheck /></span>
                  <span className="text-sm" style={{ color: T.muted }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="ETS Industrial Products" title="Solvent-free. Proven on heavy industry." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {products.map((p) => (
              <div key={p.name} className="bento-card group p-5 rounded-2xl border flex flex-col transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,204,255,0.08)", border: "1px solid rgba(0,204,255,0.2)", color: CYAN }}>
                  <IconFactory />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{p.name}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: T.muted }}>{p.desc}</p>
                <span className="text-xs font-semibold" style={{ color: CYAN }}>{p.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits dark */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,204,255,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <IconLeaf />, title: "Environmental ROI", desc: "Eliminate solvent storage costs, hazardous waste disposal fees, and environmental liability exposure with fully biodegradable alternatives." },
              { icon: <IconZap />, title: "Productivity Impact", desc: "Non-flammable chemistry eliminates hot work permits and ventilation delays — line workers can clean without production stoppages." },
              { icon: <IconRecycle />, title: "Circular Economics", desc: "Concentrated ratios of 1:100 reduce packaging, transport emissions, and storage volume — lowering your true cost per clean." },
            ].map((b) => (
              <div key={b.title} className="p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ color: CYAN }}>{b.icon}</div>
                <h3 className="font-bold text-base mb-2 text-white" style={{ fontFamily: JK }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Clean industry starts here."
        accent="here."
        subtitle="Speak with our industrial specialists about transitioning from solvent to biodegradable chemistry."
        ctaPrimary={{ label: "Contact Industrial Team", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
      />
    </>
  );
}
