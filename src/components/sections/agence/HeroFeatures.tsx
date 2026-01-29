"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Fingerprint, Globe } from "lucide-react";

export default function HeroFeatures() {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-6xl mx-auto px-6"
    >
        <div className="w-full rounded-xl border border-white/10 bg-[#050505] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden shadow-2xl">
            {[
                { 
                    title: "Code Artisanal", 
                    text: "Architecture Next.js native optimisée au bit près pour une performance brute.",
                    icon: <Code2 size={20} />
                },
                { 
                    title: "Identité Unique", 
                    text: "Chaque pixel est dessiné pour servir votre narration et votre marque.",
                    icon: <Fingerprint size={20} />
                },
                { 
                    title: "Portée Globale", 
                    text: "Systèmes scalables conçus pour encaisser la charge internationale.",
                    icon: <Globe size={20} />
                }
            ].map((item, i) => (
                  <div 
                      key={i} 
                      className="group relative flex flex-row items-start text-left gap-4 p-6 hover:bg-white/5 transition-colors duration-300"
                  >
                      <div className="shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 group-hover:text-brand group-hover:border-brand/50 transition-colors duration-300">
                          {item.icon}
                      </div>

                      <div className="flex flex-col gap-1 z-10">
                          <h3 className="text-lg font-display font-medium text-white tracking-wide transition-colors">
                              {item.title}
                          </h3>
                          <p className="text-xs font-light text-white/40 leading-relaxed">
                              {item.text}
                          </p>
                      </div>
                  </div>
            ))}
        </div>
    </motion.div>
  );
}