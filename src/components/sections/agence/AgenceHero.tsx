"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Code2, Fingerprint, Globe } from "lucide-react";

export default function AgenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax
  const yTop = useTransform(scrollY, [0, 500], [0, 40]);
  const yBottom = useTransform(scrollY, [0, 500], [0, -10]);

  const mouseX = useMotionValue(0); 
  const mouseY = useMotionValue(0);
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
        className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-void text-white selection:bg-brand pt-32 pb-16 md:pb-20"
    >
      
      {/* FOND GRAPHIQUE */}
      <div className="absolute inset-0 z-0 bg-void">
          <div className="absolute inset-0 opacity-[0.08]" 
               style={{ 
                   backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 24px)`
               }}>
          </div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>
      
      {/* LUMIÈRE SPOTLIGHT */}
      <motion.div className="absolute inset-0 z-1 pointer-events-none bg-void" style={{ maskImage, WebkitMaskImage: maskImage }}>
         <div className="absolute inset-0" 
              style={{ 
                  backgroundImage: `repeating-linear-gradient(45deg, var(--color-brand) 0px, var(--color-brand) 1px, transparent 1px, transparent 24px)`, 
                  opacity: 0.4, 
                  filter: 'drop-shadow(0 0 2px var(--color-brand))' 
              }}>
         </div>
         <motion.div style={{ x: lightX, y: lightY, translateX: "-50%", translateY: "-50%" }} className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand rounded-full blur-[120px] opacity-40 mix-blend-screen" />
      </motion.div>

      {/* 1. CONTENU PRINCIPAL */}
      <motion.div style={{ y: yTop }} className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6 mb-16 md:mb-20">
          
          <div className="badge-pill mb-6 md:mb-8 flex items-center gap-3 px-3 py-1.5 w-fit border border-white/10 bg-black/20 backdrop-blur-md rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
              <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white/70">Ingénierie & Design</span>
          </div>
          
          <h1 className="text-[12vw] md:text-6xl lg:text-[7.5rem] font-display font-bold leading-[0.85] tracking-tight text-white whitespace-nowrap mb-6">
            Design <br className="md:hidden" /> Radical.
          </h1>
          
          <p className="text-sm md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed max-w-[42rem]">
              Un collectif d'ingénieurs et de créatifs unis par une obsession : <br className="hidden md:block" />
              refuser le template pour bâtir des écosystèmes digitaux uniques.
          </p>
          
      </motion.div>

      {/* 2. DESIGN DU BAS : MONOLITHE UNIQUE */}
      <motion.div 
          style={{ y: yBottom }} 
          // OPTIMISATION ICI :
          // 1. Passage de 'whileInView' à 'animate' pour un lancement immédiat sans attendre le scroll
          // 2. Réduction de la distance Y (40 -> 20) pour que l'animation "settle" plus vite
          // 3. Réduction de la durée (0.8 -> 0.6) pour plus de nervosité
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-6xl mx-auto px-6"
      >
          <div className="w-full rounded-xl border border-white/10 bg-[#050505] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden shadow-2xl">
              {[
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
              ].map((item, i) => (
                    <div 
                        key={i} 
                        className="group relative flex flex-row items-start text-left gap-4 p-6 hover:bg-white/5 transition-colors duration-300"
                    >
                        <div className="shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 group-hover:text-brand group-hover:border-brand/50 transition-colors duration-300">
                            {item.icon}
                        </div>

                        <div className="flex flex-col gap-1 z-10">
                            <h3 className="text-lg font-display font-medium text-white tracking-wide transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs font-light text-white/40 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </div>
              ))}
          </div>
      </motion.div>
    </section>
  );
}