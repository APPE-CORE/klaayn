"use client";

import React, { useState } from "react";
// Import du composant UI (assure-toi que ce composant est bien stylisé avec tes variables globales aussi)
import Accordion from "@/components/ui/Accordion"; 

export default function AgenceFAQ() {
    
    // Initialisation à 'null' pour tout fermer par défaut
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "N'est-ce pas risqué de travailler avec un solopreneur ?",
            answer: "C'est l'inverse. Dans une agence, votre projet passe de mains en mains. Avec Klaayn, c'est l'expert senior qui écrit chaque ligne. En cas d'imprévu, mon réseau (Klaayn Unit) prend le relais."
        },
        {
            question: "Pourquoi vos tarifs sont-ils élevés sans équipe ?",
            answer: "Vous ne payez pas pour des heures, mais pour la valeur et la vitesse. Je réalise en 2 semaines ce qu'une équipe fait en 2 mois. Le coût global est souvent inférieur pour un meilleur ROI."
        },
        {
            question: "Quelle est la stack technique ?",
            answer: "Next.js (React) pour la performance, Tailwind pour le design, Framer Motion pour l'interaction. Une architecture Headless sécurisée et scalable."
        },
        {
            question: "Que se passe-t-il après la livraison ?",
            answer: "Le code est à vous. Je vous forme pour l'autonomie totale, ou nous passons sur un contrat de maintenance 'Guardian' pour gérer la sécurité et les évolutions."
        },
        {
            question: "Prenez-vous de l'Equity ?",
            answer: "Sur dossier et audit uniquement, un modèle hybride (Cash + Equity) est possible. La base reste une prestation rémunérée pour garantir l'engagement."
        }
    ];

    return (
        <section className="relative w-full bg-[var(--color-void)] py-24 border-t border-[var(--color-border)]">
            
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-label-tech text-[var(--color-brand)] mb-4 block">
                        // La Vérité
                    </span>
                    <h2 className="text-h2 text-[var(--color-txt-main)] mb-6">
                        Questions <span className="text-[var(--color-txt-dim)]">Gênantes.</span>
                    </h2>
                    <p className="text-body-large max-w-xl mx-auto">
                        Pas de zones d'ombre. Nous abordons les sujets qui fâchent avant même de signer.
                    </p>
                </div>

                {/* Liste des Accordéons */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            title={faq.question}
                            isOpen={activeIndex === index}
                            onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {faq.answer}
                        </Accordion>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-16 text-center">
                    <p className="text-body-sm text-[var(--color-txt-muted)] mb-4">Une autre question ?</p>
                    <a href="mailto:contact@klaayn.com" className="inline-flex items-center gap-2 text-[var(--color-txt-main)] border-b border-[var(--color-brand)]/50 pb-0.5 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-all">
                        Envoyer un mail direct
                    </a>
                </div>

            </div>
        </section>
    );
}