import React from 'react';
import { CheckCircle, Star, Home } from 'lucide-react';
import { Button } from './ui/button';

interface CompletionScreenProps {
  onNewRide: () => void;
}

export function CompletionScreen({ onNewRide }: CompletionScreenProps) {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 px-4 py-3 shadow-lg">
        <h1 className="text-white font-bold text-lg text-center">Course terminée</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="bg-green-100 rounded-full p-6 mb-6">
          <CheckCircle className="w-20 h-20 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Merci !</h2>
        <p className="text-gray-600 text-center mb-8">
          Vous êtes arrivé à destination en toute sécurité
        </p>

        {/* Driver Info */}
        <div className="w-full bg-gray-50 rounded-2xl p-5 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
              JP
            </div>
            <div>
              <h3 className="font-semibold">Jean-Paul Mbarga</h3>
              <p className="text-sm text-gray-500">Toyota Corolla</p>
            </div>
          </div>

          {/* Rating */}
          <div className="text-center">
            <p className="text-sm font-semibold mb-3">Comment était votre course ?</p>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-green-600 font-semibold animate-in fade-in">
                Merci pour votre évaluation !
              </p>
            )}
          </div>
        </div>

        {/* Trip Summary */}
        <div className="w-full bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6">
          <h3 className="font-semibold mb-3">Résumé du trajet</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Distance</span>
              <span className="font-semibold">8.5 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Durée</span>
              <span className="font-semibold">15 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mode de paiement</span>
              <span className="font-semibold">Orange Money</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between">
              <span className="font-bold">Total payé</span>
              <span className="font-bold text-green-600 text-lg">2500 FCFA</span>
            </div>
          </div>
        </div>

        <Button
          onClick={onNewRide}
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white"
        >
          <Home className="w-5 h-5 mr-2" />
          Nouvelle course
        </Button>
      </div>
    </div>
  );
}
