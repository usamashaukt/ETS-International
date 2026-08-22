import { useState, useEffect, useRef } from "react"
import etsLogo from "@/imports/ets-logo.png"

/* ─── Icons ─── */
const IconPlane = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 1 16.5 2.5L13 6 4.8 4.2l-1.2 1.2 5.5 4.5L6.8 13H4l-1 1 3 2 2 3 1-1v-2.8l2.3-2.3 4.5 5.5 1.2-1.2z" />
  </svg>
)
const IconFactory = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M2 20V8l6 4V8l6 4V4l6 16H2z" />
    <path d="M6 20v-4h4v4" />
    <path d="M14 20v-6h4v6" />
  </svg>
)
const IconAnchor = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v13M5 10h14" />
    <path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" />
  </svg>
)
const IconShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const IconLeaf = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)
const IconDrop = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
)
const IconRecycle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.763L7.196 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-2.773l-4-7A1.83 1.83 0 0 0 15.2 8.5" />
    <path d="m8 9 3-7 3 7" />
    <path d="m9 20 3 2 3-2" />
    <path d="M3 15h4l2 4" />
    <path d="M14 13h4l2-4" />
  </svg>
)
const IconCoins = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
)
const IconNoSolvent = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <path d="M12 2.69l5.66 5.66a8 8 0 0 1-5.66 13.31" />
  </svg>
)
const IconDiamond = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
    <path d="M8 12h8M12 8v8" />
  </svg>
)
const IconArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
const IconMenu = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)
const IconX = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const IconSun = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-4 h-4"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)
const IconMoon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-4 h-4"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
const IconChevronDown = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-3 h-3"
  >
    <path d="M2 4l4 4 4-4" />
  </svg>
)
const IconChevronRight = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-3 h-3 opacity-40"
  >
    <path d="M4 2l4 4-4 4" />
  </svg>
)

