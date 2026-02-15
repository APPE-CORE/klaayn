"use client";

import { Zap, Crown, Terminal, BarChart3, Lock, DraftingCompass } from "lucide-react";

export default function AgenceImpact() {
    return (
        <section className="relative w-full bg-[var(--color-contrast)] py-24 border-b border-[var(--color-border)]">
            
            {/* Titre de Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-16">
                <span className="text-label-tech text-[var(--color-brand)] mb-4 block">
                    // Protocole
                </span>
                <h2 className="text-h2 text-[var(--color-txt-main)] mb-8 leading-[0.95] md:leading-[0.9]">
                    Une agence d'un <br/>
                    <span className="text-[var(--color-txt-dim)]">nouveau genre.</span>
                </h2>
                <p className="text-body-large max-w-2xl">
                    Fini les chaînes de commandement lentes. Ici, la distance entre la stratégie et l'exécution est nulle.
                </p>
            </div>

            {/* --- LA BENTO GRID (Compactée Verticalement) --- */}
            <div className="max-w-7xl mx-auto px-6">
                {/* GRID SYSTEM */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* 1. CARTE : ACCÈS DIRECT (Root) */}
                    <div className="group md:col-span-2 md:row-span-2 relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300">
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-btn-sec-bg)] border border-[var(--color-border)] flex items-center justify-center mb-4 text-[var(--color-txt-main)] transition-all duration-300">
                                <Crown size={20} />
                            </div>
                            <h3 className="text-h3 text-[var(--color-txt-main)] mb-2 transition-colors duration-300">Accès Direct (Root).</h3>
                            <p className="text-body-sm text-[var(--color-txt-muted)] leading-snug transition-colors">
                                Pas de chefs de projet. Pas de "téléphone arabe". Vous collaborez directement avec l'architecte du système. <br className="hidden md:block"/>
                                <strong className="text-[var(--color-txt-main)]/70">Résultat :</strong> Une vision pure, sans distorsion.
                            </p>
                        </div>
                        
                        {/* Terminal */}
                        <div className="mt-4 w-full bg-[var(--color-void)] border border-[var(--color-border)] rounded-lg p-3 font-[family-name:var(--font-jetbrains)] text-[10px] opacity-60 group-hover:opacity-100 group-hover:border-[var(--color-border)] transition-all duration-500">
                            <div className="flex gap-1.5 mb-2 border-b border-[var(--color-border)] pb-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-0.5 text-[var(--color-txt-muted)] leading-tight">
                                <p><span className="text-[var(--color-txt-dim)]">➜</span> <span className="text-[var(--color-txt-dim)]">user:</span> connect --direct core</p>
                                <p className="text-[var(--color-txt-main)]/60">✓ Connected (0ms)</p>
                                <p><span className="text-[var(--color-txt-dim)]">➜</span> <span className="text-[var(--color-txt-dim)]">status:</span> <span className="text-[var(--color-txt-main)]">NO_MIDDLEMAN</span></p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. CARTE : SUR-MESURE */}
                    <div className="group md:col-span-1 md:row-span-2 relative bg-[var(--color-surface)] border border-[var(--color-border)] md:border-[var(--color-brand)]/80 rounded-[var(--radius-card)] p-5 flex flex-col justify-between overflow-hidden hover:border-[var(--color-brand)]/80 transition-all duration-500">
                        <div className="absolute inset-0 opacity-10" 
                             style={{ backgroundImage: `linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[var(--color-brand)]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <DraftingCompass size={20} className="text-[var(--color-txt-muted)] md:text-[var(--color-brand)] group-hover:text-[var(--color-brand)] transition-colors duration-300" />
                                <span className="text-label-tech border border-[var(--color-border)] md:border-[var(--color-brand)]/30 px-1.5 py-0.5 rounded-full text-[var(--color-txt-muted)] md:text-[var(--color-brand)]/80 group-hover:border-[var(--color-brand)]/30 group-hover:text-[var(--color-brand)]/80 transition-colors">100% CUSTOM</span>
                            </div>
                            <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] md:text-[var(--color-brand)] group-hover:text-[var(--color-brand)] transition-colors">Sur-Mesure</h3>
                        </div>

                        {/* Graphique */}
                        <div className="py-2 flex justify-center items-center relative">
                            <div className="w-14 h-14 border border-[var(--color-border)] md:border-[var(--color-brand)]/30 group-hover:border-[var(--color-brand)]/30 rounded-full flex items-center justify-center relative transition-colors duration-500">
                                <div className="absolute w-full h-[1px] bg-[var(--color-border)] md:bg-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand)]/30 rotate-45 transition-colors"></div>
                                <div className="absolute w-full h-[1px] bg-[var(--color-border)] md:bg-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand)]/30 -rotate-45 transition-colors"></div>
                                <div className="w-1.5 h-1.5 bg-[var(--color-txt-dim)] md:bg-[var(--color-brand)] group-hover:bg-[var(--color-brand)] rounded-full z-10 md:shadow-[0_0_10px_var(--color-brand)] group-hover:shadow-[0_0_10px_var(--color-brand)] transition-all"></div>
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-between px-2">
                                <div className="h-1.5 w-[1px] bg-[var(--color-border)] md:bg-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand)]/30 transition-colors"></div>
                                <div className="h-[1px] flex-1 bg-[var(--color-border)] md:bg-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand)]/30 mt-1.5 transition-colors"></div>
                                <div className="h-1.5 w-[1px] bg-[var(--color-border)] md:bg-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand)]/30 transition-colors"></div>
                            </div>
                        </div>

                        <p className="text-body-sm text-[var(--color-txt-muted)] leading-relaxed relative z-10">
                            Refus total du template. Chaque pixel est dessiné spécifiquement pour votre marque.
                        </p>
                    </div>

                    {/* 3. CARTE : VITESSE */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[var(--color-surface)] border border-[var(--color-border)] md:border-[var(--color-action)]/80 rounded-[var(--radius-card)] p-5 overflow-hidden hover:border-[var(--color-action)]/80 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-action)]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-center justify-between mb-2">
                            <Zap size={20} className="text-[var(--color-txt-muted)] md:text-[var(--color-action)] md:fill-[var(--color-action)]/20 group-hover:text-[var(--color-action)] group-hover:fill-[var(--color-action)]/20 transition-all duration-300" />
                            <span className="text-[var(--color-txt-dim)] md:text-[var(--color-action)] group-hover:text-[var(--color-action)] text-label-tech transition-colors">⚡ FAST</span>
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] md:text-[var(--color-action)] group-hover:text-[var(--color-action)] mb-1 transition-colors">Vélocité</h3>
                        <p className="text-body-sm text-[var(--color-txt-muted)] leading-snug">
                            Cycles de sprint courts. De l'idée à la production en un temps record.
                        </p>
                    </div>

                    {/* 4. CARTE : STACK MODERNE */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5 overflow-hidden transition-all duration-300">
                         <div className="flex items-center justify-between mb-2">
                            <Terminal size={20} className="text-[var(--color-txt-muted)] transition-colors duration-300" />
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-[var(--color-txt-dim)]"></div>
                                <div className="w-1 h-1 rounded-full bg-[var(--color-txt-dim)]"></div>
                            </div>
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] mb-1 transition-colors">Stack Moderne</h3>
                        <p className="text-body-sm text-[var(--color-txt-muted)] leading-snug">
                            Next.js, TypeScript. Une dette technique inexistante dès le jour 1.
                        </p>
                    </div>

                    {/* 5. CARTE : OBSESSION ROI */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[var(--color-surface)] border border-[var(--color-border)] md:border-[var(--color-action)]/80 rounded-[var(--radius-card)] p-5 flex flex-col justify-center overflow-hidden hover:border-[var(--color-action)]/80 transition-all duration-500">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[var(--color-action)]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-[var(--color-btn-sec-bg)] border border-[var(--color-border)] text-[var(--color-txt-main)] md:bg-[var(--color-action)]/10 md:text-[var(--color-action)] md:border-[var(--color-action)]/50 group-hover:bg-[var(--color-action)]/10 group-hover:text-[var(--color-action)] group-hover:border-[var(--color-action)]/50 transition-all duration-300 shrink-0">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] md:text-[var(--color-action)] group-hover:text-[var(--color-action)] mb-0.5 transition-colors">Obsession ROI</h3>
                                <p className="text-body-sm text-[var(--color-txt-muted)] max-w-sm leading-snug">
                                    Nous ne faisons pas du "joli". Nous construisons des actifs digitaux conçus pour convertir, performer et dominer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. CARTE : PROPRIÉTÉ TOTALE */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5 flex flex-col justify-center overflow-hidden transition-all duration-300">
                         <div className="relative z-10 flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-[var(--color-btn-sec-bg)] text-[var(--color-txt-main)] border border-[var(--color-border)] transition-all duration-300 shrink-0">
                                <Lock size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] mb-0.5 transition-colors">Propriété Totale</h3>
                                <p className="text-body-sm text-[var(--color-txt-muted)] max-w-sm leading-snug">
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