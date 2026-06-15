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
    name: "MOISTCOM LITE",
    tagline:
      "Lightweight skin lightening moisturiser for pigmentation & barrier repair",
    category: "Moisturizer",
    price: "Rs. 800",
    rating: 4.8,
    image: MoistcomImg,
    description:
      "Moistcom Lite is a lightweight skin lightening moisturiser, suitable for normal, oily and combination skin types. It is very effective for conditions like pigmentation, melasma, and acne scars. It helps reduce pigmentation and brighten skin while repairing the skin barrier with components like ceramide and licorice extract.",
    benefits: [],
    ingredients: [
      {
        name: "Niacinamide",
        purpose: "Regulates sebum, minimizes pores, fades dark marks",
      },
      { name: "Ceramide", purpose: "Rebuilds natural skin lipid barrier" },
      {
        name: "Sodium hyaluronate",
        purpose: "Locks moisture into dermal layers",
      },
      {
        name: "Aquaxyl",
        purpose: "Optimizes skin hydration and boosts aquaporin synthesis",
      },
      {
        name: "Alpha arbutin",
        purpose: "Inhibits tyrosinase to brighten skin tone safely",
      },
      {
        name: "Ethyl ascorbic acid",
        purpose: "Provides stable vitamin C antioxidant benefit",
      },
      {
        name: "Kojic acid",
        purpose: "Fades stubborn post-inflammatory discoloration",
      },
      {
        name: "Licorice extract & Willow bark extract",
        purpose: "Calms redness, purges congestion, soothes cells",
      },
    ],
    suitability: ["Normal", "Oily", "Combination"],
    usage:
      "Apply a generous amount of Moistcom Lite on damp face after cleansing with a gentle cleanser, twice a day.",
  },
  {
    id: "prod-2",
    name: "SUNCO 5O ",
    tagline: "Mineral-based matte finish sunscreen with SPF 50 and PA+++",
    category: "Sunscreen",
    price: "Rs. 1,040",
    rating: 4.9,
    image: SuncoImg,
    description:
      "Sunco is a mineral-based matte finish gel sunscreen with Zinc Oxide and Titanium Dioxide. It protects the skin from harmful UV rays with SPF 50 and PA+++, shielding against both UVA and UVB. Suitable for all skin types, especially oily skin and melasma. Safe for use during pregnancy and pre/post-procedure treatments.",
    benefits: [],
    ingredients: [
      {
        name: "Micronized Zinc Oxide",
        purpose: "Forms a physical barrier to block UVA/UVB rays",
      },
      {
        name: "Micronized TiO2",
        purpose: "Provides broad solar protection with transparency",
      },
      {
        name: "Niacinamide",
        purpose: "Soothes inflammation and strengthens moisture barrier",
      },
      {
        name: "Hyaluronic acid & Aquaxyl",
        purpose: "Prevents heat-induced dehydration",
      },
      {
        name: "D-Panthenol",
        purpose: "Comforts and accelerates tissue recovery",
      },
      {
        name: "Vitamin C & Vitamin E",
        purpose: "Antioxidant network that counteracts solar damage",
      },
      {
        name: "Octyl Salicylate & Octocrylene",
        purpose: "High-efficacy broad-spectrum UV absorption",
      },
    ],
    suitability: ["Normal", "Oily", "Combination", "Dry"],
    usage:
      "Apply a generous amount using the two-finger method. Reapply every 2 hours for best protection. Apply at least 15 minutes before sun exposure.",
  },
  {
    id: "prod-3",
    name: "Fluide",
    tagline: "Gel-based chemical sunscreen with zero white cast, SPF 50+ PA+++",
    category: "Sunscreen",
    price: "Rs. 1,180",
    rating: 4.7,
    image: FluideImg,
    description:
      "Fluide is a gel-based chemical sunscreen with zero white cast. Formulated with powerful yet gentle, non-comedogenic ingredients, it is best for oily and acne-prone skin. Blends well and feels light while providing absolute protection from UVA and UVB with SPF 50+ and PA+++ rating.",
    benefits: [],
    ingredients: [
      {
        name: "Ethylhexyl Butyl Methoxycinnamate",
        purpose: "Organic UVB filter absorbing harmful solar energies",
      },
      {
        name: "Methoxydibenzoylmethane",
        purpose: "Deep protection against aging UVA rays",
      },
      {
        name: "Benzophenone-3 & Phospholipids",
        purpose: "Extends protection lifespan with skin-mimetic delivery",
      },
      {
        name: "Glycerin",
        purpose: "Foundational comfort and deep moisture retention",
      },
      {
        name: "Camellia Sinensis (Green Tea) Leaf Extract",
        purpose: "Neutralizes free radicals and environmental smog",
      },
      {
        name: "Allantoin",
        purpose: "Calms heat irritation and soothes solar sensitivity",
      },
      {
        name: "Tocopheryl Acetate (Vitamin E)",
        purpose: "Strengthens dermal membrane resistance",
      },
    ],
    suitability: ["Oily", "Acne Prone", "Normal"],
    usage:
      "Shake well. Apply generous amount using the two-finger method. Reapply every 2 hours. Apply at least 15 minutes before sun exposure.",
  },
  {
    id: "prod-4",
    name: "RENEW ",
    tagline: "All‑rounder brightening, hydrating, and repairing serum",
    category: "Serum",
    price: "Rs. 1,560",
    rating: 4.8,
    image: RenewImg,
    description:
      "Renew Niacinamide serum is an all-rounder composition with Niacinamide, Zinc PCA, and Tranexamic acid, plus other components. It is your everyday serum that brightens, hydrates, and repairs your skin. Ideal for skin with melasma, acne scars, and pigmentation.",
    benefits: [],
    ingredients: [
      {
        name: "Niacinamide (Vitamin B3)",
        purpose: "Fades dark marks and strengthens lipid barrier",
      },
      {
        name: "Zinc PCA",
        purpose: "Regulates oil, calms breakouts, suppresses congestion",
      },
      {
        name: "Vitamin E",
        purpose: "Accelerates cellular renewal and repairs tissue",
      },
      {
        name: "Morus Alba (Mulberry) Root Extract",
        purpose: "Natural agent that restricts pigment pathways",
      },
      {
        name: "Licorise root extract & Papaya Fruit Extract",
        purpose: "Soothes inflammation and dissolves dead surface cells",
      },
      {
        name: "Tranexamic Acid",
        purpose: "Prevents vascular-induced discoloration and redness",
      },
    ],
    suitability: ["All skin types"],
    usage:
      "Put 3–4 drops of Renew Niacinamide serum on your face after cleansing. Use serum after face wash and before moisturiser. Let it dry before applying moisturiser.",
  },
  {
    id: "prod-5",
    name: "GOOD MOISTURISER",
    tagline:
      "Deeply nourishing medical‑grade moisturiser for dehydrated, dull, and compromised skin",
    category: "Moisturizer",
    price: "Rs. 950",
    rating: 4.8,
    image: GoodMoistureImg,
    description:
      "A deeply nourishing, medical-grade moisturizer engineered to rescue dehydrated, dull, and compromised skin. Formulated with Natural Moisturizing Factors (NMFs), bio-mimetic botanical lipids, and clinical-grade Niacinamide. This rich cream actively repairs the skin's lipid barrier while locking in long-lasting hydration for a smooth, radiant, and resilient complexion.",
    benefits: [],
    ingredients: [
      {
        name: "Glycerine & Isopropyl Myristate",
        purpose: "Humectants and emollients that restore skin elasticity",
      },
      {
        name: "Olive Oil & Jojoba seed oil",
        purpose:
          "Plant lipids rich in skin-identical nourishment and healthy gloss",
      },
      {
        name: "Niacinamide (Vitamin B3)",
        purpose: "Diminishes sallow tone and builds natural moisture barrier",
      },
      {
        name: "Shea Butter",
        purpose: "Therapeutic butter that softens dry, peeling scales",
      },
      {
        name: "Avena Sativa (Oat) Kernel bark Extract",
        purpose: "Relieves inflammatory hives, itching, and redness",
      },
      {
        name: "Sodium Lactate & Sodium PCA",
        purpose:
          "Natural Moisturizing Factors (NMF) restoring hydration balance",
      },
      {
        name: "Wheat Protein & Allantoin",
        purpose: "Fosters skin cell restoration and delivers a satin-soft feel",
      },
    ],
    suitability: ["Dry", "Normal"],
    usage:
      "Apply a generous amount of The Good Moisturiser on damp face after cleaning with a gentle cleanser, twice a day.",
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
    author: "Dr. Sareesha Shrestha",
    role: "Miss Nepal Earth 2022",
    avatar: "",
    content:
      "I trust Moistcom Lite and Sunco 50 for my daily skincare. They keep my skin bright, protected, and healthy — even under the lights and long outdoor schedules.",
    rating: 5,
    featured: true,
  },
  {
    id: "test-2",
    author: "Anil Shah",
    role: "National Men's Cricketer, Nepal",
    avatar: "",
    content:
      "As a cricketer, I'm out in the sun for hours. Moistcom Lite keeps my skin hydrated and Sunco 50 gives me the protection I need without any greasy feel. Highly recommend.",
    rating: 5,
    featured: true,
  },
  {
    id: "test-3",
    author: "Sujan Chapagain",
    role: "Singer",
    avatar: "",
    content:
      "Sunco 50 is my go-to sunscreen. It's light, non-sticky, and works perfectly under stage lights and outdoor shoots. Finally a sunscreen that feels like nothing on the skin.",
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
