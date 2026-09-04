import { useState } from "react";
import { Link } from "react-router";
import etsLogo from "@/imports/ets-logo.png";
import { T, GREEN } from "@/lib/theme";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="px-6 pt-16 pb-8" style={{ background: T.footer, borderTop: `1px solid ${T.borderSubtle}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={etsLogo} alt="ETS International" className="h-10 object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Environmental Technologies Solutions — pioneering certified biodegradable cleaning chemistry for critical aviation, maritime, and industrial applications since 1994.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "REACH", "RoHS", "EASA", "NATO NSN"].map((cert) => (
                <span key={cert} className="px-2.5 py-1 rounded text-xs font-semibold tracking-wider"
                  style={{ background: T.certBg, border: `1px solid ${T.certBorder}`, color: T.certText }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {[
            {
              heading: "Products",
              links: [
                { label: "Commercial Aviation", to: "/commercial-aviation-industry" },
                { label: "Military Aviation", to: "/military-aviation-industry" },
                { label: "Metal & Paint Workshop", to: "/metal-paint-workshop" },
                { label: "Refineries & Gas", to: "/refineries-gas-pipelines" },
                { label: "HACCP Food Safety", to: "/haccp-product" },
              ],
            },
            {
              heading: "Disinfection",
              links: [
                { label: "AquaSmarter™ Ionization", to: "/water-treatment-introduction" },
                { label: "Water Technical Data", to: "/water-treatment-information" },
                { label: "FOG-IT INNOVA™", to: "/fog-it" },
                { label: "Desi Box Sterilizer", to: "/desi-box" },
                { label: "Nano Diamond™", to: "/technology/nano-diamond" },
              ],
            },
            {
              heading: "Restoration",
              links: [
                { label: "Eco Safe Air Blaster", to: "/eco-safe-air-blaster" },
                { label: "Bio-Deruster & Stripper", to: "/bioderuster" },
                { label: "Cleaning Accessories", to: "/cleaning-accessories" },
                { label: "Aviation Services", to: "/aviation-services" },
                { label: "New Technologies", to: "/new-technologies" },
              ],
            },
            {
              heading: "Company",
              links: [
                { label: "About ETS", to: "/about" },
                { label: "Why ETS International", to: "/why-ets" },
                { label: "Leadership", to: "/leadership" },
                { label: "Certifications", to: "/certifications" },
                { label: "Headquarters Location", to: "/location" },
                { label: "Get a Quote", to: "/quote" },
                { label: "Legacy German Site", to: "/legacy-ets" },
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs sm:text-sm transition-colors duration-200 block"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Bulletin Newsletter */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <h4 className="font-bold text-base mb-1 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Technical bulletins & regulatory chemical dossiers
            </h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Subscribe for European regulatory news, SDS updates, and new OEM formulation approvals.
            </p>
          </div>
          {subscribed ? (
            <div className="px-5 py-2.5 rounded-full text-xs font-semibold" style={{ background: T.certBg, color: GREEN, border: `1px solid ${T.certBorder}` }}>
              ✓ Subscribed to technical updates
            </div>
          ) : (
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                required
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "white", caretColor: GREEN }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(0,255,102,0.4)")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ background: GREEN, color: "#050505" }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Legal Imprint & Copyright */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 ETS International UG (haftungsbeschränkt) · HRB 88478 Registergericht Köln, Germany.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Impressum"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
