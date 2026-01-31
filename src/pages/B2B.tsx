import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, CheckCircle, MessageCircle, Droplets } from 'lucide-react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../data/site';
import { useB2BContent } from '../hooks/useContent';

export function B2BPage() {
  const { data: b2bContent, loading } = useB2BContent();

  if (loading || !b2bContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
        title="Per Ristoranti e Attività"
        description="Olio Extravergine IGP Nocellara del Belice per ristoranti, negozi e attività. Prezzi dedicati e spedizioni in tutta Italia."
        url="/ristoranti"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-granite-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-granite-950 via-granite-900 to-granite-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-granite-600/10 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-granite-600/20 rounded-full text-forno-400 text-sm font-medium mb-6">
                <ChefHat className="w-4 h-4" />
                {b2bContent.hero.badge}
              </span>
              <h1 className="font-display text-display-lg mb-6">{b2bContent.hero.title}</h1>
              <p className="text-xl text-granite-300 mb-8">{b2bContent.hero.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent('Ciao, sono un ristoratore e vorrei informazioni sulle forniture di olio.')}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5" />
                  Richiedi Preventivo
                </a>
                <Link to="/prodotti" className="btn bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-4">
                  Vedi Prodotti
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-granite-600/20 to-transparent rounded-full blur-3xl" />
                <div className="relative bg-gradient-to-br from-granite-800 to-granite-900 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {b2bContent.benefits.map((benefit, i) => (
                      <div key={i} className="bg-granite-950/50 rounded-xl p-4">
                        <div className="text-2xl mb-2">{benefit.icon}</div>
                        <p className="text-sm font-medium text-white">{benefit.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-display-md text-granite-950 mb-4">Perché Sceglierci</h2>
            <p className="text-xl text-granite-600 max-w-2xl mx-auto">
              Siamo il partner ideale per chi cerca olio di qualità direttamente dal produttore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bContent.benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-farina-50 hover:bg-farina-100 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-granite-100 rounded-2xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-granite-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-granite-950 mb-3">{benefit.title}</h3>
                <p className="text-granite-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages List */}
      <section className="section bg-farina-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-display-md text-granite-950 mb-6">Cosa Offriamo</h2>
              <ul className="space-y-4">
                {b2bContent.advantages.map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-granite-600 flex-shrink-0 mt-0.5" />
                    <span className="text-granite-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-warm">
              <h3 className="font-display text-2xl text-granite-950 mb-4">{b2bContent.cta.title}</h3>
              <p className="text-granite-600 mb-6">{b2bContent.cta.description}</p>
              <div className="flex flex-col gap-4">
                <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent('Ciao, sono interessato a forniture di olio per la mia attività.')}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  <MessageCircle className="w-5 h-5" />
                  {b2bContent.cta.buttonWhatsapp}
                </a>
                <a href={`tel:${siteConfig.phoneClean}`} className="btn-secondary justify-center">
                  {b2bContent.cta.buttonPhone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-granite-950 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-display-md mb-6">Pronto a Provare?</h2>
            <p className="text-xl text-granite-300 mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo personalizzato. Saremo felici di rispondere a tutte le tue domande.
            </p>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5" />
              Contattaci su WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
