"use client";

import React from "react";
import Link from "next/link"; // AJOUT : Import indispensable pour la navigation interne
import { Check, X, Minus, AlertCircle, ArrowRight } from "lucide-react";

export default function AgenceCompare() {
    return (
        <section className="relative w-full bg-void py-24 px-6 md:px-12 border-t border-white/5">
            
            {/* 1. Header de Section */}
            <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
                <span className="text-brand font-mono text-xs uppercase tracking-widest mb-4 block">
                    // Benchmark
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[0.95]">
                    L'évidence <br/>
                    <span className="text-white/40">mathématique.</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl font-light mx-auto md:mx-0">
                    Pourquoi payer pour les frais de structure d'une agence classique quand vous pouvez investir 100% de votre budget dans l'impact ?
                </p>
            </div>

            {/* 2. LE TABLEAU COMPARATIF */}
            <div className="max-w-7xl mx-auto">
                
                {/* En-têtes de colonnes (Desktop uniquement) */}
                <div className="hidden md:grid grid-cols-12 gap-8 pb-6 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-white/40">
                    <div className="col-span-4 pl-6">Critère</div>
                    <div className="col-span-4 text-left pl-4">Agence Classique</div>
                    <div className="col-span-4 text-left pl-4 text-brand">Klaayn.</div>
                </div>

                {/* --- LIGNE 1 : L'ÉQUIPE --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-xl font-display font-medium text-white">L'Interlocuteur</h3>
                        <p className="text-xs text-white/40 mt-1">Qui gère votre vision ?</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                                <AlertCircle size={16} className="text-white" />
                            </div>
                            <div className="text-sm text-white/80">
                                <span className="block font-medium">Téléphone Arabe</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Commercial → Chef de Projet → Junior</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-brand/5 md:bg-transparent border border-brand/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-brand mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-brand/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand/10 border border-brand/50 text-brand shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-white">
                                <span className="block font-medium text-brand">Architecte Unique</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Direct & Sans filtre</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 2 : LA TECH --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-xl font-display font-medium text-white">Le Moteur</h3>
                        <p className="text-xs text-white/40 mt-1">Quelle infrastructure ?</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                                <Minus size={16} className="text-white" />
                            </div>
                            <div className="text-sm text-white/80">
                                <span className="block font-medium">Wordpress / Divi</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Lourd, Lent, Faillible</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[#ff6b00]/5 md:bg-transparent border border-[#ff6b00]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-[#ff6b00] mb-1">Klaayn</span>
                         <div className="absolute left-0 md:left-auto md:inset-0 bg-[#ff6b00]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/50 text-[#ff6b00] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-white">
                                <span className="block font-medium text-[#ff6b00]">Next.js Native</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Performance Brute (Score 99+)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 3 : LE TEMPS --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-xl font-display font-medium text-white">Vélocité</h3>
                        <p className="text-xs text-white/40 mt-1">Time-to-market</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                                <X size={16} className="text-white" />
                            </div>
                            <div className="text-sm text-white/80">
                                <span className="block font-medium">3 à 6 Mois</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Réunions, Allers-retours...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-[#ff6b00]/5 md:bg-transparent border border-[#ff6b00]/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-[#ff6b00] mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-[#ff6b00]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/50 text-[#ff6b00] shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-white">
                                <span className="block font-medium text-[#ff6b00]">4 à 8 Semaines</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Sprints Intensifs</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE 4 : LE COÛT --- */}
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="col-span-12 md:col-span-4 px-0 md:px-6 mb-2 md:mb-0">
                        <h3 className="text-xl font-display font-medium text-white">Votre Argent</h3>
                        <p className="text-xs text-white/40 mt-1">Où part le budget ?</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none md:pl-4 opacity-80 md:opacity-50 md:grayscale transform-gpu will-change-[filter,opacity] transition-[opacity,filter] duration-500 group-hover:grayscale-0 group-hover:opacity-70">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Standard</span>
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                                <AlertCircle size={16} className="text-white" />
                            </div>
                            <div className="text-sm text-white/80">
                                <span className="block font-medium">Frais de Structure</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Bureaux, RH, Admin...</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 px-4 py-4 md:p-0 bg-brand/5 md:bg-transparent border border-brand/20 md:border-none rounded-lg md:rounded-none md:pl-4 relative transform-gpu">
                        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-brand mb-1">Klaayn</span>
                        <div className="absolute left-0 md:left-auto md:inset-0 bg-brand/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-3 w-full relative z-10">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand/10 border border-brand/50 text-brand shrink-0">
                                <Check size={16} />
                            </div>
                            <div className="text-sm text-white">
                                <span className="block font-medium text-brand">100% Produit</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-60">Impact Pur</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CTA PRINCIPAL INTÉGRÉ --- */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                    
                    {/* Texte de conviction */}
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-display font-bold text-white mb-1">
                            Le calcul est vite fait.
                        </h4>
                        <p className="text-white/40 font-light">
                            Ne perdez pas 6 mois. Lancez votre sprint maintenant.
                        </p>
                    </div>

                    {/* BOUTON PRINCIPAL (Link vers /contact) */}
                    <Link 
                        href="/contact" 
                        className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-500 border border-white/20 bg-white/10 text-white hover:bg-[#cc5500] hover:border-[#ff6b00] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        
                        <span className="relative z-10 uppercase tracking-wide text-sm">Réserver un Audit</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                    </Link>

                </div>

            </div>
        </section>
    );
}