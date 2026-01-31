import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Tag, Package, Droplets } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useProductsContent } from '../hooks/useContent';
import { siteConfig } from '../data/site';
import type { Product, ProductCategoryInfo } from '../types';

const iconMap: Record<string, React.ElementType> = {
  'olio-extravergine': Droplets,
};

export function ProductsPage() {
  const { data: productsData, loading } = useProductsContent();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = productsData?.products || [];
  const categories = productsData?.categories || [];

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory && product.available;
    });
  }, [products, searchQuery, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-farina-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-granite-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-granite-600">Caricamento...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="L'Olio"
        description="Olio Extravergine di Oliva IGP Nocellara del Belice. Monocultivar, raccolto a mano, molitura a freddo. Formati da 2L a 10L."
      />

      <main className="min-h-screen bg-farina-100">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-display-lg text-granite-950 mb-6">
                L'Olio
              </h1>
              <p className="text-xl text-granite-600 leading-relaxed">
                Olio Extravergine di Oliva IGP Nocellara del Belice. 
                Raccolto a mano, molitura a freddo, dal nostro uliveto alla tua tavola.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b border-granite-200 sticky top-20 z-30">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-granite-400" />
                <input
                  type="text"
                  placeholder="Cerca..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-farina-100 border border-granite-200 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-granite-600/20 focus:border-granite-600
                           text-granite-700 placeholder:text-granite-400"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <Filter className="w-5 h-5 text-granite-400 flex-shrink-0" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                    ${!selectedCategory 
                      ? 'bg-granite-600 text-white' 
                      : 'bg-farina-100 text-granite-600 hover:bg-farina-200'
                    }`}
                >
                  Tutti
                </button>
                {categories.map((cat: ProductCategoryInfo) => {
                  const Icon = iconMap[cat.id] || Package;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                        flex items-center gap-2
                        ${selectedCategory === cat.id 
                          ? 'bg-granite-600 text-white' 
                          : 'bg-farina-100 text-granite-600 hover:bg-farina-200'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container-custom">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-granite-300 mx-auto mb-4" />
                <h3 className="font-display text-xl text-granite-600 mb-2">
                  Nessun prodotto trovato
                </h3>
                <p className="text-granite-500">
                  Prova a modificare i filtri di ricerca
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product: Product, index: number) => (
                  <motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-farina-200">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Droplets className="w-16 h-16 text-granite-300" />
                        </div>
                      )}
                      {product.featured && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-granite-600 text-white text-xs font-medium rounded-full">
                          In evidenza
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-xl font-semibold text-granite-950 group-hover:text-granite-600 transition-colors">
                          {product.name}
                        </h3>
                        {product.price && (
                          <span className="text-lg font-semibold text-granite-600">
                            €{product.price}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-granite-600 text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {product.priceNote && (
                        <p className="text-xs text-granite-500 mb-4">
                          {product.priceNote}
                        </p>
                      )}

                      {/* Tags */}
                      {product.tags && product.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {product.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-farina-100 text-granite-600 text-xs rounded-full"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-granite-950 text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-display-md mb-6">
              Vuoi Ordinare?
            </h2>
            <p className="text-xl text-granite-300 mb-8 max-w-2xl mx-auto">
              Scrivici su WhatsApp per ordinare. Ordine minimo 2 litri. Spedizioni in tutta Italia.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              Ordina su WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductsPage;
