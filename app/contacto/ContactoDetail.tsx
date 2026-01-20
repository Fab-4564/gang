
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function ContactoDetail() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con tu próximo proyecto metalmecánico. 
              Solicita una cotización personalizada o visítanos en nuestras instalaciones.
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-map-pin-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Ubicación</h3>
                <p className="text-gray-600">
                  Av. Industrial 1234<br />
                  Zona Industrial Norte<br />
                  Ciudad, País 12345
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-phone-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Teléfonos</h3>
                <p className="text-gray-600">
                  +54 11 1234-5678<br />
                  +54 11 8765-4321<br />
                  Emergencias: +54 11 9999-0000
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-mail-line text-3xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
                <p className="text-gray-600">
                  info@metaltechpro.com<br />
                  ventas@metaltechpro.com<br />
                  soporte@metaltechpro.com
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Información Detallada</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="ri-time-line text-orange-600 mr-2"></i>
                        Horarios de Atención
                      </h4>
                      <div className="bg-white rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lunes a Viernes</span>
                          <span className="font-semibold">7:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sábados</span>
                          <span className="font-semibold">8:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Domingos</span>
                          <span className="font-semibold text-red-600">Cerrado</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="ri-service-line text-orange-600 mr-2"></i>
                        Atención al Cliente
                      </h4>
                      <div className="bg-white rounded-lg p-4 space-y-3">
                        <div className="flex items-center space-x-3">
                          <i className="ri-phone-fill text-green-600"></i>
                          <span className="text-gray-600">Línea directa: +54 11 1234-5678</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="ri-whatsapp-fill text-green-600"></i>
                          <span className="text-gray-600">WhatsApp: +54 11 1234-5678</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="ri-mail-fill text-orange-600"></i>
                          <span className="text-gray-600">Respuesta en 24h</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="ri-car-line text-orange-600 mr-2"></i>
                        Cómo Llegar
                      </h4>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-gray-600 mb-3">
                          Desde el centro de la ciudad, tomar Av. Principal hacia el norte, 
                          luego girar a la derecha en Av. Industrial. Estamos a 200 metros 
                          del semáforo.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-orange-600">
                          <i className="ri-parking-line"></i>
                          <span>Estacionamiento gratuito disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">¿Necesitas Atención Inmediata?</h3>
                  <p className="text-orange-100 mb-6">
                    Para proyectos urgentes o consultas técnicas, contáctanos directamente 
                    por teléfono y te atenderemos de inmediato.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                      <i className="ri-phone-line mr-2"></i>
                      Llamar Ahora
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                      <i className="ri-whatsapp-line mr-2"></i>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} id="contacto-detallado" className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitar Cotización Detallada</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa/Organización
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono de Contacto *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Servicio Requerido *
                    </label>
                    <div className="relative">
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm appearance-none bg-white"
                      >
                        <option value="">Selecciona el servicio principal</option>
                        <option value="corte-precision">Corte de Precisión CNC</option>
                        <option value="rolado-industrial">Rolado Industrial</option>
                        <option value="doblado-plegado">Doblado y Plegado</option>
                        <option value="fabricacion-medida">Fabricación a Medida</option>
                        <option value="venta-materiales">Venta de Materiales</option>
                        <option value="proyecto-integral">Proyecto Integral</option>
                        <option value="consultoria">Consultoría Técnica</option>
                        <option value="otro">Otro servicio</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Descripción del Proyecto *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                      placeholder="Describe detalladamente tu proyecto: materiales necesarios, dimensiones, cantidades, plazos de entrega, especificaciones técnicas, etc."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.mensaje.length}/500 caracteres
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.mensaje.length > 500}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Enviando Solicitud...
                      </span>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Enviar Solicitud de Cotización
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      <div className="flex items-center">
                        <i className="ri-check-circle-line mr-2"></i>
                        ¡Solicitud enviada correctamente! Nos pondremos en contacto contigo en las próximas 24 horas.
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Visítanos en Nuestras Instalaciones</h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Te invitamos a conocer nuestras modernas instalaciones y equipos de última generación. 
                Programa una visita técnica para discutir tu proyecto en persona.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168447983897!2d-58.3815591!3d-34.6037345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sPuerto%20Madero%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1635789012345!5m2!1ses!2sar"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
