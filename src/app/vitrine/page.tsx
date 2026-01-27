import VitrineAnatomy from "@/components/sections/vitrine/VitrineAnatomy";
import VitrineHero from "@/components/sections/vitrine/VitrineHero";
import VitrineProblem from "@/components/sections/vitrine/VitrineProbleme";
import VitrineProcess from "@/components/sections/vitrine/VitrineProcess";

export default function VitrinePage() {
  return (
    <main className="bg-void w-full min-h-screen relative overflow-x-hidden">  
      <VitrineHero />
      <VitrineProblem />
      <VitrineAnatomy />
      <VitrineProcess />
    </main>
  );
}