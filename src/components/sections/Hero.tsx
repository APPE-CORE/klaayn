"use client";

import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react";
import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] w-full flex flex-col items-center overflow-hidden bg-[var(--color-void)] text-[var(--color-txt-main)] selection:bg-[var(--color-brand)] pt-[100px] md:pt-[100px] pb-10"
    >
      {/* =========================================
          1. FOND GRAPHIQUE (Noir au chargement, apparition fluide)
          ========================================= */}
      <div className="absolute inset-0 z-0 bg-[var(--color-void)] pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Grille de points */}
          <div 
            className="absolute inset-0 opacity-[0.25]" 
            style={{ 
              backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)`, 
              backgroundSize: "32px 32px" 
            }} 
          />

          {/* Aura Violette (Brand) - PATCH PERFORMANCE */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.25, 0.35, 0.25]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] md:top-[-20%] left-[-20%] md:left-[-10%] w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] min-w-[300px] md:min-w-[500px] rounded-full bg-[var(--color-brand)] blur-[80px] md:blur-[120px] will-change-transform [transform:translateZ(0)]"
          />

          {/* Aura Orange (Action) - PATCH PERFORMANCE */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.20, 0.25, 0.20]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] md:bottom-[-20%] right-[-20%] md:right-[-10%] w-[130vw] h-[130vw] md:w-[70vw] md:h-[70vw] min-w-[300px] md:min-w-[600px] rounded-full bg-[var(--color-action)] blur-[80px] md:blur-[120px] will-change-transform [transform:translateZ(0)]"
          />

          {/* Vignette de focalisation */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-void)_80%)] opacity-90" />
        </motion.div>
      </div>

      {/* =========================================
          CONTENEUR GLOBAL (flex-1 pour centrage parfait)
          ========================================= */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-7xl mx-auto px-6 flex-1">

        {/* =========================================
            2. BLOC HAUT (Titre et CTAs centrés verticalement)
            ========================================= */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl w-full"
        >
          {/* Badge Pilule avec la classe du global.css */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            className="badge-pill mb-6 flex items-center gap-2.5 px-3 py-1.5 w-fit"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-brand)]"></span>
            </span>
            <span className="text-label-tech text-[var(--color-txt-muted)]">
              Architectures de conversion
            </span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-display mb-6 text-[var(--color-txt-main)]"
          >
            {/* SAFARI PATCH : Gradient connecté aux variables Brand & Action */}
            <span 
              className="inline-block pb-1 pr-1"
              style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
              }}
            >
              Votre interface
            </span> <br /> finance vos concurrents.
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-body-large mb-10 px-2 max-w-2xl text-[var(--color-txt-dim)]"
          >
            Un temps de chargement lent et un design générique détruisent la confiance de vos prospects. Nous forgeons des écosystèmes sur-mesure qui transforment l'attention en revenus nets.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Button href="/contact">Lancer un projet</Button>
            <SecondaryButton href="/vitrine">Explorer nos solutions</SecondaryButton>
          </motion.div>
        </motion.div>

        {/* =========================================
            3. BLOC BAS (Cartouches et Scroll)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mt-12 md:mt-16"
        >
          {/* --- GAUCHE : Argument Technique --- */}
          <div className="w-full md:w-auto flex items-center gap-4 p-3 pr-6 rounded-[var(--radius-card)] bg-[var(--color-surface)]/30 backdrop-blur-md border border-[var(--color-border)] order-1">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 flex items-center justify-center shrink-0">
              <Zap size={16} className="text-[var(--color-brand)]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-txt-main)]">Performance Absolue</span>
              <span className="text-[11px] text-[var(--color-txt-muted)]">Latence &lt; 50ms</span>
            </div>
          </div>

          {/* --- CENTRE : Incitation au Scroll --- */}
          <div className="w-full md:w-auto flex items-center justify-center order-3 md:order-2 mt-2 md:mt-0">
            <div className="w-7 h-12 rounded-full border-[1.5px] border-[var(--color-border)] flex justify-center p-1.5 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 rounded-full bg-[var(--color-txt-main)]/80"
              />
            </div>
          </div>

          {/* --- DROITE : Argument Business --- */}
          <div className="w-full md:w-auto flex items-center md:flex-row-reverse gap-4 p-3 pr-6 md:pr-3 md:pl-6 rounded-[var(--radius-card)] bg-[var(--color-surface)]/30 backdrop-blur-md border border-[var(--color-border)] order-2 md:order-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/10 border border-[var(--color-action)]/30 flex items-center justify-center shrink-0">
              <Target size={16} className="text-[var(--color-action)]" />
            </div>
            <div className="flex flex-col text-left md:text-right">
              <span className="text-[13px] font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-txt-main)]">Conversion Maximisée</span>
              <span className="text-[11px] text-[var(--color-txt-muted)]">UX orientée résultats</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}