export interface SubpageInfo {
  slug: string;
  category: string;
  parentMenu: string;
  parentSlug?: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  overview: string;
  features: {
    title: string;
    description: string;
    highlight?: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  certifications: string[];
  metaTitle?: string;
}

export const subpagesData: Record<string, SubpageInfo> = {
  /* ─── Aviation Subpages ─── */
  "commercial-aviation-industry": {
    slug: "commercial-aviation-industry",
    category: "Aviation & Aerospace",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Commercial Aviation Industry Solutions",
    subtitle: "Airbus & Boeing certified exterior and interior aircraft cleaning chemistry.",
    badge: "AIRBUS AIMS 09-00-002 · BOEING D6-17487",
    heroImage: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1600&fit=crop&auto=format",
    overview: "ETS International provides world-class biodegradable, non-corrosive cleaning formulations engineered for commercial airline fleets. Tested and certified according to stringent aerospace standards including SMI Miami, Airbus, and Boeing specifications, our solutions safely remove carbon exhaust, hydraulic fluids, insect residue, and oxidation without damaging painted, polished, or composite surfaces.",
    features: [
      {
        title: "Aircraft Exterior Wash & Polish",
        description: "Zero-VOC exterior cleaners that dissolve electrostatic dirt film and brake dust while leaving a high-gloss, aerodynamic protective finish.",
        highlight: "Reduces parasitic aerodynamic drag"
      },
      {
        title: "Turbine & Compressor Washing",
        description: "Highly specialized non-flammable washes formulated to remove salt and atmospheric deposits from turbine blades, restoring fuel efficiency.",
        highlight: "Up to 6%+ fuel savings"
      },
      {
        title: "Cabin Sanitization & Galley Hygiene",
        description: "Non-toxic, odor-neutralizing disinfectants certified safe for high-contact surfaces, tray tables, windows, and IFE displays.",
        highlight: "AMS 1452 & AMS 1453 certified"
      },
      {
        title: "Landing Gear & Wheel Bay Degreasing",
        description: "Heavy-duty ester-based degreasers that penetrate baked-on hydraulic oils, carbon dust, and grease without attacking seals or cadmium plating.",
        highlight: "Cadmium and magnesium safe"
      }
    ],
    specifications: [
      { label: "Dilution Ratio", value: "1:10 up to 1:50 with water" },
      { label: "pH Level (Concentrate)", value: "8.5 - 9.2 (Mildly Alkaline, Surface-Neutral)" },
      { label: "Biodegradability", value: "100% OECD 301 B/D Certified (>98% in 14 days)" },
      { label: "Flash Point", value: "None (Non-flammable aqueous solution)" },
      { label: "Corrosion Testing", value: "Conforms to Boeing Sandwich Corrosion Test" },
      { label: "VOC Content", value: "0 g/L (100% VOC-Free)" }
    ],
    applications: [
      "Commercial airliner exterior dry & wet washing",
      "Turbine compressor & hot-section desalting wash",
      "Wheel well, landing gear, and flap track degreasing",
      "Passenger cabin deep sanitization and carpet cleaning",
      "Galley, lavatory, and potable water holding tank maintenance"
    ],
    certifications: ["AIRBUS AIMS 09-00-002", "BOEING D6-17487", "SMI Inc. Miami", "AMS 1526C", "ISO 9001:2015"]
  },

  "military-aviation-industry": {
    slug: "military-aviation-industry",
    category: "Aviation & Aerospace",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Military Aviation & Tactical Fleet Maintenance",
    subtitle: "NATO codified (NSN) mission-critical cleaning chemistry for defense airframes and support equipment.",
    badge: "NATO CODIFIED (NSN) · MIL-PRF-87937",
    heroImage: "https://images.unsplash.com/photo-1519074069444-1ba4eae16e3e?w=1600&fit=crop&auto=format",
    overview: "Engineered to withstand rigorous operational demands in austere defense environments, ETS defense formulations meet and exceed US Military and NATO standards. Designed for fighter jets, tactical transports, helicopters, and UAVs, our solvent-free chemistries rapidly clean radar-absorbent coatings (RAM), weapons bays, and turbine assemblies without leaving detectable thermal or chemical signatures.",
    features: [
      {
        title: "Radar Absorbent Material (RAM) Safe",
        description: "Formulated without harsh solvents or corrosive salts, protecting specialized stealth coatings and delicate sensor radomes.",
        highlight: "MIL-PRF-85570 Type II Compliant"
      },
      {
        title: "Shipboard & Carrier Operations",
        description: "High-salinity washdown solutions that neutralize marine salt spray and prevent galvanically accelerated corrosion on carrier flight decks.",
        highlight: "Exceeds salt fog corrosion specs"
      },
      {
        title: "Helicopter Rotor & Gearbox Wash",
        description: "Rapidly penetrates heavy synthetic turbine oils and exhaust soot along rotor head linkages without degrading elastomer seals.",
        highlight: "Eurocopter / Leonardo qualified"
      }
    ],
    specifications: [
      { label: "Codification", value: "NATO Stock Numbers (NSN) Registered" },
      { label: "Standards", value: "MIL-PRF-87937D / MIL-PRF-85570E" },
      { label: "Hydrogen Embrittlement", value: "Passed ASTM F519 on high-strength steel" },
      { label: "Storage Stability", value: "-20°C to +60°C operational stability" },
      { label: "Biodegradability", value: "100% Environmentally Non-Hazardous" }
    ],
    applications: [
      "Tactical fighter aircraft airframe washdown",
      "Naval carrier helicopter rotor head and engine desalting",
      "Transport and refueling aircraft exterior decon",
      "Munitions bay, pylon, and ground support equipment (GSE) degreasing"
    ],
    certifications: ["NATO NSN Codified", "MIL-PRF-87937D", "MIL-PRF-85570E", "ASTM F519", "NAMSA Approved"]
  },

  "benefits": {
    slug: "benefits",
    category: "Aviation & Aerospace",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aviation Cleaning Advantages & Tangible ROI",
    subtitle: "Quantifiable fuel reduction, turnaround acceleration, and environmental compliance.",
    badge: "6%+ FUEL SAVINGS · 100% NON-CORROSIVE",
    heroImage: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1600&fit=crop&auto=format",
    overview: "Transitioning to ETS International bio-aviation chemistry provides airline operators and MRO facilities with a proven return on investment. By eliminating solvent fumes, mitigating hazardous waste disposal costs, reducing wash cycle downtime, and restoring aerodynamic efficiency, ETS helps carriers achieve both their sustainability targets and balance-sheet goals.",
    features: [
      {
        title: "Aerodynamic Drag Minimization",
        description: "Microscopic surface leveling removes microscopic grime accumulation, smoothing laminar boundary airflow and saving fuel.",
        highlight: "Documented 6%+ engine efficiency gain"
      },
      {
        title: "Elimination of Hazardous Waste Surcharges",
        description: "Being 100% biodegradable and zero-VOC, wash water effluent does not trigger expensive toxic disposal compliance penalties.",
        highlight: "Direct operational savings"
      },
      {
        title: "Substantial Worker Health & Safety Gains",
        description: "Zero VOCs, no carcinogenic glycol ethers, and non-flammable formulation mean personnel work without respiratory hazard gear.",
        highlight: "Reduced sick leave and OSHA claims"
      }
    ],
    specifications: [
      { label: "Fuel Consumption Impact", value: "6.2% documented turbine efficiency increase" },
      { label: "Turnaround Time Impact", value: "35% faster wash cycles via fast-penetrating ester action" },
      { label: "Effluent Compatibility", value: "Discharges safely into standard oil-water separators" },
      { label: "Asset Protection", value: "Extends paint longevity by up to 3 seasons" }
    ],
    applications: [
      "Line maintenance overnight turnarounds",
      "Heavy C-Check and D-Check structural pre-inspection cleaning",
      "Regular turbine compressor fuel-efficiency preservation programs"
    ],
    certifications: ["Airbus", "Boeing", "SMI Miami", "ISO 14001:2015", "REACH Registered"]
  },

  "cleaning-accessories": {
    slug: "cleaning-accessories",
    category: "Aviation & Aerospace",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Aviation Cleaning Equipment & Accessories",
    subtitle: "Ergonomic, ramp-certified application poles, foam dosing systems, and micro-mop assemblies.",
    badge: "RAMP CERTIFIED · ERGONOMIC DESIGN",
    heroImage: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=1600&fit=crop&auto=format",
    overview: "Maximum chemistry performance requires precision delivery tooling. ETS supplies complete ground-support cleaning systems including ultra-lightweight telescopic carbon fiber poles, pneumatic foam generators, curved aircraft wing mops, and calibrated proportioning injectors tailored for line maintenance ramps and hangar operations.",
    features: [
      {
        title: "Ultra-Light Carbon Fiber Telescopic Poles",
        description: "Extendable up to 12 meters with zero flex, enabling operators to wash wide-body tail fins safely from ground level without cherry pickers.",
        highlight: "Weighs under 2.8 kg"
      },
      {
        title: "Pneumatic Foam Generator Systems",
        description: "Generates cling-dense dry foam that adheres to vertical fuselages and undersides, prolonging dwell time without fluid runoff.",
        highlight: "50% lower chemistry consumption"
      },
      {
        title: "Contoured Micro-Mop Heads",
        description: "Swivel-head applicators with replaceable lint-free microfiber pads engineered to clean leading edges without scratching acrylic cockpit windows.",
        highlight: "Boeing-approved non-scratch pads"
      }
    ],
    specifications: [
      { label: "Pole Lengths", value: "3m, 6m, 9m, and 12m telescopic reach" },
      { label: "Material Composition", value: "Aerospace-grade high-modulus carbon composite" },
      { label: "Foam Injection Pressure", value: "3.5 - 6.0 bar operating range" },
      { label: "Nozzle Attachments", value: "Quick-disconnect stainless steel 316 fittings" }
    ],
    applications: [
      "Fuselage and empennage wash from ground level",
      "Cockpit windscreen and optical sensor polishing",
      "Wing surface and engine nacelle foam application",
      "Hangar floor scrubber-dryer integration"
    ],
    certifications: ["CE Certified", "Ramp Safety Compliant", "ISO 9001:2015"]
  },

  "aviation-services": {
    slug: "aviation-services",
    category: "Aviation & Aerospace",
    parentMenu: "Aviation",
    parentSlug: "/industries/aviation",
    title: "Turnkey Aviation Maintenance & Technical Services",
    subtitle: "On-site staff certification, wash bay wastewater engineering, and custom chemical synthesis.",
    badge: "GLOBAL TECHNICAL SUPPORT · ON-SITE AUDITS",
    heroImage: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1600&fit=crop&auto=format",
    overview: "Beyond chemistry supply, ETS International provides comprehensive engineering services for commercial airlines, defense commands, and airport authorities. Our German engineering team conducts on-site wash-process audits, designs closed-loop water filtration systems, and delivers certified operator training programs.",
    features: [
      {
        title: "Wash Bay Wastewater Recycling Design",
        description: "Closed-loop filtration systems that treat and recycle up to 90% of aircraft wash wastewater, reducing municipal sewer impact.",
        highlight: "90% water conservation"
      },
      {
        title: "Operator Certification & Ramp Training",
        description: "Comprehensive multi-lingual training covering surface compatibility, dwell time optimization, and ramp safety protocols.",
        highlight: "IATA Ramp Safety aligned"
      },
      {
        title: "Custom Formulations & OEM Approvals",
        description: "Laboratory development of customized cleaners to meet emerging airline specs or specific regional climatic challenges.",
        highlight: "Tailored German R&D"
      }
    ],
    specifications: [
      { label: "Service Availability", value: "Worldwide dispatch / Remote engineering support" },
      { label: "Training Languages", value: "English, German, French, Arabic, Spanish" },
      { label: "Audit Deliverables", value: "Chemical consumption matrix, OSHA safety dossier, ROI report" }
    ],
    applications: [
      "Airline hub environmental transition programs",
      "MRO hangar modernization and wash bay design",
      "Military maintenance squadron training"
    ],
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "IATA Environmental Partner"]
  },

