"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "/vitrine", label: "Vitrine" },
    { href: "/ecommerce", label: "E-commerce" },
    { href: "/outils-ia", label: "Outils IA" },
    { href: "/agence", label: "Agence" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // MODIFICATION ICI : Passage de pt-20 à pt-10 pour réduire l'espace supérieur
    <footer className="relative w-full bg-void border-t border-[var(--color-border)] pt-10 pb-10 overflow-hidden font-sans">
      
      {/* Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* TITRE SUPPRIMÉ */}

        {/* BENTO INTERACTIF */}
        <div className="group/bento grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
            
            {/* 1. MASTER CTA (ACTIF : Grossit et prend le dessus) */}
            <Link 
                href="/contact"
                className="card-monolith order-1 lg:order-2 lg:col-span-2 relative peer p-10 md:p-12 flex flex-col justify-center lg:justify-between items-center lg:items-start min-h-[450px] lg:min-h-0 group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                /* HOVER PC */
                hover:scale-[1.04] hover:border-brand hover:shadow-[0_0_150px_rgba(124,31,172,0.5)] hover:z-30
                /* ACTIVE MOBILE (Touch) */
                active:scale-[0.98] active:border-brand active:shadow-[0_0_80px_rgba(124,31,172,0.6)]"
            >
                <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start relative z-10 text-center lg:text-left gap-10">
                    <h3 className="text-display text-4xl md:text-6xl text-white italic leading-[0.9]">
                        Forge le <br /> Standard.
                    </h3>
                    
                    <div className="relative w-24 h-24 rounded-2xl border border-[var(--color-border)] bg-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 
                        /* HOVER & ACTIVE */
                        group-hover:bg-brand group-hover:border-brand group-hover:shadow-[0_0_50px_rgba(124,31,172,0.7)] 
                        group-active:bg-brand group-active:border-brand group-active:scale-90 shadow-2xl">
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
                        <ArrowRight size={40} className="relative z-10 text-white transition-transform duration-500 group-hover:-rotate-45 group-active:-rotate-45" />
                    </div>
                </div>

                <p className="mt-12 lg:mt-8 text-body-large text-base italic relative z-10 text-center lg:text-left transition-colors duration-500 group-hover:text-white/90 group-active:text-white">
                    Activez votre unité opérationnelle.
                </p>
            </Link>

            {/* 2. NAVIGATION (PASSIF : S'efface sans bouger) */}
            <div className="card-monolith order-2 lg:order-1 lg:col-span-1 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 lg:peer-hover:opacity-20 lg:peer-hover:blur-[3px] z-0">
                <h3 className="text-label-bold text-brand mb-10">Exploration</h3>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="group/link flex items-center justify-between text-[17px] md:text-base font-medium text-txt-muted transition-all tracking-tight cursor-pointer
                            /* INTERACTION */
                            hover:text-white active:text-white active:scale-95 origin-left"
                        >
                            <span className="relative overflow-hidden">
                                {link.label}
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white translate-x-[-100%] group-hover/link:translate-x-0 group-active/link:translate-x-0 transition-transform duration-300"></span>
                            </span>
                            <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:-rotate-45 group-active/link:opacity-100 group-active/link:translate-x-0 group-active/link:-rotate-45 transition-all duration-300 text-brand" />
                        </Link>
                    ))}
                </nav>
            </div>

            {/* 3. SOCIAL (PASSIF : S'efface sans bouger) */}
            <div className="card-monolith order-3 lg:col-span-3 p-8 md:px-10 md:py-6 mt-2 transition-all duration-500 lg:peer-hover:opacity-20 lg:peer-hover:blur-[3px] z-0">
                <div className="flex flex-row flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">
                    <div className="flex flex-row items-center justify-center gap-12 md:gap-16 w-full md:w-auto">
                        {[
                            { name: "LinkedIn", Icon: Linkedin },
                            { name: "Instagram", Icon: Instagram },
                            { name: "Twitter", Icon: Twitter }
                        ].map(({ name, Icon }) => (
                            <Link 
                                key={name} 
                                href="#" 
                                className="flex items-center gap-3 transition-all duration-300 text-txt-muted hover:text-brand active:text-brand group active:scale-90"
                            >
                                <span className="transform transition-transform duration-300 group-hover:scale-125 group-active:scale-125 group-hover:text-brand group-active:text-brand">
                                    <Icon size={24} />
                                </span>
                                <span className="hidden md:inline text-[16px] font-medium tracking-tight">{name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <span className="text-label-bold text-brand">Social Hub Active</span>
                    </div>
                </div>
            </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-[700] relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 order-1">
                <p className="text-txt-muted tracking-tight">© {currentYear} Klaayn Unit</p>
                <nav className="flex gap-8 items-center text-center">
                    <Link href="/legal" className="text-white/50 hover:text-white active:text-white transition-colors tracking-tight">Mentions légales</Link>
                    <Link href="/confidentialite" className="text-white/50 hover:text-white active:text-white transition-colors tracking-tight">Confidentialité</Link>
                </nav>
            </div>

            <div className="flex items-center gap-3 order-2">
                <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand"></span>
                </div>
                <span className="text-label-tech text-[10px] text-white/20 italic">Node Active — Protocol v4.0.2</span>
            </div>
        </div>
      </div>
    </footer>
  );
}