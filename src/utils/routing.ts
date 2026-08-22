import type { RouteType } from "@/types"

/**
 * Determines whether the current window location corresponds to the legacy ETS page.
 */
export function isLegacyRoute(): boolean {
  if (typeof window === "undefined") return false
  const path = window.location.pathname.toLowerCase()
  const hash = window.location.hash.toLowerCase()
  const search = window.location.search.toLowerCase()

  return (
    path.includes("legacy-ets") ||
    hash.includes("legacy-ets") ||
    search.includes("legacy-ets")
  )
}

/**
 * Navigates to the specified route using browser history.
 */
export function navigateTo(route: RouteType): void {
  if (typeof window === "undefined") return
  if (route === "legacy-ets") {
    window.history.pushState({}, "", "/legacy-ets")
  } else {
    window.history.pushState({}, "", "/")
  }
  window.scrollTo({ top: 0, behavior: "smooth" })
}
