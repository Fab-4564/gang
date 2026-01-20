'use client';

export default function AboutSection() {
  const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Clientes Satisfechos' },
    { number: '24/7', label: 'Soporte Técnico' }
  ];

  const features = [
    {
      icon: 'ri-award-line',
      title: 'Calidad Certificada',
      description: 'Cumplimos con todas las normas de calidad y seguridad industrial.'
    },
    {
      icon: 'ri-time-line',
      title: 'Entrega Puntual',
      description: 'Respetamos los tiempos acordados sin comprometer la calidad.'
    },
    {
      icon: 'ri-team-line',
      title: 'Equipo Experto',
      description: 'Personal altamente capacitado con años de experiencia.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Precios Competitivos',
      description: 'Las mejores tarifas del mercado sin sacrificar calidad.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos una empresa familiar con más de 15 años de experiencia en el sector metalmecánico. 
              Nos especializamos en brindar soluciones integrales para la industria, desde trabajos de 
              corte y conformado hasta la venta de materiales de primera calidad.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro compromiso es ofrecer servicios de excelencia, utilizando tecnología de punta 
              y manteniendo los más altos estándares de calidad en cada proyecto.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20metalworking%20team%20in%20industrial%20workshop%20wearing%20safety%20equipment%20working%20with%20precision%20machinery%20and%20structural%20steel%20with%20modern%20facilities%20and%20organized%20workspace%20showing%20expertise%20and%20professionalism&width=600&height=800&seq=team-about&orientation=portrait"
              alt="Nuestro equipo"
              className="w-full rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                  <i className="ri-verified-badge-line text-2xl"></i>
                </div>
                <div>
                  <div className="font-bold">Certificados ISO</div>
                  <div className="text-blue-100 text-sm">Calidad garantizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}