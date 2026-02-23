import React, { useState } from 'react';
import { Eye, Search, Menu, X, User } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<PageType | null>(null);

  const menuItems = [
    { label: 'Accueil', page: 'home' as PageType },
    { label: 'Actualités', page: 'news' as PageType, submenu: [
      { label: 'Images du jour', page: 'photo' as PageType }
    ]},
    { label: 'Analyses', page: 'analysis' as PageType },
    { label: 'Enquêtes', page: 'investigation' as PageType },
    { label: 'Documentaires', page: 'documentary' as PageType },
    { label: 'Vidéos', page: 'video' as PageType },
    { label: 'Participez', page: 'participation' as PageType },
    { label: 'À propos', page: 'about' as PageType },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Eye className="w-8 h-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight">Œil du Public</h1>
              <p className="text-xs text-slate-400">Journalisme citoyen</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" role="menubar" aria-label="Main navigation" onKeyDown={(e) => { if (e.key === 'Escape') setActiveSubmenu(null); }}>
            {menuItems.map((item) => (
              item.submenu ? (
                <div
                  key={item.page}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(item.page)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={activeSubmenu === item.page}
                    onClick={() => setActiveSubmenu(activeSubmenu === item.page ? null : item.page)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        setActiveSubmenu(item.page);
                        const firstId = `${item.page}-submenu-0`;
                        setTimeout(() => { const el = document.getElementById(firstId) as HTMLButtonElement | null; el?.focus(); }, 0);
                      }
                      if (e.key === 'Escape') {
                        setActiveSubmenu(null);
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                      currentPage === item.page ? 'text-yellow-500' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>

                  {activeSubmenu === item.page && (
                    <div role="menu" aria-label={`${item.label} submenu`} className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-2 z-50">
                      {item.submenu.map((sub, idx) => (
                        <button
                          id={`${item.page}-submenu-${idx}`}
                          key={sub.page}
                          role="menuitem"
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowDown') {
                              e.preventDefault();
                              const next = document.getElementById(`${item.page}-submenu-${Math.min(idx + 1, item.submenu!.length - 1)}`) as HTMLElement | null;
                              next?.focus();
                            } else if (e.key === 'ArrowUp') {
                              e.preventDefault();
                              const prev = document.getElementById(`${item.page}-submenu-${Math.max(idx - 1, 0)}`) as HTMLElement | null;
                              prev?.focus();
                            } else if (e.key === 'Escape') {
                              setActiveSubmenu(null);
                            }
                          }}
                          onClick={() => { onNavigate(sub.page); setActiveSubmenu(null); }}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  role="menuitem"
                  className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                    currentPage === item.page ? 'text-yellow-500' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Social CTAs (visible immediately) */}
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="cta-pill social" style={{background: 'var(--social-facebook)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.2 22 17.07 22 12.07z" fill="currentColor" />
                  </svg>
                  <span className="hidden sm:inline">Facebook</span>
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="cta-pill social" style={{background: 'linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6-2.6a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 5.6z" fill="currentColor" />
                  </svg>
                  <span className="hidden sm:inline">Instagram</span>
                </a>

                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" className="cta-pill social" style={{background: 'var(--social-tiktok)'}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2v14.5A4.5 4.5 0 1 1 11 13V6h3V4h-3V2z" fill="currentColor" />
                  </svg>
                  <span className="hidden sm:inline">TikTok</span>
                </a>
              </div>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Ouvrir la recherche"
              title="Rechercher"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Mon compte" title="Mon compte" className="hidden sm:flex p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu mobile"
              aria-expanded={menuOpen}
              title="Menu"
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2">
            <input
              type="text"
              placeholder="Rechercher un article, une enquête..."
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              autoFocus
            />
          </div>
        )}

        {/* Quick content CTAs + ticker */}
        <div className="mt-2 border-t border-slate-800 pt-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('news')} className="cta-pill brand">LIRE</button>
            <button onClick={() => onNavigate('video')} className="cta-pill accent">VOIR</button>
            <button onClick={() => onNavigate('article')} className="cta-pill social">ÉCOUTE</button>
          </div>

          <div className="ticker hidden sm:block w-1/2">
            <div className="ticker-track">
              <span className="ticker-item">ENQUÊTE EXCLUSIVE — Corruption au cœur des marchés publics — Lire maintenant</span>
              <span className="ticker-item">VIDÉO — Reportage spécial sur la transition écologique — Voir</span>
              <span className="ticker-item">PODCAST — Entretien avec des témoins — Écoutez</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top-2">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.page}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(activeSubmenu === item.page ? null : item.page);
                      return;
                    }
                    onNavigate(item.page);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === item.page
                      ? 'bg-yellow-500 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>

                {item.submenu && activeSubmenu === item.page && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.page}
                        onClick={() => {
                          onNavigate(sub.page);
                          setMenuOpen(false);
                          setActiveSubmenu(null);
                        }}
                        className="block w-full text-left px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
