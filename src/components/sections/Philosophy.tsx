"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SCROLL 1000vh (Suffisant pour 4 actes lents)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const glow = "drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"; // Glow renforcé

  // --- ACTE 1 : LE BRUIT (0% - 20%) ---
  // Plateau : Reste visible de 0.10 à 0.18
  const opacity1 = useTransform(smoothProgress, [0.05, 0.10, 0.18, 0.23], [0, 1, 1, 0]);
  const blur1 = useTransform(smoothProgress, [0.05, 0.10, 0.18, 0.23], ["10px", "0px", "0px", "10px"]);
  
  // --- ACTE 2 : L'INDIFFERENCE (25% - 45%) ---
  // Plateau : Reste visible de 0.32 à 0.40
  const opacity2 = useTransform(smoothProgress, [0.25, 0.32, 0.40, 0.47], [0, 1, 1, 0]);
  const scale2 = useTransform(smoothProgress, [0.25, 0.47], [0.95, 1.05]);
  
  // --- ACTE 3 : LE TEMPS (50% - 75%) ---
  // Plateau : Reste visible de 0.58 à 0.68
  const opacity3 = useTransform(smoothProgress, [0.5, 0.58, 0.68, 0.76], [0, 1, 1, 0]);
  const spacing3 = useTransform(smoothProgress, [0.5, 0.76], ["-0.05em", "0.02em"]);

  // --- ACTE 4 : L'ACTION (80% - 100%) ---
  // Plateau : Reste visible de 0.85 à 0.95 (Disparaît juste à la fin pour la transition)
  const opacity4 = useTransform(smoothProgress, [0.8, 0.88, 0.96, 1], [0, 1, 1, 0]);
  const y4 = useTransform(smoothProgress, [0.8, 1], [20, -20]);

  return (
    <section ref={containerRef} className="relative h-[1000vh] bg-void font-sans cursor-default">
      
      {/* CADRE STICKY */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* FOND : Noir Pur + Grain + Vignetage */}
        <div className="absolute inset-0 bg-void z-0">
             <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
             <div className="absolute inset-0 bg-radial-gradient from-transparent to-void opacity-80"></div>
        </div>

        {/* --- ACTE 1 : LE CONSTAT --- */}
        <motion.div 
            style={{ opacity: opacity1, filter: blur1 }} 
            className="absolute z-10 text-center w-full px-6"
        >
            <h2 className={`text-display text-[7vw] md:text-[5vw] text-white leading-[1.1] tracking-tight ${glow}`}>
                Le marché suffoque.
            </h2>
            <p className="mt-8 text-body-large text-lg text-txt-muted max-w-xl mx-auto">
                Trop de bruit. Trop de copies.
            </p>
        </motion.div>

        {/* --- ACTE 2 : L'INDIFFERENCE --- */}
        <motion.h2 
            style={{ opacity: opacity2, scale: scale2 }} 
            className={`absolute z-10 text-display text-[7vw] md:text-[5vw] text-white text-center leading-[1.1] tracking-tight ${glow}`}
        >
            L'indifférence est <br/>
            la nouvelle norme.
        </motion.h2>

        {/* --- ACTE 3 : LE TEMPS (3 Secondes) --- */}
        <motion.div 
            style={{ opacity: opacity3, letterSpacing: spacing3 }} 
            className="absolute z-20 text-center w-full px-4"
        >
            <h2 className={`text-display text-[6vw] md:text-[4vw] text-white leading-tight ${glow}`}>
                Votre survie se joue en <span className="text-white border-b-2 border-brand pb-1">3 secondes</span>.
            </h2>
        </motion.div>

        {/* --- ACTE 4 : L'ACTION (Finale) --- */}
        <motion.h2 
            style={{ opacity: opacity4, y: y4 }} 
            className={`absolute z-10 text-display text-[7vw] md:text-[5vw] text-white text-center leading-[1.1] tracking-tight px-4 ${glow}`}
        >
            Cessez de participer. <br/>
            <span className="text-white border-b-2 border-brand pb-1">Commencez</span> à dominer.
        </motion.h2>

      </div>
    </section>
  );
}