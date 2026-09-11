import { productsCatalog } from "@/data/productsCatalog";
import { productPdfs } from "@/data/productPdfs";

export type ResourceKind = "tds" | "sds" | "certificate" | "faq";

export interface ResourceDoc {
  id: string;
  kind: ResourceKind;
  title: string;
  description: string;
  category: string;
  /** Product / cert related path when applicable */
  relatedTo?: string;
  /** Direct download when asset exists */
  downloadUrl?: string;
  /** Quote/contact request when asset is not hosted yet */
  requestUrl?: string;
  downloadLabel?: string;
  requestLabel?: string;
  tags?: string[];
}

export interface CertificationRecord {
  id: string;
  name: string;
  standardNumber: string;
  org: string;
  scope: string;
  desc: string;
  /** Displayed validity / surveillance status */
  validity: string;
  status: "current" | "qualification" | "compliance";
  downloadUrl?: string;
  requestUrl: string;
  accent: "green" | "cyan";
}

const quoteDoc = (message: string, product = "Not sure — advise me") => {
  const params = new URLSearchParams();
  params.set("product", product);
  params.set("message", message);
  return `/quote?${params.toString()}`;
};

/** Technical downloads + FAQ library for /resources */
export const resourceDocs: ResourceDoc[] = [
  ...productsCatalog
    .filter((p) => p.categoryKey !== "equipment" && (p.tdsUrl || productPdfs[p.id]))
    .map((p) => ({
      id: `tds-${p.id}`,
      kind: "tds" as const,
      title: `${p.name} — TDS`,
      description: `Technical data sheet for ${p.name}. Dilution, application, and performance guidance.`,
      category: p.categoryLabel,
      relatedTo: `/products/${p.id}`,
      downloadUrl: p.tdsUrl || productPdfs[p.id],
      downloadLabel: "Download TDS",
      tags: ["tds", p.categoryKey, p.id],
    })),

  ...productsCatalog
    .filter((p) => p.categoryKey !== "equipment")
    .map((p) => ({
      id: `sds-${p.id}`,
      kind: "sds" as const,
      title: `${p.name} — SDS`,
      description: `Safety Data Sheet request for ${p.name}. Hosted SDS files land with backend storage; request the current revision now.`,
      category: p.categoryLabel,
      relatedTo: `/products/${p.id}`,
      requestUrl: quoteDoc(
        `Please send the current SDS (Safety Data Sheet) for ${p.name} (${p.id}), preferably EN and DE.`,
        p.quoteProduct,
      ),
      requestLabel: "Request SDS",
      tags: ["sds", p.categoryKey, p.id],
    })),

  {
    id: "cert-iso-9001",
    kind: "certificate",
    title: "ISO 9001:2015 Quality Management",
    description: "Certified quality management system covering ETS manufacturing and supply processes.",
    category: "Quality",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send a copy of the current ISO 9001:2015 certificate."),
    requestLabel: "Request certificate",
    tags: ["iso", "quality"],
  },
  {
    id: "cert-airbus",
    kind: "certificate",
    title: "AIRBUS AIMS 09-00-002",
    description: "Airbus exterior/interior cleaning specification approval documentation.",
    category: "Aviation",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send AIRBUS AIMS 09-00-002 approval documentation."),
    requestLabel: "Request certificate",
    tags: ["airbus", "aviation"],
  },
  {
    id: "cert-boeing",
    kind: "certificate",
    title: "BOEING D6-17487",
    description: "Boeing aircraft surface cleaning qualification documentation.",
    category: "Aviation",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send BOEING D6-17487 qualification documentation."),
    requestLabel: "Request certificate",
    tags: ["boeing", "aviation"],
  },
  {
    id: "cert-reach",
    kind: "certificate",
    title: "REACH compliance declaration",
    description: "EU REACH registration / compliance declaration for ETS substance portfolio.",
    category: "Regulatory",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send REACH compliance declaration / registration evidence."),
    requestLabel: "Request document",
    tags: ["reach", "eu"],
  },
  {
    id: "cert-nsf",
    kind: "certificate",
    title: "NSF H1 registration",
    description: "NSF H1 letters for food-grade incidental contact formulations.",
    category: "Food Safety",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send NSF H1 registration letters for relevant ETS FoodSafe products."),
    requestLabel: "Request certificate",
    tags: ["nsf", "haccp"],
  },
  {
    id: "cert-marpol",
    kind: "certificate",
    title: "MARPOL compliance statement",
    description: "Marine pollution prevention alignment for biodegradable marine cleaning programmes.",
    category: "Marine",
    relatedTo: "/certifications",
    requestUrl: quoteDoc("Please send MARPOL compliance statement for ETS marine cleaners."),
    requestLabel: "Request document",
    tags: ["marpol", "marine"],
  },

  {
    id: "faq-sds-vs-tds",
    kind: "faq",
    title: "What is the difference between SDS and TDS?",
    description:
      "TDS (Technical Data Sheet) covers performance, dilution, and application. SDS (Safety Data Sheet) covers hazards, PPE, first aid, storage, and regulatory handling. Both are often required for site approval.",
    category: "Documentation",
    tags: ["faq", "sds", "tds"],
  },
  {
    id: "faq-languages",
    kind: "faq",
    title: "Which languages are SDS available in?",
    description:
      "ETS can supply SDS in EN and DE as standard for most active SKUs, with FR, NL, and other languages on request depending on product and market.",
    category: "Documentation",
    tags: ["faq", "sds"],
  },
  {
    id: "faq-aviation-approvals",
    kind: "faq",
    title: "Do aviation cleaners carry Airbus and Boeing approvals?",
    description:
      "Selected ETS aviation cleaners are aligned to AIRBUS AIMS 09-00-002 and BOEING D6-17487 programmes. Request the product-specific approval pack for your MRO procedure.",
    category: "Aviation",
    relatedTo: "/products/aviation",
    tags: ["faq", "aviation"],
  },
  {
    id: "faq-dilution",
    kind: "faq",
    title: "Where do I find dilution ratios?",
    description:
      "Dilution guidance is on each product page and in the TDS. Soil load, water quality, and application method can change the working dilution — ask technical support if you need a site-specific recommendation.",
    category: "Application",
    relatedTo: "/finder",
    tags: ["faq", "dilution"],
  },
  {
    id: "faq-samples",
    kind: "faq",
    title: "Can I get a sample kit before ordering?",
    description:
      "Yes. Qualified B2B applications can request sample kits via the quote form. Include industry, surface, and current chemistry so we can recommend the right SKU.",
    category: "Ordering",
    relatedTo: "/quote",
    requestUrl: "/quote",
    requestLabel: "Request a sample",
    tags: ["faq", "sample"],
  },
  {
    id: "faq-haccp",
    kind: "faq",
    title: "Are HACCP / food-site products documented for audits?",
    description:
      "Food-environment products are supported with TDS, SDS, and where applicable NSF H1 registration evidence for your HACCP file.",
    category: "Food Safety",
    relatedTo: "/products/haccp",
    tags: ["faq", "haccp"],
  },
];

