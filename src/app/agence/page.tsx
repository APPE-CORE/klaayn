import dynamic from "next/dynamic";
import AgenceHero from "@/components/sections/agence/AgenceHero";

// Chargement différé des sections sous la ligne de flottaison
// Le navigateur ne chargera leur JS que lorsque c'est nécessaire
const AgenceImpact = dynamic(() => import("@/components/sections/agence/AgenceImpact"));
const AgenceValues = dynamic(() => import("@/components/sections/agence/AgenceValues"));
const AgenceCompare = dynamic(() => import("@/components/sections/agence/AgenceCompare"));
const AgenceFAQ = dynamic(() => import("@/components/sections/agence/AgenceFaq"));

export default function AgencyPage() {
  return (
    <main className="bg--color-void: min-h-screen">
      {/* Seul le Hero est chargé en priorité absolue (LCP) */}
      <AgenceHero />
      
      {/* Le reste suit sans bloquer le thread principal */}
      <AgenceImpact />
      <AgenceValues />
      <AgenceCompare />
      <AgenceFAQ />
    </main>
  );
}