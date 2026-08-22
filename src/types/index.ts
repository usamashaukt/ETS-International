/* ─── Shared TypeScript Types & Interfaces ─── */

export type ThemeMode = "dark" | "light"

export interface NavSubItem {
  label: string
  hasArrow?: boolean
}

export interface NavItem {
  label: string
  items?: NavSubItem[]
}

export interface TrustLogo {
  name: string
  sub: string
}

export interface StatItem {
  val: string
  label: string
}

export interface ToxicReplacement {
  toxic: string
  ets: string
}

export interface AdvantageItem {
  title: string
  desc: string
  icon: React.ReactNode
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
}

export type RouteType = "default" | "legacy-ets"
