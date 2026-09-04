import { Link, useLocation } from "react-router";
import { useTheme } from "@/lib/store";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import { subpagesData, type SubpageInfo } from "@/data/subpagesData";
import {
  IconArrowRight,
  IconShield,
  IconCheck,
  IconLeaf,
  IconChevronRight,
  IconFactory,
  IconPlane,
} from "@/lib/icons";

interface SubpageTemplateProps {
  forcedSlug?: string;
}

export default function SubpageTemplate({ forcedSlug }: SubpageTemplateProps) {
  const { isDark } = useTheme();
  const location = useLocation();

  // Determine current slug from prop or pathname
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

  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ background: T.bg, color: T.fg }}>
      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs font-medium" style={{ color: T.faint }}>
          <Link to="/" className="hover:underline transition-colors" style={{ color: T.muted }}>
            Home
          </Link>
          <IconChevronRight />
          {data.parentSlug ? (
            <Link to={data.parentSlug} className="hover:underline transition-colors" style={{ color: T.muted }}>
              {data.parentMenu}
            </Link>
          ) : (
            <span style={{ color: T.muted }}>{data.parentMenu}</span>
          )}
          <IconChevronRight />
          <span style={{ color: GREEN }}>{data.title}</span>
        </nav>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-y" style={{ borderColor: T.borderSubtle }}>
        {/* Background Image with Dark Gradient Overlay */}
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
                ? "linear-gradient(to right, rgba(5,5,5,0.95) 30%, rgba(5,5,5,0.7) 100%)"
                : "linear-gradient(to right, rgba(248,249,250,0.95) 30%, rgba(248,249,250,0.7) 100%)",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: T.certText }} />
            {data.badge}
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl"
            style={{ fontFamily: JK, color: T.fg }}
          >
            {data.title}
          </h1>

          <p className="text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed" style={{ color: T.muted }}>
            {data.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/quote"
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 glow-btn"
              style={{ background: GREEN, color: "#050505", boxShadow: "0 0 24px rgba(0,255,102,0.3)" }}
            >
              Request Free Sample & Quote <IconArrowRight />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border transition-all duration-200 hover:scale-105"
              style={{ borderColor: T.border, color: T.fg, background: T.glassCard }}
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* ── Overview & Key Value Narrative ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GREEN }}>
                TECHNICAL OVERVIEW
              </span>
              <div className="h-px w-12" style={{ background: GREEN }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ fontFamily: JK }}>
              Engineered to Deliver Clean-Tech Excellence Without Compromise
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              {data.overview}
            </p>

            {/* Applications List */}
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: T.dim }}>
              PRIMARY DEPLOYMENT USE-CASES:
            </h3>
            <div className="space-y-3">
              {data.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200"
                  style={{ background: T.glassCard, borderColor: T.borderSubtle }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(0,255,102,0.15)", color: GREEN }}>
                    <IconCheck />
                  </div>
                  <span className="text-sm font-medium" style={{ color: T.fg }}>
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 border shadow-xl backdrop-blur-md"
              style={{ background: T.glassCard, borderColor: T.border }}>
              <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: T.borderSubtle }}>
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: JK }}>
                    Technical Specifications
                  </h3>
                  <span className="text-xs" style={{ color: T.dim }}>
                    Standard Laboratory Analysis
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,204,255,0.15)", color: CYAN }}>
                  <IconShield />
                </div>
              </div>

              <dl className="space-y-4">
                {data.specifications.map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b gap-1"
                    style={{ borderColor: T.borderSubtle }}>
                    <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: T.dim }}>
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-bold sm:text-right" style={{ color: T.fg }}>
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Certifications footer */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: T.borderSubtle }}>
                <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: T.faint }}>
                  CERTIFIED & TESTED TO:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.certifications.map((cert) => (
                    <span key={cert} className="px-2.5 py-1 rounded text-xs font-semibold tracking-wide"
                      style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Advantages / Features Bento ── */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t" style={{ borderColor: T.borderSubtle }}>
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: GREEN }}>
            PERFORMANCE ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black" style={{ fontFamily: JK }}>
            Why Global Operations Rely On This Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: T.glassCard,
                borderColor: T.border,
                boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.5)" : "0 8px 24px rgba(0,0,0,0.05)",
              }}
            >
              {feat.highlight && (
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ background: "rgba(0,255,102,0.1)", color: GREEN, border: `1px solid ${T.border}` }}>
                  {feat.highlight}
                </div>
              )}
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: JK, color: T.fg }}>
                {feat.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center border shadow-2xl"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(10,25,47,0.9) 0%, rgba(5,5,5,0.95) 100%)"
              : "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)",
            borderColor: T.border,
          }}
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: GREEN }}>
              TEST IN YOUR OWN FACILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ fontFamily: JK }}>
              Ready to Evaluate {data.title}?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: T.muted }}>
              We provide complimentary sample batches and complete Safety Data Sheet (SDS) dossiers for industrial verification trials.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/quote"
                className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 glow-btn"
                style={{ background: GREEN, color: "#050505", boxShadow: "0 0 20px rgba(0,255,102,0.35)" }}
              >
                Request Free Sample Batch
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full font-semibold text-sm border transition-all duration-200 hover:scale-105"
                style={{ borderColor: T.border, color: T.fg }}
              >
                Talk with Chemical Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
