import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const Contacto = () => {
  const info = [
    {
      title: "Llámanos",
      value: "+34 600 000 000",
      icon: <PhoneIcon className="w-8 h-8 text-yellow-500" />,
      sub: "Atención inmediata"
    },
    {
      title: "Escríbenos",
      value: "hola@panaderiaipanema.com",
      icon: <EnvelopeIcon className="w-8 h-8 text-yellow-500" />,
      sub: "Respondemos en 24h"
    },
    {
      title: "Visítanos",
      value: "Calle Falsa 123, Madrid",
      icon: <MapPinIcon className="w-8 h-8 text-yellow-500" />,
      sub: "Frente al parque principal"
    }
  ];

  return (
    <div className="py-10 px-4 bg-transparent w-full">
      <div className="max-w-5xl mx-auto">
        
        {/* Título de la sección centrado */}
        <div className="mb-14 bg-black/30 text-center py-5 px-4 rounded-3xl flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight md:text-5xl">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mt-4 rounded-full"></div> {/* Una línea decorativa */}
          <p className="mt-6 text-lg text-white">
            Estamos aquí para lo que necesites
          </p>
        </div>

        {/* Rejilla de información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <div 
              key={index} 
              className="bg-black p-8 rounded-3xl shadow-2xl transition-all duration-300 text-center flex flex-col items-center border border-white/10 hover:border-yellow-500/50 group"
            >
              {/* Círculo del icono con transparencia */}
              <div className="bg-white/5 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              
              <p className="text-yellow-500 font-semibold mb-2">
                {item.value}
              </p>
              
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Botón WhatsApp */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me" 
            className="inline-flex items-center px-10 py-4 border border-transparent text-base font-bold rounded-xl shadow-sm text-black bg-yellow-500 hover:bg-yellow-400 transition-all hover:scale-105"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
