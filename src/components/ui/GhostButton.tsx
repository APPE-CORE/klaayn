"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

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
  icon: Icon = ArrowUpRight,
  onClick 
}: GhostButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-block ${className}`}
    >
      <Link href={href} onClick={onClick} className="block w-full">
        <button className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-500 overflow-hidden
          border border-white/10 bg-white/5 
          hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_20px_rgba(124,31,172,0.4)]
          active:border-brand active:bg-brand/20
        ">
            
            {/* Effet de brillance au survol (Shimmer) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

            {/* Contenu */}
            <div className="flex flex-col items-start relative z-10">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest group-hover:text-brand transition-colors duration-300">
                    Action
                </span>
                <span className="text-sm font-bold font-sans text-white uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                    {children}
                </span>
            </div>

            {/* Icône Cercle */}
            <div className="relative z-10 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-void/50 group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <Icon size={16} className="text-white/70 group-hover:text-white transition-colors" />
            </div>

        </button>
      </Link>
    </motion.div>
  );
}