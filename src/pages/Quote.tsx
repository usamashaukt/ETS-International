import { useState } from "react";
import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/lib/theme";
import { useTheme } from "@/lib/store";
import { IconArrowRight, IconShield, IconLeaf, IconCheck } from "@/lib/icons";

const industries = ["Aviation & Aerospace", "Marine & Offshore", "Industrial & Metal", "HACCP / Food Safety", "Disinfection", "Defence", "Other"];
const applications = [
  "Aircraft Exterior Cleaning", "Engine & Nacelle Cleaning", "Landing Gear Degreasing",
  "Industrial Degreasing", "Metal Surface Preparation", "Food Production Facility",
  "Marine Hull Cleaning", "Engine Room Degreasing", "Disinfection / Fogging",
  "Surface Protection / Coating", "Nano Diamond Lubrication", "Other",
];
const products = [
  "AquaSmarter™", "Nano Diamond™", "ETS AviClean", "ETS Degreaser Pro",
  "ETS MarineClean", "ETS FoodSafe", "FOG-IT INNOVA", "C2 Coating System", "Not sure — advise me",
];
const countries = [
  "United Kingdom", "Netherlands", "Germany", "France", "Belgium", "UAE", "Saudi Arabia",
  "South Africa", "Singapore", "Australia", "United States", "Canada", "Other",
];

export default function Quote() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    industry: "", application: "", product: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    background: T.inputBg,
    border: `1px solid ${T.inputBorder}`,
    color: T.fg,
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    transition: "border-color 0.2s",
  };

  if (sent) {
    return (
      <div style={{ background: T.bg, minHeight: "100vh" }} className="flex flex-col items-center justify-center px-6 py-32">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{ background: "rgba(0,255,102,0.1)", border: "2px solid rgba(0,255,102,0.3)" }}>
          <span style={{ color: GREEN, fontSize: "36px" }}>✓</span>
        </div>
        <h2 className="text-4xl font-black mb-4 text-center" style={{ fontFamily: JK, color: T.fg }}>Quote request received.</h2>
        <p className="text-lg mb-8 text-center max-w-md" style={{ color: T.muted }}>Our team will review your requirements and respond within one business day with product recommendations and pricing.</p>
        <Link to="/" className="glow-btn px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2" style={{ background: GREEN, color: "#050505" }}>
          Return to Home <IconArrowRight />
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: T.bg, color: T.fg, fontFamily: "'Inter', sans-serif" }}>
      <div className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}>
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,102,0.1) 0%, transparent 70%)", opacity: isDark ? 0.6 : 0.3 }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#00FF66]" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN }}>Get a Quote</span>
            <div className="h-px w-10 bg-[#00FF66]" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6" style={{ fontFamily: JK, color: T.fg }}>
            Tell us what you need to clean.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: T.muted }}>
            Our technical team will identify the right ETS solution for your application and provide a tailored quote — typically within one business day.
          </p>
        </div>
      </div>

      <section className="py-16 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <IconShield />, title: "Free Technical Advice", desc: "Our specialists will recommend the right product for your specific application." },
              { icon: <IconLeaf />, title: "Free Sample Kits", desc: "Try before you buy — sample kits are available for most ETS product lines." },
              { icon: <IconCheck />, title: "Full Documentation", desc: "SDS, TDS, certifications, and HACCP documentation supplied with all quotes." },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ fontFamily: JK, color: T.fg }}>{b.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 sm:p-10" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
            <h2 className="text-2xl font-black mb-8" style={{ fontFamily: JK, color: T.fg }}>Your Quote Request</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: "name", label: "Full Name", placeholder: "John Smith", type: "text", required: true },
                  { key: "company", label: "Company", placeholder: "Your Company Ltd.", type: "text", required: true },
                  { key: "email", label: "Email Address", placeholder: "john@company.com", type: "email", required: true },
                  { key: "phone", label: "Phone Number", placeholder: "+1 234 567 890", type: "tel", required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>
                      {field.label} {field.required && <span style={{ color: GREEN }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={(form as any)[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: "country", label: "Country", options: countries },
                  { key: "industry", label: "Industry", options: industries },
                  { key: "application", label: "Application / Use Case", options: applications },
                  { key: "product", label: "Product of Interest", options: products },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>{field.label}</label>
                    <select
                      value={(form as any)[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    >
                      <option value="">Select...</option>
                      {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>
                  Additional Information <span style={{ color: GREEN }}>*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your cleaning application, current products in use, volume requirements, or any specific technical requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                />
              </div>

              <button type="submit" className="glow-btn w-full py-5 rounded-full font-bold text-base transition-all duration-200 hover:scale-[1.02]"
                style={{ background: GREEN, color: "#050505", boxShadow: "0 0 30px rgba(0,255,102,0.35)" }}>
                Request My Quote →
              </button>
              <p className="text-xs text-center" style={{ color: T.dim }}>
                We respond to all quote requests within one business day. Free samples available for qualified applications.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
