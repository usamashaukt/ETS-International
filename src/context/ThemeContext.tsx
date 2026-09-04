import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { ThemeContextType, Lang, Translations } from "@/types";

export const translations: Record<Lang, Translations> = {
  en: {
    getQuote: "Get a Quote",
    heroBody: "100% biodegradable, solvent-free professional cleaning solutions for Aviation, Marine, and Industry. Performance without compromise.",
    heroCta1: "Explore Products",
    heroCta2: "View Certifications",
    industryTitle: "Industries We Serve",
    aviation: "Aviation & Aerospace",
    aviationSub: "01 — Aviation",
    aviationDesc: "Approved cleaning solutions for commercial and military aircraft, engines, APUs, and components. Certified to AIRBUS AIMS 09-00-002 and BOEING D6-17487.",
    aviationCta: "Explore Aviation Products",
    industrial: "Industrial & Metal",
    industrialSub: "02",
    industrialDesc: "Zero VOC degreasing for manufacturing and metal surfaces.",
    marine: "Marine & Offshore",
    marineSub: "03",
    marineDesc: "MARPOL-compliant. Biodegradable and safe for ocean environments.",
    haccp: "HACCP — Food Safety",
    haccpSub: "04",
    haccpDesc: "NSF H1 registered formulations for food processing facilities, packhouses, and commercial kitchens. Zero flavor taint. Full HACCP compliance documentation provided.",
    haccpCta: "Learn More",
    whySubtitle: "Why industry leaders choose ETS.",
    footerTagline: "Clean technology for aviation, marine, and industry — engineered to perform, designed to protect.",
  },
  de: {
    getQuote: "Angebot einholen",
    heroBody: "100% biologisch abbaubare, lösungsmittelfreie Reinigungslösungen für Luftfahrt, Marine und Industrie. Leistung ohne Kompromisse.",
    heroCta1: "Produkte entdecken",
    heroCta2: "Zertifikate ansehen",
    industryTitle: "Branchen, die wir bedienen",
    aviation: "Luftfahrt & Raumfahrt",
    aviationSub: "01 — Luftfahrt",
    aviationDesc: "Zugelassene Reinigungslösungen für kommerzielle und militärische Flugzeuge, Triebwerke, APUs und Komponenten.",
    aviationCta: "Luftfahrtprodukte erkunden",
    industrial: "Industrie & Metall",
    industrialSub: "02",
    industrialDesc: "VOC-freie Entfettung für Fertigung und Metalloberflächen.",
    marine: "Marine & Offshore",
    marineSub: "03",
    marineDesc: "MARPOL-konform. Biologisch abbaubar und sicher für die Meeresumwelt.",
    haccp: "HACCP — Lebensmittelsicherheit",
    haccpSub: "04",
    haccpDesc: "NSF H1-registrierte Formulierungen für Lebensmittelverarbeitungsbetriebe, Packbetriebe und Großküchen.",
    haccpCta: "Mehr erfahren",
    whySubtitle: "Warum Branchenführer ETS wählen.",
    footerTagline: "Saubere Technologie für Luftfahrt, Marine und Industrie — für Leistung entwickelt, zum Schutz gestaltet.",
  },
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Synchronous lazy initialization prevents theme-flicker or resetting to dark on refresh
  const [isDark, setIsDarkState] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const stored = localStorage.getItem("ets-theme");
      if (stored === "light") return false;
      if (stored === "dark") return true;
    } catch (e) {
      console.warn("Unable to access localStorage for ets-theme", e);
    }
    return true; // Default theme
  });

  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    try {
      const storedLang = localStorage.getItem("ets-lang") as Lang | null;
      if (storedLang === "en" || storedLang === "de") return storedLang;
    } catch (e) {
      console.warn("Unable to access localStorage for ets-lang", e);
    }
    return "en";
  });

  const setIsDark = (v: boolean) => {
    setIsDarkState(v);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", v ? "dark" : "light");
    }
    try {
      localStorage.setItem("ets-theme", v ? "dark" : "light");
    } catch (e) {
      console.warn("Failed to set ets-theme in localStorage", e);
    }
  };

  const setLang = (v: Lang) => {
    setLangState(v);
    try {
      localStorage.setItem("ets-lang", v);
    } catch (e) {
      console.warn("Failed to set ets-lang in localStorage", e);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    try {
      localStorage.setItem("ets-theme", isDark ? "dark" : "light");
    } catch (e) {}
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem("ets-lang", lang);
    } catch (e) {}
  }, [lang]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, lang, setLang, i: translations[lang] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
