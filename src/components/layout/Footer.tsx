"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Site Vitrine", href: "/vitrine" },
    { name: "E-commerce", href: "/ecommerce" },
    { name: "Outils IA", href: "/outils-ia" },
  ];

  const agencyLinks = [
    { name: "L'Agence", href: "/agence" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Mentions Légales", href: "/legal" },
    { name: "CGV", href: "/cgv" },
    { name: "Confidentialité", href: "/confidentialite" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={16} /> },
  ];

  return (
    <footer className="relative w-full bg-[#090909] text-white overflow-hidden py-10 border-t border-white/5">
      
      {/* Background Noise Global */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* CONTENEUR PRINCIPAL : Flex column avec gap-4 pour espacer uniformément Navigation du reste */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-4">

        {/* =============================================
           1. GRILLE SUPÉRIEURE (Vision & Impact)
           =============================================
        */}
        {/* Grid avec gap-4 pour espacer Vision et Impact de la même manière */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* --- BLOC 1 : VISION --- */}
          {/* Arrondi complet [2rem] et bordures standard */}
          <div className="flex flex-col justify-center p-8 md:p-10 bg-white/[0.02] border border-white/[0.03] rounded-[2rem] min-h-[240px]">
            <h2 className="text-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1] mb-4">
              Votre <br />
              <span className="text-white/40">Vision.</span>
            </h2>
            <p className="text-body text-white/50 text-sm md:text-base max-w-sm leading-relaxed">
              Ne laissez pas la technique limiter vos ambitions. Construisons l'infrastructure de votre domination.
            </p>
          </div>
          
          {/* --- BLOC 2 : IMPACT (CTA) --- */}
          {/* Arrondi complet [2rem], bordures standard, effet hover orange */}
          <Link 
            href="/contact" 
            className="group relative flex flex-row items-center justify-between p-8 md:p-10 bg-white/[0.02] border border-white/[0.03] rounded-[2rem] min-h-[240px] transition-all duration-500 hover:bg-action overflow-hidden"
          >
             <div className="relative z-10 flex flex-col justify-center h-full">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff6b00] group-hover:text-black/60 mb-2 transition-colors duration-300">
                    Action
                </span>
                <h2 className="text-display text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-black transition-colors duration-500 leading-[1]">
                    Notre <br/> Impact.
                </h2>
             </div>

             <div className="relative z-10">
                <ArrowRight 
                    size={40} 
                    className="text-white group-hover:text-black transition-transform duration-500 group-hover:-rotate-45" 
                />
             </div>
          </Link>

        </div>

        {/* =============================================
           2. BLOC INFÉRIEUR : NAVIGATION
           =============================================
        */}
        {/* Arrondi complet [2rem] */}
        <div className="w-full bg-white/[0.02] border border-white/[0.03] rounded-[2rem] p-8 md:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10">
            
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <Link href="/" className="block mb-4 active:scale-95 transition-transform duration-200">
                        <span className="text-2xl font-display font-bold tracking-tighter">KLAAYN.</span>
                        </Link>
                        <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
                        Architectes de l'Invisible.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-start">
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">Solutions</span>
                    <ul className="space-y-3">
                        {serviceLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                            href={link.href} 
                            className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                            >
                            <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ff6b00] opacity-0 group-hover:opacity-100 font-mono text-xs flex items-center">
                                —
                            </span>
                            {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 flex flex-col justify-start">
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">Studio</span>
                    <ul className="space-y-3">
                        {agencyLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                            href={link.href} 
                            className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                            >
                            <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ff6b00] opacity-0 group-hover:opacity-100 font-mono text-xs flex items-center">
                                —
                            </span>
                            {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3 flex flex-col justify-start md:items-end">
                    <div className="flex flex-col md:items-end">
                        <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6 text-left md:text-right">Réseaux</span>
                        <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a 
                            key={social.name} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 border border-white/10 rounded-xl bg-white/5 text-white/50 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
                            >
                            {social.icon}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-white/30 font-mono">
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span>© {currentYear} KLAAYN.</span>
                <span className="hidden md:inline text-white/10">|</span>
                <span>All Systems Operational</span>
                </div>
                <div className="flex gap-6">
                {legalLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                </div>
            </div>

        </div>

      </div>
    </footer>
  );
}