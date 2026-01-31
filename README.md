# Piccola Azienda Agricola - Olio Extravergine IGP

Sito web per la vendita di Olio Extravergine di Oliva IGP Nocellara del Belice.

**Stack:** React + TypeScript + Vite + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start

```bash
npm install
npm run dev      # Development server su localhost:5173
npm run build    # Build per produzione
npm run preview  # Preview build locale
```

---

## 📁 Struttura Progetto

```
src/
├── components/
│   ├── layout/          # Header, Footer, WhatsAppFloat
│   ├── admin/           # Componenti pannello admin (non attivo)
│   └── ui/              # Componenti UI riutilizzabili
├── pages/
│   ├── Home.tsx         # Homepage
│   ├── Products.tsx     # Catalogo prodotti
│   ├── B2B.tsx          # Pagina per ristoranti/attività
│   ├── Contact.tsx      # Contatti e form
│   ├── About.tsx        # Chi siamo
│   └── Admin.tsx        # Pannello admin (non attivo)
├── data/
│   ├── site.ts          # Configurazione sito (nome, contatti, nav)
│   └── products.ts      # Prodotti di fallback + helper functions
├── context/             # React Context (Products, Content)
├── hooks/               # Custom hooks (useContent)
└── types/               # TypeScript types

public/
├── content/             # ⭐ CONTENUTI EDITABILI (JSON)
│   ├── site.json        # Hero, features, about, CTA
│   ├── products.json    # Catalogo prodotti
│   ├── contact.json     # Info contatto, orari, indirizzo
│   ├── b2b.json         # Contenuti pagina B2B
│   └── reviews.json     # Recensioni (vuoto per ora)
├── images/
│   ├── logo.jpg         # ⭐ LOGO DA SOSTITUIRE
│   └── products/        # ⭐ FOTO PRODOTTI DA AGGIUNGERE
├── favicon.svg
└── robots.txt
```

---

## ✏️ Come Modificare i Contenuti

### Metodo 1: Modifica diretta JSON (consigliato per ora)

Tutti i contenuti sono in `public/content/*.json`. Modifica e committa.

**Esempio - Cambiare un prezzo:**
```json
// public/content/products.json
{
  "products": [
    {
      "id": "olio-2l",
      "name": "Olio Extravergine 2L",
      "price": 30,  // ← cambia qui
      "priceNote": "€15/L + spedizione"
    }
  ]
}
```

**Esempio - Cambiare il numero WhatsApp:**
```json
// public/content/contact.json
{
  "info": {
    "phone": "+39 391 355 0958",  // ← cambia qui
    "whatsapp": "https://wa.me/393913550958"  // ← e qui
  }
}
```

### Metodo 2: Pannello Admin (NON ATTIVO)

Il sito ha un pannello admin già sviluppato su `/admin` ma **non è collegato a un backend**.

**Stato attuale:**
- Frontend completo in `src/components/admin/`
- Funziona solo in locale (le modifiche non persistono)
- Password placeholder: `olio2025`

**Per attivarlo serve:**

1. **Backend per persistenza** (scegli uno):
   - **Supabase** (consigliato): crea tabelle per products, site_content, contacts
   - **Firebase Firestore**: stessa struttura
   - **API custom**: endpoint REST per CRUD dei JSON

2. **Autenticazione**:
   - Supabase Auth / Firebase Auth / Auth0
   - Oppure semplice: password hash + JWT

3. **Collegamento**:
   - Modificare `src/context/ProductsContext.tsx` per fetch/save da API
   - Modificare `src/hooks/useContent.ts` per stesso pattern
   - I componenti admin già chiamano `addProduct()`, `updateProduct()`, etc.

**Struttura dati da replicare nel DB:**

```
products (tabella/collection)
├── id: string
├── name: string
├── slug: string
├── category: 'olio-extravergine'
├── description: string
├── shortDescription: string
├── price: number | null
├── priceNote: string
├── unit: string
├── minOrder: number
├── image: string (URL)
├── available: boolean
├── featured: boolean
├── tags: string[]
├── createdAt: timestamp
└── updatedAt: timestamp

site_content (documento singolo o key-value)
├── hero: { title, subtitle, description, badge, ctaPrimary, ctaSecondary }
├── features: [{ title, description }]
├── about: { title, description, story }
└── cta: { title, description, buttonWhatsapp, buttonContact }

contact_info (documento singolo)
├── phone, email, whatsapp
├── address: { street, city, cap, zone, note }
└── hours: { store, deliveries }
```

