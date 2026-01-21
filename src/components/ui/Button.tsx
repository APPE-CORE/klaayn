"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  size?: "default" | "small";
  responsive?: boolean;
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  icon: Icon = MessageSquare,
  onClick,
  size = "default",
  responsive = false 
}: ButtonProps) {
  
  // Gestion des classes
  let containerClasses = "";
  const radiusClasses = "rounded-full"; 

  if (responsive) {
    containerClasses = "px-5 py-2.5 md:px-6 md:py-2.5";
  } else {
    containerClasses = size === "small" ? "px-3 py-2 text-xs" : "px-4 md:px-6 py-2.5 text-sm";
  }

  const iconSize = (size === "small" || responsive) ? 20 : 16;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block md:inline-block ${className}`}
    >
      <Link href={href} onClick={onClick} className="block w-full">
        {/* AJOUT DES CLASSES active:... POUR LE MOBILE */}
        <button className={`relative group w-full flex items-center justify-center gap-2 ${containerClasses} ${radiusClasses} font-extrabold transition-all duration-500 border border-white/20 bg-white/10 text-white 
        hover:bg-[#cc5500] active:bg-[#cc5500] 
        hover:border-[#ff6b00] active:border-[#ff6b00] 
        hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] active:shadow-[0_0_25px_rgba(255,107,0,0.5)] 
        overflow-hidden`}>
            
            {/* Shimmer Orange : S'active aussi au group-active */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              <span className={responsive ? "hidden md:inline" : ""}>
                {children}
              </span>
              
              {/* Icône : Rotation active au toucher */}
              <Icon size={iconSize} strokeWidth={2.5} className="text-white/90 group-hover:rotate-12 group-active:rotate-12 transition-transform duration-300"/>
            </span> 
        </button>
      </Link>
    </motion.div>
  );
}