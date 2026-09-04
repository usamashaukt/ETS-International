import { useState } from "react";
import { Link } from "react-router";
import { T, JK, GREEN, CYAN } from "@/theme";
import { PageHero, SectionHeader } from "@/components/shared";
import { IconMail, IconPhone, IconMapPin, IconGlobe, IconArrowRight } from "@/components/icons";

const industries = ["Aviation & Aerospace", "Marine & Offshore", "Industrial & Metal", "HACCP / Food Safety", "Disinfection", "Defence", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", industry: "", product: "", message: "" });
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

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's create a cleaner way forward."
        accent="cleaner way forward."
        subtitle="Speak with our technical and sales teams about a solution for your industry."
        imgUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop&auto=format"
        minHeight="min-h-[50vh]"
      />

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div>
              <SectionHeader eyebrow="Get in Touch" title="Our team is ready to help." />
              <div className="space-y-6 mt-4">
                {[
                  { icon: <IconMail />, label: "Email", value: "info@etsint.eu", href: "mailto:info@etsint.eu" },
                  { icon: <IconPhone />, label: "Phone", value: "+31 (0) 10 000 0000", href: "tel:+31100000000" },
                  { icon: <IconGlobe />, label: "Website", value: "etsint.eu", href: "https://etsint.eu" },
                  { icon: <IconMapPin />, label: "Headquarters", value: "Rotterdam, Netherlands", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-start gap-4 group"
                    style={{ color: T.muted }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: "rgba(0,255,102,0.07)", border: "1px solid rgba(0,255,102,0.15)", color: GREEN }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wider uppercase mb-0.5" style={{ color: T.dim }}>{item.label}</div>
                      <div className="text-sm font-medium group-hover:text-[#00FF66] transition-colors duration-200" style={{ color: T.fg }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
                <h4 className="font-bold text-sm mb-3" style={{ fontFamily: JK, color: T.fg }}>Quick Quote</h4>
                <p className="text-xs leading-relaxed mb-4" style={{ color: T.muted }}>
                  Need a price? Use our dedicated quote page for faster response.
                </p>
                <Link to="/quote" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: GREEN }}>
                  Get a Quote <IconArrowRight />
                </Link>
              </div>

              <div className="mt-4 p-5 rounded-2xl" style={{ background: T.glassCard, border: `1px solid ${T.border}` }}>
                <h4 className="font-bold text-sm mb-3" style={{ fontFamily: JK, color: T.fg }}>Documentation</h4>
                <p className="text-xs leading-relaxed mb-4" style={{ color: T.muted }}>
                  Need SDS, TDS, or certification documents? Contact our regulatory team.
                </p>
                <Link to="/certifications" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: CYAN }}>
                  View Certifications <IconArrowRight />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(0,255,102,0.1)", border: "1px solid rgba(0,255,102,0.3)" }}>
                    <span style={{ color: GREEN, fontSize: "28px" }}>✓</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ fontFamily: JK, color: T.fg }}>Message received.</h3>
                  <p className="text-base mb-6 max-w-sm" style={{ color: T.muted }}>Our team will respond within one business day. Thank you for contacting ETS International.</p>
                  <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: GREEN }}>
                    Return to Home <IconArrowRight />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>Industry</label>
                    <select
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>Product / Solution of Interest</label>
                    <input
                      type="text"
                      placeholder="e.g. AquaSmarter, Aviation Cleaner..."
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: T.dim }}>Message <span style={{ color: GREEN }}>*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your application, current cleaning challenges, or what you're looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,255,102,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    />
                  </div>

                  <button type="submit" className="glow-btn w-full py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: GREEN, color: "#050505" }}>
                    Send Message
                  </button>
                  <p className="text-xs text-center" style={{ color: T.dim }}>
                    We respond to all enquiries within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
