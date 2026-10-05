import React from 'react';

const Sponsors = () => {
  const meta = 2100000;
  const recaudado = 450000; // Puedes cambiar este valor
  const porcentaje = (recaudado / meta) * 100;

  const tiers = [
    { name: 'Nivel Bronce', title: 'Impulso ESIQIE', amount: '$300 - $1,499 MXN', icon: '🥉', desc: 'Certificado digital y nombre en el micrositio.', color: 'border-amber-700' },
    { name: 'Nivel Plata', title: 'Inovacion en Marcha - Adopta un Panel', amount: '$1,500 - $9,999 MXN', icon: '🥈', desc: 'Acceso a seminario web sobre electromovilidad.', color: 'border-slate-400' },
    { name: 'Nivel Oro', title: 'Energia para el Futuro - Adopta un bloque', amount: '$10,000 - $49,999 MXN', icon: '🥇', desc: 'Nombre en Muro de Donantes y visita guiada técnica.', color: 'border-yellow-400' },
    { name: 'Nivel Platino', title: 'Patrocinador Estratégico - Adopta un cargador', amount: '$50,000 - $149,999 MXN', icon: '✮', desc: 'Placa nominal en cargador eléctrico (AC 7-21 kW).', color: 'border-cyan-400', featured: true },
    { name: 'Nivel Diamante', title: 'Legado Sustentable', amount: '$150,000+ MXN', icon: '💎', desc: 'Placa en estructura fotovoltaica y reconocimiento institucional.', color: 'border-purple-500' }
  ];

  return (
    <section id="inversores" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Energía que Trasciende: ESIQIE Sustentable 2030</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sé parte de la transición energética. Ayúdanos a instalar la red de paneles solares y estaciones de carga para vehículos eléctricos e híbridos enchufables en la ESIQIE.
          </p>
        </div>

        {/* Tracker de Progreso */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 mb-20 max-w-4xl mx-auto text-center">
          <div className="flex justify-between items-end mb-4">
            <div className="text-left">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Recaudado</span>
              <h3 className="text-3xl font-extrabold text-[#16A34A]">${recaudado.toLocaleString()} MXN</h3>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Meta</span>
              <h3 className="text-2xl font-bold text-slate-800">${meta.toLocaleString()} MXN</h3>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4 mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-[#6A0032] to-[#16A34A] h-4 rounded-full transition-all duration-1000" style={{ width: `${porcentaje}%` }}></div>
          </div>
        </div>

        {/* Niveles de Inversión */}
        <h3 className="text-2xl font-bold text-center mb-10">Opciones de Patrocinio Corporativo e Individual</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 flex flex-col h-full border-t-4 shadow-sm hover:shadow-xl transition-shadow ${tier.color} ${tier.featured ? 'transform -translate-y-2 ring-2 ring-cyan-400/50' : ''}`}>
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{tier.name}</h4>
              <h5 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{tier.title}</h5>
              <p className="text-xl font-bold text-[#6A0032] mb-4">{tier.amount}</p>
              <p className="text-slate-600 text-sm mb-8 flex-grow">{tier.desc}</p>
              <button className="w-full py-3 px-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-[#6A0032] transition-colors">
                Contribuir
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsors;