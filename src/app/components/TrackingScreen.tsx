import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Star, Navigation, User } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface TrackingScreenProps {
  onComplete: () => void;
}

export function TrackingScreen({ onComplete }: TrackingScreenProps) {
  const [driverProgress, setDriverProgress] = useState(0);
  const [status, setStatus] = useState('En route vers vous');

  useEffect(() => {
    const interval = setInterval(() => {
      setDriverProgress((prev) => {
        if (prev >= 100) {
          setStatus('Arrivé à destination');
          setTimeout(() => onComplete(), 2000);
          return 100;
        }
        if (prev >= 50) {
          setStatus('En route vers la destination');
        }
        return prev + 5;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  const driver = {
    name: 'Jean-Paul Mbarga',
    rating: 4.8,
    car: 'Toyota Corolla',
    plate: 'YAO-1234-CM',
    phone: '+237 6XX XXX XXX'
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 px-4 py-3 shadow-lg">
        <h1 className="text-white font-bold text-lg text-center">{status}</h1>
      </div>

      {/* Map Area - Tracking Simulation */}
      <div className="flex-1 relative bg-gradient-to-br from-green-100 to-yellow-50">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <pattern id="grid-tracking" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-tracking)" />
          </svg>
        </div>

        {/* Animated driver marker */}
        <div 
          className="absolute transition-all duration-500 ease-linear"
          style={{
            top: `${20 + driverProgress * 0.5}%`,
            left: `${20 + driverProgress * 0.4}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="relative animate-bounce">
            <div className="bg-green-600 rounded-full p-3 shadow-lg">
              <Navigation className="w-6 h-6 text-white" style={{ transform: 'rotate(45deg)' }} />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap font-semibold">
              {driver.name}
            </div>
          </div>
        </div>

        {/* Destination marker */}
        <div className="absolute bottom-1/4 right-1/4">
          <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
        </div>

        {/* Progress indicator on map */}
        <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">{status}</span>
            <span className="text-sm text-green-600 font-bold">{Math.round(driverProgress)}%</span>
          </div>
          <Progress value={driverProgress} className="h-2" />
        </div>
      </div>

      {/* Driver Info Panel */}
      <div className="bg-white rounded-t-3xl shadow-2xl px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{driver.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{driver.rating}</span>
              </div>
              <p className="text-sm text-gray-500">{driver.car} • {driver.plate}</p>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button variant="outline" className="h-12 border-2 border-green-600 text-green-600">
            <Phone className="w-5 h-5 mr-2" />
            Appeler
          </Button>
          <Button variant="outline" className="h-12 border-2 border-blue-600 text-blue-600">
            <MessageCircle className="w-5 h-5 mr-2" />
            Message
          </Button>
        </div>

        {/* Trip Details */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-green-600 mt-1 mr-3"></div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Point de départ</p>
                <p className="font-semibold text-sm">Yaoundé Centre</p>
              </div>
            </div>
            <div className="border-l-2 border-dashed border-gray-300 ml-1.5 h-4"></div>
            <div className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-red-600 mt-1 mr-3"></div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Destination</p>
                <p className="font-semibold text-sm">Douala Akwa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between bg-green-50 rounded-xl p-4">
          <span className="font-semibold">Prix de la course</span>
          <span className="text-2xl font-bold text-green-600">2500 FCFA</span>
        </div>
      </div>
    </div>
  );
}
