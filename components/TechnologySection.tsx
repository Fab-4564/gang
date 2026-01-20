
'use client';

export default function TechnologySection() {
  const technologies = [
    {
      icon: 'ri-focus-3-line',
      title: 'Corte Láser CNC de Fibra',
      description: 'Tecnología de corte láser de última generación con precisión de ±0.1mm',
      specs: ['Potencia: 6kW', 'Espesor máx: 25mm', 'Velocidad: 45 m/min', 'Área: 3000x1500mm'],
      image: 'Modern fiber laser CNC cutting machine in operation cutting steel plate with precision and sparks in a professional industrial environment with serious business atmosphere'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Corte Plasma HD',
      description: 'Sistema de corte plasma de alta definición para espesores gruesos',
      specs: ['Corriente: 400A', 'Espesor máx: 80mm', 'Precisión: ±0.5mm', 'Área: 6000x2500mm'],
      image: 'High definition plasma cutting system cutting thick steel plate with precision in a modern metalworking facility showing industrial capabilities'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Plegadora CNC 200 Toneladas',
      description: 'Plegadora hidráulica de alta precisión para doblado de chapas',
      specs: ['Fuerza: 200T', 'Longitud: 4000mm', 'Precisión: ±0.1°', 'Control: CNC 8+1 ejes'],
      image: 'Professional hydraulic press brake machine bending steel sheet with precision in a clean organized metalworking workshop environment'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Roladora Industrial',
      description: 'Equipo especializado para rolado de chapas y perfiles estructurales',
      specs: ['Capacidad: 50mm', 'Ancho: 3000mm', 'Diámetro mín: 300mm', 'Control: Digital'],
      image: 'Industrial plate rolling machine forming curved steel plates in a professional metalworking facility with modern equipment and serious industrial setting'
    }
  ];

  const capabilities = [
    { icon: 'ri-cpu-line', title: 'Automatización Completa', value: '95%' },
    { icon: 'ri-time-line', title: 'Reducción de Tiempos', value: '60%' },
    { icon: 'ri-focus-3-line', title: 'Precisión Garantizada', value: '±0.1mm' },
    { icon: 'ri-recycle-line', title: 'Eficiencia Material', value: '98%' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tecnología de Vanguardia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Equipos de Última
            <span className="text-orange-600 block">Generación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Invertimos constantemente en la tecnología más avanzada para garantizar 
            precisión, eficiencia y calidad superior en cada proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Btech.image%7D&width=600&height=300&seq=tech-${index}&orientation=landscape`}
                  alt={tech.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-orange-600 rounded-xl">
                  <i className={`${tech.icon} text-xl text-white`}></i>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {tech.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ventajas Competitivas</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nuestra tecnología avanzada se traduce en beneficios tangibles para nuestros clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-2xl mx-auto mb-4">
                  <i className={`${capability.icon} text-2xl text-orange-600`}></i>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{capability.value}</div>
                <div className="text-gray-700 font-medium">{capability.title}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Industria 4.0</div>
                <div className="text-gray-600">Conectividad IoT y monitoreo en tiempo real</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Mantenimiento Predictivo</div>
                <div className="text-gray-600">Sistemas de diagnóstico avanzado</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Trazabilidad Total</div>
                <div className="text-gray-600">Control completo del proceso productivo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas una Cotización Técnica?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Nuestro equipo técnico está listo para evaluar tu proyecto y ofrecerte la mejor solución tecnológica
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Solicitar Consulta Técnica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
