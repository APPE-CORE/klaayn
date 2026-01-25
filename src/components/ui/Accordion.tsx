"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function Accordion({ title, children, isOpen, onToggle, className = "" }: AccordionProps) {
  return (
    <div 
      onClick={onToggle}
      className={`group cursor-pointer border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen 
        ? "bg-[#080808] border-brand/30 shadow-[0_0_30px_rgba(124,31,172,0.05)]" 
        : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
      } ${className}`}
    >
        {/* Header (Titre + Icone) */}
        <div className="p-6 md:p-8 flex items-start justify-between gap-6">
            <h3 className={`text-lg md:text-xl font-display font-medium transition-colors duration-300 ${
                isOpen ? "text-brand" : "text-white group-hover:text-white/90"
            }`}>
                {title}
            </h3>
            
            {/* Icone Toggle */}
            <div className={`shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen 
                ? "bg-brand text-white border-brand rotate-180" 
                : "bg-white/5 text-white/50 border-white/10 group-hover:border-white/30 group-hover:text-white"
            }`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </div>
        </div>

        {/* Contenu (AnimatePresence) */}
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-[1px] w-full bg-white/5 mb-6"></div>
                        <div className="flex gap-4">
                            {/* Icone décorative optionnelle, on peut la laisser ici ou la passer en prop si besoin */}
                            <MessageSquare size={20} className="text-white/20 shrink-0 mt-1" />
                            <div className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                                {children}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}