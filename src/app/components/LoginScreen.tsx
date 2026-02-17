import React from 'react';
import { MapPin, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginScreenProps {
  onLogin: () => void;
  onContinueAsGuest: () => void;
}

export function LoginScreen({ onLogin, onContinueAsGuest }: LoginScreenProps) {
  return (
    <div className="h-full flex flex-col relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1696541665406-a2517f84f934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW1lcm9vbiUyMGxhbmRzY2FwZSUyMG1vdW50YWlufGVufDF8fHx8MTc3MTA0NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cameroun"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-red-900/60 to-yellow-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo & Title */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 mb-6 shadow-xl">
            <MapPin className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 text-center">MoveNow</h1>
          <p className="text-white/90 text-center text-lg">Votre transport au Cameroun</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-t-3xl px-8 py-10 shadow-2xl">
          <div className="space-y-4 mb-6">
            <div>
              <Input
                type="tel"
                placeholder="Numéro de téléphone"
                className="h-12 text-base"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Mot de passe"
                className="h-12 text-base"
              />
            </div>
          </div>

          <Button
            onClick={onLogin}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white mb-3"
          >
            <User className="w-5 h-5 mr-2" />
            Se connecter
          </Button>

          <Button
            onClick={onContinueAsGuest}
            variant="outline"
            className="w-full h-12 border-2 border-green-600 text-green-600 hover:bg-green-50"
          >
            Réserver sans compte
          </Button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Pas de compte ? <span className="text-green-600 font-semibold">Inscrivez-vous</span>
          </p>
        </div>
      </div>
    </div>
  );
}