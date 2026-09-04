import { T, JK, GREEN, CYAN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconShield, IconCheck, IconFileText } from "@/lib/icons";

const certs = [
  {
    name: "ISO 9001:2015",
    org: "International Organization for Standardization",
    scope: "Quality Management System",
    desc: "ETS International operates under a certified ISO 9001:2015 Quality Management System, ensuring consistent product quality, traceability, and continuous improvement across all operations.",
    color: GREEN,
  },
  {
    name: "AIRBUS AIMS 09-00-002",
    org: "Airbus S.A.S.",
    scope: "Aviation Cleaning — Aircraft Exterior & Interior",
    desc: "ETS products are approved to the AIRBUS AIMS 09-00-002 specification, qualifying them for use on commercial and military Airbus aircraft, including fuselage, engine nacelles, and interior surfaces.",
    color: CYAN,
  },
  {
    name: "BOEING D6-17487",
    org: "The Boeing Company",
    scope: "Aviation Cleaning — Aircraft Surfaces",
    desc: "BOEING D6-17487 qualification confirms ETS products are suitable for cleaning Boeing commercial and military aircraft surfaces without damage to paint, seals, composites, or metallic structures.",
    color: GREEN,
  },
  {
    name: "REACH Registered",
    org: "European Chemicals Agency (ECHA)",
    scope: "Chemical Substance Registration — EU",
    desc: "All ETS formulations are REACH-compliant under EU Regulation No 1907/2006. Full substance registration documentation available to customers and distribution partners.",
    color: CYAN,
  },
  {
    name: "RoHS Compliant",
    org: "European Union",
    scope: "Restriction of Hazardous Substances",
    desc: "ETS products conform to EU RoHS Directive 2011/65/EU, confirming freedom from restricted hazardous substances including lead, mercury, cadmium, and specific flame retardants.",
    color: GREEN,
  },
  {
    name: "NSF H1 Registered",
    org: "NSF International",
    scope: "Food-Grade Lubricants & Cleaners",
    desc: "Selected ETS formulations carry NSF H1 registration, confirming their suitability for incidental food contact in food and beverage processing environments — essential for HACCP compliance.",
    color: CYAN,
  },
  {
    name: "EASA Compliant",
    org: "European Union Aviation Safety Agency",
    scope: "Aviation Safety Standards",
    desc: "ETS aviation products meet EASA regulatory requirements for use in approved aircraft maintenance operations within EASA-regulated airspace.",
    color: GREEN,
  },
  {
    name: "MARPOL Compliant",
    org: "International Maritime Organization (IMO)",
    scope: "Marine Pollution Prevention",
    desc: "ETS marine cleaning formulations comply with MARPOL Annex V and Annex VI requirements, confirmed biodegradable and safe for use in marine and offshore environments.",
    color: CYAN,
  },
  {
    name: "NATO Compliant",
    org: "North Atlantic Treaty Organization",
    scope: "Military Standards",
    desc: "ETS products meeting NATO standards are approved for use in military aviation and defense maintenance environments, supporting armed forces operations globally.",
    color: GREEN,
  },
];

const documents = [
  { name: "Safety Data Sheets (SDS)", desc: "REACH-compliant SDS available for all products in EN, DE, FR, NL, and AR." },
  { name: "Technical Data Sheets (TDS)", desc: "Full performance specifications, dilution guides, and application instructions." },
  { name: "Certificate of Analysis (CoA)", desc: "Batch-level CoA available upon request for all commercial orders." },
  { name: "REACH Registration Documentation", desc: "Full substance registration dossiers available for regulatory submissions." },
  { name: "Biodegradability Test Reports", desc: "OECD 301B and OECD 306 biodegradability test data on request." },
];

export default function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Approvals"
        title="Certified for a cleaner standard."
        accent="cleaner standard."
        subtitle="Our products are approved, registered, and certified to the most demanding aviation, marine, food safety, and environmental standards in the world."
        imgUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop&auto=format"
        badge="ISO 9001 · AIRBUS · BOEING · NSF H1 · REACH · MARPOL"
        minHeight="min-h-[60vh]"
      />

      {/* Cert grid */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Approvals"
            title="Approved where it matters most."
            subtitle="Every certification ETS holds is earned through third-party testing and independent audit — never self-declared."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {certs.map((cert) => (
              <div key={cert.name} className="bento-card group p-6 rounded-2xl border transition-all duration-300" style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `rgba(${cert.color === GREEN ? "0,255,102" : "0,204,255"},0.08)`, border: `1px solid rgba(${cert.color === GREEN ? "0,255,102" : "0,204,255"},0.2)`, color: cert.color }}>
                    <IconShield />
                  </div>
                  <span className="text-xs font-semibold tracking-wider px-2 py-1 rounded" style={{ background: `rgba(${cert.color === GREEN ? "0,255,102" : "0,204,255"},0.06)`, color: cert.color }}>
                    Certified
                  </span>
                </div>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: JK, color: T.fg }}>{cert.name}</h3>
                <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: cert.color }}>{cert.scope}</p>
                <p className="text-xs text-sm leading-relaxed mb-3" style={{ color: T.muted }}>{cert.desc}</p>
                <p className="text-xs" style={{ color: T.dim }}>{cert.org}</p>
                <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust dark section */}
      <section className="py-24 px-6" style={{ background: "rgba(3,8,18,0.95)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#00FF66]" />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>Why Certification Matters</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 text-white" style={{ fontFamily: JK }}>
                Independent validation. Zero compromise.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                In aviation, marine, and food production, a cleaning product's approval isn't a marketing claim — it's a legal and operational requirement. ETS certifications are maintained through continuous surveillance audits and product batch testing.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Our quality management team manages all certification renewals, customer documentation requests, and regulatory submissions — so your compliance team always has what they need.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["ISO 9001", "AIRBUS", "BOEING", "REACH", "NSF H1", "MARPOL", "EASA", "NATO", "RoHS"].map((cert) => (
                <div key={cert} className="flex flex-col items-center justify-center p-4 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", minHeight: "80px" }}>
                  <div className="w-5 h-5 mb-2" style={{ color: GREEN }}><IconCheck /></div>
                  <span className="text-xs font-bold tracking-wider text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Documentation" title="Every document you need." subtitle="Full regulatory documentation available on request for all ETS product lines." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {documents.map((doc) => (
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
        title="Need certification documentation?"
        accent="documentation?"
        subtitle="Contact our regulatory affairs team for SDS, TDS, CoA, or REACH registration documents."
        ctaPrimary={{ label: "Request Documents", to: "/contact" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
