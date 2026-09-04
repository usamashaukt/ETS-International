import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import { useTheme } from "@/lib/store";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconLeaf, IconShield, IconDiamond, IconRecycle, IconGlobe, IconZap, IconAtom, IconArrowRight } from "@/lib/icons";

const pillars = [
  { icon: <IconLeaf />, title: "Environmental Mission", desc: "We believe industrial cleaning can be fully decoupled from toxic chemistry. Every ETS formulation is engineered to leave no harmful trace — on surfaces, on operators, or in ecosystems." },
  { icon: <IconAtom />, title: "Technology-Led", desc: "From water-activated AquaSmarter chemistry to nano-scale diamond lubricant additives, ETS invests in material science that performs at the molecular level." },
  { icon: <IconShield />, title: "Certified to the Highest Standards", desc: "ISO 9001:2015 quality management, AIRBUS AIMS 09-00-002, BOEING D6-17487, EASA compliance, NSF H1, MARPOL, and REACH — our approvals speak to our rigor." },
  { icon: <IconGlobe />, title: "Global Reach", desc: "Serving clients in 40+ countries across aviation MRO, offshore platforms, food production facilities, and manufacturing plants." },
];

const timeline = [
  { year: "1994", title: "Founded", desc: "ETS International established with a mission to replace solvent-based industrial cleaners." },
  { year: "2003", title: "Aviation Approvals", desc: "First AIRBUS and BOEING qualifications awarded, marking entry into aerospace MRO supply chains." },
  { year: "2011", title: "AquaSmarter Launch", desc: "Water-based technology platform introduced — a breakthrough in zero-VOC industrial cleaning." },
  { year: "2017", title: "Nano Diamond", desc: "Nano Diamond lubricant additive commercialised after 6 years of independent testing." },
  { year: "2024", title: "40+ Countries", desc: "ETS International now serves customers across Europe, Middle East, Asia, and the Americas." },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <>
      <PageHero
        eyebrow="About ETS International"
        title="Environmental Technologies Solutions."
        accent="Solutions."
        subtitle="Since 1994, ETS International has pioneered biodegradable cleaning chemistry for the world's most demanding industries — without compromise on performance or environmental responsibility."
        imgUrl="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&auto=format"
        badge="ISO 9001:2015 CERTIFIED · EST. 1994 · 40+ COUNTRIES"
        ctaPrimary={{ label: "Explore Products", to: "/products" }}
        ctaSecondary={{ label: "View Certifications", to: "/certifications" }}
      />

      {/* Mission statement */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Our Mission" title="Clean industry. Healthy planet." />
              <p className="text-lg leading-relaxed mb-6" style={{ color: T.muted }}>
                ETS International was founded on a single belief: the industrial sector should not have to choose between performance and responsibility. For three decades, we have developed and delivered professional cleaning solutions that are 100% biodegradable, solvent-free, and certified to the highest international standards.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
                Our customers include airlines, MRO facilities, offshore operators, food manufacturers, and metal processing plants — all of whom require cleaning technology that works in extreme conditions while meeting the strictest environmental and safety regulations.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { val: "30+", label: "Years of innovation" },
                  { val: "40+", label: "Countries served" },
                  { val: "100%", label: "Biodegradable" },
                ].map((s) => (
                  <div key={s.val}>
                    <div className="text-3xl font-black mb-0.5" style={{ fontFamily: JK, color: GREEN }}>{s.val}</div>
                    <div className="text-xs tracking-wide uppercase" style={{ color: T.dim }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px" }}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=700&fit=crop&auto=format"
                alt="ETS technology laboratory" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.85) 0%, rgba(0,0,0,0) 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-4 py-3 rounded-xl" style={{ background: "rgba(0,255,102,0.08)", border: "1px solid rgba(0,255,102,0.2)" }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: GREEN }}>ETS Environmental Philosophy</p>
                  <p className="text-sm text-white/80">Every formulation must outperform its solvent equivalent — and leave no toxic trace in the environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="What Defines Us" title="Four pillars of the ETS approach." center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {pillars.map((p) => (
              <div key={p.title} className="bento-card group p-6 rounded-2xl border transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  {p.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: JK, color: T.fg }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{p.desc}</p>
                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(to right, #00FF66, transparent)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: isDark ? "linear-gradient(to bottom, transparent 0%, rgba(0,255,102,0.02) 50%, transparent 100%)" : "none" }} />
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Company History" title="Thirty years of clean innovation." center />
          <div className="relative mt-16">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${GREEN}, transparent)` }} />
            <div className="flex flex-col gap-12">
              {timeline.map((item, idx) => (
                <div key={item.year} className={`flex items-start gap-8 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block px-4 py-2 rounded-xl mb-3" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GREEN }}>{item.year}</div>
                      <h3 className="font-bold text-base" style={{ fontFamily: JK, color: T.fg }}>{item.title}</h3>
                      <p className="text-xs leading-relaxed mt-1" style={{ color: T.muted }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full shrink-0 z-10 mt-3" style={{ background: GREEN, boxShadow: `0 0 12px rgba(0,255,102,0.6)` }} />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries served bento */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Our Reach" title="One technology platform. Multiple industries." subtitle="ETS professional cleaning solutions are active across critical sectors worldwide." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
            {[
              { name: "Aviation & Aerospace", img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=400&h=300&fit=crop", to: "/industries/aviation" },
              { name: "Marine & Offshore", img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=400&h=300&fit=crop", to: "/industries/marine" },
              { name: "Industrial & Metal", img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=300&fit=crop", to: "/industries/industrial" },
              { name: "HACCP / Food Safety", img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=400&h=300&fit=crop", to: "/industries/haccp" },
              { name: "Disinfection", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop", to: "/disinfection" },
            ].map((ind) => (
              <Link key={ind.name} to={ind.to}
                className="bento-card group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ minHeight: "160px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--img-opacity-sm)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.9) 0%, rgba(0,0,0,0.1) 100%)" }} />
                <div className="relative z-10 flex flex-col justify-end h-full p-4" style={{ minHeight: "160px" }}>
                  <p className="text-xs font-bold leading-snug text-white">{ind.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to work with ETS?"
        accent="ETS?"
        subtitle="Contact our technical team to discuss a tailored solution for your industry."
        ctaPrimary={{ label: "Contact Us", to: "/contact" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
