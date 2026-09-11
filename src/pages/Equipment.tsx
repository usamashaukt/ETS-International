import { Link } from "react-router";
import { T, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconArrowRight } from "@/components/icons";

const equipmentLinks = [
  {
    label: "Cleaning Accessories",
    to: "/cleaning-accessories",
    desc: "Pads, tools, and application accessories for aviation and industrial wash programmes.",
  },
  {
    label: "Sky Reacher GS-T 1000",
    to: "/sky-reacher",
    desc: "Mobile aircraft cleaning machine with integrated tank and hose reels.",
  },
  {
    label: "Easy Wash Sprayer | Foamer",
    to: "/easy-wash-sprayer-foamer",
    desc: "Foam and spray accessory for exterior wash and surface application.",
  },
  {
    label: "Runway Cleaning Equipment",
    to: "/runway-cleaning-equipment",
    desc: "Truck-mounted systems for runway rubber and contaminant removal.",
  },
  {
    label: "OSMOSE RO Module",
    to: "/osmose",
    desc: "Compact reverse-osmosis module for process and mixing water.",
  },
];

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
        ctaSecondary={{ label: "View Products", to: "/products" }}
        minHeight="min-h-[55vh]"
      />

      <section className="py-20 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Equipment Catalogue"
            title="Browse systems and accessories."
            subtitle="Full equipment catalog and specs expand in a later phase — these pages are live today."
          />

          <ul className="mt-12 divide-y" style={{ borderColor: T.borderSubtle }}>
            {equipmentLinks.map((item) => (
              <li key={item.to} style={{ borderColor: T.borderSubtle }}>
                <Link
                  to={item.to}
                  className="group flex items-start justify-between gap-6 py-5 transition-colors"
                >
                  <div>
                    <div
                      className="text-base font-semibold mb-1 transition-colors group-hover:text-[var(--accent)]"
                      style={{ color: T.fg }}
                    >
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
        title="Need help specifying equipment?"
        accent="equipment?"
        subtitle="Tell us your application and we will recommend the right washer, foamer, or RO setup."
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
