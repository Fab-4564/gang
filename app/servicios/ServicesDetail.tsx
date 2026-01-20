
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function ServicesDetail() {
  const services = [
    {
      id: 'corte',
      title: 'Corte de Precisión',
      icon: 'ri-scissors-cut-line',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20laser%20cutting%20machine%20in%20action%20cutting%20thick%20steel%20plate%20with%20bright%20sparks%20and%20precision%2C%20modern%20CNC%20plasma%20cutting%20equipment%20in%20professional%20metalworking%20workshop%20environment&width=800&height=500&seq=cutting-service&orientation=landscape',
      description: 'Ofrecemos servicios de corte de alta precisión utilizando tecnología láser CNC, plasma y oxicorte para todo tipo de metales y espesores.',
      capabilities: [
        'Corte láser CNC hasta 25mm de espesor',
        'Corte plasma para espesores de 3mm a 150mm',
        'Oxicorte para piezas de gran espesor (hasta 300mm)',
        'Tolerancias de ±0.1mm en corte láser'
      ],
      materials: [
        'Acero al carbono',
        'Acero inoxidable',
        'Aluminio',
        'Aceros especiales',
        'Aleaciones diversas'
      ],
      specifications: {
        'Mesa de trabajo': '3000 x 1500 mm',
        'Espesor máximo láser': '25 mm',
        'Espesor máximo plasma': '150 mm',
        'Velocidad de corte': 'Hasta 15 m/min',
        'Precisión': '±0.1 mm'
      }
    },
    {
      id: 'rolado',
      title: 'Rolado Industrial',
      icon: 'ri-repeat-line',
      image: 'https://readdy.ai/api/search-image?query=Heavy%20duty%20industrial%20plate%20rolling%20machine%20bending%20thick%20steel%20sheets%20into%20cylindrical%20shapes%20in%20modern%20metalworking%20facility%20with%20operator%20controlling%20precision%20equipment&width=800&height=500&seq=rolling-service&orientation=landscape',
      description: 'Especialistas en rolado de chapas y perfiles con equipos de última generación para crear cilindros, conos y formas curvas complejas.',
      capabilities: [
        'Rolado de chapas de 2mm a 50mm',
        'Diámetros desde 200mm hasta 3000mm',
        'Rolado de perfiles estructurales',
        'Conformado de conos y formas especiales'
      ],
      materials: [
        'Chapas de acero al carbono',
        'Chapas de acero inoxidable',
        'Perfiles IPN, UPN, IPE',
        'Tubos y caños',
        'Materiales especiales'
      ],
      specifications: {
        'Ancho máximo': '3000 mm',
        'Espesor máximo': '50 mm',
        'Diámetro mínimo': '200 mm',
        'Longitud máxima': '6000 mm',
        'Capacidad': '15 toneladas'
      }
    },
    {
      id: 'doblado',
      title: 'Doblado y Plegado',
      icon: 'ri-corner-down-right-line',
      image: 'https://readdy.ai/api/search-image?query=Precision%20hydraulic%20press%20brake%20machine%20bending%20sheet%20metal%20with%20exact%20angles%20in%20industrial%20workshop%20with%20operator%20measuring%20angles%20and%20ensuring%20quality%20control&width=800&height=500&seq=bending-service&orientation=landscape',
      description: 'Doblado y plegado de chapas con precisión milimétrica utilizando prensas hidráulicas CNC y equipos especializados.',
      capabilities: [
        'Plegado CNC con control numérico',
        'Doblado de precisión ±0.5°',
        'Múltiples dobleces en una pieza',
        'Formas complejas y especiales'
      ],
      materials: [
        'Chapas hasta 12mm',
        'Acero galvanizado',
        'Acero inoxidable',
        'Aluminio',
        'Materiales prepintados'
      ],
      specifications: {
        'Longitud máxima': '4000 mm',
        'Espesor máximo': '12 mm',
        'Fuerza de plegado': '200 toneladas',
        'Precisión angular': '±0.5°',
        'Altura máxima': '400 mm'
      }
    },
    {
      id: 'fabricacion',
      title: 'Fabricación a Medida',
      icon: 'ri-tools-line',
      image: 'https://readdy.ai/api/search-image?query=Custom%20steel%20structure%20fabrication%20in%20progress%20with%20welders%20assembling%20complex%20industrial%20framework%20beams%20and%20supports%20in%20large%20workshop%20with%20cranes%20and%20professional%20equipment&width=800&height=500&seq=fabrication-service&orientation=landscape',
      description: 'Fabricación completa de estructuras metálicas, tanques, escaleras y piezas especiales según planos y especificaciones del cliente.',
      capabilities: [
        'Estructuras metálicas complejas',
        'Tanques y recipientes a presión',
        'Escaleras y barandas',
        'Piezas especiales bajo plano'
      ],
      materials: [
        'Perfiles estructurales',
        'Chapas de diversos espesores',
        'Tubos y caños',
        'Aceros especiales',
        'Materiales certificados'
      ],
      specifications: {
        'Peso máximo': '50 toneladas',
        'Dimensiones': 'Sin límite',
        'Soldadura': 'Certificada AWS',
        'Acabados': 'Todos los tipos',
        'Entrega': '2-6 semanas'
      }
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Gestión de Calidad' },
    { name: 'AWS D1.1', description: 'Soldadura Estructural' },
    { name: 'IRAM-IAS', description: 'Normas Argentinas' },
    { name: 'API 650', description: 'Tanques de Almacenamiento' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Servicios Profesionales de Metalmecánica
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Tecnología avanzada, personal certificado y más de 15 años de experiencia 
              garantizan resultados excepcionales en cada proyecto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="font-semibold">{cert.name}</span>
                  <span className="text-orange-200 ml-2">• {cert.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mr-4">
                    <i className={`${service.icon} text-3xl text-orange-600`}></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">{service.title}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Capacidades</h3>
                    <ul className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                          <span className="text-gray-700">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Materiales</h3>
                    <ul className="space-y-2">
                      {service.materials.map((material, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="ri-checkbox-blank-circle-fill text-orange-500 text-xs mr-2 mt-2"></i>
                          <span className="text-gray-700">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Especificaciones Técnicas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(service.specifications).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{value}</div>
                        <div className="text-sm text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Necesitas un Servicio Personalizado?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Nuestro equipo de ingenieros puede desarrollar soluciones específicas para tu proyecto. 
            Contáctanos para una consulta técnica gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Consulta Técnica Gratuita
            </Link>
            <Link href="/catalogo" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
