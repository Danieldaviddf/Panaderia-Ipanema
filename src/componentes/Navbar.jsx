import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';



const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Historia', href: "/Historia", current: false },
  { name: 'Horario', href: "/Horario", current: false },
  { name: 'Contacto', href: "/Contacto", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  // Dividimos el menú en dos partes para rodear el logo
  const leftLinks = navigation.slice(0, 2);
  const rightLinks = navigation.slice(2, 4);

  return (
    <Disclosure as="nav" className="relative bg-black/50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Botón Menú Móvil (se queda a la izquierda en móvil) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Contenedor Principal Desktop */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            
            <div className="hidden sm:flex items-center space-x-8">
              {/* Enlaces Izquierda */}
              <div className="flex space-x-6">
                {leftLinks.map((item) => (
                  <Link key={item.name} to={item.href} className="text-gray-300 hover:text-white text-xl font-medium">
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Logo Central */}
          <div className="flex w-full items-center justify-center">
        <img
  alt="Ipanema Logo"
  src={logo}
  className="imgLogo h-18 w-auto bg-white/40 px-3 py-2 rounded-md"
/>
              </div>

              {/* Enlaces Derecha */}
              <div className="flex space-x-6">
                {rightLinks.map((item) => (
                  <Link key={item.name} to={item.href} className="text-gray-300 hover:text-white text-xl font-medium">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Logo para Móvil (solo se ve cuando el menú desktop está oculto) */}
            <div className="flex sm:hidden shrink-0 items-center">
              <img
                alt="Ipanema Logo"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Panel Móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
