"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SecondaryButton({ 
  href, 
  children, 
  className = "", 
  onClick 
}: SecondaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block md:inline-block ${className}`}
    >
      <Link href={href} onClick={onClick} className="block w-full">
        {/* MISE À JOUR CSS :
           - Structure : rounded-xl, px, py conservés.
           - Font : Connectée à var(--font-btn).
           - Couleurs : 
             * text-gray-400 -> var(--color-txt-muted)
             * hover:text-white -> var(--color-txt-main)
             * hover:bg-white/5 -> var(--color-btn-sec-bg)
        */}
        <button className="relative group w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-sm 
        font-[family-name:var(--font-btn)] font-extrabold transition-all duration-500 border border-transparent 
        text-[var(--color-txt-muted)] 
        hover:text-[var(--color-txt-main)] active:text-[var(--color-txt-main)] 
        hover:bg-[var(--color-btn-sec-bg)] active:bg-[var(--color-btn-sec-bg)] 
        overflow-hidden">
            
            {/* Shimmer (On garde white/10 car c'est un effet de lumière neutre qui fonctionne sur tout fond) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>

            <span className="relative z-10 flex items-center gap-2">
                <span>{children}</span>
                {/* Flèche */}
                <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
            </span>
        </button>
      </Link>
    </motion.div>
  );
}