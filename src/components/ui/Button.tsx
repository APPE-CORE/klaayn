"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, LucideIcon } from "lucide-react";

interface ButtonProps {
  href?: string; // Rendu optionnel pour permettre le mode bouton seul
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  size?: "default" | "small";
  responsive?: boolean;
  ariaLabel?: string; // AJOUT : Pour l'accessibilité explicite
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  icon: Icon = MessageSquare,
  onClick,
  size = "default",
  responsive = false,
  ariaLabel
}: ButtonProps) {
  
  // 1. Gestion des classes de style (identique à ton design)
  const radiusClasses = "rounded-xl"; 
  let sizeClasses = "";

  if (responsive) {
    sizeClasses = "px-5 py-2.5 md:px-6 md:py-2.5";
  } else {
    sizeClasses = size === "small" ? "px-3 py-2 text-xs" : "px-4 md:px-6 py-2.5 text-sm";
  }

  const iconSize = (size === "small" || responsive) ? 20 : 16;

  // 2. Définition du style commun (Bouton Orange / Shimmer)
  const commonStyles = `relative group w-full flex items-center justify-center gap-2 ${sizeClasses} ${radiusClasses} font-extrabold transition-all duration-500 border border-white/20 bg-white/10 text-white 
  hover:bg-[#cc5500] active:bg-[#cc5500] 
  hover:border-[#ff6b00] active:border-[#ff6b00]  
  hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] active:shadow-[0_0_25px_rgba(255,107,0,0.5)] 
  overflow-hidden cursor-pointer`;

  // 3. Définition du contenu intérieur (Texte + Icône)
  const content = (
    <>
      {/* Shimmer Orange */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
      
      <span className="relative z-10 flex items-center gap-2">
        {/* Le texte est caché sur mobile si responsive=true, mais reste dans le DOM */}
        <span className={responsive ? "hidden md:inline" : ""}>
          {children}
        </span>
        
        {/* Icône */}
        <Icon size={iconSize} strokeWidth={2.5} className="text-white/90 group-hover:rotate-12 group-active:rotate-12 transition-transform duration-300"/>
      </span> 
    </>
  );

  // 4. Calcul du label accessible (Priorité : ariaLabel > texte enfants > texte par défaut)
  const accessibleName = ariaLabel || (typeof children === 'string' ? children : "Bouton d'action");

  // 5. Rendu conditionnel : Soit un Link, soit un Button (Jamais imbriqués)
  
  // CAS A : C'est un LIEN (si href existe)
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`block md:inline-block ${className}`}
      >
        <Link 
            href={href} 
            onClick={onClick} 
            className={commonStyles}
            aria-label={accessibleName} // Résout "Les liens n'ont pas de nom visible"
        >
            {content}
        </Link>
      </motion.div>
    );
  }

  // CAS B : C'est un BOUTON (si pas de href)
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block md:inline-block ${className}`}
    >
        <button 
            onClick={onClick} 
            className={commonStyles}
            aria-label={accessibleName} // Résout "Les boutons n'ont pas de nom accessible"
        >
            {content}
        </button>
    </motion.div>
  );
}