import React from 'react'

export const Horario = () => {
  return (
    <div className="flex flex-col items-center justify-center py-25 px-4 w-full">
      
      {/* Tarjeta compacta */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden mx-4">
        
        {/* Encabezado */}
        <div className="bg-[#3d2b1f] py-6 text-center text-white">
          <h2 className="text-2xl font-extrabold tracking-tight uppercase">Nuestro Horario</h2>
          <p className="text-xs text-yellow-500/80 tracking-[0.3em] uppercase mt-1">Panadería Ipanema</p>
        </div>

        {/* Cuerpo */}
        <div className="p-6 space-y-5">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p className="font-bold text-gray-800">Lunes a Viernes</p>
              <p className="text-xs text-gray-400">Artesanal diario</p>
            </div>
            <span className="font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">07:00 - 21:00</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p className="font-bold text-gray-800">Sábados</p>
              <p className="text-xs text-gray-400">Especialidad de la casa</p>
            </div>
            <span className="font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">08:00 - 20:00</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Domingos</p>
              <p className="text-xs text-gray-400">Horneado matutino</p>
            </div>
            <span className="font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">08:00 - 15:00</span>
          </div>
        </div>

        {/* Pie */}
        <div className="bg-gray-50 py-3 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">📍 Calle Ipanema, 123</p>
        </div>
      </div>

    </div>
  );
};
