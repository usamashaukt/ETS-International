import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconPlane, IconShield, IconLeaf, IconCheck, IconArrowRight, IconZap } from "@/lib/icons";

const products = [
  { name: "ETS AviClean", desc: "AIRBUS AIMS 09-00-002 & BOEING D6-17487 approved exterior and engine cleaning concentrate.", cert: "AIRBUS · BOEING", to: "/products/aviation" },
  { name: "AquaSmarter™ Aviation", desc: "Water-based aircraft interior and cabin cleaning formulation. Safe for all surfaces, avionics-compatible.", cert: "REACH · EASA", to: "/technology/aquasmarter" },
  { name: "ETS APU Cleaner", desc: "Specialist concentrate for Auxiliary Power Unit cleaning without disassembly. Approved for in-situ use.", cert: "AIRBUS · BOEING", to: "/products/aviation" },
  { name: "Nano Diamond™ Aviation", desc: "Fuel-saving engine lubricant additive. Minimum 6% verified fuel savings in independent fleet testing.", cert: "Independent tested", to: "/technology/nano-diamond" },
];

const benefits = [
  { icon: <IconShield />, title: "Regulatory Approved", desc: "AIRBUS AIMS 09-00-002, BOEING D6-17487, EASA and NATO compliant. Documentation ready for MRO audit files." },
  { icon: <IconLeaf />, title: "100% Biodegradable", desc: "Fully break down in natural environments. Reduces hazardous waste disposal costs and environmental liability." },
  { icon: <IconZap />, title: "Performance Proven", desc: "Effective on carbon deposits, hydraulic fluids, oils, and general aviation grime without damaging composite surfaces." },
  { icon: <IconPlane />, title: "Aircraft-Safe Chemistry", desc: "No halogenated solvents, no sulfur compounds. Safe for aluminum, titanium, composites, seals, and window transparencies." },
];

const applications = [
  { label: "Aircraft Exterior Wash", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
  { label: "Engine & Nacelle Cleaning", img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=400&h=300&fit=crop" },
  { label: "Landing Gear Degreasing", img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=300&fit=crop" },
  { label: "APU Maintenance", img: "https://images.unsplash.com/photo-1559268950-a693db59afb3?w=400&h=300&fit=crop" },
  { label: "Cabin Interior Cleaning", img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=300&fit=crop" },
  { label: "Avionics Bay Cleaning", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=300&fit=crop" },
];

export default function Aviation() {
  return (
    <>
      <PageHero
        eyebrow="Aviation & Aerospace"
        title="Cleaner aircraft. Smarter maintenance."
        accent="Smarter maintenance."
        subtitle="AIRBUS and BOEING approved biodegradable cleaning solutions for commercial MRO, military aviation, and aerospace manufacturing."
        imgUrl="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&auto=format"
        badge="AIRBUS AIMS 09-00-002 · BOEING D6-17487 · EASA COMPLIANT"
        ctaPrimary={{ label: "Talk to an Aviation Specialist", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
        stats={[
          { val: "AIRBUS", label: "AIMS 09-00-002 Approved" },
          { val: "BOEING", label: "D6-17487 Qualified" },
          { val: "6%+", label: "Fuel savings (Nano Diamond)" },
          { val: "0", label: "Halogenated solvents" },
        ]}
      />

      {/* Challenge */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Industry Challenge" title="Aviation maintenance demands zero compromise." />
              <p className="text-base leading-relaxed mb-5" style={{ color: T.muted }}>
                Aircraft maintenance cleaning is one of the most regulated industrial cleaning operations in the world. Every product used on an airframe must be approved to OEM specifications, tested for compatibility with composites, seals, and coatings, and documented for maintenance record purposes.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
                At the same time, environmental regulations are increasingly restricting solvent-based products in MRO facilities — forcing the sector toward water-based and biodegradable alternatives that must perform at least as well as the products they replace.
              </p>
              <div className="space-y-3">
                {[
                  "AIRBUS AIMS 09-00-002 and BOEING D6-17487 compliance",
                  "No halogenated solvents — REACH compliant",
                  "Safe for composite surfaces, seals, and avionics",
                  "Non-flammable — no hot work permit required",
                  "Biodegradable — reduced disposal cost and liability",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: GREEN }}><IconCheck /></span>
                    <span className="text-sm" style={{ color: T.muted }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px" }}>
              <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=700&fit=crop&auto=format"
                alt="Aircraft engine maintenance" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.7) 0%, rgba(0,0,0,0) 50%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="ETS Aviation Products" title="Approved. Proven. Biodegradable." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {products.map((p) => (
              <Link key={p.name} to={p.to}
                className="bento-card group p-5 rounded-2xl border flex flex-col transition-all duration-300"
                style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  <IconPlane />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{p.name}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: T.muted }}>{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: GREEN }}>{p.cert}</span>
                  <IconArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>Benefits</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white" style={{ fontFamily: JK }}>
              Why aviation MRO teams choose ETS.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ color: GREEN }}>{b.icon}</div>
                <h3 className="font-bold text-sm mb-2 text-white" style={{ fontFamily: JK }}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Applications" title="Where ETS aviation products are used." />
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
        title="Talk to an aviation specialist."
        accent="aviation specialist."
        subtitle="Our team has deep expertise in aviation MRO compliance requirements and product qualification processes."
        ctaPrimary={{ label: "Contact Aviation Team", to: "/contact" }}
        ctaSecondary={{ label: "View Products", to: "/products" }}
      />
    </>
  );
}
