import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconArrowRight, IconFileText } from "@/components/icons";
import {
  RESOURCE_FILTERS,
  filterResourceDocs,
  resourceDocs,
  type ResourceKind,
} from "@/data/resourcesData";

const companyLinks = [
  { label: "About ETS", to: "/about", desc: "Company background, mission, and environmental philosophy." },
  { label: "Why ETS?", to: "/why-ets", desc: "What sets ETS International apart in certified biodegradable chemistry." },
  { label: "Certifications & Approvals", to: "/certifications", desc: "Standards, validity status, and certificate requests." },
  { label: "Presentations", to: "/presentations", desc: "Technical and commercial presentation materials." },
  { label: "Co-Partners", to: "/co-partners", desc: "Partners and distribution network." },
];

const kindLabel: Record<ResourceKind, string> = {
  tds: "TDS",
  sds: "SDS",
  certificate: "Certificate",
  faq: "FAQ",
};

function parseKind(value: string | null): ResourceKind | "all" {
  if (value === "tds" || value === "sds" || value === "certificate" || value === "faq") return value;
  return "all";
}

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

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [kind, setKind] = useState<ResourceKind | "all">(() => parseKind(searchParams.get("kind")));
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  const setKindAndUrl = (next: ResourceKind | "all") => {
    setKind(next);
    const params = new URLSearchParams(searchParams);
    if (next === "all") params.delete("kind");
    else params.set("kind", next);
    setSearchParams(params, { replace: true });
  };

  const setQueryAndUrl = (next: string) => {
    setQuery(next);
    const params = new URLSearchParams(searchParams);
    if (!next.trim()) params.delete("q");
    else params.set("q", next);
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(
    () => filterResourceDocs(resourceDocs, kind, query),
    [kind, query],
  );

  const counts = useMemo(() => {
    const base = { all: resourceDocs.length, tds: 0, sds: 0, certificate: 0, faq: 0 };
    for (const doc of resourceDocs) base[doc.kind] += 1;
    return base;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical downloads, certificates, and answers."
        accent="and answers."
        subtitle="Filter TDS, SDS requests, compliance documents, and FAQs — or jump to company pages and the full certifications board."
        imgUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "View Certifications", to: "/certifications" }}
        ctaSecondary={{ label: "Product Finder", to: "/finder" }}
        minHeight="min-h-[50vh]"
      />

      <section id="library" className="py-16 sm:py-20 px-6 scroll-mt-28" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Document library"
            title="Find the file your compliance team needs."
            subtitle="TDS PDFs download immediately where hosted. SDS and certificate originals are fulfilled on request until Storage is connected."
          />

          <div className="mt-10 flex flex-col gap-4">
            <label className="block">
              <span className="sr-only">Search resources</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQueryAndUrl(e.target.value)}
                placeholder="Search by product, standard, or keyword…"
                className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none transition-all"
                style={{
                  background: T.glassCard,
                  border: `1px solid ${T.border}`,
                  color: T.fg,
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-border-strong)")}
                onBlur={(e) => (e.target.style.borderColor = T.border)}
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {RESOURCE_FILTERS.map((filter) => {
                const selected = kind === filter.value;
                const count = counts[filter.value];
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setKindAndUrl(filter.value)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
                    style={{
                      background: selected ? GREEN : T.glassCard,
                      color: selected ? "var(--on-accent)" : T.muted,
                      border: `1px solid ${selected ? GREEN : T.border}`,
                    }}
                  >
                    {filter.label}
                    <span className="ml-1.5 opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-xs" style={{ color: T.dim }}>
            Showing {filtered.length} of {resourceDocs.length} resources
          </p>

          <ul className="mt-4 divide-y" style={{ borderColor: T.borderSubtle }}>
            {filtered.map((doc) => (
              <li key={doc.id} className="py-5" style={{ borderColor: T.borderSubtle }}>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="min-w-0 flex gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: GREEN }}
                    >
                      <IconFileText />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{ background: "var(--accent-soft)", color: GREEN }}
                        >
                          {kindLabel[doc.kind]}
                        </span>
                        <span className="text-xs" style={{ color: T.dim }}>
                          {doc.category}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold mb-1" style={{ fontFamily: JK, color: T.fg }}>
                        {doc.title}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-3xl" style={{ color: T.muted }}>
                        {doc.description}
                      </p>
                      {doc.relatedTo && (
                        <Link
                          to={doc.relatedTo}
                          className="inline-flex items-center gap-1 mt-2 text-xs font-semibold"
                          style={{ color: GREEN }}
                        >
                          Open related page <IconArrowRight />
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0 lg:pt-1">
                    {doc.downloadUrl && (
                      <a
                        href={doc.downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-transform hover:scale-105"
                        style={{ background: GREEN, color: "var(--on-accent)" }}
                      >
                        <PdfIcon />
                        {doc.downloadLabel || "Download"}
                      </a>
                    )}
                    {doc.requestUrl && (
                      <Link
                        to={doc.requestUrl}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold"
                        style={{
                          border: `1px solid ${doc.downloadUrl ? T.border : GREEN}`,
                          color: doc.downloadUrl ? T.fg : "var(--on-accent)",
                          background: doc.downloadUrl ? "transparent" : GREEN,
                        }}
                      >
                        {doc.requestLabel || "Request"}
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="py-10 text-sm" style={{ color: T.muted }}>
              No matches. Try another filter or{" "}
              <Link to="/quote" style={{ color: GREEN }}>
                request a document
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <section className="py-16 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Company"
            title="About, partners, and presentations."
          />
          <ul className="mt-10 divide-y" style={{ borderColor: T.borderSubtle }}>
            {companyLinks.map((item) => (
              <li key={item.to} style={{ borderColor: T.borderSubtle }}>
                <Link to={item.to} className="group flex items-start justify-between gap-6 py-5">
                  <div>
                    <div className="text-base font-semibold mb-1 transition-colors group-hover:text-[var(--accent)]" style={{ color: T.fg }}>
                      {item.label}
                    </div>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ color: T.muted }}>
                      {item.desc}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: GREEN }}>
                    <IconArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Need a document we have not listed yet?"
        accent="listed yet?"
        subtitle="Tell us the product and language — our team will send the current TDS, SDS, or certificate revision."
        ctaPrimary={{ label: "Request Documents", to: "/quote?message=Please%20send%20the%20following%20documents%3A" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
