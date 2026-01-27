"use client";

import React from "react";
import { ScanSearch, Palette, Cpu, Rocket } from "lucide-react";

export default function VitrineProcess() {
    
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
        // CORRECTION : Suppression du 'px-6 md:px-12' sur la section
        <section className="relative w-full bg-[#020202] py-24 border-b border-white/5 overflow-hidden">
            
            {/* CORRECTION : Ajout du 'px-6' sur le conteneur pour l'alignement strict */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 1. HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-20">
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

                {/* 2. LE PROCESS (Clean & Functional) */}
                <div className="relative">
                    
                    {/* Grille : 1 colonne Mobile / 4 colonnes Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex flex-row md:flex-col gap-6 md:gap-0 pb-12 md:pb-0">
                                
                                {/* A. LA LIGNE DE TEMPS (Timeline) */}
                                {/* Desktop : Ligne horizontale en haut */}
                                <div className="hidden md:block w-full h-[1px] bg-white/10 group-hover:bg-brand transition-colors duration-300 relative">
                                    {/* Le Point d'ancrage */}
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#020202] border border-white/20 group-hover:border-brand group-hover:bg-brand transition-all duration-300"></div>
                                </div>

                                {/* Mobile : Ligne verticale à gauche */}
                                <div className="md:hidden absolute left-[9px] top-0 bottom-0 w-[1px] bg-white/10">
                                    {/* Masquer la ligne pour le dernier élément sur mobile pour faire propre */}
                                    {index === steps.length - 1 && <div className="absolute top-8 bottom-0 w-full bg-[#020202]"></div>}
                                </div>
                                {/* Mobile : Point d'ancrage */}
                                <div className="md:hidden shrink-0 w-5 h-5 rounded-full bg-[#020202] border border-white/20 group-hover:border-brand group-hover:bg-brand transition-all duration-300 z-10 mt-1"></div>


                                {/* B. LE CONTENU */}
                                <div className="md:pt-8 md:pr-8">
                                    
                                    {/* En-tête : Numéro & Icône */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-mono text-xs text-brand font-bold">
                                            {step.number}
                                        </span>
                                        <div className="text-white/20 group-hover:text-white transition-colors duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Titre */}
                                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                        {step.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}