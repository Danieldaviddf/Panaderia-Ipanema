import { useState } from 'react'


import './App.css'
import Home from './pages/Home'
import { AppRoutes } from './Routes/AppRoutes'
import { Navbar } from './componentes/Navbar'
import { Footer } from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
      
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