  /* ─── Industrial Subpages ─── */
  "metal-paint-workshop": {
    slug: "metal-paint-workshop",
    category: "Industrial & Manufacturing",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Metal, Paint & Workshop Surface Solutions",
    subtitle: "Zero-VOC degreasing, ultrasonic bath chemistry, and pre-paint surface preparation.",
    badge: "ZERO-VOC · ULTRASONIC & IMMERSION",
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1600&fit=crop&auto=format",
    overview: "Manufacturing facilities, CNC machine shops, and automotive paint booths require absolute surface purity without hazardous solvent exposure. ETS bio-based degreasers break surface tension rapidly, removing heavy stamping oils, metal shavings, and cooling lubricants to guarantee flawless paint, e-coat, and powder coating adhesion.",
    features: [
      {
        title: "Pre-Paint & Pre-Powder Coating Preparation",
        description: "Eliminates silicone residues and hydrocarbon films, creating a microscopic water-break-free clean surface with zero flash-rusting.",
        highlight: "Guarantees 100% paint adhesion"
      },
      {
        title: "Ultrasonic Bath & Immersion Cleaning",
        description: "Extended bath life formulation that demulsifies oil, allowing oil skimming and extending solution lifespan up to 4x longer than standard cleaners.",
        highlight: "4x longer tank lifetime"
      },
      {
        title: "Tool & Machine Maintenance",
        description: "Dissolves polymerized grease, resin buildup, and coolant scum from lathe beds, CNC centers, and stamping presses.",
        highlight: "Safe for rubber gaskets and wiring"
      }
    ],
    specifications: [
      { label: "Operating Temperature", value: "Ambient (20°C) up to 75°C in ultrasonic baths" },
      { label: "Corrosion Protection", value: "Integrated temporary indoor corrosion inhibitor (30 days)" },
      { label: "Solvent Replacements", value: "Replaces Acetone, MEK, Xylene, White Spirits" },
      { label: "Safety Rating", value: "Non-flammable, Non-toxic, REACH Compliant" }
    ],
    applications: [
      "CNC machined component degreasing",
      "Pre-treatment prior to powder coating or electroplating",
      "Ultrasonic immersion cleaning of valves and hydraulic manifolds",
      "Paint booth wall and floor maintenance"
    ],
    certifications: ["ISO 9001", "REACH Registered", "RoHS Compliant", "TRGS 600 Qualified"]
  },

