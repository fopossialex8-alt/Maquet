import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { PageType } from '../App';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const availableSlots = [
    { date: '2026-02-20', label: '20 février 2026' },
    { date: '2026-02-21', label: '21 février 2026' },
    { date: '2026-02-24', label: '24 février 2026' },
    { date: '2026-02-25', label: '25 février 2026' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <MessageCircle className="w-12 h-12 text-yellow-500" />
            <h1 className="text-5xl font-bold">Nous Contacter</h1>
          </div>
          <p className="text-xl text-slate-400">
            Une question, un témoignage, une collaboration ? Nous sommes à votre écoute
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-950 mb-6">
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-slate-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-950 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-950 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Sujet *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option>Question générale</option>
                      <option>Témoignage / Information</option>
                      <option>Collaboration</option>
                      <option>Presse / Média</option>
                      <option>Problème technique</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-yellow-500 text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Appointment Booking */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-950 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-yellow-500" />
                Prendre rendez-vous
              </h2>
              <p className="text-slate-600 mb-6">
                Pour un entretien personnalisé avec notre rédaction
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-950 mb-2">
                    Choisissez une date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Sélectionnez une date</option>
                    {availableSlots.map((slot) => (
                      <option key={slot.date} value={slot.date}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-sm font-bold text-slate-950 mb-2">
                      Horaire disponible
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                            selectedTime === time
                              ? 'bg-yellow-500 text-slate-950'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm text-slate-700">
                      <strong>Rendez-vous sélectionné :</strong><br />
                      {availableSlots.find(s => s.date === selectedDate)?.label} à {selectedTime}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full px-6 py-4 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Confirmer le rendez-vous
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-slate-950 mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-950">Email</p>
                    <a href="mailto:contact@oeildupublic.fr" className="text-slate-600 hover:text-yellow-600">
                      contact@oeildupublic.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-950">Téléphone</p>
                    <a href="tel:+33123456789" className="text-slate-600 hover:text-yellow-600">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-950">Adresse</p>
                    <p className="text-slate-600">
                      42 rue de la Presse<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold mb-4">Suivez-nous</h3>
              <p className="text-sm text-slate-400 mb-6">
                Rejoignez notre communauté sur les réseaux sociaux
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-pink-600 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-red-600 rounded-lg transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a
                  href="#"
                  className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-slate-950 mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Lundi - Vendredi</span>
                  <span className="font-medium text-slate-950">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Samedi</span>
                  <span className="font-medium text-slate-950">10h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Dimanche</span>
                  <span className="font-medium text-red-600">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[21/9] bg-slate-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Carte interactive</p>
              <p className="text-sm text-slate-500">42 rue de la Presse, 75001 Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
