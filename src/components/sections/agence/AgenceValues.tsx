"use client";

import React from "react";
import { ScanEye, DraftingCompass, Fingerprint } from "lucide-react";

export default function AgenceValues() {

    const values = [
        {
            id: "01",
            icon: <ScanEye size={20} />,
            title: "Transparence",
            subtitle: "La confiance est binaire.",
            desc: "Pas de boîte noire. Pas de coûts cachés. Pas de jargon commercial. Je dis ce que je fais, je fais ce que je dis. La relation est directe, brute et sans filtre."
        },
        {
            id: "02",
            icon: <DraftingCompass size={20} />,
            title: "Rigueur",
            subtitle: "L'excellence est une discipline.",
            desc: "Le hasard n'a pas sa place ici. Code propre, architecture scalable. Nous ne construisons pas des décors, mais des fondations solides pour 10 ans."
        },
        {
            id: "03",
            icon: <Fingerprint size={20} />,
            title: "Émotion",
            subtitle: "Sortir de l'indifférence.",
            desc: "La technique est froide, l'expérience doit être vibrante. Nous créons des interfaces qui marquent la rétine et ancrent votre marque dans la mémoire."
        }
    ];

    return (
        <section className="relative w-full bg-void py-24 border-t border-white/5 overflow-hidden">
            
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.05] pb-6">
                <div>
                    <span className="text-brand font-mono text-xs uppercase tracking-widest mb-2 block">
                        // Dogme
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.9]">
                        Principes <br/>
                        <span className="text-white/40">Opérationnels.</span>
                    </h2>
                </div>
            </div>

            {/* La Stack */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col">
                
                {values.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative w-full border-b border-white/[0.03] py-10 md:py-14 transition-all duration-500 hover:bg-white/[0.02]"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            
                            {/* GAUCHE : TITRE */}
                            <div className="lg:col-span-6 relative overflow-hidden lg:overflow-visible">
                                
                                {/* MODIFICATION ICI : Ajout de 'pb-2' (Padding Bottom) et 'relative z-10' */}
                                {/* Le pb-2 empêche les lettres 'p' et 'g' d'être coupées par l'overflow */}
                                <h3 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white transition-all duration-500 group-hover:translate-x-4 group-hover:drop-shadow-[0_0_25px_rgba(124,31,172,0.6)] whitespace-nowrap leading-[0.9] pb-2 relative z-10">
                                    {item.title}
                                </h3>
                            </div>

                            {/* DROITE : CONTENU TECHNIQUE */}
                            <div className="lg:col-span-6 pl-0 lg:pl-12 lg:border-l lg:border-white/[0.03] lg:group-hover:border-brand/20 transition-colors duration-500 py-2">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-white/40 group-hover:text-brand transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                    <p className="text-white/50 font-light leading-relaxed text-sm md:text-base group-hover:text-white/80 transition-colors duration-300 max-w-lg">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}