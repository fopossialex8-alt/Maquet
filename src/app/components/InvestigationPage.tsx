import React from 'react';
import { Share2, Quote, BarChart3, Clock, Calendar } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InvestigationPageProps {
  onNavigate: (page: PageType) => void;
}

export function InvestigationPage({ onNavigate }: InvestigationPageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-slate-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMTMzODIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Investigation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded mb-4">
              ENQUÊTE EXCLUSIVE
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              La corruption au cœur des marchés publics
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Six mois d'investigation pour révéler un système de détournement organisé qui coûte des millions aux contribuables
            </p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 février 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                25 min de lecture
              </span>
              <button className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-slate-700 leading-relaxed">
            Notre enquête de six mois révèle un système de corruption organisé au sein des marchés publics. Des dizaines de millions d'euros détournés, des appels d'offres truqués et des responsables politiques impliqués : les documents que nous avons obtenus démontrent l'ampleur du scandale.
          </p>
        </div>

        {/* Key Points Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-12">
          <h3 className="font-bold text-slate-950 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-yellow-600" />
            À retenir
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Plus de 50 millions d'euros détournés sur 3 ans</li>
            <li>• 15 marchés publics concernés dans 8 régions différentes</li>
            <li>• Des documents confidentiels attestent de complicités au plus haut niveau</li>
            <li>• Une enquête judiciaire a été ouverte suite à nos révélations</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Un système bien rodé</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Tout commence en septembre 2023, lorsqu'un lanceur d'alerte nous contacte. Cadre dans une entreprise du BTP, il nous transmet des documents internes qui révèlent des pratiques illégales systématiques dans l'attribution de marchés publics.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ces documents montrent que plusieurs entreprises se sont entendues pour se répartir les marchés, avec la complicité active de certains élus locaux. Les appels d'offres sont truqués, les prix gonflés artificiellement, et les contrôles détournés.
          </p>
        </section>

        {/* Quote Block */}
        <div className="my-12 pl-8 border-l-4 border-yellow-500">
          <Quote className="w-8 h-8 text-yellow-500 mb-4" />
          <blockquote className="text-2xl italic text-slate-700 mb-4">
            "Je ne pouvais plus me taire. Ce système vole l'argent public depuis des années et personne ne fait rien."
          </blockquote>
          <cite className="text-slate-600 not-italic">— Le lanceur d'alerte, sous anonymat</cite>
        </div>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Les preuves accablantes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Grâce aux documents obtenus et à nos propres investigations, nous avons pu reconstituer le mécanisme de fraude. Les emails internes que nous avons consultés montrent des échanges explicites entre les entreprises et certains responsables administratifs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Les factures analysées révèlent des surfacturations allant jusqu'à 40% sur certains chantiers. Des travaux fantômes ont même été facturés sur plusieurs projets, sans qu'aucun contrôle effectif n'ait été réalisé.
          </p>
        </section>

        {/* Data Visualization */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h3 className="font-bold text-slate-950 mb-6 text-center text-xl">
            Évolution des montants détournés (2021-2023)
          </h3>
          <div className="flex items-end justify-around h-48">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 bg-red-500 rounded-t-lg" style={{ height: '40%' }}></div>
              <span className="text-sm font-bold text-slate-700">12M€</span>
              <span className="text-xs text-slate-600">2021</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 bg-red-600 rounded-t-lg" style={{ height: '70%' }}></div>
              <span className="text-sm font-bold text-slate-700">18M€</span>
              <span className="text-xs text-slate-600">2022</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 bg-red-700 rounded-t-lg" style={{ height: '100%' }}></div>
              <span className="text-sm font-bold text-slate-700">23M€</span>
              <span className="text-xs text-slate-600">2023</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-950 mb-6">Chronologie de l'enquête</h2>
          <div className="space-y-6">
            {[
              { date: 'Sept 2023', title: 'Premier contact avec le lanceur d\'alerte', desc: 'Réception des premiers documents internes' },
              { date: 'Nov 2023', title: 'Analyse approfondie des documents', desc: 'Vérification et recoupement des informations' },
              { date: 'Jan 2024', title: 'Interviews de témoins', desc: 'Rencontre avec d\'autres employés et entrepreneurs' },
              { date: 'Fév 2024', title: 'Publication de l\'enquête', desc: 'Révélation publique du scandale' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  {index < 3 && <div className="w-0.5 h-full bg-yellow-500"></div>}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-yellow-600">{item.date}</span>
                  <h4 className="font-bold text-slate-950 mt-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Les suites judiciaires</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Suite à la publication de notre enquête, le parquet a immédiatement ouvert une information judiciaire. Plusieurs perquisitions ont été menées dans les entreprises concernées et chez certains élus. Des mises en examen sont attendues dans les prochaines semaines.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Cette affaire illustre l'importance du journalisme d'investigation et du courage des lanceurs d'alerte. Sans leur travail, ces malversations continueraient en toute impunité, aux dépens de l'intérêt général.
          </p>
        </section>

        {/* Share Button */}
        <div className="flex justify-center pt-8 border-t border-slate-200">
          <button className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
            <Share2 className="w-5 h-5" />
            Partager cette enquête
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-950 mb-6">Enquêtes similaires</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Les dessous du lobbying pharmaceutique",
                category: "Enquête",
                image: "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxMDgxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
                readTime: "15 min"
              },
              {
                title: "Évasion fiscale : les paradis des multinationales",
                category: "Enquête",
                image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MTE0MDI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
                readTime: "20 min"
              },
              {
                title: "Pollution industrielle : les zones sacrifiées",
                category: "Enquête",
                image: "https://images.unsplash.com/photo-1656740978676-985d07451c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExNzk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
                readTime: "12 min"
              }
            ].map((article, index) => (
              <button
                key={index}
                onClick={() => onNavigate('investigation')}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group text-left"
              >
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-950 mb-2 group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </h4>
                  <span className="text-sm text-slate-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
