import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconPlane, IconFactory, IconAnchor, IconShield, IconArrowRight } from "@/lib/icons";

const industries = [
  {
    id: "aviation",
    label: "01 — Aviation",
    title: "Aviation & Aerospace",
    subtitle: "Cleaner aircraft. Smarter maintenance.",
    desc: "AIRBUS AIMS 09-00-002 and BOEING D6-17487 approved cleaning solutions for commercial and military aircraft, engines, APUs, and avionics components.",
    challenges: ["Strict regulatory compliance", "Surface compatibility with composites", "No residue on avionics", "Flammability restrictions in hangars"],
    color: GREEN,
    icon: <IconPlane />,
    img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=900&h=600&fit=crop&auto=format",
    to: "/industries/aviation",
  },
  {
    id: "industrial",
    label: "02 — Industrial",
    title: "Industrial & Metal",
    subtitle: "Zero VOC. Maximum performance.",
    desc: "Heavy-duty degreasing and surface preparation solutions for manufacturing, metal fabrication, and precision engineering — without VOCs, solvents, or hazardous chemistry.",
    challenges: ["Heavy contamination loads", "Worker safety requirements", "Waste disposal costs", "Surface finish preservation"],
    color: CYAN,
    icon: <IconFactory />,
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=900&h=600&fit=crop&auto=format",
    to: "/industries/industrial",
  },
  {
    id: "marine",
    label: "03 — Marine",
    title: "Marine & Offshore",
    subtitle: "MARPOL-compliant. Ocean-safe.",
    desc: "MARPOL-compliant biodegradable cleaning and maintenance solutions for commercial shipping, offshore platforms, and naval operations.",
    challenges: ["MARPOL discharge compliance", "Salt water compatibility", "Hull biofouling", "Engine room contamination"],
    color: "#4499ff",
    icon: <IconAnchor />,
    img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=900&h=600&fit=crop&auto=format",
    to: "/industries/marine",
  },
  {
    id: "haccp",
    label: "04 — Food Safety",
    title: "HACCP / Food Safety",
    subtitle: "NSF H1 registered. Zero taint.",
    desc: "NSF H1 certified cleaning formulations for food processing, packhouses, and commercial kitchens — with zero flavor taint and full HACCP compliance documentation.",
    challenges: ["Food contact safety", "HACCP plan integration", "Allergen cross-contamination", "Sanitisation verification"],
    color: GREEN,
    icon: <IconShield />,
    img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=900&h=600&fit=crop&auto=format",
    to: "/industries/haccp",
  },
];

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="One technology. Multiple industries."
        accent="Multiple industries."
        subtitle="ETS International's biodegradable cleaning chemistry is engineered to perform across aviation, marine, industrial, and food production environments."
        imgUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "Explore Products", to: "/products" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
        minHeight="min-h-[60vh]"
      />

      {/* Large bento grid */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Our Industries" title="Specialized solutions for critical sectors." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {industries.map((ind) => (
              <Link key={ind.id} to={ind.to}
                className="bento-card group relative rounded-2xl overflow-hidden border block"
                style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: "420px" }}>
                <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ opacity: "var(--img-opacity-sm)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.97) 0%, rgba(3,8,18,0.5) 50%, rgba(0,0,0,0.1) 100%)" }} />

                {/* Icon chip */}
                <div className="absolute top-5 left-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `rgba(${ind.color === GREEN ? "0,255,102" : ind.color === CYAN ? "0,204,255" : "68,153,255"},0.1)`, border: `1px solid rgba(${ind.color === GREEN ? "0,255,102" : ind.color === CYAN ? "0,204,255" : "68,153,255"},0.25)`, color: ind.color }}>
                    {ind.icon}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-end h-full p-7" style={{ minHeight: "420px" }}>
                  <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: "rgba(255,255,255,0.45)" }}>{ind.label}</span>
                  <h3 className="text-2xl font-black mb-2 text-white" style={{ fontFamily: JK }}>{ind.title}</h3>
                  <p className="text-sm italic mb-4" style={{ color: ind.color }}>{ind.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>{ind.desc}</p>

                  {/* Challenges */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {ind.challenges.map((c) => (
                      <div key={c} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <span style={{ color: ind.color, fontSize: "10px" }}>▸</span> {c}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: ind.color }}>
                    Explore {ind.title} <IconArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-industry stats */}
      <section className="py-20 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { val: "40+", label: "Countries served", color: GREEN },
              { val: "4", label: "Major industry sectors", color: CYAN },
              { val: "9+", label: "International certifications", color: GREEN },
              { val: "100%", label: "Biodegradable formulations", color: CYAN },
            ].map((s) => (
              <div key={s.val} className="text-center">
                <div className="text-4xl font-black mb-2" style={{ fontFamily: JK, color: s.color }}>{s.val}</div>
                <div className="text-xs tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Which industry are you in?"
        accent="industry are you in?"
        subtitle="Our technical team will identify the right ETS solution for your specific application."
        ctaPrimary={{ label: "Contact a Specialist", to: "/contact" }}
        ctaSecondary={{ label: "View All Products", to: "/products" }}
      />
    </>
  );
}
