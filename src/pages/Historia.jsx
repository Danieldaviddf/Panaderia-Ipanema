import React from 'react'
import historiaImg from '../assets/historia.png'

export const Historia = () => {
  return (
    <section className="min-h-screen px-6 pt-10 pb-20 text-white bg-transparent">
      <div className="mx-auto max-w-6xl">

        {/* Título - Ahora con flex para forzar el centro total */}
      <div className="mb-14 bg-black/30 text-center py-10 px-4 rounded-3xl flex flex-col items-center">
        
        <p className="w-full text-xs uppercase tracking-[0.4em] text-yellow-400 font-medium">
          Nuestra historia
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-5xl text-white">
          Tradición panadera con sabor auténtico
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          En Panadería Ipanema elaboramos cada día productos frescos con
          ingredientes de calidad, manteniendo la esencia de la panadería
          artesanal y el trato cercano con cada cliente.
        </p>
        
      </div>

        {/* Contenido */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagen con borde traslúcido */}
          <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <img
              src={historiaImg}
              alt="Panadería artesanal"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Tarjeta de Texto con fondo transparente/glassmorphism */}
          <div className="rounded-3xl border border-white/10 bg-black backdrop-blur-sm p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Más que pan, una experiencia artesanal
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Nuestra pasión por la panadería nace del cuidado por cada detalle:
              desde la selección de ingredientes hasta el proceso de elaboración
              diaria. Queremos ofrecer productos que transmitan calidad,
              cercanía y sabor en cada visita.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Desde nuestros panes tradicionales hasta la bollería y las
              tartas, todo está pensado para mantener viva la tradición y
              adaptarla a quienes buscan un producto auténtico y bien hecho.
            </p>

            {/* Stats con fondos transparentes */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-yellow-400">100%</p>
                <p className="mt-2 text-sm text-gray-400">
                  Elaboración diaria
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-yellow-400">+10</p>
                <p className="mt-2 text-sm text-gray-400">
                  Especialidades
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-yellow-400">Calidad</p>
                <p className="mt-2 text-sm text-gray-400">
                  En cada detalle
                </p>
              </div>
            </div>

            {/* Botón */}
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Hacer un pedido
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
