import {
  Product,
  Ingredient,
  Testimonial,
  Blog,
  SkinQuestion,
  ContactSubmission,
  GalleryItem,
} from "./types";

const RenewImg = "/images/renew.jpg";
const GoodMoistureImg = "/images/GoodMoisture.jpg";

const MoistcomImg = "/images/112A4432.jpg";
const SuncoImg = "/images/Sunco.jpg";
const FluideImg = "/images/fluide.jpg";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "MOISTCOM LITE Skin lightning Moisturiser",
    tagline: "Advanced Cellular Skin Lightening & Lipic Barrier Fortification",
    category: "Moisturizer",
    price: "Rs. 800",
    rating: 4.8,
    image: MoistcomImg,
    description: "",
    benefits: [],
    ingredients: [
      {
        name: "Niacinamide",
        percentage: "4.0%",
        purpose:
          "Regulates sebum, minimizes pore outline and fades active dark marks",
      },
      {
        name: "Ceramide",
        percentage: "1.5%",
        purpose: "Rebuilds natural skin lipid brick barrier",
      },
      {
        name: "Sodium hyaluronate",
        percentage: "1.0%",
        purpose:
          "Locks relative atmospheric moisture instantly into dermal layers",
      },
      {
        name: "Aquaxyl",
        percentage: "1.5%",
        purpose:
          "Optimizes skin hydric flows and boosts deep aquaporin synthesis",
      },
      {
        name: "Alpha arbutin",
        percentage: "2.0%",
        purpose: "Inhibits tyrosinase enzymes to brighten skin tone safely",
      },
      {
        name: "Ethyl ascorbic acid",
        percentage: "1.5%",
        purpose: "Renders high stability vitamin C antioxidant benefit",
      },
      {
        name: "Kojic acid",
        percentage: "1.0%",
        purpose: "Fades stubborn post-inflammatory discoloration",
      },
      {
        name: "Licorice extract & Willow bark extract",
        percentage: "3.0%",
        purpose: "Calms redness, purges micro-congestion and soothes cells",
      },
    ],
    suitability: ["Dry", "Combination", "Sensitive", "Oily"],
    usage:
      "Dispense a portion of cream. Apply over cleanly washed skin every morning and evening. Pat gently in upward circular motions until completely absorbed.",
  },
  {
    id: "prod-2",
    name: "SUNCO 5O SILICONE GEL",
    tagline:
      "Ultra-Sheer Broad-Spectrum SPF 50 Shield & Non-Comedogenic Matte Finish",
    category: "Sunscreen",
    price: "Rs. 1,040",
    rating: 4.9,
    image: SuncoImg,
    description: "",
    benefits: [],
    ingredients: [
      {
        name: "Micronized Zinc Oxide",
        percentage: "10.0%",
        purpose: "Forms a physical barrier to block and reflect UVA/UVB rays",
      },
      {
        name: "Micronized TiO2",
        percentage: "4.0%",
        purpose: "Delivers broad solar protection with supreme transparency",
      },
      {
        name: "Niacinamide",
        percentage: "2.0%",
        purpose: "Soothes dermal inflammation and strengthens moisture barrier",
      },
      {
        name: "Hyaluronic acid & Aquaxyl",
        percentage: "1.5%",
        purpose: "Fights heat-induced cell dehydration and loss of bounce font",
      },
      {
        name: "D-Panthenol",
        percentage: "1.0%",
        purpose: "Deeply comforts and accelerates tissue recovery",
      },
      {
        name: "Vitamin C & Vitamin E",
        percentage: "1.2%",
        purpose:
          "Synergistic antioxidant network that counteracts solar damage",
      },
      {
        name: "Octyl Salicylate & Octocrylene",
        percentage: "5.0%",
        purpose: "High-efficacy broad-spectrum UV absorbing shield",
      },
    ],
    suitability: ["Oily", "Combination", "Dry", "Sensitive"],
    usage:
      "Apply a generous coin-sized layer to your face and neck 15 minutes prior to solar exposure. Reapply every 3-4 hours if outdoors under active UV light.",
  },
  {
    id: "prod-3",
    name: "Fluide Sunscrenn",
    tagline:
      "Aqueous Lightweight Fluid Sun Care with Calming Green Tea Extracts",
    category: "Sunscreen",
    price: "Rs. 1,180",
    rating: 4.7,
    image: FluideImg,
    description: "",
    benefits: [],
    ingredients: [
      {
        name: "Ethylhexyl Butyl Methoxycinnamate",
        percentage: "7.5%",
        purpose: "Organic UVB filter absorbing harmful solar energies",
      },
      {
        name: "Methoxydibenzoylmethane",
        percentage: "3.0%",
        purpose: "Delivers superior deep protection against aging UVA rays",
      },
      {
        name: "Benzophenone-3 & Phospholipids",
        percentage: "4.0%",
        purpose: "Extends protection lifespan with a skin-mimetic delivery",
      },
      {
        name: "Glycerin",
        percentage: "5.0%",
        purpose: "Supplies foundational comfort and deep moisture retention",
      },
      {
        name: "Camellia Sinensis (Green Tea) Leaf Extract",
        percentage: "2.0%",
        purpose:
          "Botanical defense neutralizing free radicals and environmental smog",
      },
      {
        name: "Allantoin",
        percentage: "1.0%",
        purpose:
          "Calms cutaneous heat irritation and soothes solar sensitivity",
      },
      {
        name: "Tocopheryl Acetate (Vitamin E)",
        percentage: "1.0%",
        purpose:
          "Strengthens dermal membrane resistance against aging triggers",
      },
    ],
    suitability: ["Sensitive", "Dry", "Combination", "Oily"],
    usage:
      "Shake very well. Apply generously across your face, neck and ears as the definitive final phase of your morning skincare routine.",
  },
  {
    id: "prod-4",
    name: "RENEW NIACINAMIDE SERUM",
    tagline:
      "Anti-Congestion, Pore Refinement & Hyperpigmentation Erasing Concentrate",
    category: "Serum",
    price: "Rs. 1,560",
    rating: 4.8,
    image: RenewImg,
    description: "",
    benefits: [],
    ingredients: [
      {
        name: "Niacinamide (Vitamin B3)",
        percentage: "10.0%",
        purpose:
          "Fades persistent dark marks and strengthens local lipid barrier",
      },
      {
        name: "Zinc PCA",
        percentage: "1.0%",
        purpose:
          "Regulates oil output, calms breakouts and suppresses congestion",
      },
      {
        name: "Vitamin E",
        percentage: "1.0%",
        purpose: "Accelerates cellular renewal and repairs tissue layers",
      },
      {
        name: "Morus Alba (Mulberry) Root Extract",
        percentage: "2.0%",
        purpose: "Natural bio-agent that restricts pigment pathways",
      },
      {
        name: "Licorise root extract & Papaya Fruit Extract",
        percentage: "3.0%",
        purpose: "Soothes inflammation and dissolves dead surface scales",
      },
      {
        name: "Tranexamic Acid",
        percentage: "2.0%",
        purpose:
          "Prevents vascular-induced skin discoloration and high redness",
      },
    ],
    suitability: ["Oily", "Combination", "Sensitive", "Dry"],
    usage:
      "Warm 3 to 4 drops inside your clean palms. Gently press into your face and neck twice daily, targeting zones of hyperpigmentation or breakouts.",
  },
  {
    id: "prod-5",
    name: "THE GOOD MOISTURISER",
    tagline: "Deep Oatmeal Treatment & Restorative Moisture Lock Barrier Cream",
    category: "Moisturizer",
    price: "Rs. 950",
    rating: 4.8,
    image: GoodMoistureImg,
    description: "",
    benefits: [],
    ingredients: [
      {
        name: "Gglycerine & Isopropyl Myristate",
        percentage: "10.0%",
        purpose:
          "Humectants and emollients that restore immediate skin elasticity",
      },
      {
        name: "Olive Oil & Jojoba seed oil",
        percentage: "4.0%",
        purpose:
          "Plant lipids rich in skin-identical nourishment and healthy gloss",
      },
      {
        name: "Niacinamide (Vitamin B3)",
        percentage: "2.0%",
        purpose:
          "Diminishes sallow skin tone and builds natural moisture barrier",
      },
      {
        name: "Shea Butter",
        percentage: "3.0%",
        purpose: "Rich therapeutic butter that softens dry peeling scales",
      },
      {
        name: "Avena Sativa (Oat) Kernel bark Extract",
        percentage: "4.0%",
        purpose: "Relieves inflammatory hives, chronic itching and redness",
      },
      {
        name: "Sodium Lacatate & Sodium PCA",
        percentage: "2.5%",
        purpose:
          "Natural Moisturizing Factors (NMF) restoring hydration balance",
      },
      {
        name: "Wheat Protein & Allantoin",
        percentage: "1.5%",
        purpose: "Fosters skin cell restoration and delivers satin-soft feel",
      },
    ],
    suitability: ["Dry", "Sensitive", "Combination", "Oily"],
    usage:
      "Spread a smooth dollop evenly over dry, clean skin twice daily. Perform gentle sweeping massages focusing on areas prone to windburn or extreme dryness.",
  },
];

