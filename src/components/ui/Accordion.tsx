"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer group border rounded-[var(--radius-card)] overflow-hidden transition-all duration-300 ${
        isOpen
          /* ACTIF : Fond Surface + Bordure Violette (Brand) + PAS DE GLOW */
          ? "bg-[var(--color-surface)] border-[var(--color-brand)]"
          /* INACTIF : Fond transparent/dimmé + Bordure standard */
          : "bg-[var(--color-surface)]/50 border-[var(--color-border)] hover:border-[var(--color-txt-muted)]"
      }`}
    >
      {/* HEADER */}
      <div className="p-6 flex justify-between items-center">
        <h3 className={`font-[family-name:var(--font-outfit)] text-lg md:text-xl font-medium transition-colors duration-300 ${
            isOpen 
            ? "text-[var(--color-txt-main)]" 
            : "text-[var(--color-txt-muted)] group-hover:text-[var(--color-txt-main)]"
        }`}>
          {title}
        </h3>
        
        {/* ICONE (Rotation + Changement de couleur) */}
        <div className={`relative flex items-center justify-center w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
        }`}>
          <Plus 
            size={20} 
            className={`transition-colors duration-300 ${
                isOpen ? "text-[var(--color-brand)]" : "text-[var(--color-txt-dim)] group-hover:text-[var(--color-txt-main)]"
            }`} 
          />
        </div>
      </div>

      {/* CONTENT (Collapsible) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} // Easing naturel
          >
            <div className="px-6 pb-6 pt-0">
                <p className="text-body text-[var(--color-txt-muted)] leading-relaxed">
                    {children}
                </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}