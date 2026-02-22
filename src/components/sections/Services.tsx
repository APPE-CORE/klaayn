"use client";

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
      hoverStyle: "hover:border-[var(--color-brand)]/50 hover:bg-[var(--color-brand)]/5 active:border-[var(--color-brand)]/50 active:bg-[var(--color-brand)]/5",
      gradient: "linear-gradient(to right, var(--color-brand), var(--color-action))",
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
      hoverStyle: "hover:border-lime-500/50 hover:bg-lime-500/5 active:border-lime-500/50 active:bg-lime-500/5",
      gradient: "linear-gradient(to right, var(--color-main-ecom), var(--color-accent-ecom))",
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
      hoverStyle: "hover:border-yellow-400/50 hover:bg-yellow-400/5 active:border-yellow-400/50 active:bg-yellow-400/5",
      gradient: "linear-gradient(to right, var(--color-main-ia), var(--color-accent-ia))",
      iconColor: "text-[var(--color-txt-dim)] group-hover:text-yellow-400 group-active:text-yellow-400"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden">
     
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 1. HEADER DE SECTION (Centré) */}
        <div className="flex flex-col items-center text-center mt-6 mb-16 mx-auto max-w-3xl gap-4">
          
          {/* Indicateur visuel */}
          <div className="mb-2">
            <span className="text-label-tech text-[var(--color-txt-dim)]">
              01 — Solutions
            </span>
          </div>

          {/* Titre : Utilisation pure de .text-h2 */}
          <h2 className="text-h2 text-[var(--color-txt-main)] mb-2">
            Vecteurs de <span 
                className="inline-block pb-1 pr-1"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Croissance
            </span>
          </h2>
          
          {/* Intro */}
          <p className="text-body-large text-[var(--color-txt-muted)] max-w-2xl mx-auto">
            Nous ne vendons pas de code. Nous vendons des résultats. <br className="hidden md:block"/>
            Sélectionnez l'infrastructure adaptée à votre ambition.
          </p>
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
                
                /* EFFET MASSAGE CORRIGÉ */
                lg:group-has-[:hover]/grid:blur-[2px] lg:group-has-[:hover]/grid:opacity-40
                lg:hover:!blur-none lg:hover:!opacity-100 lg:hover:!scale-[1.02] lg:hover:z-10
                
                /* COULEURS DYNAMIQUES */
                ${service.hoverStyle} hover:shadow-2xl active:scale-[0.98] lg:active:scale-[1.02]
              `}
            >
              
              {/* Contenu Haut */}
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className={`transition-colors duration-500 ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  
                  <ArrowRight 
                    size={28} 
                    strokeWidth={1.5}
                    className={`text-[var(--color-txt-dim)] transition-all duration-500 
                    group-hover:text-[var(--color-txt-main)] group-hover:-rotate-45 
                    group-active:text-[var(--color-txt-main)] group-active:-rotate-45`} 
                   />
                </div>

                <h3 className="text-h3 mb-2 relative">
                  <span className="transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 text-[var(--color-txt-main)]">
                    {service.title}
                  </span>
                  
                  <span
                    className="absolute left-0 top-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100 inline-block pb-1 pr-1"
                    style={{
                        backgroundImage: service.gradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                    }}
                  >
                    {service.title}
                  </span>
                </h3>
                
                <span className={`text-label-tech opacity-60 transition-colors duration-300 ${service.iconColor}`}>
                  {service.subtitle}
                </span>

                <p className="mt-6 text-body text-[var(--color-txt-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Contenu Bas (Features) */}
              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-body-sm group-hover:text-[var(--color-txt-muted)] group-active:text-[var(--color-txt-muted)] transition-colors duration-300">
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