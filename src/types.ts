export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Cleanser' | 'Serum' | 'Moisturizer' | 'Treatment' | 'Mask';
  price: string; // Luxury price for display
  rating: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: { name: string; percentage?: string; purpose: string }[];
  suitability: string[]; // ['Oily', 'Dry', 'Sensitive', 'Combination', 'All']
  usage: string;
}

export interface Ingredient {
  id: string;
  name: string;
  source: 'Botanical' | 'Clinical' | 'Marine';
  description: string;
  benefits: string[];
  scientificName: string;
  derivedFrom: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  featured: boolean;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Dermatology' | 'Botanicals' | 'Routines' | 'Science';
  image: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface SkinQuestion {
  id: string;
  text: string;
  category: 'skintype' | 'concern' | 'age' | 'sensitivity' | 'lifestyle';
  options: {
    value: string;
    text: string;
    description?: string;
  }[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'replied' | 'archived';
}

export interface SkinAnalysisRecord {
  id: string;
  customerName: string;
  customerEmail: string;
  answers: Record<string, string>; // questionId -> optionValue
  resultType: string; // e.g. "Chronically Dry & Dehydrated"
  recommendedProducts: string[]; // productIds
  timestamp: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'Campaign' | 'Product' | 'Ingredients' | 'Editorial';
}
