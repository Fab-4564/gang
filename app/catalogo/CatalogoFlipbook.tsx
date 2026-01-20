'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function CatalogoFlipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const catalogPages = [
    {
      id: 1,
      title: 'Portada - Catálogo MetalTech Pro 2024',
      image: 'https://readdy.ai/api/search-image?query=Professional%20metalworking%20company%20catalog%20cover%20design%20with%20MetalTech%20Pro%20branding%20showcasing%20steel%20structures%20industrial%20equipment%20and%20modern%20typography%20in%20corporate%20orange%20colors&width=800&height=600&seq=catalog-cover&orientation=portrait',
      content: 'Catálogo General de Productos y Servicios'
    },
    {
      id: 2,
      title: 'Índice y Presentación',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20index%20page%20with%20table%20of%20contents%20showing%20services%20sections%20materials%20pricing%20and%20company%20information%20in%20clean%20corporate%20layout%20design&width=800&height=600&seq=catalog-index&orientation=portrait',
      content: 'Contenido del catálogo y presentación de la empresa'
    },
    {
      id: 3,
      title: 'Servicios de Corte',
      image: 'https://readdy.ai/api/search-image?query=Catalog%20page%20showcasing%20laser%20cutting%20services%20with%20technical%20specifications%20equipment%20photos%20and%20sample%20cut%20parts%20arranged%20in%20professional%20layout%20with%20pricing%20information&width=800&height=600&seq=cutting-services&orientation=portrait',
      content: 'Corte láser, plasma y oxicorte - Especificaciones técnicas'
    },
    {
      id: 4,
      title: 'Servicios de Rolado',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20page%20displaying%20plate%20rolling%20services%20with%20machinery%20photos%20rolled%20steel%20samples%20and%20technical%20specifications%20showing%20capabilities%20and%20dimensions&width=800&height=600&seq=rolling-services&orientation=portrait',
      content: 'Rolado de chapas y perfiles - Capacidades y ejemplos'
    },
    {
      id: 5,
      title: 'Servicios de Doblado',
      image: 'https://readdy.ai/api/search-image?query=Catalog%20page%20featuring%20metal%20bending%20and%20folding%20services%20with%20press%20brake%20equipment%20photos%20bent%20metal%20samples%20and%20technical%20specifications%20in%20professional%20layout&width=800&height=600&seq=bending-services&orientation=portrait',
      content: 'Doblado y plegado de precisión - Equipos y capacidades'
    },
    {
      id: 6,
      title: 'Fabricación Estructural',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20page%20showing%20structural%20steel%20fabrication%20with%20welded%20frames%20building%20structures%20and%20custom%20metalwork%20examples%20arranged%20with%20technical%20details%20and%20specifications&width=800&height=600&seq=structural-fabrication&orientation=portrait',
      content: 'Estructuras metálicas a medida - Proyectos realizados'
    },
    {
      id: 7,
      title: 'Vigas IPE',
      image: 'https://readdy.ai/api/search-image?query=Technical%20catalog%20page%20displaying%20IPE%20steel%20beams%20with%20detailed%20dimensional%20drawings%20weight%20tables%20and%20size%20specifications%20arranged%20in%20professional%20technical%20manual%20format&width=800&height=600&seq=ipe-beams&orientation=portrait',
      content: 'Catálogo completo de vigas IPE - Medidas y pesos'
    },
    {
      id: 8,
      title: 'Vigas IPN',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20page%20featuring%20IPN%20steel%20beams%20with%20technical%20specifications%20dimensional%20tables%20and%20structural%20properties%20in%20organized%20technical%20reference%20format&width=800&height=600&seq=ipn-beams&orientation=portrait',
      content: 'Vigas IPN disponibles - Especificaciones técnicas'
    },
    {
      id: 9,
      title: 'Perfiles UPN y HEB',
      image: 'https://readdy.ai/api/search-image?query=Technical%20catalog%20page%20showing%20UPN%20and%20HEB%20structural%20profiles%20with%20cross-sectional%20drawings%20dimensional%20specifications%20and%20load%20tables%20in%20professional%20engineering%20format&width=800&height=600&seq=upn-heb-profiles&orientation=portrait',
      content: 'Perfiles estructurales - Dimensiones y aplicaciones'
    },
    {
      id: 10,
      title: 'Chapas de Acero',
      image: 'https://readdy.ai/api/search-image?query=Catalog%20page%20displaying%20various%20steel%20sheets%20and%20plates%20with%20thickness%20specifications%20grade%20information%20and%20size%20availability%20in%20organized%20technical%20product%20layout&width=800&height=600&seq=steel-sheets&orientation=portrait',
      content: 'Chapas negras, galvanizadas y especiales'
    },
    {
      id: 11,
      title: 'Tubos Estructurales',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20page%20featuring%20structural%20steel%20tubes%20with%20square%20rectangular%20and%20round%20profiles%20showing%20dimensions%20specifications%20and%20applications%20in%20technical%20format&width=800&height=600&seq=structural-tubes&orientation=portrait',
      content: 'Tubería estructural cuadrada, rectangular y redonda'
    },
    {
      id: 12,
      title: 'Aceros Inoxidables',
      image: 'https://readdy.ai/api/search-image?query=Premium%20catalog%20page%20showcasing%20stainless%20steel%20products%20with%20grade%20specifications%20corrosion%20resistance%20properties%20and%20available%20forms%20in%20high-quality%20technical%20presentation&width=800&height=600&seq=stainless-steel&orientation=portrait',
      content: 'Aceros inoxidables 304, 316 y 430 - Propiedades'
    },
    {
      id: 13,
      title: 'Aceros Especiales',
      image: 'https://readdy.ai/api/search-image?query=Technical%20catalog%20page%20displaying%20specialty%20steel%20alloys%20with%20chemical%20composition%20mechanical%20properties%20and%20applications%20for%20tooling%20and%20specialized%20manufacturing&width=800&height=600&seq=special-steels&orientation=portrait',
      content: 'Aceros para herramientas y aplicaciones especiales'
    },
    {
      id: 14,
      title: 'Certificaciones',
      image: 'https://readdy.ai/api/search-image?query=Professional%20catalog%20page%20showing%20quality%20certifications%20ISO%209001%20AWS%20welding%20standards%20and%20company%20accreditations%20with%20official%20logos%20and%20compliance%20information&width=800&height=600&seq=certifications&orientation=portrait',
      content: 'Certificaciones de calidad y normas aplicables'
    },
    {
      id: 15,
      title: 'Proyectos Destacados',
      image: 'https://readdy.ai/api/search-image?query=Catalog%20showcase%20page%20featuring%20completed%20industrial%20projects%20with%20before%20and%20after%20photos%20structural%20installations%20and%20customer%20testimonials%20in%20professional%20portfolio%20layout&width=800&height=600&seq=featured-projects&orientation=portrait',
      content: 'Galería de proyectos realizados - Referencias'
    },
    {
      id: 16,
      title: 'Lista de Precios',
      image: 'https://readdy.ai/api/search-image?query=Professional%20pricing%20catalog%20page%20with%20organized%20price%20lists%20product%20codes%20service%20rates%20and%20commercial%20terms%20arranged%20in%20clear%20tabular%20business%20format&width=800&height=600&seq=price-list&orientation=portrait',
      content: 'Precios actualizados de productos y servicios'
    },
    {
      id: 17,
      title: 'Condiciones Comerciales',
      image: 'https://readdy.ai/api/search-image?query=Business%20catalog%20page%20displaying%20commercial%20terms%20payment%20conditions%20delivery%20information%20and%20warranty%20details%20in%20professional%20corporate%20document%20format&width=800&height=600&seq=commercial-terms&orientation=portrait',
      content: 'Términos de venta, garantías y condiciones'
    },
    {
      id: 18,
      title: 'Contacto y Ubicación',
      image: 'https://readdy.ai/api/search-image?query=Final%20catalog%20page%20with%20complete%20contact%20information%20facility%20location%20map%20office%20photos%20and%20customer%20service%20details%20in%20professional%20business%20card%20style%20layout&width=800&height=600&seq=contact-info&orientation=portrait',
      content: 'Información de contacto y ubicación de planta'
    }
  ];

  const nextPage = () => {
    if (currentPage < catalogPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isFlipping && pageIndex >= 0 && pageIndex < catalogPages.length) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catálogo Digital Interactivo
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Explora nuestro catálogo completo de productos y servicios. 
              Información técnica detallada, especificaciones y precios actualizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-download-line mr-2"></i>
                Descargar PDF
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-share-line mr-2"></i>
                Compartir Catálogo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flipbook Container */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900 p-4' : 'relative'}`}>
            
            {/* Navigation Info */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Página {currentPage + 1} de {catalogPages.length}
                </span>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className={`ri-${isFullscreen ? 'fullscreen-exit' : 'fullscreen'}-line`}></i>
                </button>
              </div>
            </div>

            {/* Flipbook Display */}
            <div className={`relative ${isFullscreen ? 'h-5/6' : 'h-[700px]'} flex items-center justify-center`}>
              <div className="relative w-full max-w-4xl h-full" style={{ perspective: '2000px' }}>
                
                {/* Book Shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/30 blur-2xl rounded-full"></div>
                
                {/* Flipbook Pages Container */}
                <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  
                  {/* Current Page (Flipping Effect) */}
                  <div 
                    className="absolute w-full h-full transition-transform duration-600 ease-in-out"
                    style={{
                      transformOrigin: 'center center',
                      transform: isFlipping ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Front of Page */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="w-full h-full p-12 flex flex-col">
                        <img 
                          src={catalogPages[currentPage].image}
                          alt={catalogPages[currentPage].title}
                          className="w-full h-3/4 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{catalogPages[currentPage].title}</h3>
                        <p className="text-base text-gray-600">{catalogPages[currentPage].content}</p>
                        <div className="absolute bottom-8 right-12 text-sm text-gray-400 font-semibold">
                          {currentPage + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of Page (shown during flip) */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-gray-50 rounded-lg shadow-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      {currentPage < catalogPages.length - 1 && (
                        <div className="w-full h-full p-12 flex flex-col">
                          <img 
                            src={catalogPages[currentPage + 1].image}
                            alt={catalogPages[currentPage + 1].title}
                            className="w-full h-3/4 object-cover rounded-lg mb-6"
                          />
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">{catalogPages[currentPage + 1].title}</h3>
                          <p className="text-base text-gray-600">{catalogPages[currentPage + 1].content}</p>
                          <div className="absolute bottom-8 left-12 text-sm text-gray-400 font-semibold">
                            {currentPage + 2}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0 || isFlipping}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-orange-600/90 hover:bg-orange-600 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-xl z-50"
                  >
                    <i className="ri-arrow-left-line text-2xl"></i>
                  </button>
                  
                  <button
                    onClick={nextPage}
                    disabled={currentPage === catalogPages.length - 1 || isFlipping}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-orange-600/90 hover:bg-orange-600 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-xl z-50"
                  >
                    <i className="ri-arrow-right-line text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Page Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
              >
                <i className="ri-arrow-left-line"></i>
                Anterior
              </button>
              
              <div className="flex items-center gap-3">
                <select
                  value={currentPage}
                  onChange={(e) => goToPage(parseInt(e.target.value))}
                  disabled={isFlipping}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold cursor-pointer pr-8"
                >
                  {catalogPages.map((page, index) => (
                    <option key={index} value={index}>
                      Página {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={nextPage}
                disabled={currentPage === catalogPages.length - 1 || isFlipping}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
              >
                Siguiente
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {catalogPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  disabled={isFlipping}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentPage ? 'bg-orange-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  } ${isFlipping ? 'opacity-50 cursor-not-allowed' : ''}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Acceso Rápido a Secciones</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Servicios', pages: [2, 3, 4, 5], icon: 'ri-tools-line', color: 'orange' },
              { name: 'Perfiles', pages: [6, 7, 8], icon: 'ri-building-line', color: 'blue' },
              { name: 'Materiales', pages: [9, 10, 11, 12], icon: 'ri-stack-line', color: 'green' },
              { name: 'Info Comercial', pages: [15, 16, 17], icon: 'ri-file-list-3-line', color: 'purple' }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 flex items-center justify-center bg-${section.color}-600 rounded-full mx-auto mb-4`}>
                  <i className={`${section.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{section.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {section.pages.map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum - 1)}
                      className={`bg-${section.color}-600 hover:bg-${section.color}-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap`}
                    >
                      Pág. {pageNum}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Lleva Nuestro Catálogo Contigo</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Descarga el catálogo completo en PDF o compártelo con tu equipo. 
            Siempre tendrás acceso a nuestras especificaciones técnicas y precios actualizados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-download-2-line mr-2"></i>
              Descargar PDF (15 MB)
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2"></i>
              Enviar por Email
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-share-line mr-2"></i>
              Compartir Enlace
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-refresh-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Siempre Actualizado</h3>
              <p className="text-sm text-gray-600">Precios y productos actualizados mensualmente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-smartphone-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Acceso Móvil</h3>
              <p className="text-sm text-gray-600">Optimizado para todos los dispositivos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-2-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Soporte Técnico</h3>
              <p className="text-sm text-gray-600">Asesoramiento personalizado incluido</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Encontraste lo que Buscas?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Nuestro equipo comercial está listo para asesorarte y preparar una cotización 
            personalizada basada en tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Solicitar Cotización
            </Link>
            <Link href="/servicios" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Ver Servicios Completos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
