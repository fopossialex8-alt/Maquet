import React from 'react';
import { Eye, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-yellow-500" strokeWidth={2.5} />
              <div>
                <h3 className="text-lg font-bold text-white">Œil du Public</h3>
                <p className="text-xs text-slate-500">Journalisme citoyen</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Un média indépendant qui donne la parole aux citoyens et enquête sur les sujets qui comptent.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-yellow-500 transition-colors">Accueil</button></li>
              <li><button onClick={() => onNavigate('news')} className="hover:text-yellow-500 transition-colors">Actualités</button></li>
              <li><button onClick={() => onNavigate('photo')} className="hover:text-yellow-500 transition-colors">Images du jour</button></li>
              <li><button onClick={() => onNavigate('analysis')} className="hover:text-yellow-500 transition-colors">Analyses</button></li>
              <li><button onClick={() => onNavigate('investigation')} className="hover:text-yellow-500 transition-colors">Enquêtes</button></li>
              <li><button onClick={() => onNavigate('documentary')} className="hover:text-yellow-500 transition-colors">Documentaires</button></li>
              <li><button onClick={() => onNavigate('video')} className="hover:text-yellow-500 transition-colors">Vidéos</button></li>
              <li><button onClick={() => onNavigate('participation')} className="hover:text-yellow-500 transition-colors">Participez</button></li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="font-bold text-white mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-yellow-500 transition-colors">Politique</button></li>
              <li><button className="hover:text-yellow-500 transition-colors">Société</button></li>
              <li><button className="hover:text-yellow-500 transition-colors">Culture</button></li>
              <li><button className="hover:text-yellow-500 transition-colors">Sport</button></li>
              <li><button className="hover:text-yellow-500 transition-colors">Urgences</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">
              Recevez nos meilleures enquêtes directement dans votre boîte mail.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="px-4 py-2 bg-yellow-500 text-slate-950 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Œil du Public. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="hover:text-yellow-500 transition-colors">Mentions légales</button>
            <button className="hover:text-yellow-500 transition-colors">Politique de confidentialité</button>
            <button onClick={() => onNavigate('about')} className="hover:text-yellow-500 transition-colors">À propos</button>
          </div>
        </div>
      </div>
    </footer>
  );
}