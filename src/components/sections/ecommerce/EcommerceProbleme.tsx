"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function EcommerceProblem() {
    
    const verticalDivider = "hidden lg:block w-[1px] bg-white/10 h-full absolute right-0 top-0";
    
    const stats = [
        {
            value: "-80%",
            label: "Le Mur Mobile",
            description: "8 visiteurs sur 10 sont sur smartphone. Si votre UX mobile est une version 'dégradée' du desktop, vous refusez de vendre à la majorité de votre audience.",
            source: "Source: Statista Mobile Traffic"
        },
        {
            value: "-98%",
            label: "Le Gaspillage",
            description: "Sur 100 clics payés (Ads), 98 repartent sans acheter. Un site qui ne rassure pas ou ne persuade pas immédiatement brûle votre budget publicitaire.",
            source: "Source: WordStream / Google Ads"
        },
        {
            value: "-70%",
            label: "L'Abandon",
            description: "Le taux moyen d'abandon de panier. Une UX mal pensée ou un checkout frictionnel sont les premières causes de cette perte massive.",
            source: "Source: Baymard Institute"
        }
    ];

    return (
        // MODIFICATION ICI : Utilisation de bg-[var(--color-void)] pour lier au CSS global
        <section className="relative w-full bg-[var(--color-void)] py-20 overflow-hidden border-b border-white/5">
            
            {/* 1. BACKGROUND (Vert Lime) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.10] mix-blend-overlay"></div>
                <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-lime-500/5 blur-[150px] rounded-full mix-blend-screen opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 2. HEADER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="h-[1px] w-8 bg-lime-400"></div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-lime-400">
                                Réalité du Marché
                            </span>
                        </motion.div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-medium text-white leading-[1.05] tracking-tight">
                            L'amateurisme est <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-white/50">
                                un risque financier.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pl-12 lg:border-l border-white/10 pb-2">
                        <p className="text-base text-white/50 font-light leading-relaxed">
                            Vos clients ne vous donnent pas de seconde chance.
                            <span className="text-white block mt-1">Chaque friction dans le parcours d'achat paye directement la croissance de vos concurrents :</span>
                        </p>
                    </div>
                </div>

                {/* 3. THE DATA STRIP */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full border-t border-b border-white/10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        
                        {stats.map((stat, index) => (
                            <div key={index} className="relative group p-6 lg:p-8 flex flex-col justify-between min-h-[220px] hover:bg-white/[0.02] transition-colors duration-500">
                                
                                {index !== 2 && <div className={verticalDivider}></div>}
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-lime-400 transition-colors">
                                        Data_{index + 1}
                                    </span>
                                    <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" size={14} />
                                </div>

                                <div>
                                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    
                                    <h3 className="text-base font-bold text-white mb-2">
                                        {stat.label}
                                    </h3>
                                    
                                    <p className="text-xs text-white/50 leading-relaxed max-w-xs mb-4">
                                        {stat.description}
                                    </p>

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

                {/* 4. FOOTER */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Conclusion</span>
                        <span className="text-sm text-white font-medium">Arrêtez de perdre des ventes bêtement.</span>
                    </div>

                    <div className="w-full md:w-auto">
                        <Button 
                            href="/shopify-audit"
                            icon={MessageSquare}
                        >
                            Diagnostiquer ma Boutique
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}