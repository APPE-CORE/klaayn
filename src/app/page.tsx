import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process"; // <--- IMPORT
import Metrics from "@/components/sections/Metrics";

export default function Home() {
  return (
    <main className="bg--color-void: min-h-screen">
      <Hero />
      <Metrics />
      <Services />
      <Work  />
      <Process/>
      
      
    </main>
  );
}