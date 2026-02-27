import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web design expert : illusionniste ou architecte de vos ventes ? | Klaayn",
  description: "Pourquoi 95 % des sites échouent à convertir ? Découvrez pourquoi le web design dépasse la question de goût pour devenir une véritable architecture de conversion.",
  openGraph: {
    title: "Web design expert : illusionniste ou architecte de ventes ?",
    description: "L'interface de votre site doit aller au-delà de la séduction. Elle doit orienter, rassurer, structurer et transformer.",
    type: "article",
  },
};

export default function WebDesignArticle() {
  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-24 selection:bg-[var(--color-brand)] selection:text-white">
      <article className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* En-tête de l'article */}
        <header className="mb-20 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground tracking-wide mb-8">
            <span className="text-[var(--color-txt-brand)] border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/10 px-4 py-1 rounded-full">
              Stratégie
            </span>
            <time dateTime="2024-03-20">20 Mars 2024</time>
            <span>•</span>
            <span>Lecture : 4 min</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-8 text-balance">
            Web design expert : illusionniste ou architecte de vos ventes ?
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne de contenu principal */}
          <div className="lg:col-span-10 lg:col-start-2">
            
            {/* Introduction / Chapeau */}
            <section className="mb-16">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed tracking-tight mb-8">
                Un jour, j’ai accompagné une entrepreneure brillante. Son site était superbe. Palette maîtrisée, animations élégantes, photos léchées. On sentait le travail, le soin, presque l’amour du détail. Pourtant, malgré l'intervention d'un prétendu expert en web design, les ventes stagnaient.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le trafic existait. Les visiteurs arrivaient. Puis ils repartaient, silencieusement, comme on quitte une pièce trop belle pour être habitée.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                C’est là que j’ai compris que la conception d'interface constituait peut-être le plus grand malentendu du numérique. On la confond souvent avec l’esthétique. On la réduit à une question de goût. On l’habille de tendances. Mais on oublie qu’un site internet représente un outil stratégique, bien loin d'un simple portfolio artistique. En effet, un outil mal pensé peut coûter très cher.
              </p>
              
              {/* Citation clé mise en avant */}
              <div className="p-8 my-10 border-l-4 border-[var(--color-brand)] bg-[var(--color-brand)]/5 rounded-r-lg">
                <p className="text-xl font-semibold text-foreground m-0 leading-relaxed">
                  Pourquoi 95 % des sites échouent-ils à convertir ? Pourquoi tant d’entreprises investissent-elles dans leur image sans jamais optimiser leur performance ? C'est parce que l'ergonomie visuelle doit dépasser la simple séduction. Elle doit également orienter, rassurer, structurer et transformer. Autrement dit, elle doit vendre.
                </p>
              </div>
            </section>

            {/* Image d'illustration 1 */}
            <figure className="my-16 relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop" 
                alt="Conception stratégique et ergonomie pour l'optimisation de l'expérience utilisateur"
                title="Wireframing et stratégie d'interface"
                fill
                className="object-cover"
                priority
              />
            </figure>

            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">
                Le malentendu autour du web design
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                L'apparence d'un site est souvent perçue comme une couche superficielle : couleurs, typographies, animations. Or, sa fonction réelle s'avère beaucoup plus profonde. Elle organise l’information, hiérarchise les priorités et crée un parcours invisible. Par conséquent, une bonne architecture visuelle s'impose sans se faire remarquer immédiatement : elle se ressent. Elle donne l’impression que tout devient simple, évident et fluide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                D'ailleurs, la première question qu’un architecte digital se pose s'éloigne de la pure esthétique pour viser l'action : “Qu’est-ce que l’utilisateur doit faire ici ?”. Acheter ? Réserver ? Télécharger ? Demander un devis ? Si cette action manque de limpidité en quelques secondes, la plateforme perd déjà en efficacité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ainsi, une interface performante agit comme un guide discret. Elle conduit l’œil vers les éléments stratégiques et met en valeur la proposition de valeur. De plus, elle réduit la charge mentale de l'utilisateur. Là où certains voient un simple décor, un expert voit une véritable architecture de conversion.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">
                Pourquoi 95 % des sites échouent
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La majorité des écosystèmes digitaux échouent par absence de stratégie, bien plus que par manque de talent graphique.
              </p>
              <ul className="space-y-8 my-10">
                <li className="flex gap-6 items-start">
                  <span className="text-[var(--color-brand)] font-bold text-xl shrink-0 mt-1">01.</span>
                  <p className="text-lg text-muted-foreground leading-relaxed m-0">
                    <strong className="text-foreground font-medium block mb-2 text-xl">Ils parlent trop d'eux-mêmes</strong>
                    “Notre histoire”, “Notre vision”, “Nos valeurs”. Tout cela a du sens, toutefois, l’utilisateur arrive avec un besoin précis. Il cherche une solution, pas une autobiographie. Une création numérique efficace place donc le problème du client au centre et construit le discours autour de lui.
                  </p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-[var(--color-brand)] font-bold text-xl shrink-0 mt-1">02.</span>
                  <p className="text-lg text-muted-foreground leading-relaxed m-0">
                    <strong className="text-foreground font-medium block mb-2 text-xl">La confusion entre complexité et crédibilité</strong>
                    Multiplier les sections, les animations et les informations donne une illusion de richesse. En réalité, cela dilue l’attention. La conversion demande de la clarté. Car trop de choix ralentissent la décision et trop d’effets distraient.
                  </p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-[var(--color-brand)] font-bold text-xl shrink-0 mt-1">03.</span>
                  <p className="text-lg text-muted-foreground leading-relaxed m-0">
                    <strong className="text-foreground font-medium block mb-2 text-xl">L'expérience mobile sous-estimée</strong>
                    Or, aujourd’hui, la majorité du trafic provient des smartphones. Une mise en page non optimisée pour mobile entraîne un temps de chargement excessif et une lecture inconfortable. L’utilisateur n’analyse aucune de ces erreurs techniques : il quitte simplement la page.
                  </p>
                </li>
              </ul>
            </section>

            {/* Image d'illustration 2 */}
            <figure className="my-16 relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
                alt="Analyse de données et architecture orientée conversion" 
                title="Performance et analyse visuelle"
                fill
                className="object-cover"
              />
            </figure>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">
                Ce qu’un spécialiste en conversion fait différemment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Un stratège refuse de commencer par dessiner. Au contraire, il commence par comprendre. Qui est la cible ? Quel est son niveau de maturité ? Quelles sont ses objections ? La création visuelle devient alors la traduction graphique d’une stratégie marketing globale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Il structure le parcours comme un entonnoir : attirer, capter l’attention, instaurer la confiance, puis déclencher l’action. Chaque section a une fonction précise. Chaque élément a une justification. Par exemple, les témoignages obéissent à un placement calculé et les appels à l’action se répètent de manière mathématique.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Par ailleurs, un véritable professionnel travaille en lien étroit avec le référencement naturel. La hiérarchisation des titres et la performance technique influencent directement le positionnement. Comme l'indique <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-[var(--color-txt-brand)] font-medium underline decoration-[var(--color-brand)]/50 underline-offset-4 hover:decoration-[var(--color-brand)] transition-colors">Google dans ses recommandations</a>, l'algorithme valorise désormais les plateformes fluides et pertinentes.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">
                Conception et performance : un levier sous-estimé
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Investir dans la structuration visuelle représente un véritable investissement en performance, bien loin d'une simple dépense cosmétique. Une plateforme optimisée peut augmenter significativement le taux de conversion et renforcer la crédibilité d’une marque.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                À l’inverse, une mauvaise architecture agit comme une fuite invisible. Le trafic existe, mais il s’évapore. On accuse alors le marché ou la concurrence, alors que la structure même du produit freine la transformation.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">
                Conclusion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                En résumé, l'interface de votre vitrine peut agir comme une coquille séduisante ou comme un moteur de croissance. La différence réside dans l’intention qui la sous-tend. Concevoir une présence en ligne uniquement pour l'esthétique revient à construire une boutique splendide sans penser au parcours du client à l'intérieur.
              </p>
              <p className="text-xl font-medium text-foreground leading-relaxed mt-10 border-l-4 border-[var(--color-brand)] pl-6 py-2">
                Un expert en web design va au-delà de la création d'un univers visuel ; il construit une expérience orientée vers la conversion. Finalement, dans un environnement numérique saturé, cette différence dépasse le cadre esthétique : elle s'avère purement économique.
              </p>
            </section>

            {/* Call to Action Final */}
            <aside className="mt-24 pt-16 border-t border-white/10 flex flex-col items-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Arrêtez de payer pour de l'esthétique.
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Transformez votre site en une véritable architecture de conversion. Concevons une interface où chaque pixel sert vos ventes.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[var(--color-action)] text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-[0_0_30px_var(--color-action-glow)] hover:bg-[var(--color-action-hover)] hover:shadow-[0_0_40px_var(--color-action-glow)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Structurer mon approche
              </Link>
            </aside>

          </div>
        </div>

      </article>
    </main>
  );
}