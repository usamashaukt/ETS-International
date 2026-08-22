import React from "react"
import type { RouteType } from "@/types"

interface VersionSwitcherProps {
  currentRoute: RouteType
  onNavigate: (route: RouteType) => void
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({
  currentRoute,
  onNavigate,
}) => {
  return (
    <aside
      aria-label="Version Switcher"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl text-xs font-semibold text-white"
    >
      <button
        type="button"
        onClick={() => onNavigate("default")}
        className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
          currentRoute === "default"
            ? "bg-[#00FF66] text-[#050505] shadow-[0_0_12px_rgba(0,255,102,0.4)]"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        title="Default modern redesigned landing page (/)"
      >
        Redesign (Default)
      </button>
      <button
        type="button"
        onClick={() => onNavigate("legacy-ets")}
        className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
          currentRoute === "legacy-ets"
            ? "bg-[#00FF66] text-[#050505] shadow-[0_0_12px_rgba(0,255,102,0.4)]"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        title="Legacy screenshot content version (/legacy-ets)"
      >
        Legacy Text (/legacy-ets)
      </button>
    </aside>
  )
}

export default VersionSwitcher
