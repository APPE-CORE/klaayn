"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Users, Infinity } from "lucide-react";

// DONNÉES
const STEPS = [
  {
    id: "01",
    title: "Extraction",
    subtitle: "Audit & Stratégie",
    description: "Nous scannons votre business. Pas de devinettes. Nous identifions les blocages, les opportunités inexploitées et définissons l'angle d'attaque unique.",
    icon: Search,
    tech: ["SWOT", "Analytics", "User Personas"]
  },
  {
    id: "02",
    title: "Architecture",
    subtitle: "UX & Design System",
    description: "Conception du squelette. Nous créons une structure visuelle faite pour convertir. Chaque pixel a une fonction. Le design sert l'autorité.",
    icon: PenTool,
    tech: ["Figma", "Wireframes", "Prototyping"]
  },
  {
    id: "03",
    title: "Construction",
    subtitle: "Dev & Performance",
    description: "Code chirurgical. Stack moderne (Next.js). Animations GPU. Votre plateforme est bâtie pour la vitesse instantanée et une fluidité absolue.",
    icon: Code2,
    tech: ["React", "WebGL", "Tailwind"]
  },
  {
    id: "04",
    title: "Déploiement",
    subtitle: "Launch & Scale",
    description: "Mise en orbite. Tests de charge. Indexation SEO immédiate. Nous vous remettons les clés d'une machine de guerre prête à dominer.",
    icon: Rocket,
    tech: ["Vercel", "SEO", "CI/CD"]
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const animatedProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const scaleY = useSpring(animatedProgress, { stiffness: 60, damping: 20 });

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-[var(--color-void)] overflow-hidden">
      
      {/* FOND : Grille technique */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>
      
      {/* --- 1. INTRODUCTION --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse shadow-[0_0_15px_var(--color-brand)]"></span>
              <span className="text-label-tech text-[var(--color-brand)]">SYSTEM PROTOCOL</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h2 text-[var(--color-txt-main)] mb-6"
          >
              Mécanique <span className="text-[var(--color-txt-dim)]">de Précision.</span>
          </motion.h2>
      </div>

      {/* --- 2. LA TIMELINE --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mb-32">
          
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border)] -translate-x-1/2 z-0"></div>
          
          <motion.div 
            style={{ scaleY: scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-brand)] shadow-[0_0_15px_var(--color-brand)] -translate-x-1/2 z-0"
          />

          <div className="flex flex-col gap-12 md:gap-24">
              {STEPS.map((step, index) => (
                  <StepCard 
                    key={index} 
                    step={step} 
                    index={index} 
                    total={STEPS.length}
                    progress={scrollYProgress} 
                  />
              ))}
          </div>
      </div>

    </section>
  );
}

function BentoCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group relative w-full p-8 md:p-10 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] overflow-hidden transition-all duration-500
            hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/5 hover:shadow-[0_0_30px_rgba(124,31,172,0.15)]
            active:border-[var(--color-brand)] active:bg-[var(--color-brand)]/10 active:scale-[0.98]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="p-4 rounded-lg bg-[var(--color-void)] border border-[var(--color-border)] text-[var(--color-brand)] group-hover:border-[var(--color-brand)] group-hover:text-[var(--color-txt-main)] transition-colors">
                    <Icon size={32} />
                </div>
                <div>
                    <h3 className="text-h3 text-[var(--color-txt-main)] mb-2">{title}</h3>
                    <p className="text-body text-[var(--color-txt-muted)]">{desc}</p>
                </div>
            </div>
        </div>
    );
}

function StepCard({ step, index, total, progress }: { step: any, index: number, total: number, progress: MotionValue<number> }) {
    const isEven = index % 2 === 0;
    const threshold = (index + 0.2) / total; 
    
    const borderColor = useTransform(progress, [threshold - 0.05, threshold], ["rgba(255,255,255,0.08)", "#7c1fac"]);
    const boxShadow = useTransform(progress, [threshold - 0.05, threshold], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(124,31,172,0.6)"]);
    const scaleNode = useTransform(progress, [threshold - 0.05, threshold, threshold + 0.05], [1, 1.2, 1]); 

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`relative w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 z-20 pointer-events-none">
                <motion.div 
                    style={{ 
                        borderColor: borderColor,
                        boxShadow: boxShadow,
                        scale: scaleNode
                    }}
                    className="flex items-center justify-center w-10 h-10 bg-[var(--color-void)] border-[2px] rounded-full transition-colors duration-200"
                >
                    <span className="text-[10px] font-mono font-bold text-[var(--color-txt-dim)]">
                        0{index + 1}
                    </span>
                </motion.div>
            </div>

            <div className="hidden md:block w-1/2" />

            <div className={`w-full md:w-1/2 px-0 z-10 ${isEven ? "md:pl-12 md:text-right" : "md:pr-12 md:text-left"}`}>
                
                <div className="group relative p-6 md:p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-void)] transition-all duration-500 overflow-hidden
                    hover:border-[var(--color-brand)] hover:shadow-[0_0_20px_rgba(124,31,172,0.3)]
                    active:border-[var(--color-brand)] active:bg-[var(--color-void)] active:shadow-[0_0_20px_rgba(124,31,172,0.3)] active:scale-[0.98]">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                    <div className={`relative z-10 flex items-center justify-center md:justify-start gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                        <div className="p-2 bg-[var(--color-void)] border border-[var(--color-border)] rounded-lg text-[var(--color-txt-muted)] group-hover:text-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-colors duration-300">
                            {React.createElement(step.icon, { size: 20 })}
                        </div>
                        <h3 className="text-h3 text-[var(--color-txt-main)] group-hover:text-[var(--color-txt-main)] transition-colors">
                            {step.title}
                        </h3>
                    </div>

                    <div className="relative z-10 text-center md:text-left">
                        <h4 className="text-label-bold text-[var(--color-brand)] mb-3">
                            {step.subtitle}
                        </h4>
                        <p className="text-body text-[var(--color-txt-muted)] mb-6 group-hover:text-[var(--color-txt-main)]/80 transition-colors">
                            {step.description}
                        </p>

                        <div className={`flex flex-wrap justify-center gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            {step.tech.map((t: string, i: number) => (
                                <span key={i} className="px-2 py-1 text-label-tech text-[var(--color-txt-dim)] border border-[var(--color-border)] rounded bg-black/20 group-hover:border-[var(--color-border)] group-hover:text-[var(--color-txt-muted)] transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    );
}