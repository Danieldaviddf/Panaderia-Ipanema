import React from 'react'
import { Navbar } from '../componentes/Navbar';
import { Inicio } from '../componentes/Inicio';
import { Footer } from '../componentes/Footer';
import { Cards } from '../componentes/Cards';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Inicio/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home;