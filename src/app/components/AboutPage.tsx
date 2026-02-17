import React from 'react';
import { Eye, Target, Shield, Users, Heart, Award } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const team = [
    { name: 'Marie Dupont', role: 'Rédactrice en chef', initials: 'MD', color: 'bg-yellow-500' },
    { name: 'Jean Martin', role: 'Journaliste d\'investigation', initials: 'JM', color: 'bg-blue-500' },
    { name: 'Sophie Laurent', role: 'Responsable vidéo', initials: 'SL', color: 'bg-purple-500' },
    { name: 'Pierre Durand', role: 'Développeur web', initials: 'PD', color: 'bg-green-500' },
    { name: 'Claire Moreau', role: 'Community manager', initials: 'CM', color: 'bg-red-500' },
    { name: 'Thomas Bernard', role: 'Journaliste politique', initials: 'TB', color: 'bg-indigo-500' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Indépendance',
      description: 'Aucune pression éditoriale, aucun actionnaire privé. Notre seule boussole : l\'intérêt général.'
    },
    {
      icon: Eye,
      title: 'Transparence',
      description: 'Nous expliquons nos méthodes, nos sources et nos financements. La confiance se mérite.'
    },
    {
      icon: Users,
      title: 'Participation citoyenne',
      description: 'Nos lecteurs sont nos premiers contributeurs. Ensemble, nous faisons le journalisme de demain.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-20 h-20 text-yellow-500 mx-auto mb-6" strokeWidth={2} />
          <h1 className="text-5xl font-bold mb-4">Œil du Public</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un média citoyen indépendant qui place la transparence et l'investigation au cœur de sa mission
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-yellow-500 text-slate-950 text-sm font-bold rounded mb-4">
              NOTRE MISSION
            </div>
            <h2 className="text-4xl font-bold text-slate-950 mb-6">
              Éclairer l'actualité, donner la parole aux citoyens
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Œil du Public est né d'une conviction : le journalisme doit servir l'intérêt général et donner à chacun les clés pour comprendre le monde qui l'entoure.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Nous enquêtons sur les sujets qui comptent vraiment, sans tabou ni complaisance. Notre indépendance éditoriale totale nous permet d'aborder tous les thèmes, même les plus sensibles.
            </p>
            <p className="text-lg text-slate-700">
              Mais nous sommes aussi une plateforme citoyenne où chacun peut témoigner, alerter, contribuer. Parce que le journalisme de qualité se construit avec ses lecteurs, pas contre eux.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTA2MjM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Notre équipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-950 mb-4">Nos valeurs</h2>
            <p className="text-xl text-slate-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{value.title}</h3>
                <p className="text-slate-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-950 mb-4">Notre équipe</h2>
          <p className="text-xl text-slate-600">
            Des journalistes passionnés au service de l'information
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className={`w-32 h-32 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold group-hover:scale-110 transition-transform`}>
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-1">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Notre impact</h2>
            <p className="text-xl text-slate-400">
              Des enquêtes qui ont fait bouger les choses
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-500 mb-2">156</div>
              <div className="text-slate-400">Enquêtes publiées</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-500 mb-2">23</div>
              <div className="text-slate-400">Scandales révélés</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-500 mb-2">1.2M</div>
              <div className="text-slate-400">Lecteurs mensuels</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-500 mb-2">89</div>
              <div className="text-slate-400">Prix remportés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-slate-950 mb-4">Distinctions</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: '2025', title: 'Prix Albert Londres', category: 'Enquête' },
            { year: '2024', title: 'Prix du journalisme citoyen', category: 'Innovation' },
            { year: '2024', title: 'Prix de la presse indépendante', category: 'Indépendance' },
            { year: '2023', title: 'Prix de l\'investigation', category: 'Corruption' },
            { year: '2023', title: 'Prix du meilleur média digital', category: 'Digital' },
            { year: '2022', title: 'Prix de la transparence', category: 'Déontologie' }
          ].map((award, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <div className="text-sm font-bold text-yellow-600 mb-2">{award.year}</div>
              <h3 className="font-bold text-slate-950 mb-1">{award.title}</h3>
              <p className="text-sm text-slate-600">{award.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-slate-950 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-950 mb-4">
            Soutenez un journalisme indépendant
          </h2>
          <p className="text-xl text-slate-900 mb-8">
            Œil du Public est financé par ses lecteurs. Aucune publicité, aucun actionnaire privé. Votre soutien garantit notre indépendance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
              Faire un don
            </button>
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Devenir membre
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 mb-4">Contactez-nous</h2>
              <p className="text-slate-700 mb-6">
                Une question, une suggestion, un témoignage à partager ? Notre équipe vous répond rapidement.
              </p>
              <div className="space-y-3 text-slate-700">
                <p><strong>Email :</strong> contact@oeildupublic.fr</p>
                <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                <p><strong>Adresse :</strong> 42 rue de la Presse, 75001 Paris</p>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  rows={4}
                  placeholder="Votre message"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="w-full px-6 py-3 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
