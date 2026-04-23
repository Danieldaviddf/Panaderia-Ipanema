import React from 'react'

export const Horario = () => {
  return (
    // Contenedor principal: items-center asegura que la tarjeta esté al centro de la pantalla
    <div className="flex flex-col items-center justify-center py-20 px-4 w-full">
      
      {/* Tarjeta: mx-auto para centrar el bloque en su contenedor */}
      <div className="w-full max-w-md bg-black border border-white/10 shadow-2xl rounded-3xl overflow-hidden mx-auto">
        
        {/* Encabezado: flex-col y items-center para centrar los textos internos */}
        <div className="bg-[#3d2b1f] py-6 flex flex-col items-center text-center text-white">
          <h2 className="text-2xl font-extrabold tracking-tight uppercase">Nuestro Horario</h2>
          <p className="text-xs text-yellow-500/80 tracking-[0.3em] uppercase mt-1">Panadería Ipanema</p>
        </div>

        {/* Cuerpo */}
        <div className="p-6 space-y-5">
          {/* Filas: items-center para alinear verticalmente el texto y la hora */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="text-left"> {/* Alineamos el texto a la izquierda dentro de la fila para equilibrio */}
              <p className="font-bold text-white">Lunes a Viernes</p>
              <p className="text-xs text-gray-400">Artesanal diario</p>
            </div>
            <span className="font-black text-yellow-500 bg-white/5 px-3 py-1 rounded-lg">07:00 - 21:00</span>
          </div>

          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="text-left">
              <p className="font-bold text-white">Sábados</p>
              <p className="text-xs text-gray-400">Especialidad de la casa</p>
            </div>
            <span className="font-black text-yellow-500 bg-white/5 px-3 py-1 rounded-lg">08:00 - 20:00</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="font-bold text-white">Domingos</p>
              <p className="text-xs text-gray-400">Horneado matutino</p>
            </div>
            <span className="font-black text-yellow-500 bg-white/5 px-3 py-1 rounded-lg">08:00 - 15:00</span>
          </div>
        </div>

        {/* Pie: Centrado total */}
        <div className="bg-white/5 py-4 flex justify-center items-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
            📍 Calle Ipanema, 123
          </p>
        </div>
      </div>

    </div>
  );
};
