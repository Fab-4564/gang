
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function CertificacionesDetail() {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      category: 'Gestión de Calidad',
      image: 'https://readdy.ai/api/search-image?query=Professional%20ISO%209001%20quality%20management%20certificate%20document%20with%20official%20seals%20and%20stamps%20displayed%20in%20modern%20office%20environment%20showing%20quality%20assurance%20standards&width=600&height=400&seq=iso-certificate&orientation=landscape',
      description: 'Sistema de Gestión de Calidad certificado internacionalmente que garantiza procesos estandarizados y mejora continua.',
      benefits: [
        'Procesos documentados y controlados',
        'Mejora continua en todos los servicios',
        'Satisfacción del cliente garantizada',
        'Auditorías internas y externas regulares'
      ],
      validUntil: '2025',
      certifyingBody: 'IRAM - Instituto Argentino de Normalización'
    },
    {
      title: 'AWS D1.1',
      category: 'Soldadura Estructural',
      image: 'https://readdy.ai/api/search-image?query=Professional%20welder%20certification%20document%20for%20structural%20steel%20welding%20with%20AWS%20D1.1%20standards%20showing%20qualified%20welding%20procedures%20and%20inspector%20credentials&width=600&height=400&seq=welding-certificate&orientation=landscape',
      description: 'Certificación para soldadura de estructuras de acero según normas de la American Welding Society.',
      benefits: [
        'Soldadores certificados y calificados',
        'Procedimientos de soldadura aprobados',
        'Inspección con ensayos no destructivos',
        'Garantía en uniones soldadas'
      ],
      validUntil: '2024',
      certifyingBody: 'American Welding Society (AWS)'
    },
    {
      title: 'IRAM-IAS U500-102',
      category: 'Normas Argentinas',
      image: 'https://readdy.ai/api/search-image?query=Argentine%20IRAM%20certification%20document%20for%20steel%20construction%20standards%20showing%20official%20validation%20and%20compliance%20with%20national%20building%20codes%20and%20regulations&width=600&height=400&seq=iram-certificate&orientation=landscape',
      description: 'Certificación en normas argentinas para construcciones de acero y estructuras metálicas.',
      benefits: [
        'Cumplimiento normativa nacional',
        'Estructuras aprobadas por municipios',
        'Cálculos según código argentino',
        'Supervisión técnica certificada'
      ],
      validUntil: '2025',
      certifyingBody: 'IRAM - Instituto Argentino de Normalización'
    },
    {
      title: 'API 650',
      category: 'Tanques de Almacenamiento',
      image: 'https://readdy.ai/api/search-image?query=API%20650%20storage%20tank%20construction%20certification%20document%20showing%20compliance%20with%20petroleum%20industry%20standards%20for%20welded%20steel%20tanks&width=600&height=400&seq=api-certificate&orientation=landscape',
      description: 'Certificación para construcción de tanques de almacenamiento soldados para la industria petrolera.',
      benefits: [
        'Tanques para productos petroleros',
        'Diseño según normas API',
        'Pruebas hidrostáticas certificadas',
        'Cumplimiento regulaciones ambientales'
      ],
      validUntil: '2024',
      certifyingBody: 'American Petroleum Institute (API)'
    },
    {
      title: 'ASME Section VIII',
      category: 'Recipientes a Presión',
      image: 'https://readdy.ai/api/search-image?query=ASME%20pressure%20vessel%20certification%20document%20showing%20compliance%20with%20boiler%20and%20pressure%20vessel%20code%20for%20industrial%20equipment%20manufacturing&width=600&height=400&seq=asme-certificate&orientation=landscape',
      description: 'Certificación para fabricación de recipientes a presión según código ASME.',
      benefits: [
        'Recipientes hasta 15 bar',
        'Diseño según código ASME',
        'Inspección por inspector autorizado',
        'Estampado ASME incluido'
      ],
      validUntil: '2025',
      certifyingBody: 'American Society of Mechanical Engineers'
    },
    {
      title: 'EN 1090',
      category: 'Estructuras de Acero Europeas',
      image: 'https://readdy.ai/api/search-image?query=European%20EN%201090%20steel%20structure%20certification%20document%20showing%20compliance%20with%20European%20standards%20for%20structural%20steelwork%20construction&width=600&height=400&seq=en1090-certificate&orientation=landscape',
      description: 'Certificación europea para fabricación y montaje de estructuras de acero y aluminio.',
      benefits: [
        'Acceso a mercados europeos',
        'Fabricación clase EXC2 y EXC3',
        'Trazabilidad completa de materiales',
        'Marcado CE en productos'
      ],
      validUntil: '2024',
      certifyingBody: 'European Committee for Standardization'
    }
  ];

  const qualityProcess = [
    {
      step: '1',
      title: 'Recepción de Materiales',
      description: 'Verificación de certificados de calidad y inspección visual de todos los materiales.',
      icon: 'ri-truck-line'
    },
    {
      step: '2',
      title: 'Control de Procesos',
      description: 'Seguimiento continuo de parámetros de corte, soldadura y conformado.',
      icon: 'ri-settings-3-line'
    },
    {
      step: '3',
      title: 'Inspección Dimensional',
      description: 'Verificación de medidas y tolerancias con instrumentos calibrados.',
      icon: 'ri-ruler-2-line'
    },
    {
      step: '4',
      title: 'Ensayos No Destructivos',
      description: 'Pruebas de ultrasonído, líquidos penetrantes y radiografías cuando corresponde.',
      icon: 'ri-microscope-line'
    },
    {
      step: '5',
      title: 'Inspección Final',
      description: 'Revisión completa del producto terminado antes de la entrega.',
      icon: 'ri-checkbox-circle-line'
    },
    {
      step: '6',
      title: 'Certificación de Entrega',
      description: 'Emisión de certificados de calidad y documentación técnica completa.',
      icon: 'ri-file-text-line'
    }
  ];

  const equipment = [
    {
      name: 'Máquina de Coordenadas 3D',
      description: 'Para medición dimensional de alta precisión',
      precision: '±0.01mm'
    },
    {
      name: 'Equipo de Ultrasonido',
      description: 'Detección de discontinuidades internas',
      range: 'Hasta 500mm espesor'
    },
    {
      name: 'Líquidos Penetrantes',
      description: 'Detección de fisuras superficiales',
      sensitivity: 'Nivel 2 según ASNT'
    },
    {
      name: 'Durómetro Portátil',
      description: 'Medición de dureza en campo',
      scales: 'HB, HRC, HV'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Certificaciones de Calidad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Nuestras certificaciones internacionales respaldan la calidad excepcional 
              de nuestros productos y servicios, garantizando cumplimiento de los más altos estándares.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">6</div>
                <div className="text-sm text-gray-300">Certificaciones Activas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">15</div>
                <div className="text-sm text-gray-300">Años Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Productos Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">24</div>
                <div className="text-sm text-gray-300">Auditorías Anuales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestras Certificaciones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenemos certificaciones vigentes en todas las áreas críticas de nuestro negocio, 
              asegurando la máxima calidad y confiabilidad en cada proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover object-top rounded-xl mb-4"
                    />
                  </div>
                  
                  <div>
                    <div className="mb-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {cert.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{cert.title}</h3>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm">
                        <span className="font-semibold text-gray-700">Válida hasta:</span>
                        <span className="text-gray-600 ml-2">{cert.validUntil}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-700">Organismo:</span>
                        <span className="text-gray-600 ml-2">{cert.certifyingBody}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Beneficios de esta Certificación:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {cert.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Proceso de Control de Calidad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos un riguroso proceso de control de calidad en cada etapa de producción, 
              garantizando productos que superan las expectativas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                  <i className={`${process.icon} text-2xl text-orange-600`}></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Equipos de Inspección</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con equipos de última generación para realizar inspecciones 
              y ensayos que garantizan la calidad de nuestros productos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((equip, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-600 rounded-full mx-auto mb-4">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{equip.name}</h3>
                <p className="text-gray-600 mb-3">{equip.description}</p>
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {equip.precision || equip.range || equip.sensitivity || equip.scales}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Todos nuestros equipos están calibrados</h3>
            <p className="text-orange-100 mb-6">
              Mantenemos certificados de calibración vigentes según normas IRAM e ISO 9001. 
              Calibración anual por laboratorios acreditados por OAA.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Certificados de Calibración
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Calidad Garantizada en Cada Proyecto</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Nuestras certificaciones y procesos de calidad garantizan que tu proyecto 
            cumplirá con los más altos estándares internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Solicitar Información
            </Link>
            <Link href="/proyectos" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Proyectos Certificados
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
