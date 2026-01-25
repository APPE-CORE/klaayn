import AgenceCompare from "@/components/sections/agence/AgenceCompare";
import AgenceHero from "@/components/sections/agence/AgenceHero";
import AgenceImpact from "@/components/sections/agence/AgenceImpact";
import AgenceProcess from "@/components/sections/agence/AgenceFaq";
import AgenceFAQ from "@/components/sections/agence/AgenceFaq";
import AgenceValues from "@/components/sections/agence/AgenceValues";

export default function AgencyPage() {
  return (
    <main className="bg-void w-full min-h-screen relative overflow-x-hidden">
      <AgenceHero />
      <AgenceImpact />
      <AgenceValues />
      <AgenceCompare />
      <AgenceFAQ />
    </main>
  );
}