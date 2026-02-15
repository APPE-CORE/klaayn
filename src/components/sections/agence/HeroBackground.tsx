"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- LOGIQUE DESKTOP UNIQUEMENT ---
  const mouseX = useMotionValue(0); 
  const mouseY = useMotionValue(0);
  const lightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const lightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) { 
        mouseX.set(e.clientX - rect.left); 
        mouseY.set(e.clientY - rect.top); 
    }
  }

  const maskImage = useMotionTemplate`radial-gradient(800px circle at ${lightX}px ${lightY}px, black, transparent 80%)`;

  return (
    <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[var(--color-void)]"
    >
        {/* 1. FOND GRAPHIQUE DE BASE (Statique) */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                    // Utilisation de --color-txt-main (Blanc) pour les lignes de base
                    backgroundImage: `repeating-linear-gradient(45deg, var(--color-txt-main) 0px, var(--color-txt-main) 1px, transparent 1px, transparent 24px)`
                }}>
            </div>
        </div>
        
        {/* 2. LUMIÈRE MOBILE (Statique & Optimisée) */}
        <div className="md:hidden absolute inset-0 z-1 pointer-events-none">
             <div className="absolute inset-0" 
                style={{ 
                    backgroundImage: `repeating-linear-gradient(45deg, var(--color-brand) 0px, var(--color-brand) 1px, transparent 1px, transparent 24px)`, 
                    opacity: 0.3, 
                    maskImage: 'radial-gradient(500px circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(500px circle at center, black, transparent 80%)'
                }}>
            </div>
            {/* Glow central statique */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-brand)] rounded-full blur-[100px] opacity-20 mix-blend-screen" />
        </div>

        {/* 3. LUMIÈRE SPOTLIGHT DESKTOP (Interactive) */}
        <motion.div 
            className="hidden md:block absolute inset-0 z-1 pointer-events-none" 
            style={{ maskImage, WebkitMaskImage: maskImage }}
        >
            <div className="absolute inset-0" 
                style={{ 
                    // Pattern Violet (Brand) qui se révèle au survol
                    backgroundImage: `repeating-linear-gradient(45deg, var(--color-brand) 0px, var(--color-brand) 1px, transparent 1px, transparent 24px)`, 
                    opacity: 0.5, 
                    filter: 'drop-shadow(0 0 2px var(--color-brand))' 
                }}>
            </div>
            {/* Curseur lumineux suiveur */}
            <motion.div 
                style={{ x: lightX, y: lightY, translateX: "-50%", translateY: "-50%" }} 
                className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--color-brand)] rounded-full blur-[120px] opacity-40 mix-blend-screen" 
            />
        </motion.div>
    </div>
  );
}