export const RESOURCE_FILTERS: { label: string; value: ResourceKind | "all" }[] = [
  { label: "All", value: "all" },
  { label: "TDS", value: "tds" },
  { label: "SDS", value: "sds" },
  { label: "Certificates", value: "certificate" },
  { label: "FAQs", value: "faq" },
];

export const certificationsData: CertificationRecord[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    standardNumber: "ISO 9001:2015",
    org: "International Organization for Standardization",
    scope: "Quality Management System",
    desc: "ETS International operates under a certified ISO 9001:2015 Quality Management System, ensuring consistent product quality, traceability, and continuous improvement across all operations.",
    validity: "Current — subject to surveillance audit",
    status: "current",
    requestUrl: quoteDoc("Please send a copy of the current ISO 9001:2015 certificate (PDF)."),
    accent: "green",
  },
  {
    id: "airbus",
    name: "AIRBUS AIMS 09-00-002",
    standardNumber: "AIMS 09-00-002",
    org: "Airbus S.A.S.",
    scope: "Aviation Cleaning — Aircraft Exterior & Interior",
    desc: "ETS products are approved to the AIRBUS AIMS 09-00-002 specification, qualifying them for use on commercial and military Airbus aircraft, including fuselage, engine nacelles, and interior surfaces.",
    validity: "Qualification maintained — product-specific pack on request",
    status: "qualification",
    requestUrl: quoteDoc("Please send AIRBUS AIMS 09-00-002 approval documentation (PDF)."),
    accent: "cyan",
  },
  {
    id: "boeing",
    name: "BOEING D6-17487",
    standardNumber: "D6-17487",
    org: "The Boeing Company",
    scope: "Aviation Cleaning — Aircraft Surfaces",
    desc: "BOEING D6-17487 qualification confirms ETS products are suitable for cleaning Boeing commercial and military aircraft surfaces without damage to paint, seals, composites, or metallic structures.",
    validity: "Qualification maintained — product-specific pack on request",
    status: "qualification",
    requestUrl: quoteDoc("Please send BOEING D6-17487 qualification documentation (PDF)."),
    accent: "green",
  },
  {
    id: "reach",
    name: "REACH Registered",
    standardNumber: "EC 1907/2006",
    org: "European Chemicals Agency (ECHA)",
    scope: "Chemical Substance Registration — EU",
    desc: "All ETS formulations are REACH-compliant under EU Regulation No 1907/2006. Full substance registration documentation available to customers and distribution partners.",
    validity: "Compliance current — declaration available",
    status: "compliance",
    requestUrl: quoteDoc("Please send REACH compliance declaration / registration evidence (PDF)."),
    accent: "cyan",
  },
  {
    id: "rohs",
    name: "RoHS Compliant",
    standardNumber: "2011/65/EU",
    org: "European Union",
    scope: "Restriction of Hazardous Substances",
    desc: "ETS products conform to EU RoHS Directive 2011/65/EU, confirming freedom from restricted hazardous substances including lead, mercury, cadmium, and specific flame retardants.",
    validity: "Compliance current",
    status: "compliance",
    requestUrl: quoteDoc("Please send RoHS compliance statement (PDF)."),
    accent: "green",
  },
  {
    id: "nsf-h1",
    name: "NSF H1 Registered",
    standardNumber: "NSF H1",
    org: "NSF International",
    scope: "Food-Grade Lubricants & Cleaners",
    desc: "Selected ETS formulations carry NSF H1 registration, confirming their suitability for incidental food contact in food and beverage processing environments — essential for HACCP compliance.",
    validity: "Registration current for listed SKUs",
    status: "current",
    requestUrl: quoteDoc("Please send NSF H1 registration letters for relevant ETS FoodSafe products (PDF)."),
    accent: "cyan",
  },
  {
    id: "easa",
    name: "EASA Compliant",
    standardNumber: "EASA framework",
    org: "European Union Aviation Safety Agency",
    scope: "Aviation Safety Standards",
    desc: "ETS aviation products meet EASA regulatory requirements for use in approved aircraft maintenance operations within EASA-regulated airspace.",
    validity: "Programme alignment — documentation on request",
    status: "compliance",
    requestUrl: quoteDoc("Please send EASA-related compliance documentation for ETS aviation cleaners."),
    accent: "green",
  },
  {
    id: "marpol",
    name: "MARPOL Compliant",
    standardNumber: "MARPOL Annex V / VI",
    org: "International Maritime Organization (IMO)",
    scope: "Marine Pollution Prevention",
    desc: "ETS marine cleaning formulations comply with MARPOL Annex V and Annex VI requirements, confirmed biodegradable and safe for use in marine and offshore environments.",
    validity: "Compliance current — statement on request",
    status: "compliance",
    requestUrl: quoteDoc("Please send MARPOL compliance statement for ETS marine cleaners (PDF)."),
    accent: "cyan",
  },
  {
    id: "nato",
    name: "NATO Compliant",
    standardNumber: "NATO / NSN programmes",
    org: "North Atlantic Treaty Organization",
    scope: "Military Standards",
    desc: "ETS products meeting NATO standards are approved for use in military aviation and defense maintenance environments, supporting armed forces operations globally.",
    validity: "Programme-specific — NSN / NCAGE details on request",
    status: "qualification",
    requestUrl: quoteDoc("Please send NATO / NSN / NCAGE documentation relevant to ETS military aviation products."),
    accent: "green",
  },
];

export function filterResourceDocs(
  docs: ResourceDoc[],
  kind: ResourceKind | "all",
  query: string,
): ResourceDoc[] {
  const q = query.trim().toLowerCase();
  return docs.filter((doc) => {
    if (kind !== "all" && doc.kind !== kind) return false;
    if (!q) return true;
    const hay = [doc.title, doc.description, doc.category, ...(doc.tags ?? [])]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}
