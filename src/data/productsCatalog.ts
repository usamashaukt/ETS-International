import { subpagesData } from "@/data/subpagesData";
import { productPdfs } from "@/data/productPdfs";

export type ProductCategoryKey =
  | "aviation"
  | "industrial"
  | "haccp"
  | "marine"
  | "disinfection"
  | "equipment";

export interface CatalogProduct {
  id: string;
  name: string;
  tagline: string;
  categoryKey: ProductCategoryKey;
  categoryLabel: string;
  overview: string;
  heroImage: string;
  badge: string;
  dilution: string;
  packaging: string;
  specifications: { label: string; value: string }[];
  applications: string[];
  certifications: string[];
  features: { title: string; description: string; highlight?: string }[];
  relatedIds: string[];
  quoteProduct: string;
  /** Legacy flat path still served by SubpageTemplate */
  legacyPath: string;
  tdsUrl?: string;
}

export const PRODUCT_CATEGORY_FILTERS: {
  label: string;
  value: string;
  categoryKey?: ProductCategoryKey;
}[] = [
  { label: "All", value: "all" },
  { label: "Aviation", value: "aviation", categoryKey: "aviation" },
  { label: "Industrial", value: "industrial", categoryKey: "industrial" },
  { label: "HACCP", value: "haccp", categoryKey: "haccp" },
  { label: "Marine", value: "marine", categoryKey: "marine" },
  { label: "Disinfection", value: "disinfection", categoryKey: "disinfection" },
];

/** Hub category URL segments that are not product IDs */
export const PRODUCT_HUB_CATEGORY_SLUGS = new Set(
  PRODUCT_CATEGORY_FILTERS.map((c) => c.value).filter((v) => v !== "all"),
);

type Enrichment = {
  dilution?: string;
  packaging?: string;
  quoteProduct?: string;
  categoryKey?: ProductCategoryKey;
  relatedIds?: string[];
};

const DEFAULT_PACKAGING = "20 L · 200 L · IBC on request — confirm with ETS for your region.";
const DEFAULT_DILUTION = "Application-dependent — see TDS or request dilution guidance with your quote.";

