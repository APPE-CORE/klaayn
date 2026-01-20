"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Instagram, Terminal } from "lucide-react";

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
    <footer className="relative w-full bg-[#020003] border-t border-white/5 pt-16 pb-10 overflow-hidden font-sans">
      
      {/* Texture de fond systémique */}
      <div className="absolute inset-0 z-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* INTRODUCTION HAUTE PERFORMANCE
            - Titre agrandi (text-5xl mobile / text-7xl desktop)
            - Rupture de ligne forcée sur mobile
        */}
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-[800] tracking-tighter text-white leading-[0.9] mb-4">
                Ingénierie <br className="md:hidden" />
                <span className="text-[#7c1fac]">souveraine.</span>
            </h2>
            <p className="max-w-xl text-white/40 text-sm md:text-base font-medium leading-relaxed italic">
                Standard technologique pour leaders exigeants.
            </p>
        </div>

        {/* SECTION BENTO SYNCHRONISÉE (STRICTEMENT INTACTE) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* 1. MASTER CTA (PIVOT PEER)
                - Arrondis alignés Hero (1.5rem)
                - Effet repoussoir (scale-1.02)
            */}
            <Link 
                href="/contact"
                className="order-1 lg:order-2 lg:col-span-2 relative peer z-20 group bg-black border border-white/10 p-10 md:p-12 rounded-[1.5rem] flex flex-col justify-center lg:justify-between items-center lg:items-start min-h-[450px] lg:min-h-0 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#7c1fac]/60 hover:shadow-[0_0_120px_rgba(124,31,172,0.3)] overflow-hidden"
            >
                <div className="absolute -inset-10 bg-[#7c1fac]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start relative z-10 text-center lg:text-left gap-10">
                    <h3 className="text-5xl md:text-5xl lg:text-6xl font-[900] text-white italic tracking-tighter leading-[0.9]">
                        Forge le <br /> Standard.
                    </h3>
                    
                    <div className="w-24 h-24 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#7c1fac] group-hover:border-[#7c1fac] transition-all duration-500">
                        <ArrowRight size={40} className="transition-transform duration-500 group-hover:-rotate-45" />
                    </div>
                </div>

                <p className="mt-12 lg:mt-8 text-white/40 text-base font-medium italic relative z-10 text-center lg:text-left">
                    Activez votre unité opérationnelle.
                </p>
            </Link>

            {/* 2. BLOC NAVIGATION (MASQUAGE STATIQUE) */}
            <div className="order-2 lg:order-1 lg:col-span-1 relative z-10 bg-black border border-white/10 p-8 md:p-10 rounded-[1.5rem] flex flex-col justify-between transition-opacity duration-500 ease-out hover:border-white/20 lg:peer-hover:opacity-40 lg:peer-hover:blur-[1px]">
                <h3 className="text-[10px] font-mono text-[#7c1fac] uppercase tracking-[0.4em] font-black mb-10">Exploration</h3>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="group/link flex items-center justify-between text-[17px] md:text-base font-medium text-white/40 hover:text-white transition-all tracking-tight">
                            <span>{link.label}</span>
                            <ArrowRight size={18} className="opacity-0 group-hover/link:opacity-100 -rotate-45 transition-all" />
                        </Link>
                    ))}
                </nav>
            </div>

            {/* 3. HUB SOCIAL (MASQUAGE STATIQUE) */}
            <div className="order-3 lg:col-span-3 relative z-10 bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-8 md:px-10 md:py-6 transition-opacity duration-500 ease-out hover:border-white/20 lg:peer-hover:opacity-40 lg:peer-hover:blur-[1px] mt-2">
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
                                className="flex items-center gap-3 transition-all duration-300 text-white md:text-white/40 hover:text-[#7c1fac] active:text-[#7c1fac] md:hover:text-white group"
                            >
                                <span className="scale-[1.4] md:scale-100 transition-transform text-white group-hover:text-[#7c1fac] group-active:text-[#7c1fac] md:text-inherit md:group-hover:text-[#7c1fac]">
                                    <Icon size={24} />
                                </span>
                                <span className="hidden md:inline text-[16px] font-medium tracking-tight">{name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <span className="text-[10px] font-mono text-[#7c1fac] uppercase tracking-[0.4em] font-black">Social Hub Active</span>
                    </div>
                </div>
            </div>
        </div>

        {/* BARRE SYSTÈME FINALE */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-[700]">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 order-1">
                <p className="text-white/40 tracking-tight">© {currentYear} Klaayn Unit</p>
                <nav className="flex gap-8 items-center text-center">
                    <Link href="/legal" className="text-white/50 hover:text-white transition-colors tracking-tight">Mentions légales</Link>
                    <Link href="/confidentialite" className="text-white/50 hover:text-white transition-colors tracking-tight">Confidentialité</Link>
                </nav>
            </div>

            <div className="flex items-center gap-3 order-2">
                <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c1fac] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7c1fac]"></span>
                </div>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] font-bold italic">Node Active — Protocol v4.0.2</span>
            </div>
        </div>
      </div>
    </footer>
  );
}