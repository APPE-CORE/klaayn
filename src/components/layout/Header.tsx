"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.4, staggerChildren: 0.1 } 
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { y: 20, opacity: 0 }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/vitrine", label: "Vitrine" },
    { href: "/ecommerce", label: "E-commerce" },
    { href: "/agence", label: "Agence" },
  ];

  // Composant interne optimisé
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} aria-label={`Aller vers la page ${label}`}>
        <div className={`relative px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${
            isActive 
            /* ACTIF : Fond blanc 10%, Bordure blanche 20%, Texte blanc, Glow blanc */
            ? "bg-[var(--color-txt-main)]/10 border-[var(--color-txt-main)]/20 text-[var(--color-txt-main)] shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            /* INACTIF : Transparent, Texte Muted, Hover blanc */
            : "border-transparent text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] hover:bg-[var(--color-btn-sec-bg)] hover:border-[var(--color-border)]"
        } group overflow-hidden cursor-pointer`}>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-txt-main)]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 tracking-wide">{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <>
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled 
            ? "bg-[var(--color-void)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-2xl" 
            : "bg-transparent py-6 border-b border-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* LOGO avec scroll fluide sur l'accueil */}
                <Link 
                    href="/" 
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="flex items-center gap-2 group z-50" 
                    aria-label="Retour à l'accueil Klaayn"
                >
                    <div className="text-[var(--color-txt-main)] group-hover:text-[var(--color-action)] transition-colors duration-300">
                        <Terminal size={22} strokeWidth={2.5}/>
                    </div>
                    <span className="text-xl font-mono font-bold tracking-tighter text-[var(--color-txt-main)]">KLAAYN.</span>
                </Link>

                {/* MENU DESKTOP (Centré) */}
                <div className="hidden md:flex items-center space-x-1 bg-[var(--color-surface)]/40 backdrop-blur-md p-1.5 rounded-xl border border-[var(--color-border)] absolute left-1/2 -translate-x-1/2 shadow-2xl">
                    {navLinks.map((link) => (<NavLink key={link.href} {...link} />))}
                </div>

                {/* ACTION + HAMBURGER */}
                <div className="flex items-center gap-3 relative z-50">
                    <Button 
                        href="/contact" 
                        responsive={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Lancer un projet
                    </Button>
                    
                    {/* Bouton Hamburger Mobile */}
                    <button 
                        className="md:hidden relative group flex items-center justify-center px-5 py-2.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-95 
                        bg-[var(--color-txt-main)]/10 border border-[var(--color-txt-main)]/20 text-[var(--color-txt-main)] shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                        hover:bg-[var(--color-txt-main)]/20 active:bg-[var(--color-txt-main)]/20" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-txt-main)]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10 text-[var(--color-txt-main)]">
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </span>
                    </button>
                </div>
            </div>
        </nav>

        {/* MENU MOBILE (Plein Écran) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    variants={menuVariants} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    className="fixed inset-0 z-[40] bg-[var(--color-void)]/40 backdrop-blur-3xl flex flex-col md:hidden"
                >
                    {/* Effet lumineux Action */}
                    <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-action)]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

                    <div className="flex-1 flex flex-col justify-center px-6 pt-16 relative z-10">
                        <div className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link 
                                        href={link.href} 
                                        onClick={() => setIsMobileMenuOpen(false)} 
                                        className="group relative flex items-center justify-between border-b border-[var(--color-border)] py-8 px-2 transition-all duration-300 hover:bg-[var(--color-txt-main)]/5 active:bg-[var(--color-txt-main)]/10 active:border-[var(--color-txt-main)]/20"
                                    >
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-label-bold text-[var(--color-action)]/70 group-hover:text-[var(--color-action)]">0{index + 1}</span>
                                            <span className="text-h2 text-[var(--color-txt-main)] group-hover:text-[var(--color-action)] transition-colors duration-300">
                                                {link.label}
                                            </span>
                                        </div>
                                        <ArrowRight className="text-[var(--color-txt-muted)] group-hover:text-[var(--color-action)] group-hover:-rotate-45 transition-all duration-500" size={32} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div variants={itemVariants} className="mt-12 px-2">
                            <Button href="/contact" className="w-full h-14 text-lg" onClick={() => setIsMobileMenuOpen(false)}>DÉMARRER UN PROJET</Button>
                        </motion.div>
                    </div>

                    {/* Footer du Menu Mobile */}
                    <motion.div variants={itemVariants} className="p-8 border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 relative z-10">
                        <div className="flex justify-between items-center">
                             <div className="flex flex-col gap-1">
                                <span className="text-label-tech text-[var(--color-txt-dim)]">Contact</span>
                                <a href="mailto:contact@klaayn.com" className="text-body-large font-bold text-[var(--color-txt-main)] hover:text-[var(--color-action)] transition-colors">contact@klaayn.com</a>
                             </div>
                             <div className="flex gap-4">
                                <div className="p-3 rounded-full bg-[var(--color-txt-main)]/5 border border-[var(--color-border)]">
                                    <MapPin size={20} className="text-[var(--color-txt-muted)]"/>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}