  "refineries-gas-pipelines": {
    slug: "refineries-gas-pipelines",
    category: "Industrial & Manufacturing",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Refineries, Gas & Petrochemical Pipeline Solutions",
    subtitle: "Heavy hydrocarbon sludge dissolution, pipeline decontamination, and ATEX explosion-safe cleaning.",
    badge: "ATEX ZONE SAFE · NON-FLAMMABLE",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&fit=crop&auto=format",
    overview: "Petrochemical plants, cracking units, and natural gas transport pipelines battle heavy bitumen, asphaltene, and paraffin deposits. ETS high-performance bio-surfactants liquefy heavy crude sludge into manageable emulsions without requiring explosive aromatic solvents or volatile petrochemical carriers.",
    features: [
      {
        title: "Heavy Hydrocarbon & Sludge Liquefaction",
        description: "Enzymatic and ester technologies unbind stubborn bitumen and hardened paraffin from pipeline internal walls.",
        highlight: "Rapid dissolution without heat"
      },
      {
        title: "Heat Exchanger & Reboiler Flushing",
        description: "Cleans fouled tube bundles and plate heat exchangers in-situ (CIP), restoring thermal transfer coefficients without damaging copper or alloy tubes.",
        highlight: "Restores thermal efficiency"
      },
      {
        title: "Vessel Entry & Turnaround Decontamination",
        description: "Suppresses toxic H2S vapors and volatile LEL readings inside storage tanks, enabling faster, safer manned entry during turnaround outages.",
        highlight: "Suppresses benzene & H2S fumes"
      }
    ],
    specifications: [
      { label: "Flammability", value: "100% Non-combustible (No ATEX flashpoint risk)" },
      { label: "H2S Scavenging", value: "Mitigates volatile sulfide fumes during tank wash" },
      { label: "Water Compatibility", value: "Functions in fresh, brackish, or salt water" },
      { label: "Disposal Profile", value: "Biodegradable, non-inhibitory to biotreatment plants" }
    ],
    applications: [
      "Crude oil storage tank desludging and decontamination",
      "Cross-country natural gas pipeline chemical pigging",
      "Offshore drilling rig separator vessel cleaning",
      "Refinery turnaround scheduled maintenance shutdown flushes"
    ],
    certifications: ["ATEX Safe", "ISO 9001:2015", "REACH Registered", "OSHA Compliant"]
  },

  "offshore-marine": {
    slug: "offshore-marine",
    category: "Industrial & Manufacturing",
    parentMenu: "Industrial",
    parentSlug: "/industries/marine",
    title: "Offshore, Marine & Vessel Maintenance Chemistry",
    subtitle: "MARPOL Annex III & V compliant eco-cleaning for commercial shipping and offshore rigs.",
    badge: "MARPOL COMPLIANT · OCEAN SAFE",
    heroImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&fit=crop&auto=format",
    overview: "Marine environments require uncompromising environmental stewardship under strict IMO MARPOL directives. ETS marine products are 100% biodegradable and non-toxic to aquatic flora and fauna, enabling offshore crews to clean rig decks, cargo holds, engine room bilges, and ballast tanks safely.",
    features: [
      {
        title: "Cargo Hold Wash & Coal/Petcoke Removal",
        description: "High-yield cleaners that rapidly remove petcoke, cement dust, and dry bulk residues from cargo holds, passing pre-loading grain inspections.",
        highlight: "Meets international grain cleanliness specs"
      },
      {
        title: "Engine Room Bilge & Deck Degreasing",
        description: "Quick-separating formula allows oil-water separators (OWS) to function at peak 15 ppm bilge discharge efficiency without emulsion locks.",
        highlight: "OWS friendly quick-split chemistry"
      },
      {
        title: "Rig Derrick & Helideck Safety Wash",
        description: "Removes slippery synthetic drill mud and crude splatter from helidecks and walkways, preventing worker slips and falls.",
        highlight: "Restores non-skid surface traction"
      }
    ],
    specifications: [
      { label: "IMO Status", value: "Compliant with MARPOL Annex III, IV & V" },
      { label: "Aquatic Toxicity", value: "LC50 > 100 mg/L (Non-toxic to marine organisms)" },
      { label: "Oil Separation", value: "Meets IMO MEPC.107(49) standard for bilge separators" },
      { label: "Foam Profile", value: "Low-foaming suitable for high-pressure deck cannons" }
    ],
    applications: [
      "Bulk carrier cargo hold turnaround wash",
      "Offshore oil platform drilling deck degreasing",
      "Commercial cargo ship bilge and machinery spaces",
      "Tugboat and offshore supply vessel (OSV) hull wash"
    ],
    certifications: ["IMO MARPOL Compliant", "MEPC.107(49)", "OECD 202/203 Aquatic Tested", "ISO 9001:2015"]
  },

  "automotive-truck": {
    slug: "automotive-truck",
    category: "Industrial & Manufacturing",
    parentMenu: "Industrial",
    parentSlug: "/industries/industrial",
    title: "Automotive, Commercial Truck & Fleet Cleaning",
    subtitle: "Concentrated traffic film removers, engine bay degreasers, and chassis wash chemistry.",
    badge: "FLEET CONCENTRATES · 1:100 DILUTION",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&fit=crop&auto=format",
    overview: "Commercial transport fleets and automotive manufacturing lines demand high-efficiency, cost-effective cleaning agents. ETS automotive concentrates cut through stubborn road film, diesel soot, road salts, and asphalt bitumen without dulling vehicle liveries or corroding aluminum trailers.",
    features: [
      {
        title: "Touchless Traffic Film Remover (TFR)",
        description: "High-foaming biodegradable concentrate that softens hardened bug spatter, road grime, and salt crust without brush contact.",
        highlight: "Dilutes up to 1:100"
      },
      {
        title: "Aluminum & Alloy Trailer Brightener",
        description: "Non-hydrofluoric acid alternative that restores luster to unpainted aluminum tanker bodies without white etching.",
        highlight: "100% HF-acid free"
      },
      {
        title: "Engine Bay & Underbody Steam Wash",
        description: "Emulsifies road tar, oil leaks, and protective transport wax for quick rinse-off, safe on wiring harnesses and rubber boots.",
        highlight: "Rubber and silicone safe"
      }
    ],
    specifications: [
      { label: "Concentration", value: "Dilutes 1:20 for heavy soil, 1:100 for maintenance wash" },
      { label: "Coating Safety", value: "Safe on wraps, vinyl lettering, clear coats, and glass" },
      { label: "Separator Compatibility", value: "Rapid phase separation in oil traps" },
      { label: "Environmental", value: "Phosphate-free, NTA-free, EDTA-free" }
    ],
    applications: [
      "Commercial logistics freight truck & trailer washing",
      "Bus and municipal transport exterior depot washing",
      "Heavy construction plant and tractor chassis wash",
      "Automotive workshop parts washers and brake detailing"
    ],
    certifications: ["VDA Approved", "ISO 9001:2015", "DEKRA Tested", "REACH Registered"]
  },