export const INITIAL_INGREDIENTS: Ingredient[] = [
  {
    id: "ing-1",
    name: "Copper Tripeptide-1",
    source: "Clinical",
    description: "",
    benefits: [],
    scientificName: "Glycyl-L-Histidil-L-Lysine-Copper(II)",
    derivedFrom: "Clinical peptide synthesis",
  },
  {
    id: "ing-2",
    name: "Centella Asiatica (Madecassoside)",
    source: "Botanical",
    description: "",
    benefits: [
      "Drastically suppresses biological inflammatory signals, preventing dry irritation",
      "Accelerates tissue healing and supports the internal microvascular structure",
      "Improves dermal lipid hydration, especially in extremely damaged skin cells",
    ],
    scientificName: "Centella Asiatica Leaf Glucoside",
    derivedFrom: "High-purity extract of wild Tiger Grass leaves",
  },
  {
    id: "ing-3",
    name: "Marine Ferment Cell Fluid",
    source: "Marine",
    description:
      "An elegant bio-ferment harvested from specialized marine organisms thriving under hyper-saline conditions in deep ocean vents. This fluid has evolved to withstand high atmospheric pressures, extreme UV, and severe temperatures, conferring resilient defensive mechanisms to human skin cells.",
    benefits: [
      "Stimulates high-purity mitochondrial respiration, boosting cell oxygenation",
      "Recharges cellular energy reserves (ATP), which declines rapidly with age",
      "Locks deep molecules of hydration within cells, acting as a natural anti-freeze barrier",
    ],
    scientificName: "Alteromonas Ferment Filtrate",
    derivedFrom: "Bio-cultivation of deep-sea hydrothermal microorganisms",
  },
  {
    id: "ing-4",
    name: "Bakuchiol (Retinol Alternative)",
    source: "Botanical",
    description:
      "The golden botanical extract obtained from the seeds of Psoralea corylifolia. Bakuchiol triggers identical genetic receptors to Retinol, stimulating rapid skin thickening, fading brown spots, and firming elastic coils—without Retinol-associated dry peeling, burning, or high UV vulnerability.",
    benefits: [
      "Acts as a 100% stable natural alternative to vitamin A derivatives",
      "Can be safely applied in broad daylight under standard conditions",
      "Inhibits collagen degradation enzymes while speeding up natural elastin synthesis",
    ],
    scientificName: "Psoralea Corylifolia Seed Monoterpene",
    derivedFrom: "Pure extracts of the ancient Babchi botanical seeds",
  },
  {
    id: "ing-5",
    name: "White Truffle Cellular Concentrate",
    source: "Botanical",
    description:
      "Harvested from deep beneath northern Italian forests, this rich fungal concentrate contains a brilliant cocktail of amino acids, minerals, and bioactive ceramides. Renowned for its rapid cellular brightening mechanism and luxury anti-aging profiles.",
    benefits: [
      "Gently brightens stubborn patches and brown spots via natural enzyme suppression",
      "Supplies optimal organic minerals like calcium, potassium, and magnesium",
      "Moisturizes dry, flaky surface micro-cells instantly",
    ],
    scientificName: "Tuber Magnatum Bio-Extract",
    derivedFrom:
      "Subdermal biological extraction of Italian Alba White Truffles",
  },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Shraddha Manandhar",
    role: "HQ Kathmandu Field Sales Officer, The Skin Professionals Nepal",
    avatar: "/images/employeePhotos/shraddhamanandhar.jpeg",
    content:
      "Working on the field with top skin clinics and dermatologist partners across Kathmandu, the professional feedback for Moistcom Lite and Sunco 50 is incredible. Our formulas are custom-engineered for South Asian lipid barriers and local climate conditions.",
    rating: 5,
    featured: true,
  },
  {
    id: "test-2",
    author: "Priyanshu Maharjan",
    role: "HQ Kathmandu Field Sales Officer, The Skin Professionals Nepal",
    avatar: "/images/employeePhotos/priyanshuMaharjan.jpg",
    content:
      "We collaborate closely with dozens of clinical clinics and pharmacies to distribute authentic active formulations. Clients are continually amazed at how quickly Moistcom Lite restores moisture balance and how Sunco 50 prevents solar hyperpigmentation.",
    rating: 5,
    featured: true,
  },
  {
    id: "test-3",
    author: "Bimal Chaudhary",
    role: "Nepalgunj Sector Field Officer, The Skin Professionals Nepal",
    avatar: "/images/employeePhotos/bimalChaudhary.jpeg",
    content:
      "In the intense, hot climate of the Nepalgunj sector, heavy skincare fails. Our non-greasy formulations control excess sebum, protect from dust congestion, and maintain a resilient barrier. It is a genuine breakthrough for our regional clinics.",
    rating: 5,
    featured: true,
  },
];

