import type { ReactNode } from "react";

/* ─── Theme & Localization Types ─── */
export type ThemeMode = "dark" | "light";
export type Lang = "en" | "de";

export interface Translations {
  getQuote: string;
  heroBody: string;
  heroCta1: string;
  heroCta2: string;
  industryTitle: string;
  aviation: string;
  aviationSub: string;
  aviationDesc: string;
  aviationCta: string;
  industrial: string;
  industrialSub: string;
  industrialDesc: string;
  marine: string;
  marineSub: string;
  marineDesc: string;
  haccp: string;
  haccpSub: string;
  haccpDesc: string;
  haccpCta: string;
  whySubtitle: string;
  footerTagline: string;
}

export interface ThemeContextType {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  lang: Lang;
  setLang: (v: Lang) => void;
  i: Translations;
}

/* ─── Navigation Types ─── */
export interface NavSubItem {
  label: string;
  to: string;
}

export interface NavDropdownItem {
  label: string;
  to?: string;
  hasFlyout?: boolean;
  subItems?: NavSubItem[];
}

export interface NavTopItem {
  label: string;
  to?: string;
  items?: NavDropdownItem[];
}

/* ─── Subpage Data Types ─── */
export interface SubpageFeature {
  title: string;
  description: string;
  highlight?: string;
}

export interface SubpageSpecification {
  label: string;
  value: string;
}

export interface SubpageInfo {
  slug: string;
  category: string;
  parentMenu: string;
  parentSlug?: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  overview: string;
  features: SubpageFeature[];
  specifications: SubpageSpecification[];
  applications: string[];
  certifications: string[];
  metaTitle?: string;
}

/* ─── Common UI Types ─── */
export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export interface TrustLogo {
  name: string;
  sub: string;
}

export interface AdvantageItem {
  icon: ReactNode;
  title: string;
  desc: string;
}
