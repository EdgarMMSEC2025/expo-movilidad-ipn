import React, { useState } from 'react';

const Sponsors = () => {
  const meta = 2100000;
  const recaudado = 450000;
  const faltante = meta - recaudado;
  const porcentaje = ((recaudado / meta) * 100).toFixed(1);

  // Estado para manejar el submenú dinámico
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    { id: 'bronce', name: 'Nivel Bronce', title: 'Impulso ESIQIE', amount: '$300 - $14,999 MXN', icon: '🥉', desc: 'Aportación económica directa para el financiamiento del proyecto.', color: 'border-amber-700' },
    { id: 'plata', name: 'Nivel Plata', title: 'Innovación en Marcha', amount: 'Panel Solar', icon: '☀️', desc: 'Donación en especie de un panel solar para la estructura fotovoltaica.', color: 'border-slate-400' },
    { id: 'oro', name: 'Nivel Oro', title: 'Energía para el Futuro', amount: 'Bloque Energético', icon: '⚡', desc: 'Donación de un bloque completo del sistema de energía.', color: 'border-yellow-400' },
    { id: 'platino', name: 'Nivel Platino', title: 'Patrocinador Estratégico', amount: 'Cargador Eléctrico', icon: '🔌', desc: 'Donación directa de un cargador eléctrico para vehículos.', color: 'border-cyan-400', featured: true },
    { id: 'diamante', name: 'Nivel Diamante', title: 'Legado Sustentable', amount: 'Material Extra / >$150k', icon: '💎', desc: 'Material extra a gran escala o capital mayor a $150,000 pesos.', color: 'border-purple-500' }
  ];

  const handleContributeClick = (tier) => {
    setSelectedTier(tier);
    setTimeout(() => {
      document.getElementById('submenu-pago')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <section id="inversores" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Energía que Trasciende: ESIQIE Sustentable 2030</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sé parte de la transición energética. Ayúdanos a instalar la red de paneles solares y estaciones de carga.
          </p>
        </div>

        {/* Sección Dinámica: Gráficas de Recaudación y Donadores */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Gráfica de Barras */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Estado de Recaudación</h3>
            
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Recaudado</span>
                <h3 className="text-3xl font-extrabold text-[#16A34A]">${recaudado.toLocaleString()}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-500 uppercase">Faltante por donar</span>
                <h3 className="text-xl font-bold text-slate-600">${faltante.toLocaleString()}</h3>
              </div>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-6 mb-4 overflow-hidden flex">
              <div className="bg-gradient-to-r from-[#6A0032] to-[#16A34A] h-6 transition-all duration-1000" style={{ width: `${porcentaje}%` }}></div>
              <div className="bg-slate-200 h-6" style={{ width: `${100 - porcentaje}%` }}></div>
            </div>
            <p className="text-sm font-semibold text-slate-500 text-center">Meta Global: ${meta.toLocaleString()} MXN ({porcentaje}% alcanzado)</p>
          </div>

          {/* Lista de Donadores Dinámica */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
            <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">🏆 Últimos Donadores</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b pb-2">
                <span className="font-semibold">Ing. Carlos M.</span>
                <span className="text-cyan-600 font-bold bg-cyan-50 px-2 rounded">Platino</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b pb-2">
                <span className="font-semibold">Empresa EcoTech</span>
                <span className="text-purple-600 font-bold bg-purple-50 px-2 rounded">Diamante</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b pb-2">
                <span className="font-semibold">Ana G. Ramírez</span>
                <span className="text-amber-700 font-bold bg-amber-50 px-2 rounded">Bronce</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="font-semibold">Grupo Industrial</span>
                <span className="text-yellow-600 font-bold bg-yellow-50 px-2 rounded">Oro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Niveles de Inversión */}
        <h3 className="text-2xl font-bold text-center mb-10">Opciones de Patrocinio Corporativo e Individual</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 flex flex-col h-full border-t-4 shadow-sm hover:shadow-xl transition-shadow ${tier.color} ${tier.featured ? 'transform -translate-y-2 ring-2 ring-cyan-400/50' : ''}`}>
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tier.name}</h4>
              <h5 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{tier.title}</h5>
              <p className="text-xl font-bold text-[#6A0032] mb-4">{tier.amount}</p>
              <p className="text-slate-600 text-sm mb-8 flex-grow">{tier.desc}</p>
              <button 
                onClick={() => handleContributeClick(tier)}
                className="w-full py-3 px-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-[#6A0032] transition-colors"
              >
                Contribuir
              </button>
            </div>
          ))}
        </div>

        {/* Submenú de Donación Dinámico (Solo aparece al hacer clic) */}
        {selectedTier && (
          <div id="submenu-pago" className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl animate-fade-in transition-all">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-4xl mb-4 block">{selectedTier.icon}</span>
              <h3 className="text-2xl font-bold mb-2">Has seleccionado el {selectedTier.name}</h3>
              <p className="text-lg text-slate-300 mb-8">
                Estás a un paso de apoyar con: <span className="font-bold text-[#16A34A]">{selectedTier.amount}</span>. Completa tu registro para proceder con la donación institucional.
              </p>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left mb-8">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-300">Nombre o Empresa</label>
                      <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]" placeholder="Ej. Juan Pérez / Empresa SA" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-300">Correo Institucional / Contacto</label>
                      <input type="email" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]" placeholder="correo@ejemplo.com" />
                    </div>
                  </div>
                  {selectedTier.id === 'bronce' && (
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-300">Monto a Donar (MXN)</label>
                      <input type="number" min="300" max="14999" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]" placeholder="Mínimo $300" />
                    </div>
                  )}
                </form>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#16A34A] hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Proceder a Plataforma de Pago Seguro
                </button>
                <button 
                  onClick={() => setSelectedTier(null)}
                  className="bg-transparent border border-slate-500 hover:border-white text-slate-300 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Sponsors;