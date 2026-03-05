"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Rocket } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Site Vitrine", href: "/vitrine" },
    { name: "E-commerce", href: "/ecommerce" },
    { name: "Blog", href: "/blog" },
  ];

  const agencyLinks = [
    { name: "L'Agence", href: "/agence" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Mentions Légales", href: "/legal" },
    { name: "CGV", href: "/cgv" },
    { name: "Confidentialité", href: "/confidentialite" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} strokeWidth={1.5} /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={16} strokeWidth={1.5} /> },
  ];

  return (
    <footer className="w-full bg-[var(--color-void)] relative overflow-hidden text-[var(--color-txt-main)]">
      
      {/* =====================================================================
          FOND AMBIANT GLOBAL (Avec Masque de Fusion)
          ===================================================================== */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center items-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)'
        }}
      >
        {/* Lueur Violette (Brand) */}
        <div className="absolute top-[-5%] md:top-[20%] w-[200vw] md:w-[100vw] h-[1200px] md:h-[1200px] bg-[var(--color-brand)]/15 md:bg-[var(--color-brand)]/10 blur-[120px] md:blur-[200px] rounded-[100%] will-change-transform [transform:translateZ(0)]" />
        
        {/* Lueur Orange (Action) */}
        <div className="absolute bottom-0 md:bottom-[10%] w-[150vw] md:w-[80vw] h-[1000px] md:h-[900px] bg-[var(--color-action)]/10 md:bg-[var(--color-action)]/5 blur-[90px] md:blur-[180px] rounded-[100%] will-change-transform [transform:translateZ(0)]" />
      </div>

      {/* =====================================================================
          PARTIE 1 : LE FINAL CTA
          ===================================================================== */}
      <div className="relative z-10 w-full pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center">
        
        <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Tag d'urgence */}
            <div className="badge-pill mb-8 flex items-center gap-2.5 px-4 py-1.5 w-fit border-[var(--color-border)]/50 bg-[var(--color-surface)]/30 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-action)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-action)]"></span>
              </span>
              <span className="text-label-tech text-[var(--color-txt-main)] opacity-90">
                Phase de Décision
              </span>
            </div>

            {/* Titre Gradient */}
            <h2 className="text-h2 mb-6 max-w-3xl text-[var(--color-txt-main)] drop-shadow-sm">
              Convaincu ? Il est temps de <br className="hidden md:block" />
              <span 
                className="inline-block pb-1 pr-1"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}
              >
                passer à l'action.
              </span>
            </h2>

            <p className="text-body-large max-w-xl mx-auto mb-12 text-[var(--color-txt-muted)] drop-shadow-sm">
              Arrêtez de financer vos concurrents avec une interface obsolète. Déployons l&apos;architecture de votre domination.
            </p>

            {/* Bouton d'action massif */}
            <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
              <Button 
                href="/contact" 
                icon={Rocket} 
                className="w-full sm:w-auto [&>a]:!h-14 md:[&>a]:!h-16 [&>a]:!px-8 md:[&>a]:!px-12 [&>a]:!text-base"
              >
                Planifier mon audit stratégique
              </Button>
              
              <div className="flex items-center justify-center gap-3 text-label-tech text-[var(--color-txt-dim)] mt-2">
                <span>Zéro engagement</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-txt-dim)]/40"></span>
                <span>Places limitées</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          PARTIE 2 : LA NAVIGATION (Boxed Footer en Void)
          ===================================================================== */}
      {/* CORRECTION : px-6 pb-6 fixe pour forcer l'alignement strict de la grille sur mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-6">
        <div className="w-full bg-[var(--color-void)] border border-[var(--color-border)]/50 rounded-[var(--radius-card)] px-8 py-16 md:px-16 md:py-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

          {/* --- Grille de Navigation --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
              
              {/* Marque & Philosophie */}
              <div className="md:col-span-4 flex flex-col">
                  <Link href="/" className="inline-block mb-6 transition-transform active:scale-95 w-fit">
                      <span className="text-3xl font-[family-name:var(--font-outfit)] font-semibold tracking-widest text-[var(--color-txt-main)] uppercase">
                          Klaayn.
                      </span>
                      <span className="sr-only">Retour à l&apos;accueil</span>
                  </Link>
                  <p className="text-sm text-[var(--color-txt-muted)] leading-relaxed max-w-xs">
                      Architectes de l&apos;Invisible. Nous forgeons des infrastructures digitales conçues pour la performance absolue et la conversion.
                  </p>
              </div>

              {/* Colonne Solutions */}
              <div className="md:col-span-3 flex flex-col md:pl-8">
                  <span className="text-xs font-mono text-[var(--color-txt-dim)] uppercase tracking-widest mb-6">
                      Solutions
                  </span>
                  <ul className="space-y-4">
                      {serviceLinks.map((link) => (
                      <li key={link.name}>
                          <Link 
                              href={link.href} 
                              className="group flex items-center gap-2 text-sm text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] transition-colors duration-300 w-fit"
                          >
                              <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[var(--color-brand)] opacity-0 group-hover:opacity-100 font-mono text-xs flex items-center">
                                  —
                              </span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                  {link.name}
                              </span>
                          </Link>
                      </li>
                      ))}
                  </ul>
              </div>

              {/* Colonne Studio */}
              <div className="md:col-span-3 flex flex-col">
                  <span className="text-xs font-mono text-[var(--color-txt-dim)] uppercase tracking-widest mb-6">
                      Studio
                  </span>
                  <ul className="space-y-4">
                      {agencyLinks.map((link) => (
                      <li key={link.name}>
                          <Link 
                              href={link.href} 
                              className="group flex items-center gap-2 text-sm text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] transition-colors duration-300 w-fit"
                          >
                              <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[var(--color-brand)] opacity-0 group-hover:opacity-100 font-mono text-xs flex items-center">
                                  —
                              </span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                  {link.name}
                              </span>
                          </Link>
                      </li>
                      ))}
                  </ul>
              </div>

              {/* Colonne Réseaux */}
              <div className="md:col-span-2 flex flex-col md:items-end">
                  <div className="flex flex-col md:items-end w-full">
                      <span className="text-xs font-mono text-[var(--color-txt-dim)] uppercase tracking-widest mb-6 text-left md:text-right w-full">
                          Réseaux
                      </span>
                      <div className="flex gap-3">
                          {socialLinks.map((social) => (
                              <a 
                                  key={social.name} 
                                  href={social.href} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-11 h-11 border border-[var(--color-border)]/50 rounded-xl bg-[var(--color-surface)]/20 text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border)] transition-all duration-300 active:scale-95"
                                  title={`Visiter notre page ${social.name}`}
                              >
                                  <span className="sr-only">{social.name}</span>
                                  {social.icon}
                              </a>
                          ))}
                      </div>
                  </div>
              </div>
          </div>

          {/* --- Légal & Copyright --- */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)]/40 text-[11px] text-[var(--color-txt-dim)] font-mono tracking-wide gap-6 md:gap-0">
              
              <div className="flex items-center gap-4">
                  <span>© {currentYear} KLAAYN.</span>
                  <span className="hidden md:inline text-[var(--color-border)]">|</span>
                  <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] opacity-80 shadow-[0_0_8px_var(--color-brand)]"></span>
                      All Systems Operational
                  </span>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                  {legalLinks.map((link) => (
                      <Link 
                          key={link.name} 
                          href={link.href}
                          className="hover:text-[var(--color-txt-main)] transition-colors"
                      >
                          {link.name}
                      </Link>
                  ))}
              </div>
              
          </div>

        </div>
      </div>
      
    </footer>
  );
}