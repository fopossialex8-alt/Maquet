import React, { useState } from 'react';
import { Film, Play, Clock, Calendar, Filter, Star, Share2, ThumbsUp, MessageSquare, X, User } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DocumentaryPageProps {
  onNavigate: (page: PageType) => void;
}

export function DocumentaryPage({ onNavigate }: DocumentaryPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showPlayer, setShowPlayer] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'society', label: 'Société' },
    { id: 'environment', label: 'Environnement' },
    { id: 'politics', label: 'Politique' },
    { id: 'culture', label: 'Culture' },
  ];

  const documentaries = [
    {
      title: 'Les oubliés de la transition écologique',
      description: 'Un documentaire poignant sur les travailleurs sacrifiés par la conversion énergétique. Entre désillusion et espoir, ils témoignent de leur combat pour une transition juste.',
      duration: '52 min',
      date: '15 février 2026',
      category: 'Environnement',
      categoryId: 'environment',
      image: 'https://images.unsplash.com/photo-1656740978676-985d07451c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExNzk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      views: '245K'
    },
    {
      title: 'Dans les coulisses du pouvoir',
      description: 'Immersion exclusive au cœur des institutions. Comment se prennent vraiment les décisions qui impactent la vie de millions de citoyens ?',
      duration: '78 min',
      date: '10 février 2026',
      category: 'Politique',
      categoryId: 'politics',
      image: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMTMzODIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      views: '312K'
    },
    {
      title: 'La révolution du cinéma indépendant',
      description: 'Portrait d\'une génération de cinéastes qui réinventent le septième art. De la création à la diffusion, enquête sur un mouvement culturel en plein essor.',
      duration: '64 min',
      date: '5 février 2026',
      category: 'Culture',
      categoryId: 'culture',
      image: 'https://images.unsplash.com/photo-1632670467494-c7c6de897290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBjYW1lcmF8ZW58MXx8fHwxNzcxMTU3NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      views: '178K'
    },
    {
      title: 'Les invisibles : au cœur de la pauvreté urbaine',
      description: 'Pendant six mois, nous avons suivi le quotidien de personnes en situation de précarité. Un témoignage bouleversant sur les inégalités qui fracturent notre société.',
      duration: '85 min',
      date: '28 janvier 2026',
      category: 'Société',
      categoryId: 'society',
      image: 'https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBsaWZlfGVufDF8fHx8MTc3MTE3OTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      views: '523K'
    },
    {
      title: 'Corruption : le système dévoilé',
      description: 'Notre enquête documentaire sur les réseaux de corruption aux marchés publics. Des révélations qui ont conduit à l\'ouverture d\'une enquête judiciaire.',
      duration: '92 min',
      date: '20 janvier 2026',
      category: 'Politique',
      categoryId: 'politics',
      image: 'https://images.unsplash.com/photo-1591314222191-61fad06f4428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcxMTc5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      views: '687K'
    },
    {
      title: 'La biodiversité en danger',
      description: 'Voyage à travers les écosystèmes menacés. Scientifiques et activistes nous alertent sur l\'urgence d\'agir pour préserver notre planète.',
      duration: '58 min',
      date: '12 janvier 2026',
      category: 'Environnement',
      categoryId: 'environment',
      image: 'https://images.unsplash.com/photo-1629161156834-67f7a989ca67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzcxMjMwNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      views: '421K'
    }
  ];

  const filteredDocs = selectedFilter === 'all' 
    ? documentaries 
    : documentaries.filter(d => d.categoryId === selectedFilter);

  const featuredDoc = documentaries[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Film className="w-12 h-12 text-yellow-500" />
            <h1 className="text-5xl font-bold">Documentaires</h1>
          </div>
          <p className="text-xl text-slate-400">
            Des enquêtes approfondies en format long pour comprendre les enjeux de notre temps
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Documentary */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative aspect-video lg:aspect-auto group cursor-pointer">
              <ImageWithFallback
                src={featuredDoc.image}
                alt={featuredDoc.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-slate-950 ml-2" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg">
                  NOUVEAU
                </span>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-sm font-bold rounded">
                {featuredDoc.duration}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">
                  {featuredDoc.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-slate-950">{featuredDoc.rating}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-950 mb-4">
                {featuredDoc.title}
              </h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                {featuredDoc.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredDoc.date}
                </span>
                <span>{featuredDoc.views} vues</span>
              </div>
              <button className="px-8 py-4 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2 w-fit">
                <Play className="w-5 h-5" />
                Regarder maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-700 mr-4">Catégorie :</span>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-yellow-500 text-slate-950'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Documentary Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.slice(1).map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-video">
                <ImageWithFallback
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-500/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-slate-950 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-white text-xs font-bold rounded ${
                    doc.categoryId === 'environment' ? 'bg-green-600' :
                    doc.categoryId === 'politics' ? 'bg-blue-600' :
                    doc.categoryId === 'culture' ? 'bg-purple-600' :
                    'bg-orange-600'
                  }`}>
                    {doc.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">
                  {doc.duration}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-black/80 text-white text-xs rounded">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  {doc.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-950 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {doc.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {doc.date}
                  </span>
                  <span>{doc.views} vues</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 to-slate-800 rounded-2xl p-12 text-center text-white">
          <Film className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Soutenez notre production documentaire
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Vos contributions nous permettent de produire des documentaires indépendants et de qualité. Aidez-nous à continuer notre mission d'information.
          </p>
          <button className="px-8 py-4 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
            Faire un don
          </button>
        </div>
      </div>
    </div>
  );
}