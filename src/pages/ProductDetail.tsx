import { Link, Navigate, useParams } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { GREEN } from "@/theme";
import {
  buildProductQuoteUrl,
  buildSdsRequestUrl,
  canonicalProductPath,
  getCatalogProduct,
} from "@/data/productsCatalog";
import {
  IconArrowRight,
  IconCheck,
  IconChevronRight,
  IconShield,
} from "@/components/icons";

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

export default function ProductDetail() {
  const { id = "" } = useParams();
  const { isDark } = useTheme();
  const product = getCatalogProduct(id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const quoteUrl = buildProductQuoteUrl(product);
  const sdsUrl = buildSdsRequestUrl(product);
  const related = product.relatedIds
    .map((rid) => getCatalogProduct(rid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="pt-24 pb-20 min-h-screen bg-theme-base text-theme-fg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs font-medium text-theme-faint">
          <Link to="/" className="hover:underline transition-colors text-theme-muted">
            Home
          </Link>
          <IconChevronRight />
          <Link to="/products" className="hover:underline transition-colors text-theme-muted">
            Products
          </Link>
          <IconChevronRight />
          <Link
            to={`/products/${product.categoryKey}`}
            className="hover:underline transition-colors text-theme-muted"
          >
            {product.categoryLabel}
          </Link>
          <IconChevronRight />
          <span className="text-theme-neon">{product.name}</span>
        </nav>
      </div>

      <section className="relative overflow-hidden border-y border-theme-subtle">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            style={{ opacity: isDark ? 0.35 : 0.15 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(to bottom, rgba(7,16,24,0.78) 0%, rgba(14,26,40,0.88) 50%, #071018 100%)"
                : "linear-gradient(to bottom, rgba(240,242,245,0.82) 0%, rgba(240,242,245,0.94) 50%, #F0F2F5 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="badge-cert mb-6">
            <span className="badge-dot" />
            {product.badge}
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GREEN }}>
            {product.categoryLabel}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl font-display text-theme-fg">
            {product.name}
          </h1>

          <p className="text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed text-theme-muted">
            {product.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to={quoteUrl} className="btn-neon glow-btn hover:scale-105">
              Request a Quote <IconArrowRight />
            </Link>
            <button
              type="button"
              disabled
              title="Shop checkout arrives in a later phase"
              className="btn-secondary opacity-50 cursor-not-allowed"
              aria-disabled="true"
            >
              Add to Cart — Coming Soon
            </button>
            {product.tdsUrl && (
              <a
                href={product.tdsUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:scale-105 inline-flex items-center gap-2"
              >
                <PdfIcon />
                Download TDS
              </a>
            )}
            <Link to={sdsUrl} className="btn-secondary hover:scale-105 inline-flex items-center gap-2">
              <PdfIcon />
              Request SDS
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-theme-neon">Overview</span>
              <div className="h-px w-12 bg-[var(--accent)]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 font-display text-theme-fg">
              Product detail
            </h2>
            <p className="text-base leading-relaxed mb-10 text-theme-muted">{product.overview}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-2xl border border-theme-subtle card-glass">
                <p className="text-xs font-bold tracking-widest uppercase mb-2 text-theme-dim">Dilution</p>
                <p className="text-sm leading-relaxed text-theme-fg">{product.dilution}</p>
              </div>
              <div className="p-5 rounded-2xl border border-theme-subtle card-glass">
                <p className="text-xs font-bold tracking-widest uppercase mb-2 text-theme-dim">Packaging</p>
                <p className="text-sm leading-relaxed text-theme-fg">{product.packaging}</p>
              </div>
            </div>

            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-theme-dim">
              Applications
            </h3>
            <div className="space-y-3">
              {product.applications.map((app) => (
                <div
                  key={app}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-theme-subtle card-glass"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[var(--accent-border)] text-theme-neon">
                    <IconCheck />
                  </div>
                  <span className="text-sm font-medium text-theme-fg">{app}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card-glass p-6 sm:p-8 shadow-xl sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-theme-subtle">
                <div>
                  <h3 className="font-bold text-lg font-display text-theme-fg">Specifications</h3>
                  <span className="text-xs text-theme-dim">Technical data</span>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--cyan-border)] text-theme-cyan">
                  <IconShield />
                </div>
              </div>

              <dl className="space-y-4">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-theme-subtle gap-1"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-theme-dim">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-bold sm:text-right text-theme-fg">{spec.value}</dd>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-theme-subtle gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-theme-dim">Dilution</dt>
                  <dd className="text-sm font-bold sm:text-right text-theme-fg">{product.dilution}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-theme-subtle gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-theme-dim">Packaging</dt>
                  <dd className="text-sm font-bold sm:text-right text-theme-fg">{product.packaging}</dd>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-theme-subtle">
                <span className="text-xs font-bold tracking-widest uppercase block mb-3 text-theme-faint">
                  Certifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <span key={cert} className="badge-cert text-xs">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link to={quoteUrl} className="btn-neon glow-btn text-center justify-center">
                  Request a Quote
                </Link>
                <button
                  type="button"
                  disabled
                  className="btn-secondary opacity-50 cursor-not-allowed w-full justify-center"
                  title="Available when Shop launches"
                >
                  Add to Cart — Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.features.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-theme-subtle">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-theme-neon">
              Advantages
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-theme-fg">
              Why teams specify this product
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.features.map((feat) => (
              <div key={feat.title} className="card-glass p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1">
                {feat.highlight && <div className="badge-cert mb-4">{feat.highlight}</div>}
                <h3 className="text-lg font-bold mb-3 font-display text-theme-fg">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-theme-muted">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-theme-subtle">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-theme-neon">
            Related
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mb-8 font-display text-theme-fg">
            Complementary products
          </h2>
          <div className="space-y-3">
            {related.map((item) => (
              <div
                key={item.id}
                className="card-glass flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 border border-theme-subtle"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold font-display text-theme-fg">{item.name}</h3>
                  <p className="mt-1 text-sm text-theme-muted leading-relaxed">{item.tagline}</p>
                </div>
                <Link
                  to={canonicalProductPath(item.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105 shrink-0"
                  style={{ background: GREEN, color: "var(--on-accent)" }}
                >
                  View Product <IconArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center card-glass border border-theme shadow-2xl">
          <span className="text-xs font-bold tracking-widest uppercase block mb-3 text-theme-neon">
            Next step
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 font-display text-theme-fg">
            Ready to evaluate {product.name}?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-8 text-theme-muted max-w-2xl mx-auto">
            Request pricing, packaging, and documentation. Cart checkout for direct-purchase SKUs lands in a later phase.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to={quoteUrl} className="btn-neon glow-btn hover:scale-105">
              Request a Quote
            </Link>
            <Link to="/finder" className="btn-secondary hover:scale-105">
              Back to Product Finder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
