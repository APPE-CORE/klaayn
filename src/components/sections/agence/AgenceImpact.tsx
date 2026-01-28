"use client";

import { Zap, Crown, Terminal, BarChart3, Lock, DraftingCompass } from "lucide-react";

export default function AgenceImpact() {
    return (
        <section className="relative w-full bg-[var(--color-contrast)] py-24 border-b border-white/5">
            
            {/* Titre de Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-16">
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

            {/* --- LA BENTO GRID (Compactée Verticalement) --- */}
            <div className="max-w-7xl mx-auto px-6">
                {/* MODIFICATION : Passage de minmax(240px) à minmax(180px) pour réduire la hauteur globale */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* 1. CARTE : ACCÈS DIRECT (Compactée) */}
                    {/* MODIFICATION : p-8 -> p-6 */}
                    <div className="group md:col-span-2 md:row-span-2 relative bg-[#080808] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300">
                        <div className="relative z-10">
                            {/* Mb-6 -> Mb-4 */}
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white transition-all duration-300">
                                <Crown size={20} />
                            </div>
                            {/* Text-3xl -> Text-2xl */}
                            <h3 className="text-2xl font-display font-medium text-white mb-2 transition-colors duration-300">Accès Direct (Root).</h3>
                            <p className="text-white/50 leading-snug text-sm transition-colors">
                                Pas de chefs de projet. Pas de "téléphone arabe". Vous collaborez directement avec l'architecte du système. <br className="hidden md:block"/>
                                <strong className="text-white/70">Résultat :</strong> Une vision pure, sans distorsion.
                            </p>
                        </div>
                        
                        {/* Terminal (Compacté : mt-8 -> mt-4, p-4 -> p-3) */}
                        <div className="mt-4 w-full bg-black/50 border border-white/10 rounded-lg p-3 font-mono text-[10px] opacity-60 group-hover:opacity-100 group-hover:border-white/20 transition-all duration-500">
                            <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-0.5 text-white/70 leading-tight">
                                <p><span className="text-white/40">➜</span> <span className="text-white/40">user:</span> connect --direct core</p>
                                <p className="text-white/60">✓ Connected (0ms)</p>
                                <p><span className="text-white/40">➜</span> <span className="text-white/40">status:</span> <span className="text-white">NO_MIDDLEMAN</span></p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. CARTE : SUR-MESURE (Compactée) */}
                    {/* MODIFICATION : p-6 -> p-5 */}
                    <div className="group md:col-span-1 md:row-span-2 relative bg-[#080808] border border-white/10 md:border-brand/80 rounded-2xl p-5 flex flex-col justify-between overflow-hidden hover:border-brand/80 transition-all duration-500">
                        <div className="absolute inset-0 opacity-10" 
                             style={{ backgroundImage: `linear-gradient(rgba(124, 31, 172, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 31, 172, 0.5) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <DraftingCompass size={20} className="text-white/40 md:text-brand group-hover:text-brand transition-colors duration-300" />
                                <span className="text-[9px] font-mono border border-white/10 md:border-brand/30 px-1.5 py-0.5 rounded-full text-white/50 md:text-brand/80 group-hover:border-brand/30 group-hover:text-brand/80 transition-colors">100% CUSTOM</span>
                            </div>
                            <h3 className="text-lg font-display font-medium text-white md:text-brand group-hover:text-brand transition-colors">Sur-Mesure</h3>
                        </div>

                        {/* Graphique réduit (w-20 -> w-14) */}
                        <div className="py-2 flex justify-center items-center relative">
                            <div className="w-14 h-14 border border-white/10 md:border-brand/30 group-hover:border-brand/30 rounded-full flex items-center justify-center relative transition-colors duration-500">
                                <div className="absolute w-full h-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 rotate-45 transition-colors"></div>
                                <div className="absolute w-full h-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 -rotate-45 transition-colors"></div>
                                <div className="w-1.5 h-1.5 bg-white/20 md:bg-brand group-hover:bg-brand rounded-full z-10 md:shadow-[0_0_10px_var(--color-brand)] group-hover:shadow-[0_0_10px_var(--color-brand)] transition-all"></div>
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-between px-2">
                                <div className="h-1.5 w-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 transition-colors"></div>
                                <div className="h-[1px] flex-1 bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 mt-1.5 transition-colors"></div>
                                <div className="h-1.5 w-[1px] bg-white/10 md:bg-brand/30 group-hover:bg-brand/30 transition-colors"></div>
                            </div>
                        </div>

                        <p className="text-xs text-white/50 leading-relaxed relative z-10">
                            Refus total du template. Chaque pixel est dessiné spécifiquement pour votre marque.
                        </p>
                    </div>

                    {/* 3. CARTE : VITESSE (Compactée) */}
                    {/* MODIFICATION : p-6 -> p-5 */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[#080808] border border-white/10 md:border-[#ff6b00]/80 rounded-2xl p-5 overflow-hidden hover:border-[#ff6b00]/80 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-center justify-between mb-2">
                            <Zap size={20} className="text-white/40 md:text-[#ff6b00] md:fill-[#ff6b00]/20 group-hover:text-[#ff6b00] group-hover:fill-[#ff6b00]/20 transition-all duration-300" />
                            <span className="text-white/20 md:text-[#ff6b00] group-hover:text-[#ff6b00] font-mono text-[10px] transition-colors">⚡ FAST</span>
                        </div>
                        <h3 className="text-lg font-display font-medium text-white md:text-[#ff6b00] group-hover:text-[#ff6b00] mb-1 transition-colors">Vélocité</h3>
                        <p className="text-xs text-white/50 leading-snug">
                            Cycles de sprint courts. De l'idée à la production en un temps record.
                        </p>
                    </div>

                    {/* 4. CARTE : STACK MODERNE (Compactée) */}
                    {/* MODIFICATION : p-6 -> p-5 */}
                    <div className="group md:col-span-1 md:row-span-1 relative bg-[#080808] border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-300">
                         <div className="flex items-center justify-between mb-2">
                            <Terminal size={20} className="text-white/40 transition-colors duration-300" />
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                            </div>
                        </div>
                        <h3 className="text-lg font-display font-medium text-white mb-1 transition-colors">Stack Moderne</h3>
                        <p className="text-xs text-white/50 leading-snug">
                            Next.js, TypeScript. Une dette technique inexistante dès le jour 1.
                        </p>
                    </div>

                    {/* 5. CARTE : OBSESSION ROI (Compactée) */}
                    {/* MODIFICATION : p-6 -> p-5 */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[#080808] border border-white/10 md:border-[#ff6b00]/80 rounded-2xl p-5 flex flex-col justify-center overflow-hidden hover:border-[#ff6b00]/80 transition-all duration-500">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#ff6b00]/10 to-transparent opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white md:bg-[#ff6b00]/10 md:text-[#ff6b00] md:border-[#ff6b00]/50 group-hover:bg-[#ff6b00]/10 group-hover:text-[#ff6b00] group-hover:border-[#ff6b00]/50 transition-all duration-300 shrink-0">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-medium text-white md:text-[#ff6b00] group-hover:text-[#ff6b00] mb-0.5 transition-colors">Obsession ROI</h3>
                                <p className="text-xs text-white/50 max-w-sm leading-snug">
                                    Nous ne faisons pas du "joli". Nous construisons des actifs digitaux conçus pour convertir, performer et dominer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. CARTE : PROPRIÉTÉ TOTALE (Compactée) */}
                    {/* MODIFICATION : p-6 -> p-5 */}
                    <div className="group md:col-span-2 md:row-span-1 relative bg-[#080808] border border-white/10 rounded-2xl p-5 flex flex-col justify-center overflow-hidden transition-all duration-300">
                         <div className="relative z-10 flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/10 transition-all duration-300 shrink-0">
                                <Lock size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-medium text-white mb-0.5 transition-colors">Propriété Totale</h3>
                                <p className="text-xs text-white/50 max-w-sm leading-snug">
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