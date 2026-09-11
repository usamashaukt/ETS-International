import { T, JK, GREEN } from "@/theme";
import { PageHero, SectionHeader, CtaBanner } from "@/components/shared";

const team = [
  {
    name: "Jahangir A.B. Mirza",
    title: "CEO / Founder",
    email: "j.mirza@etsint.de",
    phone: "+49 (0) 176 84294205",
  },
  {
    name: "Aisha Insibat Mirza",
    title: "Director Global Business & Management",
    email: "am@etsint.de",
    phone: "+49 (0) 176 84294205",
  },
  {
    name: "Ralf Brehm",
    title: "GF / MD-Partner",
    email: "rb@etsint.de",
    phone: "+49 (0) 176 84294205",
  },
  {
    name: "Bernd Brehm",
    title: "Director Finances — CFO",
    email: "b.brehm@etsint.de",
    phone: "+49 (0) 179 5848462",
  },
  {
    name: "Brig. (R) Saeed Zafar Dar",
    title: "Director Sales Defence",
    email: "sdar@etsint.de",
    phone: "+92 321 5139139",
  },
  {
    name: "Peter Crols",
    title: "Director Engineering",
    email: "p.crols@etsint.de",
    phone: "+32 (0) 486 642557",
  },
  {
    name: "Friedrich Bauer",
    title: "Director Engineering / Projects",
    email: "f.bauer@etsint.de",
    phone: "+49 (0) 175 7384310",
  },
  {
    name: "Mohammad Amjad Saleem",
    title: "Director Engineering — Projects",
    email: "as@etsint.de",
    phone: "+92 302 2674127",
  },
  {
    name: "Mohammad Osama Mubasher",
    title: "Director Media & Strategic Marketing",
    email: "m.osama@etsint.de",
    phone: "+49 (0) 175 7384310",
  },
  {
    name: "Mirza Munawar Waheed",
    title: "Director Global Strategic Planning",
    email: "mw@etsint.de",
    phone: "+92 331 4576655",
  },
  {
    name: "Murad J. Mirza",
    title: "Director Controlling & Business Lawyer",
    email: "mm@etsint.de",
    phone: "+49 (0) 175 7384310",
  },
  {
    name: "Farhana M. Mirza",
    title: "Manager Admin & HR",
    email: "fm@etsint.de",
    phone: "+49 1573 6766493",
  },
];

function initials(name: string) {
  return name
    .replace(/\(R\)/g, "")
    .split(/\s+/)
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Experts in the field."
        accent="field."
        subtitle="We operate within the spirit and letter of the law, maintaining high ethical standards wherever we conduct business."
        imgUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop&auto=format"
        minHeight="min-h-[55vh]"
      />

      <section className="py-24 px-6" style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Team"
            title="Leadership."
            subtitle="We actively seek business relationships with partners who share our values and promote the application of these high standards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {team.map((person) => (
              <div
                key={person.email}
                className="bento-card rounded-2xl border p-5 transition-all duration-300"
                style={{ borderColor: T.border, background: T.glassCard }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{
                      background: "var(--accent-soft)",
                      border: "1px solid var(--accent-border)",
                      color: GREEN,
                      fontFamily: JK,
                    }}
                  >
                    {initials(person.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: JK, color: T.fg }}>
                      {person.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: GREEN }}>
                      {person.title}
                    </p>
                    <a
                      href={`mailto:${person.email}`}
                      className="block text-xs mb-1 hover:underline"
                      style={{ color: T.muted }}
                    >
                      {person.email}
                    </a>
                    <a href={`tel:${person.phone.replace(/[^\d+]/g, "")}`} className="block text-xs" style={{ color: T.dim }}>
                      {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Work with our team."
        accent="our team."
        subtitle="Our specialists are available to discuss your specific cleaning and maintenance requirements."
        ctaPrimary={{ label: "Contact Us", to: "/contact" }}
        ctaSecondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
