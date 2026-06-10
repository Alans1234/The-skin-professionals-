import { Product, Ingredient, Testimonial, Blog, SkinQuestion, ContactSubmission, GalleryItem } from './types';

import MoistcomImg from './images/Moistcom.jpg';
import SuncoImg from './images/Sunco.jpg';
import FluideImg from './images/fluide.jpg';
import RenewImg from './images/renew.jpg';
import GoodMoistureImg from './images/GoodMoisture.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'MOISTCOM LITE Skin lightning Moisturiser',
    tagline: 'Advanced Cellular Skin Lightening & Lipic Barrier Fortification',
    category: 'Moisturizer',
    price: 'Rs. 800',
    rating: 4.8,
    image: MoistcomImg,
    description: 'An advanced scientific moisturizer combining the power of multi-ceramides with skin-brightening actives. Specially designed to lighten dark spots, block oxidative stressors, and provide rich non-greasy lipid protection ideal for Nepalese weather.',
    benefits: [
      'Acts directly on active melanocytes to fade stubborn dark spots and sallow skin tone',
      'Restores physiological ceramide matrix to shield skin from city pollution and wind',
      'Infuses deep molecular hydration through Aquaxyl and Sodium Hyaluronate',
      'Gently refines cutaneous texture, revealing a luminous velvet skin bloom'
    ],
    ingredients: [
      { name: 'Niacinamide', percentage: '4.0%', purpose: 'Regulates sebum, minimizes pore outline and fades active dark marks' },
      { name: 'Ceramide', percentage: '1.5%', purpose: 'Rebuilds natural skin lipid brick barrier' },
      { name: 'Sodium hyaluronate', percentage: '1.0%', purpose: 'Locks relative atmospheric moisture instantly into dermal layers' },
      { name: 'Aquaxyl', percentage: '1.5%', purpose: 'Optimizes skin hydric flows and boosts deep aquaporin synthesis' },
      { name: 'Alpha arbutin', percentage: '2.0%', purpose: 'Inhibits tyrosinase enzymes to brighten skin tone safely' },
      { name: 'Ethyl ascorbic acid', percentage: '1.5%', purpose: 'Renders high stability vitamin C antioxidant benefit' },
      { name: 'Kojic acid', percentage: '1.0%', purpose: 'Fades stubborn post-inflammatory discoloration' },
      { name: 'Licorice extract & Willow bark extract', percentage: '3.0%', purpose: 'Calms redness, purges micro-congestion and soothes cells' }
    ],
    suitability: ['Dry', 'Combination', 'Sensitive', 'Oily'],
    usage: 'Dispense a portion of cream. Apply over cleanly washed skin every morning and evening. Pat gently in upward circular motions until completely absorbed.'
  },
  {
    id: 'prod-2',
    name: 'SUNCO 5O SILICONE GEL',
    tagline: 'Ultra-Sheer Broad-Spectrum SPF 50 Shield & Non-Comedogenic Matte Finish',
    category: 'Sunscreen',
    price: 'Rs. 1,040',
    rating: 4.9,
    image: SuncoImg,
    description: 'An exceptionally elegant silicone-gel sunscreen offering supreme SPF 50 PA++++ broad-spectrum defense. Transparently shields from intense UV rays while rendering a luxurious pores-blurring satin-matte skin coverage.',
    benefits: [
      'Provides high-level PA++++ block to prevent high-altitude UV burns and cell hyperpigmentation',
      'Micronized formulation guarantees zero chalky white cast or greasy finish',
      'Infuses premium Vitamin C and E antioxidants to prevent daylight-induced collagen damage',
      'Creates a water and sweat resistant breathable veil perfect for everyday active wear'
    ],
    ingredients: [
      { name: 'Micronized Zinc Oxide', percentage: '10.0%', purpose: 'Forms a physical barrier to block and reflect UVA/UVB rays' },
      { name: 'Micronized TiO2', percentage: '4.0%', purpose: 'Delivers broad solar protection with supreme transparency' },
      { name: 'Niacinamide', percentage: '2.0%', purpose: 'Soothes dermal inflammation and strengthens moisture barrier' },
      { name: 'Hyaluronic acid & Aquaxyl', percentage: '1.5%', purpose: 'Fights heat-induced cell dehydration and loss of bounce font' },
      { name: 'D-Panthenol', percentage: '1.0%', purpose: 'Deeply comforts and accelerates tissue recovery' },
      { name: 'Vitamin C & Vitamin E', percentage: '1.2%', purpose: 'Synergistic antioxidant network that counteracts solar damage' },
      { name: 'Octyl Salicylate & Octocrylene', percentage: '5.0%', purpose: 'High-efficacy broad-spectrum UV absorbing shield' }
    ],
    suitability: ['Oily', 'Combination', 'Dry', 'Sensitive'],
    usage: 'Apply a generous coin-sized layer to your face and neck 15 minutes prior to solar exposure. Reapply every 3-4 hours if outdoors under active UV light.'
  },
  {
    id: 'prod-3',
    name: 'Fluide Sunscrenn',
    tagline: 'Aqueous Lightweight Fluid Sun Care with Calming Green Tea Extracts',
    category: 'Sunscreen',
    price: 'Rs. 1,180',
    rating: 4.7,
    image: FluideImg,
    description: 'A beautifully light, quick-absorbing fluid sun formula. Designed to spread seamlessly without any oiliness, bringing calming anti-oxidant tea botanical defenses and complete broad-spectrum solar guard.',
    benefits: [
      'Encapsulated UV-filters block modern radiation and intense solar frequencies',
      'Fluid aqueous cream melts into skin instantly, leaving absolutely zero chalky trace',
      'Camellia Sinensis (Green Tea) counters high-altitude climate oxidative stress',
      'Forms a breathable hydrating shield that feels weightless throughout the day'
    ],
    ingredients: [
      { name: 'Ethylhexyl Butyl Methoxycinnamate', percentage: '7.5%', purpose: 'Organic UVB filter absorbing harmful solar energies' },
      { name: 'Methoxydibenzoylmethane', percentage: '3.0%', purpose: 'Delivers superior deep protection against aging UVA rays' },
      { name: 'Benzophenone-3 & Phospholipids', percentage: '4.0%', purpose: 'Extends protection lifespan with a skin-mimetic delivery' },
      { name: 'Glycerin', percentage: '5.0%', purpose: 'Supplies foundational comfort and deep moisture retention' },
      { name: 'Camellia Sinensis (Green Tea) Leaf Extract', percentage: '2.0%', purpose: 'Botanical defense neutralizing free radicals and environmental smog' },
      { name: 'Allantoin', percentage: '1.0%', purpose: 'Calms cutaneous heat irritation and soothes solar sensitivity' },
      { name: 'Tocopheryl Acetate (Vitamin E)', percentage: '1.0%', purpose: 'Strengthens dermal membrane resistance against aging triggers' }
    ],
    suitability: ['Sensitive', 'Dry', 'Combination', 'Oily'],
    usage: 'Shake very well. Apply generously across your face, neck and ears as the definitive final phase of your morning skincare routine.'
  },
  {
    id: 'prod-4',
    name: 'RENEW NIACINAMIDE SERUM',
    tagline: 'Anti-Congestion, Pore Refinement & Hyperpigmentation Erasing Concentrate',
    category: 'Serum',
    price: 'Rs. 1,560',
    rating: 4.8,
    image: RenewImg,
    description: 'A clinical-strength clarifying concentrate designed with high-purity Niacinamide, active Zinc, and precious whitening roots. Purges congestions, tightens enlarged pores, and dissolves old stubborn acne spots and melasma.',
    benefits: [
      'Controls excessive sebum secretions and suppresses unwanted greasy sheen',
      'Tranexamic and Licorice root acids block melanin signals, evening out skin tone',
      'Zinc PCA cleanses and purges microscopic bacterial congestions with precision',
      'Mulberry and papaya plant enzymes gently peel away dead skin protein cells'
    ],
    ingredients: [
      { name: 'Niacinamide (Vitamin B3)', percentage: '10.0%', purpose: 'Fades persistent dark marks and strengthens local lipid barrier' },
      { name: 'Zinc PCA', percentage: '1.0%', purpose: 'Regulates oil output, calms breakouts and suppresses congestion' },
      { name: 'Vitamin E', percentage: '1.0%', purpose: 'Accelerates cellular renewal and repairs tissue layers' },
      { name: 'Morus Alba (Mulberry) Root Extract', percentage: '2.0%', purpose: 'Natural bio-agent that restricts pigment pathways' },
      { name: 'Licorise root extract & Papaya Fruit Extract', percentage: '3.0%', purpose: 'Soothes inflammation and dissolves dead surface scales' },
      { name: 'Tranexamic Acid', percentage: '2.0%', purpose: 'Prevents vascular-induced skin discoloration and high redness' }
    ],
    suitability: ['Oily', 'Combination', 'Sensitive', 'Dry'],
    usage: 'Warm 3 to 4 drops inside your clean palms. Gently press into your face and neck twice daily, targeting zones of hyperpigmentation or breakouts.'
  },
  {
    id: 'prod-5',
    name: 'THE GOOD MOISTURISER',
    tagline: 'Deep Oatmeal Treatment & Restorative Moisture Lock Barrier Cream',
    category: 'Moisturizer',
    price: 'Rs. 950',
    rating: 4.8,
    image: GoodMoistureImg,
    description: 'A comforting, clinical barrier defense cream rich in calming Oat lipids, pure Shea butter, and skin-identical moisture binders. Immediately alleviates dryness, heals flakiness, and insulates skin against extreme mountain air, cold, and urban dust.',
    benefits: [
      'Oat kernel extracts offer complete relief for extremely irritated, itching, or hyper-sensitive skin',
      'Shea butter and jojoba seed oil infuse rich skin-mimetic essential fatty acids',
      'Wheat proteins and Sodium PCA lock water particles deep into dehydrated cell layers',
      'Forms a breathable, safe protective glove over fragile skin to facilitate tissue recovery'
    ],
    ingredients: [
      { name: 'Gglycerine & Isopropyl Myristate', percentage: '10.0%', purpose: 'Humectants and emollients that restore immediate skin elasticity' },
      { name: 'Olive Oil & Jojoba seed oil', percentage: '4.0%', purpose: 'Plant lipids rich in skin-identical nourishment and healthy gloss' },
      { name: 'Niacinamide (Vitamin B3)', percentage: '2.0%', purpose: 'Diminishes sallow skin tone and builds natural moisture barrier' },
      { name: 'Shea Butter', percentage: '3.0%', purpose: 'Rich therapeutic butter that softens dry peeling scales' },
      { name: 'Avena Sativa (Oat) Kernel bark Extract', percentage: '4.0%', purpose: 'Relieves inflammatory hives, chronic itching and redness' },
      { name: 'Sodium Lacatate & Sodium PCA', percentage: '2.5%', purpose: 'Natural Moisturizing Factors (NMF) restoring hydration balance' },
      { name: 'Wheat Protein & Allantoin', percentage: '1.5%', purpose: 'Fosters skin cell restoration and delivers satin-soft feel' }
    ],
    suitability: ['Dry', 'Sensitive', 'Combination', 'Oily'],
    usage: 'Spread a smooth dollop evenly over dry, clean skin twice daily. Perform gentle sweeping massages focusing on areas prone to windburn or extreme dryness.'
  }
];

