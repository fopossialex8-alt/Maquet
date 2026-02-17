import React from 'react';
import { BarChart3, TrendingUp, Clock, Calendar, Moon, Sun, User } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AnalysisPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function AnalysisPage({ onNavigate, darkMode, setDarkMode }: AnalysisPageProps) {
  return (
    <div className="dark:bg-slate-900 min-h-screen transition-colors">
      {/* Hero */}
      <div className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <BarChart3 className="w-12 h-12 text-yellow-500" />
            <h1 className="text-5xl font-bold">Analyses</h1>
          </div>
          <p className="text-xl text-slate-400">
            Décryptages approfondis des enjeux qui façonnent notre société
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 transition-colors">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="float-right p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Category */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg">
              ANALYSE POLITIQUE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white mb-4 leading-tight">
            Réforme des retraites : analyse des vrais enjeux économiques
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Au-delà des discours politiques, que nous disent vraiment les chiffres sur l'avenir du système de retraites français ?
          </p>

          {/* Author & Meta */}
          <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-lg">
              PD
            </div>
            <div>
              <p className="font-bold text-slate-950 dark:text-white">Pierre Durand</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Économiste, spécialiste des finances publiques</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              16 février 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min de lecture
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 transition-colors">
          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              La réforme des retraites cristallise les tensions politiques et sociales depuis des mois. Mais au-delà des manifestations et des prises de position, quels sont les véritables enjeux économiques ? Notre analyse décrypte les données pour comprendre les défis auxquels le système est confronté.
            </p>
          </div>

          {/* Key Data Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Chiffres clés
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">14M</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Retraités en France</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">€342Mds</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Budget annuel</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">1.7</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Actifs par retraité</div>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
              Le défi démographique
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Le vieillissement de la population est une réalité incontournable. En 1960, on comptait quatre actifs pour un retraité. Aujourd'hui, ce ratio est tombé à 1,7 actif par retraité, et les projections indiquent qu'il pourrait descendre à 1,3 d'ici 2050.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Cette évolution démographique exerce une pression considérable sur le système par répartition, où les cotisations des actifs financent directement les pensions des retraités.
            </p>
          </section>

          {/* Chart Visualization */}
          <div className="bg-slate-100 dark:bg-slate-700/50 rounded-xl p-8 mb-8">
            <h3 className="font-bold text-slate-950 dark:text-white mb-6 text-center">
              Évolution du ratio actifs/retraités
            </h3>
            <div className="flex items-end justify-around h-64">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '100%' }}></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">4.0</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">1960</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '60%' }}></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">2.1</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">2000</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '42%' }}></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">1.7</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">2026</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 bg-red-600 rounded-t-lg" style={{ height: '32%' }}></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">1.3</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">2050</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
              Les défis financiers
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Le système de retraites français doit faire face à plusieurs défis financiers majeurs. Le déficit structurel, estimé à plusieurs milliards d'euros par an, nécessite des mesures correctives pour assurer la pérennité du système.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Les options envisagées incluent l'allongement de la durée de cotisation, le recul de l'âge légal de départ, l'augmentation des cotisations ou la baisse des pensions. Chaque option comporte des implications sociales et économiques importantes.
            </p>
          </section>

          {/* Quote Block */}
          <div className="my-8 pl-6 border-l-4 border-yellow-500">
            <blockquote className="text-xl italic text-slate-700 dark:text-slate-300">
              "Le système de retraites ne peut être réformé sans un débat démocratique approfondi sur la répartition des efforts entre générations et catégories sociales."
            </blockquote>
          </div>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
              Les scénarios possibles
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Plusieurs scénarios sont sur la table. Le statu quo n'est pas viable à long terme selon les experts. Les réformes paramétriques (âge, durée de cotisation) sont privilégiées par le gouvernement, tandis que d'autres acteurs plaident pour une réforme systémique plus profonde.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              L'enjeu est de trouver un équilibre entre soutenabilité financière et justice sociale, tout en tenant compte des aspirations des différentes générations et des inégalités d'espérance de vie selon les catégories socioprofessionnelles.
            </p>
          </section>

          {/* Conclusion Box */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mt-8">
            <h3 className="font-bold text-slate-950 dark:text-white mb-3">Conclusion</h3>
            <p className="text-slate-700 dark:text-slate-300">
              La réforme des retraites est un sujet complexe qui nécessite une approche équilibrée, transparente et démocratique. Au-delà des postures politiques, c'est l'avenir de notre contrat social intergénérationnel qui est en jeu.
            </p>
          </div>
        </article>

        {/* Related Analyses */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Analyses connexes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Pouvoir d\'achat : que dit vraiment l\'inflation ?', category: 'Économie', image: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXNpcyUyMGRhdGElMjByZXNlYXJjaHxlbnwxfHx8fDE3NzEyMzA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
              { title: 'Fiscalité : comprendre la redistribution', category: 'Finances publiques', image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxMDgxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((article, index) => (
              <button
                key={index}
                onClick={() => onNavigate('analysis')}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group text-left"
              >
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-yellow-500 transition-colors">
                    {article.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
