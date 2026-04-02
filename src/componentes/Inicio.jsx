import React from 'react'
import fondo from '../assets/fondo.jpeg'

export const Inicio = () => {
  return (
    <section className=" flex items-center justify-center px-6 py-10">
      <div
        className="relative w-full max-w-6xl min-h-[700px] bg-cover bg-center border border-white/20"
        style={{
          backgroundImage:
            `url(${fondo})`,
        }}
      >
        {/* capa oscura */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* navbar */}
        <nav className="relative z-10 flex items-center justify-center px-8 bg-black/30 py-6 border-b border-white/10">
            <ul className="flex flex-col md:flex-row items-center gap-8 text-white text-sm">
                <li>
                <a href="#" className="inline-block transition-transform hover:scale-130 hover:text-orange-300">
                    Nuestra Historia
                </a>
                </li>
                <li>
                <a href="#" className="inline-block transition-transform hover:scale-130 hover:text-orange-300">
                    Ipanema José Zorrilla
                </a>
                </li>
                <li>
                <a href="#" className="inline-block transition-transform hover:scale-130 hover:text-orange-300">
                    Ipanema Nueva Segovia
                </a>
                </li>
                <li>
                <a href="#" className="inline-block transition-transform hover:scale-130 hover:text-orange-300">
                    Ipanema Crta. Villacastín
                </a>
                </li>
            </ul>
        </nav>

        {/* contenido central */}
        <div className="text-white relative z-10 flex items-center justify-center text-center min-h-[620px] px-6">
          <div className="text-white max-w-3xl text-center bg-black/30">
            <h2 className="!text-white text-xs mb-3 tracking-widest uppercase">
              Panadería en Revenga, Segovia // Ipanema
            </h2>

            <h2 className="!text-white text-4xl md:text-6xl font-serif leading-tight">
              Desde 1900, hemos aportado nuestro granito de arena a la felicidad de muchos segovianos. Integrando en sus hábitos la dulce costumbre de acercarse a nuestra tienda para disfrutar de nuestros productos.
              <br />
              En nuestras tiendas de Revenga y Segovia podrá encontrar una extensa gama de productos... que va desde el pan artesano hasta la pastelería por encargo. La repostería sigue siendo el centro de todo y es por ello que cada día se van innovando fórmulas o decoraciones nuevas.
            </h2>

            <p className="text-white/90 text-xs mb-3 tracking-widest uppercase">
              Encargue nuestras tartas personalizadas.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm transition">
              See our menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

