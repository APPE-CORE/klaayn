"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function EcommerceAnatomy() {

    return (
        <section className="relative w-full bg-[var(--color-contrast)] py-24 border-b border-[var(--color-border)]">
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 1. HEADER */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-label-tech text-lime-400 mb-4 block">
                        // Benchmark Shopify
                    </span>
                    
                    <h2 className="text-h2 mb-6 text-[var(--color-txt-main)]">
                        Thème Public vs. <br className="md:hidden" />
                        <span 
                            className="inline-block pb-1 pr-1"
                            style={{
                                backgroundImage: 'linear-gradient(to right, var(--color-main-ecom), var(--color-accent-ecom)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent'
                            }}
                        >
                            Custom.
                        </span>
                    </h2>
                    
                    <p className="text-body-large max-w-2xl mx-auto">
                        La plupart des boutiques Shopify s'effondrent sous le poids des applications. Nous construisons des moteurs de vente natifs et légers.
                    </p>
                </div>

                {/* 2. LE TABLEAU COMPARATIF */}
                <div className="max-w-7xl mx-auto mb-24 border-t border-[var(--color-border)]">
                    
                    {/* En-têtes (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-8 py-6 border-b border-[var(--color-border)] text-[var(--color-txt-dim)] bg-[var(--color-txt-main)]/[0.01]">
                        <div className="col-span-4 pl-6 text-label-tech">Critère</div>
                        <div className="col-span-4 text-left pl-4 text-label-tech">Thème Standard + Apps</div>
                        <div className="col-span-4 text-left pl-4 text-label-bold text-lime-400">Klaayn E-com</div>
                    </div>

                    {/* --- 1. ARCHITECTURE CODE --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            {/* Titre Row : H4 (~20px) */}
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Code & Dépendances</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Stabilité technique</p>
                        </div>
                        {/* Standard */}
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">15+ Apps / Plugins</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Scripts JS bloquants</span>
                            </div>
                        </div>
                        {/* Klaayn */}
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-lime-500/10 md:bg-transparent border border-lime-500/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-lime-400 mb-1">Klaayn</span>
                             <div className="absolute left-0 md:left-auto md:inset-0 bg-lime-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-lime-400">100% Natif Liquid</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Zéro App inutile</span>
                            </div>
                        </div>
                    </div>

                    {/* --- 2. CONVERSION (UX) --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Tunnel d'Achat</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Taux de conversion</p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Générique & Frictionnel</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Panier moyen faible</span>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-lime-500/10 md:bg-transparent border border-lime-500/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-lime-400 mb-1">Klaayn</span>
                             <div className="absolute left-0 md:left-auto md:inset-0 bg-lime-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-lime-400">Optimisé CRO</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Upsell natif & One-click</span>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. DESIGN --- */}
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                        <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                            <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Identité Visuelle</h3>
                            <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Branding</p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Template "Déjà vu"</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Aucune différenciation</span>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-lime-500/10 md:bg-transparent border border-lime-500/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                            <span className="md:hidden text-label-bold text-lime-400 mb-1">Klaayn</span>
                             <div className="absolute left-0 md:left-auto md:inset-0 bg-lime-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                            <div className="text-sm text-[var(--color-txt-main)] relative z-10">
                                <span className="block font-medium text-lime-400">Direction Artistique</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Unique & Mémorable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. LE GRAPHIQUE VISUEL */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-16 items-center">
                    
                    {/* A. TEXTE */}
                    <div className="order-1 lg:col-start-1">
                        <h4 className="text-h3 mb-2 text-[var(--color-txt-main)]">Google PageSpeed Mobile</h4>
                        <p className="text-body text-[var(--color-txt-muted)] leading-relaxed mb-4">
                            Sur Shopify, le mobile est roi. Un score faible ruine vos campagnes Facebook/TikTok Ads car l'algorithme vous fait payer le clic plus cher.
                        </p>
                    </div>

                    {/* B. HUD Graphique */}
                    <div className="order-2 lg:col-start-2 lg:row-span-2 p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-void)] relative overflow-hidden">
                        
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[var(--color-border)] to-transparent"></div>

                        {/* BARRE 1 : Moyenne Shopify */}
                        <div className="mb-10 opacity-50 grayscale">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-label-tech text-[var(--color-txt-muted)]">Moyenne Shopify</span>
                                <span className="text-xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-txt-muted)]">32<span className="text-sm opacity-50">/100</span></span>
                            </div>
                            <div className="w-full h-[2px] bg-[var(--color-border)]">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "32%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="h-full bg-[var(--color-txt-muted)] relative"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-[var(--color-txt-muted)]"></div>
                                </motion.div>
                            </div>
                        </div>

                        {/* BARRE 2 : KLAAYN E-COM */}
                        <div className="relative">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-label-bold text-lime-400">Klaayn E-com</span>
                                <span className="text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-txt-main)]">96<span className="text-lg text-lime-400 opacity-80">/100</span></span>
                            </div>
                            
                            <div className="w-full h-1 bg-[var(--color-surface)] relative">
                                <div className="absolute inset-0 w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,white_4px,white_5px)]"></div>
                                
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "96%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                                    className="h-full bg-lime-500 relative z-10 shadow-[0_0_20px_rgba(132,204,22,0.5)]"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[var(--color-txt-main)] shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                </motion.div>
                            </div>

                            <div className="flex justify-between mt-3">
                                {[0, 20, 40, 60, 80, 100].map((tick) => (
                                    <div key={tick} className="flex flex-col items-center gap-2">
                                        <div className={`w-[1px] h-2 ${tick === 100 ? 'bg-lime-500 h-3' : 'bg-[var(--color-border)]'}`}></div>
                                        <span className={`text-[9px] font-mono ${tick === 100 ? 'text-lime-500 font-bold' : 'text-[var(--color-txt-dim)]'}`}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* C. CTA */}
                    <div className="order-3 lg:col-start-1 lg:mt-[-1rem]">
                        <Button href="/contact" icon={ArrowRight}>
                            Auditer mon score
                        </Button>
                    </div>

                </div>

            </div>
        </section>
    );
}