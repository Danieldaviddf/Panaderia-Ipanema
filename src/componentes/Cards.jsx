import React from 'react'

export const Cards = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 gap-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    
    {/* Card 1 - Bread */}
    <div className="flex flex-col">
      <img src="https://blog.elamasadero.com/wp-content/uploads/pan_de_espelta_de_vanessa_arana.jpg" alt="Bread" className="w-full h-64 object-cover" />
      <div className="bg-[#5c3d2e] p-6 text-white min-h-[160px]">
        <h3 className="text-xl font-bold mb-2">Bread</h3>
        <p className="text-sm opacity-80 text-pretty">
          Nuestros panes artesanos horneados cada mañana con masa madre.
        </p>
      </div>
    </div>

    {/* Card 2 - Buns */}
    <div className="flex flex-col">
      <img src="https://www.corazondecaramelo.es/wp-content/uploads/2024/12/Pan-tostado-2.jpg" alt="Buns" className="w-full h-64 object-cover" />
      <div className="bg-[#b33a1b] p-6 text-white min-h-[160px]">
        <h3 className="text-xl font-bold mb-2">Buns</h3>
        <p className="text-sm opacity-80 text-pretty">
          Bollería tradicional segoviana, dulce y esponjosa.
        </p>
      </div>
    </div>

    {/* Card 3 - Cookies */}
    <div className="flex flex-col">
      <img src="https://cdn.turris.es/6-thickbox_default/pan-de-coca.jpg" alt="Cookies" className="w-full h-64 object-cover" />
      <div className="bg-[#6b8e23] p-6 text-white min-h-[160px]">
        <h3 className="text-xl font-bold mb-2">Cookies</h3>
        <p className="text-sm opacity-80 text-pretty">
          Galletas caseras ideales para acompañar el café.
        </p>
      </div>
    </div>

    {/* Card 4 - Cakes */}
    <div className="flex flex-col">
      <img src="https://chapela.es/wp-content/uploads/2021/03/pan-integral-recetal.jpeg" alt="Cakes" className="w-full h-64 object-cover" />
      <div className="bg-[#e69138] p-6 text-white min-h-[160px]">
        <h3 className="text-xl font-bold mb-2">Cakes</h3>
        <p className="text-sm opacity-80 text-pretty">
          Tartas personalizadas para tus momentos más especiales.
        </p>
      </div>
    </div>

  </div>
</section>

  )
}
