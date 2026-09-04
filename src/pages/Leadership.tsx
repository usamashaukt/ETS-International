import { T, JK, GREEN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";

const team = [
  {
    name: "Patrick Keuning",
    title: "Chief Executive Officer",
    bio: "Patrick leads ETS International's global strategy and operations, having spent over two decades in the clean-technology and specialty chemicals sector. Under his leadership, ETS has expanded to 40+ countries and secured approvals from AIRBUS, BOEING, and NATO.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&faces=1",
    tags: ["Strategy", "Operations", "Business Development"],
  },
  {
    name: "Technical Director",
    title: "Head of R&D",
    bio: "Leads the formulation science team responsible for AquaSmarter and Nano Diamond product lines. PhD in Applied Chemistry with expertise in bio-based surfactant systems and nano-material integration.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&faces=1",
    tags: ["R&D", "Chemistry", "Innovation"],
  },
  {
    name: "Sales Director",
    title: "Global Sales & Partnerships",
    bio: "Manages ETS International's global distribution network and key account relationships across aviation, marine, and industrial sectors. 15+ years in specialty chemical sales across Europe and the Middle East.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&faces=1",
    tags: ["Sales", "Partnerships", "EMEA"],
  },
  {
    name: "Regulatory Affairs Lead",
    title: "Compliance & Certifications",
    bio: "Oversees all regulatory submissions, certification maintenance, and compliance documentation across REACH, EASA, NSF H1, and MARPOL frameworks. Ensures ETS products meet the strictest global standards.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&faces=1",
    tags: ["Compliance", "REACH", "ISO"],
  },
];

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people behind ETS."
        accent="ETS."
        subtitle="A team of chemists, engineers, and industry specialists committed to advancing clean industrial chemistry."
        imgUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop&auto=format"
        minHeight="min-h-[55vh]"
      />

      {/* Leadership grid */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Our Team" title="Built on expertise." subtitle="Our leadership team brings deep domain expertise across chemistry, aviation, marine, and industrial sectors." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((person) => (
              <div key={person.name} className="bento-card group rounded-2xl overflow-hidden border transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--img-opacity-sm)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.85) 0%, rgba(0,0,0,0) 60%)" }} />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: JK, color: T.fg }}>{person.name}</h3>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: GREEN }}>{person.title}</p>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: T.muted }}>{person.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "400px" }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                alt="ETS team collaboration" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: "var(--img-opacity-sm)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.05) 0%, rgba(0,0,0,0.4) 100%)" }} />
            </div>
            <div>
              <SectionHeader eyebrow="Our Culture" title="Science-led. Purpose-driven." />
              <p className="text-base leading-relaxed mb-6" style={{ color: T.muted }}>
                At ETS International, every team member shares the same core belief: that we can build a cleaner industrial future through rigorous science and an uncompromising commitment to environmental responsibility.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
                We attract chemists, engineers, and business professionals who want their work to have a measurable, positive impact on the world. Our R&D team works continuously to push the boundaries of what biodegradable chemistry can achieve.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "30+", label: "Years of R&D" },
                  { val: "15+", label: "Active patents & innovations" },
                  { val: "3", label: "Continents of operation" },
                  { val: "100%", label: "Green formulations" },
                ].map((s) => (
                  <div key={s.val} className="p-4 rounded-xl" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
                    <div className="text-2xl font-black mb-1" style={{ fontFamily: JK, color: GREEN }}>{s.val}</div>
                    <div className="text-xs tracking-wide" style={{ color: T.dim }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Work with our team."
        accent="our team."
        subtitle="Our specialists are available to discuss your specific cleaning and maintenance requirements."
        ctaPrimary={{ label: "Contact Us", to: "/contact" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
