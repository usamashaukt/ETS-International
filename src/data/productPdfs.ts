/* Product datasheet PDFs — imported so Vite emits stable URLs at build time. */

import aircraftCleanerInt from "@/assets/products-pdfs/aviation-industry/AIRCRAFT CLEANER (INT)-3258.pdf";
import aircraftTissueWipes from "@/assets/products-pdfs/aviation-industry/Aircraft Cockpit Cleaners  Tissue Wipes.pdf";
import aircraftAhfr from "@/assets/products-pdfs/aviation-industry/ETS AHFR (3539).pdf";
import aircraftCleanerExt from "@/assets/products-pdfs/aviation-industry/ETS AIRCRAFT CLEANER (EXT)-3258.pdf";
import aircraftCleanerGel from "@/assets/products-pdfs/aviation-industry/ETS AIRCRAFT CLEANER GEL-3258.pdf";
import aircraftPolish from "@/assets/products-pdfs/aviation-industry/ETS AIRCRAFT POLISH 2-2974.pdf";
import aircraftProtector from "@/assets/products-pdfs/aviation-industry/ETS AIRCRAFT PROTECTOR-3 -2975.pdf";
import hangarFloorCleaner from "@/assets/products-pdfs/aviation-industry/HANGAR FLOOR CLEANER-2195.pdf";
import runwayStripper from "@/assets/products-pdfs/aviation-industry/RUNWAY CLEANER - RUNWAY TYRE STIPPER -3780.pdf";
import runwayLightCleaner from "@/assets/products-pdfs/aviation-industry/RUNWAY LIGHT TIRE CLEANER  RUBBER REMOVER.pdf";

import haccpFloorCleaner from "@/assets/products-pdfs/haccp/ETS FLOOR CLEANER -2195.pdf";
import haccpGlassCleaner from "@/assets/products-pdfs/haccp/ETS GLASS CLEANER HACCP-2272.pdf";
import haccpGraffiti from "@/assets/products-pdfs/haccp/ETS GRAFFTI REMONER -4424.pdf";
import haccpGrease from "@/assets/products-pdfs/haccp/ETS GREASE CLEANER & REMOVER -2628.pdf";
import haccpMultiClean from "@/assets/products-pdfs/haccp/ETS MULTI CLEAN-2999.pdf";
import haccpSaniPower from "@/assets/products-pdfs/haccp/ETS SANI POWER (HACCP) -2640.pdf";
import haccpSaniPowerExtra from "@/assets/products-pdfs/haccp/ETS SANI POWER EXTRA -2640.pdf";

import actan3fAuto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/ACTAN 3F.pdf";
import hdalAuto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/Aluminium Cleaner  Heavy Duty Aluminium HDAL- 2398.pdf";
import bupiAuto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/BUPICLEANERNF-CONCENTRATE.pdf";
import carShampoo from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/ETS CAR SHAMPOO BRILLIANT SHINE (3796).pdf";
import nonsol6Auto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/ETS NON SOL-6 -2925.pdf";
import wheelCleaner from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/ETS WHEEL CLEANER  -2591.pdf";
import bioderusterAuto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/Rust Remover & Bioderuster-4018.pdf";
import universalAuto from "@/assets/products-pdfs/industrial/automotive-truck-auto-logistics/UNIVERSAL CLEANER - ECONOMIC UNIVERSAL.pdf";

import aquaSiliconMetal from "@/assets/products-pdfs/industrial/metal-paint-workshop/AQUA SILICON REMOVER.pdf";
import nonsol1Metal from "@/assets/products-pdfs/industrial/metal-paint-workshop/Nonsol 1_Info_en.pdf";

import antifoamPdf from "@/assets/products-pdfs/industrial/refinery-gas-pipelines/ANTI-FOAM EMULSIE TYPE SE-36.pdf";
import eFlushPdf from "@/assets/products-pdfs/industrial/refinery-gas-pipelines/E-FLUSH CONCENTRATE-INFO-EN.pdf";
import oxygenCleanerPdf from "@/assets/products-pdfs/industrial/refinery-gas-pipelines/ETS Economic Oxygen Cleaner -2184.pdf";
import egrPdf from "@/assets/products-pdfs/industrial/refinery-gas-pipelines/ETS EGR-3369.pdf";
import hdcPdf from "@/assets/products-pdfs/industrial/refinery-gas-pipelines/ETS HDC -2567.pdf";

/** Map product/page slug → datasheet PDF URL */
export const productPdfs: Record<string, string> = {
  /* Aviation */
  "aircraft-cleaner-fluid-exterior": aircraftCleanerExt,
  "military-aircraft-cleaner-fluid-exterior": aircraftCleanerExt,
  "aircraft-cleaner-fluid-interior": aircraftCleanerInt,
  "aircraft-cleaner-gel": aircraftCleanerGel,
  "aircraft-hydraulic-fluid-remover": aircraftAhfr,
  "aircraft-polish": aircraftPolish,
  "aircraft-protector": aircraftProtector,
  "runway-tire-stripper": runwayStripper,
  "runway-light-tire-cleaner": runwayLightCleaner,
  "aircraft-hangar-floor-cleaner": hangarFloorCleaner,
  "multi-tissue-wipes": aircraftTissueWipes,
  "floor-shine": haccpFloorCleaner,

  /* HACCP */
  "glass-cleaner": haccpGlassCleaner,
  "graffiti-cleaner": haccpGraffiti,
  "grease-cleaner": haccpGrease,
  "multi-cleaner": haccpMultiClean,
  "wc-cleaner-sanipower": haccpSaniPower,
  "sanitary-bleach-liquid-sanipower-extra": haccpSaniPowerExtra,

  /* Industrial / SKUs */
  "actan-3f": actan3fAuto,
  "heavy-duty-aluminium-cleaner": hdalAuto,
  "bupi-cleaner-nf-concentrate": bupiAuto,
  "car-shampoo-brilliant-shine": carShampoo,
  "nonsol-6": nonsol6Auto,
  "nonsol-1": nonsol1Metal,
  "wheel-clean-profi-1": wheelCleaner,
  bioderuster: bioderusterAuto,
  "universal-cleaner": universalAuto,
  "aqua-silicon-remover": aquaSiliconMetal,
  antifoam: antifoamPdf,
  "e-flush": eFlushPdf,
  "economic-oxygen-cleaner": oxygenCleanerPdf,
  "egr-extra": egrPdf,
  hdc: hdcPdf,
};

export type RelatedProduct = {
  name: string;
  to: string;
  desc?: string;
  /** Override PDF; falls back to productPdfs[slug from `to`] */
  pdf?: string;
};

export function pdfForRoute(to: string): string | undefined {
  const slug = to.replace(/^\//, "").replace(/\/$/, "");
  return productPdfs[slug];
}
