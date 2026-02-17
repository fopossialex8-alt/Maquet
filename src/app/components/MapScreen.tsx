import React, { useState } from 'react';
import { MapPin, Navigation, Search, X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface MapScreenProps {
  isGuest: boolean;
  onSearchDriver: () => void;
  onBack: () => void;
}

export function MapScreen({ isGuest, onSearchDriver, onBack }: MapScreenProps) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const handleConfirm = () => {
    if (isGuest) {
      alert('Mode invité : Vous devez vous connecter pour commander une course.');
      return;
    }
    if (startLocation && endLocation) {
      onSearchDriver();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 px-4 py-3 flex items-center shadow-lg">
        <button onClick={onBack} className="mr-3">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1">
          <h1 className="text-white font-bold text-lg">MoveNow</h1>
          <p className="text-white/90 text-xs">
            {isGuest ? 'Mode invité - Réservation uniquement' : 'Commander une course'}
          </p>
        </div>
        <Navigation className="w-6 h-6 text-white" />
      </div>

      {/* Map Area - Simulation avec une image de fond */}
      <div className="flex-1 relative bg-gray-200">
        {/* Simulated Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-yellow-50">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Markers */}
          {startLocation && (
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="w-10 h-10 text-green-600 fill-green-600 drop-shadow-lg" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap">
                  Départ
                </div>
              </div>
            </div>
          )}
          
          {endLocation && (
            <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap">
                  Arrivée
                </div>
              </div>
            </div>
          )}

          {/* Route line */}
          {startLocation && endLocation && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="33%"
                y1="33%"
                x2="67%"
                y2="67%"
                stroke="#059669"
                strokeWidth="3"
                strokeDasharray="10,5"
              />
            </svg>
          )}
        </div>

        {/* Current location button */}
        <button className="absolute bottom-6 right-4 bg-white p-3 rounded-full shadow-lg">
          <Navigation className="w-6 h-6 text-green-600" />
        </button>
      </div>

      {/* Search Panel */}
      {showSearch && (
        <div className="bg-white rounded-t-3xl shadow-2xl px-5 py-6 max-h-[50%] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Où allez-vous ?</h2>
            <button onClick={() => setShowSearch(false)}>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-3 mb-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
              </div>
              <Input
                type="text"
                placeholder="Point de départ"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="pl-10 h-12 border-2 border-green-600/20 focus:border-green-600"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
              </div>
              <Input
                type="text"
                placeholder="Destination"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                className="pl-10 h-12 border-2 border-red-600/20 focus:border-red-600"
              />
            </div>
          </div>

          {/* Quick locations */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Lieux populaires</p>
            <div className="space-y-2">
              {['Yaoundé Centre', 'Douala Akwa', 'Aéroport International'].map((place) => (
                <button
                  key={place}
                  onClick={() => !startLocation ? setStartLocation(place) : setEndLocation(place)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-sm">{place}</span>
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleConfirm}
            disabled={!startLocation || !endLocation}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300"
          >
            <Search className="w-5 h-5 mr-2" />
            {isGuest ? 'Réserver' : 'Rechercher un chauffeur'}
          </Button>

          {isGuest && (
            <p className="text-center text-xs text-orange-600 mt-2">
              Connectez-vous pour commander une course complète
            </p>
          )}
        </div>
      )}

      {!showSearch && (
        <button
          onClick={() => setShowSearch(true)}
          className="absolute bottom-6 left-4 bg-white px-4 py-3 rounded-full shadow-lg flex items-center"
        >
          <Search className="w-5 h-5 mr-2 text-green-600" />
          <span className="text-sm font-semibold">Rechercher</span>
        </button>
      )}
    </div>
  );
}