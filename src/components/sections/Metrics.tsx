"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, TrendingUp, DollarSign, Users, MousePointerClick } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RoiSimulator() {
  // --- STATE ---
  const [traffic, setTraffic] = useState(15000);   
  const [conversion, setConversion] = useState(1.2); 
  const [aov, setAov] = useState(85);              

  // --- ENGINE ---
  const stats = useMemo(() => {
    const uplift = 1.35; 
    const currentMonthly = traffic * (conversion / 100) * aov;
    const projectedMonthly = traffic * (conversion * uplift / 100) * aov;
    const gainMonthly = projectedMonthly - currentMonthly;
    const currentYearly = currentMonthly * 12;
    const projectedYearly = projectedMonthly * 12;
    const gainYearly = projectedYearly - currentYearly;
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

  // --- FORMATTEURS ---

  // Argent Compact (Mobile: 15k€ / Desktop: 15 000 €)
  const Money = ({ value }: { value: number }) => (
    <>
      <span className="md:hidden">
        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', notation: "compact", maximumFractionDigits: 1 })
          .format(value)
          .replace(/\s/g, '')}
      </span>
      <span className="hidden md:inline">
        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
          .format(value)
          .replace(/\u202f/g, ' ')}
      </span>
    </>
  );

  // Argent Full (Toujours 150 000 €)
  const MoneyFull = ({ value }: { value: number }) => (
    <span>
      {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
        .format(value)
        .replace(/\u202f/g, ' ')}
    </span>
  );

  // Nombres (Mobile: 15k / Desktop: 15 000)
  const NumberFmt = ({ value }: { value: number }) => (
    <>
      <span className="md:hidden">
        {new Intl.NumberFormat('fr-FR', { notation: "compact", maximumFractionDigits: 1 })
          .format(value)
          .toLowerCase()
          .replace(/\s/g, '')}
      </span>
      <span className="hidden md:inline">
        {new Intl.NumberFormat('fr-FR').format(value).replace(/\u202f/g, ' ')}
      </span>
    </>
  );

  return (
    <section className="relative w-full py-24 bg-[var(--color-void)] border-b border-[var(--color-border)] overflow-hidden">
      
      {/* Fond Technique */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center pt-10 mb-8 max-w-2xl mx-auto">
            <h2 className="text-display !text-[clamp(2.5rem,5vw,4rem)] mb-4 text-[var(--color-txt-main)]">
                Simulateur de <span className="text-[var(--color-brand)]">Performance</span>
            </h2>
            <p className="text-body-large text-sm md:text-base">
                Impact financier estimé après optimisation de l'infrastructure & UX.
            </p>
        </div>

        {/* MAIN INTERFACE */}
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-contrast)] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* --- 1. INPUT PANEL (Configuration) --- */}
            <div className="w-full lg:w-[35%] bg-[var(--color-surface)]/30 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] flex flex-col">
                
                <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]/10">
                    <span className="text-label-tech text-[var(--color-txt-dim)] font-bold">
                        Vous actuellement :
                    </span>
                </div>

                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center gap-10">
                    <div className="space-y-8">
                        {/* SLIDER 1 : TRAFIC */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-3">
                                <label className="text-[var(--color-txt-main)] font-medium flex items-center gap-2">
                                    <Users size={14} className="text-[var(--color-txt-dim)]" /> Trafic / mois
                                </label>
                                <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                    <NumberFmt value={traffic} />
                                </span>
                            </div>
                            <input 
                                type="range" min="1000" max="100000" step="1000" 
                                value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                                className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-[var(--color-brand)] transition-colors focus:outline-none"
                            />
                        </div>

                        {/* SLIDER 2 : CONVERSION */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-3">
                                <label className="text-[var(--color-txt-main)] font-medium flex items-center gap-2">
                                    <MousePointerClick size={14} className="text-[var(--color-txt-dim)]" /> Taux Conversion
                                </label>
                                <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                    {conversion}%
                                </span>
                            </div>
                            <input 
                                type="range" min="0.1" max="5.0" step="0.1" 
                                value={conversion} onChange={(e) => setConversion(Number(e.target.value))}
                                className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-[var(--color-brand)] transition-colors focus:outline-none"
                            />
                        </div>

                        {/* SLIDER 3 : AOV */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-3">
                                <label className="text-[var(--color-txt-main)] font-medium flex items-center gap-2">
                                    <DollarSign size={14} className="text-[var(--color-txt-dim)]" /> Panier Moyen
                                </label>
                                <span className="font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded text-xs">
                                    {aov} €
                                </span>
                            </div>
                            <input 
                                type="range" min="10" max="500" step="5" 
                                value={aov} onChange={(e) => setAov(Number(e.target.value))}
                                className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-[var(--color-brand)] transition-colors focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-[var(--color-border)]">
                        <p className="text-[11px] text-[var(--color-txt-dim)] leading-relaxed italic">
                            *Selon l'étude "Milliseconds Make Millions" (Deloitte), l'optimisation speed/UX peut augmenter les conversions jusqu'à 35%.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- 2. DATA TABLE --- */}
            <div className="w-full lg:w-[65%] bg-[var(--color-void)] flex flex-col">
                
                <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]/10">
                    <span className="text-label-tech text-[var(--color-txt-dim)] font-bold">
                        Analyse d'Opportunité
                    </span>
                </div>

                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">

                    <div className="w-full mb-10">
                        {/* En-têtes */}
                        <div className="grid grid-cols-4 pb-4 border-b border-[var(--color-border)] text-[var(--color-txt-dim)]">
                            <div className="col-span-1 text-label-tech">KPI</div>
                            <div className="col-span-1 text-right text-label-tech">Actuel</div>
                            <div className="col-span-1 text-right text-label-tech text-[var(--color-txt-main)]">Cible</div>
                            <div className="col-span-1 text-right text-label-tech text-[var(--color-brand)]">Gain</div>
                        </div>

                        {/* Ligne 1 : Conversion */}
                        <div className="grid grid-cols-4 py-4 border-b border-[var(--color-border)]/50 items-center text-sm">
                            <div className="col-span-1 font-medium text-[var(--color-txt-muted)]">Taux Conversion</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">{conversion}%</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-main)]">{stats.newConversion.toFixed(1)}%</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)]">+35%</div>
                        </div>

                        {/* Ligne 2 : Revenu Mensuel */}
                        <div className="grid grid-cols-4 py-4 border-b border-[var(--color-border)]/50 items-center text-sm">
                            <div className="col-span-1 font-medium text-[var(--color-txt-main)]">CA Mensuel</div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">
                                <Money value={stats.currentMonthly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-main)]">
                                <Money value={stats.projectedMonthly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)]">
                                +<Money value={stats.gainMonthly} />
                            </div>
                        </div>

                        {/* Ligne 3 : CA Annuel */}
                        <div className="relative grid grid-cols-4 py-4 items-center text-sm bg-[var(--color-brand)]/5 -mx-2 px-2 md:mx-0 md:px-0 rounded md:rounded-none mt-2 md:mt-0 overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brand)]"></div>
                            <div className="col-span-1 font-bold text-[var(--color-txt-main)] pl-3">
                                CA Annuel
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-muted)]">
                                <Money value={stats.currentYearly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-txt-main)] font-bold">
                                <Money value={stats.projectedYearly} />
                            </div>
                            <div className="col-span-1 text-right font-mono text-[var(--color-brand)] font-bold">
                                +<Money value={stats.gainYearly} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 pt-6 border-t border-[var(--color-border)] border-dashed">
                        <div className="text-center md:text-left">
                            <div className="text-label-tech text-[var(--color-txt-dim)] mb-1">
                                Capital laissé à la concurrence
                            </div>
                            {/* MISE À JOUR : Utilisation de MoneyFull pour forcer le chiffre entier sur tous les supports */}
                            <div className="text-display !text-[clamp(2.5rem,5vw,3rem)] font-bold text-[var(--color-txt-main)] tracking-tight">
                                +<MoneyFull value={stats.gainYearly} />
                            </div>
                        </div>

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

      <style jsx>{`
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            margin-top: -6px;
            box-shadow: 0 0 0 4px var(--color-contrast);
            transition: background 0.2s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
            background: var(--color-brand);
        }
      `}</style>
    </section>
  );
}