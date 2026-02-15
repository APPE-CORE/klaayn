"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function VitrineAnatomy() {

    return (
        <section className="relative w-full bg-[var(--color-contrast)] py-24 border-b border-[var(--color-border)]">
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 1. HEADER */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-label-tech text-[var(--color-brand)] mb-4 block">
                        // Benchmark Technique
                    </span>
                    
                    <h2 className="text-h2 mb-6 text-[var(--color-txt-main)]">
                        Standard vs. <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[var(--color-brand)]">Sur-Mesure.</span>
                    </h2>
                    
                    <p className="text-body-large max-w-2xl mx-auto">
                        La différence entre une dépense et un investissement réside dans la performance brute. Comparons ce qui est comparable.
                    </p>
                </div>

                {/* 2. LE TABLEAU COMPARATIF (Top 3 Critères) */}
                <div className="max-w-7xl mx-auto mb-24 border-t border-[var(--color-border)]">
                    
                    {/* En-têtes (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-8 py-6 border-b border-[var(--color-border)] text-[var(--color-txt-dim)] bg-[var(--color-txt-main)]/[0.01]">
                        <div className="col-span-4 pl-6 text-label-tech">Critère</div>
                        <div className="col-span-4 text-left pl-4 text-label-tech">Standard Market</div>
                        <div className="col-span-4 text-left pl-4 text-label-bold text-[var(--color-brand)]">Klaayn Architecture</div>
                    </div>

                    {/* --- 1. VITESSE --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            {/* SEO: H3 pour la structure / STYLE: .text-h4 pour garder la taille visuelle d'origine (~20px) */}
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Temps de Chargement</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Rétention utilisateur</p>
                        </div>
                        {/* Standard */}
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">2.5s - 4.0s</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Risque de rebond élevé</span>
                            </div>
                        </div>
                        {/* Klaayn */}
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-brand)]/5 md:bg-transparent border border-[var(--color-brand)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-[var(--color-brand)] mb-1">Klaayn</span>
                            <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-brand)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-[var(--color-brand)]">Inférieur à 0.5s</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Chargement Instantané</span>
                            </div>
                        </div>
                    </div>

                    {/* --- 2. SEO --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Score Google (SEO)</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Visibilité organique</p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">50 - 70 / 100</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Pénalisé par l'algorithme</span>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-brand)]/5 md:bg-transparent border border-[var(--color-brand)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-[var(--color-brand)] mb-1">Klaayn</span>
                             <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-brand)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-[var(--color-brand)]">98 - 100 / 100</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Favorisé par Google</span>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. SÉCURITÉ --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Cybersécurité</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Fiabilité long terme</p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Vulnérable (Plugins)</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Cible facile pour bots</span>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-brand)]/5 md:bg-transparent border border-[var(--color-brand)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-[var(--color-brand)] mb-1">Klaayn</span>
                             <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-brand)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-[var(--color-brand)]">Inviolable (Static)</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Architecture découplée</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. LE GRAPHIQUE VISUEL */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-16 items-center">
                    
                    {/* A. TEXTE */}
                    <div className="order-1 lg:col-start-1">
                        {/* H3 pour le SEO, taille h3 du CSS (~24px) parfait ici */}
                        <h4 className="text-h3 mb-2 text-[var(--color-txt-main)]">Google Lighthouse Score</h4>
                        <p className="text-body text-[var(--color-txt-muted)] leading-relaxed mb-4">
                            Google mesure la qualité de votre site sur 100. <br/>
                            Ce score détermine votre coût d'acquisition publicitaire (CPC) et votre classement naturel (SEO).
                        </p>
                    </div>

                    {/* B. HUD Graphique */}
                    <div className="order-2 lg:col-start-2 lg:row-span-2 p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-void)] relative overflow-hidden">
                        
                        {/* Décoration Technique */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[var(--color-border)] to-transparent"></div>

                        {/* BARRE 1 : Moyenne Industrie */}
                        <div className="mb-10 opacity-50 grayscale">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-label-tech text-[var(--color-txt-muted)]">Moyenne Industrie</span>
                                <span className="text-xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-txt-muted)]">45<span className="text-sm opacity-50">/100</span></span>
                            </div>
                            <div className="w-full h-[2px] bg-[var(--color-border)]">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "45%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="h-full bg-[var(--color-txt-muted)] relative"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-[var(--color-txt-muted)]"></div>
                                </motion.div>
                            </div>
                        </div>

                        {/* BARRE 2 : KLAAYN */}
                        <div className="relative">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-label-bold text-[var(--color-brand)]">Klaayn Standard</span>
                                <span className="text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-txt-main)]">99<span className="text-lg text-[var(--color-brand)] opacity-80">/100</span></span>
                            </div>
                            
                            <div className="w-full h-1 bg-[var(--color-surface)] relative">
                                <div className="absolute inset-0 w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,white_4px,white_5px)]"></div>
                                
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "99%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                                    className="h-full bg-[var(--color-brand)] relative z-10 shadow-[0_0_20px_var(--color-brand-glow)]"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[var(--color-txt-main)] shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                </motion.div>
                            </div>

                            <div className="flex justify-between mt-3">
                                {[0, 20, 40, 60, 80, 100].map((tick) => (
                                    <div key={tick} className="flex flex-col items-center gap-2">
                                        <div className={`w-[1px] h-2 ${tick === 100 ? 'bg-[var(--color-brand)] h-3' : 'bg-[var(--color-border)]'}`}></div>
                                        <span className={`text-[9px] font-mono ${tick === 100 ? 'text-[var(--color-brand)] font-bold' : 'text-[var(--color-txt-dim)]'}`}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* C. CTA */}
                    <div className="order-3 lg:col-start-1 lg:mt-[-1rem]">
                        <Button href="/contact" icon={ArrowRight}>
                            Obtenir cette performance
                        </Button>
                    </div>

                </div>

            </div>
        </section>
    );
}