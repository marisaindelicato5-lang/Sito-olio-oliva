import type { NavItem, BusinessType } from '../types';

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: 'Oro verde di Sicilia',
  tagline: 'Olio Extravergine di Sicilia',
  description: 'Olio Extravergine di Oliva IGP dalla Valle del Belice. Monocultivar Nocellara, raccolto a mano, molitura a freddo. Spedizioni in tutta Italia.',
  foundingYear: null,
  
  // Contact
  phone: '+39 391 355 0958',
  phoneClean: '3913550958',
  email: 'olioextraverginedioliva@gmail.com',
  whatsapp: 'https://wa.me/393913550958',
  whatsappMessage: 'Ciao, vorrei ordinare il vostro olio.',
  
  // Address
  address: {
    street: '',
    city: 'Castelvetrano',
    province: 'TP',
    cap: '',
    zone: 'Valle del Belice',
    country: 'Italia',
    full: 'Castelvetrano, Valle del Belice, Sicilia',
    coordinates: {
      lat: 37.6789,
      lng: 12.7917,
    },
  },
  
  // Opening Hours
  hours: {
    weekdays: 'Ordini via WhatsApp',
    saturday: 'Ordini via WhatsApp',
    sunday: 'Ordini via WhatsApp',
    deliveries: 'Spedizioni in tutta Italia',
  },
  
  // Social
  social: {
    instagram: 'https://www.instagram.com/olioolivaextravergine',
    facebook: '',
    googleMaps: '',
  },
  
  // URLs
  url: 'https://www.oroverdediSicilia.it',
  
  // SEO
  seo: {
    titleTemplate: '%s | Oro verde di Sicilia',
    defaultTitle: 'Oro verde di Sicilia | Olio Extravergine IGP Sicilia',
    defaultDescription: 'Olio Extravergine di Oliva IGP dalla Valle del Belice. Monocultivar Nocellara, raccolto a mano, molitura a freddo. Spedizioni in tutta Italia.',
    defaultImage: '/og-image.jpg',
  },
};

// ============================================
// NAVIGATION
// ============================================

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'L\'Olio', href: '/prodotti' },
  { label: 'Per Attività', href: '/ristoranti' },
  { label: 'Contatti', href: '/contatti' },
];

export const footerNavigation = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'L\'Olio', href: '/prodotti' },
    { label: 'Per Attività', href: '/ristoranti' },
    { label: 'Contatti', href: '/contatti' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie' },
  ],
};

// ============================================
// BUSINESS TYPES
// ============================================

export const businessTypes: { value: BusinessType; label: string }[] = [
  { value: 'ristorante', label: 'Ristorante' },
  { value: 'bar', label: 'Bar / Enoteca' },
  { value: 'hotel', label: 'Hotel / Agriturismo' },
  { value: 'mensa', label: 'Mensa / Catering' },
  { value: 'catering', label: 'Negozio Alimentari' },
  { value: 'altro', label: 'Altro' },
];

// ============================================
// CONTENT
// ============================================

export const heroContent = {
  title: 'Oro verde di Sicilia',
  subtitle: 'Olio Extravergine di Sicilia',
  description: 'Da Castelvetrano, nel cuore della Valle del Belice, coltiviamo Nocellara del Belice da due generazioni. Raccolta a mano, molitura a freddo, dal nostro uliveto alla tua tavola.',
  cta: {
    primary: { label: 'Scopri l\'Olio', href: '/prodotti' },
    secondary: { label: 'Ordina su WhatsApp', href: 'https://wa.me/393913550958' },
  },
};

export const aboutContent = {
  title: 'Chi Siamo',
  subtitle: 'Una famiglia, un uliveto, un olio.',
  intro: 'Da Castelvetrano, dove la Nocellara è di casa.',
  story: [
    'Siamo una piccola azienda agricola familiare nel cuore della Valle del Belice, a Castelvetrano, provincia di Trapani. Qui la Nocellara del Belice non è solo un\'oliva: è identità, tradizione, orgoglio.',
    'Da due generazioni coltiviamo i nostri ulivi con rispetto per la terra e per il tempo. Raccogliamo a mano, imbottigliamo solo quello che produciamo noi.',
    'Non siamo un\'industria. Siamo una famiglia che fa olio come si faceva una volta, e lo spedisce direttamente a casa tua. Senza intermediari, senza compromessi.',
  ],
  values: [
    {
      title: 'Territorio',
      description: 'Valle del Belice, terra di Nocellara. Clima, sole e tradizione unici al mondo.',
      icon: '🫒',
    },
    {
      title: 'Artigianalità',
      description: 'Raccolta a mano, molitura a freddo. Facciamo tutto noi, come una volta.',
      icon: '🌿',
    },
    {
      title: 'Autenticità',
      description: 'Niente intermediari. Dal nostro uliveto alla tua tavola, direttamente.',
      icon: '📦',
    },
  ],
};

export const b2bContent = {
  title: 'Per Ristoranti e Attività',
  subtitle: 'Olio autentico per la tua cucina',
  intro: 'Se sei un ristorante, un negozio di alimentari o un\'attività che cerca olio di qualità, contattaci.',
  benefits: [
    {
      title: 'Qualità Garantita',
      3description: 'Lo stesso olio che vendiamo ai privati. Monocultivar Nocellara IGP.',
      icon: '🫒',
    },
    {
      title: 'Prezzi Dedicati',
      description: 'Listino riservato per ordini ricorrenti e grandi quantità.',
      icon: '💰',
    },
    {
      title: 'Spedizioni Dirette',
      description: 'Dal nostro uliveto al tuo locale, senza intermediari.',
      icon: '📦',
    },
    {
      title: 'Fornitura Costante',
      description: 'Olio sempre disponibile per le tue esigenze.',
      icon: '🔄',
    },
  ],
  cta: 'Richiedi Preventivo',
  testimonials: [],
};

export const contactContent = {
  title: 'Contattaci',
  subtitle: 'Ordinare è semplice',
  intro: 'Scrivici su WhatsApp per ordinare. Spediamo in tutta Italia con Poste Italiane. Ordine minimo 2 litri.',
  formTitle: 'Inviaci un Messaggio',
  whatsappNote: 'Il modo più veloce per ordinare è scriverci su WhatsApp.',
};
