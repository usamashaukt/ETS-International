import { Link } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { PageHero } from "@/components/shared";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page is not on our map."
        accent="not on our map."
        subtitle="The link may be outdated, mistyped, or the page has moved. Head home or browse products to continue."
        imgUrl="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "Back to Home", to: "/" }}
        ctaSecondary={{ label: "Browse Products", to: "/products" }}
        minHeight="min-h-[70vh]"
      />

      <section className="py-16 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN }}>
            Need a hand?
          </p>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight mb-4"
            style={{ fontFamily: JK, color: T.fg }}
          >
            Looking for a product or quote?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
            Our team can point you to the right chemistry, documentation, or contact.
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
              to="/contact"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{ border: `1px solid ${T.border}`, color: T.fg }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