export const INITIAL_INGREDIENTS: Ingredient[] = [
  {
    id: 'ing-1',
    name: 'Copper Tripeptide-1',
    source: 'Clinical',
    description: 'A highly advanced, naturally occurring signal peptide complex with high affinity for essential cellular copper. Famously credited with restoring dormant skin stem cell activity, accelerating healing kinetics, and improving structural collagen organization.',
    benefits: [
      'Signals skin fibroblasts to synthesise structural proteins like Collagen I, III and Elastin',
      'Strongly stimulates decorin, a key skin proteoglycan that controls collagen fiber thickness',
      'Facilitates healthy skin structure modeling, aiding in old scar smoothing'
    ],
    scientificName: 'Glycyl-L-Histidil-L-Lysine-Copper(II)',
    derivedFrom: 'Clinical peptide synthesis'
  },
  {
    id: 'ing-2',
    name: 'Centella Asiatica (Madecassoside)',
    source: 'Botanical',
    description: 'A sacred botanical herb revered for centuries in traditional Ayurveda and wellness medicine. Its clinical-grade extract Madecassoside acts as an ultra-potent anti-inflammatory shield that calms modern micro-irritation and repair damage.',
    benefits: [
      'Drastically suppresses biological inflammatory signals, preventing dry irritation',
      'Accelerates tissue healing and supports the internal microvascular structure',
      'Improves dermal lipid hydration, especially in extremely damaged skin cells'
    ],
    scientificName: 'Centella Asiatica Leaf Glucoside',
    derivedFrom: 'High-purity extract of wild Tiger Grass leaves'
  },
  {
    id: 'ing-3',
    name: 'Marine Ferment Cell Fluid',
    source: 'Marine',
    description: 'An elegant bio-ferment harvested from specialized marine organisms thriving under hyper-saline conditions in deep ocean vents. This fluid has evolved to withstand high atmospheric pressures, extreme UV, and severe temperatures, conferring resilient defensive mechanisms to human skin cells.',
    benefits: [
      'Stimulates high-purity mitochondrial respiration, boosting cell oxygenation',
      'Recharges cellular energy reserves (ATP), which declines rapidly with age',
      'Locks deep molecules of hydration within cells, acting as a natural anti-freeze barrier'
    ],
    scientificName: 'Alteromonas Ferment Filtrate',
    derivedFrom: 'Bio-cultivation of deep-sea hydrothermal microorganisms'
  },
  {
    id: 'ing-4',
    name: 'Bakuchiol (Retinol Alternative)',
    source: 'Botanical',
    description: 'The golden botanical extract obtained from the seeds of Psoralea corylifolia. Bakuchiol triggers identical genetic receptors to Retinol, stimulating rapid skin thickening, fading brown spots, and firming elastic coils—without Retinol-associated dry peeling, burning, or high UV vulnerability.',
    benefits: [
      'Acts as a 100% stable natural alternative to vitamin A derivatives',
      'Can be safely applied in broad daylight under standard conditions',
      'Inhibits collagen degradation enzymes while speeding up natural elastin synthesis'
    ],
    scientificName: 'Psoralea Corylifolia Seed Monoterpene',
    derivedFrom: 'Pure extracts of the ancient Babchi botanical seeds'
  },
  {
    id: 'ing-5',
    name: 'White Truffle Cellular Concentrate',
    source: 'Botanical',
    description: 'Harvested from deep beneath northern Italian forests, this rich fungal concentrate contains a brilliant cocktail of amino acids, minerals, and bioactive ceramides. Renowned for its rapid cellular brightening mechanism and luxury anti-aging profiles.',
    benefits: [
      'Gently brightens stubborn patches and brown spots via natural enzyme suppression',
      'Supplies optimal organic minerals like calcium, potassium, and magnesium',
      'Moisturizes dry, flaky surface micro-cells instantly'
    ],
    scientificName: 'Tuber Magnatum Bio-Extract',
    derivedFrom: 'Subdermal biological extraction of Italian Alba White Truffles'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Aayusha Shrestha',
    role: 'Skincare Blogger & Aesthetic Critic, Kathmandu',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=150',
    content: 'After testing so many imported serums under heavy dusty Kathmandu weather, the RENEW NIACINAMIDE SERUM is the only one that gave me actual glowing, glass-like clarity. My skin sensitivity dissolved in three days, and dry spots look incredibly plumped!',
    rating: 5,
    featured: true
  },
  {
    id: 'test-2',
    author: 'Dr. Sandeep Karki',
    role: 'Consultant Clinical Dermatologist, Patan',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150',
    content: 'The science behind are AURA formulations is flawless. Their combination of copper peptides, active ceramides, and pure Bakuchiol operates exactly what skin cells require to fight high Altitudes UV stress and pollution active here in Nepal.',
    rating: 5,
    featured: true
  },
  {
    id: 'test-3',
    author: 'Pooja Thapa',
    role: 'AURA Verified Customer, Pokhara',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150',
    content: 'Taking their online Skin Test was so quick! The custom routine recommendation solved my dry cheeks and T-zone oiliness completely. Living in Pokhara, my friends now constantly ask me about my hidden glowing secret. Love it!',
    rating: 5,
    featured: true
  }
];

