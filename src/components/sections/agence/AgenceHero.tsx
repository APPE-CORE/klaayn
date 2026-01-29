import React from "react";
import HeroBackground from "./HeroBackground";
import HeroFeatures from "./HeroFeatures";

export default function AgenceHero() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-void text-white selection:bg-brand pt-32 pb-16 md:pb-20">
      
      {/* 1. LAYER INTERACTIF */}
      <HeroBackground />

      {/* 2. CONTENU CRITIQUE */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6 mb-16 md:mb-20">
          
          {/* Badge : Animation CSS native conservée (légère) */}
          <div className="badge-pill mb-6 md:mb-8 flex items-center gap-3 px-3 py-1.5 w-fit border border-white/10 bg-black/20 backdrop-blur-md rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
              <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white/70">Ingénierie & Design</span>
          </div>
          
          <h1 className="text-[12vw] md:text-6xl lg:text-[7.5rem] font-display font-bold leading-[0.85] tracking-tight text-white whitespace-nowrap mb-6">
            Design <br className="md:hidden" /> Radical.
          </h1>
          
          {/* CORRECTION ICI : 'md:animate-fade-up' au lieu de 'animate-fade-up' 
              Résultat : 
              - Mobile : Texte visible T=0s (LCP < 1s)
              - Desktop : Texte animé (Style conservé) 
          */}
          <p className="md:animate-fade-up md:delay-200 text-sm md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed max-w-[42rem]">
              Un collectif d'ingénieurs et de créatifs unis par une obsession : <br className="hidden md:block" />
              refuser le template pour bâtir des écosystèmes digitaux uniques.
          </p>
          
      </div>

      {/* 3. FEATURES */}
      <HeroFeatures />

    </section>
  );
}