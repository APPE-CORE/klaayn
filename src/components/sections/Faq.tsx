"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";

const FAQS = [
  {
    question: "Combien de temps pour le déploiement d'une architecture ?",
    answer: "Le cycle de production s'étend de 4 à 8 semaines, selon l'envergure de l'infrastructure. Nous opérons en sprints agressifs et transparents. Vous suivez chaque itération en temps réel. Nous ne sacrifions jamais la qualité sous la pression, mais nous n'accusons aucun retard."
  },
  {
    question: "Pourquoi exiger Next.js, React et Tailwind ?",
    answer: "Parce que c'est la stack technologique des leaders (Netflix, Twitch, Notion). Next.js garantit un rendu serveur (SSR) ultra-rapide, un critère fondamental pour l'algorithme de Google. Tailwind assure l'absence de code CSS mort. Le résultat est une latence inférieure à 50ms et un SEO maximisé dès le jour 1."
  },
  {
    question: "Facturez-vous une maintenance mensuelle obligatoire ?",
    answer: "Non. Nous forgeons des systèmes autonomes, pas des usines à gaz nécessitant une perfusion technique. À la livraison, vous êtes 100% propriétaire du code et de l'infrastructure. Nous proposons des audits trimestriels pour scaler, mais le produit vit par lui-même."
  },
  {
    question: "Quel est le ticket d'entrée pour collaborer ?",
    answer: "Nos interventions démarrent à partir de 5 000 €. Nous ne sommes pas des exécutants, nous sommes des architectes de la conversion. Si vous percevez votre interface comme un centre de coût et non comme un actif générateur de revenus, nous ne sommes pas le bon partenaire."
  },
  {
    question: "Comment garantissez-vous le taux de conversion ?",
    answer: "Par l'élimination de la friction cognitive. Nous basons nos interfaces sur la loi de Hick et l'analyse de données, pas sur des préférences esthétiques subjectives. Chaque micro-interaction, chaque temps de chargement et chaque hiérarchie typographique est calculé pour guider l'utilisateur vers la transaction."
  }
];

export default function Faq() {
  // Le premier accordéon est ouvert par défaut pour inciter à la lecture
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden">
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* 1. EN-TÊTE DE SECTION */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          
          {/* Indicateur visuel */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <span className="text-label-tech text-[var(--color-txt-dim)]">
              Désamorçage
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h2 text-[var(--color-txt-main)] mb-2"
          >
            Anticiper l'<span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Inévitable
            </span>
          </motion.h2>
          
          {/* Intro */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-large text-[var(--color-txt-muted)]"
          >
            Nos méthodes sont radicales, nos résultats aussi. <br className="hidden md:block"/>
            Voici les réponses aux questions que vous devez vous poser.
          </motion.p>
        </div>

        {/* 2. LISTE DES ACCORDÉONS */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Accordion
                title={faq.question}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              >
                {faq.answer}
              </Accordion>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}