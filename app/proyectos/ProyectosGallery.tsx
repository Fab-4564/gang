type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
  details: {
    cliente: string
    año: string
  }
}


'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function ProyectosGallery() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)


  const categories = [
    { id: 'todos', name: 'Todos los Proyectos' },
    { id: 'estructural', name: 'Estructuras Metálicas' },
    { id: 'tanques', name: 'Tanques y Recipientes' },
    { id: 'industrial', name: 'Equipamiento Industrial' },
    { id: 'arquitectonico', name: 'Proyectos Arquitectónicos' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nave Industrial - Zona Norte',
      category: 'estructural',
      image: 'https://readdy.ai/api/search-image?query=Large%20industrial%20warehouse%20steel%20structure%20framework%20with%20high%20ceiling%20trusses%20and%20modern%20architectural%20design%20showing%20professional%20metalwork%20construction%20in%20progress&width=800&height=500&seq=industrial-building&orientation=landscape',
      description: 'Estructura metálica para nave industrial de 2,000 m² con techo a dos aguas y sistema de canaletas.',
      details: {
        cliente: 'Industrias del Norte S.A.',
        año: '2023',
        superficie: '2,000 m²',
        materiales: 'Perfiles IPE, HEB, Chapas galvanizadas',
        tiempo: '45 días',
        características: [
          'Luz libre de 25 metros sin columnas intermedias',
          'Altura libre de 8 metros',
          'Sistema de ventilación natural',
          'Puente grúa de 10 toneladas incluido',
          'Acabado galvanizado en caliente'
        ]
      }
    },
    {
      id: 2,
      title: 'Tanques de Almacenamiento',
      category: 'tanques',
      image: 'https://readdy.ai/api/search-image?query=Large%20cylindrical%20steel%20storage%20tanks%20in%20industrial%20facility%20with%20professional%20welding%20and%20construction%20showing%20high%20quality%20metalwork%20and%20safety%20standards&width=800&height=500&seq=storage-tanks&orientation=landscape',
      description: 'Tanques cilíndricos de 50,000 litros para almacenamiento de combustible con certificación API 650.',
      details: {
        cliente: 'Petroquímica del Sur',
        año: '2023',
        capacidad: '50,000 litros c/u',
        materiales: 'Chapa SAE 1020, Accesorios certificados',
        tiempo: '30 días',
        características: [
          'Diseño según norma API 650',
          'Prueba hidrostática incluida',
          'Sistema de venteo y drenaje',
          'Escalera helicoidal con plataforma',
          'Pintura anticorrosiva sistema completo'
        ]
      }
    },
    {
      id: 3,
      title: 'Escalera de Emergencia',
      category: 'arquitectonico',
      image: 'https://readdy.ai/api/search-image?query=Modern%20steel%20emergency%20staircase%20with%20safety%20railings%20and%20non-slip%20steps%20attached%20to%20industrial%20building%20exterior%20showing%20professional%20metalwork%20craftsmanship&width=800&height=500&seq=emergency-stairs&orientation=landscape',
      description: 'Escalera de emergencia externa de 4 pisos con descansos y barandas de seguridad.',
      details: {
        cliente: 'Centro Comercial Plaza',
        año: '2023',
        altura: '15 metros',
        materiales: 'Perfiles estructurales, Chapa antideslizante',
        tiempo: '20 días',
        características: [
          'Cumple normas de seguridad vigentes',
          'Escalones con chapa antideslizante',
          'Barandas de 1.10m de altura',
          'Descansos cada 3 metros',
          'Acabado con pintura ignífuga'
        ]
      }
    },
    {
      id: 4,
      title: 'Estructura para Techo Solar',
      category: 'estructural',
      image: 'https://readdy.ai/api/search-image?query=Steel%20framework%20structure%20designed%20for%20solar%20panel%20installation%20on%20industrial%20roof%20with%20precise%20angles%20and%20mounting%20points%20showing%20professional%20metalwork%20engineering&width=800&height=500&seq=solar-structure&orientation=landscape',
      description: 'Estructura metálica para soporte de paneles solares con capacidad de 500 kW.',
      details: {
        cliente: 'Energía Renovable S.A.',
        año: '2023',
        potencia: '500 kW',
        materiales: 'Perfiles galvanizados, Tornillería inoxidable',
        tiempo: '25 días',
        características: [
          'Diseño optimizado para cargas de viento',
          'Inclinación de 23° hacia el norte',
          'Resistencia sísmica calculada',
          'Facilidad de mantenimiento',
          'Garantía estructural 25 años'
        ]
      }
    },
    {
      id: 5,
      title: 'Plataforma Industrial',
      category: 'industrial',
      image: 'https://readdy.ai/api/search-image?query=Heavy%20duty%20industrial%20steel%20platform%20with%20safety%20railings%20and%20access%20stairs%20in%20manufacturing%20facility%20showing%20robust%20metalwork%20construction%20and%20safety%20features&width=800&height=500&seq=industrial-platform&orientation=landscape',
      description: 'Plataforma de trabajo de 200 m² para acceso a equipos industriales con escaleras y barandas.',
      details: {
        cliente: 'Fábrica Textil del Este',
        año: '2023',
        superficie: '200 m²',
        materiales: 'Vigas IPE, Rejilla electrosoldada',
        tiempo: '18 días',
        características: [
          'Carga de diseño 500 kg/m²',
          'Piso de rejilla electrosoldada',
          'Accesos con escaleras marineras',
          'Barandas perimetrales completas',
          'Zócalos de protección'
        ]
      }
    },
    {
      id: 6,
      title: 'Portón Industrial Automatizado',
      category: 'industrial',
      image: 'https://readdy.ai/api/search-image?query=Large%20automated%20industrial%20gate%20with%20steel%20framework%20and%20motor%20system%20showing%20professional%20metalwork%20and%20automation%20integration%20for%20warehouse%20facility&width=800&height=500&seq=industrial-gate&orientation=landscape',
      description: 'Portón corredizo de 12 metros de ancho con sistema de automatización completo.',
      details: {
        cliente: 'Logística Central',
        año: '2023',
        dimensiones: '12m x 4m',
        materiales: 'Perfiles estructurales, Chapa grecada',
        tiempo: '15 días',
        características: [
          'Sistema de automatización incluido',
          'Sensores de seguridad',
          'Control remoto y manual',
          'Guías de rodamiento reforzadas',
          'Motor con freno electromagnético'
        ]
      }
    },
    {
      id: 7,
      title: 'Estructura para Tolva',
      category: 'industrial',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20steel%20hopper%20structure%20with%20support%20framework%20and%20access%20platforms%20showing%20heavy%20duty%20metalwork%20construction%20for%20material%20handling%20systems&width=800&height=500&seq=hopper-structure&orientation=landscape',
      description: 'Estructura soporte para tolva de 30 m³ con sistema de descarga automatizado.',
      details: {
        cliente: 'Cementera del Oeste',
        año: '2023',
        capacidad: '30 m³',
        materiales: 'Perfiles HEB, Chapa de desgaste',
        tiempo: '35 días',
        características: [
          'Diseño para carga dinámica',
          'Chapa de desgaste en zonas críticas',
          'Sistema de descarga neumático',
          'Plataforma de mantenimiento',
          'Vibrador incluido'
        ]
      }
    },
    {
      id: 8,
      title: 'Pérgola Arquitectónica',
      category: 'arquitectonico',
      image: 'https://readdy.ai/api/search-image?query=Modern%20architectural%20steel%20pergola%20with%20geometric%20design%20and%20clean%20lines%20in%20contemporary%20outdoor%20space%20showing%20artistic%20metalwork%20craftsmanship%20and%20design%20aesthetics&width=800&height=500&seq=architectural-pergola&orientation=landscape',
      description: 'Pérgola decorativa de 150 m² con diseño arquitectónico contemporáneo para plaza pública.',
      details: {
        cliente: 'Municipalidad Centro',
        año: '2023',
        superficie: '150 m²',
        materiales: 'Perfiles rectangulares, Pintura especial',
        tiempo: '22 días',
        características: [
          'Diseño arquitectónico exclusivo',
          'Resistente a intemperie',
          'Sistema modular expandible',
          'Integración con iluminación LED',
          'Acabado en pintura texturada'
        ]
      }
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Galería de Proyectos Realizados
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Más de 500 proyectos completados con éxito. Cada trabajo refleja nuestro 
              compromiso con la calidad, precisión y cumplimiento de plazos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-300">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">15</div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">98%</div>
                <div className="text-sm text-gray-300">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Cumplimiento de Plazos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(cat => cat.id === project.category)?.name.replace('Proyectos ', '').replace('Equipamiento ', '')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg transition-colors cursor-pointer">
                      <i className="ri-share-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover object-top"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Información del Proyecto</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">Cliente:</span>
                      <span className="text-gray-600">{selectedProject.details.cliente}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">Año:</span>
                      <span className="text-gray-600">{selectedProject.details.año}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">Tiempo:</span>
                      <span className="text-gray-600">{selectedProject.details.tiempo}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">Materiales:</span>
                      <span className="text-gray-600">{selectedProject.details.materiales}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Características Principales</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.características.map((caracteristica, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                        <span className="text-gray-700">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                <Link href="/contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Solicitar Cotización Similar
                </Link>
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Compartir Proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes un Proyecto en Mente?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Nuestro equipo de ingenieros y técnicos especializados está listo para hacer realidad tu proyecto. 
            Desde el diseño hasta la instalación, te acompañamos en cada etapa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Consulta Gratuita
            </Link>
            <Link href="/servicios" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
