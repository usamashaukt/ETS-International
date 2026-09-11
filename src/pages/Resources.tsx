import { Link } from "react-router";
import { T, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconArrowRight } from "@/components/icons";

const resourceLinks = [
  {
    label: "About ETS",
    to: "/about",
    desc: "Company background, mission, and environmental philosophy.",
  },
  {
    label: "Why ETS?",
    to: "/why-ets",
    desc: "What sets ETS International apart in certified biodegradable chemistry.",
  },
  {
    label: "Certifications & Approvals",
    to: "/certifications",
    desc: "ISO, Airbus, Boeing, REACH, NSF, MARPOL, and NATO compliance overview.",
  },
  {
    label: "Presentations",
    to: "/presentations",
    desc: "Technical and commercial presentation materials.",
  },
  {
    label: "Co-Partners",
    to: "/co-partners",
    desc: "Partners and distribution network.",
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documentation, compliance, and company insight."
        accent="company insight."
        subtitle="Certifications, presentations, and company pages in one place. A searchable TDS / SDS downloads hub arrives in a later phase."
        imgUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "View Certifications", to: "/certifications" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
        minHeight="min-h-[55vh]"
      />

      <section className="py-20 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Browse Resources"
            title="Start with compliance and company pages."
            subtitle="Filterable technical downloads will land here once document assets are wired."
          />

          <ul className="mt-12 divide-y" style={{ borderColor: T.borderSubtle }}>
            {resourceLinks.map((item) => (
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
        title="Looking for a specific certificate or SDS?"
        accent="SDS?"
        subtitle="Request the document you need and our team will send the current revision."
        ctaPrimary={{ label: "Request a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
