import type { SubpageInfo } from "./subpagesData";

const HERO = {
  industrial: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&fit=crop&auto=format",
  aviation: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1600&fit=crop&auto=format",
  food: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1600&fit=crop&auto=format",
  hospitality: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&fit=crop&auto=format",
  medical: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&fit=crop&auto=format",
  marine: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1600&fit=crop&auto=format",
  truck: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&fit=crop&auto=format",
  tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&fit=crop&auto=format",
  partner: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&fit=crop&auto=format",
  facility: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fit=crop&auto=format",
};

type Feat = [string, string, string?];

function page(input: {
  slug: string;
  category: string;
  parentMenu: string;
  parentSlug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  overview: string;
  features: Feat[];
  specifications?: [string, string][];
  applications: string[];
  certifications?: string[];
}): SubpageInfo {
  return {
    slug: input.slug,
    category: input.category,
    parentMenu: input.parentMenu,
    parentSlug: input.parentSlug,
    title: input.title,
    subtitle: input.subtitle,
    badge: input.badge,
    heroImage: input.heroImage,
    overview: input.overview,
    features: input.features.map(([title, description, highlight]) => ({
      title,
      description,
      highlight,
    })),
    specifications: (input.specifications || [
      ["Formulation Base", "Water-based biodegradable concentrate"],
      ["VOC Content", "0 g/L (solvent-free where specified)"],
      ["Biodegradability", "OECD-aligned bio chemistry"],
      ["Origin", "ETS International · Cologne, Germany"],
    ]).map(([label, value]) => ({ label, value })),
    applications: input.applications,
    certifications: input.certifications || ["REACH", "ISO 9001:2015", "Biodegradable"],
  };
}

