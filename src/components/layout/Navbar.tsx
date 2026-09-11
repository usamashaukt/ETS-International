import { useState, useRef } from "react";
import { Link } from "react-router";
import etsLogo from "@/assets/images/ets-logo.png";
import { useTheme } from "@/context/ThemeContext";
import { useScrolled } from "@/hooks/useScrolled";
import { T, GREEN } from "@/theme";
import {
  IconChevronDown,
  IconChevronRight,
  IconMenu,
  IconX,
  IconSun,
  IconMoon,
} from "@/components/icons";
import { navConfig } from "@/data/navConfig";

export type { NavTopItem, NavDropdownItem, NavSubItem } from "@/types";
export { navConfig };

export default function Navbar() {
  const { isDark, setIsDark, lang, setLang, i } = useTheme();
  const scrolled = useScrolled();

  // Desktop menu states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile drawer states
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  // Hover handlers with micro-delay for diagonal mouse transit
  const handleNavEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(label);
  };

  const handleNavLeave = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 180);
  };

  const handleSubmenuEnter = (subLabel: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveSubmenu(subLabel);
  };

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 transition-all duration-300"
      style={{ transform: "translateX(-50%)", width: "min(1240px, 96vw)" }}
      onMouseLeave={handleNavLeave}
    >
      {/* ── Main Nav Container ── */}
      <div
        className="rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300"
        style={{
          background: T.glassNav,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${scrolled ? T.border : T.borderSubtle}`,
          boxShadow: scrolled
            ? isDark
              ? "0 16px 40px rgba(0,0,0,0.8), 0 0 20px var(--accent-soft)"
              : "0 10px 30px rgba(0,0,0,0.08)"
            : "none",
        }}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <img
            src={etsLogo}
            alt="ETS International Logo"
            className="h-9 sm:h-10 object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* ── Desktop Navigation Links ── */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navConfig.map((nav) => {
            const hasChildren = Boolean(nav.items && nav.items.length > 0);
            const isTopActive = activeDropdown === nav.label;

            return (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleNavEnter(nav.label)}
              >
                {hasChildren ? (
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-150 cursor-pointer"
                    style={{
                      color: isTopActive ? GREEN : T.muted,
                      background: isTopActive ? "var(--accent-soft)" : "transparent",
                    }}
                    onClick={() => setActiveDropdown(isTopActive ? null : nav.label)}
                  >
                    <span>{nav.label}</span>
                    <span
                      style={{
                        transform: isTopActive ? "rotate(180deg)" : "rotate(0deg)",
                        display: "inline-flex",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <IconChevronDown />
                    </span>
                  </button>
                ) : (
                  <Link
                    to={nav.to || "/"}
                    className="flex items-center px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-150"
                    style={{ color: T.muted }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.muted)}
                  >
                    {nav.label}
                  </Link>
                )}

                {/* ── Primary Dropdown (Level 2) ── */}
                {hasChildren && isTopActive && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[240px] rounded-2xl p-2 flex flex-col shadow-2xl z-50 animate-fadeIn"
                    style={{
                      background: T.glassDropdown,
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: `1px solid ${T.border}`,
                    }}
                    onMouseEnter={() => handleNavEnter(nav.label)}
                  >
                    {nav.items!.map((item) => {
                      const hasSub = Boolean(item.subItems && item.subItems.length > 0);
                      const isSubActive = activeSubmenu === item.label;

                      return (
                        <div
                          key={item.label}
                          className="relative group/sub"
                          onMouseEnter={() => hasSub && handleSubmenuEnter(item.label)}
                          onMouseLeave={() => {
                            // Submenu keeps open while in parent or flyout
                          }}
                        >
                          <Link
                            to={item.to || "#"}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-150"
                            style={{
                              color: isSubActive ? GREEN : T.muted,
                              background: isSubActive ? "var(--accent-soft-md)" : "transparent",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color = GREEN;
                              (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubActive) {
                                (e.currentTarget as HTMLElement).style.color = T.muted;
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                              }
                            }}
                            onClick={() => {
                              if (!hasSub) {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }
                            }}
                          >
                            <span>{item.label}</span>
                            {hasSub && (
                              <span
                                style={{
                                  color: isSubActive ? GREEN : T.faint,
                                  transform: isSubActive ? "translateX(2px)" : "none",
                                  transition: "transform 0.15s ease",
                                }}
                              >
                                <IconChevronRight />
                              </span>
                            )}
                          </Link>

                          {/* ── Invisible Bridge between Level 2 & Level 3 flyout ── */}
                          {hasSub && isSubActive && (
                            <div className="absolute top-0 right-0 -mr-2 w-3 h-full z-40" />
                          )}

                          {/* ── Flyout Panel (Level 3) ── */}
                          {hasSub && isSubActive && (
                            <div
                              className="absolute left-full top-0 ml-1.5 min-w-[260px] max-h-[70vh] overflow-y-auto rounded-2xl p-2 flex flex-col shadow-2xl z-50 animate-fadeIn"
                              style={{
                                background: T.glassDropdown,
                                backdropFilter: "blur(24px)",
                                WebkitBackdropFilter: "blur(24px)",
                                border: `1px solid ${T.border}`,
                              }}
                              onMouseEnter={() => handleSubmenuEnter(item.label)}
                            >
                              <div className="px-3 py-1.5 mb-1 border-b text-[10px] font-bold tracking-widest uppercase"
                                style={{ borderColor: T.borderSubtle, color: GREEN }}>
                                {item.label} PROGRAM
                              </div>
                              {item.subItems!.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  className="flex items-center px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-150"
                                  style={{ color: T.muted }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = GREEN;
                                    (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateX(3px)";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = T.muted;
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.transform = "none";
                                  }}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setActiveSubmenu(null);
                                  }}
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Right Controls (Language, Theme, Quote CTA) ── */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,25,47,0.07)",
              border: `1px solid ${T.border}`,
              color: isDark ? "rgba(255,255,255,0.8)" : "rgba(10,25,47,0.7)",
            }}
            aria-label="Switch Language"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>

          {/* Dark/Light Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,25,47,0.07)",
              border: `1px solid ${T.border}`,
              color: isDark ? "rgba(255,255,255,0.8)" : "rgba(10,25,47,0.7)",
            }}
            aria-label="Toggle Theme"
          >
            {isDark ? <IconSun /> : <IconMoon />}
          </button>

          {/* Request Quote Button */}
          <Link
            to="/quote"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 hover:scale-105 glow-btn cursor-pointer"
            style={{
              background: GREEN,
              color: "var(--on-accent)",
              boxShadow: "0 0 20px var(--accent-border-strong)",
            }}
          >
            {i.getQuote}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden p-2 rounded-full transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: T.muted }}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* ── Mobile Multi-Level Accordion Drawer ── */}
      {menuOpen && (
        <div
          className="mt-2 rounded-2xl p-3 flex flex-col gap-1 lg:hidden max-h-[82vh] overflow-y-auto shadow-2xl"
          style={{
            background: T.glassDropdown,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${T.border}`,
          }}
        >
          {navConfig.map((nav) => {
            const hasChildren = Boolean(nav.items && nav.items.length > 0);
            const isOpen = openMobile === nav.label;

            return (
              <div key={nav.label} className="rounded-xl overflow-hidden">
                {hasChildren ? (
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                    style={{
                      color: isOpen ? GREEN : T.fg,
                      background: isOpen ? "var(--accent-soft)" : "transparent",
                    }}
                    onClick={() => setOpenMobile(isOpen ? null : nav.label)}
                  >
                    <span>{nav.label}</span>
                    <span
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        display: "inline-flex",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <IconChevronDown />
                    </span>
                  </button>
                ) : (
                  <Link
                    to={nav.to || "/"}
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                    style={{ color: T.fg }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {nav.label}
                  </Link>
                )}

                {/* Level 2 items in mobile drawer */}
                {hasChildren && isOpen && (
                  <div className="pl-3 pr-1 py-1 flex flex-col gap-1 border-l-2 ml-4 my-1"
                    style={{ borderColor: "var(--accent-border)" }}>
                    {nav.items!.map((item) => {
                      const hasSub = Boolean(item.subItems && item.subItems.length > 0);
                      const isSubOpen = openMobileSub === item.label;

                      return (
                        <div key={item.label} className="rounded-lg overflow-hidden">
                          {hasSub ? (
                            <button
                              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold"
                              style={{
                                color: isSubOpen ? GREEN : T.muted,
                                background: isSubOpen ? "var(--accent-soft)" : "transparent",
                              }}
                              onClick={() => setOpenMobileSub(isSubOpen ? null : item.label)}
                            >
                              <span>{item.label}</span>
                              <span
                                style={{
                                  transform: isSubOpen ? "rotate(180deg)" : "rotate(0deg)",
                                  display: "inline-flex",
                                  transition: "transform 0.2s ease",
                                }}
                              >
                                <IconChevronDown />
                              </span>
                            </button>
                          ) : (
                            <Link
                              to={item.to || "#"}
                              className="flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                              style={{ color: T.muted }}
                              onClick={() => {
                                setMenuOpen(false);
                                setOpenMobile(null);
                                setOpenMobileSub(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          )}

                          {/* Level 3 items in mobile drawer */}
                          {hasSub && isSubOpen && (
                            <div className="pl-3 pr-1 py-1 flex flex-col gap-0.5 border-l-2 ml-3 my-0.5"
                              style={{ borderColor: "var(--accent-border-strong)" }}>
                              {item.subItems!.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  className="flex items-center px-3 py-1.5 rounded text-xs transition-colors"
                                  style={{ color: T.dim }}
                                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.dim)}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setOpenMobile(null);
                                    setOpenMobileSub(null);
                                  }}
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to="/quote"
            className="mt-3 flex justify-center py-3 rounded-full text-sm font-semibold glow-btn"
            style={{ background: GREEN, color: "var(--on-accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            {i.getQuote}
          </Link>
        </div>
      )}
    </nav>
  );
}
