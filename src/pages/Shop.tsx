import { Link } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { PageHero, CtaBanner } from "@/components/shared";

export default function Shop() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Catalog coming soon."
        accent="soon."
        subtitle="Online purchasing and RFQ-gated checkout are on the roadmap. Until then, request a quote for pricing, packaging, and lead times."
        imgUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Browse Products", to: "/products" }}
        minHeight="min-h-[55vh]"
      />

      <section className="py-20 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN }}>
            What is coming
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5" style={{ fontFamily: JK, color: T.fg }}>
            Product catalog, cart, and checkout.
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: T.muted }}>
            Direct-purchase SKUs and RFQ-gated industrial items will live here. For now, use the quote form —
            our team will confirm availability, packaging, and delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: GREEN, color: "var(--on-accent)" }}
            >
              Request a Quote
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{ border: `1px solid ${T.border}`, color: T.fg }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need pricing for a specific product?"
        accent="product?"
        subtitle="Send your application details and we will respond with a tailored quote."
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
