import { Link } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconArrowRight } from "@/components/icons";
import { getCatalogProduct, canonicalProductPath } from "@/data/productsCatalog";

const sections = [
  {
    id: "wash-systems",
    eyebrow: "Wash systems",
    title: "Mobile washers for apron and hangar programmes.",
    ids: ["sky-reacher"] as const,
  },
  {
    id: "application",
    eyebrow: "Application accessories",
    title: "Foamers and spray tools that deliver chemistry evenly.",
    ids: ["easy-wash-sprayer-foamer"] as const,
  },
  {
    id: "airfield",
    eyebrow: "Airfield systems",
    title: "Truck-mounted runway cleaning for rubber programmes.",
    ids: ["runway-cleaning-equipment"] as const,
  },
  {
    id: "water",
    eyebrow: "Process water",
    title: "Reverse-osmosis modules for rinse and mixing water quality.",
    ids: ["osmose"] as const,
  },
];

const accessoryHub = {
  label: "Cleaning Accessories hub",
  to: "/cleaning-accessories",
  desc: "Pads, tools, and supporting accessories for aviation and industrial wash programmes.",
};

export default function Equipment() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Systems and accessories that put chemistry to work."
        accent="chemistry to work."
        subtitle="Washers, sprayers, foamers, and reverse-osmosis modules engineered to apply ETS chemistry safely and efficiently on aircraft, runways, and industrial surfaces."
        imgUrl="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Browse Chemistry", to: "/products" }}
        minHeight="min-h-[55vh]"
      />

      {sections.map((section) => {
        const items = section.ids
          .map((id) => getCatalogProduct(id))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <section
            key={section.id}
            className="py-16 px-6"
            style={{ borderTop: `1px solid ${T.borderSubtle}` }}
          >
            <div className="max-w-6xl mx-auto">
              <SectionHeader eyebrow={section.eyebrow} title={section.title} />

              <div className="mt-10 grid grid-cols-1 gap-6">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-2"
                  >
                    <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[220px]">
                      <img
                        src={item.heroImage}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: "var(--img-opacity-sm)" }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(3,8,18,0.75) 0%, transparent 55%)" }}
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: GREEN }}>
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <h3 className="text-2xl font-black mb-2" style={{ fontFamily: JK, color: T.fg }}>
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium mb-4" style={{ color: GREEN }}>
                        {item.tagline}
                      </p>
                      <p className="text-sm leading-relaxed mb-6 max-w-3xl" style={{ color: T.muted }}>
                        {item.overview}
                      </p>

                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {item.specifications.slice(0, 4).map((spec) => (
                          <div key={spec.label} className="py-2 border-b" style={{ borderColor: T.borderSubtle }}>
                            <dt className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: T.dim }}>
                              {spec.label}
                            </dt>
                            <dd className="text-sm font-medium" style={{ color: T.fg }}>
                              {spec.value}
                            </dd>
                          </div>
                        ))}
                        <div className="py-2 border-b" style={{ borderColor: T.borderSubtle }}>
                          <dt className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: T.dim }}>
                            Packaging / config
                          </dt>
                          <dd className="text-sm font-medium" style={{ color: T.fg }}>
                            {item.packaging}
                          </dd>
                        </div>
                      </dl>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          to={canonicalProductPath(item.id)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                          style={{ background: GREEN, color: "var(--on-accent)" }}
                        >
                          View equipment detail <IconArrowRight />
                        </Link>
                        <Link
                          to={`/quote?message=${encodeURIComponent(`Equipment enquiry: ${item.name}`)}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                          style={{ border: `1px solid ${T.border}`, color: T.fg }}
                        >
                          Request quote
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Accessories"
            title="Complementary wash tools."
            subtitle="Open the accessories hub for pads and supporting tools used alongside wash systems."
          />
          <Link
            to={accessoryHub.to}
            className="mt-10 group flex items-start justify-between gap-6 py-5 border-t border-b"
            style={{ borderColor: T.borderSubtle }}
          >
            <div>
              <div className="text-base font-semibold mb-1 transition-colors group-hover:text-[var(--accent)]" style={{ color: T.fg }}>
                {accessoryHub.label}
              </div>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: T.muted }}>
                {accessoryHub.desc}
              </p>
            </div>
            <span className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: GREEN }}>
              <IconArrowRight />
            </span>
          </Link>
        </div>
      </section>

      <CtaBanner
        title="Need help specifying equipment?"
        accent="equipment?"
        subtitle="Tell us your application and we will recommend the right washer, foamer, or RO setup."
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Open Product Finder", to: "/finder" }}
      />
    </>
  );
}
