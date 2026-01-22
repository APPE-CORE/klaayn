"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight, MapPin } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.1 } },
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
    { href: "/outils-ia", label: "Outils IA" },
    { href: "/agence", label: "Agence" },
  ];

  // Composant interne optimisé
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href}>
        {/* HARMONISATION : rounded-xl ici aussi */}
        <div className={`relative px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${
            isActive 
            ? "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            : "border-transparent text-txt-muted hover:text-white hover:bg-white/5 hover:border-[var(--color-border)]"
        } group overflow-hidden cursor-pointer`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 font-sans tracking-wide">{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <>
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "bg-void/80 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-2xl" : "bg-transparent py-6 border-b border-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="text-white group-hover:text-action transition-colors duration-300">
                        <Terminal size={22} strokeWidth={2.5}/>
                    </div>
                    <span className="text-xl font-sans font-bold tracking-tighter text-white">KLAAYN.</span>
                </Link>

                {/* Menu Desktop - HARMONISATION COMPLETE */}
                {/* Remplacement de rounded-full par rounded-xl sur le conteneur principal */}
                <div className="hidden md:flex items-center space-x-1 bg-surface/40 backdrop-blur-md p-1.5 rounded-xl border border-[var(--color-border)] absolute left-1/2 -translate-x-1/2 shadow-2xl">
                    {navLinks.map((link) => (<NavLink key={link.href} {...link} />))}
                </div>

                <div className="flex items-center gap-3 relative z-50">
                    <Button href="/contact" responsive={true}>Lancer un projet</Button>
                    
                    {/* Bouton Hamburger Mobile - HARMONISÉ */}
                    <button 
                        className="md:hidden relative group flex items-center justify-center px-5 py-2.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-95 bg-white/10 border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                        hover:bg-white/20 
                        active:bg-white/20" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10 text-white">{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}</span>
                    </button>
                </div>
            </div>
        </nav>

        {/* Menu Mobile Plein Écran */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 z-[40] bg-void/90 backdrop-blur-3xl flex flex-col md:hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
                    <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-action/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

                    <div className="flex-1 flex flex-col justify-center px-8 pt-20 relative z-10">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between border-b border-[var(--color-border)] pb-6">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-label-tech text-action">0{index + 1}</span>
                                            <span className="text-h3 text-white group-hover:text-action transition-colors duration-300">
                                                {link.label}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="text-txt-muted group-hover:text-action group-hover:rotate-45 transition-all duration-500" size={28} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div variants={itemVariants} className="mt-10">
                            <Button href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>DÉMARRER UN PROJET</Button>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="p-8 border-t border-[var(--color-border)] bg-surface/40 relative z-10">
                        <div className="flex justify-between items-center">
                             <div className="flex flex-col gap-1">
                                <span className="text-label-tech text-white/30">Contact</span>
                                <a href="mailto:contact@klaayn.com" className="text-sm font-bold font-sans text-white hover:text-action transition-colors">contact@klaayn.com</a>
                             </div>
                             <div className="flex gap-4"><div className="p-3 rounded-full bg-white/5 border border-[var(--color-border)]"><MapPin size={18} className="text-txt-muted"/></div></div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}