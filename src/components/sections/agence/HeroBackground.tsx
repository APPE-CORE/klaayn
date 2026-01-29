"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        className="absolute inset-0 z-0 w-full h-full"
    >
        {/* FOND GRAPHIQUE (Sans Noise) */}
        <div className="absolute inset-0 z-0 bg-void">
            <div className="absolute inset-0 opacity-[0.08]" 
                style={{ 
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 24px)`
                }}>
            </div>
            {/* Ligne Noise supprimée pour la performance pure */}
        </div>
        
        {/* LUMIÈRE SPOTLIGHT */}
        <motion.div className="absolute inset-0 z-1 pointer-events-none bg-void" style={{ maskImage, WebkitMaskImage: maskImage }}>
            <div className="absolute inset-0" 
                style={{ 
                    backgroundImage: `repeating-linear-gradient(45deg, var(--color-brand) 0px, var(--color-brand) 1px, transparent 1px, transparent 24px)`, 
                    opacity: 0.4, 
                    filter: 'drop-shadow(0 0 2px var(--color-brand))' 
                }}>
            </div>
            <motion.div style={{ x: lightX, y: lightY, translateX: "-50%", translateY: "-50%" }} className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        </motion.div>
    </div>
  );
}