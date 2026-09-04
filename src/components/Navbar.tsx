import { useState } from "react";
import { Link, useNavigate } from "react-router";
import etsLogo from "@/imports/ets-logo.png";
import { useTheme, useScrolled, useDropdown } from "@/lib/store";
import { T } from "@/lib/theme";
import {
  IconChevronDown, IconChevronRight, IconMenu, IconX, IconSun, IconMoon,
} from "@/lib/icons";

interface NavItem { label: string; items: { label: string; to: string; hasArrow?: boolean }[] }
const navConfig: NavItem[] = [
  {
    label: "About Us",
    items: [
      { label: "About ETS", to: "/about" },
      { label: "Leadership", to: "/leadership" },
      { label: "Certifications", to: "/certifications" },
      { label: "Legacy ETS Site", to: "/legacy-ets" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "All Products", to: "/products" },
      { label: "Aviation Products", to: "/products/aviation", hasArrow: true },
      { label: "Industrial Products", to: "/products/industrial", hasArrow: true },
      { label: "HACCP Products", to: "/products/haccp", hasArrow: true },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Industries Overview", to: "/industries" },
      { label: "Aviation & Aerospace", to: "/industries/aviation" },
      { label: "Industrial & Metal", to: "/industries/industrial" },
      { label: "Marine & Offshore", to: "/industries/marine" },
      { label: "HACCP / Food Safety", to: "/industries/haccp" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "Disinfection", to: "/disinfection" },
      { label: "AquaSmarter™", to: "/technology/aquasmarter" },
      { label: "Nano Diamond™", to: "/technology/nano-diamond" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Contact Us", to: "/contact" },
      { label: "Get a Quote", to: "/quote" },
    ],
  },
];

export default function Navbar() {
  const { isDark, setIsDark, lang, setLang, i } = useTheme();
  const scrolled = useScrolled();
  const { active, enter, leave } = useDropdown();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 transition-all duration-500"
      style={{ transform: "translateX(-50%)", width: scrolled ? "min(900px, 94vw)" : "min(1100px, 96vw)" }}
    >
      <div
        className="rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500"
        style={{
          background: T.glassNav,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${T.border}`,
          boxShadow: scrolled
            ? `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,102,0.06)`
            : `0 4px 20px rgba(0,0,0,0.15)`,
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={etsLogo} alt="ETS International" className="h-8 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navConfig.map((nav) => (
            <div key={nav.label} className="relative"
              onMouseEnter={() => enter(nav.label)}
              onMouseLeave={leave}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all duration-200"
                style={{
                  color: active === nav.label ? "#00FF66" : T.muted,
                  background: active === nav.label ? "rgba(0,255,102,0.06)" : "transparent",
                }}
              >
                {nav.label}
                <span className="transition-transform duration-200" style={{ transform: active === nav.label ? "rotate(180deg)" : "rotate(0deg)", display: "inline-flex" }}>
                  <IconChevronDown />
                </span>
              </button>

              {active === nav.label && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 rounded-2xl min-w-[220px] z-50"
                  style={{
                    background: T.glassDropdown,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${T.border}`,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={() => enter(nav.label)}
                  onMouseLeave={leave}
                >
                  {nav.items.map((item) => (
                    <Link key={item.label} to={item.to}
                      className="flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-150"
                      style={{ color: T.muted }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--dropdown-hover-text)";
                        (e.currentTarget as HTMLElement).style.background = "var(--dropdown-hover-bg)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                      onClick={() => enter("")}
                    >
                      <span>{item.label}</span>
                      {item.hasArrow && <IconChevronRight />}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105"
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,25,47,0.07)",
              border: `1px solid ${T.border}`,
              color: isDark ? "rgba(255,255,255,0.7)" : "rgba(10,25,47,0.6)",
            }}
          >
            {lang === "en" ? "DE" : "EN"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,25,47,0.07)",
              border: `1px solid ${T.border}`,
              color: isDark ? "rgba(255,255,255,0.7)" : "rgba(10,25,47,0.6)",
            }}
          >
            {isDark ? <IconSun /> : <IconMoon />}
          </button>

          <Link to="/quote" className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 glow-btn"
            style={{ background: "#00FF66", color: "#050505", boxShadow: "0 0 20px rgba(0,255,102,0.3)" }}>
            {i.getQuote}
          </Link>

          <button className="md:hidden p-2 rounded-full transition-colors" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: T.muted }}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-2 rounded-2xl p-3 flex flex-col gap-0.5 md:hidden"
          style={{ background: T.glassDropdown, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: `1px solid ${T.border}` }}>
          {navConfig.map((nav) => (
            <div key={nav.label}>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors"
                style={{ color: T.muted }}
                onClick={() => setOpenMobile(openMobile === nav.label ? null : nav.label)}
              >
                <span>{nav.label}</span>
                <span style={{ transform: openMobile === nav.label ? "rotate(180deg)" : "rotate(0deg)", display: "inline-flex", transition: "transform 0.2s" }}>
                  <IconChevronDown />
                </span>
              </button>
              {openMobile === nav.label && (
                <div className="pl-4 pb-1 flex flex-col gap-0.5">
                  {nav.items.map((item) => (
                    <Link key={item.label} to={item.to}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors"
                      style={{ color: T.dim }}
                      onClick={() => { setMenuOpen(false); setOpenMobile(null); }}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/quote" className="mt-2 flex justify-center py-3 rounded-full text-sm font-semibold"
            style={{ background: "#00FF66", color: "#050505" }}
            onClick={() => setMenuOpen(false)}>
            {i.getQuote}
          </Link>
        </div>
      )}
    </nav>
  );
}
