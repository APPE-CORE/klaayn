"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, ShoppingBag, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "vitrine",
      title: "Site Vitrine",
      subtitle: "Identité & Impact",
      description: "Ne soyez pas juste présents. Soyez inoubliables. Une architecture visuelle conçue pour capturer l'attention et imposer votre autorité.",
      href: "/vitrine",
      icon: <Monitor size={40} strokeWidth={1.5} />,
      features: ["Design Immersif", "Motion & 3D", "Storytelling"],
      // Style : Brand (Orange/Purple) -> Orange -> White
      hoverStyle: "hover:border-[var(--color-brand)]/50 hover:bg-[var(--color-brand)]/5 active:border-[var(--color-brand)]/50 active:bg-[var(--color-brand)]/5",
      titleGradient: "from-[var(--color-brand)] via-orange-400 to-white/50",
      iconColor: "text-[var(--color-txt-dim)] group-hover:text-[var(--color-brand)] group-active:text-[var(--color-brand)]"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      subtitle: "Performance & Scale",
      description: "Transformez vos visiteurs en revenus. Des tunnels de vente optimisés, ultra-rapides et conçus pour la conversion maximale.",
      href: "/ecommerce",
      icon: <ShoppingBag size={40} strokeWidth={1.5} />,
      features: ["Conversion Rate Opt.", "Paiement Rapide", "Scalabilité"],
      // Style : Lime -> Emerald -> White
      hoverStyle: "hover:border-lime-500/50 hover:bg-lime-500/5 active:border-lime-500/50 active:bg-lime-500/5",
      titleGradient: "from-lime-400 via-emerald-400 to-white/50",
      iconColor: "text-[var(--color-txt-dim)] group-hover:text-lime-400 group-active:text-lime-400"
    },
    {
      id: "ia",
      title: "Solutions IA",
      subtitle: "Automation & Vitesse",
      description: "L'avantage injuste. Intégrez des modules intelligents et des SaaS sur-mesure pour automatiser ce qui doit l'être.",
      href: "/outils-ia",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      features: ["Chatbots IA", "Automatisation", "Data Analysis"],
      // Style : Yellow -> Amber -> White
      hoverStyle: "hover:border-yellow-400/50 hover:bg-yellow-400/5 active:border-yellow-400/50 active:bg-yellow-400/5",
      titleGradient: "from-yellow-400 via-amber-500 to-white/50",
      iconColor: "text-[var(--color-txt-dim)] group-hover:text-yellow-400 group-active:text-yellow-400"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Glow central subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand)]/5 blur-[120px] rounded-full pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 1. HEADER DE SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Titre : Utilisation de .text-display mais clampé pour ne pas être trop gros ici */}
            <h2 className="text-display font-medium text-[var(--color-txt-main)] mb-6 !text-[clamp(2.5rem,5vw,4rem)]">
              Choisissez votre <br />
              <span className="text-[var(--color-txt-dim)]">Vecteur de Croissance.</span>
            </h2>
            {/* Intro : .text-body-large */}
            <p className="text-body-large text-[var(--color-txt-muted)]">
              Nous ne vendons pas de code. Nous vendons des résultats. <br className="hidden md:block"/>
              Sélectionnez l'infrastructure adaptée à votre ambition.
            </p>
          </div>
          
          {/* Indicateur visuel : .text-label-tech */}
          <div className="hidden md:block pb-2">
            <span className="text-label-tech text-[var(--color-txt-dim)]">
              01 — Solutions
            </span>
          </div>
        </div>

        {/* 2. GRILLE "TRIAD" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 group/grid">
          
          {services.map((service) => (
            <Link 
              key={service.id}
              href={service.href}
              className={`
                group relative flex flex-col justify-between p-8 md:p-10 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] 
                transition-all duration-500 ease-out min-h-[420px] overflow-hidden
                
                /* EFFET MASSAGE (Focus PC) */
                lg:group-hover/grid:blur-[2px] lg:group-hover/grid:opacity-40
                lg:hover:!blur-none lg:hover:!opacity-100 lg:hover:!scale-[1.02] lg:hover:z-10
                
                /* COULEURS DYNAMIQUES (Hover & Active/Touch) */
                ${service.hoverStyle} hover:shadow-2xl active:scale-[0.98] lg:active:scale-[1.02]
              `}
            >
              
              {/* Contenu Haut */}
              <div>
                {/* En-tête Carte : Icône Nue + Flèche */}
                <div className="flex justify-between items-start mb-10">
                  
                  {/* Icône Service */}
                  <div className={`transition-colors duration-500 ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  
                  {/* Flèche "Nue" */}
                  <ArrowRight 
                    size={28} 
                    strokeWidth={1.5}
                    className={`text-[var(--color-txt-dim)] transition-all duration-500 
                    group-hover:text-[var(--color-txt-main)] group-hover:-rotate-45 
                    group-active:text-[var(--color-txt-main)] group-active:-rotate-45`} 
                   />
                </div>

                {/* Titre : Utilisation de .text-h3 (~36px) pour respecter le CSS tout en gardant l'impact */}
                <h3 className={`text-h3 font-medium mb-2 tracking-tight transition-all duration-300 text-[var(--color-txt-main)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-active:text-transparent group-active:bg-clip-text group-active:bg-gradient-to-r ${service.titleGradient}`}>
                    {service.title}
                </h3>
                
                {/* Sous-titre : .text-label-tech */}
                <span className={`text-label-tech opacity-60 transition-colors duration-300 ${service.iconColor}`}>
                  {service.subtitle}
                </span>

                {/* Description : .text-body */}
                <p className="mt-6 text-body text-[var(--color-txt-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Contenu Bas (Features) */}
              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-[family-name:var(--font-inter)] text-[var(--color-txt-dim)] group-hover:text-[var(--color-txt-muted)] group-active:text-[var(--color-txt-muted)] transition-colors duration-300">
                      {/* Petit point coloré */}
                      <div className={`w-1.5 h-1.5 rounded-full bg-[var(--color-border)] transition-colors duration-300 ${service.iconColor.replace('text-', 'bg-').replace('group-hover:', 'group-hover:bg-').replace('group-active:', 'group-active:bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}