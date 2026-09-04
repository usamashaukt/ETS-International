import { useState } from "react";
import { Link } from "react-router";
import etsLogo from "@/imports/ets-logo.png";
import { T } from "@/lib/theme";
import { useTheme } from "@/lib/store";

export default function Footer() {
  const { i } = useTheme();
  const [email, setEmail] = useState("");

  return (
    <footer className="px-6 pt-16 pb-8" style={{ background: T.footer, borderTop: `1px solid ${T.borderSubtle}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={etsLogo} alt="ETS International" className="h-10 object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Environmental Technologies Solutions — pioneering biodegradable cleaning chemistry for critical industrial applications since 1994.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "REACH", "RoHS", "EASA"].map((cert) => (
                <span key={cert} className="px-2.5 py-1 rounded text-xs font-semibold tracking-wider"
                  style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {[
            { heading: "Products", links: [
              { label: "AquaSmarter™", to: "/technology/aquasmarter" },
              { label: "Nano Diamond™", to: "/technology/nano-diamond" },
              { label: "Aviation Products", to: "/products/aviation" },
              { label: "Industrial Products", to: "/products/industrial" },
              { label: "Disinfection", to: "/disinfection" },
            ]},
            { heading: "Industries", links: [
              { label: "Aviation", to: "/industries/aviation" },
              { label: "Marine & Offshore", to: "/industries/marine" },
              { label: "Industrial & Metal", to: "/industries/industrial" },
              { label: "HACCP / Food Safety", to: "/industries/haccp" },
              { label: "Disinfection", to: "/disinfection" },
            ]},
            { heading: "Company", links: [
              { label: "About ETS", to: "/about" },
              { label: "Leadership", to: "/leadership" },
              { label: "Certifications", to: "/certifications" },
              { label: "Contact", to: "/contact" },
              { label: "Get a Quote", to: "/quote" },
              { label: "Legacy ETS Site", to: "/legacy-ets" },
            ]},
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#fff"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div>
            <h4 className="font-bold text-base mb-1 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Technical bulletins & product updates</h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Subscribe for regulatory news, SDS updates, and new product launches.</p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => { e.preventDefault(); setEmail(""); }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm outline-none transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "white", caretColor: "#00FF66" }}
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(0,255,102,0.4)"; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
            />
            <button type="submit" className="px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-all duration-200 hover:scale-105"
              style={{ background: "#00FF66", color: "#050505" }}>
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2026 ETS International. All rights reserved. Environmental Technologies Solutions Ltd.</p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((link) => (
              <a key={link} href="#" className="text-xs transition-colors duration-200" style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
