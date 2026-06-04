import { Product, Ingredient, Testimonial, Blog, SkinQuestion, ContactSubmission, GalleryItem } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'AURA Luminous Rejuvenating Nectar',
    tagline: 'Deep Cellular Repair & Radiance Amplifying Elixir',
    category: 'Serum',
    price: '$185',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'A transformative, lightweight bio-active elixir formulated with copper peptides, rich marine ferments, and organic cell-regenerating botanicals. Operates at a deepest cellular level to restore elasticity, reverse environmental pigmentation, and create a state of radiant dewiness.',
    benefits: [
      'Reduces appearance of deep wrinkles and fine lines by 37% in 14 days',
      'Promotes rapid collagen synthesis and enhances structural elasticity',
      'Neutralizes free radicals and protects against modern blue-light stress',
      'Delivers an instantaneous, candlelit luminosity from within'
    ],
    ingredients: [
      { name: 'Copper Tripeptide-1', percentage: '2.5%', purpose: 'Catalyzes multi-level cell renewal and repair' },
      { name: 'Luminous Marine Algae Extract', percentage: '5.0%', purpose: 'Inhibits melanin synthesis and brightens tone' },
      { name: 'Botanical Squalane', percentage: '12.0%', purpose: 'Creates a breathable dermal lipid barrier' },
      { name: 'Niacinamide (Vitamin B3)', percentage: '4.0%', purpose: 'Refines texture and minimizes pores' }
    ],
    suitability: ['Dry', 'Combination', 'Sensitive', 'Oily'],
    usage: 'Dispense 3-4 drops into clean palms. Melt slightly by pressing hands together, then breathe in the organic jasmine aromatics before gently pressing into the face and decolletage every morning and evening.'
  },
  {
    id: 'prod-2',
    name: 'Bio-Renewal Micro-Velvet Fluid',
    tagline: 'Ultralight Hydration Multi-Ceramide Encapsulated Emulsion',
    category: 'Moisturizer',
    price: '$140',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800',
    description: 'An exquisitely whipped, silky light cream designed to reinforce the skin barrier with multi-dimensional ceramides, Centella Asiatica, and high-purity clinical Hyaluronic Acid. Perfect for establishing a smooth, poreless canvas with a velvet matte-satin finish.',
    benefits: [
      'Provides micro-encapsulated hydration bound deep in the dermis for 72 hours',
      'Instantly repairs broken surface lipids, reducing sensitivity redness',
      'Refines skin cell texture, delivering a soft-focus poreless appearance',
      'Protects against moisture loss caused by heavy air conditioning and high winds'
    ],
    ingredients: [
      { name: 'Ceramide NP, AP, EOP Suite', percentage: '3.0%', purpose: 'Restores the standard lipid matrix integrity' },
      { name: 'Madecassoside (Centella Asiatica)', percentage: '1.5%', purpose: 'Soothes inflammation and accelerates skin patching' },
      { name: 'High-Molecular Weight Hyperpure Hydrator', percentage: '2.0%', purpose: 'Locks environmental humidity into skin' },
      { name: 'White Truffle Essence', percentage: '1.0%', purpose: 'Supplies essential amino acids and minerals' }
    ],
    suitability: ['Sensitive', 'Dry', 'Combination', 'Oily'],
    usage: 'Smooth a pearl-sized amount onto dry, cleansed skin after serums. Perform upward sweeping motions from the collarbone to the temples to stimulate local lymphatic drainage.'
  },
  {
    id: 'prod-3',
    name: 'Phyto-Active Resurfacing Balm',
    tagline: 'Botanical Clinical Micro-Peel Night Therapy',
    category: 'Treatment',
    price: '$165',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    description: 'A luxurious night therapy balm integrating clean micro-dose Retinol, Bakuchiol (the natural botanical retinoid), and botanical enzymes. Delivers the intensive resurfacing benefits of an aesthetic chemical peel without the associated irritation or skin peeling.',
    benefits: [
      'Accelerates cellular turnover to reveal vibrant, youthful skin overnight',
      'Fades post-inflammatory hyperpigmentation and sun damage spots',
      'Clears deep microscopic congestion, balancing sebum levels',
      'Boosts natural elastin content, firming loose jawline structures'
    ],
    ingredients: [
      { name: 'Encapsulated Pure Retinol', percentage: '0.5%', purpose: 'Synchronizes cell renewal without redness triggers' },
      { name: 'High-Strength Synergistic Bakuchiol', percentage: '1.5%', purpose: 'Naturally doubles the retinoid firming speed' },
      { name: 'Fermented Pumpkin Enzymes', percentage: '2.0%', purpose: 'Gently dissolves dead protein seals on surface' },
      { name: 'Blue Tansy Blue Botanical Oil', percentage: '0.8%', purpose: 'Vanquishes dermal heat and calms reactive skin' }
    ],
    suitability: ['Dry', 'Combination', 'Oily'],
    usage: 'Apply at night only. On clean skin, smooth 2 pumps over dry face, taking care to avoid the immediate eye orbit. Always follow with sunscreen of SPF 30 or higher the next morning.'
  },
  {
    id: 'prod-4',
    name: 'Ceramide Hydro-Fusion Purifying Gel',
    tagline: 'Amino-Acid Botanical Cellular Face Wash',
    category: 'Cleanser',
    price: '$75',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    description: 'A decadent, non-foaming hydrating cleansing gel that floats away heavy environmental particulates, long-wear makeup, and skin impurities. Formulated with ultra-mild coconut amino acids and structured alpine glacial water to respect the natural pH (5.5) of the skin.',
    benefits: [
      'Gently purifies skin without stripping protective natural oils',
      'Maintains perfect physiological surface acid balance',
      'Infuses skin with soothing botanical licorice root skin-toners',
      'Prepared with high alpine glacial minerals for calming reactive skin'
    ],
    ingredients: [
      { name: 'Sodium Lauroyl Methyl Isethionate', percentage: '8.0%', purpose: 'Biocompatible, non-stripping botanical cleansing base' },
      { name: 'Green Tea Catechin Complex', percentage: '3.0%', purpose: 'Provides strong oxidative protection during washing' },
      { name: 'Licorice Root Brightening Extract', percentage: '2.0%', purpose: 'Alleviates uneven tone during massage contact' },
      { name: 'Glycerin and Rose Distillate', percentage: '15.0%', purpose: 'Leaves skin feeling soft, plump, and thoroughly hydrated' }
    ],
    suitability: ['Sensitive', 'Dry', 'Combination', 'Oily'],
    usage: 'Massage 1-2 pumps onto damp skin in circular motions. Add a splash of warm water to transform into an elegant conditioning milk. Rinse thoroughly with lukewarm water.'
  },
  {
    id: 'prod-5',
    name: 'Botanical Clay Deep Purifying Mask',
    tagline: 'Glacial Silt & Rare Green Botanical Mineral Treatment',
    category: 'Mask',
    price: '$110',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&q=80&w=800',
    description: 'A rare, whipped green glacial mud mask extracted from Canadian fjords, fortified with cold-pressed botanical oils of neroli, rosemary, and maritime pine. Extracts skin pollutants, clarifies pore walls, and adds mineral density without hardening or tight cracking.',
    benefits: [
      'Vacuums deep micro-impurities, sebum plugs, and environmental smog',
      'Supplies over 60 active marine mineral trace elements',
      'Tightens dilated pores and refines skin relief topography',
      'Moisturizes while purging toxins, leaving a vibrant, energized pulse'
    ],
    ingredients: [
      { name: 'Marine Glacial Green Silt', percentage: '30.0%', purpose: 'Natural bio-adsorb with high mineral profile' },
      { name: 'Maritime Pine Bud Extract', percentage: '2.0%', purpose: 'Stimulates microcirculation for cellular oxygenation' },
      { name: 'Neroli Blossom Distillate Oil', percentage: '1.2%', purpose: 'Soothes sensory stress and regulates oil glans' },
      { name: 'Cold-Pressed Seabuckthorn Oil', percentage: '3.5%', purpose: 'Supplies rare Omega-7 fatty acids for repair' }
    ],
    suitability: ['Combination', 'Oily', 'Dry'],
    usage: 'Spread an even, generous layer over clean, damp skin. Rest undisturbed for 10-15 minutes. Before the mask turns completely hard, rinse away in warm, streaming water with a dark velvet face towel.'
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
    author: 'Eleanor Vance',
    role: 'Aesthetic Dermatology Journalist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    content: 'After testing hundreds of professional, medical-grade formulas as a beauty journalist, the AURA Luminous Rejuvenating Nectar remains the only serum that gave me actual glass-like clarity. My redness dissolved in three days, and my fine lines look plumped as if from direct clinical micro-fillers.',
    rating: 5,
    featured: true
  },
  {
    id: 'test-2',
    author: 'Dr. Marcus Thorne',
    role: 'Clinical Bio-Chemist & Formulator',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150',
    content: 'AURA formulations are scientifically impeccable. The molecular pairing of encapsulated Retinol and botanical Bakuchiol stabilized by Blue Tansy is a sheer masterstroke of luxury cosmetic chemistry. Highly recommend it to patients seeking profound skin remodeling without cellular stress.',
    rating: 5,
    featured: true
  },
  {
    id: 'test-3',
    author: 'Sienna Sterling',
    role: 'AURA Customer since 2024',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    content: 'Taking the AI Skin Analysis felt like stepping into an private Parisian clinic. The custom routine recommended for my dry skin has completely shifted my texture. At 46, my friends are asking if I had a brow lift! Zero greasy residue, just magnificent botanical glow.',
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
      name: 'Dr. Charlotte Sterling',
      role: 'Chief Skin Dermatologic Scientist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150'
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
      name: 'Marcus Thorne, Ph.D.',
      role: 'Professor of Biochemistry & Formulator',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150'
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
- **2. The Serums**: High-concentration active molecules (AURA Nectar).
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
      name: 'Dr. Charlotte Sterling',
      role: 'Chief Skin Dermatologic Scientist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150'
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
    subtitle: 'Extracting clean luxury actives under medical certification standards.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    category: 'Ingredients'
  },
  {
    id: 'gal-2',
    title: 'Kinetic Golden Drop',
    subtitle: 'Cinematic suspension of our bio-active copper peptide fluid.',
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
    subtitle: 'Capturing state of absolute moisture bounds at deep dermis.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200',
    category: 'Campaign'
  }
];

