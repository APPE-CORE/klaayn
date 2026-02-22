import type { Metadata } from "next";
// IMPORT DES 2 POLICES : Outfit (Titres & Labels), Inter (Corps)
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/CustomCursor";

// CONFIGURATION OUTFIT (Pour les TITRES et les LABELS)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// CONFIGURATION INTER (Pour le TEXTE courant)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaayn | Architecture Digitale",
  description: "High-performance web agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${inter.variable} bg-void text-white antialiased selection:bg-brand selection:text-white`}
      >
        <Header />

        {/* Le SmoothScroll englobe le contenu principal et le footer */}
        <SmoothScroll>
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>

        <CustomCursor />
      </body>
    </html>
  );
}