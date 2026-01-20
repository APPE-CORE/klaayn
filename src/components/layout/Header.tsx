"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight, MapPin } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// IMPORTATION DE L'ATOME UI
import Button from "@/components/ui/Button";

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
      opacity: 1,
      transition: { 
          duration: 0.4,
          when: "beforeChildren",
          staggerChildren: 0.1 
      }
  },
  exit: { 
      opacity: 0,
      transition: { duration: 0.3, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
  }
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

  // Gestion du scroll lock pour le menu mobile
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // Détection du scroll pour le style du Header
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

  // Sous-composant pour la navigation interne (Atome local)
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href}>
        <div className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
            isActive 
            ? "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            : "border-transparent text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10"
        } group overflow-hidden cursor-pointer`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10">{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <>
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
            ${scrolled 
                ? "bg-[#050505]/40 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" 
                : "bg-transparent py-6 border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* LOGO SYSTEM */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="text-white group-hover:text-[#ff6b00] transition-colors duration-300">
                        <Terminal size={22} strokeWidth={2.5}/>
                    </div>
                    <span className="text-xl font-bold tracking-tighter uppercase text-white">KLAAYN.</span>
                </Link>

                {/* NAVIGATION CENTRALE (DESKTOP) */}
                <div className="hidden md:flex items-center space-x-1 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 absolute left-1/2 -translate-x-1/2 shadow-2xl">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                    ))}
                </div>

                {/* ACTIONS (CTA ATOMIQUE & TOGGLE) */}
                <div className="flex items-center gap-3 relative z-50">
                    <Button href="/contact" variant="header">
                        Lancer un projet
                    </Button>

                    <button 
                        className="md:hidden text-white p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                       {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
                    </button>
                </div>
            </div>
        </nav>

        {/* MENU MOBILE (FULL-SCREEN OVERLAY) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[40] bg-[#050505]/60 backdrop-blur-3xl flex flex-col md:hidden"
                >
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
                    <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#ff6b00]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

                    <div className="flex-1 flex flex-col justify-center px-8 pt-20 relative z-10">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link 
                                        href={link.href} 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="group flex items-center justify-between border-b border-white/10 pb-6"
                                    >
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-xs font-mono text-[#ff6b00] font-bold">0{index + 1}</span>
                                            <span className="text-4xl font-black text-white tracking-tighter group-hover:text-[#ff6b00] transition-colors duration-300 uppercase">
                                                {link.label}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="text-white/20 group-hover:text-[#ff6b00] group-hover:rotate-45 transition-all duration-500" size={28} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA MOBILE : PLEINE LARGEUR (ATOME PRIMARY) */}
                        <motion.div variants={itemVariants} className="mt-10">
                            <Button 
                                href="/contact" 
                                className="w-full" 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                DÉMARRER UN PROJET
                            </Button>
                        </motion.div>
                    </div>

                    {/* FOOTER MENU MOBILE */}
                    <motion.div variants={itemVariants} className="p-8 border-t border-white/10 bg-black/40 relative z-10">
                        <div className="flex justify-between items-center">
                             <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Contact</span>
                                <a href="mailto:contact@klaayn.com" className="text-sm font-bold text-white hover:text-[#ff6b00] transition-colors">contact@klaayn.com</a>
                             </div>
                             <div className="flex gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10"><MapPin size={18} className="text-white/40"/></div>
                             </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}