"use client";

import HeroBackground from "./HeroBackground";
import HeroFeatures from "./HeroFeatures";

export default function AgenceHero() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--color-void)] text-[var(--color-txt-main)] selection:bg-[var(--color-brand)] pt-32 pb-16 md:pb-20">
      
      {/* 1. LAYER INTERACTIF (Background) */}
      <HeroBackground />

      {/* 2. CONTENU CRITIQUE */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6 mb-16 md:mb-20">
          
          {/* Badge : Style pillule connecté au thème */}
          <div className="mb-6 md:mb-8 flex items-center gap-3 px-3 py-1.5 w-fit border border-[var(--color-border)] bg-[var(--color-surface)]/20 backdrop-blur-md rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
              <span className="text-label-tech text-[10px] md:text-[11px] text-[var(--color-txt-muted)]">
                  Ingénierie & Design
              </span>
          </div>
          
          {/* Titre : Utilisation de la classe globale .text-display */}
          <h1 className="text-display mb-6 text-[var(--color-txt-main)] whitespace-nowrap">
            Design <br className="md:hidden" /> Radical.
          </h1>
          
          {/* Paragraphe : Utilisation de .text-body-large + Animation Desktop uniquement */}
          <p className="md:animate-fade-up md:delay-200 text-body-large max-w-[42rem]">
              Un collectif d'ingénieurs et de créatifs unis par une obsession : <br className="hidden md:block" />
              refuser le template pour bâtir des écosystèmes digitaux uniques.
          </p>
          
      </div>

      {/* 3. FEATURES (Cartes) */}
      <HeroFeatures />

    </section>
  );
}