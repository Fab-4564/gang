
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Inicio', icon: 'ri-home-4-line' },
    { href: '/servicios', label: 'Servicios', icon: 'ri-tools-line' },
    { href: '/materiales', label: 'Materiales', icon: 'ri-stack-line' },
    { href: '/proyectos', label: 'Proyectos', icon: 'ri-gallery-line' },
    { href: '/certificaciones', label: 'Certificaciones', icon: 'ri-award-line' },
    { href: '/catalogo', label: 'Catálogo', icon: 'ri-book-open-line' },
    { href: '/contacto', label: 'Contacto', icon: 'ri-phone-line' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-orange-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/8bd5283d5e7d6e05b529688ca42b6bdf/55a9021881224b4eed8e2e01636fc18a.png"
                alt="MetalTech Pro Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">MetalTech Pro</h1>
              <p className="text-xs text-orange-600 font-medium">Soluciones Metalmecánicas</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="group flex flex-col items-center px-4 py-3 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-xl text-gray-600 group-hover:text-orange-600`}></i>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-orange-50 transition-colors"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${item.icon} text-lg text-orange-600`}></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
