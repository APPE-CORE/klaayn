"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- STRUCTURE DE DONNÉES (Maîtrise Typographique & Copywriting Équilibré) ---
const PARAGRAPHS = [
  [
    { text: "Un site internet ", type: "normal" },
    { text: "n'est pas une simple décoration. ", type: "muted" },
    { text: "C'est votre principal ", type: "normal" },
    { text: "levier\u00A0de\u00A0croissance. ", type: "growth" },
    { text: "S'il ne vend pas, c'est une ", type: "normal" },
    { text: "perte\u00A0d'argent.", type: "pain" },
  ],
  [
    { text: "L'attention de vos visiteurs ", type: "normal" },
    { text: "est\u00A0précieuse. ", type: "brand" },
    { text: "Un parcours ", type: "normal" },
    { text: "fluide\u00A0et\u00A0intuitif ", type: "growth" },
    { text: "retient leur intérêt. ", type: "normal" },
    { text: "Une interface confuse ", type: "normal" },
    { text: "expédie\u00A0vos\u00A0clients ", type: "normal" },
    { text: "chez\u00A0vos\u00A0concurrents.", type: "pain" },
  ],
  [
    { text: "Nous concevons des plateformes ", type: "normal" },
    { text: "sur-mesure, ", type: "brand" },
    { text: "rapides\u00A0et\u00A0évidentes. ", type: "brand" },
    { text: "break", type: "break" }, // Déclenche un saut de ligne espacé
    { text: "Notre\u00A0seule\u00A0mission\u00A0: ", type: "normal" },
    { text: "augmenter\u00A0vos\u00A0ventes.", type: "growth" },
  ]
];

// --- COMPOSANT CHUNK (Le Moteur Optique) ---
function Chunk({ chunk, progress, range }: { chunk: { text: string; type: string }; progress: any; range: [number, number] }) {
  if (chunk.type === "break") {
    return <span className="block h-6 md:h-10 w-full" aria-hidden="true" />;
  }

  const opacity = useTransform(progress, range, [0.25, 1]);
  const filter = useTransform(progress, range, ["blur(2.5px)", "blur(0px)"]);
  
  let colorClass = "text-[var(--color-txt-main)]";

  if (chunk.type === "pain") {
    colorClass = "text-[var(--color-action)] font-medium";
  } else if (chunk.type === "brand") {
    colorClass = "text-[var(--color-brand)] font-medium";
  } else if (chunk.type === "growth") {
    colorClass = "text-[var(--color-main-ecom)] font-medium";
  } else if (chunk.type === "muted") {
    colorClass = "text-[var(--color-txt-muted)] italic font-light";
  }

  const colorTransform = useTransform(progress, range, [
    "var(--color-txt-dim)", 
    chunk.type === "pain" ? "var(--color-action)" : 
    chunk.type === "brand" ? "var(--color-brand)" : 
    chunk.type === "growth" ? "var(--color-main-ecom)" : 
    chunk.type === "muted" ? "var(--color-txt-muted)" : 
    "var(--color-txt-main)"
  ]);

  return (
    <motion.span 
      style={{ opacity, filter, color: colorTransform }} 
      className={`inline transition-colors duration-300 ${colorClass}`}
    >
      {chunk.text}
    </motion.span>
  );
}

// --- SÉPARATEUR MINIMALISTE ---
function SimpleLineSeparator() {
  return (
    <div className="flex justify-center items-center py-8 md:py-12 opacity-40 w-full select-none">
      <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
    </div>
  );
}

export default function Philosophy() {
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 60%"] 
  });

  const totalChunks = PARAGRAPHS.reduce((acc, p) => acc + p.length, 0);
  let globalChunkIndex = 0; 

  return (
    <section className="relative w-full bg-[var(--color-void)] py-26 md:py-[15vh] overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] bg-[var(--color-brand)]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* TITRE */}
        <div className="badge-pill mb-6 md:mb-10 flex items-center gap-2.5 px-4 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-action)] animate-pulse" />
          <span className="text-label-tech text-[var(--color-txt-main)] opacity-90">
            Pourquoi ?
          </span>
        </div>

        <h2 className="text-h2 text-[var(--color-txt-main)] text-center w-full mb-16 md:mb-24">
          La raison de <span 
            className="inline-block"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            votre présence ici ?
          </span>
        </h2>

        {/* PARAGRAPHES */}
        <div 
          ref={textRef}
          className="flex flex-col w-full max-w-3xl mx-auto text-center"
        >
          {PARAGRAPHS.map((paragraph, pIndex) => (
            <React.Fragment key={pIndex}>
              
              {/* CORRECTION ICI : Remplacement du hardcode par ta classe `.text-h3` */}
              <p className="text-h3 font-light text-[var(--color-txt-main)] [text-wrap:balance]">
                {paragraph.map((chunk, cIndex) => {
                  const start = globalChunkIndex / totalChunks;
                  const end = start + (1 / totalChunks);
                  
                  if (chunk.type !== "break") {
                    globalChunkIndex++;
                  }

                  return (
                    <Chunk key={`${pIndex}-${cIndex}`} chunk={chunk} progress={scrollYProgress} range={[start, end]} />
                  );
                })}
              </p>

              {pIndex !== PARAGRAPHS.length - 1 && <SimpleLineSeparator />}
              
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}