"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

// --- TEXTES ÉPURÉS ---
const STEPS = [
  {
    id: "01",
    title: "Extraction",
    subtitle: "Audit & Stratégie",
    description: "Scan de l'infrastructure. Identification des frictions. Définition de l'angle d'attaque.",
    icon: Search,
    tech: ["Data Analytics", "SWOT"]
  },
  {
    id: "02",
    title: "Architecture",
    subtitle: "UX & Design System",
    description: "Conception orientée conversion. Chaque pixel est justifié par une finalité.",
    icon: PenTool,
    tech: ["Figma", "Wireframes"]
  },
  {
    id: "03",
    title: "Construction",
    subtitle: "Dev & Performance",
    description: "Code chirurgical. Stack moderne. Pour une vitesse instantanée et une fluidité absolue.",
    icon: Code2,
    tech: ["Next.js", "Tailwind"]
  },
  {
    id: "04",
    title: "Déploiement",
    subtitle: "Launch & Scale",
    description: "Mise en orbite. Indexation immédiate. Remise des clés d'une machine prête à dominer.",
    icon: Rocket,
    tech: ["Vercel", "SEO"]
  }
];

// --- COMPOSANT CARTE MOTORISÉ PAR FRAMER ---
function ProcessCard({ step, index, yTransform, isActive }: { step: typeof STEPS[0], index: number, yTransform: any, isActive: boolean }) {
  return (
    <motion.div
      // Resserrement de l'empilement : index * 15 (au lieu de 24)
      style={{ y: yTransform, top: index * 15, zIndex: index + 10 }}
      className={`absolute w-full bg-[var(--color-void)] rounded-[var(--radius-card)] transition-colors duration-500 overflow-hidden
        ${isActive 
            ? "border border-[var(--color-action)] shadow-[0_-0px_40px_var(--color-action-glow)]" 
            : "border border-[var(--color-border)] shadow-[0_-0px_15px_rgba(0,0,0,0.7)]"
        }
      `}
    >
      {/* Ligne d'accentuation (Couleur Action pure quand la carte est en mouvement) */}
      <div className={`absolute top-0 left-0 w-full h-[1px] transition-colors duration-500
          ${isActive ? "bg-[var(--color-action)] opacity-100" : "bg-[var(--color-border)] opacity-50"}
      `} />

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 p-6 lg:px-10 lg:py-8">
        
        {/* 1. Bloc Gauche : Icône & Titres */}
        <div className="flex items-center gap-5 lg:w-[300px] shrink-0">
          <div className={`p-3 rounded-[var(--radius-card)] transition-colors duration-500
            ${isActive 
              ? "bg-[var(--color-action)]/10 border border-[var(--color-action)]/50 text-[var(--color-action)]" 
              : "bg-[var(--color-surface)]/20 border border-[var(--color-border)] text-[var(--color-txt-main)]"
            }
          `}>
            <step.icon size={22} strokeWidth={1.5} />
          </div>
          
          <div className="flex flex-col">
            <span className={`text-label-tech mb-1 transition-colors duration-500
              ${isActive ? "text-[var(--color-action)] font-bold" : "text-[var(--color-txt-dim)]"}
            `}>
              // ÉTAPE {step.id}
            </span>
            <h3 className="text-h4 text-[var(--color-txt-main)]">
              {step.title}
            </h3>
          </div>
        </div>

        {/* 2. Bloc Central : Description */}
        <div className="flex-1">
          <p className={`text-body max-w-md transition-colors duration-500
            ${isActive ? "text-[var(--color-txt-main)]" : ""}
          `}>
            {step.description}
          </p>
        </div>

        {/* 3. Bloc Droit : Stack Technique */}
        <div className="flex flex-wrap gap-2 lg:justify-end shrink-0 lg:w-[180px]">
          {step.tech.map((t, i) => (
            <span 
              key={i} 
              className={`px-2 py-1 text-label-tech rounded-[var(--radius-card)] transition-colors duration-500
                ${isActive 
                  ? "text-[var(--color-action)] bg-[var(--color-action)]/10 border border-[var(--color-action)]/50" 
                  : "text-[var(--color-txt-dim)] bg-[var(--color-surface)]/30 border border-[var(--color-border)]"
                }
              `}
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Moteur de calcul du scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calcul mathématique des trajectoires
  const y1 = 0; 
  const y2 = useTransform(scrollYProgress, [0.05, 0.30], ["100vh", "0vh"]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.60], ["100vh", "0vh"]);
  const y4 = useTransform(scrollYProgress, [0.65, 0.90], ["100vh", "0vh"]);

  // Moteur d'état d'allumage
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) setActiveIndex(0);
    else if (latest >= 0.05 && latest < 0.35) setActiveIndex(1);
    else if (latest >= 0.35 && latest < 0.65) setActiveIndex(2);
    else if (latest >= 0.65 && latest < 0.95) setActiveIndex(3);
    else setActiveIndex(-1);
  });

  return (
    <section ref={sectionRef} className="relative w-full h-[400vh] bg-[var(--color-void)] text-[var(--color-txt-main)]">
      
      {/* Abaissement global de la section : pt-32 md:pt-40 (au lieu de 24/32) */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col pt-40 md:pt-60 pb-8">
        
        {/* =========================================
            EN-TÊTE 
            ========================================= */}
        <div className="w-full flex flex-col items-center text-center px-6 shrink-0 z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 mb-6">
              On fonctionne <span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                comment ?
              </span>
            </h2>

            <p className="text-body-large">
              L'improvisation coûte cher. Notre méthodologie est un protocole strict, conçu pour transformer votre vision en une infrastructure dominante.
            </p>
          </div>
        </div>

        {/* =========================================
            MOTEUR D'EMPILEMENT ABSOLU
            ========================================= */}
        {/* Le 20px de marge entre le paragraphe et les cartes est préservé */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-[40px] flex-1">
          <div className="relative w-full h-full">
            <ProcessCard step={STEPS[0]} index={0} yTransform={y1} isActive={activeIndex === 0} />
            <ProcessCard step={STEPS[1]} index={1} yTransform={y2} isActive={activeIndex === 1} />
            <ProcessCard step={STEPS[2]} index={2} yTransform={y3} isActive={activeIndex === 2} />
            <ProcessCard step={STEPS[3]} index={3} yTransform={y4} isActive={activeIndex === 3} />
          </div>
        </div>

      </div>
    </section>
  );
}