/** Pages scraped from etsint.de and adapted to the redesign SubpageTemplate. */
export const etsDePagesData: Record<string, SubpageInfo> = {
  /* ─── Industry pages ─── */
  facilities: page({
    slug: "facilities",
    category: "Industrial & Facilities",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Facilities Cleaning Solutions",
    subtitle: "HACCP-grade cleaners and disinfectors for commercial and industrial facilities.",
    badge: "HACCP · ALCOHOL-FREE · BIODEGRADABLE",
    heroImage: HERO.facility,
    overview:
      "Cleaner and Disinfector (HACCP | Alcohol Free) is a combined degreaser and disinfectant of very high quality in accordance with HACCP. It can be used on all kinds of surfaces, equipment and materials which can come in contact with food and liquids. ETS facilities programmes also cover Composite Panel Universal Cleaner for Alucobond and composite façades, water-based Graffiti Remover that protects underlying paint, Glass Cleaner HACCP concentrate, Grease Cleaner & Remover, and Composite Panel Cleaner Extra for white ACP panels.",
    features: [
      ["Alcohol-Free Cleaner & Disinfector", "Combined degreaser and disinfectant for food-contact surfaces with many dilution options.", "HACCP aligned"],
      ["Composite Panel Systems", "Powerful ecological cleaners for shiny and matte Composite-Panel / Alucobond surfaces via bucket or spray.", "Façade-safe"],
      ["Graffiti Remover", "Clears graffiti and overspray without damaging original paint — clear, biodegradable, mild odour.", "Water-based technology"],
    ],
    applications: [
      "Commercial facility hard-surface programmes",
      "Composite façade and Alucobond maintenance",
      "Food-contact area daily sanitation",
    ],
    certifications: ["HACCP", "REACH", "ISO 9001:2015"],
  }),

  "gastronomy-hotel-restaurant": page({
    slug: "gastronomy-hotel-restaurant",
    category: "Hospitality & Food Service",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Gastronomy | Hotel | Restaurant",
    subtitle: "Kitchen, sanitary and floor chemistry for hotels, restaurants and catering.",
    badge: "HACCP · KITCHEN SAFE · SOLVENT-FREE",
    heroImage: HERO.hospitality,
    overview:
      "ETS hospitality chemistry covers Cleaner and Disinfector (HACCP | Alcohol Free), Kitchen Grease Cleaner & Remover for hoods, floors, walls, tiles and stainless steel, Multicleaner HACCP for daily interior use, Oven and Grill Cleaner for all grilling brands and ovens, WC Cleaner HACCP | Sanipower for sanitary places, and Floor Shine concentrated universal floor cleaner for industrial floors, tiles and vinyl.",
    features: [
      ["Kitchen Grease Remover", "Deep degreaser for hoods, floors, walls and stainless steel that leaves no residue.", "No residue finish"],
      ["Sanipower Sanitary Range", "Concentrate for plastic, PVC, stone, ceramic, steel, nickel and brass sanitary areas — removes scale and fights bacteria.", "100% solvent-free"],
      ["Floor Shine", "Concentrated universal floor cleaner that leaves a nice shine and fresh smell after use.", "Tiles & vinyl ready"],
    ],
    applications: [
      "Hotel and restaurant kitchens",
      "Catering and canteen hygiene",
      "Public sanitary and floor maintenance",
    ],
    certifications: ["HACCP", "REACH", "ISO 9001:2015"],
  }),

  "medical-equipment-hospital": page({
    slug: "medical-equipment-hospital",
    category: "Healthcare & Pharmaceutical",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Medical Equipment | Hospital | Pharmaceutical",
    subtitle: "Surface cleaning and disinfection for clinical and pharmaceutical environments.",
    badge: "HOSPITAL · HACCP · SOLVENT-FREE",
    heroImage: HERO.medical,
    overview:
      "Medical Equipment | Hospital | Pharmaceutical Products from ETS include Cleaner and Disinfector (HACCP | Alcohol Free), Economic Universal for powerful cleaning and degreasing, Multicleaner HACCP for interiors, solvent-free Floor Cleaner with citrus fragrance for grease and mineral oil pollution, and WC Cleaner HACCP | Sanipower for sanitary places.",
    features: [
      ["Clinical Surface Disinfection", "Alcohol-free cleaner and disinfector for surfaces and equipment that may contact liquids or food.", "Flexible dilution"],
      ["Economic Universal", "Very powerful universal cleaner for all possible cleaning and degreasing operations.", "High-performance concentrate"],
      ["Sanitary & Floor Care", "Sanipower and floor cleaners for basins, lavatories, walls and resistant flooring.", "Bacteria-targeted action"],
    ],
    applications: [
      "Hospital ward and theatre support cleaning",
      "Pharmaceutical production hygiene",
      "Medical equipment surface preparation",
    ],
    certifications: ["HACCP", "ISO 13485", "REACH"],
  }),

  "machines-excavator-caterpillar": page({
    slug: "machines-excavator-caterpillar",
    category: "Heavy Equipment",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Machines | Excavator | Caterpillar",
    subtitle: "Heavy-equipment degreasing, hydraulic fluid removal and engine efficiency chemistry.",
    badge: "HEAVY DUTY · AMS 1526B · BIODEGRADABLE",
    heroImage: HERO.industrial,
    overview:
      "Machines | Excavator | Caterpillar Products include Economic Universal, Pressure Cleaner for universal cleaning and degreasing, Hydraulic Cleaner | Remover (AHFR) based on fatty ester and approved for AMS-1526B by SMI Inc. Miami (non-toxic, non-flammable, no phosphates, high biodegradability tested by TNO Delft), Floor Cleaner for grease and mineral oil, and NanoVit / OptiMotor programmes targeting oil life, emissions reduction and fuel savings.",
    features: [
      ["Hydraulic Fluid Remover (AHFR)", "Fatty-ester mix-blend cleaner that quickly de-emulsifies oil and water — AMS 1526B tested.", "Non-dangerous preparation"],
      ["Pressure & Universal Cleaners", "Specific additives for broad cleaning and degreasing on heavy machinery.", "Universal employability"],
      ["OptiMotor Efficiency Trials", "Protocol-based fuel, emissions and oil-life validation for truck and plant fleets.", ">5% fuel / >10% emissions targets"],
    ],
    applications: [
      "Excavator and caterpillar maintenance",
      "Hydraulic system decontamination",
      "Heavy plant workshop degreasing",
    ],
    certifications: ["AMS 1526B", "TNO Delft biodegradable", "REACH"],
  }),

  "food-industry-and-agriculture": page({
    slug: "food-industry-and-agriculture",
    category: "Food & Agriculture",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Food Industry | Agriculture",
    subtitle: "HACCP cleaning chemistry for food production, packhouses and agricultural operations.",
    badge: "HACCP · NSF-READY · SOLVENT-FREE",
    heroImage: HERO.food,
    overview:
      "Food Industry | Agriculture programmes use Cleaner and Disinfector (HACCP | Alcohol Free), Economic Universal, Multicleaner HACCP, Floor Cleaner, WC Cleaner HACCP | Sanipower, and NONSOLAr 6 — a heavy-duty solvent-free cleaner with light corrosion inhibitor for ferro and non-ferro parts, crude oils, grease deposits and carbonaceous residues in tool shops and production.",
    features: [
      ["HACCP Cleaner & Disinfector", "Combined degreaser and disinfectant for food-contact surfaces and liquids handling.", "Alcohol-free"],
      ["NONSOLAr 6 Process Cleaner", "Ready-to-use solvent-free cleaner designed for cleaning units with longer bath life.", "Ferro & non-ferro safe"],
      ["Facility Hygiene Stack", "Multicleaner, floor and sanitary concentrates for daily food-plant hygiene.", "Pleasant fragrance options"],
    ],
    applications: [
      "Food processing plant clean-downs",
      "Agricultural equipment degreasing",
      "Packhouse and cold-store sanitation",
    ],
    certifications: ["HACCP", "REACH", "ISO 9001:2015"],
  }),

  "corrosion-prevention": page({
    slug: "corrosion-prevention",
    category: "Surface Restoration",
    parentMenu: "Derusting & Paint Stripping",
    parentSlug: "/bioderuster",
    title: "Corrosion Prevention",
    subtitle: "Rust protection, selective chelation derusting and solvent-free industrial cleaners.",
    badge: "ACTAN 3F · BIO-DERUSTER · NONSOLAR",
    heroImage: HERO.industrial,
    overview:
      "Corrosion Prevention from ETS centres on Actan 3F ready-to-use rust protection — one water-based layer can protect metal for up to 10 years and can be overpainted. Bio-Deruster removes iron oxide by selective chelation with typically non-hazardous waste and 2–4 weeks temporary protection after dipping. NONSOLAr 1 provides heavy-duty solvent-free cleaning with light corrosion inhibition for industrial maintenance.",
    features: [
      ["Actan 3F Rust Protect", "One water-based layer before painting protects metals for up to 10 years.", "Paintable finish"],
      ["Selective Chelation Derusting", "Dissolves iron oxide; waste often non-hazardous with garden-fertilizer potential.", "Re-usable bath"],
      ["NONSOLAr Maintenance Cleaners", "Solvent-free industrial cleaners with light corrosion inhibitor for ferro and non-ferro.", "Replaces aromatic solvents"],
    ],
    applications: [
      "Pre-paint rust conversion and protection",
      "Production-line temporary corrosion control",
      "Industrial maintenance degreasing",
    ],
    certifications: ["REACH", "OECD biodegradable", "ISO 9001:2015"],
  }),

  /* ─── Co-partners ─── */
  "nanovit-optimotor": page({
    slug: "nanovit-optimotor",
    category: "Co-Partners & Technology",
    parentMenu: "Co-Partners",
    parentSlug: "/co-partners",
    title: "NanoVit / OptiMotor",
    subtitle: "Engine oil additive programme for longer oil life, lower emissions and fuel savings.",
    badge: "CO-PARTNER · FLEET TRIAL PROTOCOL",
    heroImage: HERO.partner,
    overview:
      "NanoVit / OptiMotor is offered via a monitored fleet trial protocol: add to 2–4 trucks at next scheduled servicing. Success factor 1 — engine oil life remains within as-new specification for 10,000 km or 200 operating hours. Success factor 2 — average emissions reduction before and after OptiMotor >10%. Success factor 3 — average fuel consumption reduction over the period >5%.",
    features: [
      ["Oil Life Retention", "Keeps oil within as-new specification for 10,000 km or 200 operating hours.", "Measured protocol"],
      ["Emissions Reduction", "Target average emissions reduction greater than 10% after treatment.", ">10% emissions"],
      ["Fuel Economy", "Target average fuel consumption reduction greater than 5% over the trial period.", ">5% fuel savings"],
    ],
    applications: [
      "Commercial truck fleet trials",
      "Heavy equipment servicing programmes",
      "Emission and fuel-economy validation",
    ],
    certifications: ["Partner technology", "Fleet protocol validated"],
  }),

  "barrel-cleaner": page({
    slug: "barrel-cleaner",
    category: "Co-Partners & Equipment",
    parentMenu: "Co-Partners",
    parentSlug: "/co-partners",
    title: "Barrel Cleaning System",
    subtitle: "Airnesco barrel cleaning equipment developed with Royal Navy and British Army support.",
    badge: "CO-PARTNER · DEFENCE PROVEN",
    heroImage: HERO.partner,
    overview:
      "The Airnesco Barrel Cleaning System has been tirelessly tested and developed with the help of the Royal Navy and British Army and has saved the forces countless man hours and hundreds of thousands of pounds. The equipment and its application is continuously updated to meet doctrinal and logistical requirements and is now sold worldwide.",
    features: [
      ["Defence-Proven Development", "Tested with Royal Navy and British Army operational requirements.", "Force-validated"],
      ["Man-Hour Savings", "Dramatically reduces manual barrel cleaning time and cost.", "Logistics ready"],
      ["Global Deployment", "Continuously updated and in operation across the globe.", "Worldwide supply"],
    ],
    applications: [
      "Military small-arms barrel maintenance",
      "Defence logistics cleaning programmes",
      "Industrial precision tube cleaning",
    ],
    certifications: ["Defence partner technology"],
  }),

  icx2: page({
    slug: "icx2",
    category: "Co-Partners & Coatings",
    parentMenu: "Co-Partners",
    parentSlug: "/co-partners",
    title: "IXCA Ceramics (ACS3000)",
    subtitle: "German ceramic coating system for extreme heat resistance and long-term surface protection.",
    badge: "MADE IN GERMANY · 3–10 YEAR LIFE",
    heroImage: HERO.tech,
    overview:
      "IXCA Ceramics is an all-surfaces coating system for enthusiasts and professional detailers with 3–10 years lifetime and 850 to 1500°C heat resistance, made in Germany. Molecular ceramic seals create extremely smooth surfaces with unique depth effect, intense colours and durability up to 5 years. Dirt rolls off with water; brake-dust burn-in no longer stands a chance. Acid and heat resistant with excellent UV and corrosion protection — easy one-time application.",
    features: [
      ["Extreme Heat Resistance", "Ceramic coating rated from 850 to 1500 degrees centigrade.", "Made in Germany"],
      ["Long Service Life", "All-surfaces coating with multi-year durability for enthusiasts and detailers.", "3–10 year lifetime"],
      ["UV & Corrosion Shield", "Acid and heat resistant seal with outstanding UV and corrosion protection.", "Dirt simply rolls off"],
    ],
    applications: [
      "Automotive ceramic detailing",
      "High-heat component protection",
      "Professional paint protection programmes",
    ],
    certifications: ["Made in Germany", "Partner coating technology"],
  }),

  /* ─── About / tech hubs ─── */
  news: page({
    slug: "news",
    category: "Company & Resources",
    parentMenu: "About Us",
    parentSlug: "/about",
    title: "News & Updates",
    subtitle: "Product approvals, technology updates and ETS International announcements.",
    badge: "ETS INTERNATIONAL · COLOGNE",
    heroImage: HERO.facility,
    overview:
      "Stay informed about ETS International product launches, aerospace and industrial approvals, co-partner technologies and regulatory updates from our Cologne headquarters. Contact info@etsint.de for press and technical announcements.",
    features: [
      ["Product & Approval News", "Updates on Airbus, Boeing, SMI, NATO and food-hygiene qualifications.", "OEM focused"],
      ["Technology Spotlights", "Coverage of AquaSmarter, Nano Diamond, FOG-IT and ester platforms.", "Clean-tech first"],
      ["Partner Network", "Announcements from co-partners and global distribution programmes.", "40+ countries"],
    ],
    applications: [
      "Customer and partner communications",
      "Regulatory and SDS update notices",
      "Trade-show and launch announcements",
    ],
    certifications: ["ISO 9001:2015", "ISO 14001:2015"],
  }),

  esters: page({
    slug: "esters",
    category: "Innovation & Clean-Tech",
    parentMenu: "New Technologies",
    parentSlug: "/new-technologies",
    title: "Natural Nano Fatty Ester Products",
    subtitle: "100% natural nano fatty ester particles (4–7 Nm) from sustainable palm oil biology.",
    badge: "100% NATURAL · NANO ESTER · 4–7 NM",
    heroImage: HERO.tech,
    overview:
      "100% Natural Nano Fatty Ester Products: fatty acids from sustainable palm oil are converted by a biological reaction to nano fatty ester particles with a size of 4–7 Nm. These colloidal nano fatty ester particles are used across industrial cleaning, degreasing and specialised surface-treatment applications as a solvent-free performance platform.",
    features: [
      ["Nano Particle Size", "Fatty ester particles sized 4–7 nanometres for high surface activity.", "Colloidal platform"],
      ["Sustainable Feedstock", "Derived from sustainable palm-oil fatty acids via biological conversion.", "100% natural"],
      ["Broad Industry Use", "Deployed in cleaning, degreasing and specialised industrial formulations.", "Solvent-free route"],
    ],
    applications: [
      "Industrial bio-degreasing formulations",
      "Aviation and metalworking cleaner bases",
      "Next-generation solvent replacement chemistry",
    ],
    certifications: ["Natural ester platform", "REACH pathway", "ISO 9001:2015"],
  }),

  cleaners: page({
    slug: "cleaners",
    category: "Products Overview",
    parentMenu: "Products",
    parentSlug: "/products",
    title: "Cleaners",
    subtitle: "Industrial, aviation, HACCP and vehicle cleaner portfolio from ETS International.",
    badge: "SOLVENT-FREE · BIODEGRADABLE · CERTIFIED",
    heroImage: HERO.industrial,
    overview:
      "The ETS Cleaners range spans aviation exterior and interior chemistry, HACCP food-safe concentrates, heavy-duty industrial degreasers (NONSOLAr, HDC, EGR Extra, Economic Universal), truck and train wash products, and specialised removers for silicon, grease, rust and oven soils — all engineered as environment-friendly alternatives to solvent and acid systems.",
    features: [
      ["Aviation & Aerospace Cleaners", "Exterior fluids, gels, interior disinfectants and cockpit wipes with OEM test heritage.", "Airbus & Boeing lineage"],
      ["Industrial Degreasers", "NONSOLAr, HDC, EGR Extra and Economic Universal for workshops and process lines.", "Solvent-free options"],
      ["HACCP & Vehicle Care", "Food-grade concentrates plus truck, wheel, wax and train cleaning systems.", "Multi-industry stack"],
    ],
    applications: [
      "Cross-industry cleaner selection",
      "Distributor product catalogue navigation",
      "Replacement of solvent and caustic cleaners",
    ],
    certifications: ["REACH", "HACCP options", "ISO 9001:2015"],
  }),

  /* ─── Aviation products ─── */
  "aircraft-cleaner-fluid-exterior": page({
    slug: "aircraft-cleaner-fluid-exterior",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Cleaner Fluid (Exterior)",
    subtitle: "Powerful water-based exterior cleaner for aircraft and helicopters — solvent and silicon free.",
    badge: "AIRBUS · BOEING · SMI MIAMI",
    heroImage: HERO.aviation,
    overview:
      "Aircraft Cleaner Fluid (Exterior) is a very powerful water-based exterior cleaner for aircraft and helicopters. Solvents/silicons free and wastewater friendly, developed for commercial and military aircraft maintenance. High pH produces vigorous cleaning without attacking aluminium thanks to special inhibitors. Dilute 1:1 with water for heavy contamination (oil, fuels, carbon, grease on exhaust and landing gears) or 1:10 for general cleaning. Can be re-used while pH meets specification and applied as spray-on & wipe-off. Tested and certified by SMI Miami USA for Boeing and Douglas; approved in Europe by Airbus Industries.",
    features: [
      ["Aluminium-Safe Inhibitors", "High-pH cleaning power without attacking aluminium structures.", "Non-corrosive"],
      ["Flexible Dilution", "1:1 for heavy soils; 1:10 for general exterior wash programmes.", "Re-usable bath"],
      ["OEM Tested", "SMI Miami certification for Boeing/Douglas; Airbus Industries approval in Europe.", "Spray-on & wipe-off"],
    ],
    specifications: [
      ["Base", "Water-based exterior concentrate"],
      ["Dilution (heavy)", "1:1 with water"],
      ["Dilution (general)", "1:10 with water"],
      ["Approvals", "SMI Miami · Airbus · Boeing/Douglas lineage"],
    ],
    applications: [
      "Commercial and military aircraft exterior wash",
      "Helicopter fuselage and rotor-area cleaning",
      "Engine exhaust and landing-gear degreasing",
    ],
    certifications: ["SMI Miami", "Airbus", "Boeing / Douglas tested"],
  }),

  "aircraft-cleaner-fluid-interior": page({
    slug: "aircraft-cleaner-fluid-interior",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Cleaner Fluid (Interior)",
    subtitle: "Non-flammable interior aircraft cleaner certified AMS 1550 B — spray on and wipe off.",
    badge: "AMS 1550 B · BOEING · DOUGLAS",
    heroImage: HERO.aviation,
    overview:
      "Aircraft interior cleaner designed for spray-on & wipe-off processes. Tested and certified AMS 1550 B by SMI Miami USA for both Boeing and Douglas. Applied by spraying directly onto aircraft interiors and spreading over the surface — safe on all internal hard surfaces including acrylic glass. Reduced set-up time plus non-flammable flexibility improves cleaning options and lowers costs.",
    features: [
      ["AMS 1550 B Certified", "SMI Miami certification for Boeing and Douglas interior programmes.", "OEM aligned"],
      ["Acrylic-Glass Safe", "Safe on internal hard surfaces including acrylic cabin glazing.", "Broad material compatibility"],
      ["Non-Flammable Process", "Spray-on & wipe-off anywhere in the cabin without solvent fire risk.", "Lower cleaning costs"],
    ],
    applications: [
      "Cabin hard-surface cleaning",
      "Galley and lavatory interiors",
      "Rapid turnaround interior programmes",
    ],
    certifications: ["AMS 1550 B", "SMI Miami", "Boeing / Douglas"],
  }),

  "aircraft-cleaner-gel": page({
    slug: "aircraft-cleaner-gel",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Cleaner Gel",
    subtitle: "Water-based exterior gel cleaner for aircraft and helicopters — sticks where fluids run off.",
    badge: "GEL SPRAY · SOLVENT-FREE · ALUMINIUM SAFE",
    heroImage: HERO.aviation,
    overview:
      "Aircraft Cleaner Gel is a powerful water-based exterior cleaner for aircraft and helicopters — solvents/silicons free and wastewater friendly. Developed for commercial and military MRO; high pH with aluminium inhibitors. The gel is used with low-pressure gel-spray systems or by hand on complex shapes under aircraft and in engine/nacelle areas, brushed in to stick, then sprayed off after approximately five minutes — less product and manpower than conventional cleaners.",
    features: [
      ["Cling Gel Technology", "Stays on underside, engine and nacelle areas where liquid cleaners run off.", "~5 minute dwell"],
      ["Low-Pressure Gel Spray", "Optimised for gel-spray systems and manual touch-up on complex geometry.", "Less product & labour"],
      ["Custom Blend Ready", "Can be custom blended for specific applications and cleaning systems.", "Aluminium inhibited"],
    ],
    applications: [
      "Full exterior aircraft and helicopter wash",
      "Underside and nacelle detailing",
      "Military and commercial MRO lines",
    ],
    certifications: ["Aviation MRO developed", "Solvent/silicon free"],
  }),

  "aircraft-hydraulic-fluid-remover": page({
    slug: "aircraft-hydraulic-fluid-remover",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Hydraulic Fluid Remover",
    subtitle: "Fatty-ester mix-blend cleaner designed to remove hydraulic fluid — AMS 1526B tested.",
    badge: "AMS 1526B · SMI MIAMI",
    heroImage: HERO.aviation,
    overview:
      "AIRCRAFT HYDRAULIC FLUID REMOVER is a mix-blend cleaner based on fatty ester and designed to easily remove hydraulic fluid. AHFR has been tested and approved for AMS 1526B specifications by SMI Inc, Miami, USA.",
    features: [
      ["Fatty Ester Chemistry", "Mix-blend cleaner that lifts hydraulic fluid quickly from aircraft surfaces.", "Ester-based"],
      ["AMS 1526B Approved", "Tested and approved by SMI Inc. Miami to AMS 1526B.", "Aerospace spec"],
      ["MRO Friendly", "Supports landing-gear, wheel-bay and hydraulic bay maintenance.", "Targeted remover"],
    ],
    applications: [
      "Landing gear and wheel-bay cleaning",
      "Hydraulic leak residue removal",
      "Aircraft maintenance hangars",
    ],
    certifications: ["AMS 1526B", "SMI Miami"],
  }),

  "aircraft-polish": page({
    slug: "aircraft-polish",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Surface Polish",
    subtitle: "High-quality polish that restores shine on older, lightly discoloured aircraft paint.",
    badge: "AIRCRAFT POLISH 2 · PAINT RENEWAL",
    heroImage: HERO.aviation,
    overview:
      "AIRCRAFT SURFACE POLISH is a high-quality polish for older (lightly discoloured) aircraft, giving them a shiny coloured surface again. Aircraft Polish 2 is a unique aircraft polish for renewal of lightly discoloured paint.",
    features: [
      ["Paint Colour Renewal", "Restores shine on lightly discoloured aircraft paint finishes.", "High-gloss result"],
      ["Fleet Appearance", "Keeps older airframes presentation-ready between heavy maintenance visits.", "Exterior detailing"],
      ["Aviation-Specific Formula", "Developed as Aircraft Polish 2 for aerospace paint systems.", "Surface safe"],
    ],
    applications: [
      "Light aircraft and airline exterior detailing",
      "Paint renewal between heavy checks",
      "Corporate and GA fleet appearance programmes",
    ],
    certifications: ["Aviation exterior care"],
  }),

  "aircraft-protector": page({
    slug: "aircraft-protector",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Surface Protector",
    subtitle: "Shiny protective coat for new or clean aircraft — slows road-film build-up.",
    badge: "PROTECTOR 3 · EASIER CLEANING",
    heroImage: HERO.aviation,
    overview:
      "AIRCRAFT SURFACE PROTECTOR gives a unique shiny protection coat for new and/or clean aircraft. Aircraft Protector 3 gives a coat that slows down building up of road film and gives easier cleaning with a shiny surface.",
    features: [
      ["Protective Gloss Coat", "Unique shiny protection for new or freshly cleaned aircraft.", "Showroom finish"],
      ["Slows Road Film", "Reduces film build-up so subsequent washes are faster and easier.", "Lower wash labour"],
      ["Post-Wash Seal", "Ideal final step after exterior cleaner and polish programmes.", "Protector 3"],
    ],
    applications: [
      "New-delivery aircraft protection",
      "Post-wash exterior sealing",
      "Airline appearance programmes",
    ],
    certifications: ["Aviation exterior care"],
  }),

  "runway-tire-stripper": page({
    slug: "runway-tire-stripper",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Runway Cleaner & Stripper",
    subtitle: "Alkaline, solvent-free rubber deposit remover for runway tracks — concrete safe.",
    badge: "SOLVENT-FREE · SEWAGE COMPATIBLE",
    heroImage: HERO.aviation,
    overview:
      "RUNWAY CLEANER & STRIPPER is a concentrated alkaline cleaner designed to remove rubber deposits and contamination from runway tracks. Solvent free, human friendly and disposable to sewage in accordance with local legislation — not subject to dangerous goods labelling. Special ingredient mix removes resistant rubber, greases and mineral oils without harming concrete. Unlike high-pressure-only methods that can damage runway structure, this chemistry enables complete rubber removal when diluted to suit contamination levels.",
    features: [
      ["100% Rubber Removal Focus", "Engineered to remove resistant rubber deposits completely from runway tracks.", "Concrete safe"],
      ["Solvent-Free & Labelling Light", "Not subject to dangerous goods labelling; sewage-compatible per local law.", "Human friendly"],
      ["Dilution by Contamination", "Dilute with water according to rubber and oil contamination level.", "Protects runway structure"],
    ],
    applications: [
      "Airport runway rubber removal",
      "Touchdown-zone maintenance",
      "Taxiway grease and oil cleaning",
    ],
    certifications: ["Solvent-free", "Non-DG labelling"],
  }),

  "runway-light-tire-cleaner": page({
    slug: "runway-light-tire-cleaner",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Runway Light Tire Cleaner | Rubber Remover",
    subtitle: "Alkaline cleaner for rubber deposits on runway lamps and taxiway lights.",
    badge: "SOLVENT-FREE · LIGHT FIXTURE SAFE",
    heroImage: HERO.aviation,
    overview:
      "RUNWAY LIGHT TIRE CLEANER | RUBBER REMOVER is a concentrated alkaline cleaner for rubber deposits and contamination on runway lamps. Solvent free, human friendly and sewage-compatible per local legislation. Removes resistant rubber on runway lights and taxiway lamps as well as greases and mineral oils without harming concrete light structures — avoiding high-pressure damage. Dilute according to contamination.",
    features: [
      ["Lamp & Fixture Focus", "Removes rubber from runway and taxiway light assemblies.", "Structure safe"],
      ["Solvent-Free Chemistry", "Human friendly with local-legislation sewage disposal pathway.", "Non-DG labelling"],
      ["Dilution Control", "Adjust water dilution to match rubber and oil loading.", "Avoids HP damage"],
    ],
    applications: [
      "Runway embedded light cleaning",
      "Taxiway lamp rubber removal",
      "Airfield lighting maintenance",
    ],
    certifications: ["Solvent-free", "Non-DG labelling"],
  }),

  "hard-surface-cleaner-and-disinfectant": page({
    slug: "hard-surface-cleaner-and-disinfectant",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Hard Surface Cleaner & Disinfectant",
    subtitle: "Aircraft cabin hard-surface cleaner and disinfectant — WHO-aligned hygiene programmes.",
    badge: "CABIN · GALLEY · LAVATORY",
    heroImage: HERO.aviation,
    overview:
      "HARD SURFACE CLEANER & DISINFECTANT cleans and disinfects trays, toilet compartments, galleys, cabins (bulkheads, drop-down tables), armrests and more. Non-corrosive and safe on aluminium, plastics (acrylic, polycarbonate, polysulfone), painted/unpainted surfaces, rubber, vinyl and toddler surfaces. Compatible with Hard Surface Interior Cleaner (step 2 of 2). Aircraft cleaning and disinfection is recommended by WHO International Health Regulations — cleaning removes visible soil; disinfection controls bacteria and viruses.",
    features: [
      ["Broad Material Compatibility", "Safe on metals, plastics, rubber, vinyl and painted cabin surfaces.", "Non-corrosive"],
      ["Two-Step Cabin System", "Compatible with Hard Surface Interior Cleaner as step 2 of 2.", "Cabin programme"],
      ["WHO-Aligned Hygiene", "Supports aircraft cleaning and disinfection under International Health Regulations.", "Virus & bacteria control"],
    ],
    applications: [
      "Cabin and galley hard-surface programmes",
      "Lavatory compartment disinfection",
      "Turnaround hygiene between flights",
    ],
    certifications: ["WHO IHR aligned practice", "Cabin material safe"],
  }),

  "aircraft-hangar-floor-cleaner": page({
    slug: "aircraft-hangar-floor-cleaner",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Hangar Floor Cleaner",
    subtitle: "Solvent-free concentrated floor cleaner for hangars, chemical and refinery plant floors.",
    badge: "SOLVENT-FREE · WASTEWATER FRIENDLY",
    heroImage: HERO.aviation,
    overview:
      "FLOOR CLEANER | HANGAR FLOOR CLEANER is a concentrated universal cleaner for chemical and refinery plants, designed to meet stringent local legislation. Hangar Floorcleaner | ETS-FLOORCLEANER is solvent free and human and wastewater friendly, with special detergent for extra-strong cleaning of grease and mineral oil pollution. Dilute with water according to contamination.",
    features: [
      ["Grease & Mineral Oil Power", "Special detergent package for hangar floor oil and grease soils.", "Strong cleaning effect"],
      ["Solvent-Free", "Human and wastewater friendly formulation for regulated sites.", "Legislation ready"],
      ["Dilution Flexibility", "Adjust concentration to match hangar contamination levels.", "Universal concentrate"],
    ],
    applications: [
      "Aircraft hangar floor washing",
      "MRO bay oil spill clean-up",
      "Chemical plant floor programmes",
    ],
    certifications: ["Solvent-free", "Wastewater friendly"],
  }),

  "military-aircraft-cleaner-fluid-exterior": page({
    slug: "military-aircraft-cleaner-fluid-exterior",
    category: "Military Aviation",
    parentMenu: "Aviation",
    parentSlug: "/military-aviation-industry",
    title: "Military Aircraft Cleaner Fluid (Exterior)",
    subtitle: "Water-based exterior cleaner for military aircraft and helicopters — Airbus & Boeing tested.",
    badge: "MILITARY MRO · SMI · AIRBUS",
    heroImage: HERO.aviation,
    overview:
      "AIRCRAFT CLEANER FLUID (EXTERIOR) for military programmes is a powerful water-based exterior cleaner for aircraft and helicopters — solvents/silicons free and wastewater friendly. Developed for commercial and military aircraft maintenance with high pH and aluminium inhibitors. Dilute 1:1 for heavy oil, fuel, carbon and grease on exhaust and landing gears; 1:10 for general cleaning. Re-usable while pH meets specification; spray-on & wipe-off. Certified by SMI Miami for Boeing and Douglas; approved in Europe by Airbus Industries.",
    features: [
      ["Military MRO Ready", "Developed with experts in commercial and military aircraft maintenance.", "High-pH power"],
      ["Aluminium Protected", "Special inhibitors enable safe application on aluminium airframes.", "Non-corrosive"],
      ["OEM Certified Path", "SMI Miami Boeing/Douglas testing; Airbus Industries European approval.", "Re-usable bath"],
    ],
    applications: [
      "Military aircraft exterior wash",
      "Helicopter fleet cleaning",
      "Defence MRO hangar programmes",
    ],
    certifications: ["SMI Miami", "Airbus", "Boeing / Douglas tested"],
  }),

  "sky-reacher": page({
    slug: "sky-reacher",
    category: "Cleaning Accessories",
    parentMenu: "Cleaning Accessories",
    parentSlug: "/cleaning-accessories",
    title: "Sky Reacher GS-T 1000",
    subtitle: "Mobile aircraft cleaning machine with integrated hose reels, pumps and 1000 L tank.",
    badge: "GS-T 1000 · MOBILE TANK UNIT",
    heroImage: HERO.aviation,
    overview:
      "Sky Reacher Aircraft Cleaning Machine is a mobile tank unit with integrated hose reels and pumps. Galvanised tank with 1000 litre capacity on a support with 2 axes (1 fixed and 1 rotating with shaft and parking brake). Platform holds a 1000 litre box container of concentrated cleaning agent. Type GS-T 3000 offers a 3000 litre galvanised tank.",
    features: [
      ["1000 L Mobile Tank", "Galvanised tank with integrated hose reels and pumps for apron mobility.", "GS-T 1000"],
      ["Concentrate Platform", "Support platform for 1000 L box container of cleaning concentrate.", "Apron logistics"],
      ["GS-T 3000 Option", "Expandable family with 3000 litre galvanised tank variant.", "Fleet scalable"],
    ],
    applications: [
      "Aircraft exterior wash operations",
      "Airport apron cleaning logistics",
      "MRO ground support equipment",
    ],
    certifications: ["Aviation GSE"],
  }),

  "easy-wash-sprayer-foamer": page({
    slug: "easy-wash-sprayer-foamer",
    category: "Cleaning Accessories",
    parentMenu: "Cleaning Accessories",
    parentSlug: "/cleaning-accessories",
    title: "Easy Wash Sprayer | Foamer",
    subtitle: "Pressure-washer support to spray foam or water — instant foam, simple to use.",
    badge: "FOAM · SPRAY · SIMPLE",
    heroImage: HERO.aviation,
    overview:
      "EASY WASH SPRAYER | FOAMER is pressure-washer support to spray foam or spray water. It is simple to use and produces foam instantly for efficient aircraft and industrial wash processes.",
    features: [
      ["Instant Foam", "Produces foam immediately for cling cleaning on vertical surfaces.", "Simple operation"],
      ["Foam or Water", "Switch between foam application and water rinse support.", "Pressure-washer ready"],
      ["Wash Efficiency", "Speeds exterior wash programmes with less manual scrubbing.", "Labour saving"],
    ],
    applications: [
      "Aircraft foam wash programmes",
      "Industrial vehicle cleaning",
      "Hangar wash bays",
    ],
    certifications: ["Wash equipment accessory"],
  }),

  "runway-cleaning-equipment": page({
    slug: "runway-cleaning-equipment",
    category: "Cleaning Accessories",
    parentMenu: "Cleaning Accessories",
    parentSlug: "/cleaning-accessories",
    title: "Runway Cleaning Equipment",
    subtitle: "Truck-mounted machine for runway cleaning and washing away rubber-stripper chemicals.",
    badge: "AIRFIELD · TRUCK MOUNTED",
    heroImage: HERO.aviation,
    overview:
      "Runway Cleaning Equipment is a truck (automobile) mounted machine for runway cleaning and washing away rubber stripper chemicals after applications — pairing with ETS Runway Cleaner & Stripper chemistry.",
    features: [
      ["Truck-Mounted Platform", "Automobile-mounted machine for airfield runway operations.", "Mobile airfield unit"],
      ["Stripper Wash-Away", "Washes away rubber-stripper chemicals after runway treatment.", "Process complete"],
      ["Runway Programme Pair", "Designed to work with ETS runway rubber removal chemistry.", "Airfield ready"],
    ],
    applications: [
      "Airport runway rubber programmes",
      "Post-stripper rinse operations",
      "Airfield maintenance fleets",
    ],
    certifications: ["Airfield equipment"],
  }),

  osmose: page({
    slug: "osmose",
    category: "Cleaning Accessories",
    parentMenu: "Cleaning Accessories",
    parentSlug: "/cleaning-accessories",
    title: "OSMOSE Reverse Osmosis Module",
    subtitle: "Compact RO system with booster pump and 1000 L process-water storage — expandable.",
    badge: "RO · 1000 L · EXPANDABLE",
    heroImage: HERO.tech,
    overview:
      "OSMO basic module is a compact system including booster pump and 1000 litres process water storage tank. Expandable anytime by further 1,000 litre reservoirs. Reverse osmosis produces mixing water from softened or hardness-stabilised drinking water for pressure-less supply into the reservoir with fill-level control via floating switch or pressure sensor. Industrial standard design with easily accessible components.",
    features: [
      ["Compact RO Module", "Booster pump plus 1000 L process-water storage in one basic module.", "Industrial standard"],
      ["Expandable Reservoirs", "Add further 1,000 litre reservoirs as wash demand grows.", "Scalable"],
      ["Level-Controlled Fill", "Floating switch or pressure sensor fill-level control.", "Pressure-less supply"],
    ],
    applications: [
      "Aircraft wash mixing water",
      "Industrial cleaning water preparation",
      "Hardness-controlled process water",
    ],
    certifications: ["Industrial RO module"],
  }),

  /* ─── HACCP products ─── */
  "alcohol-free-cleaner-and-disinfector": page({
    slug: "alcohol-free-cleaner-and-disinfector",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Cleaner and Disinfector (HACCP | Alcohol Free)",
    subtitle: "Combined degreaser and disinfectant for food-contact surfaces and sanitary places.",
    badge: "HACCP · ALCOHOL-FREE",
    heroImage: HERO.food,
    overview:
      "Cleaner & Disinfector (HACCP | Alcohol Free) is a combined degreaser and disinfectant of very high quality. It can be used on all kinds of surfaces, equipment and materials which can come in contact with food and liquids, and for cleaning and disinfection of sanitary places. Concentrate with many dilution possibilities with water.",
    features: [
      ["Combined Degrease & Disinfect", "One product for soil removal and hygienic disinfection.", "HACCP quality"],
      ["Food-Contact Ready", "Safe for surfaces, equipment and materials contacting food and liquids.", "Alcohol-free"],
      ["Flexible Dilution", "Concentrate with many water dilution options for daily programmes.", "Sanitary capable"],
    ],
    applications: [
      "Food production surface hygiene",
      "Sanitary cleaning and disinfection",
      "Hotel and catering HACCP plans",
    ],
    certifications: ["HACCP", "REACH"],
  }),

  "composite-panel-universal-cleaner": page({
    slug: "composite-panel-universal-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Composite Panel Universal Cleaner",
    subtitle: "Ecological cleaner for Composite-Panel, ACP Alucobond — shiny and matte surfaces.",
    badge: "ALUCOBOND · BUCKET OR SPRAY",
    heroImage: HERO.facility,
    overview:
      "COMPOSITE PANEL UNIVERSAL CLEANER cleans all possible Composite-Panel, ACP Alucobond, and shiny and matte surfaces for dirt and degreasing. Powerful universal ecological cleaning product. Special concentrate available for bucket or spray apparatus.",
    features: [
      ["ACP & Alucobond Ready", "Cleans composite and aluminium composite panels without harsh solvents.", "Shiny & matte"],
      ["Ecological Concentrate", "Powerful universal cleaner with environmental responsibility in mind.", "Bucket or spray"],
      ["Dirt & Degrease", "Removes soils and greases from façade and interior panel surfaces.", "Facility friendly"],
    ],
    applications: [
      "Building façade panel cleaning",
      "Interior composite surface care",
      "Facility maintenance programmes",
    ],
    certifications: ["Ecological cleaner", "REACH"],
  }),

  "graffiti-cleaner": page({
    slug: "graffiti-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Graffiti Cleaner | Graffiti Remover",
    subtitle: "Water-based graffiti and overspray remover that protects underlying paint.",
    badge: "BIODEGRADABLE · PAINT SAFE",
    heroImage: HERO.facility,
    overview:
      "ETS GRAFFITI REMOVER | GRAFFITI CLEANER is a powerful cleaning agent engineered to clean up problem graffiti and overspray without damaging the original underlying paint. Environmentally safe and easy to use — a clear biodegradable liquid with an inoffensive odour. Environmentally responsible advanced water-based technology.",
    features: [
      ["Protects Original Paint", "Removes graffiti and overspray without attacking the base coat.", "Paint-safe"],
      ["Water-Based Technology", "Clear biodegradable liquid with mild, inoffensive odour.", "Easy to use"],
      ["Environmental Responsibility", "Advanced water-based alternative to harsh solvent removers.", "Bio-degradable"],
    ],
    applications: [
      "Urban façade graffiti removal",
      "Transit and facility overspray clean-up",
      "Painted surface restoration",
    ],
    certifications: ["Water-based", "Biodegradable"],
  }),

  "glass-cleaner": page({
    slug: "glass-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Glass Cleaner (HACCP)",
    subtitle: "Quick-drying high-quality glass cleaner concentrate for spray flacons.",
    badge: "HACCP · QUICK DRYING",
    heroImage: HERO.food,
    overview:
      "Glass Clean concentrate is a quick-drying glass cleaner of very high quality for use with spray flacons, specially qualified for the whole interior like windows, mirrors and tiles.",
    features: [
      ["Quick Drying", "High-quality glass cleaner that dries fast with minimal streaking.", "Spray flacon ready"],
      ["Interior Versatility", "Qualified for windows, mirrors and tiles across interiors.", "HACCP glass care"],
      ["Concentrate Economy", "Dilutable concentrate for professional facility programmes.", "Daily use"],
    ],
    applications: [
      "Hotel and restaurant glazing",
      "Food facility windows and mirrors",
      "Tile and glass interior cleaning",
    ],
    certifications: ["HACCP", "REACH"],
  }),

  "composite-panel-cleaner-extra": page({
    slug: "composite-panel-cleaner-extra",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Composite Panel Cleaner Extra",
    subtitle: "Specialist ecological cleaner for white ACP composite panels and Alucobond.",
    badge: "WHITE ACP · BUCKET OR SPRAY",
    heroImage: HERO.facility,
    overview:
      "COMPOSITE PANEL CLEANER EXTRA cleans white Composite-Panel, ACP panels and Alucobond — shiny and matte — for dirt and degreasing. Powerful universal ecological cleaning product. Special concentrate for bucket or spray apparatus. Composite Cleaner Extra is for white ACP composite panels.",
    features: [
      ["White ACP Specialist", "Formulated specifically for white composite and ACP panels.", "Alucobond ready"],
      ["Ecological Power", "Strong dirt and degrease performance without aggressive solvents.", "Bucket or spray"],
      ["Façade Finish Care", "Maintains shiny and matte white panel appearances.", "Facility grade"],
    ],
    applications: [
      "White ACP façade maintenance",
      "Commercial building panel cleaning",
      "Interior white composite care",
    ],
    certifications: ["Ecological cleaner", "REACH"],
  }),

  "grease-cleaner": page({
    slug: "grease-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Grease Cleaner HACCP | Remover",
    subtitle: "High-quality degreaser for kitchens, nutrition industry, hotels and catering.",
    badge: "HACCP · NO RESIDUE · CONCENTRATE",
    heroImage: HERO.hospitality,
    overview:
      "Grease Remover is a degreaser of very high quality for hoods, floors, walls, tiles, stainless steel, synthetics and other materials. Cleans deeply and leaves no residue unlike other products. Delivered as concentrate with dosage pump and sprayer to avoid excessive use. Highly suitable for the nutrition industry — replaces kitchen cleaners for hotel, restaurant, catering and factories where the highest hygienic demands are made.",
    features: [
      ["No Residue Finish", "Deep clean on grease soils without leaving film behind.", "Kitchen proven"],
      ["Dosed Concentrate", "Supplied with dosage pump and sprayer to control usage.", "Cost competitive"],
      ["Nutrition Industry Ready", "Built for highest hygienic demands in food and catering.", "Replaces multiple cleaners"],
    ],
    applications: [
      "Commercial kitchen hoods and floors",
      "Food factory hygiene",
      "Hotel and catering degreasing",
    ],
    certifications: ["HACCP", "REACH"],
  }),

  "hand-wash-cleaner": page({
    slug: "hand-wash-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Hand Wash Cleaner HACCP | Hand Wash Gel",
    subtitle: "Disinfecting hand wash gel that cleans heavily soiled hands with a fresh fragrance.",
    badge: "HACCP · DISINFECTING GEL",
    heroImage: HERO.food,
    overview:
      "Hand Wash Gel cleans the dirtiest hands and is disinfecting. Rub hands (wet or dry) with the gel until dirt is dissolved, then rinse well with water for clean dry hands with a fresh fragrance.",
    features: [
      ["Heavy Soil Removal", "Cleans heavily soiled hands in workshop and kitchen environments.", "Wet or dry start"],
      ["Disinfecting Action", "Hand gel with disinfecting performance for hygiene-critical sites.", "HACCP hand care"],
      ["Fresh Fragrance", "Leaves clean, dry hands with a pleasant fragrance after rinse.", "Simple process"],
    ],
    applications: [
      "Food handler hand hygiene",
      "Kitchen and catering wash points",
      "Industrial hygiene stations",
    ],
    certifications: ["HACCP"],
  }),

  "multi-cleaner": page({
    slug: "multi-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Multi Cleaner HACCP | Multiclean",
    subtitle: "High-quality interior cleaner for windows, mirrors, tiles, floors, walls and cabinets.",
    badge: "HACCP · DAILY INTERIOR",
    heroImage: HERO.food,
    overview:
      "Multiclean is an interior cleaner of very high quality suitable for windows, mirrors, tiles, floors, walls, cabinets and coverings. Useful for bucket and spray applications with a pleasant fragrance for daily use.",
    features: [
      ["All-Interior Versatility", "One cleaner for glass, tiles, floors, walls and cabinets.", "Daily use"],
      ["Bucket or Spray", "Works in both mop-bucket and spray programmes.", "Pleasant fragrance"],
      ["HACCP Interior Grade", "High-quality formulation for hygienic interior environments.", "Facility standard"],
    ],
    applications: [
      "Daily facility interior cleaning",
      "Food plant amenity areas",
      "Hotel and restaurant interiors",
    ],
    certifications: ["HACCP", "REACH"],
  }),

  "wc-cleaner-sanipower": page({
    slug: "wc-cleaner-sanipower",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "WC Cleaner HACCP | Sanipower",
    subtitle: "Concentrated sanitary cleaner for floors, walls, pans, basins — fights bacteria.",
    badge: "HACCP · SANITARY CONCENTRATE",
    heroImage: HERO.hospitality,
    overview:
      "Sanipower is for sanitary cleaning: floors, walls, lavatory pans, public lavatories, wash-basins and more. Concentrate and therefore economical. Removes scale, corrosion and dirt easily. Works against bacteria and leaves a fresh odour.",
    features: [
      ["Scale & Corrosion Removal", "Removes scale, corrosion and sanitary soils efficiently.", "Economical concentrate"],
      ["Antibacterial Action", "Works against bacteria while leaving a fresh odour.", "Washroom ready"],
      ["Broad Material Use", "For floors, walls, pans, public lavatories and wash-basins.", "HACCP sanitary"],
    ],
    applications: [
      "Public and staff washrooms",
      "Hotel sanitary programmes",
      "Food facility amenities",
    ],
    certifications: ["HACCP", "Solvent-free options"],
  }),

  "sanitary-bleach-liquid-sanipower-extra": page({
    slug: "sanitary-bleach-liquid-sanipower-extra",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Sanitary Bleach Liquid | Sanipower EXTRA",
    subtitle: "Extra-concentrate sanitary cleaner for toilet rust, corrosion and lime removal.",
    badge: "SANIPOWER EXTRA · LIME & RUST",
    heroImage: HERO.hospitality,
    overview:
      "SANIPOWER EXTRA is a sanitary bleach liquid cleaner for toilet rust, corrosion problems and lime removal. Application areas: floors, walls, lavatory pans, public lavatories, wash-basins and more. Extra concentrate removes scale, corrosion and filthiness easily, works against bacteria and leaves a fresh odour.",
    features: [
      ["Lime & Rust Focus", "Targets toilet rust, corrosion and lime scale build-up.", "Extra concentrate"],
      ["Sanitary Broad Use", "Floors, walls, pans, public lavatories and wash-basins.", "Fresh odour"],
      ["Antibacterial Clean", "Works against bacteria while deep-cleaning sanitary soils.", "Bleach liquid system"],
    ],
    applications: [
      "Heavy sanitary descaling",
      "Public washroom restoration",
      "Hotel bathroom deep clean",
    ],
    certifications: ["Sanitary concentrate", "HACCP programmes"],
  }),

  /* ─── Product SKUs ─── */
  "actan-3f": page({
    slug: "actan-3f",
    category: "Corrosion Protection",
    parentMenu: "Derusting & Paint Stripping",
    parentSlug: "/bioderuster",
    title: "Rust Protect | Actan 3F",
    subtitle: "Water-based rust protection — one layer before painting, up to 10 years protection.",
    badge: "WATER-BASED · PAINTABLE · UP TO 10 YEARS",
    heroImage: HERO.industrial,
    overview:
      "Rust Protector Actan 3F is ready to use before painting to protect metals for long-time rust protection up to 10 years. One layer is sufficient. Product can be painted and is water based. Remove loose corrosion, preferably with Bio-Deruster, clean and rinse. Shake well, brush on; working temperature 5–40°C, never below 0°C. Can be used on moisture surfaces. Reaction ~3 hours recognised by blue-black colour change. ACTAN 3F is not paint — protect treated surfaces within 48 hours with an appropriate paint system. Clean tools with water.",
    features: [
      ["Up to 10 Years Protection", "One water-based layer provides long-term rust protection before painting.", "Paintable"],
      ["Moisture Tolerant", "Can be applied on moisture surfaces between 5–40°C.", "Blue-black reaction"],
      ["Pairs with Bio-Deruster", "Ideal after selective chelation derusting and rinse.", "48h overpaint window"],
    ],
    specifications: [
      ["Type", "Ready-to-use water-based rust protect"],
      ["Working temperature", "5–40°C (not below 0°C)"],
      ["Reaction time", "Approx. 3 hours"],
      ["Overpaint", "Within 48 hours with metal-protecting paint"],
    ],
    applications: [
      "Pre-paint rust conversion",
      "Industrial metal protection",
      "Restoration after Bio-Deruster",
    ],
    certifications: ["Water-based", "REACH"],
  }),

  "aqua-silicon-remover": page({
    slug: "aqua-silicon-remover",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Aqua Silicon Remover",
    subtitle: "Strong alkaline concentrate that cleans, degreases and removes silicon — non-solvent.",
    badge: "ALKALINE · NON-SOLVENT · SILICON REMOVAL",
    heroImage: HERO.industrial,
    overview:
      "Aqua Silicon Remover Liquid (ASRL) is an extremely strong alkaline concentrate with specific additives. ASRL is a non-solvent universal cleaning and degreasing product which also removes silicon.",
    features: [
      ["Silicon Removal", "Formulated to remove silicon soils where standard degreasers fail.", "ASRL"],
      ["Non-Solvent Alkaline", "Extremely strong alkaline concentrate without solvent carriers.", "Universal cleaner"],
      ["Degrease Power", "Universal cleaning and degreasing for industrial surfaces.", "Specific additives"],
    ],
    applications: [
      "Silicon contamination removal",
      "Industrial degreasing",
      "Pre-paint surface preparation",
    ],
    certifications: ["Non-solvent", "REACH"],
  }),

  "bupi-cleaner-nf-concentrate": page({
    slug: "bupi-cleaner-nf-concentrate",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Bupi Cleaner NF (Concentrate)",
    subtitle: "Powerful non-foaming alkaline cleaner with up to 7 days corrosion inhibition.",
    badge: "NON-FOAMING · CORROSION INHIBITOR",
    heroImage: HERO.industrial,
    overview:
      "BUPICLEANER is a powerful alkaline-concentrate cleaner with specific additives — a universal cleaning and degreasing agent. Non-foaming and acts as a corrosion inhibitor providing up to 7 days resistance against rust build-up for stored equipment. Special ingredients allow cleaning and protection of ferrous and non-ferrous metals and plastics.",
    features: [
      ["Non-Foaming Process Cleaner", "Ideal for circulating and spray systems where foam is unwanted.", "NF concentrate"],
      ["7-Day Rust Hold", "Corrosion inhibitor protects stored equipment up to 7 days.", "Ferro & non-ferro"],
      ["Metals & Plastics", "Cleans and protects ferrous, non-ferrous metals and plastics.", "Universal alkaline"],
    ],
    applications: [
      "Parts washing systems",
      "In-process degreasing",
      "Temporary corrosion protection in storage",
    ],
    certifications: ["Industrial cleaner", "REACH"],
  }),

  "universal-cleaner": page({
    slug: "universal-cleaner",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Universal Cleaner | Economic Universal",
    subtitle: "Powerful solvent-free universal cleaner — aviation and industrial approved lineage.",
    badge: "PH >12 · SOLVENT-FREE · ALUMINIUM SAFE",
    heroImage: HERO.industrial,
    overview:
      "Economic Universal is a very powerful environmental universal cleaner for all cleaning and degreasing operations. Designed to meet stringent regulations — solvent free and wastewater friendly. Developed for commercial and military aircraft maintenance and GSE. High pH (>12) with aluminium inhibitors. Dilutable; watery part drainable to sewage; not subject to dangerous goods labelling. Use in high/low pressure equipment, vapour cleaning and automatic mixing or manually.",
    features: [
      ["High-pH Cleaning Power", "pH >12 for vigorous cleaning of heavy industrial and aviation soils.", "Aluminium inhibited"],
      ["Solvent-Free & DG Light", "Wastewater friendly; not subject to dangerous goods labelling.", "Sewage pathway"],
      ["Process Flexible", "High/low pressure, vapour cleaning, automatic mix or manual application.", "Aviation heritage"],
    ],
    applications: [
      "Aviation and GSE cleaning",
      "Industrial workshop degreasing",
      "Automated wash equipment",
    ],
    certifications: ["Solvent-free", "Aviation MRO developed", "REACH"],
  }),

  "heavy-duty-aluminium-cleaner": page({
    slug: "heavy-duty-aluminium-cleaner",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Aluminium Cleaner | Heavy Duty HDAL",
    subtitle: "Inhibited water-based alkaline cleaner safe on ferrous and non-ferrous materials.",
    badge: "HDAL · ALUMINIUM SAFE · NOZZLE FRIENDLY",
    heroImage: HERO.industrial,
    overview:
      "HDAL is a liquid, inhibited, water-based alkaline cleaner designed to clean mineral oil and grease. Ideal heavy-duty universal cleaner safe on ferrous and non-ferrous materials. Unlike uninhibited alkaline cleaners that risk damaging aluminium, HDAL contains special ingredients for complete non-ferrous safety and is formulated to eliminate blocking in nozzles and small lines in cleaning machines and high-pressure units.",
    features: [
      ["Non-Ferrous Safe", "Inhibited alkaline chemistry safe on aluminium and other non-ferrous metals.", "HDAL"],
      ["Oil & Grease Removal", "Designed for mineral oil and grease cleaning in heavy-duty service.", "Water-based"],
      ["Nozzle Protection", "Formulated to avoid blocking nozzles and small lines in wash equipment.", "HP unit friendly"],
    ],
    applications: [
      "Aluminium parts washing",
      "High-pressure cleaning systems",
      "Mixed-metal workshop cleaning",
    ],
    certifications: ["Inhibited alkaline", "REACH"],
  }),

  "nonsol-1": page({
    slug: "nonsol-1",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "NONSOLAr 1",
    subtitle: "Heavy-duty solvent-free cleaner with light corrosion inhibitor — cold or warm use.",
    badge: "SOLVENT-FREE · FERRO & NON-FERRO",
    heroImage: HERO.industrial,
    overview:
      "NONSOLAr 1 is specially designed to meet stringent regulations — a heavy-duty solvent-free cleaner for industrial general maintenance where light corrosion inhibitor is needed. Applicable on ferro and non-ferro. Suitable for crude oils, grease deposits and carbonaceous residues on valves, machine parts, wheel bearings and tool-shop applications. Longer lifetime. Used cold as replacement for aromatic solvent cleaner; used warm for heavy applications or to speed degreasing and drying.",
    features: [
      ["Aromatic Solvent Replacement", "Cold-use solvent-free alternative to aromatic solvent cleaners.", "Light corrosion inhibitor"],
      ["Warm Acceleration", "Warm use for heavy soils or faster degrease and dry times.", "Ferro & non-ferro"],
      ["Process Parts Cleaning", "Valves, bearings, machine parts and carbonaceous residues.", "Longer bath life"],
    ],
    applications: [
      "Tool shop and maintenance degreasing",
      "Valve and bearing cleaning",
      "Replacement of aromatic solvents",
    ],
    certifications: ["Solvent-free", "REACH"],
  }),

  "nonsol-6": page({
    slug: "nonsol-6",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "NONSOLAr 6",
    subtitle: "Heavy-duty solvent-free cleaner for cleaning units — ~3× longer life than solvents.",
    badge: "WARM ~50°C · CLEANING UNIT READY",
    heroImage: HERO.industrial,
    overview:
      "NONSOLAr 6 is a heavy-duty solvent-free cleaner for industrial general maintenance with light corrosion inhibitor. Applicable on ferro and non-ferro for crude oils, grease deposits and carbonaceous residues. Longer lifetime — approximately 3× longer than solvent types. Used warm circa 50°C for heavy applications or faster degreasing and drying. Specially designed for use in a cleaning unit; ready-to-use fluid.",
    features: [
      ["~3× Bath Life", "Longer lifetime versus conventional solvent cleaners.", "Ready to use"],
      ["Cleaning Unit Design", "Specially designed for use in industrial cleaning units.", "Warm ~50°C"],
      ["Carbon & Grease Power", "Crude oils, grease deposits and carbonaceous residues.", "Ferro & non-ferro"],
    ],
    applications: [
      "Industrial cleaning units",
      "Production and maintenance degreasing",
      "Machine parts and wheel bearings",
    ],
    certifications: ["Solvent-free", "REACH"],
  }),

  "e-flush": page({
    slug: "e-flush",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "E-Flush | Flush Concentrate",
    subtitle: "Environmentally petroleum cleaner for in-situ mineral-oil residue flushing.",
    badge: "IN-SITU · ALKALINE · SPECIALISED BLENDS",
    heroImage: HERO.industrial,
    overview:
      "E-Flush | Flush Concentrate (Environmentally Petroleum Cleaner) is specially designed for in-situ cleaning of mineral-oil-based residues. Universal heavy-duty alkaline cleaner. ETS offers specialised formulations including acid, alkaline and combination types to provide the optimum cleaning agent for the problem.",
    features: [
      ["In-Situ Flushing", "Cleans mineral-oil residues without full system dismantling where applicable.", "Petroleum cleaner"],
      ["Formulation Choice", "Acid, alkaline and combination variants for problem-specific selection.", "Heavy-duty alkaline base"],
      ["Environmental Focus", "Positioned as environmentally responsible petroleum cleaning chemistry.", "Process systems"],
    ],
    applications: [
      "In-situ oil system flushing",
      "Mineral-oil residue removal",
      "Industrial process cleaning",
    ],
    certifications: ["Industrial flush chemistry", "REACH"],
  }),

  "egr-extra": page({
    slug: "egr-extra",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "EGR Extra (Extreme Grease Remover Extra)",
    subtitle: "Fatty-ester mix-blend cleaner for crude oils, tar, ink, glue and stainless steel.",
    badge: "NON-TOXIC · NON-FLAMMABLE · BIODEGRADABLE",
    heroImage: HERO.industrial,
    overview:
      "ETS-EGR EXTRA is a mixed-blend cleaner based on fatty ester. Industrial cleaning services value its broad spectrum and high cleaning power. Ideal for crude oils, grease deposits, anti-corrosion coatings, printing ink, etiquette glue removing, stainless steel cleaning, hydrocarbon residues and tar-like deposits. Non-toxic, non-flammable, biodegradable and quickly de-emulsifies for water-oil separators.",
    features: [
      ["Broad Spectrum Power", "Crude oils, tar, ink, glue, coatings and stainless cleaning in one ester blend.", "High cleaning power"],
      ["Separator Friendly", "Quickly de-emulsifies for use with water-oil separators.", "Biodegradable"],
      ["Safer Handling Profile", "Non-toxic and non-flammable versus many solvent greasers.", "Fatty ester base"],
    ],
    applications: [
      "Industrial contract cleaning",
      "Stainless steel degreasing",
      "Ink and adhesive residue removal",
    ],
    certifications: ["Biodegradable", "Non-flammable", "REACH"],
  }),

  hdc: page({
    slug: "hdc",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "HDC | Heavy Duty Cleaner",
    subtitle: "Vegetable emulsifier blend with citrus scent — stable with oil-water separators.",
    badge: "CITRUS · BIODEGRADABLE · SEPARATOR STABLE",
    heroImage: HERO.industrial,
    overview:
      "HEAVY DUTY CLEANER (HDC) is a blend of vegetable emulsifiers of the turpentine group, surfactants and sequestering agents. Universal cleaner for heavy contamination. Highly biodegradable, environmentally friendly and smells like fresh citrus. Remains stable and does not emulsify when used with water and oil separators.",
    features: [
      ["Heavy Contamination", "Universal cleaner for tough industrial soils and deposits.", "Vegetable emulsifiers"],
      ["Citrus Profile", "Fresh citrus smell with high biodegradability.", "User friendly"],
      ["Separator Stable", "Does not emulsify problematically in oil-water separators.", "Process compatible"],
    ],
    applications: [
      "Heavy industrial degreasing",
      "Workshop and plant cleaning",
      "Separator-equipped wash systems",
    ],
    certifications: ["Highly biodegradable", "REACH"],
  }),

  "economic-oxygen-cleaner": page({
    slug: "economic-oxygen-cleaner",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Economic Oxygen Cleaner",
    subtitle: "Alkaline water-soluble cleaner approved for oxygen equipment and oxygen pipes.",
    badge: "OXYGEN SERVICE · SOLVENT REPLACEMENT",
    heroImage: HERO.industrial,
    overview:
      "Economic Oxygen Cleaner is an alkaline cleaning and degreasing agent fully soluble in water. Approved for cleaning of oxygen equipment and oxygen pipes — therefore it can replace a wide range of chlorinated products and solvents.",
    features: [
      ["Oxygen Equipment Approved", "Suitable for oxygen equipment and oxygen pipe cleaning programmes.", "Water soluble"],
      ["Chlorinated Product Replacement", "Replaces a wide range of chlorinated cleaners and solvents.", "Alkaline degreaser"],
      ["Safer Process Chemistry", "Water-based route for critical oxygen-service cleanliness.", "Fully soluble"],
    ],
    applications: [
      "Oxygen pipework cleaning",
      "Oxygen equipment maintenance",
      "Replacement of chlorinated solvents",
    ],
    certifications: ["Oxygen service approved", "REACH"],
  }),

  "truckclean-300-hf": page({
    slug: "truckclean-300-hf",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Truckclean 300 HF",
    subtitle: "Strong concentrated light-alkaline cleaner specially designed to clean trucks.",
    badge: "TRUCK WASH · LIGHT ALKALINE",
    heroImage: HERO.truck,
    overview:
      "Truckclean 300 HF is a very strong concentrated light alkaline cleaner, specially designed to clean trucks.",
    features: [
      ["Truck-Specific Formula", "Concentrated chemistry tuned for truck exterior cleaning.", "Light alkaline"],
      ["Strong Concentrate", "High strength for fleet wash bays and mobile wash programmes.", "HF grade"],
      ["Fleet Throughput", "Supports professional truck wash operations.", "Exterior wash"],
    ],
    applications: [
      "Truck wash installations",
      "Fleet exterior cleaning",
      "Transport depot wash bays",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "truckclean-350": page({
    slug: "truckclean-350",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Truckclean 350",
    subtitle: "Powerful concentrated cleaner with special composition for truck cleaning.",
    badge: "TRUCK WASH · HIGH POWER",
    heroImage: HERO.truck,
    overview:
      "Truckclean 350 is a very powerful and strong concentrated cleaner with a very special composition, specially designed to clean trucks.",
    features: [
      ["High Cleaning Power", "Strong concentrate for heavily soiled truck exteriors.", "Special composition"],
      ["Fleet Wash Ready", "Built for professional truck cleaning operations.", "Concentrated"],
      ["Transport Sector", "Supports depot and wash-bay truck programmes.", "Exterior care"],
    ],
    applications: [
      "Heavy-soil truck washing",
      "Fleet maintenance cleaning",
      "Commercial wash tunnels",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "insect-remover": page({
    slug: "insect-remover",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Insect Remover",
    subtitle: "Concentrated foam that rapidly dissolves squashed insects — roadside or full wash.",
    badge: "FOAM · RAPID DISSOLVE",
    heroImage: HERO.truck,
    overview:
      "Insect Remover is a concentrated foam designed to rapidly dissolve squashed insects. It can be used at the roadside as a quick fix or as part of the full car cleaning process.",
    features: [
      ["Rapid Insect Dissolve", "Concentrated foam breaks down squashed insect soils quickly.", "Foam action"],
      ["Roadside Quick Fix", "Use as a rapid treatment between full washes.", "Mobile friendly"],
      ["Full Wash Compatible", "Integrates into complete vehicle cleaning processes.", "Paint considerate"],
    ],
    applications: [
      "Vehicle frontal insect removal",
      "Car and truck wash pre-treatment",
      "Fleet appearance programmes",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "wheel-clean-profi-1": page({
    slug: "wheel-clean-profi-1",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Wheel Clean Profi 1",
    subtitle: "Professional wheel cleaner for polish shops, car wash and truck wash installations.",
    badge: "PROFI · CAR & TRUCK WASH",
    heroImage: HERO.truck,
    overview:
      "Wheel Clean is designed for professional users such as polish companies, car wash and truck wash installations.",
    features: [
      ["Professional Grade", "Built for polish shops and commercial wash installations.", "Profi 1"],
      ["Car & Truck Wash", "Suitable for car wash and truck wash wheel programmes.", "Brake-dust focus"],
      ["Installation Ready", "Fits professional wash bay chemical programmes.", "Fleet capable"],
    ],
    applications: [
      "Car wash wheel cleaning",
      "Truck wash installations",
      "Detailing and polish shops",
    ],
    certifications: ["Professional vehicle care"],
  }),

  "truck-wax": page({
    slug: "truck-wax",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Truck Wax",
    subtitle: "Powerful highly concentrated alkaline cleaner composition adapted to truck cleaning.",
    badge: "TRUCK · CONCENTRATED",
    heroImage: HERO.truck,
    overview:
      "TRUCK-WAX is a very powerful and highly concentrated alkaline cleaner with a very special composition adapted to truck cleaning.",
    features: [
      ["Truck-Adapted Chemistry", "Special composition for truck exterior cleaning programmes.", "Highly concentrated"],
      ["Alkaline Power", "Powerful alkaline cleaner for fleet soils.", "Wash-bay ready"],
      ["Fleet Finish", "Supports professional truck cleaning appearance standards.", "Concentrated dose"],
    ],
    applications: [
      "Truck exterior cleaning",
      "Fleet wash programmes",
      "Transport depot care",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "hot-cold-wax": page({
    slug: "hot-cold-wax",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Hot | Cold Wax",
    subtitle: "Fast, efficient wash chemistry for all vehicle types with minimum effort.",
    badge: "HOT & COLD · ALL VEHICLES",
    heroImage: HERO.truck,
    overview:
      "Hot | Cold Wax is designed to give a fast, efficient wash to all types of vehicles with the minimum of effort.",
    features: [
      ["Hot or Cold Process", "Flexible application across hot and cold wash systems.", "All vehicle types"],
      ["Minimum Effort", "Fast efficient wash performance with reduced labour.", "Wash efficiency"],
      ["Fleet Versatility", "Cars, vans and commercial vehicles in one programme.", "Depot friendly"],
    ],
    applications: [
      "Car and van wash systems",
      "Fleet wash tunnels",
      "Manual wash programmes",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "car-shampoo-brilliant-shine": page({
    slug: "car-shampoo-brilliant-shine",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Car Shampoo Brilliant Shine",
    subtitle: "Highly concentrated shampoo for paint, metal, glass, plastics and rubber.",
    badge: "BRILLIANT SHINE · FAST DRYING",
    heroImage: HERO.truck,
    overview:
      "A highly concentrated car shampoo for cleaning paint, metal, glass, plastics and rubber. Deep cleaning and fast drying performance with a brilliant shine.",
    features: [
      ["Multi-Material Clean", "Safe programme for paint, metal, glass, plastics and rubber.", "Concentrated"],
      ["Brilliant Shine", "Deep clean with fast drying and high-gloss finish.", "Showroom look"],
      ["Professional Wash", "Built for detailing and commercial car wash use.", "Fast performance"],
    ],
    applications: [
      "Car wash shampoo cycles",
      "Detailing wash stages",
      "Fleet light-vehicle cleaning",
    ],
    certifications: ["Vehicle care chemistry"],
  }),

  "tgv-train-cleaner": page({
    slug: "tgv-train-cleaner",
    category: "Vehicle Care",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "TGV Train Cleaner",
    subtitle: "Concentrated cleaner for high-speed trains, metro, bus and transport fleets.",
    badge: "TGV · ANTISTATIC · BIODEGRADABLE",
    heroImage: HERO.truck,
    overview:
      "TGV TRAIN CLEANER is a highly concentrated special cleaning product for train, subway, bus — wax, metal, glass, plastic and rubber. Removes dirt, insects and residues with perfect brightness. Specially qualified for high-speed trains and windshields with heavy dirt and insects without damaging the surface. Deep cleans with antistatic effect to prevent re-contamination. Biodegradable and non-flammable — safe for trains, metro, metrobus, high-speed trains, buses, cars and speed boats.",
    features: [
      ["High-Speed Train Qualified", "Handles windshield insect and heavy dirt soils on TGV-class fleets.", "Surface safe"],
      ["Antistatic Finish", "Deep clean with antistatic effect to slow re-contamination.", "Brilliant brightness"],
      ["Multi-Modal Transport", "Train, metro, bus, car and speed-boat compatible.", "Biodegradable · non-flammable"],
    ],
    applications: [
      "High-speed train exterior cleaning",
      "Metro and bus fleets",
      "Transport sector vehicle wash",
    ],
    certifications: ["Biodegradable", "Non-flammable"],
  }),

  antifoam: page({
    slug: "antifoam",
    category: "Process Additives",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Antifoam",
    subtitle: "Stops foaming in circulation systems and filling processes — economical and friendly.",
    badge: "PROCESS · CIRCULATION SYSTEMS",
    heroImage: HERO.industrial,
    overview:
      "Antifoam is a product to stop foaming in circulation systems and filling processes — a very friendly economical product.",
    features: [
      ["Foam Control", "Stops unwanted foaming in circulating process systems.", "Circulation ready"],
      ["Filling Processes", "Controls foam during filling and transfer operations.", "Process additive"],
      ["Economical Dose", "Friendly and economical antifoam for industrial use.", "Low treat rate"],
    ],
    applications: [
      "Cleaning circulation systems",
      "Industrial filling lines",
      "Process foam suppression",
    ],
    certifications: ["Process additive"],
  }),

  "black-remover": page({
    slug: "black-remover",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Black Remover",
    subtitle: "Inhibited acid cleaner for heavily contaminated stainless steel — CIP friendly.",
    badge: "STAINLESS · CIP · INHIBITED ACID",
    heroImage: HERO.industrial,
    overview:
      "ETS-Black Remover is a liquid, inhibited acid cleaner designed for professional cleaning of heavily contaminated stainless steel surfaces (e.g. descale heat-exchangers). Also has good degreasing capabilities. Use only on acid-resistant materials such as stainless steel and plastics. Mainly used in Cleaning In Place applications. Specially inhibited for less aggressive harm to users versus uninhibited acids.",
    features: [
      ["Stainless Descale", "Professional cleaning of heavily contaminated stainless surfaces.", "Heat-exchanger ready"],
      ["CIP Compatible", "Mainly used in Cleaning In Place applications.", "Degrease capable"],
      ["Inhibited for Users", "Special inhibition for less aggressive handling versus raw acids.", "Acid-resistant materials only"],
    ],
    applications: [
      "Heat-exchanger descaling",
      "CIP stainless cleaning",
      "Heavy stainless contamination removal",
    ],
    certifications: ["Inhibited acid cleaner", "CIP"],
  }),

  "floor-shine": page({
    slug: "floor-shine",
    category: "Facility Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Floor Shine",
    subtitle: "Concentrated universal floor cleaner for industrial floors, tiles and vinyl.",
    badge: "SHINE · FRESH SMELL · CONCENTRATE",
    heroImage: HERO.facility,
    overview:
      "Floor Shine is a concentrated universal floor cleaner. It can be used for industrial floors, tiles, vinyl and more. Floor Shine leaves a nice shine and fresh smell after use.",
    features: [
      ["Universal Floor Cleaner", "Works on industrial floors, tiles and vinyl surfaces.", "Concentrated"],
      ["Shine Finish", "Leaves a nice shine after cleaning.", "Presentation ready"],
      ["Fresh Smell", "Pleasant fragrance after use for facilities and hospitality.", "Daily programmes"],
    ],
    applications: [
      "Industrial floor cleaning",
      "Hotel and facility floors",
      "Tile and vinyl maintenance",
    ],
    certifications: ["Facility cleaner", "REACH"],
  }),

  "multi-tissue-wipes": page({
    slug: "multi-tissue-wipes",
    category: "Aviation Products",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aircraft Cockpit Cleaners | Multi Tissue Wipes",
    subtitle: "Ready-to-use wipes saturated with aircraft cleaner for instruments and dry wash.",
    badge: "SMI · AIRBUS · BOEING · NATO",
    heroImage: HERO.aviation,
    overview:
      "Aircraft Cockpit Cleaner Tissue Wipes are soaked with Aircraft Cleaner confirmed with SMI Miami USA, McDonnell Douglas, Airbus, Boeing, NATO and Military PRF specifications. Ready to use for quick cleaning-degreasing where spray is unsuitable or dangerous — instruments, switches, monitors and panels. Also usable as dry wash for exterior cleaning. Re-treat with wet towel and dry with soft cloth for shiny results. Wipes are re-usable by wetting again with clear water. Also available with ETS Aircraft Cleaner Interior 3258-ACI. Wash hands and use skin-care lotion per MSDS guidance.",
    features: [
      ["OEM-Spec Saturation", "Wipes carry cleaner aligned to SMI, Airbus, Boeing, NATO and Mil-PRF heritage.", "Cockpit safe process"],
      ["No-Spray Zones", "Ideal where spray application is unsuitable or dangerous.", "Instruments & panels"],
      ["Re-usable Dry Wash", "Re-wet with clear water; also usable for exterior dry wash.", "Interior 3258-ACI option"],
    ],
    applications: [
      "Cockpit instrument cleaning",
      "Cabin no-spray zones",
      "Exterior dry-wash touch-ups",
    ],
    certifications: ["SMI Miami", "Airbus", "Boeing", "NATO / Mil-PRF lineage"],
  }),

  "pressure-cleaner-8ato": page({
    slug: "pressure-cleaner-8ato",
    category: "Industrial Cleaners",
    parentMenu: "Cleaners",
    parentSlug: "/cleaners",
    title: "Pressure Cleaner 8ATO",
    subtitle: "Cleaner with specific additives for universal cleaning and degreasing applications.",
    badge: "PRESSURE WASH · UNIVERSAL",
    heroImage: HERO.industrial,
    overview:
      "Pressure Cleaner is a cleaner with specific additives to have universal employability for cleaning and degreasing applications — suited to pressure-wash and broad industrial use.",
    features: [
      ["Universal Employability", "Specific additives for broad cleaning and degreasing duties.", "8ATO"],
      ["Pressure-Wash Ready", "Suited to pressure cleaning equipment and wash bays.", "Degrease capable"],
      ["Industrial Versatility", "One chemistry across many maintenance cleaning tasks.", "Workshop standard"],
    ],
    applications: [
      "Pressure-wash degreasing",
      "Industrial maintenance cleaning",
      "Heavy equipment wash-downs",
    ],
    certifications: ["Industrial cleaner"],
  }),

  "oven-and-grill-cleaner": page({
    slug: "oven-and-grill-cleaner",
    category: "HACCP Products",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "Oven and Grill Cleaner",
    subtitle: "Universally applicable cleaner for all kinds of grilling brands and ovens.",
    badge: "KITCHEN · GRILL · OVEN",
    heroImage: HERO.hospitality,
    overview:
      "Oven and Grill Cleaner is universally applicable to all kinds of grilling brands and ovens — for hospitality, catering and commercial kitchen carbon and grease soils.",
    features: [
      ["All Grill Brands", "Universally applicable across grilling equipment brands.", "Kitchen ready"],
      ["Oven Carbon Soils", "Targets baked-on greases and residues in commercial ovens.", "Hospitality grade"],
      ["Catering Compatible", "Built for restaurant and catering kitchen programmes.", "Daily deep clean"],
    ],
    applications: [
      "Restaurant ovens and grills",
      "Hotel kitchen deep clean",
      "Catering equipment maintenance",
    ],
    certifications: ["Kitchen chemistry", "HACCP programmes"],
  }),
};