  /* ─── HACCP Subpages ─── */
  "what-is-haccp": {
    slug: "what-is-haccp",
    category: "HACCP & Food Safety",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "What is HACCP? Food Safety Compliance Standards",
    subtitle: "Hazard Analysis Critical Control Points standards for hygiene and chemical purity.",
    badge: "NSF H1 · ZERO ODOR · ZERO FLAVOR TAINT",
    heroImage: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1600&fit=crop&auto=format",
    overview: "HACCP (Hazard Analysis Critical Control Points) is the internationally recognized systematic approach to food safety, addressing biological, chemical, and physical hazards. In food processing and culinary manufacturing, chemical contamination from harsh industrial detergents is a critical risk. ETS provides non-tainting, food-contact compliant solutions designed specifically for audited HACCP critical control points.",
    features: [
      {
        title: "Chemical Hazard Prevention",
        description: "Formulations completely free from petroleum distillates, synthetic perfumes, dyes, and toxic residue, preventing chemical migration into food.",
        highlight: "Zero chemical contamination risk"
      },
      {
        title: "Full Regulatory Documentation",
        description: "Every product batch comes with complete compliance dossiers, Safety Data Sheets (SDS), and ingredient declarations for health audits.",
        highlight: "Audit-ready compliance packages"
      },
      {
        title: "Comprehensive Biofilm Removal",
        description: "Breaks organic biofilms that harbor Listeria, Salmonella, and E. coli on stainless steel conveyors and food preparation counters.",
        highlight: "Eliminates bacterial breeding sites"
      }
    ],
    specifications: [
      { label: "Standard Conformity", value: "EU Regulation (EC) No 852/2004 & FDA HACCP" },
      { label: "Residue Profile", value: "100% water-rinsable with zero lingering film" },
      { label: "Flavor/Odor Impact", value: "Certified zero taste or aroma transfer to foodstuffs" },
      { label: "Allergen Status", value: "Free from all major food allergens (gluten, soy, nuts)" }
    ],
    applications: [
      "Dairy and beverage bottling plant conveyor lines",
      "Meat processing and abattoir clean-down programs",
      "Commercial bakeries, industrial ovens, and proofing racks",
      "Catering kitchens and hospital dietary preparation areas"
    ],
    certifications: ["HACCP Approved", "GMP+ FSA", "Leverkusen Food Hygiene Authority", "REACH Registered"]
  },

  "how-it-works": {
    slug: "how-it-works",
    category: "HACCP & Food Safety",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "How HACCP Cleaning Chemistry Works",
    subtitle: "Bio-catalytic surface tension reduction and natural ester micro-emulsification.",
    badge: "BIO-CATALYTIC · MICRO-EMULSION",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&fit=crop&auto=format",
    overview: "Traditional cleaning depends on corrosive caustic soda or toxic solvents that dissolve oils by brute chemical destruction. ETS uses advanced colloidal bio-catalysts that rapidly drop surface tension, allowing water molecules to penetrate beneath fat, protein, and sugar layers, gently lifting soils into suspension for effortless rinsing.",
    features: [
      {
        title: "Colloidal Micelle Encapsulation",
        description: "Organic micelles wrap around grease and protein molecules, isolating them so they cannot re-deposit onto stainless steel surfaces.",
        highlight: "Prevents surface re-contamination"
      },
      {
        title: "Non-Corrosive to Equipment",
        description: "Unlike caustic soda, ETS solutions do not etch soft aluminum trays, pit 316 stainless steel, or crack rubber conveyor belts.",
        highlight: "Prolongs machinery lifespan"
      },
      {
        title: "Enzyme-Friendly Wastewater",
        description: "Rinse water entering factory grease traps continues breaking down animal and vegetable fats biologically, preventing drain blockages.",
        highlight: "Keeps factory drain lines clear"
      }
    ],
    specifications: [
      { label: "Mechanism", value: "Bio-catalytic colloidal micelle encapsulation" },
      { label: "Rinsability", value: "Immediate breakdown with cold or hot water" },
      { label: "Material Compatibility", value: "Stainless 304/316, Aluminum, POM, PTFE, Viton" },
      { label: "Toxicity Rating", value: "LD50 oral rat > 5000 mg/kg (Practically Non-Toxic)" }
    ],
    applications: [
      "CIP (Clean-in-Place) pipe loops and storage silos",
      "Deep fat fryers and spiral freezer belt washdown",
      "Packaging machine clean-and-clear cycles"
    ],
    certifications: ["HACCP Certified", "ISO 9001:2015", "REACH Registered", "OECD 301D"]
  },

  "haccp-product": {
    slug: "haccp-product",
    category: "HACCP & Food Safety",
    parentMenu: "HACCP",
    parentSlug: "/industries/haccp",
    title: "HACCP Certified Cleaner & Degreaser",
    subtitle: "Professional food-grade cleaning concentrate for processing facilities and commercial kitchens.",
    badge: "FOOD-GRADE CONCENTRATE · NSF REGISTERED",
    heroImage: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1600&fit=crop&auto=format",
    overview: "Our flagship HACCP Cleaner is an all-in-one concentrated formula replacing up to five separate chemical products in food manufacturing facilities. Effective against burnt starches, caramelized sugars, animal fats, and vegetable oils, it leaves machinery sparkling clean and residue-free.",
    features: [
      {
        title: "Universal Food Plant Concentrate",
        description: "One single chemical inventory replaces floor degreasers, smokehouse cleaners, conveyor washes, and table sanitizers.",
        highlight: "Consolidates chemical inventory"
      },
      {
        title: "Foam Cannon Compatible",
        description: "Generates high-density foam that clings to vertical tile walls, stainless hoods, and ceiling ducting for maximum dwell time.",
        highlight: "Extended dwell time on vertical walls"
      },
      {
        title: "Non-Hazmat Transport & Storage",
        description: "No dangerous goods transport surcharges, no special bunding requirements, and no corrosive warnings.",
        highlight: "Zero shipping hazard surcharges"
      }
    ],
    specifications: [
      { label: "Packaging Options", value: "10L canister, 25L drum, 200L barrel, 1000L IBC tote" },
      { label: "Concentration", value: "1:20 for heavy baked fats, 1:50 for routine sanitization" },
      { label: "Shelf Life", value: "3 years in sealed container" },
      { label: "Storage Temp", value: "+5°C to +40°C" }
    ],
    applications: [
      "Industrial smokehouse walls and bacon slicing belts",
      "Fish processing filleting tables and scaling decks",
      "Brewery kettle and fermenter exterior washdown",
      "Supermarket deli and bakery prep counters"
    ],
    certifications: ["NSF Registered", "HACCP Compliant", "ISO 9001", "EU Food Contact Safe"]
  },

