import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Pause, Play as PlayIcon } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Slide { src: string; title: string; caption?: string; poster?: string }

interface MultimediaHeroProps {
  onNavigate: (page: PageType) => void;
}

export function MultimediaHero({ onNavigate }: MultimediaHeroProps) {
  const slides: Slide[] = [
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1654868537177-86c35bb6b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      title: 'La corruption au cœur des marchés publics',
      caption: "Notre enquête révèle des pratiques illégales qui coûtent des millions aux contribuables."
    },
    {
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      title: 'Reportage : Transition écologique',
      caption: 'Des communautés confrontées aux défis du changement climatique.'
    },
    {
      src: 'https://www.w3schools.com/html/movie.mp4',
      poster: 'https://images.unsplash.com/photo-1664131777027-6af889bf2c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      title: 'Culture en mouvement',
      caption: "Format vidéo et images — découvrez le plein écran." 
    }
  ];

  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [playingModal, setPlayingModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [autoplay]);

  function prev() { setIndex((i) => (i - 1 + slides.length) % slides.length); setAutoplay(false); }
  function next() { setIndex((i) => (i + 1) % slides.length); setAutoplay(false); }
  function toggleAutoplay() { setAutoplay((s) => !s); }

  function openModalPlay() {
    setPlayingModal(true);
    setTimeout(() => videoRef.current?.play(), 60);
  }

  function closeModal() {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setPlayingModal(false);
  }

  return (
    <section className="relative h-[600px] bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="carousel h-full">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s, i) => (
              <div className="carousel-slide" key={i} aria-hidden={index !== i}>
                <ImageWithFallback src={s.poster || ''} alt={s.title} className="carousel-image" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent"></div>
                <div className="carousel-caption max-w-3xl mx-4 md:mx-8">
                  <span className="inline-flex items-center gap-2 mb-3">
                    <button aria-label={`Regarder ${s.title}`} onClick={openModalPlay} className="inline-flex items-center gap-2 px-3 py-2 bg-black/50 hover:bg-black/60 rounded-full text-white transition-colors hero-cta">
                      <Play className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold">Regarder</span>
                    </button>
                    <span className="px-3 py-1 bg-yellow-500 text-slate-950 text-sm font-bold rounded">VIDÉO & ENQUÊTE</span>
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 brand-gradient">{s.title}</h2>
                  <p className="text-lg text-slate-200 mb-4">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls" aria-hidden={false}>
            <button aria-label="Précédent" className="carousel-button" onClick={prev}><ChevronLeft /></button>
            <div className="flex items-center gap-2">
              <button aria-label={autoplay ? 'Pause autoplay' : 'Activer autoplay'} className="carousel-button" onClick={toggleAutoplay}>
                {autoplay ? <Pause /> : <PlayIcon />}
              </button>
            </div>
            <button aria-label="Suivant" className="carousel-button" onClick={next}><ChevronRight /></button>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="flex gap-4">
            <button onClick={() => onNavigate('investigation')} className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors hero-cta">
              Lire l'enquête
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('video')} className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-700 text-white rounded-lg hover:bg-white/5 transition-colors">Voir la vidéo</button>
          </div>
        </div>
      </div>

      {playingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button onClick={closeModal} aria-label="Fermer la vidéo" className="absolute top-3 right-3 z-10 px-3 py-2 bg-black/50 rounded text-white">X</button>
            <video ref={videoRef} controls className="w-full h-auto bg-black">
              <source src={slides[index].src} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default MultimediaHero;
