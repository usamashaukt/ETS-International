/**
 * Centralized Theme Tokens for ETS International
 * Maps CSS variables defined in src/index.css to reusable constants.
 *
 * Light = Rhine Industrial (#1)
 * Dark  = Cologne Night (#4)
 */

export const T = {
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
  accentSoft: "var(--accent-soft)",
  accentSoftMd: "var(--accent-soft-md)",
  accentBorder: "var(--accent-border)",
  accentBorderStrong: "var(--accent-border-strong)",
  cyanSoft: "var(--cyan-soft)",
  cyanBorder: "var(--cyan-border)",
  sectionInset: "var(--section-inset)",
} as const;

/** Primary accent — forest (light) / mint (dark) */
export const GREEN = "var(--accent)";
/** Secondary accent — steel blue (light) / soft cyan (dark) */
export const CYAN = "var(--accent-secondary)";
/** Text/icon color on solid accent buttons */
export const ON_ACCENT = "var(--on-accent)";
export const DARK_BG = "var(--bg)";
export const JK = "'Plus Jakarta Sans', sans-serif";

export type ThemeTokens = typeof T;
