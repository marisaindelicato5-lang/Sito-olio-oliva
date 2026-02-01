import type { Product, ProductCategoryInfo } from '../types';

// ============================================
// CATEGORIES
// ============================================

export const productCategories: ProductCategoryInfo[] = [
  {
    id: 'olio-extravergine',
    name: 'Olio Extravergine',
    description: 'Monocultivar Nocellara del Belice IGP',
    icon: '🫒',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function generateProductId(): string {
  return `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function createProductSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ============================================
// DEFAULT PRODUCTS
// ============================================

export const defaultProducts: Product[] = [
  {
    id: 'olio-2l',
    name: 'Olio Extravergine 2L',
    slug: 'olio-extravergine-2l',
    category: 'olio-extravergine',
    shortDescription: 'Formato ideale per provare il nostro olio. Ordine minimo.',
    description: 'Olio Extravergine di Oliva IGP Valle del Belice. Monocultivar Nocellara del Belice, raccolto a mano, molitura a freddo. Latta da 2 litri.',
    price: 30,
    priceNote: '€15/L + spedizione',
    unit: 'latta',
    minOrder: 1,
    image: '/images/products/olio-2l.jpg',
    images: [],
    available: true,
    featured: true,
    tags: ['nocellara', 'igp', '2 litri'],
    createdAt: '2025-01-25',
    updatedAt: '2025-01-25',
  },
  {
    id: 'olio-3l',
    name: 'Olio Extravergine 3L',
    slug: 'olio-extravergine-3l',
    category: 'olio-extravergine',
    shortDescription: 'Formato famiglia. Perfetto per l\'uso quotidiano.',
    description: 'Olio Extravergine di Oliva IGP Valle del Belice. Monocultivar Nocellara del Belice, raccolto a mano, molitura a freddo. Latta da 3 litri.',
    price: 45,
    priceNote: '€15/L + spedizione',
    unit: 'latta',
    minOrder: 1,
    image: '/images/products/olio-3l.jpg',
    images: [],
    available: true,
    featured: true,
    tags: ['nocellara', 'igp', '3 litri'],
    createdAt: '2025-01-25',
    updatedAt: '2025-01-25',
  },
  {
    id: 'olio-5l',
    name: 'Olio Extravergine 5L',
    slug: 'olio-extravergine-5l',
    category: 'olio-extravergine',
    shortDescription: 'Il formato più richiesto. Scorta per tutta la famiglia.',
    description: 'Olio Extravergine di Oliva IGP Valle del Belice. Monocultivar Nocellara del Belice, raccolto a mano, molitura a freddo. Latta da 5 litri.',
    price: 75,
    priceNote: '€15/L + spedizione',
    unit: 'latta',
    minOrder: 1,
    image: '/images/products/olio-5l.jpg',
    images: [],
    available: true,
    featured: true,
    tags: ['nocellara', 'igp', '5 litri', 'bestseller'],
    createdAt: '2025-01-25',
    updatedAt: '2025-01-25',
  },
  {
    id: 'olio-10l',
    name: 'Olio Extravergine 10L',
    slug: 'olio-extravergine-10l',
    category: 'olio-extravergine',
    shortDescription: 'Formato convenienza. Per chi sa cosa vuole.',
    description: 'Olio Extravergine di Oliva IGP Valle del Belice. Monocultivar Nocellara del Belice, raccolto a mano, molitura a freddo. Latta da 10 litri.',
    price: 150,
    priceNote: '€15/L + spedizione',
    unit: 'latta',
    minOrder: 1,
    image: '/images/products/olio-10l.jpg',
    images: [],
    available: true,
    featured: true,
    tags: ['nocellara', 'igp', '10 litri', 'risparmio'],
    createdAt: '2025-01-25',
    updatedAt: '2025-01-25',
  },
];
