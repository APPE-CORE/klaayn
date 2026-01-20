"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SecondaryButton({ href, children, className = "", onClick }: SecondaryButtonProps) {
  return (
    <Link href={href} onClick={onClick} className={`block w-full md:w-auto ${className}`}>
        <div className="relative group cursor-pointer w-full">
            <button className="relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold border border-transparent text-gray-400 group-hover:text-white group-hover:bg-white/5 transition-all overflow-hidden">
                
                {/* EFFET DE BRILLANCE (SHIMMER) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <span className="relative z-10 flex items-center gap-2">
                    {children} 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>
    </Link>
  );
}