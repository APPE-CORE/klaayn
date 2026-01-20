"use client";

import React from "react";
import Link from "next/link";
import { Terminal, MessageSquare, ChevronRight, Linkedin, Twitter, Instagram } from "lucide-react";

// IMPORTATION DE L'ATOME UI RÉVISÉ
import Button from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#020003] flex flex-col items-center overflow-hidden border-t border-white/10">
      
      {/* === TRANSITION : ARCHE ARCHITECTURELLE === */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" fill="none" className="relative block w-full h-[30px] md:h-[60px] text-[#020003] rotate-180" preserveAspectRatio="none">
          <path d="M0 60C360 0 1080 0 1440 60V0H0V60Z" fill="currentColor"/>
        </svg>
      </div>

      {/* === FOND : GRILLE & GLOW SYSTÉMIQUE === */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
          <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[#7c1fac]/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 pt-10 md:pt-24 pb-8 flex flex-col gap-10 md:gap-16">
        
        {/* === SECTION IMPACT : CTA ATOMIQUE === */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <div className="text-left">
                <h2 className="text-[10vw] md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase">
                    Forger <br /> <span className="text-[#7c1fac]">l'autorité.</span>
                </h2>
                <p className="mt-4 text-white/50 text-xs font-mono uppercase tracking-[0.4em]">
                    High-Performance Systems — V.2026
                </p>
            </div>

            {/* ATOME BOUTON : IDENTIQUE AU HERO (Pleine largeur mobile / Original PC) */}
            <div className="flex justify-start w-full lg:w-auto">
                <Button 
                  href="/contact" 
                  className="w-full" 
                >
                    L'ALLIANCE
                </Button>
            </div>
        </div>

        {/* === SECTION MATRICE : BENTO GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
            
            {/* Nav : Grid 2x2 Mobile */}
            <div className="md:col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-9 rounded-2xl md:rounded-[2rem]">
                <h4 className="text-[9px] font-mono text-[#7c1fac] uppercase tracking-[0.4em] font-bold mb-6">Navigation</h4>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
                    {["Vitrine", "E-commerce", "Outils IA", "Agence"].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xl md:text-lg font-bold uppercase tracking-tight text-white/50 hover:text-white transition-all flex items-center justify-between border-b border-white/5 pb-2 md:pb-0 md:border-none group/link">
                            {item}
                            <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-[#7c1fac]" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Contact & Social Hub */}
            <div className="md:col-span-8 grid grid-cols-1 gap-3 md:gap-5">
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-center group hover:border-white/20 transition-colors">
                    <p className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] mb-2">Canal Sécurisé</p>
                    <a href="mailto:contact@klaayn.com" className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white hover:text-[#7c1fac] transition-colors break-all">
                        contact@klaayn.com
                    </a>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-white/20 transition-colors">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] mb-1">Social Node</p>
                        <span className="hidden md:block text-[10px] md:text-xs font-bold text-white/40 italic">@klaayn_dominance</span>
                    </div>
                    <div className="flex gap-2">
                        {[<Linkedin key="li" size={18} />, <Twitter key="tw" size={18} />, <Instagram key="ig" size={18} />].map((icon, i) => (
                            <a key={i} href="#" className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-[#7c1fac]/10 hover:border-[#7c1fac] transition-all">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === BARRE SYSTÈME : FINALE === */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6 text-[10px] font-mono text-white/50 uppercase tracking-[0.3em]">
            <div className="flex items-center gap-3">
                <Terminal size={16} className="text-[#7c1fac]" />
                <span className="text-base font-black tracking-tighter text-white uppercase">KLAAYN.</span>
            </div>
            
            <p className="order-3 md:order-2 tracking-[0.4em]">© {currentYear} OPERATIONAL UNIT</p>

            <div className="flex items-center gap-6 order-2 md:order-3">
                <Link href="/legal" className="hover:text-white transition-colors">Légal</Link>
                <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#7c1fac] animate-pulse"></span>
                    <span className="text-white/60">Secure Node</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}