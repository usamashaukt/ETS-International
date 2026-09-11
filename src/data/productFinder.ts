/**
 * Static Product Finder decision tree.
 * Flow: Industry → Surface → Problem → Application method → recommendations
 */

export interface FinderRecommendation {
  name: string;
  tagline: string;
  why: string;
  to: string;
}

export interface FinderQuotePrefill {
  industry: string;
  application: string;
  product: string;
}

export interface FinderResult {
  recommendations: FinderRecommendation[];
  quote: FinderQuotePrefill;
}

export interface FinderOption {
  id: string;
  label: string;
  description?: string;
  /** Next-step options; omit when this node yields a result */
  options?: FinderOption[];
  result?: FinderResult;
}

export const FINDER_STEPS = [
  { id: "industry", label: "Industry" },
  { id: "surface", label: "Surface" },
  { id: "problem", label: "Problem" },
  { id: "method", label: "Method" },
] as const;

export type FinderStepId = (typeof FINDER_STEPS)[number]["id"];

export const productFinderTree: FinderOption[] = [
  {
    id: "aviation",
    label: "Aviation & Aerospace",
    description: "Commercial MRO, military, hangars, and runway ops",
    options: [
      {
        id: "exterior",
        label: "Aircraft exterior",
        description: "Fuselage, wings, nacelles, landing gear",
        options: [
          {
            id: "general-soil",
            label: "General soil & traffic film",
            options: [
              {
                id: "spray-foam",
                label: "Spray / foam wash",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Cleaner Fluid (Exterior)",
                      tagline: "AIRBUS & BOEING approved exterior wash",
                      why: "Primary biodegradable exterior cleaner for routine aircraft wash programmes.",
                      to: "/aircraft-cleaner-fluid-exterior",
                    },
                    {
                      name: "Aircraft Cleaner Gel",
                      tagline: "Cling gel for vertical surfaces",
                      why: "Gel dwell time improves cleaning on flaps, pylons, and underside areas.",
                      to: "/aircraft-cleaner-gel",
                    },
                    {
                      name: "Easy Wash Sprayer | Foamer",
                      tagline: "Foam application accessory",
                      why: "Pairs with exterior chemistry for even foam coverage.",
                      to: "/easy-wash-sprayer-foamer",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Aircraft Exterior Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
              {
                id: "machine-wash",
                label: "Mobile wash machine",
                result: {
                  recommendations: [
                    {
                      name: "Sky Reacher GS-T 1000",
                      tagline: "Mobile aircraft cleaning machine",
                      why: "Integrated tank and hose reels for hangar and apron wash cycles.",
                      to: "/sky-reacher",
                    },
                    {
                      name: "Aircraft Cleaner Fluid (Exterior)",
                      tagline: "Approved wash chemistry",
                      why: "Use with Sky Reacher for OEM-aligned exterior cleaning.",
                      to: "/aircraft-cleaner-fluid-exterior",
                    },
                    {
                      name: "OSMOSE RO Module",
                      tagline: "Process water for rinse quality",
                      why: "Reverse-osmosis water reduces spotting after rinse.",
                      to: "/osmose",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Aircraft Exterior Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
            ],
          },
          {
            id: "hydraulic",
            label: "Hydraulic fluid / Skydrol residue",
            options: [
              {
                id: "spot-treat",
                label: "Spot treatment / wipe",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Hydraulic Fluid Remover",
                      tagline: "AHFR for Skydrol-type soils",
                      why: "Targeted remover for hydraulic fluid on landing gear and belly areas.",
                      to: "/aircraft-hydraulic-fluid-remover",
                    },
                    {
                      name: "Multi Tissue Wipes",
                      tagline: "Ready-to-use wipe format",
                      why: "Convenient for cockpit-adjacent and detailed wipe-downs.",
                      to: "/multi-tissue-wipes",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Landing Gear Degreasing",
                    product: "ETS AviClean",
                  },
                },
              },
              {
                id: "spray-rinse",
                label: "Spray and rinse",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Hydraulic Fluid Remover",
                      tagline: "AHFR spray application",
                      why: "Spray-capable formula for larger contaminated zones.",
                      to: "/aircraft-hydraulic-fluid-remover",
                    },
                    {
                      name: "Aircraft Cleaner Fluid (Exterior)",
                      tagline: "Follow-up exterior wash",
                      why: "Finish with approved exterior cleaner after hydraulic soil removal.",
                      to: "/aircraft-cleaner-fluid-exterior",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Landing Gear Degreasing",
                    product: "ETS AviClean",
                  },
                },
              },
            ],
          },
          {
            id: "engine-nacelle",
            label: "Engine / nacelle contamination",
            options: [
              {
                id: "manual",
                label: "Manual / brush application",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Cleaner Gel",
                      tagline: "Controlled dwell on nacelles",
                      why: "Gel stays on vertical nacelle surfaces during cleaning.",
                      to: "/aircraft-cleaner-gel",
                    },
                    {
                      name: "Military Aircraft Cleaner (Exterior)",
                      tagline: "Heavy-duty exterior chemistry",
                      why: "Stronger exterior programme option for engine-adjacent soils.",
                      to: "/military-aircraft-cleaner-fluid-exterior",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Engine & Nacelle Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
              {
                id: "foam",
                label: "Foam application",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Cleaner Fluid (Exterior)",
                      tagline: "Foamable exterior concentrate",
                      why: "Standard exterior concentrate for foamed nacelle cleaning.",
                      to: "/aircraft-cleaner-fluid-exterior",
                    },
                    {
                      name: "Easy Wash Sprayer | Foamer",
                      tagline: "Foam delivery system",
                      why: "Delivers consistent foam thickness on complex geometry.",
                      to: "/easy-wash-sprayer-foamer",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Engine & Nacelle Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "interior",
        label: "Cabin & interior",
        description: "Seats, panels, hard surfaces, disinfection",
        options: [
          {
            id: "cabin-soil",
            label: "Cabin soil & fingerprints",
            options: [
              {
                id: "wipe",
                label: "Wipe / ready-to-use",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Cleaner Fluid (Interior)",
                      tagline: "Interior-safe cabin cleaner",
                      why: "Formulated for cabin hard surfaces and interior plastics.",
                      to: "/aircraft-cleaner-fluid-interior",
                    },
                    {
                      name: "Multi Tissue Wipes",
                      tagline: "Cockpit & cabin wipes",
                      why: "Fast turnaround wipe format for crew and cabin touchpoints.",
                      to: "/multi-tissue-wipes",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Aircraft Exterior Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
              {
                id: "spray",
                label: "Spray wipe-down",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Cleaner Fluid (Interior)",
                      tagline: "Dilutable interior cleaner",
                      why: "Spray-and-wipe interior cleaning for turnaround ops.",
                      to: "/aircraft-cleaner-fluid-interior",
                    },
                    {
                      name: "Hard Surface Cleaner & Disinfectant",
                      tagline: "Clean + disinfect hard surfaces",
                      why: "When hygiene verification is required alongside cleaning.",
                      to: "/hard-surface-cleaner-and-disinfectant",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Disinfection / Fogging",
                    product: "FOG-IT INNOVA",
                  },
                },
              },
            ],
          },
          {
            id: "cabin-disinfect",
            label: "Cabin disinfection",
            options: [
              {
                id: "fog",
                label: "Electrostatic fogging",
                result: {
                  recommendations: [
                    {
                      name: "FOG-IT INNOVA",
                      tagline: "Electrostatic cabin fogging",
                      why: "Rapid full-cabin coverage for turnaround disinfection.",
                      to: "/fog-it",
                    },
                    {
                      name: "Desi Box",
                      tagline: "Enclosed-item sterilizer",
                      why: "Complement fogging with box sterilization for small items.",
                      to: "/desi-box",
                    },
                  ],
                  quote: {
                    industry: "Disinfection",
                    application: "Disinfection / Fogging",
                    product: "FOG-IT INNOVA",
                  },
                },
              },
              {
                id: "surface-disinfect",
                label: "Surface contact disinfection",
                result: {
                  recommendations: [
                    {
                      name: "Hard Surface Cleaner & Disinfectant",
                      tagline: "Contact surface disinfection",
                      why: "Documented hard-surface disinfection for cabin touchpoints.",
                      to: "/hard-surface-cleaner-and-disinfectant",
                    },
                    {
                      name: "FOG-IT INNOVA",
                      tagline: "Large-area fogging option",
                      why: "Use when full-volume cabin coverage is needed.",
                      to: "/fog-it",
                    },
                  ],
                  quote: {
                    industry: "Disinfection",
                    application: "Disinfection / Fogging",
                    product: "FOG-IT INNOVA",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "runway",
        label: "Runway & apron",
        description: "Rubber, lights, hangar floors",
        options: [
          {
            id: "rubber",
            label: "Rubber deposits / tire marks",
            options: [
              {
                id: "truck-mount",
                label: "Truck-mounted cleaning",
                result: {
                  recommendations: [
                    {
                      name: "Runway Tire Stripper",
                      tagline: "Rubber removal chemistry",
                      why: "Designed for runway rubber and tire-mark programmes.",
                      to: "/runway-tire-stripper",
                    },
                    {
                      name: "Runway Cleaning Equipment",
                      tagline: "Truck-mounted system",
                      why: "Application platform for runway rubber removal.",
                      to: "/runway-cleaning-equipment",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Aircraft Exterior Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
              {
                id: "light-clean",
                label: "Runway light cleaning",
                result: {
                  recommendations: [
                    {
                      name: "Runway Light Tire Cleaner",
                      tagline: "Light & rubber remover",
                      why: "Targets rubber and soil around embedded runway lights.",
                      to: "/runway-light-tire-cleaner",
                    },
                    {
                      name: "Runway Tire Stripper",
                      tagline: "Broader rubber programme",
                      why: "Pair with light cleaner for full runway rubber control.",
                      to: "/runway-tire-stripper",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Aircraft Exterior Cleaning",
                    product: "ETS AviClean",
                  },
                },
              },
            ],
          },
          {
            id: "hangar-floor",
            label: "Hangar floor contamination",
            options: [
              {
                id: "scrub",
                label: "Floor scrub / mop",
                result: {
                  recommendations: [
                    {
                      name: "Aircraft Hangar Floor Cleaner",
                      tagline: "Hangar floor programme",
                      why: "Built for oil, grease, and traffic film on hangar concrete.",
                      to: "/aircraft-hangar-floor-cleaner",
                    },
                    {
                      name: "Cleaning Accessories",
                      tagline: "Pads & application tools",
                      why: "Accessories support consistent floor cleaning results.",
                      to: "/cleaning-accessories",
                    },
                  ],
                  quote: {
                    industry: "Aviation & Aerospace",
                    application: "Industrial Degreasing",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "industrial",
    label: "Industrial & Metal",
    description: "Workshops, fabrication, refineries, vehicles",
    options: [
      {
        id: "metal",
        label: "Metal & painted surfaces",
        description: "Workshop, prep, paint lines",
        options: [
          {
            id: "grease",
            label: "Heavy grease & oil",
            options: [
              {
                id: "degrease-spray",
                label: "Spray degreasing",
                result: {
                  recommendations: [
                    {
                      name: "Universal Cleaner",
                      tagline: "Economic industrial degreaser",
                      why: "Broad-spectrum degreaser for workshop metal and equipment.",
                      to: "/universal-cleaner",
                    },
                    {
                      name: "Bupi Cleaner NF Concentrate",
                      tagline: "Concentrated workshop cleaner",
                      why: "High-dilution concentrate for heavy industrial soils.",
                      to: "/bupi-cleaner-nf-concentrate",
                    },
                    {
                      name: "Industrial products hub",
                      tagline: "Full industrial range",
                      why: "Browse category options for metal and workshop applications.",
                      to: "/products/industrial",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Industrial Degreasing",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
              {
                id: "parts-wash",
                label: "Parts washing",
                result: {
                  recommendations: [
                    {
                      name: "Nonsol 1",
                      tagline: "Solvent-free parts cleaner",
                      why: "Replaces solvent baths for metal parts cleaning.",
                      to: "/nonsol-1",
                    },
                    {
                      name: "Aqua Silicon Remover",
                      tagline: "Silicon / release-agent soils",
                      why: "When silicone or release films complicate paint prep.",
                      to: "/aqua-silicon-remover",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Metal Surface Preparation",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
            ],
          },
          {
            id: "rust",
            label: "Rust / corrosion / paint strip",
            options: [
              {
                id: "derust",
                label: "Chemical derusting",
                result: {
                  recommendations: [
                    {
                      name: "Bioderuster",
                      tagline: "Bio-based rust remover",
                      why: "Derusts and supports paint-strip workflows without harsh solvents.",
                      to: "/bioderuster",
                    },
                    {
                      name: "Actan 3F",
                      tagline: "Surface treatment chemistry",
                      why: "Complementary surface treatment in restoration programmes.",
                      to: "/actan-3f",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Metal Surface Preparation",
                    product: "Not sure — advise me",
                  },
                },
              },
              {
                id: "blast",
                label: "Air-blast / media alternative",
                result: {
                  recommendations: [
                    {
                      name: "Eco Safe Air Blaster",
                      tagline: "Low-dust blasting alternative",
                      why: "Mechanical restoration option when chemistry alone is not enough.",
                      to: "/eco-safe-air-blaster",
                    },
                    {
                      name: "Bioderuster",
                      tagline: "Follow-up chemical derust",
                      why: "Often used after blasting for residual oxide control.",
                      to: "/bioderuster",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Metal Surface Preparation",
                    product: "Not sure — advise me",
                  },
                },
              },
            ],
          },
          {
            id: "aluminium",
            label: "Aluminium oxidation / soil",
            options: [
              {
                id: "aluminium-clean",
                label: "Aluminium cleaner",
                result: {
                  recommendations: [
                    {
                      name: "Heavy Duty Aluminium Cleaner",
                      tagline: "HDAL for aluminium surfaces",
                      why: "Formulated for oxidized and soiled aluminium components.",
                      to: "/heavy-duty-aluminium-cleaner",
                    },
                    {
                      name: "Universal Cleaner",
                      tagline: "General metal degreaser",
                      why: "Use when soils are mixed grease rather than oxide-heavy.",
                      to: "/universal-cleaner",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Metal Surface Preparation",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "refinery",
        label: "Refinery / gas / pipelines",
        description: "Process equipment, oxygen systems, EGR",
        options: [
          {
            id: "process-soil",
            label: "Process soils & deposits",
            options: [
              {
                id: "flush",
                label: "Flush / circulate",
                result: {
                  recommendations: [
                    {
                      name: "E-Flush Concentrate",
                      tagline: "System flush chemistry",
                      why: "For circulating flush programmes in process equipment.",
                      to: "/e-flush",
                    },
                    {
                      name: "ETS HDC",
                      tagline: "Heavy-duty cleaner",
                      why: "Stronger cleaner for stubborn process residues.",
                      to: "/hdc",
                    },
                    {
                      name: "Antifoam",
                      tagline: "Foam control additive",
                      why: "Controls foam during flush and wash cycles.",
                      to: "/antifoam",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Industrial Degreasing",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
              {
                id: "oxygen",
                label: "Oxygen-system cleaning",
                result: {
                  recommendations: [
                    {
                      name: "Economic Oxygen Cleaner",
                      tagline: "Oxygen-service cleaning",
                      why: "Aligned to oxygen-system cleanliness requirements.",
                      to: "/economic-oxygen-cleaner",
                    },
                    {
                      name: "EGR Extra",
                      tagline: "EGR / exhaust-path soils",
                      why: "When deposits involve exhaust-gas recirculation paths.",
                      to: "/egr-extra",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Industrial Degreasing",
                    product: "Not sure — advise me",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "vehicle",
        label: "Automotive / truck / fleet",
        description: "Wash bays, wheels, bodywork",
        options: [
          {
            id: "fleet-wash",
            label: "Fleet / truck wash",
            options: [
              {
                id: "foam-wash",
                label: "Foam / pressure wash",
                result: {
                  recommendations: [
                    {
                      name: "Truckclean 300 HF",
                      tagline: "High-foam truck cleaner",
                      why: "Built for fleet wash programmes with foam application.",
                      to: "/truckclean-300-hf",
                    },
                    {
                      name: "Car Shampoo Brilliant Shine",
                      tagline: "Finish wash shampoo",
                      why: "Finish step for visible fleet and light vehicle wash.",
                      to: "/car-shampoo-brilliant-shine",
                    },
                    {
                      name: "Automotive & Truck",
                      tagline: "Full vehicle range",
                      why: "See the complete automotive and logistics cleaner set.",
                      to: "/automotive-truck",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Industrial Degreasing",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
              {
                id: "wheels",
                label: "Wheels & brake dust",
                result: {
                  recommendations: [
                    {
                      name: "Wheel Clean Profi 1",
                      tagline: "Professional wheel cleaner",
                      why: "Targets brake dust and wheel soils on fleet vehicles.",
                      to: "/wheel-clean-profi-1",
                    },
                    {
                      name: "Insect Remover",
                      tagline: "Bug & organic soil remover",
                      why: "Common companion product for front-end fleet wash.",
                      to: "/insect-remover",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Industrial Degreasing",
                    product: "ETS Degreaser Pro",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "marine",
    label: "Marine & Offshore",
    description: "Hull, engine room, offshore platforms",
    options: [
      {
        id: "hull",
        label: "Hull & deck",
        options: [
          {
            id: "biofoul",
            label: "Salt, soil & biofouling film",
            options: [
              {
                id: "wash-down",
                label: "Wash-down / scrub",
                result: {
                  recommendations: [
                    {
                      name: "Marine & Offshore hub",
                      tagline: "MARPOL-aligned cleaning",
                      why: "Start with the marine programme overview for hull and deck applications.",
                      to: "/industries/marine",
                    },
                    {
                      name: "AquaSmarter",
                      tagline: "Water-based cleaning platform",
                      why: "Solvent-free chemistry suited to environmentally sensitive wash-down.",
                      to: "/technology/aquasmarter",
                    },
                    {
                      name: "Offshore | Marine",
                      tagline: "Offshore application pages",
                      why: "Detailed offshore and marine use cases from the legacy programme.",
                      to: "/offshore-marine",
                    },
                  ],
                  quote: {
                    industry: "Marine & Offshore",
                    application: "Marine Hull Cleaning",
                    product: "ETS MarineClean",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "engine-room",
        label: "Engine room & machinery",
        options: [
          {
            id: "engine-grease",
            label: "Oil & grease",
            options: [
              {
                id: "degrease",
                label: "Degrease / wipe",
                result: {
                  recommendations: [
                    {
                      name: "Universal Cleaner",
                      tagline: "Industrial degreaser",
                      why: "Effective on machinery greases typical in engine rooms.",
                      to: "/universal-cleaner",
                    },
                    {
                      name: "Marine & Offshore hub",
                      tagline: "MARPOL-compliant guidance",
                      why: "Confirm discharge and application guidance for onboard use.",
                      to: "/industries/marine",
                    },
                  ],
                  quote: {
                    industry: "Marine & Offshore",
                    application: "Engine Room Degreasing",
                    product: "ETS MarineClean",
                  },
                },
              },
              {
                id: "pressure",
                label: "Pressure wash",
                result: {
                  recommendations: [
                    {
                      name: "Pressure Cleaner 8ATO",
                      tagline: "Pressure-wash chemistry",
                      why: "Suited to pressure application on machinery spaces.",
                      to: "/pressure-cleaner-8ato",
                    },
                    {
                      name: "Bupi Cleaner NF Concentrate",
                      tagline: "Concentrated degreaser",
                      why: "Dilutable concentrate for high-volume wash-downs.",
                      to: "/bupi-cleaner-nf-concentrate",
                    },
                  ],
                  quote: {
                    industry: "Marine & Offshore",
                    application: "Engine Room Degreasing",
                    product: "ETS MarineClean",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "haccp",
    label: "HACCP / Food Safety",
    description: "Food plants, kitchens, hospitality",
    options: [
      {
        id: "food-contact",
        label: "Food-contact surfaces",
        options: [
          {
            id: "grease-food",
            label: "Grease & food soil",
            options: [
              {
                id: "clean-wipe",
                label: "Clean & wipe",
                result: {
                  recommendations: [
                    {
                      name: "Grease Cleaner",
                      tagline: "HACCP grease remover",
                      why: "Targets kitchen and processing grease on hard surfaces.",
                      to: "/grease-cleaner",
                    },
                    {
                      name: "Multi Cleaner",
                      tagline: "Daily multi-surface cleaner",
                      why: "Everyday cleaner for food-environment hard surfaces.",
                      to: "/multi-cleaner",
                    },
                    {
                      name: "HACCP products",
                      tagline: "Full food-safety range",
                      why: "Browse all HACCP-aligned cleaners and disinfectors.",
                      to: "/haccp-product",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
              {
                id: "oven",
                label: "Oven / grill soil",
                result: {
                  recommendations: [
                    {
                      name: "Oven and Grill Cleaner",
                      tagline: "High-temp cooking soils",
                      why: "Built for burnt-on grease in ovens and grills.",
                      to: "/oven-and-grill-cleaner",
                    },
                    {
                      name: "Grease Cleaner",
                      tagline: "Surrounding surface grease",
                      why: "Use around cooking equipment for peripheral soils.",
                      to: "/grease-cleaner",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
            ],
          },
          {
            id: "sanitise",
            label: "Sanitise / disinfect",
            options: [
              {
                id: "sanitary",
                label: "Sanitary / washroom",
                result: {
                  recommendations: [
                    {
                      name: "WC Cleaner SaniPower",
                      tagline: "HACCP sanitary cleaner",
                      why: "Sanitary cleaning aligned to food-site hygiene programmes.",
                      to: "/wc-cleaner-sanipower",
                    },
                    {
                      name: "SaniPower Extra",
                      tagline: "Stronger sanitary bleach liquid",
                      why: "When higher-strength sanitary cleaning is required.",
                      to: "/sanitary-bleach-liquid-sanipower-extra",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
              {
                id: "alcohol-free",
                label: "Alcohol-free disinfection",
                result: {
                  recommendations: [
                    {
                      name: "Alcohol-Free Cleaner & Disinfector",
                      tagline: "Clean + disinfect without alcohol",
                      why: "For sites that require alcohol-free disinfection chemistry.",
                      to: "/alcohol-free-cleaner-and-disinfector",
                    },
                    {
                      name: "What is HACCP?",
                      tagline: "Programme context",
                      why: "Understand how ETS products fit HACCP documentation.",
                      to: "/what-is-haccp",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "facility",
        label: "Facility floors & glass",
        options: [
          {
            id: "floors",
            label: "Floors",
            options: [
              {
                id: "floor-clean",
                label: "Floor cleaning",
                result: {
                  recommendations: [
                    {
                      name: "Floor Shine",
                      tagline: "Floor cleaner programme",
                      why: "Floor cleaning suited to food and facility environments.",
                      to: "/floor-shine",
                    },
                    {
                      name: "Multi Cleaner",
                      tagline: "General hard-surface backup",
                      why: "Use for adjacent walls and equipment bases.",
                      to: "/multi-cleaner",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
            ],
          },
          {
            id: "glass",
            label: "Glass & panels",
            options: [
              {
                id: "glass-clean",
                label: "Glass cleaning",
                result: {
                  recommendations: [
                    {
                      name: "Glass Cleaner",
                      tagline: "HACCP glass cleaner",
                      why: "Streak-controlled glass cleaning for food and hospitality sites.",
                      to: "/glass-cleaner",
                    },
                    {
                      name: "Composite Panel Universal Cleaner",
                      tagline: "Panel & composite surfaces",
                      why: "When soils sit on composite wall or panel systems.",
                      to: "/composite-panel-universal-cleaner",
                    },
                  ],
                  quote: {
                    industry: "HACCP / Food Safety",
                    application: "Food Production Facility",
                    product: "ETS FoodSafe",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "disinfection",
    label: "Disinfection / Water treatment",
    description: "Space fogging, water systems, Nano Diamond",
    options: [
      {
        id: "air-space",
        label: "Air & enclosed spaces",
        options: [
          {
            id: "fog-need",
            label: "Need whole-room coverage",
            options: [
              {
                id: "fog-method",
                label: "Fogging system",
                result: {
                  recommendations: [
                    {
                      name: "FOG-IT INNOVA",
                      tagline: "Electrostatic fogging",
                      why: "Primary solution for rapid large-volume disinfection.",
                      to: "/fog-it",
                    },
                    {
                      name: "Desi Box",
                      tagline: "Small-item sterilization",
                      why: "Complement room fogging with enclosed-item treatment.",
                      to: "/desi-box",
                    },
                    {
                      name: "Disinfection overview",
                      tagline: "Full disinfection range",
                      why: "See how fogging fits the broader ETS disinfection offer.",
                      to: "/disinfection",
                    },
                  ],
                  quote: {
                    industry: "Disinfection",
                    application: "Disinfection / Fogging",
                    product: "FOG-IT INNOVA",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "water",
        label: "Water systems",
        options: [
          {
            id: "water-treat",
            label: "Water treatment / ionization",
            options: [
              {
                id: "aquasmarter",
                label: "AquaSmarter programme",
                result: {
                  recommendations: [
                    {
                      name: "AquaSmarter",
                      tagline: "Water-activated technology",
                      why: "Flagship water-based platform for treatment and cleaning programmes.",
                      to: "/technology/aquasmarter",
                    },
                    {
                      name: "Water treatment introduction",
                      tagline: "How the system works",
                      why: "Start here for applications and operating concept.",
                      to: "/water-treatment-introduction",
                    },
                    {
                      name: "Applications",
                      tagline: "Where AquaSmarter is used",
                      why: "Map your site type to documented AquaSmarter applications.",
                      to: "/water-treatment-application",
                    },
                  ],
                  quote: {
                    industry: "Disinfection",
                    application: "Disinfection / Fogging",
                    product: "AquaSmarter™",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "lubrication",
        label: "Friction / fuel economy",
        options: [
          {
            id: "engine-friction",
            label: "Engine friction reduction",
            options: [
              {
                id: "nano",
                label: "Nano lubricant additive",
                result: {
                  recommendations: [
                    {
                      name: "Nano Diamond",
                      tagline: "6%+ fuel savings potential",
                      why: "Nano-scale diamond lubricant additive for fleet and industrial engines.",
                      to: "/technology/nano-diamond",
                    },
                    {
                      name: "New Technologies",
                      tagline: "Related innovation pages",
                      why: "Explore adjacent ETS technology programmes.",
                      to: "/new-technologies",
                    },
                  ],
                  quote: {
                    industry: "Industrial & Metal",
                    application: "Nano Diamond Lubrication",
                    product: "Nano Diamond™",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

/** Build a quote URL with finder selections prefilled. */
export function buildFinderQuoteUrl(
  quote: FinderQuotePrefill,
  summary?: string,
): string {
  const params = new URLSearchParams();
  params.set("industry", quote.industry);
  params.set("application", quote.application);
  params.set("product", quote.product);
  if (summary) params.set("message", summary);
  return `/quote?${params.toString()}`;
}
