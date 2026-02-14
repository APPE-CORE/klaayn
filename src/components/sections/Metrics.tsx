"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, TrendingUp, DollarSign, Users, MousePointerClick } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RoiSimulator() {
  // --- STATE ---
  const [traffic, setTraffic] = useState(15000);   // Visiteurs/mois
  const [conversion, setConversion] = useState(1.2); // Taux %
  const [aov, setAov] = useState(85);              // Panier €

  // --- ENGINE ---
  const stats = useMemo(() => {
    const uplift = 1.35; // +35% (Target standard pour une refonte UX/Speed complète)
    
    // Calculs Mensuels
    const currentMonthly = traffic * (conversion / 100) * aov;
    const projectedMonthly = traffic * (conversion * uplift / 100) * aov;
    const gainMonthly = projectedMonthly - currentMonthly;

    // Calculs Annuels
    const currentYearly = currentMonthly * 12;
    const projectedYearly = projectedMonthly * 12;
    const gainYearly = projectedYearly - currentYearly;

    // Taux optimisé
    const newConversion = conversion * uplift;

    return {
      currentMonthly,
      currentYearly,
      newConversion,
      projectedMonthly,
      projectedYearly,
      gainMonthly,
      gainYearly
    };
  }, [traffic, conversion, aov]);

  // --- FORMATTEURS INTELLIGENTS (Mobile "k" vs Desktop "Full") ---

  // Pour l'Argent (ex: 15k € vs 15 000 €)
  const Money = ({ value }: { value: number }) => (
    <>
      <span className="md:hidden">
        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', notation: "compact", maximumFractionDigits: 1 }).format(value)}
      </span>
      <span className="hidden md:inline">
        {/* On remplace l'espace fin insécable (\u202f) par un espace normal (\u0020) pour plus de visibilité */}
        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value).replace(/\u202f/g, ' ')}
      </span>
    </>
  );

  // Pour les Nombres Simples (ex: 10k vs 10 000)
  const NumberFmt = ({ value }: { value: number }) => (
    <>
      <span className="md:hidden">
        {new Intl.NumberFormat('fr-FR', { notation: "compact", maximumFractionDigits: 1 }).format(value).toLowerCase()}
      </span>
      <span className="hidden md:inline">
        {/* Force l'espace visible entre les milliers */}
        {new Intl.NumberFormat('fr-FR').format(value).replace(/\u202f/g, ' ')}
      </span>
    </>
  );

  return (
    <section className="relative w-full py-24 bg-[var(--color-void)] border-b border-[var(--color-border)] overflow-hidden">
      
      {/* Fond Technique (Grille Subtile) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION (Ajusté : mb-8 pour coller au tableau) */}
        <div className="text-center pt-10 mb-8 max-w-2xl mx-auto">
            <h2 className="text-display text-4xl md:text-5xl mb-4 text-white">
                Simulateur de <span className="text-[var(--color-brand)]">Performance</span>
            </h2>
            <p className="text-[var(--color-txt-muted)] text-sm md:text-base font-light">
                Impact financier estimé après optimisation de l'infrastructure & UX.
            </p>
        </div>

        {/* MAIN INTERFACE */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#080808] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* --- 1. INPUT PANEL (Gauche - Paramètres) --- */}
            <div className="w-full lg:w-[35%] p-6 md:p-10 bg-[var(--color-surface)]/30 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] flex flex-col justify-center gap-10">
                
                <div className="space-y-8">
                    {/* Header Inputs */}
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-txt-muted)] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        Vos Données Actuelles
                    </div>

                    {/* SLIDER 1 : TRAFIC */}
                    <div className="group">
                        <div className="flex justify-between text-sm mb-3">
                            <label className="text-white font-medium flex items-center gap-2">
                                <Users size={14} className="text-[var(--color-txt-dim)]" /> Trafic / mois
                            </label>
                            <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                <NumberFmt value={traffic} />
                            </span>
                        </div>
                        <input 
                            type="range" min="1000" max="100000" step="1000" 
                            value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                            className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-white hover:accent-[var(--color-brand)] transition-colors focus:outline-none"
                        />
                    </div>

                    {/* SLIDER 2 : CONVERSION */}
                    <div className="group">
                        <div className="flex justify-between text-sm mb-3">
                            <label className="text-white font-medium flex items-center gap-2">
                                <MousePointerClick size={14} className="text-[var(--color-txt-dim)]" /> Taux Conversion
                            </label>
                            <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                {conversion}%
                            </span>
                        </div>
                        <input 
                            type="range" min="0.1" max="5.0" step="0.1" 
                            value={conversion} onChange={(e) => setConversion(Number(e.target.value))}
                            className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-white hover:accent-[var(--color-brand)] transition-colors focus:outline-none"
                        />
                    </div>

                    {/* SLIDER 3 : AOV */}
                    <div className="group">
                        <div className="flex justify-between text-sm mb-3">
                            <label className="text-white font-medium flex items-center gap-2">
                                <DollarSign size={14} className="text-[var(--color-txt-dim)]" /> Panier Moyen
                            </label>
                            <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                {aov} €
                            </span>
                        </div>
                        <input 
                            type="range" min="10" max="500" step="5" 
                            value={aov} onChange={(e) => setAov(Number(e.target.value))}
                            className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-white hover:accent-[var(--color-brand)] transition-colors focus:outline-none"
                        />
                    </div>
                </div>

                {/* Note Source Réelle */}
                <div className="pt-6 border-t border-[var(--color-border)]">
                    <p className="text-[11px] text-[var(--color-txt-muted)] leading-relaxed italic">
                        *Selon l'étude "Milliseconds Make Millions" (Deloitte & Google), l'optimisation de la vitesse et de l'UX peut augmenter les conversions jusqu'à 35%.
                    </p>
                </div>
            </div>

            {/* --- 2. DATA TABLE & VISUALIZATION (Droite - Résultats) --- */}
            <div className="w-full lg:w-[65%] bg-[#050505] flex flex-col">
                
                {/* TOP BAR : Centrée & Épurée */}
                <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]/10 relative">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--color-txt-muted)] font-bold">
                        Analyse d'Opportunité
                    </span>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">

                    {/* TABLEAU COMPARATIF */}
                    <div className="w-full mb-10">
                        {/* En-têtes */}
                        <div className="grid grid-cols-4 pb-4 border-b border-[var(--color-border)] text-[9px] md:text-[10px] uppercase tracking-widest text-[var(--color-txt-muted)] font-mono">
                            <div className="col-span-1">KPI</div>
                            <div className="col-span-1 text-right">Actuel</div>
                            <div className="col-span-1 text-right text-white">Cible</div>
                            <div className="col-span-1 text-right text-[var(--color-brand)]">Gain</div>
                        </div>

                        {/* Ligne 1 : Conversion */}
                        <div className="grid grid-cols-4 py-4 border-b border-[var(--color-border)]/50 items-center text-xs md:text-sm">
                            <div className="col-span-1 font-medium text-[var(--color-txt-muted)]">Taux Conversion</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">{conversion}%</div>
                            <div className="col-span-1 text-right font-mono text-white">{stats.newConversion.toFixed(1)}%</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)]">+35%</div>
                        </div>

                        {/* Ligne 2 : Revenu Mensuel */}
                        <div className="grid grid-cols-4 py-4 border-b border-[var(--color-border)]/50 items-center text-xs md:text-sm">
                            <div className="col-span-1 font-medium text-white">CA Mensuel</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">
                                <Money value={stats.currentMonthly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-white">
                                <Money value={stats.projectedMonthly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)]">
                                +<Money value={stats.gainMonthly} />
                            </div>
                        </div>

                        {/* Ligne 3 : Revenu Annuel (Highlight Subtile) */}
                        <div className="relative grid grid-cols-4 py-4 items-center text-xs md:text-sm bg-[var(--color-brand)]/5 -mx-2 px-2 md:mx-0 md:px-0 rounded md:rounded-none mt-2 md:mt-0 overflow-hidden">
                            {/* Le petit trait vertical de couleur */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brand)]"></div>
                            
                            <div className="col-span-1 font-bold text-white pl-3">
                                CA Annuel
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">
                                <Money value={stats.currentYearly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-white font-bold">
                                <Money value={stats.projectedYearly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)] font-bold">
                                +<Money value={stats.gainYearly} />
                            </div>
                        </div>
                    </div>

                    {/* SECTION : LE CHIFFRE CLÉ */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 pt-6 border-t border-[var(--color-border)] border-dashed">
                        
                        {/* Bloc Texte (Gauche) */}
                        <div className="text-center md:text-left">
                            <div className="text-[10px] font-mono uppercase text-[var(--color-txt-muted)] mb-1">
                                Capital laissé à la concurrence
                            </div>
                            <div className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                                +<Money value={stats.gainYearly} />
                            </div>
                        </div>

                        {/* Bloc CTA (Droite - Aligné en bas) */}
                        <div className="w-full md:w-auto">
                            <Button href="/contact" icon={ArrowRight} className="w-full justify-center">
                                Capturer ce Revenu
                            </Button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
      </div>

      {/* CSS Slider Custom */}
      <style jsx>{`
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            margin-top: -6px;
            box-shadow: 0 0 0 4px #080808;
            transition: background 0.2s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
            background: var(--color-brand);
        }
      `}</style>
    </section>
  );
}