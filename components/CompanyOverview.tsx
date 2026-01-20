
'use client';

import Link from 'next/link';

export default function CompanyOverview() {
  const highlights = [
    {
      icon: 'ri-building-4-line',
      title: 'Infraestructura de Vanguardia',
      description: 'Planta industrial de 3,500m² con tecnología de última generación y sistemas automatizados',
      metric: '3,500m²'
    },
    {
      icon: 'ri-team-line',
      title: 'Capital Humano Especializado',
      description: '35 profesionales certificados con experiencia promedio de 12 años en el sector',
      metric: '35 Expertos'
    },
    {
      icon: 'ri-truck-line',
      title: 'Logística Estratégica',
      description: 'Red de distribución nacional con flota propia y alianzas logísticas estratégicas',
      metric: '24/7'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Garantía Total',
      description: 'Respaldo completo en todos nuestros trabajos con certificación de calidad internacional',
      metric: '100%'
    }
  ];

  const capabilities = [
    { icon: 'ri-focus-3-line', label: 'Precisión ±0.1mm', value: 'Corte Láser' },
    { icon: 'ri-weight-line', label: 'Hasta 50 Toneladas', value: 'Capacidad' },
    { icon: 'ri-ruler-2-line', label: 'Hasta 25mm', value: 'Espesor Máximo' },
    { icon: 'ri-time-line', label: '48-72 Horas', value: 'Entrega Express' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Excelencia Comprobada
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transformamos el Acero en
            <span className="text-orange-600 block">Soluciones Industriales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2008, hemos establecido nuevos estándares en la industria metalmecánica, 
            combinando tradición artesanal con innovación tecnológica para entregar resultados excepcionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ser el socio estratégico preferido de la industria, proporcionando soluciones metalmecánicas 
                innovadoras que impulsen el crecimiento y competitividad de nuestros clientes a través de 
                calidad superior, tecnología avanzada y servicio excepcional.
              </p>
              <div className="flex items-center space-x-3 text-orange-600">
                <i className="ri-award-line text-xl"></i>
                <span className="font-semibold">Certificación ISO 9001:2015</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Consolidarnos como la empresa líder en soluciones metalmecánicas de América Latina, 
                reconocida por nuestra innovación constante, sostenibilidad ambiental y contribución 
                al desarrollo industrial de la región.
              </p>
              <div className="flex items-center space-x-3 text-orange-600">
                <i className="ri-global-line text-xl"></i>
                <span className="font-semibold">Expansión Regional 2025</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl"></div>
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20industrial%20metalworking%20facility%20interior%20showing%20organized%20production%20floor%20with%20precision%20machinery%2C%20steel%20inventory%2C%20quality%20control%20stations%20and%20professional%20workers%20in%20a%20clean%20serious%20business%20environment&width=600&height=500&seq=facility-overview&orientation=landscape"
              alt="Nuestras instalaciones de vanguardia"
              className="w-full rounded-2xl shadow-2xl object-cover object-top relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl z-20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-orange-100 text-sm font-medium">Años Liderando</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors">
                  <i className={`${highlight.icon} text-2xl text-orange-600`}></i>
                </div>
                <div className="text-2xl font-bold text-orange-600">{highlight.metric}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Capacidades Técnicas</h3>
            <p className="text-gray-300 text-lg">Especificaciones que nos distinguen en el mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-600 rounded-2xl mx-auto mb-4">
                  <i className={`${capability.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-2">{capability.label}</div>
                <div className="text-gray-300 font-medium">{capability.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proyectos" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ver Proyectos Destacados
            </Link>
            <Link href="/certificaciones" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              Certificaciones y Calidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
