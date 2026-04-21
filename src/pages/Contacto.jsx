import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const Contacto = () => {
  const info = [
    {
      title: "Llámanos",
      value: "+34 600 000 000",
      icon: <PhoneIcon className="w-8 h-8 text-amber-600" />,
      sub: "Atención inmediata"
    },
    {
      title: "Escríbenos",
      value: "hola@panaderiaipanema.com",
      icon: <EnvelopeIcon className="w-8 h-8 text-amber-600" />,
      sub: "Respondemos en 24h"
    },
    {
      title: "Visítanos",
      value: "Calle Falsa 123, Madrid",
      icon: <MapPinIcon className="w-8 h-8 text-amber-600" />,
      sub: "Frente al parque principal"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contacto</h2>
          <p className="mt-4 text-lg text-gray-600">Estamos aquí para lo que necesites</p>
        </div>

        {/* Rejilla de información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center border border-gray-100"
            >
              <div className="bg-amber-50 p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-amber-700 font-semibold mb-2">{item.value}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Botón rápido para móvil */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
