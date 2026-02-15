import type { Metadata } from "next";
// 1. IMPORT DES 3 POLICES : Outfit (Titres), Inter (Corps), JetBrains (Labels)
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/CustomCursor";

// 2. CONFIGURATION OUTFIT (Pour les TITRES)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// 3. CONFIGURATION INTER (Pour le TEXTE courant)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 4. CONFIGURATION JETBRAINS MONO (Pour les LABELS techniques)
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
        // 5. INJECTION DES 3 VARIABLES DANS LE BODY
        // RETRAIT de 'font-sans' pour laisser globals.css appliquer Inter par défaut
        className={`${outfit.variable} ${inter.variable} ${jetbrains.variable} bg-void text-white antialiased selection:bg-brand selection:text-white`}
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