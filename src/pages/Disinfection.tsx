import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconFlask, IconShield, IconLeaf, IconCheck, IconZap } from "@/components/icons";

const products = [
  { name: "FOG-IT INNOVA", desc: "Electrostatic fogging disinfection solution for aircraft cabins, transport vehicles, and large area disinfection. Broad-spectrum antimicrobial.", cert: "EN 1276 · EN 13697" },
  { name: "ETS SurfacePro Disinfectant", desc: "Ready-to-use contact surface disinfectant for hard non-porous surfaces in food, healthcare, and transport environments.", cert: "EN 1276 · REACH" },
  { name: "AquaSmarter™ Disinfect", desc: "Water-based disinfecting cleaner combining cleaning and disinfection in one application. Safe for food-contact surfaces.", cert: "NSF · REACH" },
];

const applications = [
  { label: "Aircraft Cabin Disinfection", img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=300&fit=crop" },
  { label: "Public Transport Vehicles", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop" },
  { label: "Food Processing Facilities", img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=400&h=300&fit=crop" },
  { label: "Healthcare Environments", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop" },
  { label: "Industrial Workspaces", img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=300&fit=crop" },
  { label: "Offshore Platforms", img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=400&h=300&fit=crop" },
];

export default function Disinfection() {
  return (
    <>
      <PageHero
        eyebrow="Disinfection"
        title="Professional disinfection for demanding environments."
        accent="demanding environments."
        subtitle="Broad-spectrum disinfection solutions for aviation, transport, food production, and industrial spaces — with fogging, spray, and wipe application systems."
        imgUrl="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1920&h=1080&fit=crop&auto=format"
        badge="EN 1276 CERTIFIED · BROAD SPECTRUM · FOOD SAFE"
        ctaPrimary={{ label: "Get a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
        minHeight="min-h-[60vh]"
      />

      {/* Technology */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="ETS Disinfection Technology" title="Effective. Safe. Documented." />
            <p className="text-base leading-relaxed mb-5" style={{ color: T.muted }}>
              ETS International's disinfection product range combines proven antimicrobial chemistry with modern application technologies, including electrostatic fogging, to deliver rapid and verifiable surface disinfection across large areas.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              All ETS disinfection products are tested to European EN standards, with full efficacy data available on request. Our range is designed for professional operators in aviation, transport, food production, and industrial environments.
            </p>
            <div className="space-y-3">
              {[
                "Broad-spectrum antimicrobial activity — bacteria, viruses, fungi",
                "EN 1276 and EN 13697 certified efficacy testing",
                "Safe for food-contact surfaces when used as directed",
                "Non-corrosive on common industrial and transport surfaces",
                "Full application documentation and training support",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" style={{ color: GREEN }}><IconCheck /></span>
                  <span className="text-sm" style={{ color: T.muted }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "EN 1276", label: "Bacterial efficacy standard", color: GREEN },
              { val: "EN 13697", label: "Surface disinfection standard", color: CYAN },
              { val: "30s", label: "Typical contact time", color: GREEN },
              { val: "99.9%", label: "Reduction in target organisms", color: CYAN },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-2xl" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
                <div className="text-2xl font-black mb-1" style={{ fontFamily: JK, color: s.color }}>{s.val}</div>
                <div className="text-xs leading-snug" style={{ color: T.dim }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOG-IT INNOVA spotlight */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 w-fit"
                style={{ background: "rgba(0,204,255,0.08)", border: "1px solid rgba(0,204,255,0.2)", color: CYAN }}>
                <IconFlask /> FOG-IT INNOVA
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-5 text-white" style={{ fontFamily: JK }}>
                Electrostatic fogging disinfection.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                FOG-IT INNOVA is ETS International's electrostatic fogging disinfection system, delivering complete surface coverage across complex geometries in aircraft cabins, vehicles, and large facilities in a fraction of the time of conventional wipe-down disinfection.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Complete 360° surface coverage via electrostatic charge",
                  "Rapid turnaround — full aircraft cabin in under 10 minutes",
                  "Broad-spectrum efficacy across bacteria, viruses, and fungi",
                  "Approved for use in occupied transport environments when dry",
                  "Full application training and equipment support available",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: CYAN }}><IconCheck /></span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "360px" }}>
              <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=700&h=500&fit=crop&auto=format"
                alt="FOG-IT INNOVA" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.6 }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,204,255,0.06) 0%, rgba(0,0,0,0.4) 100%)" }} />
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                style={{ background: "rgba(0,204,255,0.15)", border: "1px solid rgba(0,204,255,0.3)", color: CYAN }}>
                FOG-IT INNOVA™
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Disinfection Products" title="The complete ETS disinfection range." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {products.map((p) => (
              <div key={p.name} className="bento-card p-6 rounded-2xl border" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  <IconFlask />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{p.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: T.muted }}>{p.desc}</p>
                <span className="text-xs font-semibold" style={{ color: GREEN }}>{p.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Applications" title="Where ETS disinfection is deployed." center />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
            {applications.map((app) => (
              <div key={app.label} className="bento-card group relative rounded-2xl overflow-hidden" style={{ minHeight: "140px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={app.img} alt={app.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--img-opacity-sm)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.9) 0%, rgba(0,0,0,0) 60%)" }} />
                <div className="relative z-10 flex flex-col justify-end h-full p-3" style={{ minHeight: "140px" }}>
                  <p className="text-xs font-bold text-white leading-snug">{app.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Professional disinfection, delivered."
        accent="delivered."
        subtitle="Contact our team to discuss a disinfection solution for your facility or fleet."
        ctaPrimary={{ label: "Get a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
