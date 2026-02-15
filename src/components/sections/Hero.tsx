"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Zap, Target, Crown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";

// --- SOUS-COMPOSANT CARTE (Pour respecter les Hooks React) ---
const MonolithCard = ({ item }: { item: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      cardMouseX.set(e.clientX - rect.left);
      cardMouseY.set(e.clientY - rect.top);
    }
  };

  const cardMask = useMotionTemplate`radial-gradient(180px circle at ${cardMouseX}px ${cardMouseY}px, white, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 h-24 md:h-28 flex items-center overflow-hidden"
    >
      {/* Shimmer actif uniquement sur Desktop */}
      <motion.div
        className="hidden md:block absolute inset-0 bg-gradient-to-br from-[var(--color-txt-main)]/[0.12] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ WebkitMaskImage: cardMask, maskImage: cardMask }}
      />

      <div className="relative z-10 w-full flex items-center justify-between gap-4">
        <div className="flex flex-col justify-center">
          {/* Valeur : Gros Chiffre */}
          <span className="text-3xl md:text-5xl font-[family-name:var(--font-outfit)] font-medium text-[var(--color-txt-main)] tracking-tighter leading-none">
            {item.value}
          </span>
          <span className="text-label-tech text-[var(--color-txt-dim)] mt-1">
            {item.desc}
          </span>
        </div>

        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-2 text-[var(--color-brand)] mb-1">
            <span className="text-label-bold text-[10px]">{item.title}</span>
            {item.icon}
          </div>
          <span className="text-label-tech text-[9px] text-[var(--color-txt-dim)]/50">
            {item.metric}
          </span>
          <ChevronRight
            size={14}
            className="text-[var(--color-txt-dim)] mt-2 group-hover:text-[var(--color-brand)] transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yBottom = useTransform(scrollY, [0, 500], [0, -20]);

  // LOGIQUE DESKTOP UNIQUEMENT
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
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden bg-[var(--color-void)] text-[var(--color-txt-main)] selection:bg-[var(--color-brand)] pt-24 pb-10 md:pt-32 md:pb-16"
    >
      {/* 1. FOND GRAPHIQUE (Statique - Rapide) */}
      <div className="absolute inset-0 z-0 bg-[var(--color-void)]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      {/* 2. ÉCLAIRAGE MOBILE (FIXE MAIS COMPLET AVEC GRILLE) */}
      <div className="md:hidden absolute inset-0 z-1 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.5,
            filter: "drop-shadow(0 0 3px var(--color-brand))",
            maskImage:
              "radial-gradient(600px circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(600px circle at center, black, transparent 80%)",
          }}
        ></div>
        {/* Glow centré */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-brand)] rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>

      {/* 3. ÉCLAIRAGE DESKTOP (INTERACTIF) */}
      <motion.div
        className="hidden md:block absolute inset-0 z-1 pointer-events-none bg-[var(--color-void)]"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.5,
            filter: "drop-shadow(0 0 3px var(--color-brand))",
          }}
        ></div>
        <motion.div
          style={{
            x: lightX,
            y: lightY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--color-brand)] rounded-full blur-[120px] opacity-40 mix-blend-screen"
        />
      </motion.div>

      {/* 4. CONTENU PRINCIPAL */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6 flex-1 justify-center">
        {/* Badge */}
        <div className="mb-4 md:mb-8 flex items-center gap-3 px-3 py-1.5 w-fit bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-full backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
          <span className="text-label-tech text-[10px] md:text-[11px] text-[var(--color-txt-muted)]">
            Architectes de performance
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-display mb-6 text-[var(--color-txt-main)] whitespace-nowrap">
          Forger<br className="md:hidden" /> l'autorité.
        </h1>

        {/* Sous-titre */}
        <p className="text-body-large mb-8 md:mb-10 px-2 lg:max-w-[42rem]">
          Infrastructures digitales de haute précision.{" "}
          <br className="hidden md:block" />
          Conçues pour transformer votre vision en standard de marché.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12 md:mb-0">
          <Button href="/contact">Lancer un projet</Button>
          <SecondaryButton href="/vitrine">
            Explorer nos solutions
          </SecondaryButton>
        </div>
      </div>

      {/* 5. CARTES MONOLITHES */}
      <motion.div
        style={{ y: yBottom }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-0"
      >
        {[
          {
            title: "Domination",
            value: "Elite",
            desc: "Secteur",
            icon: <Crown size={16} />,
            metric: "UI/UX",
          },
          {
            title: "Conversion",
            value: "+42%",
            desc: "ROI",
            icon: <Target size={16} />,
            metric: "Revenue",
          },
          {
            title: "Performance",
            value: "Ultra",
            desc: "Grade",
            icon: <Zap size={16} />,
            metric: "Latency",
          },
        ].map((item, i) => (
          <MonolithCard key={i} item={item} />
        ))}
      </motion.div>
    </section>
  );
}