export const INITIAL_BLOGS: Blog[] = [
  {
    id: "blog-1",
    title:
      "The Modern Science of the Acid Mantle: Protecting Your Skin Barrier",
    excerpt:
      "Dermatologists explain why the common pursuit of squeaky-clean skin is destroying our first line of cellular defense.",
    content: `For decades, the beauty index championed a "squeaky-clean" skin feel as the golden benchmark of clean skin. Today, clinical dermatology reveals a far more complex reality. That tight, polished squeak is actually the sound of a completely compromised skin barrier.

At the very surface of your epidermis rests a microscopic, highly delicate film known as the acid mantle. Composed of natural botanical lipids, sweat, and friendly skin microflora, this mantle functions at a physiological pH of approximately 5.5. Its duty is absolute: lock essential moisture deep in the dermis while preventing pathogenic bacteria, smoke soot, and city pollutants from entering your bloodstream.

When you use aggressive foaming surfactants (like Sodium Lauryl Sulfate) or high-frequency physical scrubs, you wash away this vital defensive shield. The consequences are immediate:
1. **Transepidermal Water Loss (TEWL)**: Moisture evaporates rapidly from your skin, leading to chronic dry patches.
2. **Rebound Seborrhea**: In panic, your deep sebaceous glands overproduce thick, waxy sebum, clogging pores and causing adult acne.
3. **Chronic Inflammaging**: Pathogens trigger micro-cracks, generating localized histamine reactions that break down collagen coils.

At AURA, we formulate with structured coconut amino acids and rare marine glacial meltwater that closely mimic the natural cellular structure, preserving your acid mantle during every cleanse. Remember: healthy skincare is never about stripping; it is about gentle biological reinforcement.`,
    category: "Science",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
    publishedDate: "June 1, 2026",
    author: {
      name: "Dr. Sujata Koirala",
      role: "Chief Skin Clinic Dermatologist",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    },
  },
  {
    id: "blog-2",
    title:
      "Phyto-Retinols vs. Clinical Retinoids: A Balanced Scientific Comparison",
    excerpt:
      "Unveiling the molecular truth behind Bakuchiol and Retinol. Is a botanical alternative truly as effective as the Gold Standard?",
    content: `In the world of anti-aging dermatology, Vitamin A derivatives (Retinoids) remain undisputed. They speed up natural cell renewal, dissolve micro-congestion, and increase skin thickness. Yet, for millions with sensitised skin barriers, Retinol application is a painful journey marked by dry peeling, sunburns, and painful dermatitis.

Enter **Bakuchiol**, a high-purity phytochemical derived from the wild babchi botanical seeds. Marketing often claims it is a "gentle Retinol substitute." But what is the actual biochemical reality?

### The Molecular Path
Interestingly, Bakuchiol does not share structural or chemical resemblance with Retinoids. However, genomic mapping demonstrates that Bakuchiol interacts with the exact same cellular receptors in the dermis as Retinol. It tricks the fibroblasts into synthesizing Type I and Type III collagen, increases gene expression of vascular growth factors, and regulates pigment enzymes in a near-identical manner.

### The Key Differences:
1. **Light Stability**: Retinol degrades rapidly when exposed to UV light, turning into irritating secondary compounds. Bakuchiol is highly stable in broad daylight and actually acts as a subtle antioxidant.
2. **Dermal Irritation**: Retinol triggers localized cytokine release, generating redness. Bakuchiol has natural anti-inflammatory components, completely bypassing this issue.
3. **Preservation**: Bakuchiol can be safely used during pregnancy, whereas clinical oral/topical Retinoids are strictly forbidden.

At AURA Laboratories, we believe you should not have to choose. By utilizing micro-encapsulated Retinol at a gentle 0.5% combined with 1.5% pure Bakuchiol, we deliver a synergistic matrix that remodels skin at double the speed while keeping the barrier completely calm.`,
    category: "Botanicals",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
    publishedDate: "May 28, 2026",
    author: {
      name: "Dr. Roshan Pradhan, Ph.D.",
      role: "Professor of Biochemistry & Formulator",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150",
    },
  },
  {
    id: "blog-3",
    title: "The Art of Layering: Maximize Bio-Availability of Active Fluids",
    excerpt:
      "The sequence of your serums is more important than their strength. How to structure a highly effective luxury routine.",
    content: `You have acquired premium serums, clinical creams, and organic facial elixirs. Yet, your glow remains plateaued. The culprit is almost always formulation layering. Applying a heavy oil before a lightweight, water-bound peptide serum forms an impenetrable shield, sending your expensive formulation straight down the drain.

Dermatological formulation chemistry operates on clear rules of density, pH, and molecular weight. Here is the definitive guide to layering like a clinical aesthetician.

### Rule 1: Molecular Weight (Thin to Thick)
Always apply water-based, highly fluid items before heavy lipophilic creams. 
- **1. The Essences**: Watery textures that pre-wet the skin channels.
- **2. The Serums**: High-concentration active molecules (like RENEW NIACINAMIDE SERUM).
- **3. The Emulsions**: Silky fluid moisturizers.
- **4. The Creams & Balms**: Heavy lipids that seal water inside.

### Rule 2: Respect pH Differences
Certain ingredients require acidic environments to work. High-grade Vitamin C (L-Ascorbic Acid) functions best at pH 2.5 - 3.0. Niacinamide enjoys a neutral pH of 6.0. If you mix them directly, you neutralize both, occasionally causing extreme flushing.
- Always wait 3-4 minutes between applying high-acid treatments (like Phyto-Active Resurfacing Balm) and neutral serums. This allows the skin physiological pH to reset.

By respecting these spatial transitions, you amplify formulation absorption by up to 300%. Discover your skincare potential today.`,
    category: "Routines",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read",
    publishedDate: "April 15, 2026",
    author: {
      name: "Dr. Sujata Koirala",
      role: "Chief Skin Clinic Dermatologist",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    },
  },
];

