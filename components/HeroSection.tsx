
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'Professional industrial metalworking facility with modern steel cutting equipment, organized workspace with structural steel beams and precision machinery in a clean serious business environment with dramatic lighting and industrial atmosphere',
      title: 'Precisión y Calidad en Cada Proyecto',
      subtitle: 'Líderes en Metalmecánica',
      description: 'Especialistas en corte láser, rolado, doblado y fabricación de estructuras metálicas. Más de 15 años transformando el acero en soluciones industriales de excelencia.'
    },
    {
      image: 'Modern precision laser cutting machine in action cutting steel plate with sparks and industrial lighting in a professional metalworking facility showing advanced technology and serious industrial capabilities',
      title: 'Tecnología de Vanguardia',
      subtitle: 'Equipos de Última Generación',
      description: 'Contamos con la tecnología más avanzada en corte láser CNC, plasma HD y equipos de conformado para garantizar la máxima precisión en cada trabajo.'
    },
    {
      image: 'Professional steel structure fabrication workshop with welders assembling complex industrial framework beams and supports showing quality craftsmanship and serious industrial environment',
      title: 'Experiencia Comprobada',
      subtitle: '575+ Proyectos Completados',
      description: 'Más de 15 años de experiencia respaldando cada proyecto. Desde estructuras industriales hasta fabricaciones especiales, cumplimos con los más altos estándares.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Bslide.image%7D&width=1920&height=1080&seq=hero-slide-${index}&orientation=landscape')`
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').slice(0, -3).join(' ')}
              <span className="text-orange-500 block">{slides[currentSlide].title.split(' ').slice(-3).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">575+</div>
                <div className="text-sm text-gray-300">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">15,000+</div>
                <div className="text-sm text-gray-300">Toneladas Procesadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">99.8%</div>
                <div className="text-sm text-gray-300">Satisfacción Cliente</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/servicios" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explorar Servicios
              </Link>
              <Link href="/catalogo" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-center">
                Ver Catálogo Digital
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl"></div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20precision%20laser%20cutting%20machine%20in%20action%20cutting%20steel%20plate%20with%20sparks%20and%20industrial%20lighting%20in%20a%20professional%20metalworking%20facility%20showing%20advanced%20technology%20and%20serious%20industrial%20capabilities&width=600&height=700&seq=hero-machine&orientation=portrait"
                alt="Tecnología de precisión"
                className="w-full rounded-3xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-500 animate-bounce">
        <i className="ri-arrow-down-line text-3xl"></i>
      </div>
    </section>
  );
}
