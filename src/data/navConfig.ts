import type { NavTopItem } from "@/types";

/**
 * Canonical site IA — Solutions · Industries · Products · Equipment · Resources · Shop · Contact
 * Existing deep-link slugs are preserved; only presentation hierarchy changes.
 */
export const navConfig: NavTopItem[] = [
  {
    label: "Solutions",
    items: [
      {
        label: "AquaSmarter",
        to: "/technology/aquasmarter",
        hasFlyout: true,
        subItems: [
          { label: "Introduction", to: "/water-treatment-introduction" },
          { label: "Information", to: "/water-treatment-information" },
          { label: "How it works?", to: "/how-it-works-2" },
          { label: "Applications", to: "/water-treatment-application" },
        ],
      },
      {
        label: "FOG-IT / Desi Box",
        to: "/fog-it",
        hasFlyout: true,
        subItems: [
          { label: "FOG-IT", to: "/fog-it" },
          { label: "Desi Box", to: "/desi-box" },
        ],
      },
      { label: "Eco Safe Air Blaster", to: "/eco-safe-air-blaster" },
      { label: "Bioderuster", to: "/bioderuster" },
      { label: "Nano Diamond", to: "/technology/nano-diamond" },
      { label: "New Technologies", to: "/new-technologies" },
    ],
  },
  {
    label: "Industries",
    items: [
      {
        label: "Aviation",
        to: "/industries/aviation",
        hasFlyout: true,
        subItems: [
          { label: "Commercial", to: "/commercial-aviation-industry" },
          { label: "Military", to: "/military-aviation-industry" },
          { label: "Advantages | Benefits", to: "/benefits" },
          { label: "Aviation Services", to: "/aviation-services" },
        ],
      },
      {
        label: "Industrial",
        to: "/industries/industrial",
        hasFlyout: true,
        subItems: [
          { label: "Metal | Paint | Workshop", to: "/metal-paint-workshop" },
          { label: "Refineries | Gas | Pipelines", to: "/refineries-gas-pipelines" },
          { label: "Offshore | Marine", to: "/offshore-marine" },
          { label: "Automotive | Truck", to: "/automotive-truck" },
        ],
      },
      { label: "Marine", to: "/industries/marine" },
      {
        label: "HACCP",
        to: "/industries/haccp",
        hasFlyout: true,
        subItems: [
          { label: "What is HACCP?", to: "/what-is-haccp" },
          { label: "How it works", to: "/how-it-works" },
          { label: "Products", to: "/haccp-product" },
        ],
      },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Product Finder", to: "/finder" },
      { label: "All Products", to: "/products" },
      { label: "Aviation", to: "/products/aviation" },
      { label: "Industrial", to: "/products/industrial" },
      { label: "HACCP / Food Safety", to: "/products/haccp" },
      { label: "C² Coating Systems", to: "/products" },
      { label: "Cleaners", to: "/cleaners" },
    ],
  },
  {
    label: "Equipment",
    items: [
      { label: "Equipment Overview", to: "/equipment" },
      { label: "Cleaning Accessories", to: "/cleaning-accessories" },
      { label: "Sky Reacher", to: "/sky-reacher" },
      { label: "Easy Wash Sprayer | Foamer", to: "/easy-wash-sprayer-foamer" },
      { label: "Runway Cleaning Equipment", to: "/runway-cleaning-equipment" },
      { label: "OSMOSE RO Module", to: "/osmose" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Resources Overview", to: "/resources" },
      { label: "About ETS", to: "/about" },
      { label: "Why ETS?", to: "/why-ets" },
      { label: "Certifications & Approvals", to: "/certifications" },
      { label: "Presentations", to: "/presentations" },
      { label: "Co-Partners", to: "/co-partners" },
    ],
  },
  {
    label: "Shop",
    to: "/shop",
  },
  {
    label: "Contact",
    items: [
      { label: "Contact", to: "/contact" },
      { label: "Leadership", to: "/leadership" },
      { label: "Location", to: "/location" },
      { label: "Request a Quote", to: "/quote" },
    ],
  },
];
