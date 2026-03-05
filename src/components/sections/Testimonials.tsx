"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button"; 

// --- LA JURISPRUDENCE DE L'INDUSTRIE ---
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

// --- COMPOSANT DESKTOP : LA CITATION FLOTTANTE ---
function IlluminatingQuote({ item, index, setActiveIndex }: { item: typeof QUOTES[0], index: number, setActiveIndex: (i: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[50vh] flex flex-col justify-center py-24 relative">
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0.15,
          scale: isInView ? 1 : 0.98,
          x: isInView ? 0 : -10,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col pr-12 relative"
      >
        {/* Marqueur typographique */}
        <div className="font-[family-name:var(--font-mono)] text-[var(--color-brand)] text-6xl mb-2 leading-none opacity-40">
          "
        </div>

        <h3 
          className="text-xl md:text-2xl font-light mb-10 transition-colors duration-700 leading-relaxed"
          style={{ color: isInView ? "var(--color-txt-main)" : "var(--color-txt-muted)" }}
        >
          {item.quote}
        </h3>

        {/* Source épurée */}
        <div className="flex items-center gap-5">
          <div 
            className="h-[1px] bg-[var(--color-brand)] transition-all duration-700" 
            style={{ width: isInView ? "40px" : "0px", opacity: isInView ? 0.6 : 0 }} 
          />
          <div className="flex flex-col">
            <span className="text-body-bold text-[var(--color-txt-main)]">
              {item.author}
            </span>
            <span className="text-body-sm text-[var(--color-txt-dim)] mt-1 font-[family-name:var(--font-mono)]">
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
    }, 6000);
    return () => clearInterval(timer);
  }, [scrollNext]);


  return (
    <section className="relative w-full bg-[var(--color-void)] text-[var(--color-txt-main)]">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* =========================================
            DESKTOP LAYOUT
            ========================================= */}
        <div className="hidden lg:flex items-start relative">
          
          <div className="w-5/12 sticky top-0 h-screen flex flex-col justify-center pr-16">
            
            {/* Titre en ligne */}
            <h2 className="text-h2 mb-6">
              Ne nous croyez pas <span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                sur parole.
              </span>
            </h2>

            <p className="text-body-large max-w-sm mb-12 text-[var(--color-txt-muted)]">
              Le marché ne pardonne plus les vitrines passives. L'absence d'une architecture pensée pour la conversion est une perte de capitaux directe au profit de vos concurrents.
            </p>

            {/* Bouton UI */}
            <div>
              <Button href="/contact">
                Stopper l'hémorragie
              </Button>
            </div>

          </div>

          <div className="w-7/12 flex flex-col py-[20vh] pl-16">
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

        {/* =========================================
            MOBILE LAYOUT
            ========================================= */}
        <div className="lg:hidden py-24 flex flex-col">
          
          <div className="mb-16 flex flex-col items-start">
            
            {/* Titre en ligne */}
            <h2 className="text-h2 mb-4">
              Ne nous croyez pas <span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                sur parole.
              </span>
            </h2>
            <p className="text-body-large text-[var(--color-txt-muted)]">
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
                  className="w-full flex-shrink-0 snap-center px-1"
                >
                  {/* Carte avec bordures restaurées pour délimiter sur Mobile */}
                  <div className="flex flex-col h-full justify-between p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)]/20 border border-[var(--color-border)] backdrop-blur-md relative">
                    
                    <div className="font-[family-name:var(--font-mono)] text-[var(--color-brand)] text-6xl mb-4 leading-none opacity-40">
                      "
                    </div>

                    <h3 className="text-xl font-light tracking-wide text-[var(--color-txt-main)] mb-10 flex-1 leading-relaxed">
                      {item.quote}
                    </h3>

                    <div className="flex items-center gap-5 pt-6 border-t border-[var(--color-border)] mt-auto">
                      <div className="w-8 h-[1px] bg-[var(--color-brand)] opacity-60"></div>
                      <div className="flex flex-col">
                        <span className="text-body-bold text-[var(--color-txt-main)]">
                          {item.author}
                        </span>
                        <span className="text-body-sm text-[var(--color-txt-dim)] mt-1 font-[family-name:var(--font-mono)]">
                          {item.role}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Tech Mobile (Design restauré et optimisé) */}
            <div className="flex items-center justify-between mt-6 mb-12 px-1">
              <div className="flex gap-3 items-center">
                {QUOTES.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => scrollToIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer border border-[var(--color-border)] ${i === activeMobileIndex ? 'w-10 bg-[var(--color-brand)] border-transparent' : 'w-4 bg-transparent hover:bg-[var(--color-surface)]'}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)]/50 active:scale-95 transition-colors hover:bg-[var(--color-surface)] text-[var(--color-txt-main)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)]/50 active:scale-95 transition-colors hover:bg-[var(--color-surface)] text-[var(--color-txt-main)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* BOUTON MOBILE FORCÉ EN FULL WIDTH */}
            <div className="w-full flex flex-col px-1">
              <Button 
                href="/contact" 
                className="w-full [&>a]:!w-full [&>a]:!flex [&>a]:!justify-center"
              >
                Stopper l'hémorragie
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}