import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Imports des composants structurels
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Importation du nouveau Mega Footer
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/CustomCursor";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    <html lang="en">
      <body
        className={`${oswald.variable} ${jetbrains.variable} bg-background text-foreground antialiased selection:bg-white selection:text-black`}
      >
        {/* Le Header reste fixe en haut */}
        <Header />

        {/* Le SmoothScroll englobe les enfants ET le footer pour un défilement fluide global */}
        <SmoothScroll>
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>

        {/* Le curseur est placé en dernier pour être au-dessus de tout le reste */}
        <CustomCursor />
      </body>
    </html>
  );
}