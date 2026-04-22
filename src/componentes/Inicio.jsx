import React, {useState} from 'react'
import fondo from '../assets/fondo.jpeg'

export const Inicio = () => {

  const [seccion, setSeccion] = useState('historia');

  const contenidos = {
    historia: {
      titulo: "Panadería en Revenga, Segovia // Ipanema",
      cuerpo: "Desde 1900, hemos aportado nuestro granito de arena a la felicidad de muchos segovianos. Integrando en sus hábitos la dulce costumbre de acercarse a nuestra tienda para disfrutar de nuestros productos.",
      extra: "En nuestras tiendas de Revenga y Segovia podrá encontrar una extensa gama de productos... que va desde el pan artesano hasta la pastelería por encargo."
    },
    zorrilla: {
      titulo: "Ipanema José Zorrilla",
      cuerpo: "Ubicada en el corazón de la calle José Zorrilla, nuestra tienda ofrece pan recién horneado cada hora y nuestra famosa bollería tradicional.",
      extra: "Horario: Lunes a Sábado de 8:00 a 20:00."
    },
    segovia: {
      titulo: "Ipanema Nueva Segovia",
      cuerpo: "En Nueva Segovia somos referentes por nuestras tartas artesanales y el ambiente acogedor. Un punto de encuentro para los vecinos del barrio.",
      extra: "Especialidad: Cruasanes de mantequilla y pan de masa madre."
    },
    villacastin: {
      titulo: "Ipanema Crta. Villacastín",
      cuerpo: "Nuestra tienda de Carretera Villacastín es ideal para recogidas rápidas y encargos grandes de repostería para eventos.",
      extra: "Fácil aparcamiento y atención personalizada."
    }
  };

  return (
    <section className="flex items-center justify-center px-6 py-10">
      <div
        className="relative w-full max-w-6xl min-h-[700px] bg-cover bg-center border border-white/20"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        {/* navbar */}
        <nav className="relative z-10 flex items-center justify-center px-8 bg-black/30 py-6 border-b border-white/10">
          <ul className="flex flex-col md:flex-row items-center gap-8 text-white text-sm">
            <li>
              <button 
                onClick={() => setSeccion('historia')}
                className={`transition-transform hover:scale-110 hover:text-orange-300 ${seccion === 'historia' ? 'text-orange-300 font-bold' : ''}`}
              >
                Nuestra Historia
              </button>
            </li>
            <li>
              <button 
                onClick={() => setSeccion('zorrilla')}
                className={`transition-transform hover:scale-110 hover:text-orange-300 ${seccion === 'zorrilla' ? 'text-orange-300 font-bold' : ''}`}
              >
                Ipanema José Zorrilla
              </button>
            </li>
            <li>
              <button 
                onClick={() => setSeccion('segovia')}
                className={`transition-transform hover:scale-110 hover:text-orange-300 ${seccion === 'segovia' ? 'text-orange-300 font-bold' : ''}`}
              >
                Ipanema Nueva Segovia
              </button>
            </li>
            <li>
              <button 
                onClick={() => setSeccion('villacastin')}
                className={`transition-transform hover:scale-110 hover:text-orange-300 ${seccion === 'villacastin' ? 'text-orange-300 font-bold' : ''}`}
              >
                Ipanema Crta. Villacastín
              </button>
            </li>
          </ul>
        </nav>

        {/* contenido central dinámico */}
        <div className="text-white relative z-10 flex p-15 justify-center text-center min-h-[620px] px-6 mt-10">
          <div className="text-white max-w-3xl text-center bg-black/30 p-8 rounded-lg">
            <h2 className="text-xs mb-3 tracking-widest uppercase text-orange-200">
              {contenidos[seccion].titulo}
            </h2>

            <h2 className="text-2xl md:text-4xl font-serif leading-tight mb-6">
              {contenidos[seccion].cuerpo}
            </h2>

            <p className="text-white/90 text-sm italic">
              {contenidos[seccion].extra}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
