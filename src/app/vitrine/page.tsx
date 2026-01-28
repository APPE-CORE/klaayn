import VitrineAnatomy from "@/components/sections/vitrine/VitrineAnatomy";
import VitrineHero from "@/components/sections/vitrine/VitrineHero";
import VitrineProblem from "@/components/sections/vitrine/VitrineProbleme";
import VitrineProcess from "@/components/sections/vitrine/VitrineProcess";

export default function VitrinePage() {
  return (
    <main className="bg--color-void: min-h-screen">  
      <VitrineHero />
      <VitrineProblem />
      <VitrineAnatomy />
      <VitrineProcess />
    </main>
  );
}