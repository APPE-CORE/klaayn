"use client";

import React, { useRef, useState } from "react";
import { ScanSearch, Palette, Cpu, Rocket } from "lucide-react"; 
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import Button from "@/components/ui/Button";

export default function VitrineProcess() {
    
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0); 
    
    const { scrollYProgress: desktopProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"] 
    });

    const { scrollYProgress: mobileProgress } = useScroll({
        target: containerRef,
        offset: ["start 40%", "end 70%"] 
    });

    useMotionValueEvent(desktopProgress, "change", (latest) => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
            const stepIndex = Math.min(Math.floor(latest * 4), 3);
            if (stepIndex !== activeStep) setActiveStep(stepIndex);
        }
    });

    useMotionValueEvent(mobileProgress, "change", (latest) => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            const stepIndex = Math.min(Math.floor(latest * 4), 3);
            if (stepIndex !== activeStep) setActiveStep(stepIndex);
        }
    });

    const scaleX = useSpring(desktopProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const scaleY = useSpring(mobileProgress, { stiffness: 100, damping: 30 });

    const steps = [
        {
            number: "01",
            title: "Immersion",
            desc: "Analyse du marché et définition de la stratégie. On pose les bases avant de créer.",
            icon: <ScanSearch size={18} />
        },
        {
            number: "02",
            title: "Design",
            desc: "Création des maquettes haute-fidélité. Validation de l'expérience visuelle et UX.",
            icon: <Palette size={18} />
        },
        {
            number: "03",
            title: "Développement",
            desc: "Codage sur-mesure en Next.js. Intégration des animations et optimisation SEO.",
            icon: <Cpu size={18} />
        },
        {
            number: "04",
            title: "Lancement",
            desc: (
                <>
                    Mise en ligne, tests de charge et remise des accès.{" "}
                    <span className="text-white font-medium">Vous êtes propriétaire.</span>
                </>
            ),
            icon: <Rocket size={18} />
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full bg-[var(--color-void)] h-auto md:h-[300vh]">
            
            <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-center py-24 md:py-0 border-b border-white/5 md:border-none overflow-hidden">

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col h-full md:justify-center">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4 block">
                            // Execution Pipeline
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Le Protocole.
                        </h2>
                        <p className="text-white/50 font-light text-lg">
                            Un processus linéaire, sans friction, conçu pour la vélocité.
                        </p>
                    </div>

                    <div className="relative mb-16 md:mb-20">
                        
                        <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-white/10 z-0">
                            <motion.div style={{ scaleX }} className="h-full bg-brand shadow-[0_0_15px_#7c1fac] origin-left" />
                        </div>
                        <div className="md:hidden absolute left-[9px] top-3 bottom-0 w-[1px] bg-white/10 z-0">
                            <motion.div style={{ scaleY }} className="w-full bg-brand shadow-[0_0_15px_#7c1fac] origin-top h-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4">
                            {steps.map((step, index) => {
                                const isActive = index === activeStep;
                                return (
                                    <div key={index} className="group relative flex flex-row md:flex-col gap-6 md:gap-0 pb-12 md:pb-0 transition-all duration-500">
                                        
                                        <div className="hidden md:block w-full h-[1px] bg-transparent relative">
                                            <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-500 z-10 border ${isActive ? "bg-brand border-brand shadow-[0_0_15px_#7c1fac] scale-125" : "bg-[var(--color-void)] border-white/20"}`}></div>
                                        </div>
                                        <div className="md:hidden absolute left-[9px] top-0 bottom-0 w-[1px] bg-transparent"></div>
                                        <div className={`md:hidden shrink-0 w-5 h-5 rounded-full transition-all duration-300 z-10 mt-1 border ${isActive ? "bg-brand border-brand shadow-[0_0_10px_#7c1fac]" : "bg-[var(--color-void)] border-white/20"}`}></div>

                                        <div className="md:pt-12 md:pr-8">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className={`font-mono text-xs font-bold transition-colors duration-500 ${isActive ? "text-brand" : "text-brand/50"}`}>{step.number}</span>
                                                <div className={`transition-colors duration-500 ${isActive ? "text-white scale-110" : "text-white/20"}`}>{step.icon}</div>
                                            </div>
                                            <h3 className={`text-xl font-display font-bold mb-3 transition-colors duration-500 ${isActive ? "text-brand" : "text-white"}`}>{step.title}</h3>
                                            <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${isActive ? "text-white/90" : "text-white/40"}`}>{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 md:mt-0">
                        <div className="w-full md:w-auto">
                            <Button href="/contact" icon={Rocket}>
                                Démarrer mon projet
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}