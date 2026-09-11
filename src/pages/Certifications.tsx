import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconShield, IconCheck, IconFileText, IconArrowRight } from "@/components/icons";
import { certificationsData } from "@/data/resourcesData";

const documents = [
  {
    name: "Safety Data Sheets (SDS)",
    desc: "REACH-aligned SDS available for active products in EN, DE, and other languages on request.",
    to: "/resources?kind=sds",
  },
  {
    name: "Technical Data Sheets (TDS)",
    desc: "Performance specifications, dilution guides, and application instructions — many downloadable now.",
    to: "/resources?kind=tds",
  },
  {
    name: "Certificate of Analysis (CoA)",
    desc: "Batch-level CoA available upon request for commercial orders.",
    to: "/quote?message=Please%20send%20Certificate%20of%20Analysis%20(CoA)%20for%20our%20order%2Fproduct%3A",
  },
  {
    name: "REACH Registration Documentation",
    desc: "Substance registration dossiers available for regulatory submissions.",
    to: "/quote?message=Please%20send%20REACH%20registration%20documentation.",
  },
  {
    name: "Biodegradability Test Reports",
    desc: "OECD 301B and OECD 306 biodegradability test data on request.",
    to: "/quote?message=Please%20send%20biodegradability%20test%20reports%20(OECD%20301B%20%2F%20306).",
  },
];

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-4 h-4 shrink-0">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 18v-6" />
      <path d="M9 15l3 3 3-3" />
    </svg>
  );
}

const statusLabel = {
  current: "Current",
  qualification: "Qualified",
  compliance: "Compliant",
} as const;

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
        ctaPrimary={{ label: "Browse Document Library", to: "/resources" }}
        ctaSecondary={{ label: "Request Documents", to: "/quote" }}
        minHeight="min-h-[55vh]"
      />

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Approvals"
            title="Approved where it matters most."
            subtitle="Every certification ETS holds is earned through third-party testing and independent audit — never self-declared. Download when hosted; otherwise request the current PDF pack."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {certificationsData.map((cert) => {
              const color = cert.accent === "green" ? GREEN : CYAN;
              const soft = cert.accent === "green" ? T.accentSoft : T.cyanSoft;
              const border = cert.accent === "green" ? T.accentBorder : T.cyanBorder;
              return (
                <article
                  key={cert.id}
                  className="bento-card group p-6 rounded-2xl border flex flex-col transition-all duration-300"
                  style={{ borderColor: T.border, background: T.glassCard }}
                >
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: soft, border: `1px solid ${border}`, color }}
                    >
                      <IconShield />
                    </div>
                    <span
                      className="text-xs font-semibold tracking-wider px-2 py-1 rounded"
                      style={{ background: soft, color }}
                    >
                      {statusLabel[cert.status]}
                    </span>
                  </div>

                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: JK, color: T.fg }}>
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color }}>
                    {cert.standardNumber}
                  </p>
                  <p className="text-xs font-medium mb-3" style={{ color: T.dim }}>
                    {cert.scope}
                  </p>
                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: T.muted }}>
                    {cert.desc}
                  </p>

                  <div
                    className="mb-4 px-3 py-2 rounded-xl text-xs"
                    style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: T.fg }}
                  >
                    <span className="font-semibold tracking-wider uppercase text-[10px]" style={{ color: GREEN }}>
                      Validity
                    </span>
                    <p className="mt-1 leading-snug" style={{ color: T.muted }}>
                      {cert.validity}
                    </p>
                  </div>

                  <p className="text-xs mb-4" style={{ color: T.dim }}>
                    {cert.org}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {cert.downloadUrl ? (
                      <a
                        href={cert.downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-transform hover:scale-105"
                        style={{ background: color, color: "var(--on-accent)" }}
                      >
                        <PdfIcon />
                        Download PDF
                      </a>
                    ) : (
                      <Link
                        to={cert.requestUrl}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-transform hover:scale-105"
                        style={{ background: color, color: "var(--on-accent)" }}
                      >
                        <PdfIcon />
                        Download / Request PDF
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "var(--section-inset)", borderTop: "1px solid var(--accent-soft-md)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[var(--accent)]" />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>
                  Why Certification Matters
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 text-white" style={{ fontFamily: JK }}>
                Independent validation. Zero compromise.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                In aviation, marine, and food production, a cleaning product's approval isn't a marketing claim — it's a legal and operational requirement. ETS certifications are maintained through continuous surveillance audits and product batch testing.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Our quality management team manages certification renewals, customer documentation requests, and regulatory submissions — so your compliance team always has what they need.
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: GREEN }}
              >
                Open resources library <IconArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", minHeight: "80px" }}
                >
                  <div className="w-5 h-5 mb-2" style={{ color: GREEN }}>
                    <IconCheck />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white leading-tight">
                    {cert.standardNumber}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Documentation"
            title="Every document you need."
            subtitle="Jump into the filterable library or request packs that are not hosted yet."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {documents.map((doc) => (
              <Link
                key={doc.name}
                to={doc.to}
                className="bento-card p-5 rounded-2xl border flex gap-4 items-start transition-all hover:-translate-y-0.5"
                style={{ borderColor: T.border, background: T.glassCard }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: GREEN }}
                >
                  <IconFileText />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ fontFamily: JK, color: T.fg }}>
                    {doc.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: T.muted }}>
                    {doc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need certification documentation?"
        accent="documentation?"
        subtitle="Contact our regulatory affairs team for SDS, TDS, CoA, or REACH registration documents."
        ctaPrimary={{ label: "Request Documents", to: "/quote" }}
        ctaSecondary={{ label: "Open Resources", to: "/resources" }}
      />
    </>
  );
}
