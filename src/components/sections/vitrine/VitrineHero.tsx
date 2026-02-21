"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, Cpu, Zap, Layers, BarChart3, Palette, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button"; 
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function VitrineHero() {

  // Mise à jour de la forme avec la variable globale --radius-card
  const cardStyle = "relative w-full aspect-square sm:w-64 sm:h-64 rounded-[var(--radius-card)] border p-4 sm:p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02]";
  
  // Highlight connecté au texte principal
  const highlightStyle = "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-txt-main)]/50 to-transparent opacity-70";

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden border-b border-[var(--color-border)] flex flex-col justify-center">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
          <div className="absolute top-1/2 right-0 md:right-20 w-[60vw] h-[60vw] bg-[var(--color-brand)]/5 blur-[150px] rounded-full mix-blend-screen opacity-30"></div>
      </div>

      {/* 2. CONTENEUR PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
          
          <div className="contents lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-10 text-center lg:text-left">
              
              {/* --- BLOC 1 : TEXTE (Order 1 sur Mobile) --- */}
              <div className="order-1 w-full flex flex-col items-center lg:items-start">
                  
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-6 bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 rounded-full backdrop-blur-md"
                  >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse"></div>
                      <span className="text-label-tech text-[var(--color-txt-muted)]">
                          L'agence des leaders exigeants
                      </span>
                  </motion.div>

                  {/* TITRE : Utilisation de .text-display et du Patch Safari */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-display mb-8 text-[var(--color-txt-main)]"
                  >
                      Votre Image, <br/>
                      {/* SAFARI PATCH : Inline Styles pour le dégradé + pb-1/pr-1 */}
                      <span 
                          className="inline-block pb-1 pr-1"
                          style={{
                              backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              color: 'transparent'
                          }}
                      >
                          Autorité Totale.
                      </span>
                  </motion.h1>

                  {/* SOUS-TITRE : Utilisation de .text-body-large */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-body-large max-w-md"
                  >
                      Ne subissez plus la concurrence. Nous transformons votre identité en une infrastructure digitale intouchable.
                  </motion.p>
              </div>

              {/* --- BLOC 2 : ACTION & TECH (Order 3 sur Mobile) --- */}
              <div className="order-3 w-full flex flex-col items-center lg:items-start gap-10">
                  
                  {/* BOUTONS */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start"
                  >
                      <div className="w-full sm:w-auto">
                        <Button href="/audit" icon={Rocket}>Lancer l'Audit</Button>
                      </div>

                      <div className="w-full sm:w-auto">
                        <SecondaryButton 
                            href="/methode" 
                            className="text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)]"
                        >
                            Méthode
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
                      <span className="text-label-tech text-[var(--color-txt-dim)]">Arsenal Technique</span>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-[var(--color-txt-main)]">
                          <div className="flex items-center gap-1.5" title="Next.js"><Code2 size={14}/> <span className="font-bold text-xs">Next.js</span></div>
                          <div className="flex items-center gap-1.5" title="TypeScript"><Cpu size={14}/> <span className="font-bold text-xs">TypeScript</span></div>
                          <div className="flex items-center gap-1.5" title="Vercel Edge"><Zap size={14}/> <span className="font-bold text-xs">Edge</span></div>
                          <div className="flex items-center gap-1.5" title="Framer Motion"><Layers size={14}/> <span className="font-bold text-xs">Motion</span></div>
                      </div>
                  </motion.div>
              </div>

          </div>

          {/* --- DROITE : LE "MONOLITHE GRID" (Order 2 sur Mobile) --- */}
          <div className="order-2 lg:order-none relative h-full w-full flex items-center justify-center lg:justify-end my-10 lg:my-0">
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full sm:w-auto">

                  {/* 1. VIOLET */}
                  <div className={`${cardStyle} bg-purple-900/10 border-purple-500/20 hover:border-purple-500/40 shadow-purple-500/5`}>
                      <div className={highlightStyle}></div>
                      <Palette size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className="text-label-tech text-purple-200 mb-1 block">Design</span>
                          {/* Utilisation de text-h4 (~20px) pour uniformiser les titres de cartes */}
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Esthétique <br/> Radicale</span>
                      </div>
                  </div>

                  {/* 2. BLEU */}
                  <div className={`${cardStyle} bg-blue-900/10 border-blue-500/20 hover:border-blue-500/40 shadow-blue-500/5`}>
                       <div className={highlightStyle}></div>
                      <Cpu size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className="text-label-tech text-blue-200 mb-1 block">Tech</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Vitesse <br/> Absolue</span>
                      </div>
                  </div>

                   {/* 3. ORANGE */}
                   <div className={`${cardStyle} bg-orange-900/10 border-orange-500/20 hover:border-orange-500/40 shadow-[var(--color-brand)]/5`}>
                       <div className={highlightStyle}></div>
                      <BarChart3 size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className="text-label-tech text-orange-200 mb-1 block">Impact</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Business <br/> Growth</span>
                      </div>
                  </div>

                  {/* 4. VERT */}
                  <div className={`${cardStyle} bg-emerald-900/10 border-emerald-500/20 hover:border-emerald-500/40 shadow-emerald-500/5`}>
                       <div className={highlightStyle}></div>
                      <ShieldCheck size={28} className="text-[var(--color-txt-main)] relative z-10" />
                      <div className="relative z-10">
                          <span className="text-label-tech text-emerald-200 mb-1 block">Sécurité</span>
                          <span className="text-h4 font-bold text-[var(--color-txt-main)] tracking-tight leading-tight">Sérénité <br/> Totale</span>
                      </div>
                  </div>

              </div>
          </div>

      </div>
    </section>
  );
}