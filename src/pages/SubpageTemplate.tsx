import { Link, useLocation } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { GREEN } from "@/theme";
import { subpagesData, type SubpageInfo } from "@/data/subpagesData";
import { productPdfs, pdfForRoute } from "@/data/productPdfs";
import {
  IconArrowRight,
  IconShield,
  IconCheck,
  IconChevronRight,
} from "@/components/icons";

interface SubpageTemplateProps {
  forcedSlug?: string;
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

export default function SubpageTemplate({ forcedSlug }: SubpageTemplateProps) {
  const { isDark } = useTheme();
  const location = useLocation();

  const pathSlug = forcedSlug || location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const data: SubpageInfo = subpagesData[pathSlug] || {
    slug: pathSlug,
    category: "Technical Solutions",
    parentMenu: "Products",
    parentSlug: "/products",
    title: pathSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    subtitle: "Advanced biodegradable clean-tech chemistry engineered for industrial performance.",
    badge: "GERMAN ENGINEERING · CERTIFIED QUALITY",
    heroImage: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1600&fit=crop&auto=format",
    overview: "ETS International specializes in high-performance, non-toxic, and biodegradable chemical technologies engineered to replace hazardous petroleum solvents without compromising cleaning efficiency.",
    features: [
      {
        title: "High-Performance Bio-Chemistry",
        description: "Formulated with plant-derived bio-solvents that rapidly penetrate polymerized hydrocarbons, greases, and atmospheric contaminants.",
        highlight: "100% Biodegradable"
      },
      {
        title: "Surface Safe & Non-Corrosive",
        description: "Engineered to be completely safe on structural alloys, titanium, aluminum, composites, and sensitive elastomer gaskets.",
        highlight: "Zero Surface Etching"
      },
      {
        title: "Full Regulatory Compliance",
        description: "Zero VOC, non-flammable, REACH registered, and non-hazardous for transportation and worker handling.",
        highlight: "Safe for Operators"
      }
    ],
    specifications: [
      { label: "Formulation Base", value: "Water-based natural bio-ester concentrate" },
      { label: "Biodegradability", value: "OECD 301 certified (>98% within 14 days)" },
      { label: "VOC Content", value: "0 g/L (100% VOC-Free)" },
      { label: "Flash Point", value: "None (Non-flammable)" }
    ],
    applications: [
      "Aerospace, defense, and military equipment maintenance",
      "Industrial manufacturing pre-treatment and parts washing",
      "Marine vessel cargo and machinery degreasing",
      "HACCP certified food processing clean-down"
    ],
    certifications: ["ISO 9001:2015", "REACH Registered", "RoHS Compliant", "CE Certified"]
  };

  const pagePdf = data.pdfUrl || productPdfs[pathSlug];
  const related = data.relatedProducts || [];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-theme-base text-theme-fg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs font-medium text-theme-faint">
          <Link to="/" className="hover:underline transition-colors text-theme-muted">
            Home
          </Link>
          <IconChevronRight />
          {data.parentSlug ? (
            <Link to={data.parentSlug} className="hover:underline transition-colors text-theme-muted">
              {data.parentMenu}
            </Link>
          ) : (
            <span className="text-theme-muted">{data.parentMenu}</span>
          )}
          <IconChevronRight />
          <span className="text-theme-neon">{data.title}</span>
        </nav>
      </div>

      <section className="relative overflow-hidden border-y border-theme-subtle">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover object-center"
            style={{ opacity: isDark ? 0.35 : 0.15 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(to bottom, rgba(5,5,5,0.75) 0%, rgba(10,25,47,0.85) 50%, #050505 100%)"
                : "linear-gradient(to bottom, rgba(248,249,250,0.8) 0%, rgba(248,249,250,0.92) 50%, #F8F9FA 100%)",
            }}
          />
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="badge-cert mb-6">
            <span className="badge-dot" />
            {data.badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl font-display text-theme-fg">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed text-theme-muted">
            {data.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/quote" className="btn-neon glow-btn hover:scale-105">
              Request Free Sample & Quote <IconArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary hover:scale-105">
              Contact Specialist
            </Link>
            {pagePdf && (
              <a
                href={pagePdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:scale-105 inline-flex items-center gap-2"
              >
                <PdfIcon />
                {data.pdfLabel || "Download PDF"}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-theme-neon">
                TECHNICAL OVERVIEW
              </span>
              <div className="h-px w-12 bg-[#00FF66]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 font-display text-theme-fg">
              Engineered to Deliver Clean-Tech Excellence Without Compromise
            </h2>
            <p className="text-base leading-relaxed mb-8 text-theme-muted">
              {data.overview}
            </p>

            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-theme-dim">
              PRIMARY DEPLOYMENT USE-CASES:
            </h3>
            <div className="space-y-3">
              {data.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl border border-theme-subtle card-glass transition-all duration-200">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[rgba(0,255,102,0.15)] text-theme-neon">
                    <IconCheck />
                  </div>
                  <span className="text-sm font-medium text-theme-fg">{app}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card-glass p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-theme-subtle">
                <div>
                  <h3 className="font-bold text-lg font-display text-theme-fg">
                    Technical Specifications
                  </h3>
                  <span className="text-xs text-theme-dim">Standard Laboratory Analysis</span>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(0,204,255,0.15)] text-theme-cyan">
                  <IconShield />
                </div>
              </div>

              <dl className="space-y-4">
                {data.specifications.map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-theme-subtle gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-theme-dim">{spec.label}</dt>
                    <dd className="text-sm font-bold sm:text-right text-theme-fg">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-theme-subtle">
                <span className="text-xs font-bold tracking-widest uppercase block mb-3 text-theme-faint">
                  CERTIFIED & TESTED TO:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.certifications.map((cert) => (
                    <span key={cert} className="badge-cert text-xs">{cert}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-theme-subtle">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-theme-neon">
            PERFORMANCE ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-theme-fg">
            Why Global Operations Rely On This Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feat, idx) => (
            <div key={idx} className="card-glass p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1">
              {feat.highlight && <div className="badge-cert mb-4">{feat.highlight}</div>}
              <h3 className="text-lg font-bold mb-3 font-display text-theme-fg">{feat.title}</h3>
              <p className="text-sm leading-relaxed text-theme-muted">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-theme-subtle">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-theme-neon">
              PRODUCT RANGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-theme-fg">
              Products for {data.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-theme-muted max-w-2xl">
              Open a product page for full technical detail, or download the datasheet PDF where available.
            </p>
          </div>

          <div className="space-y-3">
            {related.map((product) => {
              const pdf = product.pdf || pdfForRoute(product.to);
              return (
                <div
                  key={product.to}
                  className="card-glass flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 border border-theme-subtle"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold font-display text-theme-fg">{product.name}</h3>
                    {product.desc && (
                      <p className="mt-1 text-sm text-theme-muted leading-relaxed">{product.desc}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <Link
                      to={product.to}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                      style={{ background: GREEN, color: "#050505" }}
                    >
                      View Product <IconArrowRight />
                    </Link>
                    {pdf && (
                      <a
                        href={pdf}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2 text-xs py-2.5 px-4 hover:scale-105"
                      >
                        <PdfIcon />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center card-glass border border-theme shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase block mb-3 text-theme-neon">
              TEST IN YOUR OWN FACILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4 font-display text-theme-fg">
              Ready to Evaluate {data.title}?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-theme-muted">
              We provide complimentary sample batches and complete Safety Data Sheet (SDS) dossiers for industrial verification trials.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link to="/quote" className="btn-neon glow-btn hover:scale-105">
                Request Free Sample Batch
              </Link>
              <Link to="/contact" className="btn-secondary hover:scale-105">
                Talk with Chemical Engineer
              </Link>
              {pagePdf && (
                <a
                  href={pagePdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover:scale-105 inline-flex items-center gap-2"
                >
                  <PdfIcon />
                  {data.pdfLabel || "Download Datasheet PDF"}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
