"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Monitor, ShoppingBag, Cpu, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// LOGIQUE MARQUEE
const LOGOS = ["Google", "Vercel", "Stripe", "Linear", "Shopify", "Nvidia", "Adobe", "Framer"];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-void py-24 md:py-32 overflow-hidden">
      
      {/* 1. MARQUEE DE CONFIANCE */}
      <div className="relative w-full mb-20 md:mb-32 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-void to-transparent"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-void to-transparent"></div>
        
        <div className="flex overflow-hidden gap-16 select-none">
          <motion.div 
            initial={{ x: 0 }} 
            animate={{ x: "-50%" }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase font-sans tracking-tighter">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 2. EN-TÊTE STRATÉGIQUE (CORRIGÉ MOBILE) */}
        {/* items-start : Aligne tout à gauche */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 md:gap-10">
            <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-action animate-pulse"></span>
                    <span className="text-label-tech text-action">Systèmes Opérationnels</span>
                </div>
                
                {/* CORRECTION TAILLE : text-4xl sur mobile (au lieu de 5xl) pour éviter le débordement */}
                <h2 className="text-display text-4xl md:text-7xl text-white mb-6">
                    Au-delà du code.<br />
                    <span className="text-txt-muted">Une infrastructure.</span>
                </h2>
            </div>

            {/* CORRECTION ALIGNEMENT : text-left partout */}
            <p className="text-body-large max-w-md text-left">
                Nous ne vendons pas des pages web. Nous déployons des écosystèmes digitaux conçus pour la domination de marché.
            </p>
        </div>

        {/* 3. GRILLE BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* MODULE 1 */}
            <ServiceCard 
                href="/vitrine"
                title="Vitrine" 
                subtitle="Brand Authority"
                icon={<Monitor size={32} />}
                desc="Expériences immersives (WebGL/3D) qui fixent votre standard visuel et écrasent la concurrence."
                features={["Design System Avancé", "Animations Framer", "SEO Sémantique"]}
                delay={0}
            />

            {/* MODULE 2 */}
            <ServiceCard 
                href="/ecommerce"
                title="E-commerce" 
                subtitle="Revenue Engine"
                icon={<ShoppingBag size={32} />}
                desc="Architectures de vente haute performance. Optimisées pour la conversion brute et la rapidité."
                features={["Shopify / Next.js", "Paiement Unifié", "CRO & Analytics"]}
                delay={0.1}
            />

            {/* MODULE 3 */}
            <ServiceCard 
                href="/outils-ia"
                title="Intelligence" 
                subtitle="Automation"
                icon={<Cpu size={32} />}
                desc="Intégration d'agents IA et automatisation de workflows pour démultiplier votre force de frappe."
                features={["Agents LLM Custom", "RAG & Data", "Workflows n8n"]}
                delay={0.2}
            />

        </div>
      </div>
    </section>
  );
}

// --- SOUS-COMPOSANT CARTE ---
function ServiceCard({ title, subtitle, icon, desc, features, href, delay }: any) {
    return (
        <Link href={href} className="block h-full">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: delay, ease: [0.22, 1, 0.36, 1] }}
                className="card-monolith group relative h-full p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(124,31,172,0.15)] hover:border-brand"
            >
                {/* EFFET GLOW INTERNE */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div>
                    {/* EN-TÊTE CARTE */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 rounded-2xl border border-[var(--color-border)] bg-white/5 text-white transition-colors duration-500 group-hover:bg-brand group-hover:border-brand">
                            {icon}
                        </div>
                        <ArrowRight className="text-txt-dim -rotate-45 group-hover:text-white group-hover:rotate-0 transition-all duration-500" />
                    </div>

                    {/* TITRES */}
                    <span className="text-label-tech text-brand mb-2 block">{subtitle}</span>
                    <h3 className="text-display text-4xl text-white mb-6 group-hover:translate-x-1 transition-transform duration-300">
                        {title}
                    </h3>
                    
                    {/* DESCRIPTION */}
                    <p className="text-body text-sm mb-8 border-l border-[var(--color-border)] pl-4 group-hover:border-brand transition-colors duration-500">
                        {desc}
                    </p>
                </div>

                {/* FEATURES */}
                <div className="space-y-3">
                    {features.map((feat: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-txt-muted group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 size={14} className="text-brand opacity-50 group-hover:opacity-100" />
                            <span className="font-mono tracking-tight">{feat}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Link>
    )
}