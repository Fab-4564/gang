
'use client';

export default function ExperienceSection() {
  const sectors = [
    {
      icon: 'ri-building-line',
      title: 'Construcción e Infraestructura',
      description: 'Estructuras metálicas para edificios, puentes y obras civiles de gran envergadura',
      projects: '180+ proyectos',
      highlight: 'Edificios hasta 25 pisos'
    },
    {
      icon: 'ri-oil-line',
      title: 'Petróleo y Gas',
      description: 'Componentes especializados para refinerías, plataformas y sistemas de transporte',
      projects: '95+ proyectos',
      highlight: 'Certificación ASME'
    },
    {
      icon: 'ri-car-line',
      title: 'Automotriz',
      description: 'Piezas de precisión y herramental para líneas de producción automotriz',
      projects: '120+ proyectos',
      highlight: 'Tolerancias ±0.05mm'
    },
    {
      icon: 'ri-ship-line',
      title: 'Naval y Offshore',
      description: 'Estructuras marinas resistentes a corrosión para embarcaciones y plataformas',
      projects: '45+ proyectos',
      highlight: 'Aceros inoxidables'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Minería',
      description: 'Equipos y estructuras para operaciones mineras en condiciones extremas',
      projects: '85+ proyectos',
      highlight: 'Resistencia extrema'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Alimentaria',
      description: 'Equipos y tanques con acabados sanitarios para la industria alimentaria',
      projects: '50+ proyectos',
      highlight: 'Grado alimentario'
    }
  ];

  const achievements = [
    { number: '575+', label: 'Proyectos Completados', sublabel: 'En 6 sectores industriales' },
    { number: '15,000+', label: 'Toneladas Procesadas', sublabel: 'De acero de alta calidad' },
    { number: '99.8%', label: 'Satisfacción Cliente', sublabel: 'Índice de recomendación' },
    { number: '48h', label: 'Tiempo Promedio', sublabel: 'De entrega express' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Experiencia Multisectorial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Líderes en Múltiples
            <span className="text-orange-600 block">Sectores Industriales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestra experiencia diversificada nos permite entender las necesidades específicas 
            de cada industria y ofrecer soluciones personalizadas de clase mundial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:shadow-xl hover:bg-white transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors">
                  <i className={`${sector.icon} text-2xl text-orange-600`}></i>
                </div>
                <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {sector.projects}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{sector.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{sector.description}</p>
              <div className="flex items-center space-x-2 text-orange-600">
                <i className="ri-star-fill text-sm"></i>
                <span className="text-sm font-medium">{sector.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Hablan por Sí Solos</h3>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              Más de una década construyendo confianza a través de resultados excepcionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <div className="text-orange-200 text-sm">{achievement.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Casos de Éxito Destacados
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Torre Corporativa Central</h4>
                <p className="text-gray-600 mb-2">Estructura metálica completa para edificio de 22 pisos - 850 toneladas de acero estructural</p>
                <span className="text-orange-600 font-semibold text-sm">Construcción • 2023</span>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Planta Petroquímica del Golfo</h4>
                <p className="text-gray-600 mb-2">Tanques de almacenamiento y tuberías especiales resistentes a corrosión</p>
                <span className="text-orange-600 font-semibold text-sm">Petróleo & Gas • 2023</span>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Línea de Producción Automotriz</h4>
                <p className="text-gray-600 mb-2">Herramental de precisión y componentes para ensamblaje de vehículos</p>
                <span className="text-orange-600 font-semibold text-sm">Automotriz • 2022</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20industrial%20project%20showcase%20displaying%20completed%20metalworking%20projects%20including%20structural%20steel%20buildings%2C%20precision%20components%20and%20industrial%20equipment%20in%20a%20serious%20business%20presentation%20format&width=600&height=500&seq=success-cases&orientation=landscape"
              alt="Casos de éxito"
              className="w-full rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full">
                  <i className="ri-trophy-line text-xl text-orange-600"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Premio Excelencia</div>
                  <div className="text-gray-600 text-sm">Industria Metalmecánica 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
