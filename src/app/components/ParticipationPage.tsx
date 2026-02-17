import React, { useState } from 'react';
import { Upload, Users, ThumbsUp, TrendingUp, FileText, Image, CheckCircle } from 'lucide-react';
import { PageType } from '../App';

interface ParticipationPageProps {
  onNavigate: (page: PageType) => void;
}

export function ParticipationPage({ onNavigate }: ParticipationPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contributions = [
    {
      author: 'Marie D.',
      title: 'Pollution de la rivière locale par une usine',
      excerpt: 'Depuis plusieurs mois, la rivière qui traverse notre ville change de couleur...',
      category: 'Environnement',
      likes: 234,
      date: '14 fév 2026',
      verified: true
    },
    {
      author: 'Jean M.',
      title: 'Fermeture du service d\'urgence de l\'hôpital',
      excerpt: 'Les habitants de notre région n\'ont plus accès aux soins d\'urgence depuis la fermeture...',
      category: 'Santé',
      likes: 189,
      date: '13 fév 2026',
      verified: false
    },
    {
      author: 'Sophie L.',
      title: 'Problèmes de sécurité dans les transports en commun',
      excerpt: 'De nombreux usagers témoignent d\'incidents récurrents dans les bus de ligne...',
      category: 'Sécurité',
      likes: 156,
      date: '12 fév 2026',
      verified: true
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Participez</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Vous êtes témoin d'un événement important ? Partagez votre information avec notre rédaction. Ensemble, faisons le journalisme citoyen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contribution Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-950 mb-6">
                Proposer une contribution
              </h2>

              {!isAuthenticated ? (
                <div className="text-center py-12 border-2 border-dashed border-slate-300 rounded-lg">
                  <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    Connectez-vous pour contribuer
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Créez un compte ou connectez-vous pour partager votre témoignage
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => setIsAuthenticated(true)}
                      className="px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      Se connecter
                    </button>
                    <button 
                      onClick={() => setIsAuthenticated(true)}
                      className="px-6 py-3 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Créer un compte
                    </button>
                  </div>
                </div>
              ) : submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    Merci pour votre contribution !
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Notre rédaction va examiner votre témoignage. Vous recevrez une réponse sous 48h.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Nouvelle contribution
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Catégorie *
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                      <option>Politique</option>
                      <option>Société</option>
                      <option>Environnement</option>
                      <option>Santé</option>
                      <option>Éducation</option>
                      <option>Sécurité</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Titre de votre témoignage *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Problème de pollution dans mon quartier"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Description détaillée *
                    </label>
                    <textarea
                      rows={8}
                      placeholder="Racontez-nous les faits en détail. Plus votre description est précise, mieux nous pourrons enquêter..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Localisation
                    </label>
                    <input
                      type="text"
                      placeholder="Ville, région..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Documents ou photos (optionnel)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-600 mb-2">
                        Glissez vos fichiers ici ou cliquez pour parcourir
                      </p>
                      <p className="text-sm text-slate-500">
                        Images, PDF, vidéos (max 50 Mo)
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Votre email de contact *
                    </label>
                    <input
                      type="email"
                      placeholder="email@exemple.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Nous ne publierons jamais votre email sans votre accord
                    </p>
                  </div>

                  {/* Anonymous Option */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="mt-1 w-4 h-4 text-yellow-500 border-slate-300 rounded focus:ring-yellow-500"
                    />
                    <label htmlFor="anonymous" className="text-sm text-slate-700">
                      Je souhaite rester anonyme (votre identité ne sera jamais révélée)
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Envoyer ma contribution
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <button className="text-yellow-600 hover:underline">charte éditoriale</button>
                  </p>
                </form>
              )}
            </div>

            {/* Editorial Charter */}
            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-bold text-slate-950 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-yellow-600" />
                Charte éditoriale
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Vérification systématique des informations transmises</li>
                <li>• Protection totale de l'identité des sources</li>
                <li>• Respect de la déontologie journalistique</li>
                <li>• Transparence dans nos méthodes d'investigation</li>
                <li>• Droit de réponse garanti pour toutes les parties</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Top Contributions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-slate-950">Contributions populaires</h3>
              </div>
              <div className="space-y-4">
                {contributions.map((contrib, index) => (
                  <div key={index} className="pb-4 border-b border-slate-200 last:border-0">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-lg font-bold text-yellow-500">{index + 1}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-950">{contrib.author}</span>
                          {contrib.verified && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-slate-950 mb-1 line-clamp-2">
                          {contrib.title}
                        </h4>
                        <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                          {contrib.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="px-2 py-0.5 bg-slate-100 rounded">
                            {contrib.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            {contrib.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-800 text-white rounded-lg p-6">
              <h3 className="font-bold mb-4">Impact citoyen</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-yellow-500">1,247</div>
                  <div className="text-sm text-slate-400">Contributions reçues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">89</div>
                  <div className="text-sm text-slate-400">Enquêtes publiées</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">23</div>
                  <div className="text-sm text-slate-400">Actions concrètes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
