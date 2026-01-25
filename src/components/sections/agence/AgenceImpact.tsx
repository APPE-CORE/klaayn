"use client";

import React from "react";
// J'ai retiré framer-motion car il n'est plus nécessaire pour l'entrée
import { Zap, Crown, Terminal, BarChart3, Lock, DraftingCompass } from "lucide-react";

export default function AgenceImpact() {
    return (
        <section className="relative w-full bg-void py-24 px-6 md:px-12 border-t border-white/5">
            
            {/* Titre de Section */}
            <div className="max-w-7xl mx-auto mb-16 md:mb-20">
                <span className="text-brand font-mono text-xs uppercase tracking-widest mb-4 block">
                    // Protocole
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[0.95] md:leading-[0.9]">
                    Une agence d'un <br/>
                    <span className="text-white/40">nouveau genre.</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl font-light">
                    Fini les chaînes de commandement lentes. Ici, la distance entre la stratégie et l'exécution est nulle.
                </p>
            </div>

            {/* --- LA BENTO GRID (Statique) --- */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(240px,auto)]">

                    {/* 1. CARTE : ACCÈS DIRECT */}
                    <div className="group md:col-span-2 md:row-span-2 relative bg-[#080808] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/40 transition-colors duration-300">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white transition-all duration-300">
                                <Crown size={24} />
                            </div>
                            <h3 className="text-3xl font-display font-medium text-white mb-4 transition-colors duration-300">Accès Direct (Root).</h3>
                            <p className="text-white/50 leading-relaxed text-lg transition-colors">
                                Pas de chefs de projet. Pas de "téléphone arabe". Vous collaborez directement avec l'architecte du système. <br className="hidden md:block"/>
                                <strong>Résultat :</strong> Une vision pure, sans distorsion.
                            </p>
                        </div>
                        
                        {/* Terminal */}
                        <div className="mt-8 w-full bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-xs opacity-60 group-hover:opacity-100 group-hover:border-white/20 transition-all duration-500">
                            <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-1 text-white/70">
                                <p><span className="text-white/40">➜</span> <span className="text-white/40">user@client:</span> connect --direct klaayn_core</p>
                                <p className="text-white/60">✓ Connection established (Latency: 0ms)</p>
                                <p><span className="text-white/40">➜</span> <span className="text-white/40">status:</span> <span className="text-white">NO_MIDDLEMAN_DETECTED</span></p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. CARTE : SUR-MESURE */}
                    <div className="group md:col-span-1 md:row-span-2 relative bg-[#080808] border border-white/10 md:border-brand/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:border-brand/80 transition-all duration-500">
                        <div className="absolute inset-0 opacity-10" 
                             style={{ backgroundImage: `linear-gradient(rgba(124, 31, 172, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 31, 172, 0.5) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <DraftingCompass size={24} className="text-white/40 md:text-brand group-hover:text-brand transition-colors duration-300" />
                                <span className="text-[10px] font-mono border border-white/10 md:border-brand/30 px-2 py-1 rounded-full text-white/50 md:text-brand/80 group-hover:border-brand/30 group-hover:text-brand/80 transition-colors">100% CUSTOM</span>
                            </div>
                            <h3 className="text-xl font-display font-medium text-white md:text-brand group-hover:text-brand transition-colors">Sur-Mesure</h3>
                        </div>

                        <div className="py-6 flex justify-center items-center relative">
                            <div className="w-20 h-20 border border-white/10 md:border-brand/30 group-hover:border-brand/30 rounded-full flex items-center justify-center relative transition-colors duration-500">
                                <div className="absolute w-full h-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 rotate-45 transition-colors"></div>
                                <div className="absolute w-full h-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 -rotate-45 transition-colors"></div>
                                <div className="w-2 h-2 bg-white/20 md:bg-brand group-hover:bg-brand rounded-full z-10 md:shadow-[0_0_10px_var(--color-brand)] group-hover:shadow-[0_0_10px_var(--color-brand)] transition-all"></div>
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-between px-4">
                                <div className="h-2 w-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 transition-colors"></div>
                                <div className="h-[1px] flex-1 bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 mt-2 transition-colors"></div>
                                <div className="h-2 w-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 transition-colors"></div>
                            </div>
                        </div>

                        <p className="text-sm text-white/50 leading-relaxed relative z-10">
                            Refus total du template. Chaque pixel et chaque ligne de code sont dessinés spécifiquement pour votre marque.
                        </p>
                    </div>

                    {/* 3. CARTE : VITESSE */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[#080808] border border-white/10 md:border-[#ff6b00]/80 rounded-2xl p-6 overflow-hidden hover:border-[#ff6b00]/80 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-center justify-between mb-4">
                            <Zap size={24} className="text-white/40 md:text-[#ff6b00] md:fill-[#ff6b00]/20 group-hover:text-[#ff6b00] group-hover:fill-[#ff6b00]/20 transition-all duration-300" />
                            <span className="text-white/20 md:text-[#ff6b00] group-hover:text-[#ff6b00] font-mono text-xs transition-colors">⚡ FAST</span>
                        </div>
                        <h3 className="text-lg font-display font-medium text-white md:text-[#ff6b00] group-hover:text-[#ff6b00] mb-2 transition-colors">Vélocité</h3>
                        <p className="text-xs text-white/50">
                            Cycles de sprint courts. De l'idée à la production en un temps record.
                        </p>
                    </div>

                    {/* 4. CARTE : STACK MODERNE */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[#080808] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/40 transition-all duration-300">
                         <div className="flex items-center justify-between mb-4">
                            <Terminal size={24} className="text-white/40 transition-colors duration-300" />
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                            </div>
                        </div>
                        <h3 className="text-lg font-display font-medium text-white mb-2 transition-colors">Stack Moderne</h3>
                        <p className="text-xs text-white/50">
                            Next.js, TypeScript. Une dette technique inexistante dès le jour 1.
                        </p>
                    </div>

                    {/* 5. CARTE : OBSESSION ROI */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[#080808] border border-white/10 md:border-[#ff6b00]/80 rounded-2xl p-6 flex flex-col justify-center overflow-hidden hover:border-[#ff6b00]/80 transition-all duration-500">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#ff6b00]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex items-center gap-6">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white md:bg-[#ff6b00]/10 md:text-[#ff6b00] md:border-[#ff6b00]/50 group-hover:bg-[#ff6b00]/10 group-hover:text-[#ff6b00] group-hover:border-[#ff6b00]/50 transition-all duration-300">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-medium text-white md:text-[#ff6b00] group-hover:text-[#ff6b00] mb-1 transition-colors">Obsession ROI</h3>
                                <p className="text-sm text-white/50 max-w-sm">
                                    Nous ne faisons pas du "joli". Nous construisons des actifs digitaux conçus pour convertir, performer et dominer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. CARTE : PROPRIÉTÉ TOTALE */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[#080808] border border-white/10 rounded-2xl p-6 flex flex-col justify-center overflow-hidden hover:border-white/40 transition-all duration-300">
                         <div className="relative z-10 flex items-center gap-6">
                            <div className="p-3 rounded-lg bg-white/5 text-white border border-white/10 transition-all duration-300">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-medium text-white mb-1 transition-colors">Propriété Totale</h3>
                                <p className="text-sm text-white/50 max-w-sm">
                                    Pas de licence cachée. Pas de "vendor lock-in". Le code est à vous, documenté et transférable.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}