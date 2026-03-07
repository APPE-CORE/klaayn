"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, DollarSign, Users, MousePointerClick, TrendingUp, UserPlus } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RoiSimulator() {
  // --- STATE ---
  const [traffic, setTraffic] = useState(15000);
  const [conversion, setConversion] = useState(1.2);
  const [aov, setAov] = useState(85);

  // --- ENGINE ---
  const stats = useMemo(() => {
    const uplift = 1.35; // +35%
    
    const currentConversion = conversion / 100;
    const projectedConversion = (conversion * uplift) / 100;

    const currentMonthly = traffic * currentConversion * aov;
    const projectedMonthly = traffic * projectedConversion * aov;
    const gainMonthly = projectedMonthly - currentMonthly;
    
    const currentYearly = currentMonthly * 12;
    const projectedYearly = projectedMonthly * 12;
    const gainYearly = projectedYearly - currentYearly;
    
    const newConversion = conversion * uplift;

    // Nouveaux calculs pour l'acquisition client
    const currentCustomers = Math.round(traffic * currentConversion);
    const projectedCustomers = Math.round(traffic * projectedConversion);
    const gainCustomers = projectedCustomers - currentCustomers;

    return {
      currentMonthly,
      currentYearly,
      newConversion,
      projectedMonthly,
      projectedYearly,
      gainMonthly,
      gainYearly,
      currentCustomers,
      projectedCustomers,
      gainCustomers
    };
  }, [traffic, conversion, aov]);

  // --- FORMATTEURS ---
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

  const MoneyFull = ({ value }: { value: number }) => (
    <span>
      {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
        .format(value)
        .replace(/\u202f/g, ' ')}
    </span>
  );

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
    <section className="relative w-full py-26 bg-[var(--color-contrast)]">
      {/* Fond Technique */}
      <div className="absolute inset-0 bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center pt-10 mb-8 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-h2 mb-4 text-[var(--color-txt-main)]">
            Comprendre <span 
              className="inline-block pb-1 pr-1"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
             l'effet levier :
            </span>
          </h2>
          <p className="text-body-large text-[var(--color-txt-muted)]">
            Une "simple" augmentation de <strong className="text-[var(--color-txt-main)] font-semibold"> 35% de votre taux de conversion </strong> actuel génère un effet boule de neige monumental sur vos revenus.
          </p>
        </div>

        {/* MAIN INTERFACE */}
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-void)] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* --- 1. INPUT PANEL (Configuration) - 35% --- */}
          <div className="w-full lg:w-[35%] bg-[var(--color-surface)]/30 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] flex flex-col">
            <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]/10">
              <span className="text-label-bold font-medium text-[var(--color-txt-dim)]">
                Vos performances actuelles
              </span>
            </div>

            <div className="flex-1 p-6 md:p-8 flex flex-col">
              <div className="space-y-8 my-auto">
                
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <label className="text-body font-medium text-[var(--color-txt-main)] flex items-center gap-2">
                      <Users size={14} className="text-[var(--color-txt-dim)]" /> Trafic / mois
                    </label>
                    <span className="text-sm font-mono text-[var(--color-txt-brand)] bg-[var(--color-brand)]/10 px-2 py-1 rounded-md">
                      <NumberFmt value={traffic} />
                    </span>
                  </div>
                  <input
                    type="range" min="1000" max="100000" step="1000"
                    value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                    style={{ background: `linear-gradient(to right, var(--color-brand) ${((traffic - 1000) / (100000 - 1000)) * 100}%, var(--color-border) ${((traffic - 1000) / (100000 - 1000)) * 100}%)` }}
                    className="w-full h-[2px] rounded-full appearance-none cursor-pointer focus:outline-none slider-premium"
                  />
                </div>

                <div className="group">
                  <div className="flex justify-between mb-3">
                    <label className="text-body font-medium text-[var(--color-txt-main)] flex items-center gap-2">
                      <MousePointerClick size={14} className="text-[var(--color-txt-dim)]" /> Conversion
                    </label>
                    <span className="text-sm font-mono text-[var(--color-txt-brand)] bg-[var(--color-brand)]/10 px-2 py-1 rounded-md">
                      {conversion}%
                    </span>
                  </div>
                  <input
                    type="range" min="0.1" max="5.0" step="0.1"
                    value={conversion} onChange={(e) => setConversion(Number(e.target.value))}
                    style={{ background: `linear-gradient(to right, var(--color-brand) ${((conversion - 0.1) / (5.0 - 0.1)) * 100}%, var(--color-border) ${((conversion - 0.1) / (5.0 - 0.1)) * 100}%)` }}
                    className="w-full h-[2px] rounded-full appearance-none cursor-pointer focus:outline-none slider-premium"
                  />
                </div>

                <div className="group">
                  <div className="flex justify-between mb-3">
                    <label className="text-body font-medium text-[var(--color-txt-main)] flex items-center gap-2">
                      <DollarSign size={14} className="text-[var(--color-txt-dim)]" /> Panier Moyen
                    </label>
                    <span className="text-sm font-mono text-[var(--color-txt-brand)] bg-[var(--color-brand)]/10 px-2 py-1 rounded-md">
                      {aov} €
                    </span>
                  </div>
                  <input
                    type="range" min="10" max="500" step="5"
                    value={aov} onChange={(e) => setAov(Number(e.target.value))}
                    style={{ background: `linear-gradient(to right, var(--color-brand) ${((aov - 10) / (500 - 10)) * 100}%, var(--color-border) ${((aov - 10) / (500 - 10)) * 100}%)` }}
                    className="w-full h-[2px] rounded-full appearance-none cursor-pointer focus:outline-none slider-premium"
                  />
                </div>

              </div>

              {/* Alignement parfait en bas avec mt-auto */}
              <div className="pt-6 mt-auto">
                <p className="text-body-sm text-[var(--color-txt-dim)] leading-relaxed italic">
                  *Une hausse de +35% est la moyenne basse atteignable suite à une refonte de l'ergonomie et de la vitesse de votre site.
                </p>
              </div>
            </div>
          </div>

          {/* --- 2. DATA TABLE - 65% --- */}
          {/* Les paddings du bas (pb-6 md:pb-8) ont été unifiés avec la partie gauche */}
          <div className="w-full lg:w-[65%] bg-[var(--color-void)] flex flex-col">
            <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]/10">
              <span className="text-label-bold font-medium text-[var(--color-txt-dim)]">
                Performances avec Klaayn
              </span>
            </div>

            <div className="flex-1 p-6 md:px-10 md:pt-10 lg:px-12 lg:pt-12 pb-6 md:pb-8 flex flex-col">

              {/* === GRILLE PLATE : 3 Métriques pour équilibrer la hauteur === */}
              <div className="w-full mb-4 md:mb-6 flex flex-col my-auto">
                
                {/* Ligne 1 : Conversion */}
                <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-y-3 md:gap-y-0 items-center py-5 border-b border-[var(--color-border)]">
                  <div className="col-span-2 md:col-span-1 flex items-center gap-3 text-body font-medium text-[var(--color-txt-main)]">
                    <MousePointerClick size={16} className="text-[var(--color-txt-dim)]" />
                    Taux de Conversion
                  </div>
                  
                  {/* Espacement de la flèche réduit (gap-1.5) et espacement avant pilule augmenté (pr-8 md:pr-16) */}
                  <div className="col-span-1 flex items-center md:justify-center gap-1.5 md:gap-2 pr-8 md:pr-16 text-body font-mono">
                    <span className="text-[var(--color-txt-muted)]">{conversion}%</span>
                    <ArrowRight size={14} className="text-[var(--color-txt-dim)]" />
                    <span className="text-[var(--color-txt-main)]">{stats.newConversion.toFixed(2)}%</span>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <span className="inline-flex justify-center items-center gap-1.5 w-[110px] md:w-[130px] py-1.5 bg-[var(--color-action)]/10 text-[var(--color-action)] border-1 border-[var(--color-action)] rounded-lg text-xs font-mono whitespace-nowrap">
                      <TrendingUp size={12} />
                      +35%
                    </span>
                  </div>
                </div>

                {/* Ligne 2 : Clients */}
                <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-y-3 md:gap-y-0 items-center py-5 border-b border-[var(--color-border)]">
                  <div className="col-span-2 md:col-span-1 flex items-center gap-3 text-body font-medium text-[var(--color-txt-main)]">
                    <UserPlus size={16} className="text-[var(--color-txt-dim)]" />
                    Acquisition Mensuelle
                  </div>
                  
                  <div className="col-span-1 flex items-center md:justify-center gap-1.5 md:gap-2 pr-8 md:pr-16 text-body font-mono">
                    <span className="text-[var(--color-txt-muted)]"><NumberFmt value={stats.currentCustomers} /></span>
                    <ArrowRight size={14} className="text-[var(--color-txt-dim)]" />
                    <span className="text-[var(--color-txt-main)]"><NumberFmt value={stats.projectedCustomers} /></span>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <span className="inline-flex justify-center items-center gap-1.5 w-[110px] md:w-[130px] py-1.5 bg-[var(--color-main-ecom)]/10 text-[var(--color-main-ecom)] border-1 border-[var(--color-main-ecom)] rounded-lg text-xs font-mono whitespace-nowrap">
                      + <NumberFmt value={stats.gainCustomers} /> clients
                    </span>
                  </div>
                </div>

                {/* Ligne 3 : Revenu Mensuel */}
                <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-y-3 md:gap-y-0 items-center py-5">
                  <div className="col-span-2 md:col-span-1 flex items-center gap-3 text-body font-medium text-[var(--color-txt-main)]">
                    <DollarSign size={16} className="text-[var(--color-txt-dim)]" />
                    Revenu Mensuel
                  </div>
                  
                  <div className="col-span-1 flex items-center md:justify-center gap-1.5 md:gap-2 pr-8 md:pr-16 text-body font-mono">
                    <span className="text-[var(--color-txt-muted)]"><Money value={stats.currentMonthly} /></span>
                    <ArrowRight size={14} className="text-[var(--color-txt-dim)]" />
                    <span className="text-[var(--color-txt-main)]"><Money value={stats.projectedMonthly} /></span>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <span className="inline-flex justify-center items-center gap-1.5 w-[110px] md:w-[130px] py-1.5 bg-[var(--color-main-ecom)]/10 text-[var(--color-main-ecom)] border-1 border-[var(--color-main-ecom)] rounded-lg text-xs font-mono whitespace-nowrap">
                      + <Money value={stats.gainMonthly} /> /m
                    </span>
                  </div>
                </div>

              </div>

              {/* === BOTTOM : LA RUPTURE ANNUELLE === */}
              {/* Alignement parfait en bas avec mt-auto */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 pt-6 border-t border-[var(--color-border)] mt-auto">
                <div className="text-center md:text-left">
                  <div className="text-body text-[var(--color-txt-dim)] mb-2">
                    Ce que vous laissez à vos concurrents chaque année :
                  </div>
                  <div className="text-h2 text-[var(--color-txt-main)] whitespace-nowrap">
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

      {/* STYLES DES SLIDERS ELITE */}
      <style jsx>{`
        .slider-premium::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 6px;
          border-radius: 6px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          box-shadow: 0 0 10px var(--color-brand-glow);
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s;
        }
        .slider-premium::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px var(--color-brand-glow);
        }
        
        .slider-premium::-moz-range-thumb {
          height: 24px;
          width: 6px;
          border-radius: 6px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          box-shadow: 0 0 10px var(--color-brand-glow);
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s;
        }
        .slider-premium::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px var(--color-brand-glow);
        }
      `}</style>
    </section>
  );
}