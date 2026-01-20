"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "header";
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "", 
  icon: Icon = MessageSquare,
  onClick 
}: ButtonProps) {
  
  // Matrice des styles par variante
  const variants = {
    // Bouton Impact (Hero & Footer)
    primary: "px-8 py-4 text-sm font-extrabold border-white/20 bg-white/10 hover:bg-[#cc5500] hover:border-[#ff6b00] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]",
    
    // Bouton Navigation (Header) - Plus compact
    header: "px-4 md:px-6 py-2.5 text-sm font-extrabold border-white/20 bg-white/10 hover:bg-[#cc5500] hover:border-[#ff6b00] hover:shadow-[0_0_25px_rgba(255,107,0,0.4)]"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block md:inline-block ${className}`}
    >
      <Link href={href} onClick={onClick} className={`block w-full md:w-auto`}>
        <button className={`relative group w-full flex items-center justify-center gap-2 rounded-full text-white transition-all duration-500 border overflow-hidden ${variants[variant]}`}>
            
            {/* Shimmer Systémique (Orange) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              <span className={variant === "header" ? "hidden sm:inline" : ""}>{children}</span>
              <Icon size={variant === "header" ? 16 : 18} strokeWidth={3} className="text-white/90 group-hover:rotate-12 transition-transform duration-300"/>
            </span> 
        </button>
      </Link>
    </motion.div>
  );
}