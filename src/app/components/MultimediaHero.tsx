import React, { useState, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MultimediaHeroProps {
  onNavigate: (page: PageType) => void;
  title?: string;
  excerpt?: string;
  bgImage?: string;
  ctaLabel?: string;
  ctaPage?: PageType;
}

export function MultimediaHero({
  onNavigate,
  title = "La corruption au cœur des marchés publics",
  excerpt = "Notre enquête révèle des pratiques illégales qui coûtent des millions aux contribuables.",
  bgImage = "https://images.unsplash.com/photo-1654868537177-86c35bb6b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  ctaLabel = "Lire l'enquête",
  ctaPage = 'investigation',
}: MultimediaHeroProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function openVideo() {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  }

  function closeVideo() {
    videoRef.current?.pause();
    videoRef.current && (videoRef.current.currentTime = 0);
    setPlaying(false);
  }

  return (
    <section className="relative h-[600px] bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback src={bgImage} alt="Hero" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <button onClick={openVideo} aria-label="Lire la vidéo" className="inline-flex items-center gap-2 px-3 py-2 bg-black/50 hover:bg-black/60 rounded-full text-white transition-colors">
              <span className="sr-only">Lire la vidéo</span>
              <Play className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Regarder</span>
            </button>
            <span className="px-3 py-1 bg-yellow-500 text-slate-950 text-sm font-bold rounded">VIDÉO & ENQUÊTE</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight brand-gradient">
            {title}
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            {excerpt}
          </p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate(ctaPage)} className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              {ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={openVideo} className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-700 text-white rounded-lg hover:bg-white/5 transition-colors">
              Voir la vidéo
            </button>
          </div>
        </div>
      </div>

      {playing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button onClick={closeVideo} aria-label="Fermer la vidéo" className="absolute top-3 right-3 z-10 px-3 py-2 bg-black/50 rounded text-white">X</button>
            <video ref={videoRef} controls className="w-full h-auto bg-black">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default MultimediaHero;
