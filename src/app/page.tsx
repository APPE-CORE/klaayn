import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process"; // <--- IMPORT
import Metrics from "@/components/sections/Metrics";
import Faq from "@/components/sections/Faq";
import TrustBand from "@/components/sections/TrustBand";

export default function Home() {
  return (
    <main className="bg-[var(--color-void)]: min-h-screen">
      <Hero/>
      <TrustBand/>
      <Metrics/>
      <Services/>
      <Work/>
      <Process/>
      <Faq/>
      
      
    </main>
  );
}