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
  icon: Icon = ArrowRight, // On part d'une flèche horizontale
  onClick 
}: GhostButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`block w-full md:w-auto ${className}`} // Largeur 100% Mobile / Auto PC
    >
      <Link href={href} onClick={onClick} className="block w-full">
        <button className="group relative w-full flex items-center justify-between gap-6 pl-6 pr-4 py-4 rounded-xl transition-all duration-500 overflow-hidden
          border border-white/10 bg-white/5 
          hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_20px_rgba(124,31,172,0.4)]
          active:border-brand active:bg-brand/20
        ">
            
            {/* Effet de brillance au survol (Shimmer) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

            {/* Contenu (Aligné à gauche) */}
            <div className="flex flex-col items-start relative z-10">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-brand transition-colors duration-300">
                    Action
                </span>
                <span className="text-base font-bold font-sans text-white uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                    {children}
                </span>
            </div>

            {/* Icône Cercle (Structure Carré Imaginaire à Droite) */}
            {/* Le padding pr-4 et py-4 assure un espacement égal Haut/Bas/Droite autour du cercle */}
            <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-void/50 
              group-hover:border-brand group-hover:bg-brand group-hover:text-white 
              transition-all duration-300"
            >
                <Icon 
                  size={18} 
                  className="text-white/70 group-hover:text-white transition-transform duration-500 ease-out 
                  group-hover:-rotate-45 group-active:-rotate-45" // Rotation vers le haut-droit
                />
            </div>

        </button>
      </Link>
    </motion.div>
  );
}