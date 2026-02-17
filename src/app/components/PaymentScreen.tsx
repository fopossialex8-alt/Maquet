import React, { useState } from 'react';
import { CreditCard, Smartphone, Banknote, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface PaymentScreenProps {
  onPaymentComplete: () => void;
  onBack: () => void;
}

export function PaymentScreen({ onPaymentComplete, onBack }: PaymentScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Veuillez sélectionner un mode de paiement');
      return;
    }
    
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'orange',
      name: 'Orange Money',
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      description: 'Paiement mobile sécurisé',
      color: 'border-orange-500'
    },
    {
      id: 'mtn',
      name: 'Mobile Money (MTN)',
      icon: <Smartphone className="w-6 h-6 text-yellow-500" />,
      description: 'MTN Mobile Money',
      color: 'border-yellow-500'
    },
    {
      id: 'card',
      name: 'Carte bancaire',
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      description: 'Visa, Mastercard',
      color: 'border-blue-500'
    },
    {
      id: 'cash',
      name: 'Espèces',
      icon: <Banknote className="w-6 h-6 text-green-600" />,
      description: 'Paiement en liquide au chauffeur',
      color: 'border-green-600'
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
          <h1 className="text-white font-bold text-lg">Paiement</h1>
        </div>
        <CreditCard className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        {/* Trip Summary */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <h2 className="font-bold mb-3">Résumé de la course</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Distance</span>
              <span className="font-semibold">8.5 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Durée estimée</span>
              <span className="font-semibold">15 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tarif de base</span>
              <span className="font-semibold">2000 FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Distance supplémentaire</span>
              <span className="font-semibold">500 FCFA</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold text-green-600 text-lg">2500 FCFA</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <h2 className="font-bold mb-4">Mode de paiement</h2>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="relative">
                <RadioGroupItem
                  value={method.id}
                  id={method.id}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={method.id}
                  className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:bg-gray-50 peer-data-[state=checked]:${method.color} peer-data-[state=checked]:bg-opacity-5`}
                >
                  <div className="mr-4">{method.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold">{method.name}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                  {paymentMethod === method.id && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        {/* Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            💡 Tous les paiements sont sécurisés. Le chauffeur ne verra pas vos informations bancaires.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t bg-white px-5 py-4">
        <Button
          onClick={handlePayment}
          disabled={!paymentMethod || processing}
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300"
        >
          {processing ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              Traitement...
            </div>
          ) : (
            <>Confirmer le paiement • 2500 FCFA</>
          )}
        </Button>
      </div>
    </div>
  );
}
