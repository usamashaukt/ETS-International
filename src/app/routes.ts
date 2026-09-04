import { createBrowserRouter } from "react-router";
import Shell from "@/components/Shell";
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

export const router = createBrowserRouter([
  {
    Component: Shell,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "certifications", Component: Certifications },
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
      { path: "contact", Component: Contact },
      { path: "quote", Component: Quote },
      { path: "*", Component: Home },
    ],
  },
  {
    path: "legacy-ets",
    Component: LegacyEts,
  },
]);
