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

      /* ─── Exact etsint.eu HACCP Subpages ─── */
      { path: "what-is-haccp", Component: SubpageTemplate },
      { path: "how-it-works", Component: SubpageTemplate },
      { path: "haccp-product", Component: SubpageTemplate },

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

      /* ─── Exact etsint.eu About, Info & Technologies Subpages ─── */
      { path: "why-ets", Component: SubpageTemplate },
      { path: "presentations", Component: SubpageTemplate },
      { path: "co-partners", Component: SubpageTemplate },
      { path: "location", Component: SubpageTemplate },
      { path: "new-technologies", Component: SubpageTemplate },

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
