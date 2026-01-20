
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ing. Carlos Mendoza',
      position: 'Director de Proyectos',
      company: 'Constructora Industrial del Norte',
      project: 'Torre Corporativa Central - 850 toneladas',
      testimonial: 'MetalTech Pro superó nuestras expectativas en el proyecto de la Torre Corporativa. Su precisión en el corte láser y la calidad de soldadura fueron excepcionales. Entregaron 850 toneladas de estructura metálica con tolerancias perfectas y en tiempo récord.',
      rating: 5,
      sector: 'Construcción',
      image: 'Professional construction engineer in hard hat and safety vest reviewing steel structure blueprints at a construction site with serious business demeanor'
    },
    {
      name: 'Dra. Ana Rodríguez',
      position: 'Gerente de Ingeniería',
      company: 'Petroquímica del Golfo S.A.',
      project: 'Tanques de Almacenamiento - Acero Inoxidable',
      testimonial: 'La fabricación de nuestros tanques de almacenamiento requería la máxima precisión y resistencia a la corrosión. MetalTech Pro demostró su experiencia en aceros especiales y cumplió con todas las certificaciones ASME requeridas.',
      rating: 5,
      sector: 'Petróleo & Gas',
      image: 'Professional female engineer in industrial facility wearing safety equipment reviewing technical specifications with serious professional attitude'
    },
    {
      name: 'Ing. Roberto Silva',
      position: 'Jefe de Producción',
      company: 'AutoParts Manufacturing',
      project: 'Herramental de Precisión - Línea Automotriz',
      testimonial: 'Necesitábamos herramental con tolerancias de ±0.05mm para nuestra línea de producción. La precisión y repetibilidad que logra MetalTech Pro con su tecnología láser es impresionante. Cero defectos en 6 meses de operación.',
      rating: 5,
      sector: 'Automotriz',
      image: 'Professional automotive industry engineer inspecting precision metal components in a modern manufacturing facility with serious technical focus'
    },
    {
      name: 'Cap. Miguel Torres',
      position: 'Director Técnico',
      company: 'Astilleros del Pacífico',
      project: 'Estructuras Navales - Acero Naval',
      testimonial: 'Las estructuras navales que fabricó MetalTech Pro para nuestros buques han demostrado excelente resistencia a la corrosión marina. Su experiencia en aceros especiales y soldadura submarina es de clase mundial.',
      rating: 5,
      sector: 'Naval',
      image: 'Professional naval engineer in maritime facility inspecting steel ship structures with serious maritime industry expertise'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonios Reales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lo que Dicen Nuestros
            <span className="text-orange-600 block">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La confianza de empresas líderes en diferentes sectores industriales 
            respalda nuestra trayectoria de excelencia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Btestimonials%5BactiveTestimonial%5D.image%7D&width=600&height=500&seq=testimonial-${activeTestimonial}&orientation=landscape`}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[activeTestimonial].sector}
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-orange-500 text-xl"></i>
                    ))}
                  </div>
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[activeTestimonial].testimonial}"
                  </blockquote>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-orange-600 font-semibold">{testimonials[activeTestimonial].position}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Proyecto:</div>
                    <div className="font-semibold text-gray-800">{testimonials[activeTestimonial].project}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
            >
              <i className="ri-arrow-left-line text-xl text-gray-600 hover:text-orange-600"></i>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-orange-600 w-8' : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
            >
              <i className="ri-arrow-right-line text-xl text-gray-600 hover:text-orange-600"></i>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-2xl mx-auto mb-4">
              <i className="ri-customer-service-2-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">Cada cliente recibe atención dedicada y soluciones a medida</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-2xl mx-auto mb-4">
              <i className="ri-time-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cumplimiento Garantizado</h3>
            <p className="text-gray-600">Respetamos tiempos de entrega sin comprometer calidad</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-2xl mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Garantía Total</h3>
            <p className="text-gray-600">Respaldo completo en todos nuestros productos y servicios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
