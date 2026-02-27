"use client";

import Link from "next/link";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";

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
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={16} /> },
  ];

  return (
    <footer className="relative w-full bg-[var(--color-void)] text-[var(--color-txt-main)] overflow-hidden py-10 border-t border-[var(--color-border)]">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-4">

        {/* =============================================
           1. GRILLE SUPÉRIEURE (Vision & Impact)
           =============================================
        */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* --- BLOC 1 : VISION --- */}
          <div className="flex flex-col justify-center p-8 md:p-10 bg-[var(--color-contrast)] border border-[var(--color-border)] rounded-[var(--radius-card)] min-h-[240px]">
            {/* NETTOYAGE : Utilisation pure de .text-h2 */}
            <h2 className="text-h2 text-[var(--color-txt-main)] mb-4">
              Votre <br />
              <span className="text-[var(--color-txt-dim)]">Vision.</span>
            </h2>
            {/* NETTOYAGE : Utilisation de .text-body */}
            <p className="text-body text-[var(--color-txt-muted)] max-w-sm">
              Ne laissez pas la technique limiter vos ambitions. Construisons l'infrastructure de votre domination.
            </p>
          </div>
          
          {/* --- BLOC 2 : IMPACT (CTA) --- */}
          <Link 
            href="/contact" 
            className="group relative flex flex-row items-center justify-between p-8 md:p-10 bg-[var(--color-contrast)] border border-[var(--color-border)] rounded-[var(--radius-card)] min-h-[240px] transition-all duration-500 hover:bg-[var(--color-action)] active:bg-[var(--color-action)] overflow-hidden"
          >
             <div className="relative z-10 flex flex-col justify-center h-full">
                <span className="text-label-tech text-[var(--color-action)] group-hover:text-black/60 group-active:text-black/60 mb-2 transition-colors duration-300">
                    Action
                </span>
                {/* NETTOYAGE : Utilisation pure de .text-h2 */}
                <h2 className="text-h2 text-[var(--color-txt-main)] group-hover:text-[#000000] group-active:text-[#000000] transition-colors duration-500">
                    Notre <br/> Impact.
                </h2>
             </div>

             <div className="relative z-10">
                <ArrowRight 
                    size={40} 
                    className="text-[var(--color-txt-main)] group-hover:text-[#000000] group-active:text-[#000000] transition-transform duration-500 group-hover:-rotate-45 group-active:-rotate-45" 
                />
             </div>
          </Link>

        </div>

        {/* =============================================
           2. BLOC INFÉRIEUR : NAVIGATION
           =============================================
        */}
        <div className="w-full bg-[var(--color-contrast)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-8 md:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10">
            
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <Link href="/" className="block mb-4 active:scale-95 transition-transform duration-200">
                            {/* NETTOYAGE : .font-mono (désormais Outfit via CSS) */}
                            <span className="text-2xl font-mono font-bold tracking-tighter text-[var(--color-txt-main)]">KLAAYN.</span>
                        </Link>
                        <p className="text-label-tech text-[var(--color-txt-dim)]">
                            Architectes de l'Invisible.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-start">
                    <span className="text-label-tech text-[var(--color-txt-dim)] mb-6">Solutions</span>
                    <ul className="space-y-3">
                        {serviceLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                            href={link.href} 
                            className="group flex items-center gap-3 text-sm text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] active:text-[var(--color-txt-main)] transition-colors duration-200"
                            >
                            <span className="w-0 overflow-hidden group-hover:w-3 group-active:w-3 transition-all duration-300 text-[var(--color-action)] opacity-0 group-hover:opacity-100 group-active:opacity-100 font-mono text-xs flex items-center">
                                —
                            </span>
                            {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 flex flex-col justify-start">
                    <span className="text-label-tech text-[var(--color-txt-dim)] mb-6">Studio</span>
                    <ul className="space-y-3">
                        {agencyLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                            href={link.href} 
                            className="group flex items-center gap-3 text-sm text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] active:text-[var(--color-txt-main)] transition-colors duration-200"
                            >
                            <span className="w-0 overflow-hidden group-hover:w-3 group-active:w-3 transition-all duration-300 text-[var(--color-action)] opacity-0 group-hover:opacity-100 group-active:opacity-100 font-mono text-xs flex items-center">
                                —
                            </span>
                            {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3 flex flex-col justify-start md:items-end">
                    <div className="flex flex-col md:items-end">
                        <span className="text-label-tech text-[var(--color-txt-dim)] mb-6 text-left md:text-right">Réseaux</span>
                        <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a 
                            key={social.name} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 border border-[var(--color-border)] rounded-xl bg-[var(--color-surface)]/5 text-[var(--color-txt-muted)] hover:text-[var(--color-txt-main)] hover:bg-[var(--color-surface)]/10 active:text-[var(--color-txt-main)] active:bg-[var(--color-surface)]/10 active:scale-95 transition-all duration-200"
                            >
                            {social.icon}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] text-[10px] text-[var(--color-txt-dim)] font-mono">
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span>© {currentYear} KLAAYN.</span>
                <span className="hidden md:inline text-[var(--color-txt-dim)]/30">|</span>
                <span>All Systems Operational</span>
                </div>
                <div className="flex gap-6">
                {legalLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="hover:text-[var(--color-txt-main)] active:text-[var(--color-txt-main)] transition-colors"
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