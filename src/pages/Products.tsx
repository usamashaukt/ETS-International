import { Link, useParams } from "react-router";
import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";
import { IconArrowRight, IconPlane, IconFactory, IconAnchor, IconShield, IconDrop, IconDiamond, IconFlask } from "@/components/icons";
import {
  PRODUCT_CATEGORY_FILTERS,
  productsCatalog,
  type ProductCategoryKey,
} from "@/data/productsCatalog";

const flagship = [
  {
    id: "aquasmarter",
    name: "AquaSmarter™",
    category: "Technology",
    categoryColor: GREEN,
    icon: <IconDrop />,
    img: "https://images.unsplash.com/photo-1781707436000-18016e244e87?w=600&h=400&fit=crop&auto=format",
    tagline: "Breakthrough water-activated cleaning chemistry.",
    desc: "Flagship water-based platform — solvent-free, REACH-aligned, engineered for demanding industrial wash programmes.",
    to: "/technology/aquasmarter",
  },
  {
    id: "nano-diamond",
    name: "Nano Diamond™",
    category: "Technology",
    categoryColor: CYAN,
    icon: <IconDiamond />,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
    tagline: "Molecular-level friction reduction. 6%+ fuel savings.",
    desc: "Nano-scale diamond lubricant additive verified in fleet testing for measurable fuel economy.",
    to: "/technology/nano-diamond",
  },
  {
    id: "fog-it-innova",
    name: "FOG-IT INNOVA",
    category: "Disinfection",
    categoryColor: CYAN,
    icon: <IconFlask />,
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop&auto=format",
    tagline: "Electrostatic fogging for critical spaces.",
    desc: "Rapid cabin and facility disinfection with documented application support.",
    to: "/products/fog-it",
  },
  {
    id: "aviation-range",
    name: "Aviation Cleaners",
    category: "Aviation",
    categoryColor: GREEN,
    icon: <IconPlane />,
    img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=600&h=400&fit=crop&auto=format",
    tagline: "AIRBUS & BOEING aligned wash chemistry.",
    desc: "Exterior, interior, hydraulic, runway, and hangar programmes for commercial and military MRO.",
    to: "/products/aviation",
  },
  {
    id: "industrial-range",
    name: "Industrial Degreasers",
    category: "Industrial",
    categoryColor: CYAN,
    icon: <IconFactory />,
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format",
    tagline: "Zero-VOC workshop and process cleaning.",
    desc: "Metal prep, refinery flush, fleet wash, and derusting chemistry for industrial sites.",
    to: "/products/industrial",
  },
  {
    id: "haccp-range",
    name: "HACCP FoodSafe",
    category: "HACCP",
    categoryColor: GREEN,
    icon: <IconShield />,
    img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=600&h=400&fit=crop&auto=format",
    tagline: "Food-environment cleaners and sanitisers.",
    desc: "Grease, multi-surface, sanitary, and alcohol-free options for HACCP programmes.",
    to: "/products/haccp",
  },
  {
    id: "marine-range",
    name: "Marine & Offshore",
    category: "Marine",
    categoryColor: "#4499ff",
    icon: <IconAnchor />,
    img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format",
    tagline: "MARPOL-minded cleaning guidance.",
    desc: "Hull, deck, and engine-room programmes for commercial marine and offshore ops.",
    to: "/industries/marine",
  },
];

function categoryFromParam(param?: string): ProductCategoryKey | "all" {
  if (!param || param === "all") return "all";
  const hit = PRODUCT_CATEGORY_FILTERS.find((c) => c.value === param);
  return hit?.categoryKey ?? "all";
}

export default function Products() {
  const { id: routeId } = useParams();
  const active = categoryFromParam(routeId);

  const catalogItems =
    active === "all"
      ? productsCatalog.filter((p) => p.categoryKey !== "equipment")
      : productsCatalog.filter((p) => p.categoryKey === active);

  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="Professional cleaning technology, engineered for industry."
        accent="engineered for industry."
        subtitle="Browse flagship platforms or open individual SKU pages with dilution, packaging, TDS, and quote actions."
        imgUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&auto=format"
        badge="AIRBUS · BOEING · NSF H1 · MARPOL · REACH"
        ctaPrimary={{ label: "Product Finder", to: "/finder" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
        minHeight="min-h-[55vh]"
      />

      <section className="py-20 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Flagship"
            title="Start with the platforms teams know."
            subtitle="Technology spotlights and category entry points — then drill into individual SKUs below."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {flagship.map((product) => (
              <Link
                key={product.id}
                to={product.to}
                className="bento-card group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300"
                style={{ borderColor: T.border, background: T.glassCard }}
              >
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: "var(--img-opacity-sm)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.85) 0%, rgba(0,0,0,0) 60%)" }} />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider"
                      style={{ background: "rgba(7, 16, 24, 0.88)", border: "1px solid rgba(255,255,255,0.22)", color: "#FFFFFF" }}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-base mb-1.5" style={{ fontFamily: JK, color: T.fg }}>
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium mb-3 italic" style={{ color: product.categoryColor }}>
                    {product.tagline}
                  </p>
                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: T.muted }}>
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: product.categoryColor }}>
                    Explore <IconArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sku-catalog" className="py-20 px-6 scroll-mt-28" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="SKU Catalogue"
            title="Individual product pages."
            subtitle="Each SKU opens a canonical detail page with specs, dilution, packaging, TDS download, and quote CTA."
          />

          <div className="flex flex-wrap gap-2 mt-10 mb-8">
            {PRODUCT_CATEGORY_FILTERS.map((cat) => {
              const selected =
                (cat.value === "all" && active === "all") ||
                cat.categoryKey === active;
              const to = cat.value === "all" ? "/products" : `/products/${cat.value}`;
              return (
                <Link
                  key={cat.value}
                  to={to}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={{
                    background: selected ? GREEN : T.glassCard,
                    color: selected ? "var(--on-accent)" : T.muted,
                    border: `1px solid ${selected ? GREEN : T.border}`,
                  }}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          <ul className="divide-y" style={{ borderColor: T.borderSubtle }}>
            {catalogItems.map((item) => (
              <li key={item.id} style={{ borderColor: T.borderSubtle }}>
                <Link
                  to={`/products/${item.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: GREEN }}>
                        {item.categoryLabel}
                      </span>
                    </div>
                    <div className="text-base font-semibold transition-colors group-hover:text-[var(--accent)]" style={{ color: T.fg, fontFamily: JK }}>
                      {item.name}
                    </div>
                    <p className="text-sm leading-relaxed mt-1 max-w-3xl" style={{ color: T.muted }}>
                      {item.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold shrink-0" style={{ color: GREEN }}>
                    View specs <IconArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {catalogItems.length === 0 && (
            <p className="text-sm py-8" style={{ color: T.muted }}>
              No SKUs in this category yet — try All or open the Product Finder.
            </p>
          )}
        </div>
      </section>

      <CtaBanner
        title="Need help choosing the right product?"
        accent="right product?"
        subtitle="Answer four short questions in the Product Finder, or talk to our technical team for a tailored recommendation."
        ctaPrimary={{ label: "Open Product Finder", to: "/finder" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
