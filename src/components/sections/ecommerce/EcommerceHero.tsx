"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap, BarChart3, Lock, Code2, Database, Palette, RefreshCw } from "lucide-react";

import Button from "@/components/ui/Button"; 
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function EcommerceHero() {

  const cardStyle = "relative w-full aspect-square sm:w-64 sm:h-64 rounded-2xl border p-4 sm:p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02]";
  const highlightStyle = "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70";
  
  // STYLE "VITESSE" (LIME)
  const limeCardTheme = "bg-lime-900/10 border-lime-500/20 hover:border-lime-500/40 shadow-lime-500/5";
  const limeTextTheme = "text-lime-300";

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#020202] text-white overflow-hidden border-b border-white/5 flex flex-col justify-center">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
          <div className="absolute top-1/2 right-0 md:right-20 w-[60vw] h-[60vw] bg-lime-500/10 blur-[150px] rounded-full mix-blend-screen opacity-30"></div>
      </div>

      {/* 2. CONTENEUR PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
          
          <div className="contents lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-10 text-center lg:text-left">
              
              {/* --- GAUCHE : TEXTE --- */}
              <div className="order-1 w-full flex flex-col items-center lg:items-start">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md"
                  >
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></div>
                      {/* CORRECTION : Utilisation stricte de la variable --color-txt-muted (Blanc 50%) */}
                      <span className="text-[10px] md:text-xs font-mono text-[var(--color-txt-muted)] uppercase tracking-widest">
                          Shopify Natif & Performance Pure
                      </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-bold leading-[0.95] tracking-tight mb-8"
                  >
                      Vendez plus. <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-white/50">
                          Sans Friction.
                      </span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // CORRECTION : Utilisation stricte de --color-txt-muted (varie selon CSS)
                    className="text-base md:text-lg text-[var(--color-txt-muted)] font-light leading-relaxed max-w-md"
                  >
                      L'e-commerce ne pardonne pas la lenteur. Nous forgeons des boutiques Shopify ultra-rapides, conçues pour convertir le trafic en revenus.
                  </motion.p>
              </div>

              <div className="order-3 w-full flex flex-col items-center lg:items-start gap-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start"
                  >
                      <div className="w-full sm:w-auto">
                        <Button href="/contact" icon={ShoppingBag}>Lancer ma Boutique</Button>
                      </div>
                      <div className="w-full sm:w-auto">
                        {/* CORRECTION "AUDIT PERFORMANCE" : Force la couleur CSS stricte (Gris Pur 50%) */}
                        <SecondaryButton 
                            href="/shopify-audit" 
                            className="text-[var(--color-txt-muted)] hover:text-white"
                        >
                            Audit Performance
                        </SecondaryButton>
                      </div>
                  </motion.div>

                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className="flex flex-col items-center lg:items-start gap-3 w-full"
                  >
                      <div className="h-[1px] w-12 bg-white/10 mb-1"></div>
                      {/* CORRECTION : Utilisation de --color-txt-dim (25%) pour les labels très discrets */}
                      <span className="text-[10px] font-mono text-[var(--color-txt-dim)] uppercase tracking-widest">Core Engine</span>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                          <div className="flex items-center gap-1.5" title="Shopify Liquid"><Code2 size={14}/> <span className="font-bold text-xs">Liquid</span></div>
                          <div className="flex items-center gap-1.5" title="Vanilla JS"><Zap size={14}/> <span className="font-bold text-xs">Vanilla JS</span></div>
                          <div className="flex items-center gap-1.5" title="GSAP Animations"><RefreshCw size={14}/> <span className="font-bold text-xs">GSAP</span></div>
                          <div className="flex items-center gap-1.5" title="Shopify Plus"><Database size={14}/> <span className="font-bold text-xs">Shopify 2.0</span></div>
                      </div>
                  </motion.div>
              </div>
          </div>

          {/* --- DROITE : LE "MONOLITHE GRID" (Lime) --- */}
          <div className="order-2 lg:order-none relative h-full w-full flex items-center justify-center lg:justify-end my-10 lg:my-0">
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full sm:w-auto">

                  {/* 1. KPI */}
                  <div className={`${cardStyle} ${limeCardTheme}`}>
                      <div className={highlightStyle}></div>
                      <BarChart3 size={28} className="text-white relative z-10" />
                      <div className="relative z-10">
                          <span className={`font-mono text-[9px] ${limeTextTheme} uppercase tracking-widest mb-1 block`}>KPI</span>
                          <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">Conversion <br/> Maximale</span>
                      </div>
                  </div>

                  {/* 2. VITESSE */}
                  <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Zap size={28} className="text-white relative z-10" />
                      <div className="relative z-10">
                          <span className={`font-mono text-[9px] ${limeTextTheme} uppercase tracking-widest mb-1 block`}>Vitesse</span>
                          <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">Chargement <br/> Instantané</span>
                      </div>
                  </div>

                   {/* 3. EXPÉRIENCE */}
                   <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Palette size={28} className="text-white relative z-10" />
                      <div className="relative z-10">
                          <span className={`font-mono text-[9px] ${limeTextTheme} uppercase tracking-widest mb-1 block`}>Expérience</span>
                          <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">Design <br/> Émotionnel</span>
                      </div>
                  </div>

                  {/* 4. FIABILITÉ */}
                  <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Lock size={28} className="text-white relative z-10" />
                      <div className="relative z-10">
                          <span className={`font-mono text-[9px] ${limeTextTheme} uppercase tracking-widest mb-1 block`}>Fiabilité</span>
                          <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">Checkout <br/> Blindé</span>
                      </div>
                  </div>

              </div>
          </div>

      </div>
    </section>
  );
}