  /* ─── Technology / Products ─── */
  "new-technologies": {
    slug: "new-technologies",
    category: "Innovation & Clean-Tech",
    parentMenu: "Products",
    parentSlug: "/products",
    title: "New Clean-Tech Technologies & Sustainable R&D",
    subtitle: "Pioneering next-generation water ionization, nano-coatings, and solvent alternatives.",
    badge: "GERMAN R&D · NEXT-GEN GREEN CHEMISTRY",
    heroImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1600&fit=crop&auto=format",
    overview: "For over three decades, ETS International has pushed the boundaries of applied physical chemistry. Our Cologne engineering center continuously develops game-changing technologies—from chemical-free ionic water purification to atomic-level diamond lubricants—helping global industry transition away from legacy fossil-fuel chemicals.",
    features: [
      {
        title: "Catalytic Micro-Ionization Systems",
        description: "Self-powered mineral capsules that eradicate bacteria and algae in stored water without chemicals, electricity, or UV bulbs.",
        highlight: "AquaSmarter™ Technology"
      },
      {
        title: "Spherical Nano Diamond Lubricants",
        description: "Sub-microscopic synthetic diamond spheres that roll between friction surfaces, virtually eliminating metallic wear and heat.",
        highlight: "Nano Diamond™ Technology"
      },
      {
        title: "Cold Ultrasonic Aerosol Generation",
        description: "Generating 1-5 micron ultra-fine dry fog capable of sterilizing entire pharmaceutical cleanrooms in minutes without wetting surfaces.",
        highlight: "FOG-IT INNOVA Systems"
      }
    ],
    specifications: [
      { label: "Patents & IP", value: "Multiple international patents across EU, US, and Asia" },
      { label: "R&D Facility", value: "Cologne-Porz Technical Research Center, Germany" },
      { label: "Validation Partners", value: "Fraunhofer Institutes, SGS Laboratories, TÜV Rheinland" },
      { label: "Carbon Footprint", value: "Zero fossil-fuel carrier molecules in new formulations" }
    ],
    applications: [
      "Zero-chemical municipal and commercial water storage",
      "Heavy industrial gearbox energy conservation",
      "Cleanroom and quarantine area sterilization",
      "Aerospace advanced surface protection"
    ],
    certifications: ["ISO 9001:2015", "TÜV Tested", "CE Certified", "WEEE Registered"]
  },

  /* ─── Disinfection Subpages (AquaSmarter & FOG-IT) ─── */
  "water-treatment-introduction": {
    slug: "water-treatment-introduction",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "AquaSmarter™ Water Treatment Introduction",
    subtitle: "Chemical-free water ionization capsules providing continuous protection for up to 12 months.",
    badge: "ZERO CHEMICALS · NO POWER REQUIRED",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&fit=crop&auto=format",
    overview: "AquaSmarter™ is a revolutionary, patented catalytic water ionization technology that eliminates algae, bacteria, fungi, and Legionella from water systems without using chlorine, biocides, or external electrical power. Simply placed into water storage tanks, pools, or cooling towers, each capsule produces safe, continuous sub-atomic copper and silver ionization.",
    features: [
      {
        title: "100% Chemical-Free Operation",
        description: "Eliminates toxic chlorine gas, bleach handling, and hazardous biocide drums from your facility.",
        highlight: "No chemical storage hazards"
      },
      {
        title: "Zero Power or Cabling Needed",
        description: "Operates autonomously via natural galvanic electrochemical potential between engineered copper and silver alloys.",
        highlight: "Works anywhere without electricity"
      },
      {
        title: "Full 12-Month Continuous Protection",
        description: "A single capsule provides 365 days of active microbiological protection, drastically reducing maintenance labor.",
        highlight: "1 Year continuous lifespan"
      }
    ],
    specifications: [
      { label: "Active Elements", value: "High-purity elemental Copper (Cu) and Silver (Ag)" },
      { label: "Power Source", value: "Self-generating galvanic micro-current (0.8 - 1.2V)" },
      { label: "Target Microbes", value: "Legionella, E. coli, Pseudomonas, Algae, Biofilm" },
      { label: "Potable Standards", value: "Compliant with WHO Drinking Water Guidelines" }
    ],
    applications: [
      "Building potable water cisterns and rooftop holding tanks",
      "Commercial HVAC cooling towers and chillers",
      "Offshore vessel freshwater bunker tanks",
      "Agricultural irrigation reservoirs and hydroponics"
    ],
    certifications: ["WHO Guidelines", "CE Certified", "TÜV Tested", "Drinking Water Safe"]
  },

  "water-treatment-information": {
    slug: "water-treatment-information",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "AquaSmarter™ Technical Specifications & Data",
    subtitle: "Detailed capsule capacities, microbiological efficacy test results, and dosage guidelines.",
    badge: "LAB TESTED · 99.999% LOG-5 REDUCTION",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&fit=crop&auto=format",
    overview: "Certified by accredited European and international test laboratories, AquaSmarter™ demonstrates a proven 99.999% (Log-5) destruction rate of Legionella pneumophila and coliform bacteria. This technical dossier outlines capsule capacities, flow rates, and replacement intervals for engineers and facility managers.",
    features: [
      {
        title: "Proven Legionella Eradication",
        description: "Destroys bacterial cell walls via positively charged copper/silver ions, preventing resistant strain mutations.",
        highlight: "Log-5 reduction in 24 hours"
      },
      {
        title: "Biofilm Penetration",
        description: "Silver ions penetrate slimy biofilm matrices on pipe walls, eradicating colonies that standard chlorine cannot reach.",
        highlight: "Destroys protective biofilm"
      },
      {
        title: "Scale & Corrosion Suppression",
        description: "Electrochemical micro-fields alter calcium carbonate crystal structures, turning hard calcite into easily flushed aragonite.",
        highlight: "Reduces pipe scaling"
      }
    ],
    specifications: [
      { label: "Capsule Sizes", value: "Model 20 (up to 20,000L), Model 50, Model 100, Model 500" },
      { label: "Ion Release Rate", value: "Safe 0.2 - 0.4 ppm Cu / 0.02 - 0.04 ppm Ag" },
      { label: "pH Operating Range", value: "6.0 to 9.0 pH" },
      { label: "Water Temperature", value: "2°C to 80°C" }
    ],
    applications: [
      "Hospitals and retirement home Legionella prevention",
      "Hot water recirculation loops",
      "Maritime cruise ship and offshore rig water storage",
      "Hotel swimming pools and public water fountains"
    ],
    certifications: ["EPA Standard Equivalent", "DIN EN 15030", "ISO 9001:2015", "CE"]
  },

