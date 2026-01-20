
'use client';

import Link from 'next/link';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Teléfono Principal',
      info: '+54 9 123 456 7890',
      description: 'Atención comercial y técnica',
      action: 'tel:+5491234567890'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp Business',
      info: '+54 9 123 456 7890',
      description: 'Consultas rápidas y cotizaciones',
      action: 'https://wa.me/5491234567890'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Corporativo',
      info: 'info@metaltechpro.com',
      description: 'Proyectos y documentación técnica',
      action: 'mailto:info@metaltechpro.com'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Ubicación',
      info: 'Av. Industrial 1234',
      description: 'Zona Industrial Norte, Ciudad',
      action: 'https://maps.google.com'
    }
  ];

  const businessHours = [
    { day: 'Lunes - Viernes', hours: '7:00 - 18:00' },
    { day: 'Sábados', hours: '8:00 - 14:00' },
    { day: 'Domingos', hours: 'Cerrado' },
    { day: 'Emergencias', hours: '24/7' }
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contacto Directo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Hablemos de tu
            <span className="text-orange-600 block">Próximo Proyecto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está listo para asesorarte y ofrecerte 
            la mejor solución metalmecánica para tus necesidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Múltiples Canales de Comunicación</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:shadow-lg hover:bg-white transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors flex-shrink-0">
                      <i className={`${method.icon} text-2xl text-orange-600`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h4>
                      <p className="text-lg font-semibold text-orange-600 mb-1">{method.info}</p>
                      <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                      <a 
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                      >
                        <span>Contactar ahora</span>
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Horarios de Atención</h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-orange-600 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Atención de Emergencias</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Para proyectos urgentes y situaciones críticas, ofrecemos servicio de emergencia 
                24/7 con respuesta garantizada en menos de 2 horas.
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <i className="ri-phone-line text-2xl"></i>
                <span className="text-xl font-bold">+54 9 123 456 7890</span>
              </div>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Llamar Emergencia
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Prefieres Visitarnos?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Te invitamos a conocer nuestras instalaciones y ver de primera mano 
                nuestra tecnología y procesos de calidad.
              </p>
              <Link href="/contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
                Agendar Visita
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">¿Listo para Comenzar?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita tu cotización personalizada y descubre por qué somos la opción preferida 
              de empresas líderes en la industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Solicitar Cotización
              </Link>
              <Link href="/catalogo" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Descargar Catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
