import React, { useState, useEffect } from 'react';
import { Car, Star, Clock, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface DriverSearchProps {
  onDriverFound: () => void;
  onBack: () => void;
}

export function DriverSearch({ onDriverFound, onBack }: DriverSearchProps) {
  const [searching, setSearching] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (searching) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setSearching(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [searching]);

  const drivers = [
    {
      id: 1,
      name: 'Jean-Paul Mbarga',
      rating: 4.8,
      trips: 245,
      car: 'Toyota Corolla',
      plate: 'YAO-1234-CM',
      eta: '3 min',
      price: '2500 FCFA'
    },
    {
      id: 2,
      name: 'Marie Ngo Biyong',
      rating: 4.9,
      trips: 312,
      car: 'Honda Accord',
      plate: 'DLA-5678-CM',
      eta: '5 min',
      price: '2800 FCFA'
    },
    {
      id: 3,
      name: 'Paul Ekani',
      rating: 4.7,
      trips: 189,
      car: 'Nissan Sentra',
      plate: 'YAO-9012-CM',
      eta: '7 min',
      price: '2300 FCFA'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 px-4 py-3 flex items-center shadow-lg">
        <button onClick={onBack} className="mr-3">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1">
          <h1 className="text-white font-bold text-lg">Recherche de chauffeur</h1>
        </div>
        <Car className="w-6 h-6 text-white" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        {searching ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-green-100 rounded-full p-8 mb-6 animate-pulse">
              <Car className="w-16 h-16 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Recherche en cours...</h2>
            <p className="text-gray-500 text-center mb-6">
              Nous cherchons les meilleurs chauffeurs près de vous
            </p>
            <div className="w-full max-w-xs">
              <Progress value={progress} className="h-2" />
              <p className="text-center text-sm text-gray-500 mt-2">{progress}%</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-lg mb-4">Chauffeurs disponibles</h2>
            <div className="space-y-3">
              {drivers.map((driver) => (
                <div
                  key={driver.id}
                  className="border-2 border-gray-200 rounded-2xl p-4 hover:border-green-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                        {driver.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold">{driver.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{driver.rating}</span>
                          <span className="mx-1">•</span>
                          <span>{driver.trips} courses</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{driver.price}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {driver.eta}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Car className="w-4 h-4 mr-2" />
                    <span>{driver.car} • {driver.plate}</span>
                  </div>

                  <Button
                    onClick={onDriverFound}
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-10"
                  >
                    Choisir ce chauffeur
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