export const INITIAL_SKIN_QUESTIONS: SkinQuestion[] = [
  {
    id: "q-skintype",
    text: "How does your skin feel 45 minutes after washing it, if you do not apply any creams or moisturizers?",
    category: "skintype",
    options: [
      {
        value: "dry",
        text: "Tight, flaky, rough or looking visibly dry and dull",
        description:
          "Means your skin produces less natural oils and needs more deep moisture layers.",
      },
      {
        value: "oily",
        text: "Shiny all over, greasy, with visible pores",
        description:
          "Means your skin produces excess natural oil, which can cause shine and clogged pores.",
      },
      {
        value: "combination",
        text: "Greasy on forehead, nose, and chin (T-zone), but dry or tight on cheeks",
        description:
          "Very common! Part of your face is oily, while other areas feel dry.",
      },
      {
        value: "normal",
        text: "Comfortable, soft, smooth, and perfectly balanced",
        description:
          "Your skin produces just the right amount of oil and feels fully hydrated.",
      },
    ],
  },
  {
    id: "q-concern",
    text: "What is your main skincare goal or skin worry today?",
    category: "concern",
    options: [
      {
        value: "aging",
        text: "Smoothing wrinkles, fine lines, or saggy and loose skin",
        description:
          "Helps boost collagen to keep your skin looking young, firm, and bouncy.",
      },
      {
        value: "dullness",
        text: "Fading dark spots, sun marks, or getting rid of tired, dull skin",
        description:
          "Helps lighten stubborn spots to bring back a bright, clear, and glowing skin tone.",
      },
      {
        value: "redness",
        text: "Soothing hot dry spots, redness, itchy patches, or skin irritation",
        description:
          "Helps calm down redness, soothe dry irritation, and protect sensitive barriers.",
      },
      {
        value: "congestion",
        text: "Clearing clogged blackheads, pimple bumps, acne, and oily breakouts",
        description:
          "Helps deep clean pores, treat breakouts, and normalize excess oils.",
      },
    ],
  },
  {
    id: "q-sensitivity",
    text: "How does your skin react to cold wind, solar heat, or new skincare products?",
    category: "sensitivity",
    options: [
      {
        value: "highly",
        text: "It stings, burns, or turns red and itchy almost immediately",
        description:
          "Highly sensitive skin; needs extremely gentle, soothing, scent-free creams.",
      },
      {
        value: "moderately",
        text: "Occasionally gets small red spots or slightly itchy dry patches",
        description:
          "Slightly sensitive; benefits from moisture-locking ceramides and barriers.",
      },
      {
        value: "resilient",
        text: "Stays completely calm and easily handles strong skincare products",
        description:
          "Strong, healthy barriers; can use powerful treatment serums and actives.",
      },
    ],
  },
  {
    id: "q-age",
    text: "Which age range best represents your skin stage?",
    category: "age",
    options: [
      {
        value: "early",
        text: "Under 25: Balancing oils, preventing breakouts, and light protection",
        description: "Keeping the skin clean, fresh, hydrated, and protected.",
      },
      {
        value: "mid",
        text: "25 to 45: Preventing first signs of aging, bright skin tone, and sun defense",
        description:
          "Helping your skin renew itself and fighting damage from sun or daily pollution.",
      },
      {
        value: "mature",
        text: "Over 45: Deep firming, intense hydration, and wrinkle correction",
        description:
          "Restores thin skin, deeply moisturizes, and recovers firmness.",
      },
    ],
  },
  {
    id: "q-lifestyle",
    text: "What environment are you in most of the day?",
    category: "lifestyle",
    options: [
      {
        value: "city",
        text: "City environments: Dusty roads, smoke, traffic commutes, or air-conditioned rooms",
        description:
          "Needs a strong defense layer to keep out dust, smoke, and air toxins.",
      },
      {
        value: "outdoor",
        text: "Outdoors: Active lifestyle with regular sun exposure, wind, and sweating",
        description:
          "Needs high sun protection, repair gels, and cooling care to reverse heat spots.",
      },
      {
        value: "stress",
        text: "High-stress: Working late hours, screen light exposure, and lack of deep sleep",
        description:
          "Needs skin-restarting ingredients to fix stress-related dullness and tired eyes.",
      },
    ],
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Botanical Alchemy",
    subtitle:
      "Extracting pure active Niacinamide and soothing Oat Lipids under medical certification standards.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    category: "Ingredients",
  },
  {
    id: "gal-2",
    title: "The Active Serum Droplet",
    subtitle:
      "Cinematic suspension of our high-purity RENEW NIACINAMIDE SERUM.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200",
    category: "Product",
  },
  {
    id: "gal-3",
    title: "The Clinical Atelier",
    subtitle:
      "Where dermatology experts formulate without speed or toxin pressures.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    category: "Editorial",
  },
  {
    id: "gal-4",
    title: "Pure Hydration Hydro-Slick",
    subtitle:
      "Capturing absolute moisture locking using THE GOOD MOISTURISER and active ceramides.",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200",
    category: "Campaign",
  },
];

