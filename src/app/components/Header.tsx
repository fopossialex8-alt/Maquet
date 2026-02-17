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
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  currentPage === item.page ? 'text-yellow-500' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top-2">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}