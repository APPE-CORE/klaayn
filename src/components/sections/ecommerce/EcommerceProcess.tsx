"use client";

import React from "react";
import { ScanSearch, Smartphone, Code2, Rocket } from "lucide-react";

export default function EcommerceProcess() {
    
    const steps = [
        {
            number: "01",
            title: "Audit Data",
            desc: "Analyse de vos KPIs actuels, heatmaps et concurrents. On identifie les frictions avant de designer.",
            icon: <ScanSearch size={18} />
        },
        {
            number: "02",
            title: "UX Mobile First",
            desc: "Conception de l'interface en priorité pour le mobile. Optimisation du tunnel d'achat et du CRO.",
            icon: <Smartphone size={18} />
        },
        {
            number: "03",
            title: "Dev Liquid",
            desc: "Développement natif Shopify (Liquid). Code propre, sans apps inutiles, optimisé pour la vitesse.",
            icon: <Code2 size={18} />
        },
        {
            number: "04",
            title: "Go Live",
            desc: (
                <>
                    Migration SEO safe, configuration des paiements et formation.{" "}
                    <span className="text-white font-medium">Prêt à scaler.</span>
                </>
            ),
            icon: <Rocket size={18} />
        }
    ];

    return (
        // MODIFICATION ICI : Utilisation de bg-[var(--color-void)] pour lier au CSS global
        <section className="relative w-full bg-[var(--color-void)] py-24 border-b border-white/5 overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 1. HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-lime-400 mb-4 block">
                        // Shopify Pipeline
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Le Protocole.
                    </h2>
                    <p className="text-white/50 font-light text-lg">
                        Un processus linéaire, sans friction, conçu pour la conversion.
                    </p>
                </div>

                {/* 2. LE PROCESS */}
                <div className="relative">
                    
                    {/* Grille : 1 colonne Mobile / 4 colonnes Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex flex-row md:flex-col gap-6 md:gap-0 pb-12 md:pb-0">
                                
                                {/* A. LA LIGNE DE TEMPS (Timeline) */}
                                {/* Desktop : Ligne horizontale en haut */}
                                <div className="hidden md:block w-full h-[1px] bg-white/10 group-hover:bg-lime-500 transition-colors duration-300 relative">
                                    {/* Le Point d'ancrage */}
                                    {/* Note : J'ai aussi passé le fond du point en var(--color-void) */}
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-void)] border border-white/20 group-hover:border-lime-500 group-hover:bg-lime-500 transition-all duration-300"></div>
                                </div>

                                {/* Mobile : Ligne verticale à gauche */}
                                <div className="md:hidden absolute left-[9px] top-0 bottom-0 w-[1px] bg-white/10">
                                    {/* Masque pour le dernier élément : Fond adapté aussi */}
                                    {index === steps.length - 1 && <div className="absolute top-8 bottom-0 w-full bg-[var(--color-void)]"></div>}
                                </div>
                                {/* Mobile : Point d'ancrage */}
                                <div className="md:hidden shrink-0 w-5 h-5 rounded-full bg-[var(--color-void)] border border-white/20 group-hover:border-lime-500 group-hover:bg-lime-500 transition-all duration-300 z-10 mt-1"></div>


                                {/* B. LE CONTENU */}
                                <div className="md:pt-8 md:pr-8">
                                    
                                    {/* En-tête : Numéro & Icône */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-mono text-xs text-lime-400 font-bold">
                                            {step.number}
                                        </span>
                                        <div className="text-white/20 group-hover:text-white transition-colors duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Titre */}
                                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
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