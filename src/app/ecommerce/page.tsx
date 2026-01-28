import EcommerceAnatomy from "@/components/sections/ecommerce/EcommerceAnatomy";
import EcommerceHero from "@/components/sections/ecommerce/EcommerceHero";
import EcommerceProblem from "@/components/sections/ecommerce/EcommerceProbleme";
import EcommerceProcess from "@/components/sections/ecommerce/EcommerceProcess";

export default function EcommercePage() {
  return (
    <main className="bg-[#020202] min-h-screen">
      <EcommerceHero />
      <EcommerceProblem />
      <EcommerceAnatomy />
      <EcommerceProcess />
    </main>
  );
}