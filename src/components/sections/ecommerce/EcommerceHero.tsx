"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap, BarChart3, Lock, Code2, Database, Palette, RefreshCw } from "lucide-react";

import Button from "@/components/ui/Button"; 
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function EcommerceHero() {

  // Mise à jour de la forme avec la variable globale --radius-card
  const cardStyle = "relative w-full aspect-square sm:w-64 sm:h-64 rounded-[var(--radius-card)] border p-4 sm:p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02]";
  
  // Highlight connecté au texte principal
  const highlightStyle = "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-txt-main)]/50 to-transparent opacity-70";
  
  // STYLE "VITESSE" (LIME) - Spécifique à cette section mais structurellement cohérent
  const limeCardTheme = "bg-lime-900/10 border-lime-500/20 hover:border-lime-500/40 shadow-lime-500/5";
  const limeTextTheme = "text-lime-300";

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden border-b border-[var(--color-border)] flex flex-col justify-center">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
          {/* Lueur Lime spécifique */}
          <div className="absolute top-1/2 right-0 md:right-20 w-[60vw] h-[60vw] bg-lime-500/10 blur-[150px] rounded-full mix-blend-screen opacity-30"></div>
      </div>

      {/* 2. CONTENEUR PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
          
          <div className="contents lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-10 text-center lg:text-left">
              
              {/* --- GAUCHE : TEXTE --- */}
              <div className="order-1 w-full flex flex-col items-center lg:items-start">
                  
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-6 bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 rounded-full backdrop-blur-md"
                  >
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></div>
                      <span className="text-label-tech text-[var(--color-txt-muted)]">
                          Shopify Natif & Performance Pure
                      </span>
                  </motion.div>

                  {/* TITRE : Utilisation de .text-display et du Patch Safari */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-display mb-8 text-[var(--color-txt-main)]"
                  >
                      Vendez plus. <br/>
                      {/* SAFARI PATCH : Inline Styles pour le dégradé Lime/Emerald */}
                      <span 
                          className="inline-block pb-1 pr-1"
                          style={{
                              backgroundImage: 'linear-gradient(to right, var(--color-main-ecom), var(--color-accent-ecom))',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              color: 'transparent'
                          }}
                      >
                          Sans Friction.
                      </span>
                  </motion.h1>

                  {/* SOUS-TITRE : Utilisation de .text-body-large */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-body-large max-w-md"
                  >
                      L'e-commerce ne pardonne pas la lenteur. Nous forgeons des boutiques Shopify ultra-rapides, conçues pour convertir le trafic en revenus.
                  </motion.p>
              </div>

              {/* --- BLOC 2 : ACTION & TECH --- */}
              <div className="order-3 w-full flex flex-col items-center lg:items-start gap-10">
                  
                  {/* BOUTONS */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start"
                  >
                      <div className="w-full sm:w-auto">
                        {/* Bouton Principal Orange (marque) par défaut, ou tu pourrais vouloir un Lime ici ? 
                            Je garde le standard "Button" qui est Orange/Brand pour la cohérence globale, 
                            sauf si tu veux forcer du Lime. */}
                        <Button href="/contact" icon={ShoppingBag}>Lancer ma Boutique</Button>
                      </div>
                      <div className="w-full sm:w-auto">
                        <SecondaryButton 
                            href="/shopify-audit" 
                            className="text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)]"
                        >
                            Audit Performance
                        </SecondaryButton>
                      </div>
                  </motion.div>

                  {/* STACK TECHNIQUE */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className="flex flex-col items-center lg:items-start gap-3 w-full"
                  >
                      <div className="h-[1px] w-12 bg-[var(--color-border)] mb-1"></div>
                      <span className="text-label-tech text-[var(--color-txt-dim)]">Core Engine</span>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-[var(--color-txt-main)]">
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
                      <BarChart3 size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className={`text-label-tech ${limeTextTheme} mb-1 block`}>KPI</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Conversion <br/> Maximale</span>
                      </div>
                  </div>

                  {/* 2. VITESSE */}
                  <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Zap size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className={`text-label-tech ${limeTextTheme} mb-1 block`}>Vitesse</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Chargement <br/> Instantané</span>
                      </div>
                  </div>

                   {/* 3. EXPÉRIENCE */}
                   <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Palette size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className={`text-label-tech ${limeTextTheme} mb-1 block`}>Expérience</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Design <br/> Émotionnel</span>
                      </div>
                  </div>

                  {/* 4. FIABILITÉ */}
                  <div className={`${cardStyle} ${limeCardTheme}`}>
                       <div className={highlightStyle}></div>
                      <Lock size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className={`text-label-tech ${limeTextTheme} mb-1 block`}>Fiabilité</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Checkout <br/> Blindé</span>
                      </div>
                  </div>

              </div>
          </div>

      </div>
    </section>
  );
}