export const INITIAL_SUCCESS_STORIES = [
  {
    id: "story-1",
    name: "Deepika Adhikari",
    age: "34",
    concern: "Sun Spots & Skin Laxity",
    duration: "6 Weeks",
    beforeImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400",
    afterImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
    testimony:
      "My hyperpigmentation had lived on my cheeks for years. After using the RENEW NIACINAMIDE SERUM in tandem with our expert moisturizers for just six weeks, the density of the dark spots collapsed in half! My skin feels bouncy, thick, and looks noticeably brighter.",
    routine: [
      "Mild Purifying Cleanser (AM/PM)",
      "RENEW NIACINAMIDE SERUM (AM/PM)",
      "SUNCO 5O SILICONE GEL (AM Daily)",
    ],
  },
  {
    id: "story-2",
    name: "Rohan Rajbhandari",
    age: "29",
    concern: "Adult Acne & Skin Congestion",
    duration: "4 Weeks",
    beforeImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    afterImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    testimony:
      "I suffered from persistent deep hormonal congestion along my jawline. AURA restored my skin barrier. Instead of washing with harsh soaps, I switched to the calming gel cleanser and green clay mask. The texture is completely velvet-smooth now.",
    routine: [
      "Mild Purifying Cleanser (AM/PM)",
      "THE GOOD MOISTURISER (AM/PM)",
      "Fluide Sunscrenn (AM Daily)",
    ],
  },
];

export const INITIAL_CONTACT_SUBMISSIONS: ContactSubmission[] = [
  {
    id: "sub-1",
    name: "Pragya Rajopadhyaya",
    email: "pragya@heritagebeauty.com.np",
    subject: "Request for Private Spa Partnering in Pokhara",
    message:
      "Hello, I represent a series of modern high-end boutique wellness spas and heritage salons in Pokhara and Kathmandu. We are looking to exclusively curate the AURA active range into our physical treatment experiences. Please connect us with your lead brand counter.",
    timestamp: "2026-06-03 14:24:00",
    status: "new",
  },
  {
    id: "sub-2",
    name: "Dr. Anil Banstola",
    email: "anil.banstola@clinicals.np",
    subject: "Inquiry regarding Peptide Formulation Ratios",
    message:
      "Greetings from the Nepal Dermatology Association. I read your paper on Copper Tripeptide stabilization in high altitude environments. I would love to schedule a quick zoom call with Dr. Koirala regarding your encapsulated lipid delivery. Thanks!",
    timestamp: "2026-06-02 09:12:00",
    status: "replied",
  },
];
