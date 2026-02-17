import React, { useState } from 'react';
import { Play, Clock, Filter, Youtube, Share2, ThumbsUp, MessageSquare, X, User } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoPageProps {
  onNavigate: (page: PageType) => void;
}

export function VideoPage({ onNavigate }: VideoPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const filters = [
    { id: 'all', label: 'Tout' },
    { id: 'actualite', label: 'Actualité' },
    { id: 'enquete', label: 'Enquête' },
    { id: 'interview', label: 'Interview' },
    { id: 'podcast', label: 'Podcast' },
  ];

  const videos = [
    {
      title: 'Corruption aux marchés publics : notre enquête exclusive',
      type: 'Enquête',
      typeId: 'enquete',
      image: 'https://images.unsplash.com/photo-1591314222191-61fad06f4428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcxMTc5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '25:34',
      views: '125K',
      date: '15 fév 2026'
    },
    {
      title: 'Interview : Marie Dubois, lanceur d\'alerte',
      type: 'Interview',
      typeId: 'interview',
      image: 'https://images.unsplash.com/photo-1562483614-c32ef84ec3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcnZpZXclMjBqb3VybmFsaXN0JTIwbmV3c3xlbnwxfHx8fDE3NzExNzk5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '18:45',
      views: '89K',
      date: '14 fév 2026'
    },
    {
      title: 'Manifestations climat : reportage sur le terrain',
      type: 'Actualité',
      typeId: 'actualite',
      image: 'https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12:20',
      views: '156K',
      date: '13 fév 2026'
    },
    {
      title: 'Podcast : Les enjeux de la transition écologique',
      type: 'Podcast',
      typeId: 'podcast',
      image: 'https://images.unsplash.com/photo-1709846485906-30b28e7ed651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NzEwODE1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '42:15',
      views: '67K',
      date: '12 fév 2026'
    },
    {
      title: 'Réforme de l\'éducation : décryptage des mesures',
      type: 'Actualité',
      typeId: 'actualite',
      image: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMTMzODIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '15:30',
      views: '98K',
      date: '11 fév 2026'
    },
    {
      title: 'Innovation : l\'IA au service de la médecine',
      type: 'Enquête',
      typeId: 'enquete',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxMDgxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '20:12',
      views: '112K',
      date: '10 fév 2026'
    },
    {
      title: 'Interview : Les défis du championnat national',
      type: 'Interview',
      typeId: 'interview',
      image: 'https://images.unsplash.com/photo-1639843091936-bb5fca7b5684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY3Rpb24lMjBhdGhsZXRlfGVufDF8fHx8MTc3MTEyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '14:45',
      views: '76K',
      date: '9 fév 2026'
    },
    {
      title: 'Podcast : Comprendre les élections locales',
      type: 'Podcast',
      typeId: 'podcast',
      image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHZvdGluZyUyMGRlbW9jcmFjeXxlbnwxfHx8fDE3NzExNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '35:20',
      views: '54K',
      date: '8 fév 2026'
    }
  ];

  const filteredVideos = selectedFilter === 'all' 
    ? videos 
    : videos.filter(v => v.typeId === selectedFilter);

  const featuredVideo = videos[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Vidéos & Podcasts</h1>
          <p className="text-slate-400">
            Nos reportages, enquêtes et interviews en vidéo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Player Modal */}
        {showPlayer && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedVideo !== null ? filteredVideos[selectedVideo].title : featuredVideo.title}
                </h2>
                <button
                  onClick={() => setShowPlayer(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Video Player */}
              <div className="bg-slate-900 rounded-lg overflow-hidden">
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Lecteur vidéo - Démo</p>
                    <p className="text-sm text-slate-400 mt-2">
                      Durée: {selectedVideo !== null ? filteredVideos[selectedVideo].duration : featuredVideo.duration}
                    </p>
                    {/* Simulated video controls */}
                    <div className="mt-8 max-w-2xl mx-auto">
                      <div className="w-full bg-slate-700 h-1 rounded-full mb-4">
                        <div className="w-1/3 bg-yellow-500 h-1 rounded-full"></div>
                      </div>
                      <div className="flex justify-center gap-4">
                        <button className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400">
                          <Play className="w-6 h-6 text-slate-950" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Info Bar */}
                <div className="p-6 bg-slate-800 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                        <span>342</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span>45</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5" />
                        Partager
                      </button>
                    </div>
                    <div className="text-sm text-slate-400">
                      {selectedVideo !== null ? filteredVideos[selectedVideo].views : featuredVideo.views} vues
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <p className="font-bold">Œil du Public</p>
                      <p className="text-sm text-slate-400">Journalisme citoyen</p>
                    </div>
                    <button className="ml-auto px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-colors">
                      S'abonner
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Suggested Videos */}
              <div className="mt-6">
                <h3 className="text-white font-bold mb-4">Vidéos suggérées</h3>
                <div className="grid grid-cols-3 gap-4">
                  {filteredVideos.slice(0, 3).map((video, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedVideo(index);
                      }}
                      className="group text-left"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                        <ImageWithFallback
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" fill="currentColor" />
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-yellow-500">
                        {video.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1">{video.views} vues</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Video */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setShowPlayer(true);
                }}
                className="relative aspect-video lg:aspect-auto group cursor-pointer"
              >
                <ImageWithFallback
                  src={featuredVideo.image}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-slate-950 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-sm font-bold rounded">
                  {featuredVideo.duration}
                </div>
              </button>
              <div className="p-6 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded w-fit mb-3">
                  {featuredVideo.type}
                </div>
                <h2 className="text-3xl font-bold text-slate-950 mb-4">
                  {featuredVideo.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  Notre enquête exclusive révèle un système de corruption organisé au sein des marchés publics. Six mois d'investigation pour mettre au jour ce scandale.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <span>{featuredVideo.views} vues</span>
                  <span>{featuredVideo.date}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    setShowPlayer(true);
                  }}
                  className="px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2 w-fit"
                >
                  <Play className="w-5 h-5" />
                  Regarder maintenant
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-700 mr-4">Filtrer par :</span>
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.slice(1).map((video, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedVideo(index + 1);
                setShowPlayer(true);
              }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer text-left"
            >
              <div className="relative aspect-video">
                <ImageWithFallback
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-500/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-slate-950 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-white text-xs font-bold rounded ${
                    video.typeId === 'enquete' ? 'bg-red-600' :
                    video.typeId === 'interview' ? 'bg-blue-600' :
                    video.typeId === 'podcast' ? 'bg-purple-600' :
                    'bg-slate-600'
                  }`}>
                    {video.type}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-950 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{video.views} vues</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white mb-12">
          <Youtube className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">
            Abonnez-vous à notre chaîne
          </h3>
          <p className="text-lg mb-6 text-red-100 max-w-2xl mx-auto">
            Ne manquez aucune de nos enquêtes et reportages. Recevez une notification à chaque nouvelle vidéo.
          </p>
          <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors">
            S'abonner maintenant
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-slate-950 mb-6">Commentaires (24)</h3>
          <div className="mb-6">
            <textarea
              placeholder="Partagez votre avis sur cette vidéo..."
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="mt-3 px-6 py-2 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              Publier
            </button>
          </div>
          <div className="space-y-4">
            {[
              { author: 'Sophie Martin', time: 'Il y a 1 heure', comment: 'Excellente enquête, bravo pour ce travail de fond ! Ce genre de contenu est vraiment nécessaire.' },
              { author: 'Thomas Laurent', time: 'Il y a 3 heures', comment: 'Très instructif, ce genre de contenu est essentiel pour comprendre les enjeux actuels.' },
              { author: 'Marie Dubois', time: 'Il y a 5 heures', comment: 'Merci pour cette investigation approfondie. Le journalisme de qualité existe encore !' }
            ].map((comment, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-slate-200 last:border-0">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 font-bold flex-shrink-0">
                  {comment.author[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-950">{comment.author}</span>
                    <span className="text-xs text-slate-500">{comment.time}</span>
                  </div>
                  <p className="text-slate-700">{comment.comment}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="text-sm text-slate-600 hover:text-slate-950 flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>12</span>
                    </button>
                    <button className="text-sm text-slate-600 hover:text-slate-950">Répondre</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}