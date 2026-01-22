"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import GhostButton from "@/components/ui/GhostButton";

// DONNÉES PROJETS
const PROJECTS = [
  {
    id: 1,
    client: "Nebula",
    title: "Quantum Finance",
    category: "Fintech / WebGL",
    year: "2025",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2600&auto=format&fit=crop",
    desc: "Refonte totale de l'infrastructure visuelle d'une néo-banque. Intégration temps réel.",
    service: "Architecture WebGL"
  },
  {
    id: 2,
    client: "Velvet",
    title: "Digital Fashion",
    category: "E-commerce / 3D",
    year: "2024",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    desc: "Showroom virtuel pour une marque de luxe. Expérience d'essayage en réalité augmentée.",
    service: "Expérience Immersive"
  },
  {
    id: 3,
    client: "Aeris",
    title: "Drone Control",
    category: "SaaS / Dashboard",
    year: "2024",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2600&auto=format&fit=crop",
    desc: "Interface de pilotage de flotte de drones autonomes. Latence zéro, UX critique.",
    service: "Interface Métier"
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const p1 = useTransform(scrollYProgress, [0, 1/3], [0, 1]);
  const p2 = useTransform(scrollYProgress, [1/3, 2/3], [0, 1]);
  const p3 = useTransform(scrollYProgress, [2/3, 1], [0, 1]);
  const segments = [p1, p2, p3];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / PROJECTS.length;
    const newIndex = Math.min(Math.floor(latest / step), PROJECTS.length - 1);
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  });

  const currentProject = PROJECTS[activeIndex];

  const SEGMENT_DURATION = 1.5;
  const TOTAL_SEGMENTS = 3;
  const CYCLE_DURATION = SEGMENT_DURATION * TOTAL_SEGMENTS;

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-void">
      
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden">
        
        {/* 1. ZONE HAUTE */}
        <div className="flex-none flex flex-col items-center justify-center pt-24 pb-2 md:pt-32 md:pb-6 z-30 px-6 bg-gradient-to-b from-void via-void/90 to-transparent">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_15px_var(--color-brand)]"></span>
                <span className="text-label-tech text-brand">SELECTED WORKS</span>
            </div>
            
            <h2 className="text-display text-4xl md:text-5xl text-white text-center leading-none">
                Standards <span className="text-txt-muted">du Marché.</span>
            </h2>
        </div>

        {/* 2. ZONE MILIEU (Écran Cinéma) */}
        <div className="flex-1 w-full min-h-0 flex flex-col items-center justify-center px-4 relative z-10 py-1 md:py-6">
            
            {/* CONTENEUR PRINCIPAL CENTRÉ */}
            <div className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-full flex items-center justify-center z-10">
                
                {/* --- BARRE DE NAVIGATION PC --- */}
                <div className="hidden md:flex flex-col absolute -left-16 top-1/2 -translate-y-1/2 gap-6 z-50">
                    {segments.map((p, i) => (
                        // AJUSTEMENT ÉPAISSEUR : w-[3px] devient w-[4px]
                        <div key={i} className="w-[4px] h-24 bg-white/5 rounded-full overflow-hidden relative border border-white/5 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-void/50"></div>
                            <motion.div 
                                style={{ scaleY: p, transformOrigin: "top" }} 
                                className="w-full h-full relative overflow-hidden bg-brand rounded-full"
                            >
                                <div className="absolute inset-0 bg-brand shadow-[0_0_15px_2px_rgba(124,31,172,0.6),0_0_5px_1px_rgba(255,255,255,0.8)]"></div>
                                <motion.div
                                    animate={{ y: ["-100%", "100%"] }}
                                    transition={{ 
                                        duration: SEGMENT_DURATION, 
                                        ease: "linear", 
                                        repeat: Infinity,
                                        repeatDelay: CYCLE_DURATION - SEGMENT_DURATION,
                                        delay: i * SEGMENT_DURATION 
                                    }}
                                    className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-100 mix-blend-overlay"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* BACKLIGHT SYSTEMIQUE */}
                <div className="absolute -inset-10 md:-inset-20 bg-gradient-to-r from-brand/10 via-brand-glow/10 to-brand/10 blur-[60px] md:blur-[100px] z-[-2] rounded-full opacity-40"></div>
                <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-b from-brand/20 via-brand/30 to-brand/20 blur-2xl md:blur-3xl z-[-1] rounded-full opacity-60"></div>

                {/* CADRE NÉON/LASER */}
                <div className="relative w-full h-full p-[1px] md:p-[2px] rounded-none bg-violet-200/80 shadow-[0_0_25px_var(--color-brand-glow),inset_0_0_10px_var(--color-brand-glow)] z-10 flex flex-col">
                    <div className="absolute inset-[1px] md:inset-[2px] bg-void border-[4px] md:border-[12px] border-void rounded-none overflow-hidden">
                        <div className="relative w-full h-full bg-surface overflow-hidden rounded-none">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={currentProject.id}
                                    initial={{ scale: 1.1, opacity: 0.8, filter: "blur(10px)" }}
                                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0 }}
                                    // SYNCHRONISATION : Durée passée de 1.2 à 0.8 pour accélérer l'image et matcher le texte
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                    className="relative w-full h-full"
                                >
                                    <Image 
                                        src={currentProject.img} 
                                        alt={currentProject.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 80vw"
                                    />
                                    <div className="absolute inset-0 bg-void/20 mix-blend-multiply"></div>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* BARRE PROGRESSION MOBILE */}
        <div className="flex-none md:hidden w-full px-6 py-2 flex gap-2 justify-center z-20">
            {segments.map((p, i) => (
                // AJUSTEMENT ÉPAISSEUR MOBILE : h-[2px] devient h-[3px]
                <div key={i} className="h-[3px] w-16 bg-white/5 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand/10"></div>
                    <motion.div 
                        style={{ scaleX: p, transformOrigin: "left" }} 
                        className="h-full w-full relative overflow-hidden bg-brand rounded-full shadow-[0_0_8px_var(--color-brand)]"
                    >
                        <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                                duration: SEGMENT_DURATION, 
                                ease: "linear", 
                                repeat: Infinity,
                                repeatDelay: CYCLE_DURATION - SEGMENT_DURATION,
                                delay: i * SEGMENT_DURATION 
                            }}
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                        />
                    </motion.div>
                </div>
            ))}
        </div>

        {/* 3. ZONE BASSE : INFOS & CTA */}
        <div className="flex-none w-full flex justify-center pb-6 md:pb-12 px-6 bg-void z-50">
            <div className="w-full max-w-5xl">
                {/* LA LIGNE FIXE */}
                <div className="w-full border-t border-[var(--color-border)] mb-4"></div>
                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentProject.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        // SYNCHRONISATION : Durée passée de 0.6 à 0.8 pour matcher l'image
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0"
                    >
                        <div className="w-full md:w-auto shrink-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-label-tech text-brand">0{activeIndex + 1} / 0{PROJECTS.length}</span>
                                <span className="text-[10px] font-mono font-bold text-txt-muted uppercase px-2 py-0.5 border border-[var(--color-border)] rounded-full bg-white/5">
                                    {currentProject.service}
                                </span>
                            </div>
                            <h3 className="text-display text-3xl md:text-5xl text-white uppercase leading-none mb-1">
                                {currentProject.client}
                            </h3>
                            <p className="text-body-large text-sm md:text-base max-w-lg text-txt-muted line-clamp-2 md:line-clamp-none">
                                {currentProject.desc}
                            </p>
                        </div>

                        <div className="w-full md:w-auto mt-3 md:mt-0 flex justify-start md:justify-end shrink-0">
                            <GhostButton href={`/work/${currentProject.id}`}>
                                Explorer
                            </GhostButton>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

      </div>
    </section>
  );
}