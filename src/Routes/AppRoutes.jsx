import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { Horario } from "../pages/Horario";
import { Historia } from "../pages/Historia";
import { Contacto } from "../pages/Contacto";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Horario" element={<Horario />} />
      
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Contacto" element={<Contacto />} />
   
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
