
'use client';

import { useState } from 'react';

export default function FloatingButtons() {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491234567890?text=Hola, me interesa conocer más sobre sus servicios metalmecánicos', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5491234567890', '_self');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      <div className="relative">
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          <i className="ri-whatsapp-line text-2xl"></i>
        </button>
        
        {showWhatsAppTooltip && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Escribir por WhatsApp
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={handleCallClick}
          onMouseEnter={() => setShowCallTooltip(true)}
          onMouseLeave={() => setShowCallTooltip(false)}
          className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          <i className="ri-phone-line text-2xl"></i>
        </button>
        
        {showCallTooltip && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Llamar ahora
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
}
