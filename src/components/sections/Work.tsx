"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, Globe, Lock } from "lucide-react";
import SecondaryButton from "@/components/ui/SecondaryButton";

// --- DONNÉES DES PROJETS ---
const PROJECTS = [
  {
    id: "01",
    client: "Aura Finance",
    category: "Fintech & Web3",
    title: "Refonte de l'écosystème transactionnel.",
    description: "Architecture Headless ultra-sécurisée conçue pour des milliers de transactions/seconde sans la moindre latence.",
    metric: { value: "+140%", label: "TVL" },
    tags: ["Next.js", "Solidity", "Tailwind"],
    icon: Lock,
    image: "https://images.unsplash.com/photo-1444718070663-99afd7176287?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    client: "Maison V.",
    category: "E-commerce Luxe",
    title: "L'expérience d'achat élevée au rang d'art.",
    description: "Transition vers une plateforme sur-mesure hyper-réactive au design cognitif pour maximiser la rétention.",
    metric: { value: "-45%", label: "Load Time" },
    tags: ["Shopify Plus", "React", "WebGL"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1771098302605-43280111b792?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03",
    client: "Kortex AI",
    category: "SaaS B2B",
    title: "L'interface qui rend l'IA accessible.",
    description: "Transformation d'un algorithme complexe en un tableau de bord intuitif pour minimiser la charge mentale.",
    metric: { value: "+210%", label: "Rétention" },
    tags: ["Vue.js", "Python", "Data Viz"],
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1738084737196-031b26793ed0?q=80&w=2070&auto=format&fit=crop",
  }
];

const AUTOPLAY_DURATION = 8000; 

export default function SelectedWorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Moteur de l'Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROJECTS.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-[var(--color-void)] text-[var(--color-txt-main)] py-24 md:py-32 overflow-hidden border-t border-[var(--color-border)]">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* =========================================
            1. EN-TÊTE DE SECTION
            ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2 mb-4 flex flex-wrap items-center gap-x-3 text-[var(--color-txt-main)]"
            >
              Nos derniers <span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Monuments.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-large text-[var(--color-txt-muted)]"
            >
              L'impact n'est pas une coïncidence. C'est une architecture. Découvrez les écosystèmes qui dominent leurs marchés.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block pb-1 shrink-0"
          >
            <SecondaryButton href="/portfolio">
              Voir les archives
            </SecondaryButton>
          </motion.div>
        </div>

        {/* =========================================
            2. LE CARROUSEL PANORAMIQUE
            ========================================= */}
        <div className="w-full h-[65vh] md:h-[400px] min-h-[480px] md:min-h-[400px] flex flex-col md:flex-row gap-3 md:gap-4">
          
          {PROJECTS.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  group relative overflow-hidden rounded-[var(--radius-card)] cursor-pointer
                  transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  bg-[var(--color-surface)]/20 border border-[var(--color-border)]
                  min-h-[76px] md:min-h-0 min-w-0
                  ${isActive 
                    ? 'flex-[6] md:flex-[3.5] shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
                    : 'flex-[1] md:flex-[1] opacity-70 hover:opacity-100'}
                `}
              >
                {/* --- BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.client} 
                        className={`w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${isActive ? 'opacity-100' : 'opacity-40'}
                        `} 
                    />
                </div>

                {/* --- OVERLAYS DE PROTECTION --- */}
                <div className={`absolute inset-0 transition-opacity duration-[800ms] pointer-events-none bg-black/50 
                  ${isActive ? 'opacity-0' : 'opacity-100'}
                `} />
                <div className={`absolute inset-0 transition-opacity duration-[800ms] pointer-events-none bg-gradient-to-t from-[var(--color-void)] via-[var(--color-void)]/60 to-transparent 
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `} />

                {/* =========================================
                    CONTENEUR UNIFIÉ
                    ========================================= */}
                <div className={`absolute inset-0 flex flex-col z-20 ${isActive ? 'justify-between' : 'justify-center md:justify-between'}`}>
                    
                    {/* --- HEADER FIXE (Top-Left & Top-Right) --- */}
                    <div className={`flex items-start justify-between w-full px-5 md:px-8 ${isActive ? 'pt-5 md:pt-8' : 'md:pt-8'}`}>
                        
                        {/* Top-Left : Icône et Titre */}
                        <div className="flex items-center gap-4 min-w-0">
                            <div className={`shrink-0 p-2.5 rounded-xl transition-all duration-[800ms] border backdrop-blur-md
                                ${isActive 
                                    ? 'bg-[var(--color-surface)]/50 border-[var(--color-border)] text-[var(--color-txt-main)]' 
                                    : 'bg-[var(--color-void)]/40 border-transparent text-[var(--color-txt-dim)] group-hover:text-[var(--color-txt-main)]'
                                }
                            `}>
                                <project.icon size={22} strokeWidth={1.5} />
                            </div>
                            
                            {/* Titre Horizontal (Fonde discrètement sur PC quand inactif pour éviter la coupure moche) */}
                            <div className={`min-w-0 flex-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-100 md:opacity-0'}`}>
                                <h3 className={`text-h4 whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-[800ms]
                                    ${isActive ? 'text-[var(--color-txt-main)]' : 'text-[var(--color-txt-muted)] group-hover:text-[var(--color-txt-main)]'}
                                `}>
                                    {project.client}
                                </h3>
                            </div>
                        </div>

                        {/* Top-Right : KPI Badge */}
                        <div className={`hidden md:flex items-center gap-3 px-4 py-2 bg-[var(--color-surface)]/30 border border-[var(--color-border)] rounded-xl backdrop-blur-md shrink-0
                            ${isActive ? 'opacity-100 transition-opacity duration-500 delay-300 pointer-events-auto' : 'opacity-0 transition-opacity duration-150 pointer-events-none'}
                        `}>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-txt-dim)]">
                                {project.metric.label}
                            </span>
                            <span className="text-sm font-bold text-[var(--color-brand)]">
                                {project.metric.value}
                            </span>
                        </div>

                    </div>

                    {/* --- LAME SERVEUR : Titre Vertical PC (Visible uniquement quand inactif) --- */}
                    <div className={`hidden md:flex absolute top-[100px] left-8 w-[42px] justify-center transition-all duration-500 pointer-events-none
                        ${isActive ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 delay-300'}
                    `}>
                        <span className="text-h4 text-[var(--color-txt-muted)] group-hover:text-[var(--color-txt-main)] transition-colors whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                            {project.client}
                        </span>
                    </div>

                    {/* --- FOOTER (Bottom-Left & Bottom-Right) --- */}
                    <div className={`px-5 py-4 md:p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8
                        ${isActive ? 'opacity-100 translate-y-0 transition-all duration-500 delay-300 pointer-events-auto' : 'opacity-0 translate-y-2 transition-all duration-150 pointer-events-none absolute bottom-0'}
                    `}>
                        
                        {/* Bottom-Left : Description et Tags */}
                        <div className="flex-1 max-w-lg">
                            <p className="text-body text-[var(--color-txt-muted)] mb-0 md:mb-5 line-clamp-2 md:line-clamp-none">
                                {project.description}
                            </p>
                            
                            <div className="hidden md:flex flex-wrap gap-2">
                                {project.tags.map((tag: string, i: number) => (
                                    <span key={i} className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[var(--color-txt-dim)] bg-[var(--color-surface)]/40 border border-[var(--color-border)] rounded-md backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom-Right : Mobile KPI & CTA */}
                        <div className="flex flex-row items-center justify-between w-full md:w-auto shrink-0 mt-3 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]/30">
                            
                            {/* KPI Badge (Mobile Uniquement) */}
                            <div className="md:hidden flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface)]/30 border border-[var(--color-border)] rounded-lg backdrop-blur-md">
                                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--color-txt-dim)]">
                                    {project.metric.label}
                                </span>
                                <span className="text-xs font-bold text-[var(--color-brand)]">
                                    {project.metric.value}
                                </span>
                            </div>
                            
                            {/* Bouton d'action sécurisé */}
                            <div onClick={(e) => e.stopPropagation()} className="flex">
                                <SecondaryButton href="/portfolio">
                                    Explorer
                                </SecondaryButton>
                            </div>
                        </div>

                    </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* =========================================
            3. PROGRESS BARS
            ========================================= */}
        <div className="hidden md:flex w-full mt-6 gap-4">
            {PROJECTS.map((_, index) => {
                const isActive = activeIndex === index;
                return (
                    <div 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`flex items-center justify-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'flex-[2.5]' : 'flex-[1]'}`}
                    >
                        <div className="w-[60%] h-[2px] bg-[var(--color-border)] rounded-full overflow-hidden hover:bg-[var(--color-txt-dim)] transition-colors duration-500">
                            {isActive && (
                                <motion.div
                                    key={`progress-${activeIndex}`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                                    className="h-full bg-[var(--color-txt-main)] shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Bouton Mobile Global Uniquement */}
        <div className="mt-8 flex justify-center md:hidden">
          <SecondaryButton href="/portfolio" className="w-full [&>a]:w-full [&>a]:justify-center">
            Voir les archives
          </SecondaryButton>
        </div>

      </div>
    </section>
  );
}