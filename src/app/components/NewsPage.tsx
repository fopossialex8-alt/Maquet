import React, { useState } from 'react';
import { Clock, TrendingUp, Filter } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsPageProps {
  onNavigate: (page: PageType) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'politique', label: 'Politique' },
    { id: 'societe', label: 'Société' },
    { id: 'culture', label: 'Culture' },
    { id: 'sport', label: 'Sport' },
    { id: 'urgence', label: 'Urgence' },
    { id: 'rencontre', label: 'Rencontre exceptionnelle' },
  ];

  const articles = [
    {
      title: "Nouvelle réforme de l'éducation : ce qui va changer dès la rentrée",
      excerpt: "Le gouvernement annonce une refonte complète du système éducatif. Des mesures controversées qui divisent les syndicats et les parents d'élèves sur l'ensemble du territoire.",
      category: "Politique",
      categoryId: "politique",
      image: "https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMTMzODIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Éducation", "Réforme", "Gouvernement"],
      readTime: "5 min",
      date: "15 fév 2026",
      trending: true
    },
    {
      title: "Les citoyens se mobilisent massivement pour le climat",
      excerpt: "Des milliers de manifestants ont défilé ce weekend dans toutes les grandes villes pour exiger des actions concrètes face à l'urgence climatique qui menace notre avenir.",
      category: "Société",
      categoryId: "societe",
      image: "https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Climat", "Manifestation", "Environnement"],
      readTime: "7 min",
      date: "14 fév 2026",
      trending: true
    },
    {
      title: "Culture : le retour remarqué du cinéma indépendant",
      excerpt: "Les salles alternatives connaissent un regain d'intérêt jamais vu depuis dix ans. Rencontre avec les acteurs passionnés de ce renouveau culturel inattendu.",
      category: "Culture",
      categoryId: "culture",
      image: "https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBsaWZlfGVufDF8fHx8MTc3MTE3OTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Cinéma", "Culture", "Art"],
      readTime: "4 min",
      date: "13 fév 2026",
      trending: false
    },
    {
      title: "Élections locales : analyse des enjeux de la campagne",
      excerpt: "À trois mois du scrutin décisif, les candidats multiplient les promesses et les engagements. Décryptage approfondi des programmes et des stratégies électorales.",
      category: "Politique",
      categoryId: "politique",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHZvdGluZyUyMGRlbW9jcmFjeXxlbnwxfHx8fDE3NzExNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Élections", "Politique locale", "Démocratie"],
      readTime: "6 min",
      date: "12 fév 2026",
      trending: true
    },
    {
      title: "Innovation technologique : l'IA au service de la médecine",
      excerpt: "Les hôpitaux adoptent progressivement l'intelligence artificielle pour améliorer les diagnostics. Une révolution qui soulève des questions éthiques importantes.",
      category: "Société",
      categoryId: "societe",
      image: "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxMDgxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Technologie", "Santé", "IA"],
      readTime: "8 min",
      date: "11 fév 2026",
      trending: false
    },
    {
      title: "Championnat national : le suspense reste total",
      excerpt: "À cinq journées de la fin, trois équipes peuvent encore prétendre au titre. Analyse des forces en présence et des calendriers qui vont tout décider.",
      category: "Sport",
      categoryId: "sport",
      image: "https://images.unsplash.com/photo-1639843091936-bb5fca7b5684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY3Rpb24lMjBhdGhsZXRlfGVufDF8fHx8MTc3MTEyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Football", "Championnat", "Sport"],
      readTime: "5 min",
      date: "10 fév 2026",
      trending: false
    },
    {
      title: "Rencontre avec Marie Dubois, lanceur d'alerte",
      excerpt: "Elle a dénoncé des pratiques illégales dans son entreprise au péril de sa carrière. Portrait d'une femme courageuse qui refuse de se taire malgré les pressions.",
      category: "Rencontre",
      categoryId: "rencontre",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MTE0MDI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Portrait", "Lanceur d'alerte", "Interview"],
      readTime: "10 min",
      date: "9 fév 2026",
      trending: false
    },
    {
      title: "Crise énergétique : les solutions alternatives se développent",
      excerpt: "Face à la hausse des prix, les énergies renouvelables séduisent de plus en plus de foyers. Enquête sur cette transition énergétique citoyenne en marche.",
      category: "Société",
      categoryId: "societe",
      image: "https://images.unsplash.com/photo-1656740978676-985d07451c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExNzk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Énergie", "Transition", "Écologie"],
      readTime: "6 min",
      date: "8 fév 2026",
      trending: false
    }
  ];

  const trendingArticles = articles.filter(a => a.trending).slice(0, 3);

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.categoryId === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Actualités</h1>
          <p className="text-slate-400">
            Retrouvez toutes les dernières nouvelles et analyses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-slate-600" />
                  <span className="font-medium text-slate-700">Filtrer par :</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">Trier par :</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="date">Date</option>
                    <option value="popularity">Popularité</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate('article')}
                  className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group text-left"
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative aspect-video md:aspect-auto">
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
                    <div className="md:col-span-2 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Articles */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-slate-950">Tendances</h3>
              </div>
              <div className="space-y-4">
                {trendingArticles.map((article, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate('article')}
                    className="block text-left group"
                  >
                    <div className="flex gap-3">
                      <span className="text-2xl font-bold text-yellow-500">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-950 text-sm mb-1 group-hover:text-yellow-600 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-slate-500">{article.readTime}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-bold text-slate-950 mb-4">Tags populaires</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { tag: 'Politique', size: 'text-base', weight: 'font-bold' },
                  { tag: 'Climat', size: 'text-sm', weight: 'font-medium' },
                  { tag: 'Économie', size: 'text-lg', weight: 'font-bold' },
                  { tag: 'Santé', size: 'text-sm', weight: 'font-normal' },
                  { tag: 'Éducation', size: 'text-base', weight: 'font-medium' },
                  { tag: 'Culture', size: 'text-sm', weight: 'font-normal' },
                  { tag: 'Tech', size: 'text-base', weight: 'font-bold' },
                  { tag: 'Sport', size: 'text-sm', weight: 'font-medium' },
                  { tag: 'Société', size: 'text-lg', weight: 'font-bold' },
                  { tag: 'Justice', size: 'text-sm', weight: 'font-normal' },
                  { tag: 'Europe', size: 'text-base', weight: 'font-medium' },
                  { tag: 'Enquête', size: 'text-base', weight: 'font-bold' },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`${item.size} ${item.weight} px-3 py-1 bg-slate-100 hover:bg-yellow-500 hover:text-slate-950 text-slate-700 rounded-lg transition-colors`}
                  >
                    {item.tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-slate-950">
              <h3 className="font-bold text-lg mb-2">Newsletter</h3>
              <p className="text-sm mb-4">
                Ne manquez aucune actualité importante.
              </p>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 rounded-lg mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950"
              />
              <button className="w-full px-4 py-2 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}