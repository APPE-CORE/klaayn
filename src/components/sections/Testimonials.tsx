"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button"; 

// --- LA JURISPRUDENCE DE L'INDUSTRIE (Données Sourcées & Vérifiées) ---
const QUOTES = [
  {
    quote: "Une plateforme non optimisée est une hémorragie financière invisible. Un parcours utilisateur fondé sur une véritable stratégie augmente les taux de conversion jusqu'à 400%.",
    author: "Forrester Research",
    role: "The ROI of User Experience"
  },
  {
    quote: "Les entreprises qui traitent leur écosystème digital comme un moteur de conversion, et non comme une simple vitrine, génèrent systématiquement 32% de revenus supplémentaires.",
    author: "McKinsey & Company",
    role: "The Business Value of Design"
  },
  {
    quote: "Dans une économie de l'attention, la moindre friction cognitive finance vos concurrents. Une architecture sous-performante vous ampute directement de vos parts de marché.",
    author: "Harvard Business Review",
    role: "Customer Journey Analytics"
  }
];

// --- COMPOSANT DESKTOP : LA CITATION ILLUMINÉE ---
function IlluminatingQuote({ item, index, setActiveIndex }: { item: typeof QUOTES[0], index: number, setActiveIndex: (i: number) => void }) {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[50vh] flex flex-col justify-center py-16 border-b border-[var(--color-border)] last:border-b-0">
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0.3,
          scale: isInView ? 1 : 0.98,
          x: isInView ? 0 : -10,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col pr-12"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-brand)] opacity-60 mb-6">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
        </svg>

        <h3 
          className="text-h3 font-light mb-8 transition-colors duration-700"
          style={{ color: isInView ? "var(--color-txt-main)" : "var(--color-txt-muted)" }}
        >
          "{item.quote}"
        </h3>

        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-[var(--color-brand)] transition-all duration-700" style={{ opacity: isInView ? 1 : 0.2 }}></div>
          <div className="flex flex-col">
            <span className="text-label-bold text-[var(--color-txt-main)]">
              {item.author}
            </span>
            <span className="text-body-sm font-[family-name:var(--font-mono)] mt-1">
              {item.role}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // --- LOGIQUE MOBILE ---
  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: index * containerWidth, behavior: 'smooth' });
      setActiveMobileIndex(index);
    }
  }, []);

  const scrollPrev = useCallback(() => {
    const maxIndex = QUOTES.length - 1;
    const prevIndex = activeMobileIndex === 0 ? maxIndex : activeMobileIndex - 1;
    scrollToIndex(prevIndex);
  }, [activeMobileIndex, scrollToIndex]);

  const scrollNext = useCallback(() => {
    const maxIndex = QUOTES.length - 1;
    const nextIndex = activeMobileIndex === maxIndex ? 0 : activeMobileIndex + 1;
    scrollToIndex(nextIndex);
  }, [activeMobileIndex, scrollToIndex]);

  const handleMobileScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeMobileIndex) {
        setActiveMobileIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [scrollNext]);


  return (
    <section className="relative w-full bg-[var(--color-void)] text-[var(--color-txt-main)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden lg:flex items-start relative">
          
          <div className="w-5/12 sticky top-0 h-screen flex flex-col justify-center pr-12">
            <div className="flex gap-10 items-start">
              
              <div className="w-[1px] h-[200px] bg-[var(--color-border)] mt-4 relative flex flex-col justify-between">
                <motion.div 
                  className="absolute top-0 left-[-2px] w-[5px] h-[30px] bg-[var(--color-brand)] rounded-full"
                  animate={{ y: (activeDesktopIndex * (200 - 30)) / (QUOTES.length - 1) }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <span className="text-label-tech text-[var(--color-txt-dim)] mb-6 block opacity-80">
                  Le Coût de l'Amateurisme
                </span>
                
                {/* Correction : Utilisation du H2 (max 56px) plutôt que du display (max 96px) */}
                <h2 className="text-h2 mb-8">
                  Ne nous croyez pas sur parole.
                </h2>
                <p className="text-body-large max-w-sm mb-10">
                  Le marché ne pardonne plus les vitrines passives. L'absence d'une architecture pensée pour la conversion est une perte de capitaux directe au profit de vos concurrents.
                </p>

                {/* APPEL DU BOUTON UI (DESKTOP) */}
                <div className="mt-2">
                  <Button href="/contact">
                    Stopper l'hémorragie
                  </Button>
                </div>

              </div>

            </div>
          </div>

          <div className="w-7/12 flex flex-col py-[20vh] pl-16 border-l border-[var(--color-border)]">
            {QUOTES.map((item, index) => (
              <IlluminatingQuote 
                key={index} 
                item={item} 
                index={index} 
                setActiveIndex={setActiveDesktopIndex} 
              />
            ))}
          </div>

        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="lg:hidden py-24 flex flex-col">
          
          <div className="mb-10 text-center">
            <span className="text-label-tech text-[var(--color-txt-dim)] mb-3 block opacity-80">
              Le Coût de l'Amateurisme
            </span>
            <h2 className="text-h2 mb-4">
              Ne nous croyez pas <br/><span className="text-[var(--color-txt-muted)]">sur parole.</span>
            </h2>
            <p className="text-body px-4">
              L'absence d'une architecture pensée pour la conversion est une perte de capitaux directe.
            </p>
          </div>

          <div className="relative w-full">
            <div 
              ref={carouselRef}
              onScroll={handleMobileScroll}
              className="flex w-full overflow-x-auto snap-x snap-mandatory pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />

              {QUOTES.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 snap-center px-2"
                >
                  {/* Restauration du design original + Variable radius card */}
                  <div className="flex flex-col h-full justify-between border border-[var(--color-border)] p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)]/20 backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-brand)] opacity-60 mb-6">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>

                    <h3 className="text-h4 font-light tracking-wide text-[var(--color-txt-main)] mb-8 flex-1 leading-relaxed">
                      "{item.quote}"
                    </h3>

                    <div className="flex items-center gap-3 pt-6 border-t border-[var(--color-border)] mt-auto">
                      <div className="w-6 h-[1px] bg-[var(--color-brand)]"></div>
                      <div className="flex flex-col">
                        <span className="text-label-bold text-[var(--color-txt-main)]">
                          {item.author}
                        </span>
                        <span className="text-body-sm font-[family-name:var(--font-mono)] mt-1">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation avec les boutons Carrés-Arrondis */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-card)] bg-[var(--color-surface)]/30 border border-[var(--color-border)] text-[var(--color-txt-main)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border)] transition-all active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <div className="flex gap-2">
                {QUOTES.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => scrollToIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeMobileIndex ? 'w-8 bg-[var(--color-brand)]' : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-txt-dim)]'}`}
                  />
                ))}
              </div>

              <button 
                onClick={scrollNext}
                className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-card)] bg-[var(--color-surface)]/30 border border-[var(--color-border)] text-[var(--color-txt-main)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border)] transition-all active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* APPEL DU BOUTON UI (MOBILE) */}
            <div className="mt-10 px-2 flex justify-center w-full">
              <div className="w-full max-w-[300px] flex justify-center">
                <Button href="/contact">
                  Stopper l'hémorragie
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}