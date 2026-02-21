"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Globe, Lock, ArrowRight } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2070&auto=format&fit=crop",
    accent: "text-blue-400"
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
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[var(--color-brand)]"
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[var(--color-action)]"
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
    <section className="relative w-full bg-[var(--color-void)] text-[var(--color-txt-main)] py-20 overflow-hidden">
      
      {/* 1. EN-TÊTE DE SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 md:mb-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-2.5 px-3 py-1.5 w-fit bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)] animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-txt-muted)]">
                Preuves de Concept
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display font-medium !text-[clamp(1.75rem,3.5vw,3.5rem)] mb-3 tracking-tight leading-[1.05] flex flex-wrap items-center gap-x-3"
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
              className="text-body-large text-[var(--color-txt-muted)] max-w-2xl"
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

        {/* 2. LE CARROUSEL ACCORDÉON */}
        <div className="w-full h-[65vh] md:h-[50vh] min-h-[450px] md:min-h-[400px] md:max-h-[500px] flex flex-col md:flex-row gap-3 md:gap-4">
          
          {PROJECTS.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  group relative overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  min-h-[70px] md:min-h-0 min-w-0
                  bg-[#050505] ring-1 ring-inset ring-white/5 [transform:translateZ(0)]
                  ${isActive 
                    ? 'flex-[6] md:flex-[2.5] shadow-[0_0_40px_rgba(0,0,0,0.4)]' 
                    : 'flex-[1] md:flex-[1] opacity-60 hover:opacity-100 saturate-50 hover:saturate-100'}
                `}
              >
                {/* --- BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.client} 
                        className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-105 opacity-50'}`} 
                    />
                </div>

                {/* --- OVERLAYS --- */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* --- CONTENEUR DES TEXTES --- */}
                <div className="absolute inset-0 pointer-events-none">
                    
                    {/* ÉTAT PASSIF ÉPURÉ */}
                    <div className={`absolute inset-0 p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-start md:justify-between gap-4 transition-opacity duration-200 ease-out ${isActive ? 'opacity-0' : 'opacity-100 delay-300'}`}>
                        <div className="flex-shrink-0 text-white/80 transition-colors group-hover:text-white">
                            {React.createElement(project.icon, { size: 28, strokeWidth: 1.5 })}
                        </div>
                        <div className="w-full overflow-hidden">
                            <h3 className="text-body-large md:text-h4 text-white font-medium whitespace-nowrap overflow-hidden text-ellipsis tracking-wide">
                                {project.client}
                            </h3>
                        </div>
                    </div>

                    {/* ÉTAT ACTIF */}
                    {/* CORRECTION : L'état actif utilise "transition-none" quand il disparaît pour éviter l'effet d'écrasement */}
                    <div className={`absolute inset-0 p-5 md:p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 ${isActive ? 'transition-all duration-700 ease-out delay-300 opacity-100 translate-y-0 pointer-events-auto' : 'transition-none opacity-0 translate-y-8 pointer-events-none'}`}>
                        
                        {/* Gauche : Infos */}
                        <div className="flex-1 min-w-0 max-w-lg flex flex-col justify-end h-full">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md bg-white/5">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="text-display !text-[clamp(1.5rem,4vw,2.5rem)] text-white mb-3 leading-tight">
                                {project.client}
                            </h3>
                            <p className="text-body-sm text-white/80 mb-5 max-w-sm line-clamp-2 md:line-clamp-none">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                                {project.tags.map((tag: string, i: number) => (
                                    <span key={i} className="px-2.5 py-1 text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Droite : KPI & Bouton Glassmorphism */}
                        <div className="flex flex-row md:flex-col items-end justify-between md:justify-end gap-6 pb-1 md:pb-0 w-full md:w-auto shrink-0">
                            <div className="text-left md:text-right hidden sm:block">
                                <span className="block text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">
                                    {project.metric.label}
                                </span>
                                <span className={`text-3xl md:text-5xl font-[family-name:var(--font-outfit)] font-bold tracking-tighter ${project.accent} drop-shadow-lg`}>
                                    {project.metric.value}
                                </span>
                            </div>
                            
                            <a 
                                href={`/portfolio`} 
                                className="group/btn relative flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 overflow-hidden cursor-pointer shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                                <span className="text-[13px] font-medium text-white tracking-wide relative z-10">Explorer</span>
                                <ArrowRight 
                                    size={18} 
                                    strokeWidth={2}
                                    className="text-white relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 group-hover/btn:-rotate-45" 
                                />
                            </a>
                        </div>

                    </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* 3. PROGRESS BARS */}
        <div className="hidden md:flex w-full mt-6 gap-4">
            {PROJECTS.map((_, index) => {
                const isActive = activeIndex === index;
                return (
                    <div 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`flex items-center justify-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'flex-[2.5]' : 'flex-[1]'}`}
                    >
                        <div className="w-[60%] h-[2px] bg-white/10 rounded-full overflow-hidden hover:bg-white/20 transition-colors duration-500">
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

        {/* Bouton Mobile Uniquement */}
        <div className="mt-8 flex justify-center md:hidden">
          <SecondaryButton href="/portfolio">
            Voir les archives
          </SecondaryButton>
        </div>

      </div>
    </section>
  );
}