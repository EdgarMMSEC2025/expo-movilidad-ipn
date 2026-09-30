import React from 'react';

const Donations = () => {
  // Reemplaza este enlace con tu link de cobro real de Mercado Pago
  const mercadoPagoLink = "https://link.mercadopago.com.mx/tucuentadeejemplo";

  return (
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Tarjeta de Donación */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-200">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Impulsa la Movilidad en el IPN
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Este proyecto es de acceso libre. Si la plataforma te ha sido útil, 
            tu donación voluntaria nos ayuda a mantener los servidores activos y 
            a desarrollar nuevas funciones para toda la comunidad politécnica.
          </p>
          
          {/* Botón de Mercado Pago */}
          <a 
            href={mercadoPagoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#009ee3] hover:bg-[#008bcb] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Donar con Mercado Pago
          </a>
          
          <p className="text-sm text-gray-400 mt-4">
            Pago 100% seguro a través de Mercado Pago.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Donations;
