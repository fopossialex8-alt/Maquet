import React, { useState } from 'react';
import { Camera, Calendar, MapPin, User, Heart, Share2, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoOfTheDayPageProps {
  onNavigate: (page: PageType) => void;
}

export function PhotoOfTheDayPage({ onNavigate }: PhotoOfTheDayPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const photos = [
    {
      image: 'https://images.unsplash.com/photo-1629161156834-67f7a989ca67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGUlMjBzdW5zZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzcxMjMwNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Coucher de soleil sur les collines',
      description: 'Un moment magique capturé au sommet des collines verdoyantes. La lumière dorée du crépuscule illumine le paysage d\'une beauté saisissante.',
      photographer: 'Sophie Martin',
      date: '16 février 2026',
      location: 'Massif Central, France',
      category: 'Nature',
      likes: 2456
    },
    {
      image: 'https://images.unsplash.com/photo-1770251960846-384b8bd21d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwZGVtb25zdHJhdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc3MTE3OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Manifestation pour le climat',
      description: 'Des milliers de citoyens dans les rues pour réclamer une action climatique urgente. Un mouvement citoyen d\'une ampleur historique.',
      photographer: 'Jean Dupont',
      date: '15 février 2026',
      location: 'Paris, France',
      category: 'Société',
      likes: 3421
    },
    {
      image: 'https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBsaWZlfGVufDF8fHx8MTc3MTE3OTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vie urbaine nocturne',
      description: 'Les lumières de la ville créent une atmosphère unique. Instantané de la vie urbaine après la tombée de la nuit.',
      photographer: 'Marie Laurent',
      date: '14 février 2026',
      location: 'Lyon, France',
      category: 'Urbain',
      likes: 1876
    }
  ];

  const currentPhoto = photos[currentIndex];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setLiked(false);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setLiked(false);
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Camera className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Image du Jour</h1>
          </div>
          <p className="text-xl">
            Chaque jour, une image pour raconter une histoire, capturer un moment, témoigner d'une réalité
          </p>
        </div>
      </div>

      {/* Main Photo Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-yellow-500 text-slate-950 font-bold rounded-lg">
                {currentPhoto.category}
              </span>
            </div>

            {/* Photo Count */}
            <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 text-white rounded-lg">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Photo Info */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left: Title & Description */}
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-4">{currentPhoto.title}</h2>
                <p className="text-xl text-slate-300 mb-6">
                  {currentPhoto.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{currentPhoto.photographer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{currentPhoto.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{currentPhoto.location}</span>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors ${
                    liked
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  {liked ? currentPhoto.likes + 1 : currentPhoto.likes}
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Partager
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  <Download className="w-5 h-5" />
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails Gallery */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Galerie récente</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setLiked(false);
                }}
                className={`relative aspect-video rounded-lg overflow-hidden group ${
                  index === currentIndex ? 'ring-4 ring-yellow-500' : ''
                }`}
              >
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-bold line-clamp-1">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Archive Link */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
            Voir toutes les images
          </button>
        </div>
      </div>
    </div>
  );
}
