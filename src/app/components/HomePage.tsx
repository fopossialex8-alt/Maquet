import React from 'react';
import { ArrowRight, TrendingUp, Users, Eye, Clock } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const latestNews = [
    {
      title: "Nouvelle réforme de l'éducation : ce qui va changer",
      excerpt: "Le gouvernement annonce une refonte complète du système éducatif. Des mesures controversées qui divisent...",
      category: "Politique",
      image: "https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMTMzODIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min",
      date: "15 fév 2026"
    },
    {
      title: "Les citoyens se mobilisent pour le climat",
      excerpt: "Des milliers de manifestants ont défilé ce weekend pour exiger des actions concrètes face à l'urgence climatique...",
      category: "Société",
      image: "https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "7 min",
      date: "14 fév 2026"
    },
    {
      title: "Culture : le retour du cinéma indépendant",
      excerpt: "Les salles alternatives connaissent un regain d'intérêt. Rencontre avec les acteurs de ce renouveau culturel...",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBsaWZlfGVufDF8fHx8MTc3MTE3OTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "4 min",
      date: "13 fév 2026"
    },
    {
      title: "Élections locales : les enjeux de la campagne",
      excerpt: "À trois mois du scrutin, les candidats multiplient les promesses. Décryptage des programmes et des stratégies...",
      category: "Politique",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHZvdGluZyUyMGRlbW9jcmFjeXxlbnwxfHx8fDE3NzExNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min",
      date: "12 fév 2026"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1654868537177-86c35bb6b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMHBlb3BsZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzExNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded mb-4">
              ENQUÊTE EXCLUSIVE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              La corruption au cœur des marchés publics
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Notre enquête révèle des pratiques illégales qui coûtent des millions aux contribuables. Un système de détournement organisé au plus haut niveau.
            </p>
            <button 
              onClick={() => onNavigate('investigation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Lire l'enquête
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-950">Dernières actualités</h2>
          <button 
            onClick={() => onNavigate('news')}
            className="text-yellow-600 hover:text-yellow-500 font-medium flex items-center gap-2"
          >
            Voir tout
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((article, index) => (
            <button
              key={index}
              onClick={() => onNavigate('article')}
              className="group text-left"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-yellow-500 text-slate-950 text-xs font-bold rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <span>{article.date}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Dossier */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-yellow-500 text-slate-950 text-sm font-bold rounded mb-4">
                DOSSIER SPÉCIAL
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Les oubliés de la transition écologique
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Alors que les politiques vertes se multiplient, des milliers de travailleurs se retrouvent sans solution. Notre dossier complet sur les sacrifiés du changement climatique.
              </p>
              <button 
                onClick={() => onNavigate('investigation')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Découvrir le dossier
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBsaWZlfGVufDF8fHx8MTc3MTE3OTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dossier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Participation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <Users className="w-16 h-16 text-slate-950 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-950 mb-4">
            Votre opinion compte
          </h2>
          <p className="text-lg text-slate-900 mb-6 max-w-2xl mx-auto">
            Vous êtes témoin d'un événement important ? Vous avez une information à partager ? Rejoignez notre communauté et participez au journalisme citoyen.
          </p>
          <button 
            onClick={() => onNavigate('participation')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Contribuer maintenant
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-950 mb-4">
            Restez informé
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Recevez chaque semaine notre sélection des meilleures enquêtes et analyses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              S'abonner
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Pas de spam. Désabonnement possible à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
}
