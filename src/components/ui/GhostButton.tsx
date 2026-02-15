"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export default function GhostButton({ 
  href, 
  children, 
  className = "", 
  icon: Icon = ArrowRight, 
  onClick 
}: GhostButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`block w-full md:w-auto ${className}`}
    >
      <Link href={href} onClick={onClick} className="block w-full">
        {/* MISE À JOUR CSS :
           - Structure (padding, flex, gap) : IDENTIQUE.
           - Couleurs : Connectées aux variables CSS.
             * border-white/10 -> border-[var(--color-border)]
             * bg-white/5 -> bg-[var(--color-btn-sec-bg)]
             * hover:border-brand -> hover:border-[var(--color-brand)]
             * hover:bg-brand/10 -> hover:bg-[color-mix(in_srgb,var(--color-brand),transparent_90%)]
             * hover:shadow -> hover:shadow-[0_0_20px_var(--color-brand-glow)]
        */}
        <button className="group relative w-full flex items-center justify-between gap-6 pl-6 pr-4 py-4 rounded-xl transition-all duration-300 overflow-hidden
          border border-[var(--color-border)] bg-[var(--color-btn-sec-bg)] 
          
          /* --- ÉTAT HOVER (PC) --- */
          hover:border-[var(--color-brand)] 
          hover:bg-[color-mix(in_srgb,var(--color-brand),transparent_90%)] 
          hover:shadow-[0_0_20px_var(--color-brand-glow)]
          
          /* --- ÉTAT ACTIVE (MOBILE) --- */
          active:border-[var(--color-brand)] 
          active:bg-[color-mix(in_srgb,var(--color-brand),transparent_90%)] 
          active:shadow-[0_0_20px_var(--color-brand-glow)]
        ">
            
            {/* Effet Shimmer (conservé tel quel pour l'effet lumière blanche neutre) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

            {/* Contenu Texte */}
            <div className="flex flex-col items-start relative z-10">
                {/* Font Mono pour "ACTION" */}
                <span className="text-[10px] font-[family-name:var(--font-jetbrains)] text-[var(--color-txt-muted)] uppercase tracking-widest group-hover:text-[var(--color-brand)] group-active:text-[var(--color-brand)] transition-colors duration-300">
                    Action
                </span>
                {/* Font Sans pour le Label */}
                <span className="text-base font-bold font-[family-name:var(--font-btn)] text-[var(--color-txt-main)] uppercase tracking-wide group-hover:text-[var(--color-txt-main)] group-active:text-[var(--color-txt-main)] transition-colors duration-300">
                    {children}
                </span>
            </div>

            {/* Icône Cercle */}
            <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-void)] 
              group-hover:border-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[var(--color-txt-main)] 
              group-active:border-[var(--color-brand)] group-active:bg-[var(--color-brand)] group-active:text-[var(--color-txt-main)]
              transition-all duration-300"
            >
                <Icon 
                  size={18} 
                  className="text-[var(--color-txt-muted)] group-hover:text-[var(--color-txt-main)] group-active:text-[var(--color-txt-main)] transition-transform duration-500 ease-out 
                  group-hover:-rotate-45 group-active:-rotate-45" 
                />
            </div>

        </button>
      </Link>
    </motion.div>
  );
}