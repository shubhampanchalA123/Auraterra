export const products = [
  {
    id: "pmma-amber",
    name: "PMMA Amber",
    image: "/images/product1.jpg",

    description: [
      "PMMA stands for Polymethyl Methacrylate, a transparent thermoplastic also known as acrylic or plexiglass.",
      "PMMA Amber is an amber-colored (yellow/orange tint) PMMA material used in sheets, rods, tubes, or molded parts."
    ],

    obligation: [
      "Not a regulatory or mandatory product on its own",
      "Required only if specified in a contract, design standard, or industry requirement"
    ],

    uses: [
      "Light covers & lenses (indicator lights, signal lamps)",
      "UV filtering applications",
      "Automotive indicator parts",
      "Electronics display covers",
      "Medical & lab equipment",
      "Decorative & architectural elements",
      "Safety shields and machine guards"
    ],

    usageLevel: [
      "Manufacturing / Industrial level – primary",
      "Business / Commercial level",
      "Product / Component level",
      "Occasional consumer / DIY usage"
    ]
  },

  {
  id: "pbt-gf-10-black",
  name: "PBT Glass Filled 10% Black",
  image: "/images/product2.jpg",

  description: [
    "PBT (Polybutylene Terephthalate) is an engineering thermoplastic known for strength, dimensional stability, and electrical insulation.",
    "Glass-filled 10% means the material contains 10% glass fibers, which improve stiffness and strength.",
    "Black pigmentation often enhances UV resistance and durability.",
    "Overall, this is a reinforced engineering plastic used for durable, precision components."
  ],

  obligation: [
    "Used based on design and performance requirements, not regulation",
    "Becomes obligatory only if specified in OEM or customer drawings",
    "Required in automotive or electrical component specifications",
    "May be mandated by contracts or technical datasheets"
  ],

  uses: [
    "Electrical connectors and terminals",
    "Switch housings",
    "Sensor housings",
    "Automotive components (clips, brackets, under-hood parts)",
    "Appliance parts",
    "Industrial mechanical parts"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level",
    "Business / Enterprise level – OEMs and suppliers"
  ]
},

{
  id: "pc-abs-natural",
  name: "PC – ABS (Natural)",
  image: "/images/product3.jpeg",

  description: [
    "PC-ABS is a thermoplastic blend of Polycarbonate (PC) and Acrylonitrile Butadiene Styrene (ABS).",
    "Natural means the material is uncolored (off-white / translucent / beige), straight from the resin without added pigments."
  ],

  obligation: [
    "Used by specification, not regulation",
    "Compliance may be indirect (fire ratings like UL94, impact standards)",
    "The material itself is not mandated by law"
  ],

  uses: [
    "Electronic housings & enclosures (laptops, printers, routers)",
    "Automotive interior parts (dashboards, trims, panels)",
    "Consumer appliances (TV frames, washing machine panels)",
    "Medical device housings",
    "Electrical components",
    "Industrial equipment covers"
  ],

  usageLevel: [
    "Product / Component level – core application",
    "Manufacturing / Industrial level – injection molding & fabrication",
    "Business / Enterprise level – OEMs, Tier-1 suppliers"
  ]
},

{
  id: "abs-gf-20-natural",
  name: "ABS Glass Filled 20% Natural",
  image: "/images/product4.jpeg",

  description: [
    "ABS (Acrylonitrile Butadiene Styrene) with 20% glass fiber reinforcement.",
    "Natural means the material is uncolored (off-white / milky / beige), straight from the base resin.",
    "Compared to standard ABS, this grade is much stiffer and stronger due to the glass fibers."
  ],

  obligation: [
    "Used by technical specification, not regulation",
    "Becomes obligatory only if mentioned in customer or OEM drawings",
    "Required when specified in product design specifications",
    "May be mandated by contracts or industry standards",
    "Obligation usually comes from performance requirements (strength, stability, tolerances)"
  ],

  uses: [
    "Automotive interior and functional parts",
    "Electrical and electronic housings",
    "Appliance structural components",
    "Industrial brackets and supports",
    "Machine covers and frames",
    "Prototype or base material for later coloring"
  ],

  additionalNotes: {
    title: "Why Natural Specifically",
    points: [
      "Easier color compounding later",
      "Better visual inspection for defects",
      "Preferred for custom-colored parts"
    ]
  },

  tradeOffs: [
    "Higher stiffness",
    "Lower impact resistance than standard ABS",
    "Rougher surface finish due to glass fibers"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – injection molding",
    "Business / Enterprise level – OEMs, Tier-1 suppliers",
    "Not a consumer-level product"
  ]
},

{
  id: "san-gf-20-natural",
  name: "SAN Glass Filled 20% Natural",
  image: "/images/product5.webp",

  description: [
    "SAN (Styrene Acrylonitrile) is a rigid, transparent-to-translucent thermoplastic known for clarity, stiffness, and chemical resistance.",
    "Glass-filled 20% means 20% glass fibers are added to increase strength and rigidity.",
    "Natural indicates no added color (off-white / translucent base material)."
  ],

  obligation: [
    "Used only if specified in product design requirements",
    "May be required by customer or OEM material specifications",
    "Can be mandated through contractual agreements",
    "No regulatory obligation unless a drawing or standard explicitly calls for it"
  ],

  uses: [
    "Electrical and electronic components",
    "Appliance parts",
    "Precision housings",
    "Structural plastic parts",
    "Chemical-resistant components",
    "Transparent or lightly tinted technical parts (before reinforcement)"
  ],

  keyProperties: [
    "High stiffness and hardness",
    "Good chemical and heat resistance",
    "Low creep behavior",
    "Better surface finish than ABS GF in some cases",
    "More brittle compared to ABS or PC-ABS"
  ],

  usageLevel: [
    "Component / Part level – main usage",
    "Manufacturing / Industrial level – injection molding",
    "Business / Enterprise level – OEM and industrial applications",
    "Not a consumer-level material"
  ]
},


{
  id: "pc-fr-v0-siemens-grey",
  name: "PC FR V-0 (Siemens Grey)",
  image: "/images/product6.jpg",

  description: [
    "PC (Polycarbonate) is a strong, impact-resistant thermoplastic widely used in industrial and electrical applications.",
    "FR indicates Flame Retardant properties.",
    "V-0 refers to UL 94 V-0 flammability rating, the highest fire safety standard with self-extinguishing behavior and no flaming drips.",
    "Siemens Grey means the material is pre-colored to match Siemens industrial standards for electrical enclosures and equipment."
  ],

  obligation: [
    "Effectively mandatory when specified by Siemens or OEM electrical standards",
    "Required for UL / IEC / CE fire safety compliance in industrial panels",
    "Mandatory if customer drawings or specifications demand UL94 V-0 rating",
    "Practically required for Siemens-compatible enclosures and regulated electrical housings"
  ],

  uses: [
    "Electrical enclosures (switchgear, control panels)",
    "Industrial automation housings",
    "Breaker and switch covers",
    "Telecom and IT equipment panels",
    "High-voltage or high-temperature industrial components"
  ],

  keyProperties: [
    "Self-extinguishing flame-retardant material (UL94 V-0)",
    "High impact resistance",
    "Excellent heat resistance",
    "Superior dimensional stability",
    "Pre-colored for visual and branding consistency"
  ],

  usageLevel: [
    "Component / Enclosure level – primary usage",
    "Manufacturing / Industrial level – injection molding and fabrication",
    "Enterprise / OEM level – electrical, automation, industrial equipment",
    "Used in regulated environments with fire-safety compliance audits"
  ]
},

{
  id: "pmma-natural",
  name: "PMMA Natural",
  image: "/images/product7.jpg",

  description: [
    "PMMA (Polymethyl Methacrylate) is also known as acrylic or plexiglass.",
    "Natural means the material is uncolored, clear, and transparent.",
    "It is a lightweight, rigid thermoplastic with excellent optical clarity."
  ],

  obligation: [
    "Used when transparency, aesthetics, or UV resistance is required",
    "May be specified in design drawings, OEM standards, or contracts",
    "Not mandatory by law"
  ],

  uses: [
    "Optical lenses, light covers, and display panels",
    "Signage and advertising (acrylic boards)",
    "Decorative panels and furniture",
    "Medical and laboratory equipment requiring transparency",
    "Protective shields and machine guards",
    "DIY and prototyping applications"
  ],

  keyProperties: [
    "High transparency (up to 92% light transmission)",
    "Lightweight compared to glass",
    "Good weather resistance",
    "UV resistant",
    "Rigid structure with smooth surface finish",
    "Lower impact resistance compared to polycarbonate"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – cutting, molding, extrusion",
    "Business / Enterprise level – signage, displays, enclosures",
    "Occasional consumer / DIY usage"
  ]
},

{
  id: "pmma-red",
  name: "PMMA Red",
  image: "/images/product8.jpg",

  description: [
    "PMMA (Polymethyl Methacrylate) is also known as acrylic or plexiglass.",
    "Red indicates the material is colored using red pigment.",
    "It is a rigid, colored acrylic material available as sheets, rods, or molded parts.",
    "It retains PMMA’s lightweight structure and transparent to semi-transparent properties while adding red color."
  ],

  obligation: [
    "Used based on design, aesthetic, or functional requirements",
    "May be specified in drawings or product standards where red color is required",
    "Commonly required for indicator panels or signal light applications",
    "Not mandatory by law"
  ],

  uses: [
    "Signal lights and indicator covers (red lenses)",
    "Decorative panels and signage",
    "Automotive indicator panels",
    "Electronic equipment indicator covers",
    "Architectural and display features",
    "Protective shields or covers where color coding is required"
  ],

  keyProperties: [
    "Transparent to semi-transparent depending on pigment concentration",
    "Lightweight and rigid structure",
    "Good weather resistance",
    "UV resistant",
    "Maintains PMMA clarity with added color",
    "Lower impact resistance compared to polycarbonate"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – cutting, molding, extrusion",
    "Business / Enterprise level – signage, electronics, automotive, architecture",
    "Occasional consumer / DIY usage"
  ]
},

{
  id: "pmma-amber",
  name: "PMMA Amber",
  image: "/images/product8.jpg",

  description: [
    "PMMA (Polymethyl Methacrylate) is also known as acrylic or plexiglass.",
    "Amber indicates the material is colored with an amber (yellow/orange) tint.",
    "It is a rigid, tinted acrylic material with the same base properties as standard PMMA.",
    "Amber tint can provide light filtering along with aesthetic appeal."
  ],

  obligation: [
    "Used based on design or functional requirements",
    "Often specified in drawings or standards where amber color or UV filtering is needed",
    "Not mandatory by law"
  ],

  uses: [
    "Indicator lights and lenses (amber signaling)",
    "Automotive applications such as turn signals and dashboard indicators",
    "Decorative panels and architectural elements",
    "Machine guards or protective covers with tinted visibility",
    "Display panels requiring amber aesthetics"
  ],

  keyProperties: [
    "Lightweight and rigid structure",
    "Good optical clarity with consistent amber color",
    "UV resistant",
    "Weather resistant",
    "Lower impact resistance compared to polycarbonate"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – molding, extrusion, fabrication",
    "Business / Enterprise level – automotive, electronics, signage, architecture",
    "Occasional consumer / DIY usage"
  ]
},

{
  id: "pp-gf-30-natural",
  name: "PP Glass Filled 30% Natural",
  image: "/images/product9.jpg",

  description: [
    "PP (Polypropylene) is a common thermoplastic known for chemical resistance and flexibility.",
    "Glass-filled 30% means the material contains 30% glass fibers, which significantly increase stiffness, strength, and dimensional stability.",
    "Natural indicates the material is uncolored (off-white / beige) in its base resin form.",
    "Overall, this is a reinforced polypropylene material that is much stronger and stiffer than standard PP."
  ],

  obligation: [
    "Used based on design and performance requirements",
    "Mandatory only if specified in OEM drawings or industrial equipment specifications",
    "May be required by product standards or technical documentation"
  ],

  uses: [
    "Automotive parts (under-hood components, battery trays, brackets)",
    "Industrial components (structural supports, housings, covers)",
    "Appliance parts (mounting brackets, frames)",
    "Chemical-resistant equipment",
    "Pipe fittings and mechanical parts"
  ],

  keyProperties: [
    "High stiffness and dimensional stability",
    "Good chemical and corrosion resistance",
    "Lightweight compared to metal alternatives",
    "Good impact strength for reinforced polypropylene",
    "Easy to mold and process"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – injection molding or extrusion",
    "Business / Enterprise level – automotive, industrial, appliance OEMs",
    "Rarely used at consumer level"
  ]
},

{
  id: "pp-gf-30-natural",
  name: "PP Glass Filled 30% Natural",
  image: "/images/product10.webp",

  description: [
    "PP (Polypropylene) is a common thermoplastic known for chemical resistance and flexibility.",
    "Glass-filled 30% means the material contains 30% glass fibers, which significantly increase stiffness, strength, and dimensional stability.",
    "Natural means the material is uncolored (off-white / beige) in its base resin form.",
    "This is a reinforced polypropylene material that is much stronger and stiffer than standard PP."
  ],

  obligation: [
    "Used based on design and performance requirements",
    "Mandatory only if specified in OEM drawings or industrial equipment specifications",
    "May be required by product standards or technical documentation"
  ],

  uses: [
    "Automotive parts (under-hood components, battery trays, brackets)",
    "Industrial components (structural supports, housings, covers)",
    "Appliance parts (mounting brackets, frames)",
    "Chemical-resistant equipment",
    "Pipe fittings and mechanical parts"
  ],

  keyProperties: [
    "High stiffness and dimensional stability",
    "Good chemical and corrosion resistance",
    "Lightweight compared to metal alternatives",
    "Good impact strength for reinforced polypropylene",
    "Easy to mold and process"
  ],

  usageLevel: [
    "Component / Part level – primary usage",
    "Manufacturing / Industrial level – injection molding or extrusion",
    "Business / Enterprise level – automotive, industrial, appliance OEMs",
    "Rarely used directly by consumers"
  ]
}

];

export default products