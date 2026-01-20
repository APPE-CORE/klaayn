import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      {/* Le Hero prend 100vh (hauteur d'écran). 
        Le reste du contenu viendra en dessous.
      */}
      <Hero />
      
      {/* Zone temporaire pour tester le scroll */}
      <div className="h-screen w-full flex items-center justify-center bg-[#050505] text-white">
        <p className="font-mono text-gray-600">SECTION SUIVANTE (SELECTED WORKS)</p>
      </div>
    </main>
  );
}