"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, LucideIcon } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  size?: "default" | "small";
  responsive?: boolean;
  ariaLabel?: string;
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
  
  // 1. Gestion des classes de style (Structure)
  const radiusClasses = "rounded-xl"; 
  let sizeClasses = "";

  if (responsive) {
    sizeClasses = "px-5 py-2.5 md:px-6 md:py-2.5";
  } else {
    sizeClasses = size === "small" ? "px-3 py-2 text-xs" : "px-4 md:px-6 py-2.5 text-sm";
  }

  const iconSize = (size === "small" || responsive) ? 20 : 16;

  // 2. Définition du style commun
  // REMPLACEMENT : Les couleurs HEX sont remplacées par les variables CSS (var(--...))
  // - text-white -> text-[var(--color-txt-main)]
  // - hover:bg-[#cc5500] -> hover:bg-[var(--color-action-hover)]
  // - hover:border-[#ff6b00] -> hover:border-[var(--color-action)]
  // - hover:shadow -> hover:shadow-[0_0_25px_var(--color-action-glow)]
  // - font-extrabold + font-[family-name:var(--font-btn)] pour contrôler la typo
  
  const commonStyles = `relative group w-full flex items-center justify-center gap-2 ${sizeClasses} ${radiusClasses} 
  font-[family-name:var(--font-btn)] font-extrabold transition-all duration-500 
  border border-white/20 bg-white/10 text-[var(--color-txt-main)]
  hover:bg-[var(--color-action-hover)] active:bg-[var(--color-action-hover)] 
  hover:border-[var(--color-action)] active:border-[var(--color-action)]  
  hover:shadow-[0_0_25px_var(--color-action-glow)] active:shadow-[0_0_25px_var(--color-action-glow)] 
  overflow-hidden cursor-pointer`;

  // 3. Définition du contenu intérieur (Texte + Icône)
  const content = (
    <>
      {/* Shimmer Effect (On garde les valeurs white/20 car c'est un effet de lumière neutre) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
      
      <span className="relative z-10 flex items-center gap-2">
        <span className={responsive ? "hidden md:inline" : ""}>
          {children}
        </span>
        
        {/* L'icône suit aussi la couleur du texte principal */}
        <Icon size={iconSize} strokeWidth={2.5} className="text-[var(--color-txt-main)] opacity-90 group-hover:rotate-12 group-active:rotate-12 transition-transform duration-300"/>
      </span> 
    </>
  );

  // 4. Calcul du label accessible
  const accessibleName = ariaLabel || (typeof children === 'string' ? children : "Bouton d'action");

  // 5. Rendu conditionnel
  
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
            aria-label={accessibleName}
        >
            {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block md:inline-block ${className}`}
    >
        <button 
            onClick={onClick} 
            className={commonStyles}
            aria-label={accessibleName}
        >
            {content}
        </button>
    </motion.div>
  );
}