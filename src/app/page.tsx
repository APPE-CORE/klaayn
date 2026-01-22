import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process"; // <--- IMPORT

export default function Home() {
  return (
    <main className="bg-void w-full min-h-screen">
      <Hero />
      <Philosophy />
      <Work />
      <Services />
      <Process />
      
    </main>
  );
}