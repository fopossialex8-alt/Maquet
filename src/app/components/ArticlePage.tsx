import React, { useState } from 'react';
import { Moon, Sun, Clock, Calendar, Tag, MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticlePageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function ArticlePage({ onNavigate, darkMode, setDarkMode }: ArticlePageProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(234);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="dark:bg-slate-900 min-h-screen transition-colors">
      {/* Header Image */}
      <div className="relative h-[400px] bg-slate-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Article"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Article Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="relative -mt-32 bg-white dark:bg-slate-800 rounded-t-2xl shadow-2xl p-8 transition-colors">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-yellow-500 text-slate-950 text-sm font-bold rounded">
              Société
            </span>
            {['Manifestation', 'Climat', 'Environnement'].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white mb-4 leading-tight">
            Les citoyens se mobilisent massivement pour le climat
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Des milliers de manifestants ont défilé ce weekend dans toutes les grandes villes pour exiger des actions concrètes face à l'urgence climatique.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 pb-6 border-b border-slate-200 dark:border-slate-700">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              14 février 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              7 min de lecture
            </span>
            <span className="font-medium text-slate-950 dark:text-white">Par Marie Dupont</span>
          </div>

          {/* Key Points */}
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
            <h3 className="font-bold text-slate-950 dark:text-white mb-3">À retenir</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>• Plus de 50 000 manifestants dans les grandes villes</li>
              <li>• Des revendications pour une transition écologique accélérée</li>
              <li>• Le gouvernement annonce de nouvelles mesures prochainement</li>
            </ul>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white dark:bg-slate-800 px-8 pb-12 transition-colors">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Ce weekend, les rues des principales métropoles françaises se sont transformées en océans de pancartes et de slogans. De Paris à Lyon, en passant par Marseille et Bordeaux, des dizaines de milliers de citoyens ont répondu à l'appel des organisations écologistes pour manifester leur inquiétude face à l'urgence climatique.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              "Le temps presse", scandent les manifestants. Entre les banderoles réclamant la fin des énergies fossiles et celles exigeant une transition écologique juste, le message est clair : les citoyens attendent des actes concrets de la part du gouvernement.
            </p>

            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mt-8 mb-4">
              Une mobilisation historique
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              À Paris, où plus de 20 000 personnes se sont rassemblées, l'ambiance était déterminée mais pacifique. Des familles entières, des étudiants, des retraités : toutes les générations étaient représentées dans ce mouvement qui transcende les clivages sociaux traditionnels.
            </p>

            <div className="my-8 p-6 bg-slate-100 dark:bg-slate-700/50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-lg italic text-slate-700 dark:text-slate-300">
                "Nous ne pouvons plus attendre. Chaque jour qui passe sans action significative aggrave la crise climatique. Nos enfants nous demandent des comptes."
              </p>
              <cite className="text-sm text-slate-600 dark:text-slate-400 not-italic block mt-2">
                — Sophie Martin, porte-parole du collectif Climat Urgence
              </cite>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Les organisateurs ont salué le succès de cette mobilisation qui dépasse largement leurs espérances initiales. Dans plusieurs villes, les cortèges ont été deux à trois fois plus importants que lors des précédentes manifestations pour le climat.
            </p>

            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mt-8 mb-4">
              Des revendications précises
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Au-delà des slogans généraux, les manifestants portent des revendications concrètes : fin des subventions aux énergies fossiles, accélération du développement des énergies renouvelables, rénovation thermique massive des bâtiments, et surtout, une transition écologique qui n'oublie personne.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Le gouvernement, qui a pris note de cette mobilisation, a annoncé qu'il présentera dans les prochaines semaines un nouveau plan climat renforcé. Reste à voir si ces annonces seront à la hauteur des attentes exprimées dans la rue.
            </p>

            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mt-8 mb-4">
              Une dynamique internationale
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Cette vague de mobilisations n'est pas isolée. Partout en Europe et dans le monde, les citoyens se lèvent pour exiger une action climatique ambitieuse. Les manifestations de ce weekend s'inscrivent dans un mouvement global qui prend de l'ampleur à mesure que les effets du changement climatique deviennent plus visibles et tangibles.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                liked
                  ? 'bg-yellow-500 text-slate-950'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              {likeCount}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <Share2 className="w-5 h-5" />
              Partager
            </button>
          </div>
        </article>

        {/* Comments Section */}
        <div className="bg-white dark:bg-slate-800 rounded-b-2xl shadow-2xl p-8 mb-12 transition-colors">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Commentaires (12)
          </h3>

          {/* Comment Form */}
          <div className="mb-8">
            <textarea
              placeholder="Partagez votre opinion..."
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-950 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="mt-3 px-6 py-2 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              Publier
            </button>
          </div>

          {/* Sample Comments */}
          <div className="space-y-6">
            {[
              { author: 'Jean Durand', time: 'Il y a 2 heures', comment: 'Enfin une mobilisation à la hauteur des enjeux ! Il était temps que les citoyens se fassent entendre.' },
              { author: 'Marie Laurent', time: 'Il y a 5 heures', comment: 'J\'étais présente à la manifestation de Lyon. L\'ambiance était incroyable, vraiment encourageant de voir autant de monde mobilisé.' },
              { author: 'Pierre Martin', time: 'Il y a 8 heures', comment: 'Des belles paroles, mais j\'attends de voir les actions concrètes du gouvernement. On nous a déjà fait trop de promesses non tenues.' }
            ].map((comment, index) => (
              <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 font-bold">
                    {comment.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">{comment.author}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{comment.time}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 ml-13">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Articles similaires</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'La transition écologique : défis et opportunités', image: 'https://images.unsplash.com/photo-1656740978676-985d07451c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExNzk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
              { title: 'Énergies renouvelables : où en est la France ?', image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxMDgxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
              { title: 'Jeunesse et climat : une génération engagée', image: 'https://images.unsplash.com/photo-1654868537177-86c35bb6b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMHBlb3BsZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzExNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((article, index) => (
              <button
                key={index}
                onClick={() => onNavigate('article')}
                className="group text-left"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-yellow-500 transition-colors">
                  {article.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
