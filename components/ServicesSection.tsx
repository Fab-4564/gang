
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-focus-3-line',
      title: 'Corte Láser CNC',
      description: 'Corte de precisión con tecnología láser de fibra. Tolerancias de ±0.1mm en espesores hasta 25mm.',
      features: ['Precisión ±0.1mm', 'Espesor hasta 25mm', 'Velocidad 45 m/min', 'Acabado perfecto'],
      image: 'Modern fiber laser CNC cutting machine cutting steel plate with precision sparks in professional metalworking facility'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Corte Plasma HD',
      description: 'Sistema de corte plasma de alta definición para espesores gruesos y grandes dimensiones.',
      features: ['Espesor hasta 80mm', 'Área 6000x2500mm', 'Alta velocidad', 'Cortes biselados'],
      image: 'High definition plasma cutting system cutting thick steel plate in industrial metalworking environment'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Rolado Industrial',
      description: 'Conformado de chapas y perfiles con equipos especializados para geometrías complejas.',
      features: ['Chapas hasta 50mm', 'Ancho 3000mm', 'Radio mínimo 300mm', 'Control digital'],
      image: 'Industrial plate rolling machine forming curved steel plates in modern metalworking facility'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Doblado de Precisión',
      description: 'Plegado de chapas con plegadora CNC de 200 toneladas para máxima precisión angular.',
      features: ['Fuerza 200T', 'Longitud 4000mm', 'Precisión ±0.1°', 'CNC 8+1 ejes'],
      image: 'Professional hydraulic press brake machine bending steel sheet with precision in organized workshop'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Servicios Especializados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Soluciones Integrales en
            <span className="text-orange-600 block">Metalmecánica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios completos de transformación del acero con tecnología de vanguardia 
            y los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-xl hover:bg-white transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bservice.image%7D&width=600&height=300&seq=service-${index}&orientation=landscape`}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-orange-600 rounded-xl">
                  <i className={`${service.icon} text-xl text-white`}></i>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/servicios" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer">
                  <span>Ver detalles completos</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas una Cotización Personalizada?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-lg">
              Nuestro equipo técnico está listo para evaluar tu proyecto y ofrecerte la mejor solución
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Solicitar Cotización
              </Link>
              <Link href="/catalogo" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Ver Catálogo Digital
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
