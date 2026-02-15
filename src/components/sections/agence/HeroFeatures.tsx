"use client";

import { motion } from "framer-motion";
import { Code2, Fingerprint, Globe } from "lucide-react";

export default function HeroFeatures() {
  
  const features = [
      { 
          title: "Code Artisanal", 
          text: "Architecture Next.js native optimisée au bit près pour une performance brute.",
          icon: <Code2 size={20} />
      },
      { 
          title: "Identité Unique", 
          text: "Chaque pixel est dessiné pour servir votre narration et votre marque.",
          icon: <Fingerprint size={20} />
      },
      { 
          title: "Portée Globale", 
          text: "Systèmes scalables conçus pour encaisser la charge internationale.",
          icon: <Globe size={20} />
      }
  ];

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-6xl mx-auto px-6 mt-8 md:mt-16"
    >
        {/* CONTENEUR PRINCIPAL : Surface + Bordure globale + Arrondi global */}
        <div className="w-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)] overflow-hidden shadow-2xl backdrop-blur-md">
            
            {features.map((item, i) => (
                  <div 
                      key={i} 
                      className="group relative flex flex-row items-start text-left gap-4 p-6 hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300"
                  >
                      {/* ICONE : Container avec bordure dimmée -> brand au hover */}
                      <div className="shrink-0 p-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-txt-muted)] group-hover:text-[var(--color-brand)] group-hover:border-[var(--color-brand)]/50 transition-colors duration-300">
                          {item.icon}
                      </div>

                      <div className="flex flex-col gap-1 z-10">
                          {/* TITRE : Font Outfit (Display) */}
                          <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] tracking-wide transition-colors">
                              {item.title}
                          </h3>
                          {/* TEXTE : Font Inter (Body) */}
                          <p className="text-sm font-[family-name:var(--font-inter)] text-[var(--color-txt-muted)] leading-relaxed group-hover:text-[var(--color-txt-main)]/80 transition-colors">
                              {item.text}
                          </p>
                      </div>
                  </div>
            ))}
        </div>
    </motion.div>
  );
}