import React from 'react';
import { Mic, Calendar, Clock, User, Moon, Sun, Quote } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InterviewPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function InterviewPage({ onNavigate, darkMode, setDarkMode }: InterviewPageProps) {
  return (
    <div className="dark:bg-slate-900 min-h-screen transition-colors">
      {/* Hero Section */}
      <div className="relative bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Mic className="w-12 h-12 text-yellow-500" />
            <div>
              <span className="text-sm text-yellow-500 font-bold">ENTRETIEN EXCLUSIF</span>
              <h1 className="text-4xl font-bold">Rencontre exceptionnelle</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="relative -mt-8 bg-white dark:bg-slate-800 rounded-t-2xl shadow-2xl p-8 transition-colors">
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

          {/* Interview Title */}
          <h2 className="text-4xl font-bold text-slate-950 dark:text-white mb-4 leading-tight pr-16">
            "Il faut repenser notre rapport au travail"
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Entretien avec Sophie Mercier, sociologue et auteure de "La Grande Démission"
          </p>

          {/* Interviewee Info */}
          <div className="flex items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-950 font-bold text-2xl">
              SM
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Sophie Mercier</h3>
              <p className="text-slate-600 dark:text-slate-400">Sociologue du travail</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                Professeure à l'université de Paris, auteure de plusieurs ouvrages sur la transformation du monde du travail
              </p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              16 février 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min de lecture
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Propos recueillis par Jean Martin
            </span>
          </div>
        </div>

        {/* Interview Content */}
        <article className="bg-white dark:bg-slate-800 px-8 pb-12 transition-colors">
          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
              Alors que le phénomène de la "Grande Démission" gagne l'Europe, nous avons rencontré Sophie Mercier, sociologue spécialiste du monde du travail. Dans son dernier ouvrage, elle analyse les mutations profondes qui bouleversent notre rapport au travail. Un entretien éclairant sur les aspirations d'une génération en quête de sens.
            </p>
          </div>

          {/* Photo */}
          <div className="my-8 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1562483614-c32ef84ec3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcnZpZXclMjBqb3VybmFsaXN0JTIwbmV3c3xlbnwxfHx8fDE3NzExNzk5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interview"
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Q&A */}
          <div className="space-y-8">
            {/* Question 1 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
                  Q
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white pt-1">
                  Votre livre parle de "Grande Démission". De quoi s'agit-il exactement ?
                </p>
              </div>
              <div className="flex items-start gap-3 ml-11">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Ce phénomène, né aux États-Unis en 2021, désigne une vague sans précédent de démissions volontaires. Des millions de personnes quittent leur emploi sans nécessairement en avoir un autre. Ce qui est nouveau, c'est l'ampleur du mouvement et surtout les motivations : il ne s'agit plus seulement de chercher un meilleur salaire, mais de remettre en question le sens même du travail dans nos vies.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
                  Q
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white pt-1">
                  Quelles sont les causes de cette remise en question ?
                </p>
              </div>
              <div className="flex items-start gap-3 ml-11">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    La pandémie a joué un rôle de révélateur. Le confinement a forcé beaucoup de gens à réfléchir à leur vie, à leurs priorités. Ils ont réalisé qu'ils passaient l'essentiel de leur temps dans un travail qui ne leur apportait ni épanouissement, ni reconnaissance.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Mais il y a aussi des causes plus structurelles : la précarisation croissante, l'intensification du travail, le sentiment d'inutilité sociale de certains métiers. Les jeunes générations, notamment, ne veulent plus sacrifier leur santé mentale et leur vie personnelle pour un emploi.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlighted Quote */}
            <div className="my-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500">
              <Quote className="w-8 h-8 text-yellow-500 mb-3" />
              <blockquote className="text-2xl font-medium text-slate-950 dark:text-white italic">
                "Les jeunes générations ne veulent plus sacrifier leur santé mentale et leur vie personnelle pour un emploi qui n'a pas de sens."
              </blockquote>
            </div>

            {/* Question 3 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
                  Q
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white pt-1">
                  Comment les entreprises réagissent-elles à ce phénomène ?
                </p>
              </div>
              <div className="flex items-start gap-3 ml-11">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    De manière très inégale. Certaines entreprises ont compris qu'il fallait transformer en profondeur leur organisation : plus de flexibilité, reconnaissance du télétravail, attention au bien-être des salariés. D'autres continuent comme si de rien n'était, ce qui aggrave leurs difficultés de recrutement.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
                  Q
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white pt-1">
                  Que devraient faire les pouvoirs publics selon vous ?
                </p>
              </div>
              <div className="flex items-start gap-3 ml-11">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Il faut repenser notre modèle social. Cela passe par une meilleure protection des travailleurs précaires, un encadrement du temps de travail à l'ère du numérique, mais aussi par une réflexion sur la réduction du temps de travail. Les 35 heures datent de 1998, or le monde a profondément changé depuis.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Il faut aussi valoriser davantage les métiers essentiels qui ont été en première ligne pendant la pandémie : soignants, enseignants, caissières... Ces professions doivent être mieux rémunérées et reconnues socialement.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
                  Q
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white pt-1">
                  Quel message voudriez-vous faire passer ?
                </p>
              </div>
              <div className="flex items-start gap-3 ml-11">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Que cette crise est aussi une opportunité. Elle nous oblige à repenser collectivement notre rapport au travail, à l'épanouissement, au temps libre. C'est une chance de construire une société où le travail reste central, mais n'est plus l'unique source de notre identité et de notre valeur. Il faut oser imaginer un autre modèle, plus équilibré, plus humain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
            <h3 className="font-bold text-slate-950 dark:text-white mb-3">À lire</h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>"La Grande Démission : Repenser le travail au XXIe siècle"</strong> par Sophie Mercier<br />
              Éditions du Seuil, 2026, 320 pages
            </p>
          </div>
        </article>

        {/* Related Interviews */}
        <div className="my-12">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Autres entretiens</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Marie Dubois, lanceur d\'alerte', category: 'Portrait', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MTE0MDI2Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
              { title: 'Jean Dupont, économiste', category: 'Expertise', image: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXNpcyUyMGRhdGElMjByZXNlYXJjaHxlbnwxfHx8fDE3NzEyMzA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
              { title: 'Claire Martin, activiste climat', category: 'Engagement', image: 'https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((interview, index) => (
              <button
                key={index}
                onClick={() => onNavigate('interview')}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                  <ImageWithFallback
                    src={interview.image}
                    alt={interview.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-yellow-500 text-slate-950 text-xs font-bold rounded">
                      {interview.category}
                    </span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-950 dark:text-white group-hover:text-yellow-500 transition-colors">
                  {interview.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
