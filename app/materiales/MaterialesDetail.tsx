
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function MaterialesDetail() {
  const materialCategories = [
    {
      category: 'Aceros Estructurales',
      description: 'Perfiles y chapas para construcción de estructuras resistentes y duraderas.',
      image: 'https://readdy.ai/api/search-image?query=Warehouse%20organized%20structural%20steel%20inventory%20with%20various%20I-beams%20H-beams%20angles%20and%20plates%20neatly%20stacked%20and%20labeled%20in%20professional%20industrial%20storage%20facility&width=800&height=500&seq=structural-materials&orientation=landscape',
      products: [
        {
          name: 'Vigas IPE',
          sizes: ['IPE 80', 'IPE 100', 'IPE 120', 'IPE 140', 'IPE 160', 'IPE 180', 'IPE 200', 'IPE 220', 'IPE 240', 'IPE 270', 'IPE 300', 'IPE 330', 'IPE 360', 'IPE 400', 'IPE 450', 'IPE 500', 'IPE 550', 'IPE 600'],
          description: 'Vigas de perfil europeo para estructuras de alta resistencia'
        },
        {
          name: 'Vigas IPN',
          sizes: ['IPN 80', 'IPN 100', 'IPN 120', 'IPN 140', 'IPN 160', 'IPN 180', 'IPN 200', 'IPN 220', 'IPN 240', 'IPN 260', 'IPN 280', 'IPN 300', 'IPN 320', 'IPN 340', 'IPN 360', 'IPN 380', 'IPN 400'],
          description: 'Vigas de perfil normal para construcción general'
        },
        {
          name: 'Perfiles UPN',
          sizes: ['UPN 50', 'UPN 65', 'UPN 80', 'UPN 100', 'UPN 120', 'UPN 140', 'UPN 160', 'UPN 180', 'UPN 200', 'UPN 220', 'UPN 240', 'UPN 260', 'UPN 280', 'UPN 300', 'UPN 320', 'UPN 350', 'UPN 380', 'UPN 400'],
          description: 'Perfiles en U para marcos y estructuras secundarias'
        },
        {
          name: 'Perfiles HEB',
          sizes: ['HEB 100', 'HEB 120', 'HEB 140', 'HEB 160', 'HEB 180', 'HEB 200', 'HEB 220', 'HEB 240', 'HEB 260', 'HEB 280', 'HEB 300', 'HEB 320', 'HEB 340', 'HEB 360', 'HEB 400', 'HEB 450', 'HEB 500', 'HEB 550', 'HEB 600'],
          description: 'Perfiles europeos de alta resistencia para cargas pesadas'
        },
        {
          name: 'Ángulos',
          sizes: ['L 20x20x3', 'L 25x25x3', 'L 30x30x3', 'L 40x40x4', 'L 50x50x5', 'L 60x60x6', 'L 70x70x7', 'L 80x80x8', 'L 90x90x9', 'L 100x100x10', 'L 120x120x12', 'L 150x150x15', 'L 200x200x20'],
          description: 'Ángulos de lados iguales y desiguales para refuerzos'
        },
        {
          name: 'Platinas',
          sizes: ['20x3mm', '25x3mm', '30x3mm', '40x4mm', '50x5mm', '60x6mm', '80x8mm', '100x10mm', '120x12mm', '150x15mm', '200x20mm'],
          description: 'Barras planas para conexiones y refuerzos estructurales'
        }
      ]
    },
    {
      category: 'Chapas de Acero',
      description: 'Chapas de diferentes espesores y calidades para todo tipo de aplicaciones industriales.',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20steel%20sheet%20metal%20inventory%20with%20various%20thickness%20sheets%20stacked%20and%20organized%20in%20modern%20warehouse%20with%20clear%20labeling%20and%20professional%20storage%20system&width=800&height=500&seq=steel-sheets&orientation=landscape',
      products: [
        {
          name: 'Chapas Negras',
          sizes: ['1mm', '1.5mm', '2mm', '3mm', '4mm', '5mm', '6mm', '8mm', '10mm', '12mm', '15mm', '20mm', '25mm', '30mm', '40mm', '50mm'],
          description: 'Chapas de acero al carbono para uso general'
        },
        {
          name: 'Chapas Galvanizadas',
          sizes: ['0.5mm', '0.8mm', '1mm', '1.2mm', '1.5mm', '2mm', '2.5mm', '3mm', '4mm', '5mm', '6mm'],
          description: 'Chapas con recubrimiento galvanizado para mayor durabilidad'
        },
        {
          name: 'Chapas Prepintadas',
          sizes: ['0.5mm', '0.8mm', '1mm', '1.2mm', '1.5mm', '2mm'],
          description: 'Chapas con acabado prepintado en diversos colores'
        },
        {
          name: 'Chapas Antideslizantes',
          sizes: ['3mm', '4mm', '5mm', '6mm', '8mm', '10mm'],
          description: 'Chapas con superficie texturada para mayor seguridad'
        }
      ]
    },
    {
      category: 'Aceros Inoxidables',
      description: 'Aceros resistentes a la corrosión para aplicaciones especiales y ambientes agresivos.',
      image: 'https://readdy.ai/api/search-image?query=Premium%20stainless%20steel%20materials%20warehouse%20showing%20polished%20sheets%20pipes%20and%20profiles%20arranged%20systematically%20with%20bright%20clean%20environment%20and%20quality%20control%20systems&width=800&height=500&seq=stainless-steel&orientation=landscape',
      products: [
        {
          name: 'Acero Inoxidable 304',
          sizes: ['Chapas: 0.5mm a 12mm', 'Tubos: Ø6mm a Ø200mm', 'Barras: Ø3mm a Ø100mm', 'Perfiles: Diversos tamaños'],
          description: 'Grado alimentario, alta resistencia a la corrosión'
        },
        {
          name: 'Acero Inoxidable 316',
          sizes: ['Chapas: 0.8mm a 10mm', 'Tubos: Ø8mm a Ø150mm', 'Barras: Ø5mm a Ø80mm'],
          description: 'Mayor resistencia química, ideal para ambientes marinos'
        },
        {
          name: 'Acero Inoxidable 430',
          sizes: ['Chapas: 0.5mm a 8mm', 'Tubos: Ø10mm a Ø100mm'],
          description: 'Magnético, resistente al calor y corrosión atmosférica'
        }
      ]
    },
    {
      category: 'Tubos y Caños',
      description: 'Tubería estructural y de conducción para diversas aplicaciones industriales.',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20pipe%20and%20tube%20storage%20facility%20with%20various%20diameter%20steel%20pipes%20and%20structural%20tubes%20organized%20by%20size%20in%20professional%20warehouse%20environment&width=800&height=500&seq=pipes-tubes&orientation=landscape',
      products: [
        {
          name: 'Tubos Estructurales Cuadrados',
          sizes: ['20x20x1.6mm', '25x25x2mm', '30x30x2mm', '40x40x2mm', '50x50x3mm', '60x60x3mm', '80x80x4mm', '100x100x4mm', '120x120x5mm', '150x150x6mm'],
          description: 'Para estructuras metálicas y marcos'
        },
        {
          name: 'Tubos Estructurales Rectangulares',
          sizes: ['20x40x2mm', '30x50x3mm', '40x80x3mm', '50x100x4mm', '60x120x4mm', '80x160x5mm', '100x200x6mm'],
          description: 'Ideales para vigas y columnas estructurales'
        },
        {
          name: 'Caños SCH 40',
          sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"', '5"', '6"', '8"', '10"', '12"'],
          description: 'Tubería para conducción de fluidos'
        },
        {
          name: 'Tubos Redondos',
          sizes: ['Ø21.3mm', 'Ø26.9mm', 'Ø33.7mm', 'Ø42.4mm', 'Ø48.3mm', 'Ø60.3mm', 'Ø76.1mm', 'Ø88.9mm', 'Ø114.3mm', 'Ø139.7mm', 'Ø168.3mm'],
          description: 'Para aplicaciones estructurales y ornamentales'
        }
      ]
    },
    {
      category: 'Aceros Especiales',
      description: 'Materiales especializados para aplicaciones específicas y de alta exigencia.',
      image: 'https://readdy.ai/api/search-image?query=Specialized%20alloy%20steel%20materials%20storage%20with%20high-grade%20steel%20bars%20rods%20and%20plates%20in%20temperature%20controlled%20warehouse%20with%20quality%20certification%20tags&width=800&height=500&seq=special-steels&orientation=landscape',
      products: [
        {
          name: 'Aceros para Herramientas',
          sizes: ['Barras: Ø5mm a Ø200mm', 'Chapas: 3mm a 100mm'],
          description: 'SAE 1045, SAE 4140, SAE 4340 para fabricación de herramientas'
        },
        {
          name: 'Aceros al Carbono',
          sizes: ['Barras redondas: Ø6mm a Ø300mm', 'Barras cuadradas: 10x10mm a 200x200mm'],
          description: 'SAE 1020, SAE 1045, SAE 1060 para mecanizado'
        },
        {
          name: 'Aceros Aleados',
          sizes: ['Según especificación del cliente'],
          description: 'Aceros con elementos aleantes para propiedades específicas'
        },
        {
          name: 'Aceros Resistentes al Desgaste',
          sizes: ['Chapas: 6mm a 50mm'],
          description: 'Hardox, Bisplate para aplicaciones de alta abrasión'
        }
      ]
    }
  ];

  const services = [
    {
      icon: 'ri-truck-line',
      title: 'Entrega a Domicilio',
      description: 'Servicio de entrega en toda la región metropolitana'
    },
    {
      icon: 'ri-scissors-cut-line',
      title: 'Corte a Medida',
      description: 'Cortamos los materiales según tus especificaciones'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Certificados de Calidad',
      description: 'Todos nuestros materiales incluyen certificación'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Asesoramiento Técnico',
      description: 'Nuestros ingenieros te ayudan a elegir el material correcto'
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
              Catálogo Completo de Materiales
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              El stock más completo de aceros estructurales y especiales de la región. 
              Calidad garantizada con certificaciones internacionales.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-3">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {materialCategories.map((category, index) => (
            <div key={index} className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{category.category}</h2>
                  <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                  
                  <div className="bg-orange-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Disponibilidad Inmediata</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        <span>Stock permanente</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        <span>Corte incluido</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        <span>Certificados de calidad</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        <span>Entrega programada</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={category.image}
                    alt={category.category}
                    className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Medidas Disponibles:</h5>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.slice(0, 8).map((size, sizeIdx) => (
                          <span key={sizeIdx} className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 8 && (
                          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                            +{product.sizes.length - 8} más
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer">
                        Consultar Precio
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg transition-colors cursor-pointer">
                        <i className="ri-information-line"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Necesitas un Material Específico?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Si no encuentras el material que buscas en nuestro catálogo, contáctanos. 
            Trabajamos con los mejores proveedores para conseguir cualquier especificación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Consulta Personalizada
            </Link>
            <Link href="/catalogo" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Catálogo Digital
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
