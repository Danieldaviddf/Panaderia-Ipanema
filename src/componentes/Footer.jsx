import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Necesitas instalar react-icons

export const Footer = () => {
  return (
    <footer className="bg-black/40 text-white/70 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo o Nombre */}
        <div className="text-xl font-serif tracking-widest text-white">
          IPANEMA <span className="text-xs block text-center md:text-left text-orange-300">DESDE 1900</span>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} Panadería Ipanema. Todos los derechos reservados.
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-orange-300 transition-transform hover:scale-125">
            <FaInstagram size={40} />
          </a>
          <a href="#" className="hover:text-orange-300 transition-transform hover:scale-125">
            <FaFacebook size={40} />
          </a>
          <a href="#" className="hover:text-orange-300 transition-transform hover:scale-125">
            <FaWhatsapp size={40} />
          </a>
        </div>

      </div>
    </footer>
  );
};
