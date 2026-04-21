import React from 'react'

export const Horario = () => {
  return (
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-3xl">
          {/* Encabezado: Tono café oscuro / rústico */}
          <div className="bg-[#3d2b1f] p-8 text-center text-white">
            <h2 className="text-3xl font-extrabold tracking-tight uppercase">Nuestro Horario</h2>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <div className="w-8 h-px bg-yellow-500/50"></div>
              <span className="text-sm font-medium tracking-widest text-yellow-500 uppercase">Ipanema</span>
              <div className="w-8 h-px bg-yellow-500/50"></div>
            </div>
          </div>

          {/* Cuerpo del horario */}
          <div className="p-6 bg-white">
            <div className="space-y-6">
              
              {/* Lunes a Viernes */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-lg font-bold text-gray-800">Lunes a Viernes</p>
                  <p className="text-sm text-gray-500 font-medium">Pan recién hecho</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-1 text-xl font-black text-amber-600 bg-amber-50 rounded-lg">
                    07:00 - 21:00
                  </span>
                </div>
              </div>

              {/* Sábados */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-lg font-bold text-gray-800">Sábados</p>
                  <p className="text-sm text-gray-500 font-medium">Desayunos especiales</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-1 text-xl font-black text-amber-600 bg-amber-50 rounded-lg">
                    08:00 - 20:00
                  </span>
                </div>
              </div>

              {/* Domingos */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-800">Domingos</p>
                  <p className="text-sm text-gray-500 font-medium">Mañanas dulces</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-1 text-xl font-black text-amber-600 bg-amber-50 rounded-lg">
                    08:00 - 15:00
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Pie de la tarjeta */}
          <div className="bg-gray-50 p-4 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              📍 Visítanos en Calle Ipanema
            </p>
          </div>
        </div>
      </div>

  )
}
