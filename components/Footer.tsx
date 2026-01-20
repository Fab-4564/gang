
'use client';

import Link from 'next/link';

export default function Footer() {
  const services = [
    'Corte Láser CNC',
    'Corte Plasma HD',
    'Rolado Industrial',
    'Doblado de Precisión',
    'Soldadura Especializada',
    'Fabricación Estructural'
  ];

  const materials = [
    'Acero al Carbono',
    'Acero Inoxidable',
    'Acero Galvanizado',
    'Aluminio Industrial',
    'Perfiles Estructurales',
    'Chapas Especiales'
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Materiales', href: '/materiales' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Certificaciones', href: '/certificaciones' },
    { name: 'Catálogo Digital', href: '/catalogo' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="https://static.readdy.ai/image/8bd5283d5e7d6e05b529688ca42b6bdf/55a9021881224b4eed8e2e01636fc18a.png"
                  alt="MetalTech Pro Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MetalTech Pro</h3>
                <p className="text-orange-400 text-sm">Soluciones Metalmecánicas</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Líderes en soluciones metalmecánicas con más de 15 años de experiencia. 
              Calidad, precisión y confiabilidad en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/servicios" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400">Materiales</h4>
            <ul className="space-y-3">
              {materials.map((material, index) => (
                <li key={index}>
                  <Link href="/materiales" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-sm">
                    {material}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-orange-400 text-lg mt-1"></i>
                <div>
                  <p className="text-gray-300 text-sm">Av. Industrial 1234</p>
                  <p className="text-gray-300 text-sm">Zona Industrial Norte</p>
                  <p className="text-gray-300 text-sm">Ciudad, País 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-orange-400 text-lg"></i>
                <p className="text-gray-300 text-sm">+54 9 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-orange-400 text-lg"></i>
                <p className="text-gray-300 text-sm">info@metaltechpro.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-orange-400 text-lg"></i>
                <div>
                  <p className="text-gray-300 text-sm">Lun - Vie: 7:00 - 18:00</p>
                  <p className="text-gray-300 text-sm">Sáb: 8:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm cursor-pointer">
                  {link.name}
                </Link>
              ))}
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Made with Readdy
              </a>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 MetalTech Pro. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Soluciones metalmecánicas de excelencia desde 2008
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
