import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Imports
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 
import SmoothScroll from "@/components/ui/smooth-scroll"; // Ton fichier restauré
import CustomCursor from "@/components/ui/CustomCursor";

// Configuration Polices (Variable = Poids auto)
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaayn | Digital Dominance",
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
        className={`${oswald.variable} ${jetbrains.variable} bg-void text-white antialiased selection:bg-brand selection:text-white`}
      >
        <Header />

        {/* Le moteur SmoothScroll englobe tout sauf le Header (qui est fixed) et le Cursor */}
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