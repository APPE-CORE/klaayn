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
        {/* MODIFICATION ICI : Remplacement de 'rounded-full' par 'rounded-xl' */}
        <button className="relative group w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all duration-500 border border-transparent text-gray-400 
        hover:text-white active:text-white 
        hover:bg-white/5 active:bg-white/5 
        overflow-hidden">
            
            {/* Shimmer */}
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