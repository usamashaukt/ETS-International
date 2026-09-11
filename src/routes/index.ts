import { createBrowserRouter } from "react-router";
import Shell from "@/components/layout/Shell";
import Home from "@/pages/Home";
import LegacyEts from "@/pages/LegacyEts";
import About from "@/pages/About";
import Leadership from "@/pages/Leadership";
import Certifications from "@/pages/Certifications";
import Products from "@/pages/Products";
import Industries from "@/pages/Industries";
import Aviation from "@/pages/Aviation";
import Industrial from "@/pages/Industrial";
import Marine from "@/pages/Marine";
import HACCP from "@/pages/HACCP";
import Disinfection from "@/pages/Disinfection";
import AquaSmarter from "@/pages/AquaSmarter";
import NanoDiamond from "@/pages/NanoDiamond";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import SubpageTemplate from "@/pages/SubpageTemplate";

export const router = createBrowserRouter([
  {
    Component: Shell,
    children: [
      { index: true, Component: Home },

      /* Core Company & Compliance */
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
      { path: "quote", Component: Quote },

      /* Products & Overview */
      { path: "products", Component: Products },
      { path: "products/:category", Component: Products },
      { path: "industries", Component: Industries },
      { path: "industries/aviation", Component: Aviation },
      { path: "industries/industrial", Component: Industrial },
      { path: "industries/marine", Component: Marine },
      { path: "industries/haccp", Component: HACCP },
      { path: "disinfection", Component: Disinfection },
      { path: "technology/aquasmarter", Component: AquaSmarter },
      { path: "technology/nano-diamond", Component: NanoDiamond },

      /* ─── Exact etsint.eu Aviation Subpages ─── */
      { path: "commercial-aviation-industry", Component: SubpageTemplate },
      { path: "military-aviation-industry", Component: SubpageTemplate },
      { path: "benefits", Component: SubpageTemplate },
      { path: "cleaning-accessories", Component: SubpageTemplate },
      { path: "aviation-services", Component: SubpageTemplate },

      /* ─── Exact etsint.eu Industrial Subpages ─── */
      { path: "metal-paint-workshop", Component: SubpageTemplate },
      { path: "refineries-gas-pipelines", Component: SubpageTemplate },
      { path: "offshore-marine", Component: SubpageTemplate },
      { path: "automotive-truck", Component: SubpageTemplate },
      { path: "facilities", Component: SubpageTemplate },
      { path: "gastronomy-hotel-restaurant", Component: SubpageTemplate },
      { path: "medical-equipment-hospital", Component: SubpageTemplate },
      { path: "machines-excavator-caterpillar", Component: SubpageTemplate },
      { path: "food-industry-and-agriculture", Component: SubpageTemplate },
      { path: "corrosion-prevention", Component: SubpageTemplate },

      /* ─── Exact etsint.eu HACCP Subpages ─── */
      { path: "what-is-haccp", Component: SubpageTemplate },
      { path: "how-it-works", Component: SubpageTemplate },
      { path: "haccp-product", Component: SubpageTemplate },
      { path: "alcohol-free-cleaner-and-disinfector", Component: SubpageTemplate },
      { path: "composite-panel-universal-cleaner", Component: SubpageTemplate },
      { path: "graffiti-cleaner", Component: SubpageTemplate },
      { path: "glass-cleaner", Component: SubpageTemplate },
      { path: "composite-panel-cleaner-extra", Component: SubpageTemplate },
      { path: "grease-cleaner", Component: SubpageTemplate },
      { path: "hand-wash-cleaner", Component: SubpageTemplate },
      { path: "multi-cleaner", Component: SubpageTemplate },
      { path: "wc-cleaner-sanipower", Component: SubpageTemplate },
      { path: "sanitary-bleach-liquid-sanipower-extra", Component: SubpageTemplate },
      { path: "oven-and-grill-cleaner", Component: SubpageTemplate },

      /* ─── Exact etsint.eu Disinfection / Water Treatment Subpages ─── */
      { path: "water-treatment-introduction", Component: SubpageTemplate },
      { path: "water-treatment-information", Component: SubpageTemplate },
      { path: "how-it-works-2", Component: SubpageTemplate },
      { path: "water-treatment-application", Component: SubpageTemplate },
      { path: "fog-it", Component: SubpageTemplate },
      { path: "desi-box", Component: SubpageTemplate },

      /* ─── Exact etsint.eu Derusting & Paint Stripping Subpages ─── */
      { path: "eco-safe-air-blaster", Component: SubpageTemplate },
      { path: "bioderuster", Component: SubpageTemplate },
      { path: "actan-3f", Component: SubpageTemplate },

      /* ─── Exact etsint.eu About, Info & Technologies Subpages ─── */
      { path: "why-ets", Component: SubpageTemplate },
      { path: "presentations", Component: SubpageTemplate },
      { path: "co-partners", Component: SubpageTemplate },
      { path: "location", Component: SubpageTemplate },
      { path: "new-technologies", Component: SubpageTemplate },
      { path: "news", Component: SubpageTemplate },
      { path: "esters", Component: SubpageTemplate },
      { path: "cleaners", Component: SubpageTemplate },
      { path: "nanovit-optimotor", Component: SubpageTemplate },
      { path: "barrel-cleaner", Component: SubpageTemplate },
      { path: "icx2", Component: SubpageTemplate },

      /* ─── Aviation product & accessory pages (etsint.de) ─── */
      { path: "aircraft-cleaner-fluid-exterior", Component: SubpageTemplate },
      { path: "aircraft-cleaner-fluid-interior", Component: SubpageTemplate },
      { path: "aircraft-cleaner-gel", Component: SubpageTemplate },
      { path: "aircraft-hydraulic-fluid-remover", Component: SubpageTemplate },
      { path: "aircraft-polish", Component: SubpageTemplate },
      { path: "aircraft-protector", Component: SubpageTemplate },
      { path: "runway-tire-stripper", Component: SubpageTemplate },
      { path: "runway-light-tire-cleaner", Component: SubpageTemplate },
      { path: "hard-surface-cleaner-and-disinfectant", Component: SubpageTemplate },
      { path: "aircraft-hangar-floor-cleaner", Component: SubpageTemplate },
      { path: "military-aircraft-cleaner-fluid-exterior", Component: SubpageTemplate },
      { path: "sky-reacher", Component: SubpageTemplate },
      { path: "easy-wash-sprayer-foamer", Component: SubpageTemplate },
      { path: "runway-cleaning-equipment", Component: SubpageTemplate },
      { path: "osmose", Component: SubpageTemplate },
      { path: "multi-tissue-wipes", Component: SubpageTemplate },

      /* ─── Industrial / vehicle product SKUs (etsint.de) ─── */
      { path: "aqua-silicon-remover", Component: SubpageTemplate },
      { path: "bupi-cleaner-nf-concentrate", Component: SubpageTemplate },
      { path: "universal-cleaner", Component: SubpageTemplate },
      { path: "heavy-duty-aluminium-cleaner", Component: SubpageTemplate },
      { path: "nonsol-1", Component: SubpageTemplate },
      { path: "nonsol-6", Component: SubpageTemplate },
      { path: "e-flush", Component: SubpageTemplate },
      { path: "egr-extra", Component: SubpageTemplate },
      { path: "hdc", Component: SubpageTemplate },
      { path: "economic-oxygen-cleaner", Component: SubpageTemplate },
      { path: "truckclean-300-hf", Component: SubpageTemplate },
      { path: "truckclean-350", Component: SubpageTemplate },
      { path: "insect-remover", Component: SubpageTemplate },
      { path: "wheel-clean-profi-1", Component: SubpageTemplate },
      { path: "truck-wax", Component: SubpageTemplate },
      { path: "hot-cold-wax", Component: SubpageTemplate },
      { path: "car-shampoo-brilliant-shine", Component: SubpageTemplate },
      { path: "tgv-train-cleaner", Component: SubpageTemplate },
      { path: "antifoam", Component: SubpageTemplate },
      { path: "black-remover", Component: SubpageTemplate },
      { path: "floor-shine", Component: SubpageTemplate },
      { path: "pressure-cleaner-8ato", Component: SubpageTemplate },

      /* Fallback to Home */
      { path: "*", Component: Home },
    ],
  },
  {
    /* Legacy ETS German Standalone Site */
    path: "legacy-ets",
    Component: LegacyEts,
  },
]);
