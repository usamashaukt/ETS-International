import { useState, useEffect } from "react"
import RedesignLanding from "@/pages/RedesignLanding"
import LegacyEts from "@/pages/LegacyEts"
import { isLegacyRoute } from "@/utils/routing"
import type { RouteType } from "@/types"

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteType>(
    isLegacyRoute() ? "legacy-ets" : "default",
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(isLegacyRoute() ? "legacy-ets" : "default")
    }

    window.addEventListener("popstate", handleLocationChange)
    window.addEventListener("hashchange", handleLocationChange)

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      window.removeEventListener("hashchange", handleLocationChange)
    }
  }, [])

  return (
    <>
      {currentRoute === "legacy-ets" ? <LegacyEts /> : <RedesignLanding />}
    </>
  )
}
