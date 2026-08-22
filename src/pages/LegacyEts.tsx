import { useState, useEffect, useRef } from "react"
import etsLogo from "@/assets/images/ets-logo.png"

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
const IconPipeline = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="M3 7h18M3 17h18M7 7v10M17 7v10" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)
const IconSparkles = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6"
  >
    <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
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
    <path d="M4 6h16M4 12h16M4 18h16" />
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
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
const IconChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-3 h-3"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)
const IconChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-3.5 h-3.5"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const IconSun = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)
const IconMoon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="w-4 h-4"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const IconCross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

/* ─── Nav config matching screenshot ─── */
interface NavItem {
  label: string
  items?: { label: string; hasArrow?: boolean }[]
}
const navConfig: NavItem[] = [
  {
    label: "Home",
  },
  {
    label: "About Us",
    items: [
      { label: "About ETS Germany" },
      { label: "Certifications & Norms" },
      { label: "Why Choose ETS" },
      { label: "Presentations" },
      { label: "Co-Partners" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Cleaners", hasArrow: true },
      { label: "Ester Technology", hasArrow: true },
      { label: "Nano Diamond", hasArrow: true },
      { label: "Disinfection", hasArrow: true },
      { label: "Coolants Metalworking", hasArrow: true },
      { label: "Water Treatment", hasArrow: true },
      { label: "Rust+Paint Blasting", hasArrow: true },
      { label: "C2 Coating System" },
    ],
  },
  {
    label: "Disinfection",
    items: [
      { label: "AquaSmarter™ Water Ionization", hasArrow: true },
      { label: "FOG-IT INNOVA (Air Disinfection)", hasArrow: true },
      { label: "FOG-IT Desi Box", hasArrow: true },
    ],
  },
  {
    label: "Derusting & Sand Blasting",
    items: [
      { label: "Eco Safe Air Blaster" },
      { label: "Bioderuster & Paint Stripping" },
    ],
  },
  {
    label: "Contact Us",
    items: [
      { label: "Contact Us" },
      { label: "Executive Leadership" },
      { label: "Location & Office Hours" },
    ],
  },
]

/* ─── Trust Logos & Approvals ─── */
const TrustLogos = [
  { name: "AIRBUS", sub: "Confirmed & Approved" },
  { name: "BOEING", sub: "Approved Standard" },
  { name: "EUROCOPTER", sub: "Certified" },
  { name: "MCDONNELL DOUGLAS", sub: "Approved" },
  { name: "NATO (NSN)", sub: "NAMSA Listed" },
  { name: "SMI-CALIFORNIA", sub: "U.S.A. Tested" },
  { name: "MIL-PRFs", sub: "Military Spec" },
  { name: "ISO 9001", sub: "Certified" },
  { name: "ISO 14001", sub: "Environmental" },
  { name: "ISO 13485", sub: "Medical Quality" },
  { name: "HACCP", sub: "Food & Hygiene" },
  { name: "GMP+ FSA", sub: "Feed & Food Safety" },
  { name: "REACH", sub: "EU Compliant" },
]

/* ─── 7 Core Advantages from Screenshot ─── */
const whyBulletsEn = [
  "Bio-Degradable",
  "Economical",
  "Water-based",
  "Solvent-free",
  "Highly efficient customized cleaning products & equipments",
  "On-site staff Training & Consultancy",
  "Cost Efficient",
]

const whyBulletsDe = [
  "Biologisch abbaubar",
  "Wirtschaftlich & sparsam",
  "Auf Wasserbasis formuliert",
  "Vollständig lösungsmittelfrei",
  "Hocheffiziente, maßgeschneiderte Reinigungsprodukte & Maschinen",
  "Mitarbeiterschulung & technische Beratung vor Ort",
  "Kosteneffizient und prozessoptimiert",
]

/* ─── 15 Toxic Substances Replaced by ETS ─── */
const toxicPills = [
  "Solvent",
  "Paraffin",
  "Trekolene",
  "Caustic Soda",
  "Acetone",
  "Citric Acid",
  "Alcohol",
  "Toluene",
  "Spirits",
  "Petrochemicals",
  "Carbonic Acid III",
  "Vinegar",
  "Acids",
  "Phosphates",
  "Silicate",
]

/* ─── Toxic Replacements Matrix ─── */
const toxicSubstances = [
  { toxic: "Solvent & Spirits", ets: "ETS 100% Biodegradable Water-Based Solvent Replacements" },
  { toxic: "Paraffin & Trekolene", ets: "ETS Safe Industrial & Metalworking Fluids" },
  { toxic: "Caustic Soda & Acids", ets: "ETS Bioderuster & Neutral-pH Rust Removers" },
  { toxic: "Acetone, Toluene & Alcohol", ets: "ETS Safe Organic Bio-Solvents & Degreasers" },
  { toxic: "Petrochemicals & Hydrocarbons", ets: "ETS Eco Bio-Cleaners & Ester Technology" },
  { toxic: "Phosphates & Silicates", ets: "ETS Non-Staining, Residue-Free Eco Formulas" },
]

/* ─── Translations (EN & DE) ─── */
const translations = {
  en: {
    getQuote: "Request a Quote",
    heroTag: "ESTABLISHED 2007 · ISO 9001, 14001 & 13485 CERTIFIED · AIRBUS & BOEING APPROVED",
    heroTitle: "Welcome to ETS International",
    heroSubtitle: "PROFESSIONAL CLEANING SOLUTIONS",
    heroTagline: "Free your environmental thinking for a better, clean world.",
    heroBody:
      "ETS International Germany delivers 100% natural, biodegradable, and solvent-free solutions for surface treatment, deep cleaning, degreasing, rust & corrosion control, air disinfection, and water treatment across aerospace, military, marine, and heavy industry.",
    heroCta1: "Explore Solutions",
    heroCta2: "Approvals & Norms",
    stats: [
      { val: "100%", label: "Natural & Bio-degradable" },
      { val: "6%+", label: "Guaranteed fuel savings (Nano Diamond)" },
      { val: "12 Mos", label: "AquaSmarter™ ionization (0 electricity)" },
      { val: "2007", label: "German engineering heritage (Köln)" },
    ],

    aboutTitle: "Welcome to ETS International",
    aboutP1:
      "ETS International Germany was founded in 2007 is an ISO 9001, ISO 14001 and ISO 13485 certified offers, completely eco-friendly 100% biodegradable, solutions for surface and all your routine treatments: deep-cleaning, degreasing and rust and corrosion removal and treatment protection for all work areas under consideration of public health.",
    aboutP2:
      "ETS products have replaced dangerous chemicals and hydrocarbons and perform a wide variety of cleaning and maintenance tasks, while protecting users, objects and the environment. All ETS products meet the latest European regulations for industrial and professional cleaning processes.",
    aboutP3:
      "Our products are tested and approved by airbus, boeing, eurocopter, mcdonnell douglas, SMI-California U.S.A., Mil-PRFs and NATO (NSN) – NAMSA, and meet strictest environmental and safety standards and regulations worldwide.",
    aboutP4:
      "ETS products can be used in a great variety of industries: in the field of cleaning and disinfection processes in civil & military aircraft & aviation, automotive, heavy equipment & vehicles, food & beverage, gastronomy & hotel, corrosion prevention, water treatment, sewage systems, refineries & gas, marine & shipping, offshore, railways & rolling stock, power stations, production lines, cooling systems, paper mills, and more.",
    aboutP5:
      "We are also a professional partner for providing cleaning machines, customized engineering, private label packaging, and training courses for our partners.",

    industryTitle: "Specific Industries Solutions",
    industrySubtitle:
      "The ETS product range provides customers in a variety of working areas with efficient solutions:",
    aviation: "AVIATION INDUSTRY AIRCRAFTS",
    aviationSub: "01 — Aviation Solutions",
    aviationDesc:
      "Confirmed and approved by Airbus, Boeing, Eurocopter, McDonnell Douglas, SMI-California U.S.A., Mil-PRFs, and NATO (NSN) – NAMSA. Complete exterior wash, cabin disinfection, and engine degreasing.",
    aviationCta: "Explore Aviation Range",
    industrial: "METAL WORKSHOP PAINT",
    industrialSub: "02 — Heavy Industry",
    industrialDesc: "Zero-VOC degreasing, machining coolants that dissipate heat and extend tool life, and metal surface preparation.",
    refineries: "REFINERIES GAS PIPELINES",
    refineriesSub: "03 — Energy & Oil",
    refineriesDesc: "Heavy hydrocarbon removal, pipeline degreasing, and non-flammable cleaning for hazardous explosive zones.",
    marine: "OFFSHORE MARINE",
    marineSub: "04 — Maritime",
    marineDesc: "Bio-degradable and ocean-safe cleaning for offshore rigs, cargo vessels, and container terminals.",
    haccp: "FOOD INDUSTRY DISINFECTION",
    haccpSub: "05 — Hygiene & Health",
    haccpDesc: "Certified by German Ministry of Food & Hygiene Control (Leverkusen), GMP+ FSA, and REACH for commercial kitchens, gastro, hotels, hospitals, and surgical instruments.",
    haccpCta: "Learn More",
    derusting: "RUST+PAINT BLASTING",
    derustingSub: "06 — Surface Restoration",
    derustingDesc: "Eco Safe Air Blaster and Bioderuster remove rust and old coatings without dangerous acid baths or toxic dust.",

    whyTitle: "Why Choose ETS",
    whySubtitle: "Eco-responsibility paired with uncompromising engineering performance.",
    whyLead:
      "ETS - Products will help your company to listen to environmental responsibility today and:",
    whyReplace:
      "ETS products can replace dangerous and toxic substances like:",

    replaceTitle: "Replacing Dangerous & Toxic Substances",
    replaceSubtitle:
      "In line with the MCUEP (Montreal & UN Environmental Program), ETS replaces hazardous legacy chemicals like acetone, solvents, caustic soda, and acids.",

    footerTagline:
      "ETS INTERNATIONAL UG (haftungsbeschränkt) — Wilhelm-Rupert-Str. 38, 51147 Köln, Germany. Professional bio-degradable cleaning chemistry.",
    footerCompany:
      "ETS International is the professional provider of eco-friendly and bio-degradable solutions for industrial and professional cleaning and maintenance. We offer customized engineering, private label packaging, and training courses for our partners.",
    footerHoursTitle: "OPENING HOURS",
    footerHours: "Mon - Fri: 8:00 AM - 5:00 PM\nSaturday & Sunday: Closed",
    footerAppTitle: "ETS Products application on:",
    footerCourtTitle: "Court Registration",
    footerContactTitle: "Contact Information",
    footerCopyright:
      "Copyright © 2024 / All rights reserved. ETS INTERNATIONAL UG Köln - Germany",
  },
  de: {
    getQuote: "Angebot anfordern",
    heroTag: "GEGRÜNDET 2007 · ISO 9001, 14001 & 13485 ZERTIFIZIERT · AIRBUS & BOEING ZUGELASSEN",
    heroTitle: "Willkommen bei ETS International",
    heroSubtitle: "PROFESSIONELLE REINIGUNGSLÖSUNGEN",
    heroTagline: "Befreien Sie Ihr Umweltbewusstsein für eine bessere, saubere Welt.",
    heroBody:
      "ETS International Germany bietet 100% natürliche, biologisch abbaubare und lösungsmittelfreie Lösungen für Oberflächenbehandlung, Tiefenreinigung, Entfettung, Rost- und Korrosionsschutz, Raumdesinfektion und Wasseraufbereitung in Luftfahrt, Militär, Marine und Industrie.",
    heroCta1: "Lösungen entdecken",
    heroCta2: "Zulassungen & Normen",
    stats: [
      { val: "100%", label: "Natürlich & biologisch abbaubar" },
      { val: "6%+", label: "Garantierte Kraftstoffersparnis (Nano Diamond)" },
      { val: "12 Mon.", label: "AquaSmarter™ Ionisation (Ohne Strom)" },
      { val: "2007", label: "Deutsche Ingenieursqualität (Köln)" },
    ],

    aboutTitle: "Willkommen bei ETS International",
    aboutP1:
      "ETS International Germany wurde 2007 gegründet und ist nach ISO 9001, ISO 14001 und ISO 13485 zertifiziert. Wir bieten absolut umweltfreundliche, zu 100% biologisch abbaubare Lösungen für Oberflächenbehandlung und all Ihre Routineanwendungen: Tiefenreinigung, Entfettung, Rost- und Korrosionsentfernung sowie Schutz für alle Arbeitsbereiche unter Berücksichtigung des Gesundheitsschutzes.",
    aboutP2:
      "ETS-Produkte haben gefährliche Chemikalien und Kohlenwasserstoffe ersetzt und bewältigen vielfältige Reinigungs- und Wartungsaufgaben, während sie Anwender, Objekte und die Umwelt schützen. Alle ETS-Produkte entsprechen den neuesten europäischen Richtlinien für industrielle und professionelle Reinigungsprozesse.",
    aboutP3:
      "Unsere Produkte sind getestet und freigegeben von Airbus, Boeing, Eurocopter, McDonnell Douglas, SMI-California U.S.A., Mil-PRFs und NATO (NSN) – NAMSA und erfüllen strengste Umwelt- und Sicherheitsstandards weltweit.",
    aboutP4:
      "ETS-Produkte finden Einsatz in den unterschiedlichsten Branchen: Reinigung und Desinfektion in ziviler und militärischer Luftfahrt, Automobilbranche, Baufahrzeuge, Lebensmittel- und Getränkeindustrie, Gastronomie & Hotel, Korrosionsschutz, Wasseraufbereitung, Raffinerien & Gas, Schifffahrt, Offshore, Schienenverkehr, Kraftwerke und Produktionsanlagen.",
    aboutP5:
      "Wir sind zudem Ihr verlässlicher Partner für Reinigungsmaschinen, kundenspezifisches Engineering, Private-Label-Verpackungen sowie Schulungen für unsere Partner.",

    industryTitle: "Branchenspezifische Lösungen",
    industrySubtitle:
      "Das ETS-Produktsortiment bietet Kunden in verschiedensten Arbeitsbereichen effiziente Lösungen:",
    aviation: "LUFTFAHRT & FLUGZEUGE",
    aviationSub: "01 — Luftfahrtlösungen",
    aviationDesc:
      "Bestätigt und zugelassen von Airbus, Boeing, Eurocopter, McDonnell Douglas, SMI-California U.S.A., Mil-PRFs und NATO (NSN) – NAMSA. Außenwäsche, Kabinendesinfektion und Triebwerksentfettung.",
    aviationCta: "Luftfahrtprogramm ansehen",
    industrial: "METALLWERKSTATT & LACK",
    industrialSub: "02 — Schwerindustrie",
    industrialDesc: "VOC-freie Entfettung, Kühlschmierstoffe zur Wärmeableitung und Werkzeugstandzeitverlängerung sowie Oberflächenvorbereitung.",
    refineries: "RAFFINERIEN & GASPIPELINES",
    refineriesSub: "03 — Energie & Öl",
    refineriesDesc: "Schwere Kohlenwasserstoffentfernung, Pipeline-Entfettung und nicht brennbare Reinigung für explosionsgefährdete Bereiche.",
    marine: "OFFSHORE & MARITIM",
    marineSub: "04 — Maritim",
    marineDesc: "Biologisch abbaubare und meeressichere Reinigung für Bohrinseln, Frachtschiffe und Containerterminals.",
    haccp: "LEBENSMITTELINDUSTRIE & HYGIENE",
    haccpSub: "05 — Hygiene & Gesundheit",
    haccpDesc: "Zertifiziert durch das Lebensmittel- & Hygieneüberwachungsamt Leverkusen, GMP+ FSA und REACH für Großküchen, Gastronomie, Krankenhäuser und chirurgische Instrumente.",
    haccpCta: "Mehr erfahren",
    derusting: "ROST- & FARBENTFERNUNG (STRAHLEN)",
    derustingSub: "06 — Oberflächensanierung",
    derustingDesc: "Eco Safe Air Blaster und Bioderuster entfernen Rost und Altlacke ohne gefährliche Säurebäder oder giftigen Staub.",

    whyTitle: "Warum ETS wählen",
    whySubtitle: "Umweltverantwortung kombiniert mit kompromissloser technischer Leistungsfähigkeit.",
    whyLead:
      "ETS-Produkte helfen Ihrem Unternehmen, ökologische Verantwortung mit Spitzenleistung zu verbinden:",
    whyReplace:
      "ETS-Produkte können gefährliche und giftige Substanzen ersetzen wie:",

    replaceTitle: "Ersatz gefährlicher & giftiger Substanzen",
    replaceSubtitle:
      "Gemäß der MCUEP-Konvention (Montreal & UN-Umweltprogramm) ersetzt ETS schädliche Altsubstanzen wie Aceton, Lösungsmittel, Natronlauge und Säuren.",

    footerTagline:
      "ETS INTERNATIONAL UG (haftungsbeschränkt) — Wilhelm-Rupert-Str. 38, 51147 Köln, Deutschland. Professionelle biologisch abbaubare Reinigungschemie.",
    footerCompany:
      "ETS International ist der professionelle Anbieter von umweltfreundlichen und biologisch abbaubaren Lösungen für die industrielle und gewerbliche Reinigung und Instandhaltung. Wir bieten maßgeschneiderte Entwicklungen, Private Labeling und Vor-Ort-Schulungen.",
    footerHoursTitle: "ÖFFNUNGSZEITEN",
    footerHours: "Mo - Fr: 8:00 - 17:00 Uhr\nSamstag & Sonntag: Geschlossen",
    footerAppTitle: "ETS-Produktanwendungen in:",
    footerCourtTitle: "Registergericht & Firmensitz",
    footerContactTitle: "Kontaktinformationen",
    footerCopyright:
      "Copyright © 2024 / Alle Rechte vorbehalten. ETS INTERNATIONAL UG Köln - Deutschland",
  },
} as const

type Lang = keyof typeof translations

export default function LegacyEts() {
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

  /* Color tokens */
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
          width: "min(1140px, 96vw)",
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
          <div className="hidden lg:flex items-center gap-0.5">
            {navConfig.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => handleNavEnter(nav.label)}
                onMouseLeave={handleNavLeave}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200"
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
                    className="absolute top-full left-0 mt-2 py-2 rounded-2xl min-w-[240px] z-50 shadow-2xl"
                    style={{
                      background: t.glassDropdown,
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: `1px solid ${t.border}`,
                    }}
                    onMouseEnter={() => handleNavEnter(nav.label)}
                    onMouseLeave={handleNavLeave}
                  >
                    {nav.items.map((item) => (
                      <a
                        key={item.label}
                        href="#products"
                        className="flex items-center justify-between px-4 py-2.5 text-xs xl:text-sm transition-all duration-150"
                        style={{ color: t.muted }}
                        onMouseEnter={(e) => {
                          ; (e.currentTarget as HTMLElement).style.color =
                            "var(--dropdown-hover-text)"
                            ; (e.currentTarget as HTMLElement).style.background =
                              "var(--dropdown-hover-bg)"
                        }}
                        onMouseLeave={(e) => {
                          ; (e.currentTarget as HTMLElement).style.color =
                            "var(--fg-muted)"
                            ; (e.currentTarget as HTMLElement).style.background =
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
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 hover:scale-105 glow-btn"
              style={{
                background: "#00FF66",
                color: "#050505",
                boxShadow: "0 0 20px rgba(0,255,102,0.3)",
              }}
            >
              {i.getQuote}
            </a>

            <button
              className="lg:hidden p-2 rounded-full transition-colors"
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
            className="mt-2 rounded-2xl p-3 flex flex-col gap-0.5 lg:hidden"
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
                        href="#products"
                        className="flex items-center justify-between px-4 py-2 rounded-lg text-xs transition-colors"
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
              href="#contact"
              className="mt-2 flex justify-center py-3 rounded-full text-sm font-semibold"
              style={{ background: "#00FF66", color: "#050505" }}
              onClick={() => setMenuOpen(false)}
            >
              {i.getQuote}
            </a>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 overflow-hidden scanlines"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1920&h=1080&fit=crop&auto=format"
            alt="Aerospace & Industrial Engineering"
            className="w-full h-full object-cover object-center"
            style={{ opacity: "var(--img-opacity)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: t.heroOverlay }}
          />
        </div>

        {/* Radial Glow */}
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
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
              style={{
                borderColor: t.certBorder,
                background: t.certBg,
                color: t.certText,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: t.certText }}
              />
              {i.heroTag}
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="fade-up delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black leading-[1.08] tracking-tight mb-3 max-w-5xl"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: t.fg,
            }}
          >
            {i.heroTitle}
          </h1>

          {/* Subtitle in Caps */}
          <h2
            className="fade-up delay-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[0.15em] uppercase mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#00FF66",
            }}
          >
            {i.heroSubtitle}
          </h2>

          {/* Stylized Tagline */}
          <p
            className="fade-up delay-3 text-lg sm:text-xl md:text-2xl italic font-light max-w-3xl mb-8 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: t.muted,
            }}
          >
            "{i.heroTagline}"
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-4 items-center">
            <a
              href="#products"
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

          {/* Stats from etsint.eu */}
          <div className="fade-up delay-4 mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {i.stats.map((s) => (
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
                  className="text-xs tracking-wide uppercase font-medium"
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

      {/* ═══ TRUST & APPROVALS TICKER ═══ */}
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
            {[...TrustLogos, ...TrustLogos, ...TrustLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-8 shrink-0 transition-opacity duration-300 hover:opacity-70"
                style={{ opacity: "var(--ticker-opacity)" }}
              >
                <span
                  className="text-base font-black tracking-widest uppercase"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: t.fg,
                  }}
                >
                  {logo.name}
                </span>
                <span
                  className="text-xs tracking-wider uppercase font-semibold"
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

      {/* ═══ WELCOME TO ETS INTERNATIONAL / ABOUT SECTION ═══ */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              {i.aboutTitle}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full shadow-[0_0_12px_#00FF66]" />
          </div>

          <div
            className="space-y-6 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto text-justify sm:text-center"
            style={{ color: t.muted }}
          >
            <p>{i.aboutP1}</p>
            <p>{i.aboutP2}</p>
            <p>{i.aboutP3}</p>
            <p>{i.aboutP4}</p>
            <p className="font-semibold text-base sm:text-lg" style={{ color: t.fg }}>
              {i.aboutP5}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES & PRODUCTS BENTO ═══ */}
      <section id="products" className="py-20 px-6">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              {i.industrySubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Aviation — large */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border lg:col-span-2"
              style={{
                borderColor: t.border,
                minHeight: "360px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=900&h=600&fit=crop&auto=format"
                alt="Aviation & Aircraft Cleaning"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.4) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(0,255,102,0.12)",
                    border: "1px solid rgba(0,255,102,0.25)",
                    color: "#00FF66",
                  }}
                >
                  <IconPlane />
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-2 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {i.aviationSub}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black mb-3 text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {i.aviation}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-xl mb-4"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {i.aviationDesc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200"
                    style={{ color: "#00FF66" }}
                  >
                    {i.aviationCta} <IconArrowRight />
                  </a>
                </div>
              </div>
            </div>

            {/* Industrial & Workshops */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: t.border,
                minHeight: "360px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=600&h=400&fit=crop&auto=format"
                alt="Industrial metal workshop"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.3) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between p-7 h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
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
                    className="text-xs font-bold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {i.industrialSub}
                  </span>
                  <h3
                    className="text-xl font-black mb-2 text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {i.industrial}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {i.industrialDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Refineries & Gas Pipelines */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: t.border,
                minHeight: "260px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&auto=format"
                alt="Oil refinery and pipeline"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.3) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,188,1,0.15)",
                    border: "1px solid rgba(255,188,1,0.3)",
                    color: "#ffbc01",
                  }}
                >
                  <IconPipeline />
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {i.refineriesSub}
                  </span>
                  <h3
                    className="text-lg font-black mb-1.5 text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {i.refineries}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {i.refineriesDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Offshore & Marine */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: t.border,
                minHeight: "260px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=600&h=400&fit=crop&auto=format"
                alt="Offshore Marine Shipping"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.3) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(14,57,152,0.6)",
                    border: "1px solid rgba(68,153,255,0.4)",
                    color: "#4499ff",
                  }}
                >
                  <IconAnchor />
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {i.marineSub}
                  </span>
                  <h3
                    className="text-lg font-black mb-1.5 text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {i.marine}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {i.marineDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Derusting & Paint Stripping */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: t.border,
                minHeight: "260px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&h=400&fit=crop&auto=format"
                alt="Surface restoration and rust removal"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.3) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(0,255,102,0.1)",
                    border: "1px solid rgba(0,255,102,0.25)",
                    color: "#00FF66",
                  }}
                >
                  <IconSparkles />
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-1 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {i.derustingSub}
                  </span>
                  <h3
                    className="text-lg font-black mb-1.5 text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {i.derusting}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {i.derustingDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* HACCP Food Safety — wide card */}
            <div
              className="bento-card relative overflow-hidden rounded-2xl border md:col-span-2 lg:col-span-3"
              style={{
                borderColor: t.border,
                minHeight: "170px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&h=300&fit=crop&auto=format"
                alt="HACCP hygiene clean room"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ opacity: "var(--img-opacity-sm)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(3,8,18,0.95) 0%, rgba(3,8,18,0.75) 40%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-7 h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0,255,102,0.1)",
                      border: "1px solid rgba(0,255,102,0.25)",
                      color: "#00FF66",
                    }}
                  >
                    <IconShield />
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-1 block"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {i.haccpSub}
                    </span>
                    <h3
                      className="text-xl font-black mb-1.5 text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {i.haccp}
                    </h3>
                    <p
                      className="text-xs sm:text-sm max-w-2xl leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {i.haccpDesc}
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs font-semibold hover:gap-3 transition-all duration-200 shrink-0"
                  style={{ color: "#00FF66" }}
                >
                  {i.haccpCta} <IconArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ETS SECTION ═══ */}
      <section
        id="why-choose"
        className="py-20 px-6"
        style={{ borderTop: `1px solid ${t.borderSubtle}` }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#00FF66]" />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#00FF66" }}
              >
                Environmental Responsibility
              </span>
              <div className="h-px w-10 bg-[#00FF66]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              {i.whyTitle}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent rounded-full shadow-[0_0_12px_#00FF66] mb-6" />
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed"
              style={{ color: t.muted }}
            >
              {i.whyLead}
            </p>
          </div>

          {/* 7 Key Bullets List Card */}
          <div
            className="w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 border shadow-xl mb-12"
            style={{
              background: t.glassCard,
              borderColor: t.border,
            }}
          >
            <ul className="space-y-3.5">
              {(lang === "de" ? whyBulletsDe : whyBulletsEn).map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base font-medium"
                  style={{ color: t.fg }}
                >
                  <span className="text-[#00FF66] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Toxic Substances Sub-Heading */}
          <div className="text-center mb-6">
            <p className="text-sm sm:text-base font-semibold" style={{ color: t.muted }}>
              {i.whyReplace}
            </p>
          </div>

          {/* 15 Glowing Green Pill Badges */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-3xl mx-auto mb-16">
            {toxicPills.map((substance) => (
              <span
                key={substance}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(0, 255, 102, 0.12)",
                  border: "1px solid rgba(0, 255, 102, 0.3)",
                  color: "#00FF66",
                  boxShadow: "0 0 15px rgba(0, 255, 102, 0.15)",
                }}
              >
                {substance}
              </span>
            ))}
          </div>

          {/* Toxic Replacements Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toxicSubstances.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border flex flex-col justify-between"
                style={{
                  background: t.glassCard,
                  borderColor: t.border,
                }}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    <span className="p-1 rounded bg-red-500/10 text-red-400">
                      <IconCross />
                    </span>
                    Replaces Hazardous:
                  </div>
                  <div className="font-semibold text-sm" style={{ color: t.dim }}>
                    {item.toxic}
                  </div>
                </div>

                <div className="pt-3 border-t" style={{ borderColor: t.borderSubtle }}>
                  <div className="flex items-center gap-2 text-[#00FF66] text-xs font-bold uppercase tracking-wider mb-1">
                    <span className="p-1 rounded bg-[#00FF66]/10 text-[#00FF66]">
                      <IconCheck />
                    </span>
                    ETS Eco Solution:
                  </div>
                  <div className="text-xs font-medium leading-relaxed" style={{ color: t.fg }}>
                    {item.ets}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE SPOTLIGHT: AQUASMARTER & NANO DIAMOND ═══ */}
      <section
        className="py-20 px-6 relative overflow-hidden"
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
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#00FF66" }}
            >
              Proprietary Technologies
            </span>
          </div>

          {/* AquaSmarter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ minHeight: "360px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1781707436000-18016e244e87?w=800&h=600&fit=crop&auto=format"
                alt="AquaSmarter Clean Water Ionization"
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 w-fit"
                style={{
                  background: t.certBg,
                  border: `1px solid ${t.certBorder}`,
                  color: t.certText,
                }}
              >
                <IconDrop /> 12 Months Continuous Ionization (No Electricity)
              </div>
              <h2
                className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: t.fg,
                }}
              >
                AquaSmarter™ <br />
                <span style={{ color: t.dim }}>Self-Operating Water Treatment.</span>
              </h2>
              <p
                className="leading-relaxed mb-6 text-sm sm:text-base"
                style={{ color: t.muted }}
              >
                The AquaSmarter ionizing capsule lasts for 12 full months and operates completely without electricity. As water passes through, active ions sanitize basins, drinking water, and waste water treatment systems naturally.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "12 Months Ionizing Capsule",
                  "Zero Electricity Needed",
                  "Drink & Waste Water Ready",
                  "100% Eco-Safe Formulation",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    style={{ color: t.muted }}
                  >
                    <span style={{ color: "#00FF66", fontWeight: 700 }}>✓</span>{" "}
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#00FF66" }}
              >
                Inquire about AquaSmarter capsules <IconArrowRight />
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
                  <IconDiamond /> Nano Diamond Lubrication Technology
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: t.fg,
                  }}
                >
                  Nano Diamond™
                </h2>
                <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: t.muted }}>
                  For industrial and fleet customers, we guarantee a fuel saving of minimum 6% after adding our Nanodiamond technology to engines and machinery, reducing mechanical wear and optimizing energy efficiency.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: t.fg }}
                >
                  Request Nano Diamond fleet trial <IconArrowRight />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    val: "6%+",
                    label: "Guaranteed minimum fuel saving",
                    color: "#00FF66",
                  },
                  {
                    val: "100%",
                    label: "Safe for modern engines & turbines",
                    color: "#00ccff",
                  },
                  {
                    val: "2×",
                    label: "Extended equipment & tool life",
                    color: "#00FF66",
                  },
                  {
                    val: "0",
                    label: "Toxic emissions or harmful residue",
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
                      className="text-xs leading-snug font-medium"
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

      {/* ═══ TESTIMONIALS / CLIENT TRUST ═══ */}
      <section
        className="py-20 px-6"
        style={{ borderTop: `1px solid ${t.borderSubtle}` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-2"
              style={{ color: "#00FF66" }}
            >
              Client Feedback
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: t.fg,
              }}
            >
              Trusted Across Global Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The staff was courteous and knowledgeable, addressing all our concerns promptly with tailored cleaning formulations.",
                author: "Ron Burnwood",
                role: "Operations Director",
              },
              {
                quote:
                  "Choosing ETS International for our industrial compliance and environmental transition was undoubtedly the right decision.",
                author: "Lily Granger",
                role: "Technical Compliance Lead",
              },
              {
                quote:
                  "ETS International exceeded our expectations in every way possible — performance, safety, and regulatory documentation.",
                author: "Jeson Foxx",
                role: "Fleet Maintenance Chief",
              },
            ].map((tItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border flex flex-col justify-between"
                style={{
                  background: t.glassCard,
                  borderColor: t.border,
                }}
              >
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: t.muted }}>
                  "{tItem.quote}"
                </p>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: t.fg,
                    }}
                  >
                    {tItem.author}
                  </div>
                  <div className="text-xs font-medium" style={{ color: t.dim }}>
                    {tItem.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER / CONTACT SECTION ═══ */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative rounded-3xl px-8 py-14 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,102,0.06) 0%, rgba(0,100,200,0.04) 100%)",
              border: "1px solid rgba(0,255,102,0.15)",
            }}
          >
            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: t.fg,
                }}
              >
                Ready to Upgrade to{" "}
                <span style={{ color: "#00FF66" }}>Certified Eco Chemistry?</span>
              </h2>
              <p
                className="max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed"
                style={{ color: t.muted }}
              >
                Consult directly with our German engineering team. We formulate customized cleaning chemistry, sample batches, and full regulatory compliance dossiers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@etsint.eu"
                  className="glow-btn px-8 py-4 rounded-full font-semibold text-sm"
                  style={{ background: "#00FF66", color: "#050505" }}
                >
                  Email: info@etsint.eu
                </a>
                <a
                  href="tel:+492203188890"
                  className="px-8 py-4 rounded-full font-semibold text-sm border transition-colors"
                  style={{ borderColor: t.border, color: t.fg }}
                >
                  Call +49 2203 18889-0
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: ETS INTERNATIONAL & Opening Hours */}
            <div>
              <h4
                className="text-sm font-black tracking-wider uppercase mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#00FF66" }}
              >
                ETS INTERNATIONAL
              </h4>
              <p
                className="text-xs sm:text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {i.footerCompany}
              </p>
              <h5
                className="text-xs font-bold tracking-wider uppercase mb-2"
                style={{ color: t.fg }}
              >
                {i.footerHoursTitle}
              </h5>
              <p
                className="text-xs leading-relaxed whitespace-pre-line"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {i.footerHours}
              </p>
            </div>

            {/* Column 2: Application Areas */}
            <div>
              <h4
                className="text-sm font-black tracking-wider uppercase mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#00FF66" }}
              >
                {i.footerAppTitle}
              </h4>
              <ul className="space-y-2 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li>• Aviation Industry</li>
                <li>• Marine / Off-Shore Industry</li>
                <li>• Refinery & Oil / Gas Production</li>
                <li>• Military Industry</li>
                <li>• Food, Beverage & Restaurant Services</li>
                <li>• Disinfection & Odor Control</li>
                <li>• Derusting & Prevention</li>
              </ul>
            </div>

            {/* Column 3: Court Registration */}
            <div>
              <h4
                className="text-sm font-black tracking-wider uppercase mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#00FF66" }}
              >
                {i.footerCourtTitle}
              </h4>
              <div
                className="text-xs leading-relaxed space-y-2"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <div className="font-semibold text-white">
                  ETS International UG (haftungsbeschränkt)
                </div>
                <div>HRB 88478 Registergericht Köln</div>
                <div>WEEE DE: 77800049</div>
                <div>Wilhelm-Rupert-Str. 38, 51147 Köln, Germany</div>
                <div className="pt-2 text-white font-medium">
                  CEO: Dipl.-Ing. Massoud Rad Soltani
                </div>
              </div>
            </div>

            {/* Column 4: Contact Information */}
            <div>
              <h4
                className="text-sm font-black tracking-wider uppercase mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#00FF66" }}
              >
                {i.footerContactTitle}
              </h4>
              <div
                className="space-y-3 text-xs"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF66]">📍</span>
                  <span>Wilhelm-Rupert-Str. 38, 51147 Köln (Cologne) Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF66]">📞</span>
                  <span>+49 2203 18889-0 / +49 2203 981180</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF66]">✉️</span>
                  <a
                    href="mailto:info@etsint.eu"
                    className="hover:underline text-[#00FF66]"
                  >
                    info@etsint.eu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
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
                className="text-xs sm:text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Subscribe for regulatory news, SDS updates, and new eco formulations.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto"
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
                className="w-full sm:w-64 px-4 py-2.5 rounded-full text-sm outline-none transition-all duration-200 min-w-0"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  caretColor: "#00FF66",
                }}
                onFocus={(e) => {
                  ; (e.target as HTMLElement).style.borderColor =
                    "rgba(0,255,102,0.4)"
                }}
                onBlur={(e) => {
                  ; (e.target as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.12)"
                }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-all duration-200 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer text-center"
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
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {i.footerCopyright}
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Imprint"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
