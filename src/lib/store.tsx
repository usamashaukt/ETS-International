import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react";

export const translations = {
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
} as const;

export type Lang = keyof typeof translations;

interface ThemeCtx {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  lang: Lang;
  setLang: (v: Lang) => void;
  i: typeof translations["en"] | typeof translations["de"];
}

const Ctx = createContext<ThemeCtx>({} as ThemeCtx);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDarkState] = useState(true);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("ets-theme");
    if (stored) setIsDarkState(stored === "dark");
    else setIsDarkState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const storedLang = localStorage.getItem("ets-lang") as Lang | null;
    if (storedLang && (storedLang === "en" || storedLang === "de")) setLang(storedLang);
  }, []);

  const setIsDark = (v: boolean) => {
    setIsDarkState(v);
    document.documentElement.setAttribute("data-theme", v ? "dark" : "light");
    localStorage.setItem("ets-theme", v ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("ets-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("ets-lang", lang);
  }, [lang]);

  return (
    <Ctx.Provider value={{ isDark, setIsDark, lang, setLang, i: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  return useContext(Ctx);
}

/* Navbar scroll state hook — separate so pages can't accidentally use it */
export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

export function useDropdown() {
  const [active, setActive] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enter = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(label);
  };
  const leave = () => {
    timer.current = setTimeout(() => setActive(null), 120);
  };
  return { active, enter, leave };
}