export const INITIAL_BLOGS: Blog[] = [
  {
    id: 'blog-1',
    title: 'The Modern Science of the Acid Mantle: Protecting Your Skin Barrier',
    excerpt: 'Dermatologists explain why the common pursuit of squeaky-clean skin is destroying our first line of cellular defense.',
    content: `For decades, the beauty index championed a "squeaky-clean" skin feel as the golden benchmark of clean skin. Today, clinical dermatology reveals a far more complex reality. That tight, polished squeak is actually the sound of a completely compromised skin barrier.

At the very surface of your epidermis rests a microscopic, highly delicate film known as the acid mantle. Composed of natural botanical lipids, sweat, and friendly skin microflora, this mantle functions at a physiological pH of approximately 5.5. Its duty is absolute: lock essential moisture deep in the dermis while preventing pathogenic bacteria, smoke soot, and city pollutants from entering your bloodstream.

When you use aggressive foaming surfactants (like Sodium Lauryl Sulfate) or high-frequency physical scrubs, you wash away this vital defensive shield. The consequences are immediate:
1. **Transepidermal Water Loss (TEWL)**: Moisture evaporates rapidly from your skin, leading to chronic dry patches.
2. **Rebound Seborrhea**: In panic, your deep sebaceous glands overproduce thick, waxy sebum, clogging pores and causing adult acne.
3. **Chronic Inflammaging**: Pathogens trigger micro-cracks, generating localized histamine reactions that break down collagen coils.

At AURA, we formulate with structured coconut amino acids and rare marine glacial meltwater that closely mimic the natural cellular structure, preserving your acid mantle during every cleanse. Remember: healthy skincare is never about stripping; it is about gentle biological reinforcement.`,
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    publishedDate: 'June 1, 2026',
    author: {
      name: 'Dr. Sujata Koirala',
      role: 'Chief Skin Clinic Dermatologist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: 'blog-2',
    title: 'Phyto-Retinols vs. Clinical Retinoids: A Balanced Scientific Comparison',
    excerpt: 'Unveiling the molecular truth behind Bakuchiol and Retinol. Is a botanical alternative truly as effective as the Gold Standard?',
    content: `In the world of anti-aging dermatology, Vitamin A derivatives (Retinoids) remain undisputed. They speed up natural cell renewal, dissolve micro-congestion, and increase skin thickness. Yet, for millions with sensitised skin barriers, Retinol application is a painful journey marked by dry peeling, sunburns, and painful dermatitis.

Enter **Bakuchiol**, a high-purity phytochemical derived from the wild babchi botanical seeds. Marketing often claims it is a "gentle Retinol substitute." But what is the actual biochemical reality?

### The Molecular Path
Interestingly, Bakuchiol does not share structural or chemical resemblance with Retinoids. However, genomic mapping demonstrates that Bakuchiol interacts with the exact same cellular receptors in the dermis as Retinol. It tricks the fibroblasts into synthesizing Type I and Type III collagen, increases gene expression of vascular growth factors, and regulates pigment enzymes in a near-identical manner.

### The Key Differences:
1. **Light Stability**: Retinol degrades rapidly when exposed to UV light, turning into irritating secondary compounds. Bakuchiol is highly stable in broad daylight and actually acts as a subtle antioxidant.
2. **Dermal Irritation**: Retinol triggers localized cytokine release, generating redness. Bakuchiol has natural anti-inflammatory components, completely bypassing this issue.
3. **Preservation**: Bakuchiol can be safely used during pregnancy, whereas clinical oral/topical Retinoids are strictly forbidden.

At AURA Laboratories, we believe you should not have to choose. By utilizing micro-encapsulated Retinol at a gentle 0.5% combined with 1.5% pure Bakuchiol, we deliver a synergistic matrix that remodels skin at double the speed while keeping the barrier completely calm.`,
    category: 'Botanicals',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min read',
    publishedDate: 'May 28, 2026',
    author: {
      name: 'Dr. Roshan Pradhan, Ph.D.',
      role: 'Professor of Biochemistry & Formulator',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150'
    }
  },
  {
    id: 'blog-3',
    title: 'The Art of Layering: Maximize Bio-Availability of Active Fluids',
    excerpt: 'The sequence of your serums is more important than their strength. How to structure a highly effective luxury routine.',
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
    category: 'Routines',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    publishedDate: 'April 15, 2026',
    author: {
      name: 'Dr. Sujata Koirala',
      role: 'Chief Skin Clinic Dermatologist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    }
  }
];

export const INITIAL_SKIN_QUESTIONS: SkinQuestion[] = [
  {
    id: 'q-skintype',
    text: 'How does your skin feel 45 minutes after gentle washing, if you apply no products?',
    category: 'skintype',
    options: [
      { value: 'dry', text: 'Tight, flaky, or looking visibly dull', description: 'Indicates thin sebum production or compromised epidermal lipid barrier.' },
      { value: 'oily', text: 'Shiny all over, with highly visible pores', description: 'Indicates active over-secretion of waxy sebaceous lipids.' },
      { value: 'combination', text: 'Greasy in T-zone (nose & forehead), but tight on cheeks', description: 'Standard mixed distribution of cutaneous androgen receptors.' },
      { value: 'normal', text: 'Comfortable, velvet-smooth, and balanced skin texture', description: 'An optimal state of lipid production and dermal hydration.' }
    ]
  },
  {
    id: 'q-concern',
    text: 'What is your primary cutaneous goal or aesthetic concern today?',
    category: 'concern',
    options: [
      { value: 'aging', text: 'Smoothing fine lines, resolving loss of cheek volume, or skin laxity', description: 'Focused on structural collagen support and elastin protection.' },
      { value: 'dullness', text: 'Fading dark spots, resolving sun damage, or persistent gray sallow tone', description: 'Focused on melanocyte regulation and deep cell exfoliation.' },
      { value: 'redness', text: 'Soothe hot dry spots, irritation, or persistent environmental rosacea', description: 'Focused on blood capillary calming and natural flora restoration.' },
      { value: 'congestion', text: 'Clearing clogged blackheads, white bumps, and balancing oil levels', description: 'Focused on lipid dissolved salicylic actions and pore purging.' }
    ]
  },
  {
    id: 'q-sensitivity',
    text: 'How does your skin react when exposed to wind, heat, or new cosmetic active formulas?',
    category: 'sensitivity',
    options: [
      { value: 'highly', text: 'Swells, tingles, turns hot or red immediately', description: 'Highly reactive nervous triggers; requires gentle hypoallergenic nourishment.' },
      { value: 'moderately', text: 'Occasionally reacts with small dry red patches', description: 'Partially vulnerable; requires ceramide moisture locks.' },
      { value: 'resilient', text: 'Stays stable and accepts active compounds without any issues', description: 'Sturdy skin matrix; can accept high-strength expert formulations.' }
    ]
  },
  {
    id: 'q-age',
    text: 'Which biological stage best represents your skin journey?',
    category: 'age',
    options: [
      { value: 'early', text: 'Under 25: Growth, prevention, and sebum management', description: 'Maintaining structural integrity and defense.' },
      { value: 'mid', text: '25 to 45: Early preventative, cellular renewal, and oxidative stress shield', description: 'Tackling early collagen slowing and lifestyle environmental oxidation.' },
      { value: 'mature', text: 'Over 45: deep structural restoration, lipid replenishment, and cellular renewal', description: 'Addressing lipid decline, dermal density change, and intense restoration.' }
    ]
  },
  {
    id: 'q-lifestyle',
    text: 'What environmental factor fits your daily routine closest?',
    category: 'lifestyle',
    options: [
      { value: 'city', text: 'Urban center: Commutes, air pollution, and workspace AC grids', description: 'Requires heavy defense skin shields and anti-soot barrier locks.' },
      { value: 'outdoor', text: 'Sun-drenched: Active outdoor lifestyle and direct sun contact', description: 'Requires thermal calming lipids and deep peptide defense.' },
      { value: 'stress', text: 'High-Pace: screen blue-light, high strain, and variable sleep cycles', description: 'Requires micro-circulatory stimulants and calming botanical oils.' }
    ]
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Botanical Alchemy',
    subtitle: 'Extracting pure active Niacinamide and soothing Oat Lipids under medical certification standards.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    category: 'Ingredients'
  },
  {
    id: 'gal-2',
    title: 'The Active Serum Droplet',
    subtitle: 'Cinematic suspension of our high-purity RENEW NIACINAMIDE SERUM.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200',
    category: 'Product'
  },
  {
    id: 'gal-3',
    title: 'The Clinical Atelier',
    subtitle: 'Where dermatology experts formulate without speed or toxin pressures.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    category: 'Editorial'
  },
  {
    id: 'gal-4',
    title: 'Pure Hydration Hydro-Slick',
    subtitle: 'Capturing absolute moisture locking using THE GOOD MOISTURISER and active ceramides.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200',
    category: 'Campaign'
  }
];

export const INITIAL_SUCCESS_STORIES = [
  {
    id: 'story-1',
    name: 'Deepika Adhikari',
    age: '34',
    concern: 'Sun Spots & Skin Laxity',
    duration: '6 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400',
    testimony: 'My hyperpigmentation had lived on my cheeks for years. After using the RENEW NIACINAMIDE SERUM in tandem with our expert moisturizers for just six weeks, the density of the dark spots collapsed in half! My skin feels bouncy, thick, and looks noticeably brighter.',
    routine: ['Mild Purifying Cleanser (AM/PM)', 'RENEW NIACINAMIDE SERUM (AM/PM)', 'SUNCO 5O SILICONE GEL (AM Daily)']
  },
  {
    id: 'story-2',
    name: 'Rohan Rajbhandari',
    age: '29',
    concern: 'Adult Acne & Skin Congestion',
    duration: '4 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    testimony: 'I suffered from persistent deep hormonal congestion along my jawline. AURA restored my skin barrier. Instead of washing with harsh soaps, I switched to the calming gel cleanser and green clay mask. The texture is completely velvet-smooth now.',
    routine: ['Mild Purifying Cleanser (AM/PM)', 'THE GOOD MOISTURISER (AM/PM)', 'Fluide Sunscrenn (AM Daily)']
  }
];

export const INITIAL_CONTACT_SUBMISSIONS: ContactSubmission[] = [
  {
    id: 'sub-1',
    name: 'Pragya Rajopadhyaya',
    email: 'pragya@heritagebeauty.com.np',
    subject: 'Request for Private Spa Partnering in Pokhara',
    message: 'Hello, I represent a series of modern high-end boutique wellness spas and heritage salons in Pokhara and Kathmandu. We are looking to exclusively curate the AURA active range into our physical treatment experiences. Please connect us with your lead brand counter.',
    timestamp: '2026-06-03 14:24:00',
    status: 'new'
  },
  {
    id: 'sub-2',
    name: 'Dr. Anil Banstola',
    email: 'anil.banstola@clinicals.np',
    subject: 'Inquiry regarding Peptide Formulation Ratios',
    message: 'Greetings from the Nepal Dermatology Association. I read your paper on Copper Tripeptide stabilization in high altitude environments. I would love to schedule a quick zoom call with Dr. Koirala regarding your encapsulated lipid delivery. Thanks!',
    timestamp: '2026-06-02 09:12:00',
    status: 'replied'
  }
];
