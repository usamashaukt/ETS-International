import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconArrowRight, IconPlane, IconFactory, IconAnchor, IconShield, IconDrop, IconDiamond, IconFlask } from "@/lib/icons";

export const products = [
  {
    id: "aquasmarter",
    name: "AquaSmarter™",
    category: "Water-Based Technology",
    categoryColor: GREEN,
    icon: <IconDrop />,
    img: "https://images.unsplash.com/photo-1781707436000-18016e244e87?w=600&h=400&fit=crop&auto=format",
    tagline: "Breakthrough water-activated cleaning chemistry.",
    desc: "AquaSmarter is ETS International's flagship water-based cleaning platform. Engineered without solvents, phosphates, or caustic agents — pH-neutral, non-flammable, and REACH registered.",
    applications: ["Aviation MRO", "Industrial Degreasing", "Marine Surfaces", "Food Processing"],
    to: "/technology/aquasmarter",
  },
  {
    id: "nano-diamond",
    name: "Nano Diamond™",
    category: "Nano Lubricant Technology",
    categoryColor: CYAN,
    icon: <IconDiamond />,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
    tagline: "Molecular-level friction reduction. 6%+ fuel savings.",
    desc: "Patented nano-scale diamond particles integrated into lubricant formulations, reducing engine friction at the molecular level. Verified minimum 6% fuel savings in independent fleet testing.",
    applications: ["Aviation Engines", "Heavy Machinery", "Marine Propulsion", "Fleet Vehicles"],
    to: "/technology/nano-diamond",
  },
  {
    id: "ets-aviclean",
    name: "ETS AviClean",
    category: "Aviation",
    categoryColor: GREEN,
    icon: <IconPlane />,
    img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=600&h=400&fit=crop&auto=format",
    tagline: "AIRBUS & BOEING approved aircraft cleaner.",
    desc: "AIRBUS AIMS 09-00-002 and BOEING D6-17487 approved cleaning concentrate for aircraft exteriors, engine nacelles, landing gear, and interior surfaces. Fully biodegradable.",
    applications: ["Aircraft Exterior", "Engine Nacelles", "Landing Gear", "APU Components"],
    to: "/products/aviation",
  },
  {
    id: "ets-degreaser-pro",
    name: "ETS Degreaser Pro",
    category: "Industrial",
    categoryColor: CYAN,
    icon: <IconFactory />,
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format",
    tagline: "Zero VOC industrial degreasing for heavy metal surfaces.",
    desc: "Heavy-duty industrial degreaser for manufacturing environments. Zero VOC, solvent-free formulation that outperforms petroleum-based degreasers on machined metal, castings, and weld preparation.",
    applications: ["Metal Fabrication", "CNC Machining", "Weld Prep", "Foundry Equipment"],
    to: "/products/industrial",
  },
  {
    id: "ets-marine",
    name: "ETS MarineClean",
    category: "Marine & Offshore",
    categoryColor: "#4499ff",
    icon: <IconAnchor />,
    img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format",
    tagline: "MARPOL-compliant. Safe for ocean environments.",
    desc: "MARPOL-compliant marine cleaning formulations for hull maintenance, engine room degreasing, and offshore equipment cleaning. Fully biodegradable and certified safe for discharge in marine environments.",
    applications: ["Hull Maintenance", "Engine Room", "Offshore Equipment", "Bilge Cleaning"],
    to: "/industries/marine",
  },
  {
    id: "ets-haccp",
    name: "ETS FoodSafe",
    category: "HACCP / Food Safety",
    categoryColor: GREEN,
    icon: <IconShield />,
    img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=600&h=400&fit=crop&auto=format",
    tagline: "NSF H1 registered. Zero flavor taint.",
    desc: "NSF H1 registered cleaning formulations for food production facilities, packhouses, and commercial kitchens. Full HACCP compliance documentation provided. Zero flavor taint on contact surfaces.",
    applications: ["Food Processing Lines", "Packhouses", "Commercial Kitchens", "Cold Storage"],
    to: "/products/haccp",
  },
  {
    id: "fog-it-innova",
    name: "FOG-IT INNOVA",
    category: "Disinfection",
    categoryColor: CYAN,
    icon: <IconFlask />,
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop&auto=format",
    tagline: "Professional fogging disinfection for critical environments.",
    desc: "Electrostatic fogging disinfection solution for professional use in aviation, healthcare, food production, and transport environments. Broad-spectrum antimicrobial efficacy with rapid contact times.",
    applications: ["Aircraft Cabins", "Transport Vehicles", "Food Facilities", "Industrial Spaces"],
    to: "/disinfection",
  },
  {
    id: "c2-coating",
    name: "C2 Coating System",
    category: "Surface Protection",
    categoryColor: GREEN,
    icon: <IconFlask />,
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&auto=format",
    tagline: "Advanced surface protection and anti-corrosion coating.",
    desc: "Multi-layer surface coating system providing long-term protection against corrosion, UV degradation, and chemical attack. Approved for aviation and industrial applications.",
    applications: ["Aircraft Components", "Marine Structures", "Industrial Equipment", "Metal Surfaces"],
    to: "/products",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Aviation", value: "Aviation" },
  { label: "Industrial", value: "Industrial" },
  { label: "Marine", value: "Marine & Offshore" },
  { label: "Food Safety", value: "HACCP / Food Safety" },
  { label: "Technology", value: "technology" },
  { label: "Disinfection", value: "Disinfection" },
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="Professional cleaning technology, engineered for industry."
        accent="engineered for industry."
        subtitle="ETS International offers a complete range of biodegradable, certified cleaning and maintenance solutions — from aviation MRO to food processing."
        imgUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&auto=format"
        badge="AIRBUS · BOEING · NSF H1 · MARPOL · REACH"
        ctaPrimary={{ label: "Get a Quote", to: "/quote" }}
        ctaSecondary={{ label: "Contact Technical Team", to: "/contact" }}
        minHeight="min-h-[60vh]"
      />

      {/* Product grid */}
      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="All Products"
            title="The complete ETS range."
            subtitle="Select a product to view full specifications, certifications, and application guidance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
            {products.map((product) => (
              <Link key={product.id} to={product.to}
                className="bento-card group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300"
                style={{ borderColor: T.border, background: T.glassCard }}>
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: "var(--img-opacity-sm)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,18,0.85) 0%, rgba(0,0,0,0) 60%)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider"
                      style={{ background: "rgba(0,0,0,0.6)", border: `1px solid ${product.categoryColor}30`, color: product.categoryColor }}>
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,0,0,0.7)", color: product.categoryColor }}>
                      {product.icon}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-base mb-1.5" style={{ fontFamily: JK, color: T.fg }}>{product.name}</h3>
                  <p className="text-xs font-medium mb-3 italic" style={{ color: product.categoryColor }}>{product.tagline}</p>
                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: T.muted }}>{product.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: product.categoryColor }}>
                    View Product <IconArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ETS products */}
      <section className="py-20 px-6" style={{ background: "rgba(3,8,18,0.97)", borderTop: "1px solid rgba(0,255,102,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>The ETS Standard</span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4" style={{ fontFamily: JK }}>
              Every product. The same commitment.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "100% Biodegradable", desc: "Every ETS formulation fully breaks down in natural environments." },
              { label: "Solvent-Free", desc: "No VOCs, no petroleum distillates, no hazardous chemistry." },
              { label: "Third-Party Certified", desc: "All approvals are independently tested and audited." },
              { label: "Technical Support", desc: "Our team provides full application guidance and SDS documentation." },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: GREEN }} />
                <h3 className="font-bold text-sm mb-1.5 text-white" style={{ fontFamily: JK }}>{item.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need help choosing the right product?"
        accent="right product?"
        subtitle="Our technical team can identify the ideal solution for your specific application and compliance requirements."
        ctaPrimary={{ label: "Talk to an Expert", to: "/contact" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
