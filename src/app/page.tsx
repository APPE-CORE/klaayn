import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="bg-void w-full min-h-screen">
      
      {/* 1. HERO (L'Impact) */}
      <Hero />
      
      {/* 2. SERVICES (L'Arsenal) */}
      <Services />

      {/* 3. WORK (La Preuve - Section Cinématique) */}
      <Work />
      
    </main>
  );
}