export const INITIAL_SUCCESS_STORIES = [
  {
    id: 'story-1',
    name: 'Vanessa Mercer',
    age: '38',
    concern: 'Chronic Sun Damage & Laxity',
    duration: '6 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400',
    testimony: 'My hyperpigmentation had lived on my cheeks for eight years. After using the AURA Nectar in tandem with the Phyto-Active night Balm for just six weeks, the density of the spots collapsed. My skin feels bouncy, thick, and looks noticeably brighter.',
    routine: ['Ceramide Cleansing Gel (AM/PM)', 'Luminous Rejuvenating Nectar (AM/PM)', 'Phyto-Active Resurfacing Balm (PM Only)']
  },
  {
    id: 'story-2',
    name: 'Julian Vance',
    age: '29',
    concern: 'Adult Congestion & Skin Inflammation',
    duration: '4 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    testimony: 'I suffered from persistent deep hormonal congestion along my jawline, leaving dark purple scars. AURA restored my skin barrier. Instead of washing with harsh chemical soaps, I switched to their gel wash and green silt mask. The texture is completely smooth now.',
    routine: ['Ceramide Cleansing Gel (AM/PM)', 'Bio-Renewal Micro-Velvet Fluid (AM/PM)', 'Botanical Clay Mask (Twice a week)']
  }
];

export const INITIAL_CONTACT_SUBMISSIONS: ContactSubmission[] = [
  {
    id: 'sub-1',
    name: 'Genevieve Sinclair',
    email: 'genevieve@sinclairmedia.com',
    subject: 'Request for Private Spa Partnering',
    message: 'Hello, I represent a series of modern high-end boutique wellness spas in Saint-Tropez. We are looking to exclusively curate the AURA active range into our physical therapy experiences. Please connect us with your lead brand distributor.',
    timestamp: '2026-06-03 14:24:00',
    status: 'new'
  },
  {
    id: 'sub-2',
    name: 'Adrian Cole',
    email: 'adrian.cole@clinicalreview.org',
    subject: 'Inquiry regarding Peptide Formulation Ratios',
    message: 'Greetings from the Dermatology Chemist Association. I read your paper on Copper Tripeptide stabilization. I would love to schedule a quick zoom call with Dr. Sterling regarding your encapsulated lipid delivery. Thanks!',
    timestamp: '2026-06-02 09:12:00',
    status: 'replied'
  }
];