const enrichment: Record<string, Enrichment> = {
  "aircraft-cleaner-fluid-exterior": {
    dilution: "Typically 1:20–1:100 with water depending on soil load and wash programme.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["aircraft-cleaner-gel", "aircraft-hydraulic-fluid-remover", "easy-wash-sprayer-foamer"],
  },
  "military-aircraft-cleaner-fluid-exterior": {
    dilution: "Follow military wash programme guidance; typically concentrate diluted with water.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["aircraft-cleaner-fluid-exterior", "aircraft-cleaner-gel"],
  },
  "aircraft-cleaner-fluid-interior": {
    dilution: "Ready-to-use or light dilution for cabin hard surfaces — confirm with TDS.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["multi-tissue-wipes", "hard-surface-cleaner-and-disinfectant"],
  },
  "aircraft-cleaner-gel": {
    dilution: "Apply as supplied gel; dwell then rinse per wash SOP.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["aircraft-cleaner-fluid-exterior", "easy-wash-sprayer-foamer"],
  },
  "aircraft-hydraulic-fluid-remover": {
    dilution: "Spot treat neat or lightly diluted; rinse after dwell.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["aircraft-cleaner-fluid-exterior", "multi-tissue-wipes"],
  },
  "aircraft-polish": {
    dilution: "Apply as directed on TDS; typically ready-to-use polish system.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
  },
  "aircraft-protector": {
    dilution: "Apply as directed for surface protection films.",
    packaging: "5 L · 20 L",
    quoteProduct: "C2 Coating System",
    categoryKey: "aviation",
  },
  "runway-tire-stripper": {
    dilution: "Programme-dependent for rubber removal — request airfield application sheet.",
    packaging: "200 L · IBC",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["runway-light-tire-cleaner", "runway-cleaning-equipment"],
  },
  "runway-light-tire-cleaner": {
    dilution: "As directed for embedded light and rubber soils.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
    relatedIds: ["runway-tire-stripper"],
  },
  "aircraft-hangar-floor-cleaner": {
    dilution: "Typically 1:10–1:50 for hangar concrete depending on oil load.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "aviation",
  },
  "multi-tissue-wipes": {
    dilution: "Ready-to-use impregnated wipes.",
    packaging: "Tub / refill packs",
    quoteProduct: "ETS AviClean",
    categoryKey: "aviation",
  },
  "floor-shine": {
    dilution: "Dilute per floor-cleaning programme on TDS.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "glass-cleaner": {
    dilution: "Ready-to-use or light dilution for glass and mirrors.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "graffiti-cleaner": {
    dilution: "Spot application as supplied; dwell then rinse/wipe.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "grease-cleaner": {
    dilution: "Typically 1:10–1:50 for kitchen and processing grease soils.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
    relatedIds: ["multi-cleaner", "oven-and-grill-cleaner"],
  },
  "multi-cleaner": {
    dilution: "Daily dilution range per TDS for hard surfaces.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "wc-cleaner-sanipower": {
    dilution: "As directed for sanitary fixtures.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "sanitary-bleach-liquid-sanipower-extra": {
    dilution: "Higher-strength sanitary use — follow TDS and site SOP.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "actan-3f": {
    dilution: "Process-dependent surface treatment — request application guidance.",
    packaging: "20 L · 200 L",
    quoteProduct: "Not sure — advise me",
    categoryKey: "industrial",
    relatedIds: ["bioderuster"],
  },
  "heavy-duty-aluminium-cleaner": {
    dilution: "Typically diluted for aluminium soils; confirm etch limits on TDS.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "bupi-cleaner-nf-concentrate": {
    dilution: "High-dilution concentrate for workshop and fleet wash.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "car-shampoo-brilliant-shine": {
    dilution: "Foam / wash bay dilution per TDS.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "nonsol-6": {
    dilution: "Solvent-free degreaser — dilution per application sheet.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "nonsol-1": {
    dilution: "Parts-wash / metal prep dilution per TDS.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
    relatedIds: ["aqua-silicon-remover", "universal-cleaner"],
  },
  "wheel-clean-profi-1": {
    dilution: "Wheel cleaner — apply as directed; rinse thoroughly.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  bioderuster: {
    dilution: "Immerse or apply per derust programme; rinse and neutralize as directed.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "Not sure — advise me",
    categoryKey: "industrial",
    relatedIds: ["actan-3f", "eco-safe-air-blaster"],
  },
  "universal-cleaner": {
    dilution: "Typically 1:10–1:100 depending on soil and method.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "aqua-silicon-remover": {
    dilution: "As directed for silicone / release-agent soils before paint.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  antifoam: {
    dilution: "Dose into wash / flush systems per foam-control guidance.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "e-flush": {
    dilution: "Circulate / flush concentration per process engineering sheet.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
    relatedIds: ["hdc", "antifoam"],
  },
  "economic-oxygen-cleaner": {
    dilution: "Oxygen-service cleanliness programme — follow dedicated SOP.",
    packaging: "20 L · 200 L",
    quoteProduct: "Not sure — advise me",
    categoryKey: "industrial",
  },
  "egr-extra": {
    dilution: "As directed for EGR / exhaust-path deposit removal.",
    packaging: "20 L · 200 L",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  hdc: {
    dilution: "Heavy-duty cleaner — dilution per industrial TDS.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  /* Equipment catalog entries (also addressable under /products/:id) */
  "sky-reacher": {
    dilution: "N/A — wash system / GSE (pairs with ETS exterior chemistry).",
    packaging: "GS-T 1000 unit · GS-T 3000 option",
    quoteProduct: "Not sure — advise me",
    categoryKey: "equipment",
    relatedIds: ["easy-wash-sprayer-foamer", "osmose", "aircraft-cleaner-fluid-exterior"],
  },
  "easy-wash-sprayer-foamer": {
    dilution: "N/A — foam/spray accessory for pressure-washer programmes.",
    packaging: "Accessory unit",
    quoteProduct: "Not sure — advise me",
    categoryKey: "equipment",
    relatedIds: ["sky-reacher", "aircraft-cleaner-fluid-exterior"],
  },
  "runway-cleaning-equipment": {
    dilution: "N/A — truck-mounted airfield system (pairs with runway chemistry).",
    packaging: "Truck-mounted system",
    quoteProduct: "Not sure — advise me",
    categoryKey: "equipment",
    relatedIds: ["runway-tire-stripper", "osmose"],
  },
  osmose: {
    dilution: "N/A — RO process-water module (1000 L base, expandable).",
    packaging: "Basic module + optional 1000 L reservoirs",
    quoteProduct: "Not sure — advise me",
    categoryKey: "equipment",
    relatedIds: ["sky-reacher", "easy-wash-sprayer-foamer"],
  },
  "pressure-cleaner-8ato": {
    dilution: "Pressure-wash dilution per industrial TDS.",
    packaging: "20 L · 200 L · IBC",
    quoteProduct: "ETS Degreaser Pro",
    categoryKey: "industrial",
  },
  "fog-it": {
    dilution: "Fogging programme per FOG-IT application guidance.",
    packaging: "System + chemistry kit",
    quoteProduct: "FOG-IT INNOVA",
    categoryKey: "disinfection",
    relatedIds: ["desi-box"],
  },
  "desi-box": {
    dilution: "Enclosed-item sterilization cycle per Desi Box SOP.",
    packaging: "Desi Box unit",
    quoteProduct: "FOG-IT INNOVA",
    categoryKey: "disinfection",
    relatedIds: ["fog-it"],
  },
  "hard-surface-cleaner-and-disinfectant": {
    dilution: "Contact disinfection as directed on TDS.",
    packaging: "5 L · 20 L",
    quoteProduct: "FOG-IT INNOVA",
    categoryKey: "disinfection",
  },
  "alcohol-free-cleaner-and-disinfector": {
    dilution: "Concentrate with multiple water dilutions — see TDS.",
    packaging: "5 L · 20 L · 200 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "oven-and-grill-cleaner": {
    dilution: "Apply to cold surfaces as directed; rinse thoroughly.",
    packaging: "5 L · 20 L",
    quoteProduct: "ETS FoodSafe",
    categoryKey: "haccp",
  },
  "eco-safe-air-blaster": {
    dilution: "N/A — mechanical / air-blast restoration system.",
    packaging: "System quotation",
    quoteProduct: "Not sure — advise me",
    categoryKey: "industrial",
    relatedIds: ["bioderuster"],
  },
};

const CATEGORY_LABEL: Record<ProductCategoryKey, string> = {
  aviation: "Aviation",
  industrial: "Industrial",
  haccp: "HACCP / Food Safety",
  marine: "Marine & Offshore",
  disinfection: "Disinfection",
  equipment: "Equipment",
};

function inferCategoryKey(slug: string, category: string): ProductCategoryKey {
  const e = enrichment[slug]?.categoryKey;
  if (e) return e;
  const c = category.toLowerCase();
  if (c.includes("aviation") || c.includes("cleaning accessor")) return "aviation";
  if (c.includes("haccp") || c.includes("food")) return "haccp";
  if (c.includes("marine") || c.includes("offshore")) return "marine";
  if (c.includes("disinfect") || c.includes("fog")) return "disinfection";
  if (c.includes("equipment") || c.includes("accessory")) return "equipment";
  return "industrial";
}

function pickDilution(slug: string, specs: { label: string; value: string }[]): string {
  if (enrichment[slug]?.dilution) return enrichment[slug]!.dilution!;
  const hit = specs.find((s) => /dilut/i.test(s.label));
  return hit?.value || DEFAULT_DILUTION;
}

function pickPackaging(slug: string, specs: { label: string; value: string }[]): string {
  if (enrichment[slug]?.packaging) return enrichment[slug]!.packaging!;
  const hit = specs.find((s) => /pack|drum|ibc|canister|container/i.test(s.label));
  return hit?.value || DEFAULT_PACKAGING;
}

function pickQuoteProduct(slug: string, categoryKey: ProductCategoryKey): string {
  if (enrichment[slug]?.quoteProduct) return enrichment[slug]!.quoteProduct!;
  switch (categoryKey) {
    case "aviation":
      return "ETS AviClean";
    case "haccp":
      return "ETS FoodSafe";
    case "marine":
      return "ETS MarineClean";
    case "disinfection":
      return "FOG-IT INNOVA";
    default:
      return "ETS Degreaser Pro";
  }
}

/** Slugs included in the canonical product catalog */
const CATALOG_SLUGS = Array.from(
  new Set([
    ...Object.keys(productPdfs),
    ...Object.keys(enrichment),
  ]),
).filter((slug) => Boolean(subpagesData[slug]));

function buildProduct(slug: string): CatalogProduct | null {
  const page = subpagesData[slug];
  if (!page) return null;
  const categoryKey = inferCategoryKey(slug, page.category);
  const relatedFromPage =
    page.relatedProducts
      ?.map((r) => r.to.replace(/^\//, "").replace(/\/$/, ""))
      .filter((id) => id !== slug)
      .slice(0, 4) ?? [];
  const relatedIds = enrichment[slug]?.relatedIds ?? relatedFromPage;

  return {
    id: slug,
    name: page.title,
    tagline: page.subtitle,
    categoryKey,
    categoryLabel: CATEGORY_LABEL[categoryKey],
    overview: page.overview,
    heroImage: page.heroImage,
    badge: page.badge,
    dilution: pickDilution(slug, page.specifications),
    packaging: pickPackaging(slug, page.specifications),
    specifications: page.specifications,
    applications: page.applications,
    certifications: page.certifications,
    features: page.features,
    relatedIds,
    quoteProduct: pickQuoteProduct(slug, categoryKey),
    legacyPath: `/${slug}`,
    tdsUrl: productPdfs[slug] || page.pdfUrl,
  };
}

export const productsCatalog: CatalogProduct[] = CATALOG_SLUGS.map(buildProduct).filter(
  (p): p is CatalogProduct => p !== null,
);

const byId = Object.fromEntries(productsCatalog.map((p) => [p.id, p])) as Record<
  string,
  CatalogProduct
>;

export function getCatalogProduct(id: string): CatalogProduct | undefined {
  return byId[id];
}

export function isCatalogProduct(id: string): boolean {
  return Boolean(byId[id]);
}

export function isProductHubCategory(id: string): boolean {
  return PRODUCT_HUB_CATEGORY_SLUGS.has(id);
}

export function canonicalProductPath(id: string): string {
  return isCatalogProduct(id) ? `/products/${id}` : `/${id}`;
}

export function buildProductQuoteUrl(product: CatalogProduct): string {
  const params = new URLSearchParams();
  const industryMap: Record<ProductCategoryKey, string> = {
    aviation: "Aviation & Aerospace",
    industrial: "Industrial & Metal",
    haccp: "HACCP / Food Safety",
    marine: "Marine & Offshore",
    disinfection: "Disinfection",
    equipment: "Aviation & Aerospace",
  };
  params.set("industry", industryMap[product.categoryKey]);
  params.set("product", product.quoteProduct);
  params.set("message", `Interested in: ${product.name} (${product.id})`);
  return `/quote?${params.toString()}`;
}

export function buildSdsRequestUrl(product: CatalogProduct): string {
  const params = new URLSearchParams();
  params.set("product", product.quoteProduct);
  params.set(
    "message",
    `Please send the current SDS (Safety Data Sheet) for ${product.name} (${product.id}).`,
  );
  return `/quote?${params.toString()}`;
}

export const equipmentCatalogIds = [
  "sky-reacher",
  "easy-wash-sprayer-foamer",
  "runway-cleaning-equipment",
  "osmose",
] as const;
