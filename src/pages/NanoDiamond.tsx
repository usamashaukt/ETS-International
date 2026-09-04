import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconDiamond, IconPlane, IconFactory, IconZap, IconLeaf, IconAtom } from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

const steps = [
  { num: "01", title: "Nano Scale", desc: "Diamond particles are processed to nanometer scale — small enough to enter microscopic surface irregularities on metal engine components." },
  { num: "02", title: "Surface Integration", desc: "Nano diamond particles integrate into metal surface micro-topography, filling surface peaks and valleys to create an ultra-smooth tribological surface." },
  { num: "03", title: "Friction Reduction", desc: "The smooth nano diamond surface coating dramatically reduces metal-on-metal contact friction — reducing heat generation and wear rates." },
  { num: "04", title: "Verified Performance", desc: "Independent fleet testing across commercial and industrial applications confirms minimum 6% fuel savings and extended component service life." },
];

export default function NanoDiamond() {
  const { isDark } = useTheme();

  return (
    <>
      <PageHero
        eyebrow="Nano Diamond™ Technology"
        title="Friction reduction at the molecular level."
        accent="molecular level."
        subtitle="ETS International's patented Nano Diamond lubricant additive technology — independently verified minimum 6% fuel savings in commercial fleet testing."
        imgUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format"
        badge="PATENTED TECHNOLOGY · 6%+ FUEL SAVINGS · INDEPENDENT TESTED"
        ctaPrimary={{ label: "Request Technical Information", to: "/quote" }}
        ctaSecondary={{ label: "Download Test Results", to: "/contact" }}
        stats={[
          { val: "6%+", label: "Minimum fuel savings (independent testing)" },
          { val: "40%", label: "Reduction in engine wear" },
          { val: "2×", label: "Extended oil change intervals" },
          { val: "0", label: "Toxic nanoparticle release" },
        ]}
      />

      {/* Explanation */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="What is Nano Diamond™?" title="The hardest substance on earth. In your engine." />
            <p className="text-lg leading-relaxed mb-6" style={{ color: T.muted }}>
              Diamond is the hardest naturally occurring material on earth. At nanometer scale, diamond particles can be suspended in lubricating oils and applied to engine and mechanical drivetrain components — creating an ultra-smooth, ultra-hard surface layer that dramatically reduces friction.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: T.muted }}>
              ETS International's Nano Diamond technology integrates these particles into a proprietary lubricant additive formulation. When added to existing engine oils at the recommended concentration, Nano Diamond™ produces measurable and verified improvements in fuel efficiency, wear rates, and oil service intervals.
            </p>
            <p className="text-base leading-relaxed" style={{ color: T.muted }}>
              The nano particles are bound to metal surfaces and do not release into the environment — verified through independent ecotoxicology testing.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10"
            style={{
              background: isDark ? "linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(5,5,5,1) 100%)" : "linear-gradient(135deg, rgba(10,25,47,0.06) 0%, rgba(10,25,47,0.03) 100%)",
              border: "1px solid rgba(0,255,102,0.15)",
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.5 }} />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "rgba(0,204,255,0.08)", border: "1px solid rgba(0,204,255,0.2)", color: CYAN }}>
                <IconDiamond /> Nano Diamond Technology
              </div>
              <div className="text-7xl font-black mb-3" style={{ fontFamily: JK, color: GREEN }}>6%+</div>
              <div className="text-xl font-bold mb-2" style={{ fontFamily: JK, color: T.fg }}>Minimum fuel savings</div>
              <p className="text-sm mb-6" style={{ color: T.muted }}>Verified across independent commercial fleet testing programs.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "40%", label: "Wear reduction", color: CYAN },
                  { val: "2×", label: "Oil interval", color: GREEN },
                  { val: "0", label: "Ecotoxicity", color: CYAN },
                  { val: "↓", label: "CO₂ emissions", color: GREEN },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-2xl font-black mb-0.5" style={{ fontFamily: JK, color: s.color }}>{s.val}</div>
                    <div className="text-xs" style={{ color: T.dim }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>How It Works</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white" style={{ fontFamily: JK }}>
              Nano Diamond in four steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-3xl font-black mb-4" style={{ fontFamily: JK, color: CYAN }}>{step.num}</div>
                <h3 className="font-bold text-sm mb-2 text-white" style={{ fontFamily: JK }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Applications" title="Where Nano Diamond delivers results." subtitle="Nano Diamond technology is applicable wherever engine friction, fuel consumption, and component wear are performance-critical." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <IconPlane />, label: "Aviation Engines", desc: "Turbine and piston engine applications. Fuel savings and extended TBO intervals in commercial aviation fleets.", color: GREEN },
              { icon: <IconFactory />, label: "Heavy Industry", desc: "Manufacturing machinery, compressors, and industrial drivetrains — measurable reduction in maintenance downtime.", color: CYAN },
              { icon: <IconZap />, label: "Fleet Vehicles", desc: "Commercial transport and logistics fleets — fuel savings and extended service intervals on diesel and petrol engines.", color: GREEN },
            ].map((app) => (
              <div key={app.label} className="bento-card group p-6 rounded-2xl border transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `rgba(${app.color === GREEN ? "0,255,102" : "0,204,255"},0.07)`, border: `1px solid rgba(${app.color === GREEN ? "0,255,102" : "0,204,255"},0.15)`, color: app.color }}>
                  {app.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: JK, color: T.fg }}>{app.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental */}
      <section className="py-20 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>Environmental Advantages</span>
            <div className="h-px w-10 bg-[#00FF66]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6" style={{ fontFamily: JK, color: T.fg }}>
            Less fuel. Less emissions. More life.
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: T.muted }}>
            Every percentage point of fuel saving translates directly to CO₂ emission reduction. At fleet scale, Nano Diamond technology delivers measurable and reportable sustainability improvements — supporting carbon reduction commitments across aviation and transport.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { val: "6%+", label: "CO₂ reduction per treated vehicle", color: GREEN },
              { val: "0", label: "Hazardous particle release", color: CYAN },
              { val: "2×", label: "Fewer oil changes = less waste oil", color: GREEN },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className="text-4xl font-black" style={{ fontFamily: JK, color: s.color }}>{s.val}</div>
                <div className="text-xs tracking-wide text-center max-w-[120px]" style={{ color: T.dim }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to reduce fuel costs and emissions?"
        accent="fuel costs and emissions?"
        subtitle="Contact our technical team for Nano Diamond application data and fleet testing programmes."
        ctaPrimary={{ label: "Request Technical Information", to: "/quote" }}
        ctaSecondary={{ label: "Download Test Data", to: "/contact" }}
      />
    </>
  );
}
