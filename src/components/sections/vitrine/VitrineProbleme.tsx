"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function VitrineProblem() {
    
    // Style des séparateurs verticaux (Lignes fines)
    const verticalDivider = "hidden lg:block w-[1px] bg-white/10 h-full absolute right-0 top-0";
    
    // Données simplifiées et impactantes (Business First)
    const stats = [
        {
            value: "0.05s",
            label: "Le Verdict",
            description: "Le temps exact qu'il faut à un visiteur pour décider si vous êtes un pro ou un amateur.",
            source: "Source: Google Research"
        },
        {
            value: "75%",
            label: "La Confiance",
            description: "La part de votre crédibilité qui repose uniquement sur le design de votre site, avant même de lire un mot.",
            source: "Source: Stanford Web Credibility"
        },
        {
            value: "x3",
            label: "Les Revenus",
            description: "Le gain de conversion moyen constaté en passant d'une vitrine standard à une expérience premium.",
            source: "Source: Forrester Research"
        }
    ];

    return (
        // CORRECTION : Suppression du 'px-6' sur la section pour éviter le double padding ou le décalage
        <section className="relative w-full bg-[#020202] py-20 overflow-hidden border-b border-white/5">
            
            {/* 1. BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.10] mix-blend-overlay"></div>
                <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-brand/5 blur-[150px] rounded-full mix-blend-screen opacity-20"></div>
            </div>

            {/* CORRECTION : Ajout du 'px-6' ICI, sur le conteneur, comme dans votre Footer */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 2. HEADER : Compact & Direct */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="h-[1px] w-8 bg-brand"></div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                                Réalité du Marché
                            </span>
                        </motion.div>
                        
                        {/* H2 : Titre principal de la section */}
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-medium text-white leading-[1.05] tracking-tight">
                            L'amateurisme est <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-400 to-white/50">
                                un risque financier.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pl-12 lg:border-l border-white/10 pb-2">
                        <p className="text-base text-white/50 font-light leading-relaxed">
                            Vos clients jugent votre entreprise en une fraction de seconde sur l'apparence de votre site. 
                            <span className="text-white block mt-1">C'est injuste, mais c'est la réalité des chiffres :</span>
                        </p>
                    </div>
                </div>

                {/* 3. THE DATA STRIP (Hauteur Réduite) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full border-t border-b border-white/10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        
                        {stats.map((stat, index) => (
                            <div key={index} className="relative group p-6 lg:p-8 flex flex-col justify-between min-h-[220px] hover:bg-white/[0.02] transition-colors duration-500">
                                
                                {/* Séparateur Vertical */}
                                {index !== 2 && <div className={verticalDivider}></div>}
                                
                                {/* Header : Label */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-brand transition-colors">
                                        Fact_{index + 1}
                                    </span>
                                    <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" size={14} />
                                </div>

                                {/* Le Chiffre & Texte */}
                                <div>
                                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    
                                    {/* CORRECTION SÉMANTIQUE ICI : Remplacement de h4 par h3 */}
                                    {/* Cela respecte l'ordre : h2 (titre section) -> h3 (sous-titres) */}
                                    <h3 className="text-base font-bold text-white mb-2">
                                        {stat.label}
                                    </h3>
                                    
                                    <p className="text-xs text-white/50 leading-relaxed max-w-xs mb-4">
                                        {stat.description}
                                    </p>

                                    {/* La Source (Discrète) */}
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="font-mono text-[8px] text-white/20 italic">
                                            {stat.source}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </motion.div>

                {/* 4. FOOTER / CALL TO ACTION */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Conclusion</span>
                        <span className="text-sm text-white font-medium">Ne laissez pas les statistiques jouer contre vous.</span>
                    </div>

                    <div className="w-full md:w-auto">
                        <Button 
                            href="/contact"
                            icon={MessageSquare} // Icône Message demandée
                        >
                            Contre-attaquer
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}