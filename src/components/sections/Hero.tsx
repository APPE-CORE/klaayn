"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Zap, Target, Crown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTop = useTransform(scrollY, [0, 500], [0, 50]);
  const yBottom = useTransform(scrollY, [0, 500], [0, -20]);

  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
  const lightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const lightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) { mouseX.set(e.clientX - rect.left); mouseY.set(e.clientY - rect.top); }
  }

  const maskImage = useMotionTemplate`radial-gradient(800px circle at ${lightX}px ${lightY}px, black, transparent 80%)`;

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        // Utilisation de bg-void (Noir profond)
        className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden bg-void text-white selection:bg-brand pt-24 pb-10 md:pt-32 md:pb-16"
    >
      
      {/* FOND GRAPHIQUE */}
      <div className="absolute inset-0 z-0 bg-void">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>
      
      {/* EFFET DE LUMIÈRE (Curseur) */}
      <motion.div className="absolute inset-0 z-1 pointer-events-none bg-void" style={{ maskImage, WebkitMaskImage: maskImage }}>
         <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)`, backgroundSize: '40px 40px', opacity: 0.5, filter: 'drop-shadow(0 0 3px var(--color-brand))' }}></div>
          <motion.div style={{ x: lightX, y: lightY, translateX: "-50%", translateY: "-50%" }} className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand rounded-full blur-[120px] opacity-40 mix-blend-screen" />
      </motion.div>

      {/* CONTENU PRINCIPAL */}
      <motion.div style={{ y: yTop }} className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6 flex-1 justify-center">
          
          {/* Badge : .badge-pill (Style CSS) */}
          <div className="badge-pill mb-4 md:mb-8 flex items-center gap-3 px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
              {/* .text-label-tech (Police Mono) */}
              <span className="text-label-tech text-[10px] md:text-[11px] text-white/70">Architectes de performance</span>
          </div>
          
          {/* Titre : .text-display (Police Oswald Géante) */}
          <h1 className="text-display text-[16vw] md:text-7xl lg:text-[9rem] mb-6 text-white whitespace-nowrap">
            Forger <br className="md:hidden" /> l'autorité.
          </h1>
          
          {/* Paragraphe : .text-body-large */}
          <p className="text-body-large text-sm md:text-xl lg:text-2xl mb-8 md:mb-10 px-2 lg:max-w-[42rem]">
              Infrastructures digitales de haute précision. <br className="hidden md:block" />
              Conçues pour transformer votre vision en standard de marché.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12 md:mb-0">
              <Button href="/contact">Lancer un projet</Button>
              <SecondaryButton href="/work">Explorer nos solutions</SecondaryButton>
          </div>
      </motion.div>

      {/* CARTES MONOLITHES */}
      <motion.div 
          style={{ y: yBottom }} 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-0"
      >
          {[
              { title: "Domination", value: "Elite", desc: "Secteur", icon: <Crown size={16} />, metric: "UI/UX" },
              { title: "Conversion", value: "+42%", desc: "ROI", icon: <Target size={16} />, metric: "Revenue" },
              { title: "Performance", value: "Ultra", desc: "Grade", icon: <Zap size={16} />, metric: "Latency" }
          ].map((item, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardRef = useRef<HTMLDivElement>(null);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardMouseX = useMotionValue(0);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardMouseY = useMotionValue(0);

              const handleCardMouseMove = (e: React.MouseEvent) => {
                const rect = cardRef.current?.getBoundingClientRect();
                if (rect) { cardMouseX.set(e.clientX - rect.left); cardMouseY.set(e.clientY - rect.top); }
              };
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardMask = useMotionTemplate`radial-gradient(180px circle at ${cardMouseX}px ${cardMouseY}px, white, transparent 70%)`;

              return (
                // Utilisation de .card-monolith pour le style exact (bordure 8%, flou)
                <div key={i} ref={cardRef} onMouseMove={handleCardMouseMove} className="card-monolith group relative p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 h-24 md:h-28 flex items-center">
                    
                    {/* Effet Shimmer interne */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ WebkitMaskImage: cardMask, maskImage: cardMask }} />

                    <div className="relative z-10 w-full flex items-center justify-between gap-4">
                        <div className="flex flex-col justify-center">
                            {/* .text-value-box (Gros Chiffres) */}
                            <span className="text-value-box text-3xl md:text-5xl text-white">
                                {item.value}
                            </span>
                            {/* .text-label-tech (Sous-titre technique) */}
                            <span className="text-label-tech text-[10px] text-white/40 mt-1">
                                {item.desc}
                            </span>
                        </div>

                        <div className="flex flex-col items-end text-right">
                            <div className="flex items-center gap-2 text-brand mb-1">
                                {/* .text-label-bold (Titre violet) */}
                                <span className="text-label-bold text-[10px]">{item.title}</span>
                                {item.icon}
                            </div>
                            {/* .text-label-tech (Petite métrique) */}
                            <span className="text-label-tech text-[9px] text-white/25">{item.metric}</span>
                            <ChevronRight size={14} className="text-white/10 mt-2" />
                        </div>
                    </div>
                    
                    {/* Ligne du bas : Synchronisée avec var(--color-border) */}
                    <div className="absolute left-0 bottom-0 w-full h-[1px] bg-[var(--color-border)]"></div>
                </div>
              );
          })}
      </motion.div>
    </section>
  );
}