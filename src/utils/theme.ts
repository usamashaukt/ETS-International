import type { ThemeMode } from "@/types"

export const themeTokens = {
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

export function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true
  const stored = localStorage.getItem("ets-theme")
  if (stored) {
    return stored === "dark"
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function applyTheme(isDark: boolean): void {
  if (typeof document === "undefined") return
  const mode: ThemeMode = isDark ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", mode)
  localStorage.setItem("ets-theme", mode)
}