/* ─── Nav config ─── */
interface NavItem {
  label: string
  items: { label: string hasArrow?: boolean }[]
}
const navConfig: NavItem[] = [
  {
    label: "About Us",
    items: [
      { label: "About" },
      { label: "Certifications" },
      { label: "Why ETS" },
      { label: "Presentations" },
      { label: "Co-Partners" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Aviation", hasArrow: true },
      { label: "Industrial", hasArrow: true },
      { label: "HACCP", hasArrow: true },
      { label: "C2 Coating System" },
      { label: "New Technologies" },
    ],
  },
  {
    label: "Disinfection",
    items: [
      { label: "AquaSmarter", hasArrow: true },
      { label: "FOG-IT INNOVA", hasArrow: true },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Contact" },
      { label: "Leadership" },
      { label: "Location" },
    ],
  },
]

/* ─── Trust logos ─── */
const TrustLogos = [
  { name: "AIRBUS", sub: "Approved" },
  { name: "BOEING", sub: "Qualified" },
  { name: "NATO", sub: "Compliant" },
  { name: "REACH", sub: "Registered" },
  { name: "ISO 9001", sub: "Certified" },
  { name: "EASA", sub: "Compliant" },
  { name: "OSHA", sub: "Verified" },
]

/* ─── Advantages ─── */
const advantages = [
  {
    icon: <IconLeaf />,
    title: "100% Biodegradable",
    desc: "Fully breaks down in natural environments. Zero toxic residue. Certifiably safe for ecosystems.",
  },
  {
    icon: <IconNoSolvent />,
    title: "Solvent-Free",
    desc: "No petroleum distillates, no VOCs, no hazardous solvents. Safe for operators and surfaces.",
  },
  {
    icon: <IconRecycle />,
    title: "Re-useable Formula",
    desc: "Concentrated solutions dilute up to 1:100. Recyclable packaging with refill programs available.",
  },
  {
    icon: <IconCoins />,
    title: "Cost-Efficient",
    desc: "Lower total cost of ownership versus conventional solvents — reduced disposal fees and PPE costs.",
  },
]

const translations = {
  en: {
    getQuote: "Get a Quote",
    heroTag: "Clean Technology for a Sustainable Future",
    heroHeading1: "Industrial Cleaning.",
    heroHeading2: "Engineered for",
    heroHeading3: "Zero Compromise.",
    heroBody:
      "100% biodegradable, solvent-free professional cleaning solutions for Aviation, Marine, and Industry. Performance without compromise.",
    heroCta1: "Explore Products",
    heroCta2: "View Certifications",
    industryTitle: "Industries We Serve",
    industrySubtitle: "Specialized solutions across critical sectors.",
    aviation: "Aviation & Aerospace",
    aviationSub: "01 — Aviation",
    aviationDesc:
      "Approved cleaning solutions for commercial and military aircraft, engines, APUs, and components. Certified to AIRBUS AIMS 09-00-002 and BOEING D6-17487.",
    aviationCta: "Explore Aviation Products",
    industrial: "Industrial & Metal",
    industrialSub: "02",
    industrialDesc: "Zero VOC degreasing for manufacturing and metal surfaces.",
    marine: "Marine & Offshore",
    marineSub: "03",
    marineDesc:
      "MARPOL-compliant. Biodegradable and safe for ocean environments.",
    haccp: "HACCP — Food Safety",
    haccpSub: "04",
    haccpDesc:
      "NSF H1 registered formulations for food processing facilities, packhouses, and commercial kitchens. Zero flavor taint. Full HACCP compliance documentation provided.",
    haccpCta: "Learn More",
    whyTitle: "Why ETS International?",
    whySubtitle: "Why industry leaders choose ETS.",
    footerTagline:
      "Clean technology for aviation, marine, and industry — engineered to perform, designed to protect.",
  },
  de: {
    getQuote: "Angebot einholen",
    heroTag: "Saubere Technologie für eine nachhaltige Zukunft",
    heroHeading1: "Industriereinigung.",
    heroHeading2: "Entwickelt für",
    heroHeading3: "Null Kompromisse.",
    heroBody:
      "100% biologisch abbaubare, lösungsmittelfreie Reinigungslösungen für Luftfahrt, Marine und Industrie. Leistung ohne Kompromisse.",
    heroCta1: "Produkte entdecken",
    heroCta2: "Zertifikate ansehen",
    industryTitle: "Branchen, die wir bedienen",
    industrySubtitle: "Spezialisierte Lösungen für kritische Sektoren.",
    aviation: "Luftfahrt & Raumfahrt",
    aviationSub: "01 — Luftfahrt",
    aviationDesc:
      "Zugelassene Reinigungslösungen für kommerzielle und militärische Flugzeuge, Triebwerke, APUs und Komponenten. Zertifiziert nach AIRBUS AIMS 09-00-002 und BOEING D6-17487.",
    aviationCta: "Luftfahrtprodukte erkunden",
    industrial: "Industrie & Metall",
    industrialSub: "02",
    industrialDesc: "VOC-freie Entfettung für Fertigung und Metalloberflächen.",
    marine: "Marine & Offshore",
    marineSub: "03",
    marineDesc:
      "MARPOL-konform. Biologisch abbaubar und sicher für die Meeresumwelt.",
    haccp: "HACCP — Lebensmittelsicherheit",
    haccpSub: "04",
    haccpDesc:
      "NSF H1-registrierte Formulierungen für Lebensmittelverarbeitungsbetriebe, Packbetriebe und Großküchen. Kein Geschmackstransfer. Vollständige HACCP-Dokumentation.",
    haccpCta: "Mehr erfahren",
    whyTitle: "Warum ETS International?",
    whySubtitle: "Warum Branchenführer ETS wählen.",
    footerTagline:
      "Saubere Technologie für Luftfahrt, Marine und Industrie — für Leistung entwickelt, zum Schutz gestaltet.",
  },
} as const

type Lang = keyof typeof translations

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState<Lang>("en")
  const i = translations[lang]
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobileNav, setOpenMobileNav] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Initialise from localStorage / OS preference */
  useEffect(() => {
    const stored = localStorage.getItem("ets-theme")
    if (stored) {
      setIsDark(stored === "dark")
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  /* Apply data-theme to <html> */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    )
    localStorage.setItem("ets-theme", isDark ? "dark" : "light")
  }, [isDark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setActiveDropdown(label)
  }
  const handleNavLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  /* Shorthand color tokens for inline styles */
  const t = {
    bg: "var(--bg)",
    surface: "var(--bg-surface)",
    footer: "var(--bg-footer)",
    fg: "var(--fg)",
    muted: "var(--fg-muted)",
    dim: "var(--fg-dim)",
    faint: "var(--fg-faint)",
    border: "var(--border)",
    borderSubtle: "var(--border-subtle)",
    glassNav: "var(--glass-nav)",
    glassDropdown: "var(--glass-dropdown)",
    glassCard: "var(--glass-card)",
    cardShadow: "var(--card-shadow)",
    heroOverlay: "var(--hero-overlay)",
    imgOpacity: "var(--img-opacity)",
    statBg: "var(--stat-bg)",
    inputBg: "var(--input-bg)",
    inputBorder: "var(--input-border)",
    certBg: "var(--cert-bg)",
    certBorder: "var(--cert-border)",
    certText: "var(--cert-text)",
  }

  return (
    <div
      style={{
        background: t.bg,
        color: t.fg,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.35s ease, color 0.35s ease",
      }}
    >
      {/* ═══ NAVBAR ═══ */}
      <nav
        className="fixed top-4 left-1/2 z-50 transition-all duration-500"
        style={{
          transform: "translateX(-50%)",
          width: scrolled ? "min(900px, 94vw)" : "min(1100px, 96vw)",
        }}
      >
        <div
          className="rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500"
          style={{
            background: t.glassNav,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${t.border}`,
            boxShadow: scrolled
              ? `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,102,0.06)`
              : `0 4px 20px rgba(0,0,0,0.15)`,
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img
              src={etsLogo}
              alt="ETS International Logo"
              className="h-8 object-contain"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navConfig.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => handleNavEnter(nav.label)}
                onMouseLeave={handleNavLeave}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all duration-200"
                  style={{
                    color: activeDropdown === nav.label ? "#00FF66" : t.muted,
                    background:
                      activeDropdown === nav.label
                        ? "rgba(0,255,102,0.06)"
                        : "transparent",
                  }}
                >
                  {nav.label}
                  <span
                    className="transition-transform duration-200"
                    style={{
                      transform:
                        activeDropdown === nav.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      display: "inline-flex",
                    }}
                  >
                    <IconChevronDown />
                  </span>
                </button>

                {activeDropdown === nav.label && (
                  <div
                    className="absolute top-full left-0 mt-2 py-2 rounded-2xl min-w-[200px] z-50"
                    style={{
                      background: t.glassDropdown,
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: `1px solid ${t.border}`,
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={() => handleNavEnter(nav.label)}
                    onMouseLeave={handleNavLeave}
                  >
                    {nav.items.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-150"
                        style={{ color: t.muted }}
                        onMouseEnter={(e) => {
                          ;(e.currentTarget as HTMLElement).style.color =
                            "var(--dropdown-hover-text)"
                          ;(e.currentTarget as HTMLElement).style.background =
                            "var(--dropdown-hover-bg)"
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLElement).style.color =
                            "var(--fg-muted)"
                          ;(e.currentTarget as HTMLElement).style.background =
                            "transparent"
                        }}
                      >
                        <span>{item.label}</span>
                        {item.hasArrow && <IconChevronRight />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(10,25,47,0.07)",
                border: `1px solid ${t.border}`,
                color: isDark ? "rgba(255,255,255,0.7)" : "rgba(10,25,47,0.6)",
              }}
              aria-label="Switch language"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(10,25,47,0.07)",
                border: `1px solid ${t.border}`,
                color: isDark ? "rgba(255,255,255,0.7)" : "rgba(10,25,47,0.6)",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <IconSun /> : <IconMoon />}
            </button>

            <a
              href="#"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 glow-btn"
              style={{
                background: "#00FF66",
                color: "#050505",
                boxShadow: "0 0 20px rgba(0,255,102,0.3)",
              }}
            >
              {i.getQuote}
            </a>

            <button
              className="md:hidden p-2 rounded-full transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: t.muted }}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="mt-2 rounded-2xl p-3 flex flex-col gap-0.5 md:hidden"
            style={{
              background: t.glassDropdown,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${t.border}`,
            }}
          >
            {navConfig.map((nav) => (
              <div key={nav.label}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors"
                  style={{ color: t.muted }}
                  onClick={() =>
                    setOpenMobileNav(
                      openMobileNav === nav.label ? null : nav.label,
                    )
                  }
                >
                  <span>{nav.label}</span>
                  <span
                    style={{
                      transform:
                        openMobileNav === nav.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      display: "inline-flex",
                      transition: "transform 0.2s",
                    }}
                  >
                    <IconChevronDown />
                  </span>
                </button>
                {openMobileNav === nav.label && (
                  <div className="pl-4 pb-1 flex flex-col gap-0.5">
                    {nav.items.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors"
                        style={{ color: t.dim }}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.hasArrow && <IconChevronRight />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="mt-2 flex justify-center py-3 rounded-full text-sm font-semibold"
              style={{ background: "#00FF66", color: "#050505" }}
            >
              {i.getQuote}
            </a>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden scanlines"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1920&h=1080&fit=crop&auto=format"
            alt="Jet turbine engine macro"
            className="w-full h-full object-cover object-center"
            style={{ opacity: "var(--img-opacity)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: t.heroOverlay }}
          />
        </div>

        {/* Orb */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)",
            opacity: isDark ? 0.5 : 0.25,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Badge */}
          <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wider"
              style={{
                borderColor: t.certBorder,
                background: t.certBg,
                color: t.certText,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: t.certText }}
              />
              ISO 9001 CERTIFIED · REACH COMPLIANT · NATO APPROVED
            </div>
          </div>

          {/* Headline */}
          <h1
            className="fade-up delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.05] tracking-tight mb-6 max-w-5xl"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: t.fg,
            }}
          >
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">
              Free your{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  background: "linear-gradient(90deg, #00FF66 0%, #00ccff 100%)",
                }}
              >
                environmental
              </span>
            </span>{" "}
            <span className="inline-block">thinking for a better, clean</span>{" "}
            <span className="inline-block">world.</span>
          </h1>

          <p
            className="fade-up delay-3 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: t.muted }}
          >
            {i.heroBody}
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            <a
              href="#industries"
              className="glow-btn flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "#00FF66", color: "#050505" }}
            >
              {i.heroCta1} <IconArrowRight />
            </a>
            <a
              href="#certifications"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm border transition-all duration-200 hover:bg-white/05"
              style={{ borderColor: t.border, color: t.fg }}
            >
              {i.heroCta2}
            </a>
          </div>

          {/* Stats */}
          <div className="fade-up delay-4 mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { val: "6%+", label: "Fuel savings with Nano Diamond" },
              { val: "100%", label: "Biodegradable formulations" },
              { val: "40+", label: "Countries served globally" },
              { val: "1:100", label: "Dilution ratio — cost efficient" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col gap-0.5">
                <span
                  className="text-3xl font-black"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#00FF66",
                  }}
                >
                  {s.val}
                </span>
                <span
                  className="text-xs tracking-wide uppercase"
                  style={{ color: t.dim }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ opacity: 0.4 }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: t.dim }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10 bg-gradient-to-b"
            style={{
              background: `linear-gradient(to bottom, ${t.dim}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ═══ TRUST TICKER ═══ */}
      <section
        id="certifications"
        className="py-10 border-t border-b"
        style={{ borderColor: t.borderSubtle }}
      >
        <div className="overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${t.bg}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${t.bg}, transparent)`,
            }}
          />
          <div className="ticker-track">
            {[...TrustLogos, ...TrustLogos, ...TrustLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-10 shrink-0 transition-opacity duration-300 hover:opacity-70"
                style={{ opacity: "var(--ticker-opacity)" }}
              >
                <span
                  className="text-lg font-black tracking-widest"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: t.fg,
                  }}
                >
                  {logo.name}
                </span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: t.dim }}
                >
                  {logo.sub}
                </span>
                <div
                  className="w-px h-4 ml-6"
                  style={{ background: t.border }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES BENTO ═══ */}
      <section id="industries" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#00FF66" }}
              >
                {i.industryTitle}
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight max-w-lg"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              Built for the world's most demanding environments.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {/* Aviation — large */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border lg:col-span-2 lg:row-span-2"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                minHeight: "380px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=900&h=600&fit=crop&auto=format"
                alt="Aircraft jet turbine engine"
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.3) 55%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                className="relative z-10 h-full flex flex-col justify-between p-7"
                style={{ minHeight: "380px" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(0,255,102,0.1)",
                    border: "1px solid rgba(0,255,102,0.2)",
                    color: "#00FF66",
                  }}
                >
                  <IconPlane />
                </div>
                <div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {i.aviationSub}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black mb-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {i.aviation}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-sm mb-5"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {i.aviationDesc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200"
                    style={{ color: "#00FF66" }}
                  >
                    {i.aviationCta} <IconArrowRight />
                  </a>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                minHeight: "180px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format"
                alt="Industrial factory interior"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.2) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                className="relative z-10 flex flex-col justify-between p-6 h-full"
                style={{ minHeight: "180px" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(0,204,255,0.15)",
                    border: "1px solid rgba(0,204,255,0.3)",
                    color: "#00ccff",
                  }}
                >
                  <IconFactory />
                </div>
                <div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {i.industrialSub}
                  </span>
                  <h3
                    className="text-lg font-black mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {i.industrial}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {i.industrialDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Marine */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                minHeight: "180px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format"
                alt="Offshore drilling rig"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.2) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                className="relative z-10 flex flex-col justify-between p-6 h-full"
                style={{ minHeight: "180px" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(10,25,47,0.6)",
                    border: "1px solid rgba(0,100,200,0.4)",
                    color: "#4499ff",
                  }}
                >
                  <IconAnchor />
                </div>
                <div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {i.marineSub}
                  </span>
                  <h3
                    className="text-lg font-black mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {i.marine}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {i.marineDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* HACCP — wide */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border sm:col-span-2 lg:col-span-3"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                minHeight: "160px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&h=300&fit=crop&auto=format"
                alt="Clean room food safety"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.7) 30%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                className="relative z-10 flex items-center gap-8 p-6 h-full"
                style={{ minHeight: "160px" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(0,255,102,0.08)",
                    border: "1px solid rgba(0,255,102,0.2)",
                    color: "#00FF66",
                  }}
                >
                  <IconShield />
                </div>
                <div className="flex-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {i.haccpSub}
                  </span>
                  <h3
                    className="text-xl font-black mb-1.5"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {i.haccp}
                  </h3>
                  <p
                    className="text-sm max-w-xl leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {i.haccpDesc}
                  </p>
                </div>
                <a
                  href="#"
                  className="hidden lg:flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200 shrink-0 mr-4"
                  style={{ color: "#00FF66" }}
                >
                  {i.haccpCta} <IconArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY ETS ═══ */}
      <section
        className="py-24 px-6"
        style={{ borderTop: `1px solid ${t.borderSubtle}` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#00FF66" }}
              >
                The ETS Advantage
              </span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              {i.whySubtitle}
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: t.muted }}
            >
              Our formulations outperform conventional solvents — without the
              environmental cost, health hazards, or regulatory burden.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bento-card group p-6 rounded-2xl border transition-all duration-300"
                style={{ borderColor: t.border, background: t.glassCard }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(0,255,102,0.07)",
                    border: "1px solid rgba(0,255,102,0.15)",
                    color: "#00FF66",
                    boxShadow: "0 0 20px rgba(0,255,102,0.08)",
                  }}
                >
                  {adv.icon}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: t.fg,
                  }}
                >
                  {adv.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: t.muted }}
                >
                  {adv.desc}
                </p>
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to right, #00FF66, transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE SPOTLIGHT ═══ */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ borderTop: `1px solid ${t.borderSubtle}` }}
      >
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.08) 0%, transparent 70%)",
            opacity: isDark ? 0.8 : 0.35,
          }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#00FF66" }}
            >
              Feature Spotlight
            </span>
          </div>

          {/* AquaSmarter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ minHeight: "380px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1781707436000-18016e244e87?w=800&h=600&fit=crop&auto=format"
                alt="AquaSmarter clean technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,102,0.08) 0%, rgba(0,204,255,0.06) 100%)",
                }}
              />
              <div
                className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                style={{
                  background: "rgba(0,255,102,0.15)",
                  border: "1px solid rgba(0,255,102,0.3)",
                  color: "#00FF66",
                }}
              >
                AQUASMARTER™
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 w-fit"
                style={{
                  background: t.certBg,
                  border: `1px solid ${t.certBorder}`,
                  color: t.certText,
                }}
              >
                <IconDrop /> Water-Based Technology
              </div>
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tight mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: t.fg,
                }}
              >
                AquaSmarter™ <br />
                <span style={{ color: t.dim }}>Next-gen clean.</span>
              </h2>
              <p
                className="leading-relaxed mb-8 text-base"
                style={{ color: t.muted }}
              >
                AquaSmarter represents a breakthrough in water-activated
                chemistry. Engineered without solvents, phosphates, or caustic
                agents — completely safe for operators, surfaces, and the
                environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "pH-neutral formula",
                  "Non-flammable",
                  "No PPE required",
                  "REACH registered",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: t.muted }}
                  >
                    <span style={{ color: "#00FF66", fontWeight: 700 }}>✓</span>{" "}
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#00FF66" }}
              >
                View AquaSmarter specifications <IconArrowRight />
              </a>
            </div>
          </div>

          {/* Nano Diamond */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-12"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(10,25,47,0.9) 0%, rgba(5,5,5,0.95) 100%)"
                : "linear-gradient(135deg, rgba(10,25,47,0.06) 0%, rgba(10,25,47,0.03) 100%)",
              border: "1px solid rgba(0,255,102,0.12)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                opacity: 0.6,
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit"
                  style={{
                    background: "rgba(0,204,255,0.08)",
                    border: "1px solid rgba(0,204,255,0.2)",
                    color: "#00ccff",
                  }}
                >
                  <IconDiamond /> Nano Diamond Technology
                </div>
                <h2
                  className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: t.fg,
                  }}
                >
                  Nano Diamond™
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: t.muted }}>
                  Our patented Nano Diamond lubricant additive reduces engine
                  friction at the molecular level. Independent testing across
                  commercial fleets confirms measurable fuel savings and
                  extended engine life.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: t.fg }}
                >
                  Download test results <IconArrowRight />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    val: "6%+",
                    label: "Minimum fuel savings",
                    color: "#00FF66",
                  },
                  {
                    val: "40%",
                    label: "Reduction in engine wear",
                    color: "#00ccff",
                  },
                  {
                    val: "2×",
                    label: "Extended oil change intervals",
                    color: "#00FF66",
                  },
                  {
                    val: "0",
                    label: "Toxic nanoparticle release",
                    color: "#00ccff",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl"
                    style={{
                      background: t.statBg,
                      border: `1px solid ${t.border}`,
                    }}
                  >
                    <div
                      className="text-3xl font-black mb-1"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: stat.color,
                      }}
                    >
                      {stat.val}
                    </div>
                    <div
                      className="text-xs leading-snug"
                      style={{ color: t.dim }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative rounded-2xl px-8 py-16 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,102,0.06) 0%, rgba(0,100,200,0.04) 100%)",
              border: "1px solid rgba(0,255,102,0.12)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                opacity: 0.5,
              }}
            />
            <div className="relative z-10">
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tight mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: t.fg,
                }}
              >
                Ready to go{" "}
                <span style={{ color: "#00FF66" }}>solvent-free?</span>
              </h2>
              <p
                className="max-w-xl mx-auto mb-8 leading-relaxed"
                style={{ color: t.muted }}
              >
                Speak with our technical team about a custom cleaning solution.
                We provide free sample kits and full regulatory documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="glow-btn px-10 py-4 rounded-full font-semibold text-sm"
                  style={{ background: "#00FF66", color: "#050505" }}
                >
                  Request a Free Sample
                </a>
                <a
                  href="#"
                  className="px-10 py-4 rounded-full font-semibold text-sm border transition-colors"
                  style={{ borderColor: t.border, color: t.fg }}
                >
                  Download Product Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="px-6 pt-16 pb-8"
        style={{
          background: t.footer,
          borderTop: `1px solid ${t.borderSubtle}`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src={etsLogo}
                  alt="ETS International Logo"
                  className="h-10 object-contain"
                />
              </div>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Environmental Technologies Solutions — pioneering biodegradable
                cleaning chemistry for critical industrial applications since
                1994.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001:2015", "REACH", "RoHS", "EASA"].map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded text-xs font-semibold tracking-wider"
                    style={{
                      background: t.certBg,
                      border: `1px solid ${t.certBorder}`,
                      color: t.certText,
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {[
              {
                heading: "Products",
                links: [
                  "AquaSmarter™",
                  "Nano Diamond™",
                  "ETS BioClean",
                  "ETS Degreaser Pro",
                  "Disinfection Range",
                ],
              },
              {
                heading: "Industries",
                links: [
                  "Aviation",
                  "Marine & Offshore",
                  "Industrial & Metal",
                  "HACCP / Food Safety",
                  "Defence",
                ],
              },
              {
                heading: "Company",
                links: [
                  "About ETS",
                  "Certifications",
                  "Technical Data Sheets",
                  "Distributor Network",
                  "Contact",
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#fff")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.5)")
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div
            className="rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div>
              <h4
                className="font-bold text-base mb-1 text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Technical bulletins & product updates
              </h4>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Subscribe for regulatory news, SDS updates, and new product
                launches.
              </p>
            </div>
            <form
              className="flex gap-2 w-full sm:w-auto"
              onSubmit={(e) => {
                e.preventDefault()
                setEmail("")
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  caretColor: "#00FF66",
                }}
                onFocus={(e) => {
                  ;(e.target as HTMLElement).style.borderColor =
                    "rgba(0,255,102,0.4)"
                }}
                onBlur={(e) => {
                  ;(e.target as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.12)"
                }}
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-all duration-200 hover:scale-105"
                style={{ background: "#00FF66", color: "#050505" }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2026 ETS International. All rights reserved. Environmental
              Technologies Solutions Ltd.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Cookie Settings"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.25)")
                    }
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