  "how-it-works-2": {
    slug: "how-it-works-2",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "How AquaSmarter™ Ionization Works",
    subtitle: "The electro-catalytic physics behind natural oligodynamic water purification.",
    badge: "OLIGODYNAMIC PRINCIPLE · ATOMIC SCALE",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&fit=crop&auto=format",
    overview: "The oligodynamic effect—the ability of minuscule concentrations of metal ions to exert lethal effects on bacteria—has been documented since antiquity. AquaSmarter™ modernizes this science into a patented, non-sacrificial electro-catalytic chamber that continuously liberates positively charged Cu++ and Ag+ ions without external wiring.",
    features: [
      {
        title: "Cell Membrane Lysis",
        description: "Positively charged Cu++ ions bind to negatively charged bacterial cell membranes, distorting cell wall permeability.",
        highlight: "Disrupts bacterial nutrient intake"
      },
      {
        title: "DNA Replication Halting",
        description: "Ag+ silver ions penetrate into the cell interior, bonding with DNA enzymes and preventing cellular reproduction.",
        highlight: "Total bacterial sterilization"
      },
      {
        title: "Long-Term Residual Effect",
        description: "Unlike UV light or ozone which only disinfect water at the reaction chamber, ions remain suspended in piping to provide downstream residual defense.",
        highlight: "Continuous pipework protection"
      }
    ],
    specifications: [
      { label: "Reaction Type", value: "Catalytic Oligodynamic Ionization" },
      { label: "Byproducts", value: "Zero chlorinated trihalomethanes (THMs)" },
      { label: "Taste & Odor", value: "Completely imperceptible in drinking water" },
      { label: "UV Sensitivity", value: "Not degraded by direct sunlight" }
    ],
    applications: [
      "Continuous municipal water reservoir protection",
      "Rainwater harvesting systems and filtration buffers",
      "Emergency disaster relief water purification stations"
    ],
    certifications: ["WHO Approved Standards", "ISO 9001:2015", "TÜV Certificate"]
  },

  "water-treatment-application": {
    slug: "water-treatment-application",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "AquaSmarter™ Applications Across Global Industries",
    subtitle: "From HVAC cooling towers and maritime shipping to agriculture and commercial swimming facilities.",
    badge: "VERSATILE DEPLOYMENT · WORLDWIDE USE",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&fit=crop&auto=format",
    overview: "With thousands of installations across 40+ countries, AquaSmarter™ delivers proven microbiological safety across diverse sectors. Whether protecting high-risk hospital cooling towers from Legionnaires' disease or ensuring safe drinking water aboard transatlantic container vessels, AquaSmarter™ sets the benchmark for clean water technology.",
    features: [
      {
        title: "HVAC Cooling Towers & Evaporative Condensers",
        description: "Replaces biocide dosing pumps, eliminating toxic chemical discharge permits while keeping heat exchangers scale-free.",
        highlight: "Zero biocide discharge permits"
      },
      {
        title: "Commercial Shipping & Superyachts",
        description: "Maintains fresh, sweet drinking water in vessel bunker tanks during long ocean transits without metallic tastes.",
        highlight: "Fresh drinking water for 365 days"
      },
      {
        title: "Commercial Pools, Spas & Wellness Centers",
        description: "Reduces chlorine usage by up to 85%, eliminating eye stinging, chlorine odor, and skin irritation for guests.",
        highlight: "85% reduction in pool chlorine"
      }
    ],
    specifications: [
      { label: "Installation Method", value: "Drop-in submersion or inline canister bypass" },
      { label: "Maintenance", value: "Zero moving parts, replace capsule once per year" },
      { label: "Water Types", value: "Freshwater, municipal supply, collected rainwater, pool water" }
    ],
    applications: [
      "Commercial office tower cooling towers",
      "Ocean freight and military ship freshwater bunkers",
      "Public swimming pools and luxury thermal spas",
      "Greenhouse automated drip irrigation loops"
    ],
    certifications: ["ISO 9001:2015", "WHO Guidelines", "CE Certified"]
  },

  "fog-it": {
    slug: "fog-it",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "FOG-IT INNOVA Room & Surface Cold Aerosol Fogging",
    subtitle: "Sub-micron dry fogging technology for 3D room sterilization without surface wetting.",
    badge: "1-5 MICRON DRY FOG · NO RESIDUE",
    heroImage: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1600&fit=crop&auto=format",
    overview: "Conventional spraying leaves wet pools of liquid that damage electronics, papers, and sensitive equipment. FOG-IT INNOVA generates an ultra-fine 1 to 5 micron cold dry fog that behaves like a gas, suspended in air currents to reach behind furniture, inside air ducts, and into micro-crevices to achieve 100% surface and airborne pathogen destruction.",
    features: [
      {
        title: "Ultra-Fine Dry Fog Technology",
        description: "Droplets bounce off surfaces rather than wetting them, evaporating into an active vapor cloud that leaves zero dampness.",
        highlight: "Safe for electronics, screens & paperwork"
      },
      {
        title: "Rapid Room Turnover",
        description: "Disinfects an entire 200 m³ operating theater or aircraft cabin in under 15 minutes, with room re-entry possible in 30 minutes.",
        highlight: "15-minute complete cycle"
      },
      {
        title: "Eco-Friendly Chemistry",
        description: "Utilizes hydrogen peroxide and natural fruit acid formulations that break down cleanly into harmless water and oxygen.",
        highlight: "Zero toxic residue"
      }
    ],
    specifications: [
      { label: "Droplet Particle Size", value: "1 - 5 microns (True dry fog)" },
      { label: "Coverage Speed", value: "Up to 1,000 m³ in 35 minutes" },
      { label: "Power Supply", value: "230V / 50Hz (or 110V / 60Hz available)" },
      { label: "Efficacy Spectrum", value: "Virucidal, Bactericidal, Fungicidal, Sporicidal" }
    ],
    applications: [
      "Commercial airliner cabin turnaround sanitization",
      "Hospital isolation wards and sterile operating suites",
      "Cleanroom pharmaceutical manufacturing facilities",
      "Food packaging clean-down zones and cold storage lockers"
    ],
    certifications: ["EN 14476 (Virucidal)", "EN 13697", "CE Certified", "ISO 9001:2015"]
  },