**File da modificare per collegare il backend:**
- `src/context/ProductsContext.tsx` - gestione prodotti
- `src/hooks/useContent.ts` - contenuti sito/contact/b2b
- `src/pages/Admin.tsx` - autenticazione

Il pannello permette di editare: prodotti, info sito, contatti, sezione B2B.

---

## 🖼️ Immagini da Aggiungere

### Logo
Sostituire `/public/images/logo.jpg` con il logo dell'azienda.
- Formato consigliato: JPG o PNG
- Dimensione: 500x500px minimo
- Sfondo trasparente se PNG

### Foto Prodotti
Aggiungere in `/public/images/products/`:
- `olio-2l.jpg`
- `olio-3l.jpg`
- `olio-5l.jpg`
- `olio-10l.jpg`

Dimensione consigliata: 800x600px, formato 4:3

Poi aggiornare i path in `public/content/products.json`:
```json
{
  "image": "/images/products/olio-2l.jpg"
}
```

---

## 🎨 Colori (Tailwind)

Definiti in `tailwind.config.js`:

| Nome | Hex | Uso |
|------|-----|-----|
| `granite-600` | `#5C6B4A` | Verde oliva primario |
| `granite-950` | `#1a1a1a` | Testi scuri |
| `farina-100` | `#FBF8F0` | Sfondo crema |
| `terracotta` | `#C9A227` | Accento dorato |

---

## 📱 Funzionalità

- ✅ Responsive (mobile-first)
- ✅ WhatsApp floating button
- ✅ SEO ottimizzato (meta tags, Open Graph, Schema.org)
- ✅ Animazioni Framer Motion
- ✅ Form contatti (solo frontend, non invia email)
- ⏸️ Pannello admin (frontend pronto, backend da collegare)
- ⏸️ Recensioni Google (struttura pronta, dati vuoti)

---

## 🔧 Configurazione Tecnica

### `src/data/site.ts`
Configurazione base del sito:
```typescript
export const siteConfig = {
  name: 'Piccola Azienda Agricola',
  tagline: 'Olio Extravergine IGP',
  phone: '+39 391 355 0958',
  whatsapp: 'https://wa.me/393913550958',
  instagram: 'https://www.instagram.com/olioolivaextravergine',
  // ...
};
```

### `index.html`
Meta tags SEO, Google Fonts, Schema.org structured data.

### `tailwind.config.js`
Palette colori, font custom, animazioni.

---

## 🚢 Deploy

Il sito è pronto per deploy su:
- **Vercel** (consigliato): push su GitHub e collega
- **Netlify**: idem
- **GitHub Pages**: `npm run build` e pubblica `/dist`

Il file `vercel.json` è già configurato per SPA routing.

---

## 📝 TODO per Completare

- [ ] Aggiungere logo aziendale
- [ ] Aggiungere foto prodotti
- [ ] (Opzionale) Collegare backend per admin panel
- [ ] (Opzionale) Collegare form contatti a servizio email (Formspree, EmailJS)
- [ ] (Opzionale) Aggiungere Google Analytics

---

## 🆘 Problemi Comuni

**Il sito non builda:**
- Controlla che tutti i file `.json` in `public/content/` siano JSON validi
- Usa un validatore JSON online se hai dubbi

**Le immagini non si vedono:**
- Controlla che i path in `products.json` corrispondano ai file in `/public/images/`
- I path devono iniziare con `/` (es: `/images/products/olio-2l.jpg`)

**Errori TypeScript:**
- `npm run build` mostra gli errori
- I tipi sono definiti in `src/types/index.ts`

---

## 📞 Contatti Sviluppo

Progetto sviluppato da EAR Marketing.
Per modifiche strutturali o nuove funzionalità: [contatto]

---

*Ultimo aggiornamento: Gennaio 2025*
