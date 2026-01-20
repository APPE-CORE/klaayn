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
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  icon: Icon = MessageSquare,
  onClick 
}: ButtonProps) {
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // On garde la gestion de la largeur : pleine sur mobile, auto sur PC
      className={`block md:inline-block ${className}`}
    >
      <Link href={href} onClick={onClick} className="block w-full">
        <button className="relative group w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-500 border border-white/20 bg-white/10 text-white hover:bg-[#cc5500] hover:border-[#ff6b00] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] overflow-hidden">
            
            {/* Shimmer Systémique Orange */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              {/* Le texte s'adapte désormais partout sans masquage partiel */}
              <span>{children}</span>
              <Icon size={16} strokeWidth={3} className="text-white/90 group-hover:rotate-12 transition-transform duration-300"/>
            </span> 
        </button>
      </Link>
    </motion.div>
  );
}