  "desi-box": {
    slug: "desi-box",
    category: "Disinfection & Water Treatment",
    parentMenu: "Disinfection",
    parentSlug: "/disinfection",
    title: "FOG-IT Desi Box Mobile Sterilization Chamber",
    subtitle: "Rapid decontamination chamber for medical instruments, electronics, helmets, and PPE.",
    badge: "MOBILE CHAMBER · 5-MIN CYCLE",
    heroImage: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1600&fit=crop&auto=format",
    overview: "The FOG-IT Desi Box is an autonomous, hermetically sealed decontamination cabinet engineered to sterilize portable items—including handheld radios, respirators, medical monitors, pilot helmets, and lab equipment—using cold micronized dry fog in an automated 5-minute cycle.",
    features: [
      {
        title: "Hermetically Sealed Chamber",
        description: "High-density stainless interior with electromagnetic interlocks ensures zero vapor escape during operation.",
        highlight: "Complete operator safety"
      },
      {
        title: "One-Touch Automated Cycle",
        description: "Single-button start initiates fog generation, dwell exposure, and internal catalytic evacuation in under 5 minutes.",
        highlight: "5-minute total turnaround"
      },
      {
        title: "Zero Heat or Moisture Damage",
        description: "Non-thermal, dry process safe for delicate optics, lithium battery devices, touchscreens, and micro-sensors.",
        highlight: "Protects sensitive tech assets"
      }
    ],
    specifications: [
      { label: "Chamber Volume", value: "120 Liters (Custom sizes up to 1,000L)" },
      { label: "Cycle Duration", value: "3 to 7 minutes selectable" },
      { label: "Control System", value: "Microprocessor with digital cycle counter and audit log" },
      { label: "Filter System", value: "Internal activated carbon exhaust scrubber" }
    ],
    applications: [
      "Emergency response squad and firefighter respirator decon",
      "Hospital clinic tool and digital tablet sanitization",
      "Airport security wand and inspection gear sterilization",
      "Defense squadron helmet, night-vision, and radio decon"
    ],
    certifications: ["CE Certified", "Medical Device Directive Compatible", "ISO 9001:2015"]
  },

  /* ─── Derusting & Paint Stripping ─── */
  "eco-safe-air-blaster": {
    slug: "eco-safe-air-blaster",
    category: "Surface Restoration & Derusting",
    parentMenu: "Derusting & Paint Stripping",
    parentSlug: "/eco-safe-air-blaster",
    title: "Eco Safe Air Blaster™ Surface Restoration",
    subtitle: "Dustless, eco-friendly vapor abrasive blasting technology for coatings and rust removal.",
    badge: "92% LESS DUST · NO HAZARDOUS SOLVENTS",
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1600&fit=crop&auto=format",
    overview: "The Eco Safe Air Blaster™ redefines industrial surface preparation by combining air, water, and benign abrasive media into a pressurized vapor stream. Unlike conventional dry sandblasting that creates toxic dust plumes, the Eco Safe Air Blaster suppresses 92% of airborne dust, allowing blasting in urban areas, shipyards, and active plants without extensive tenting.",
    features: [
      {
        title: "92% Airborne Dust Suppression",
        description: "Water cushions the blast impact, trapping particulate at the surface and falling harmlessly to the ground without dust plumes.",
        highlight: "No costly containment tenting required"
      },
      {
        title: "Consumes 75% Less Abrasive Media",
        description: "Vapor velocity maximizes kinetic energy per particle, slashing abrasive media consumption and disposal tonnage.",
        highlight: "75% less abrasive media cost"
      },
      {
        title: "Surface Profile from SA 1.0 to SA 3.0",
        description: "Adjustable blast pressure from 2 to 10 bar allows delicate paint peeling from fiberglass or white metal profiling on thick steel.",
        highlight: "White metal SA 3.0 profile"
      }
    ],
    specifications: [
      { label: "Operating Pressure", value: "2.0 - 10.0 bar (30 - 145 psi) infinitely variable" },
      { label: "Abrasive Media", value: "Garnet, glass bead, crushed glass, walnut shell, olivine" },
      { label: "Water Consumption", value: "Low 0.5 - 1.2 L/min operating usage" },
      { label: "Construction", value: "Heavy-gauge pressure vessel certified to ASME / PED" }
    ],
    applications: [
      "Historic building and bridge restoration without airborne lead paint dust",
      "Ship hull and offshore rig ballast tank coating removal",
      "Automotive chassis paint stripping and graffiti eradication",
      "Industrial pipeline weld inspection preparation"
    ],
    certifications: ["ASME Certified", "PED 2014/68/EU", "CE Approved", "ATEX Option Available"]
  },

  "bioderuster": {
    slug: "bioderuster",
    category: "Surface Restoration & Derusting",
    parentMenu: "Derusting & Paint Stripping",
    parentSlug: "/bioderuster",
    title: "Bio-Deruster & Organic Paint Stripper",
    subtitle: "100% bio-based chelation chemistry that dissolves heavy corrosion without etching virgin metal.",
    badge: "100% BIO-BASED · ACID-FREE CHELATION",
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1600&fit=crop&auto=format",
    overview: "Traditional rust removal relies on hazardous hydrochloric or sulfuric acid baths that pit good steel, weaken metal through hydrogen embrittlement, and pose severe safety hazards. ETS Bio-Deruster uses selective organic chelation agents that specifically seek out and dissolve iron oxides (rust) while leaving unoxidized base metal, rubber, and paint entirely unharmed.",
    features: [
      {
        title: "Selective Chelation Technology",
        description: "Molecules bond exclusively with iron oxide, stripping away rust while leaving base steel, copper, brass, and aluminum untouched.",
        highlight: "Zero dimensional loss on virgin metal"
      },
      {
        title: "Acid-Free & Non-Corrosive to Skin",
        description: "Neutral pH formulation does not cause chemical burns, release toxic acid fumes, or require specialized rubber PPE.",
        highlight: "pH 6.5 - 7.5 skin safe"
      },
      {
        title: "Safe for Threads, Bearings & Tolerances",
        description: "Precision machine parts, internal screw threads, and ball bearings can be submerged for days without losing microscopic dimensional tolerances.",
        highlight: "Preserves critical micrometer tolerances"
      }
    ],
    specifications: [
      { label: "Chemical Nature", value: "Bio-based organic chelating solution" },
      { label: "pH Level", value: "6.5 - 7.5 (Virtually neutral)" },
      { label: "Hydrogen Embrittlement", value: "Passed ASTM F519 (Zero embrittlement on spring steel)" },
      { label: "Disposal", value: "Biodegradable, non-toxic, sewer-safe after settling" }
    ],
    applications: [
      "Precision machinery, spindle, and gear restoration",
      "Automotive restoration of antique vehicle sheet metal",
      "Firearm, military equipment, and tooling de-oxidation",
      "Industrial heat exchanger shell and bolt derusting"
    ],
    certifications: ["ASTM F519", "OECD 301B Certified", "REACH Compliant", "ISO 9001:2015"]
  },

