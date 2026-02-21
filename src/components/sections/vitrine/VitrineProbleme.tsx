"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function VitrineProbleme() {
    
    // Style des séparateurs verticaux
    const verticalDivider = "hidden lg:block w-[1px] bg-[var(--color-border)] h-full absolute right-0 top-0";
    
    // Données Vitrine
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
        <section className="relative w-full bg-[var(--color-void)] py-20 overflow-hidden border-b border-[var(--color-border)]">
            
            {/* 1. BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-[var(--color-brand)]/5 blur-[150px] rounded-full mix-blend-screen opacity-20"></div>
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
                            <div className="h-[1px] w-8 bg-[var(--color-brand)]"></div>
                            <span className="text-label-tech text-[var(--color-brand)]">
                                Réalité du Marché
                            </span>
                        </motion.div>
                        
                        <h2 className="text-h2 leading-[1.05] tracking-tight text-[var(--color-txt-main)]">
                            L'amateurisme est <br/>
                           
                            <span 
                                className="inline-block pb-1 pr-1"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'transparent'
                                }}
                            >
                                un risque financier.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pl-12 lg:border-l border-[var(--color-border)] pb-2">
                        <p className="text-body-large leading-relaxed">
                            Vos clients jugent votre entreprise en une fraction de seconde sur l'apparence de votre site. 
                            <span className="text-[var(--color-txt-main)] block mt-1">C'est injuste, mais c'est la réalité des chiffres :</span>
                        </p>
                    </div>
                </div>

                {/* 3. THE DATA STRIP */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full border-t border-b border-[var(--color-border)]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        
                        {stats.map((stat, index) => (
                            <div key={index} className="relative group p-6 lg:p-8 flex flex-col justify-between min-h-[220px] hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-500">
                                
                                {index !== 2 && <div className={verticalDivider}></div>}
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-label-tech text-[var(--color-txt-dim)] group-hover:text-[var(--color-brand)] transition-colors">
                                        Fact_{index + 1}
                                    </span>
                                    <ArrowUpRight className="text-[var(--color-txt-dim)] group-hover:text-[var(--color-txt-main)] transition-colors opacity-0 group-hover:opacity-100" size={14} />
                                </div>

                                <div>
                                    <div className="text-value-box mb-3 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    
                                    <h3 className="text-h4 font-bold text-[var(--color-txt-main)] mb-2">
                                        {stat.label}
                                    </h3>
                                    
                                    <p className="text-xs text-[var(--color-txt-muted)] leading-relaxed max-w-xs mb-4">
                                        {stat.description}
                                    </p>

                                    <div className="pt-4 border-t border-[var(--color-border)]">
                                        <p className="font-[family-name:var(--font-jetbrains)] text-[8px] text-[var(--color-txt-dim)] italic">
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
                        <span className="text-label-tech text-[var(--color-txt-dim)]">Conclusion</span>
                        <span className="text-sm text-[var(--color-txt-main)] font-medium">Ne laissez pas les statistiques jouer contre vous.</span>
                    </div>

                    <div className="w-full md:w-auto">
                        <Button 
                            href="/contact"
                            icon={MessageSquare}
                        >
                            Contre-attaquer
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}