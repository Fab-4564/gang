
'use client';

import Link from 'next/link';

export default function MaterialsSection() {
  const materials = [
    {
      icon: 'ri-building-line',
      title: 'Acero Estructural',
      description: 'Perfiles y chapas para construcción con certificación de calidad internacional',
      types: ['Vigas IPE/HEB', 'Perfiles UPN', 'Chapas A36/A572', 'Angulares L'],
      image: 'Professional steel structural beams and profiles organized in industrial warehouse with quality certification tags'
    },
    {
      icon: 'ri-shield-line',
      title: 'Acero Inoxidable',
      description: 'Grados especiales resistentes a corrosión para aplicaciones críticas',
      types: ['AISI 304/316', 'Duplex 2205', 'Super Duplex', 'Hastelloy C276'],
      image: 'High quality stainless steel sheets and pipes in modern industrial storage facility with corrosion resistance properties'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Acero Galvanizado',
      description: 'Protección superior contra corrosión para ambientes agresivos',
      types: ['Galvanizado en caliente', 'Galvanizado electrolítico', 'Galvalume', 'Prepintado'],
      image: 'Galvanized steel sheets and coils in professional industrial facility showing corrosion protection coating'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Aleaciones Especiales',
      description: 'Materiales de alta performance para aplicaciones industriales exigentes',
      types: ['Inconel 625/718', 'Monel 400', 'Titanio Grado 2', 'Aluminio 6061'],
      image: 'Specialized metal alloys and high performance materials in controlled industrial environment with technical specifications'
    }
  ];

  const specifications = [
    { label: 'Espesores Disponibles', value: '0.5mm - 100mm' },
    { label: 'Dimensiones Máximas', value: '6000 x 2500mm' },
    { label: 'Certificaciones', value: 'EN 10204 3.1/3.2' },
    { label: 'Stock Permanente', value: '500+ Toneladas' }
  ];

  return (
    <section id="materiales" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Materiales Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Aceros de Primera
            <span className="text-orange-600 block">Calidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos exclusivamente con aceros certificados de los mejores proveedores mundiales, 
            garantizando propiedades mecánicas superiores en cada proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bmaterial.image%7D&width=600&height=300&seq=material-${index}&orientation=landscape`}
                  alt={material.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-orange-600 rounded-xl">
                  <i className={`${material.icon} text-xl text-white`}></i>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{material.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{material.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {material.types.map((type, typeIndex) => (
                    <div key={typeIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{type}</span>
                    </div>
                  ))}
                </div>
                <Link href="/materiales" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer">
                  <span>Ver especificaciones</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Especificaciones Técnicas</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Capacidades y rangos de materiales disponibles en nuestro inventario permanente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-2xl mx-auto mb-4">
                  <i className="ri-database-2-line text-2xl text-orange-600"></i>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{spec.value}</div>
                <div className="text-gray-700 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Certificación Completa</div>
                <div className="text-gray-600">Todos nuestros materiales incluyen certificados de calidad y trazabilidad</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Entrega Inmediata</div>
                <div className="text-gray-600">Stock permanente para entrega en 24-48 horas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Corte a Medida</div>
                <div className="text-gray-600">Servicio de corte y preparación según especificaciones</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Buscas un Material Específico?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-lg">
              Nuestro equipo técnico te ayudará a seleccionar el material ideal para tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Consultar Disponibilidad
              </Link>
              <Link href="/materiales" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Ver Catálogo Completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