  /* ─── Corporate & Informational Subpages ─── */
  "why-ets": {
    slug: "why-ets",
    category: "Company & Compliance",
    parentMenu: "About Us",
    parentSlug: "/about",
    title: "Why Choose ETS International?",
    subtitle: "German engineering authority, 30+ years of proven chemistry, and 15 hazardous chemical replacements.",
    badge: "ESTABLISHED 2007 · COLOGNE, GERMANY",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fit=crop&auto=format",
    overview: "For over three decades, ETS International UG has led the environmental transition of critical global industries. Headquartered in Cologne, Germany, we engineer certified, 100% biodegradable, solvent-free solutions that replace dangerous legacy chemicals—protecting workers, preserving equipment, and safeguarding natural ecosystems across 40+ countries.",
    features: [
      {
        title: "Replaces 15 Major Hazardous Chemicals",
        description: "Direct green drop-in replacements for Acetone, Trichloroethylene, MEK, Xylene, Toluene, Benzene, Caustic Soda, Sulfuric Acid, Hydrochloric Acid, Naphtha, Perchloroethylene, Methylene Chloride, Phenol, Kerosene, and PFAS.",
        highlight: "Complete hazardous phaseout"
      },
      {
        title: "Stringent International OEM Approvals",
        description: "Qualified and approved by Airbus, Boeing, Eurocopter, McDonnell Douglas, NATO, and the Leverkusen Food Hygiene Authority.",
        highlight: "Unmatched aerospace credentials"
      },
      {
        title: "German Engineering & Batch Traceability",
        description: "Formulated and tested under ISO 9001, ISO 14001, and ISO 13485 quality control systems in Cologne, Germany.",
        highlight: "Certified batch consistency"
      }
    ],
    specifications: [
      { label: "Global Deployments", value: "Over 40 countries across 5 continents" },
      { label: "Hazard Rating", value: "0 VOC, Non-carcinogenic, Non-mutagenic, Non-flammable" },
      { label: "Corporate Entity", value: "ETS International UG (Cologne Commercial Register HRB 88478)" }
    ],
    applications: [
      "Corporate ESG environmental compliance modernization",
      "Airline fleet maintenance green transition",
      "Heavy manufacturing worker safety enhancement"
    ],
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 13485", "NATO NSN", "Airbus & Boeing"]
  },

  "presentations": {
    slug: "presentations",
    category: "Company & Resources",
    parentMenu: "About Us",
    parentSlug: "/about",
    title: "Technical Presentations & Whitepapers",
    subtitle: "Comprehensive engineering dossiers, independent laboratory test reports, and industry presentations.",
    badge: "ENGINEERING WHITEPAPERS · AUDIT REPORTS",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&fit=crop&auto=format",
    overview: "Access technical presentations, laboratory test certifications from SMI Miami, SGS, and Fraunhofer Institutes, along with regulatory compliance documentation across Aviation, Industrial, Marine, and HACCP sectors.",
    features: [
      {
        title: "Aerospace Fuel Efficiency Whitepaper",
        description: "Documenting airline compressor wash efficiency gains, exhaust gas temperature (EGT) margins, and 6%+ fuel consumption reductions.",
        highlight: "Peer-reviewed thermodynamic data"
      },
      {
        title: "Wastewater & Effluent Discharge Guides",
        description: "Full ecological documentation detailing oil-water separator performance and municipal sewer discharge compliance.",
        highlight: "Discharge guidelines for 18 nations"
      },
      {
        title: "Chemical Replacement Dossiers",
        description: "Side-by-side technical comparisons between conventional carcinogenic solvents and ETS biodegradable alternatives.",
        highlight: "Safety & cost comparison models"
      }
    ],
    specifications: [
      { label: "Document Formats", value: "Interactive PDF, PowerPoint slide decks, video briefings" },
      { label: "Languages", value: "English and German (French & Spanish upon request)" }
    ],
    applications: [
      "Corporate procurement audits and technical committee reviews",
      "Environmental agency regulatory filing submissions",
      "Airline flight operations committee fuel conservation reviews"
    ],
    certifications: ["ISO 9001:2015", "Fraunhofer Tested", "SGS Certified"]
  },

  "co-partners": {
    slug: "co-partners",
    category: "Company & Global Network",
    parentMenu: "About Us",
    parentSlug: "/about",
    title: "Co-Partners & Global Distribution Network",
    subtitle: "Worldwide authorized distribution, technical logistics, and OEM technology partnerships.",
    badge: "40+ COUNTRIES · AUTHORIZED PARTNERS",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&fit=crop&auto=format",
    overview: "ETS International collaborates with leading global chemical distributors, aviation supply houses, and marine ship-chandlers across Europe, the Americas, the Middle East, and Asia-Pacific. We provide private labeling, local warehousing, and dedicated field engineering support to our partner network.",
    features: [
      {
        title: "International Supply Chain & Warehousing",
        description: "Strategic fulfillment centers located near major transportation hubs in Germany, UAE, and North America ensure rapid dispatch.",
        highlight: "Under 48-hour dispatch for standard stock"
      },
      {
        title: "Private Labeling & Customized Packaging",
        description: "Tailored brand packaging, localized multi-lingual labeling, and custom formulation blending for regional requirements.",
        highlight: "Full turnkey OEM support"
      },
      {
        title: "Distributor Partner Enablement",
        description: "Comprehensive sales training, demonstration equipment kits, and direct co-pitching support on major corporate tenders.",
        highlight: "High distributor margin potential"
      }
    ],
    specifications: [
      { label: "Network Reach", value: "Authorized representation across 40+ sovereign nations" },
      { label: "Partner Requirements", value: "Industrial, aviation, or marine distribution infrastructure" }
    ],
    applications: [
      "Regional chemical distribution agreements",
      "Airline ground support equipment supply contracts",
      "Maritime fleet chandlery agreements"
    ],
    certifications: ["ISO 9001:2015", "NATO Certified Supplier", "IATA Alliance"]
  },

  "location": {
    slug: "location",
    category: "Contact & Headquarters",
    parentMenu: "Contact",
    parentSlug: "/contact",
    title: "European Headquarters & Global Logistics Hub",
    subtitle: "Located in the heart of Germany's industrial Rhineland, Cologne.",
    badge: "COLOGNE, GERMANY · REGISTERED OFFICE",
    heroImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1600&fit=crop&auto=format",
    overview: "ETS International UG operates from its corporate headquarters and laboratory facility in Cologne (Köln), Germany. Centrally positioned adjacent to major European river, rail, highway, and airport freight corridors, our facility coordinates global formulation synthesis, testing, and worldwide shipments.",
    features: [
      {
        title: "Corporate Headquarters & R&D Laboratory",
        description: "Wilhelm-Rupert-Str. 38, 51147 Köln, Germany. House of our formulations lab, technical staff, and European executive leadership.",
        highlight: "Visitor appointments welcome"
      },
      {
        title: "Operating & Customer Service Hours",
        description: "Monday to Friday: 08:00 to 17:00 Central European Time (CET). Closed Saturday and Sunday.",
        highlight: "Direct German engineering hotline"
      },
      {
        title: "Direct Corporate Contacts",
        description: "Telephone: +49 (0) 2203 18889-0 / +49 (0) 2203 981180. Email: info@etsint.eu.",
        highlight: "Instant support response"
      }
    ],
    specifications: [
      { label: "Commercial Register", value: "Amtsgericht Köln (HRB 88478)" },
      { label: "Managing Director", value: "Dipl.-Ing. Massoud Rad Soltani" },
      { label: "VAT Identification", value: "DE 308 058 763" },
      { label: "WEEE Registration", value: "DE 77800049" }
    ],
    applications: [
      "In-person technical consultations and sample reviews",
      "Audited batch pickup and European freight forwarding",
      "Executive partnership meetings"
    ],
    certifications: ["Registered in Cologne, Germany", "ISO 9001:2015"]
  }
};
