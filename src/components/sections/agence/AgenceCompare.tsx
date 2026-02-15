"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Minus, AlertCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AgenceCompare() {
    return (
        <section className="relative w-full bg-[var(--color-contrast)] py-24 border-b border-[var(--color-border)]">
            
            {/* 1. Header de Section */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
                <span className="text-label-tech text-[var(--color-brand)] mb-4 block">
                    // Benchmark
                </span>
                
                <h2 className="text-h2 text-[var(--color-txt-main)] mb-6 leading-[0.95]">
                    L'évidence <br/>
                    {/* SAFARI PATCH : Inline Styles pour le dégradé Brand -> Action -> White */}
                    <span 
                        className="inline-block pb-1 pr-1"
                        style={{
                            backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action), #ffffff)', 
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'
                        }}
                    >
                        mathématique.
                    </span>
                </h2>
                
                <p className="text-body-large max-w-2xl mx-auto md:mx-0">
                    Pourquoi payer pour les frais de structure d'une agence classique quand vous pouvez investir 100% de votre budget dans l'impact ?
                </p>
            </div>

            {/* 2. LE TABLEAU COMPARATIF */}
            <div className="max-w-7xl mx-auto px-6 border-t border-[var(--color-border)]">
                
                {/* En-têtes de colonnes (Desktop uniquement) */}
                <div className="hidden md:grid grid-cols-12 gap-8 py-6 border-b border-[var(--color-border)] text-[var(--color-txt-dim)] bg-[var(--color-txt-main)]/[0.01]">
                    <div className="col-span-4 pl-6 text-label-tech">Critère</div>
                    <div className="col-span-4 text-left pl-4 text-label-tech">Agence Classique</div>
                    <div className="col-span-4 text-left pl-4 text-label-bold text-[var(--color-brand)]">Klaayn.</div>
                </div>

                {/* --- LIGNE 1 : L'ÉQUIPE --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">L'Interlocuteur</h3>
                        <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Qui gère votre vision ?</p>
                    </div>
                    {/* Standard */}
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                                <AlertCircle size={16} className="text-[var(--color-txt-muted)]" />
                            </div>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Téléphone Arabe</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Commercial → Chef de Projet → Junior</span>
                            </div>
                        </div>
                    </div>
                    {/* Klaayn */}
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-brand)]/5 md:bg-transparent border border-[var(--color-brand)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-label-bold text-[var(--color-brand)] mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-brand)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/50 text-[var(--color-brand)] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-[var(--color-txt-main)]">
                                <span className="block font-medium text-[var(--color-brand)]">Architecte Unique</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Direct & Sans filtre</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 2 : LA TECH --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Le Moteur</h3>
                        <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Quelle infrastructure ?</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                                <Minus size={16} className="text-[var(--color-txt-muted)]" />
                            </div>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Wordpress / Divi</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Lourd, Lent, Faillible</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-action)]/5 md:bg-transparent border border-[var(--color-action)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-label-bold text-[var(--color-action)] mb-1">Klaayn</span>
                         <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-action)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-action)]/10 border border-[var(--color-action)]/50 text-[var(--color-action)] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-[var(--color-txt-main)]">
                                <span className="block font-medium text-[var(--color-action)]">Next.js Native</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Performance Brute (Score 99+)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 3 : LE TEMPS --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Vélocité</h3>
                        <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Time-to-market</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                                <X size={16} className="text-[var(--color-txt-muted)]" />
                            </div>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">3 à 6 Mois</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Réunions, Allers-retours...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-action)]/5 md:bg-transparent border border-[var(--color-action)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-label-bold text-[var(--color-action)] mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-action)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-action)]/10 border border-[var(--color-action)]/50 text-[var(--color-action)] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-[var(--color-txt-main)]">
                                <span className="block font-medium text-[var(--color-action)]">4 à 8 Semaines</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Sprints Intensifs</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 4 : LE COÛT --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-[var(--color-border)] items-start md:items-center hover:bg-[var(--color-txt-main)]/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-h4 font-medium text-[var(--color-txt-main)]">Votre Argent</h3>
                        <p className="text-body-sm text-[var(--color-txt-dim)] mt-1">Où part le budget ?</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-surface)] md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-label-tech text-[var(--color-txt-dim)] mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                                <AlertCircle size={16} className="text-[var(--color-txt-muted)]" />
                            </div>
                            <div className="text-sm text-[var(--color-txt-muted)]">
                                <span className="block font-medium">Frais de Structure</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Bureaux, RH, Admin...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[var(--color-brand)]/5 md:bg-transparent border border-[var(--color-brand)]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-label-bold text-[var(--color-brand)] mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-[var(--color-brand)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/50 text-[var(--color-brand)] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-[var(--color-txt-main)]">
                                <span className="block font-medium text-[var(--color-brand)]">100% Produit</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Impact Pur</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CTA PRINCIPAL INTÉGRÉ --- */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/[0.4]">
                    
                    {/* Texte de conviction */}
                    <div className="text-center md:text-left">
                        <h4 className="text-h3 font-bold text-[var(--color-txt-main)] mb-1">
                            Le calcul est vite fait.
                        </h4>
                        <p className="text-body-sm text-[var(--color-txt-muted)]">
                            Ne perdez pas 6 mois. Lancez votre sprint maintenant.
                        </p>
                    </div>

                    {/* BOUTON PRINCIPAL */}
                    <Button 
                        href="/contact" 
                        icon={ArrowRight}
                    >
                        Réserver un Audit
                    </Button>

                </div>

            </div>
        </section>
    );
}