
'use client';

export default function QualitySection() {
  const certifications = [
    {
      icon: 'ri-award-line',
      title: 'ISO 9001:2015',
      description: 'Sistema de Gestión de Calidad certificado internacionalmente',
      status: 'Vigente hasta 2026',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: 'ri-leaf-line',
      title: 'ISO 14001:2015',
      description: 'Gestión Ambiental y Sostenibilidad en todos nuestros procesos',
      status: 'Vigente hasta 2026',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'OHSAS 18001',
      description: 'Seguridad y Salud Ocupacional en el trabajo',
      status: 'Vigente hasta 2025',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: 'ri-hammer-line',
      title: 'AWS D1.1',
      description: 'Código de Soldadura Estructural de la American Welding Society',
      status: 'Certificación permanente',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const qualityProcesses = [
    {
      step: '01',
      title: 'Inspección de Materiales',
      description: 'Verificación de certificados de calidad y propiedades mecánicas de todos los materiales de entrada'
    },
    {
      step: '02',
      title: 'Control de Proceso',
      description: 'Monitoreo continuo de parámetros de corte, soldadura y conformado durante la producción'
    },
    {
      step: '03',
      title: 'Inspección Dimensional',
      description: 'Verificación de tolerancias y especificaciones técnicas con equipos de medición calibrados'
    },
    {
      step: '04',
      title: 'Pruebas Finales',
      description: 'Ensayos no destructivos y pruebas de resistencia según normas aplicables'
    },
    {
      step: '05',
      title: 'Documentación',
      description: 'Emisión de certificados de calidad y trazabilidad completa del producto'
    }
  ];

  const qualityMetrics = [
    { metric: '99.8%', label: 'Conformidad de Productos', icon: 'ri-checkbox-circle-line' },
    { metric: '0.02%', label: 'Índice de Defectos', icon: 'ri-error-warning-line' },
    { metric: '48h', label: 'Tiempo de Respuesta', icon: 'ri-time-line' },
    { metric: '100%', label: 'Trazabilidad', icon: 'ri-route-line' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Calidad Certificada
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Estándares Internacionales
            <span className="text-orange-600 block">de Calidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso con la excelencia se refleja en certificaciones internacionales 
            y procesos de calidad que garantizan resultados superiores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:shadow-xl hover:bg-white transition-all duration-300">
              <div className={`w-16 h-16 flex items-center justify-center ${cert.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${cert.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{cert.description}</p>
              <div className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                {cert.status}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Proceso de Control de Calidad
            </h3>
            <div className="space-y-6">
              {qualityProcesses.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-xl font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20quality%20control%20inspector%20using%20precision%20measuring%20equipment%20to%20inspect%20steel%20components%20in%20a%20modern%20metalworking%20facility%20with%20serious%20business%20environment%20and%20quality%20assurance%20processes&width=600&height=500&seq=quality-control&orientation=landscape"
              alt="Control de calidad"
              className="w-full rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-orange-100 text-sm font-medium">Control Continuo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Métricas de Calidad</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Indicadores que demuestran nuestro compromiso con la excelencia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-600 rounded-2xl mx-auto mb-4">
                  <i className={`${metric.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">{metric.metric}</div>
                <div className="text-gray-300 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">Garantía de Satisfacción</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Respaldamos todos nuestros trabajos con garantía completa y servicio post-venta especializado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-orange-400">
                <i className="ri-shield-check-line text-xl"></i>
                <span className="font-semibold">Garantía 2 años</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-400">
                <i className="ri-customer-service-2-line text-xl"></i>
                <span className="font-semibold">Soporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-400">
                <i className="ri-refresh-line text-xl"></i>
                <span className="font-semibold">Reposición inmediata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
