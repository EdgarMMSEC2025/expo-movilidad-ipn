import React, { useState } from 'react';

const AGENCIAS_DONADORAS = [
  { name: 'Ford', badge: 'Paneles Solares' },
  { name: 'GWM', badge: 'Paneles Solares' },
  { name: 'GAC', badge: 'Paneles Solares' },
  { name: 'MINI', badge: 'Paneles Solares' },
];

const MATERIALES_ELECTROLINERA = [
  {
    id: 'paneles',
    nombre: 'Panel Solar Longi 610W Hi-Mo X6 Max',
    caracteristicas: 'Módulo fotovoltaico monocristalino de alta eficiencia (610W).',
    requeridos: 50,
    donados: 10,
    unidad: 'pzas',
    precioUnitario: 117.64,
  },
  {
    id: 'inversores',
    nombre: 'Inversor Victron Quattro 48/10000 120V',
    caracteristicas: 'Inversor/cargador de 48V y 10,000 VA a 120V para gestión energética.',
    requeridos: 6,
    donados: 0,
    unidad: 'pzas',
    precioUnitario: 2810.00,
  },
  {
    id: 'baterias',
    nombre: 'Batería PylonTech Fidus Plus 16,076Wh',
    caracteristicas: 'Módulo de almacenamiento de litio de 16.07 kWh para respaldo.',
    requeridos: 6,
    donados: 0,
    unidad: 'pzas',
    precioUnitario: 2954.28,
  },
  {
    id: 'estructura',
    nombre: 'Kit de estructura para estacionamiento a 10°',
    caracteristicas: 'Estructura fotovoltaica para 2 lugares de estacionamiento con inclinación a 10°.',
    requeridos: 50,
    donados: 0,
    unidad: 'kits',
    precioUnitario: 64.28,
  },
  {
    id: 'nivelacion',
    nombre: 'Nivelación e instalación fotovoltaica',
    caracteristicas: 'Mano de obra especializada y nivelación mecánica para montaje de módulos.',
    requeridos: 50,
    donados: 0,
    unidad: 'servicios',
    precioUnitario: 107.14,
  },
  {
    id: 'herreria',
    nombre: 'Estructura de herrería y material eléctrico',
    caracteristicas: 'Estructura metálica para suministro e instalación del sistema de almacenamiento (incluye material eléctrico).',
    requeridos: 1,
    donados: 0,
    unidad: 'lote',
    precioUnitario: 7857.14,
  },
  {
    id: 'cargadores',
    nombre: 'Cargador para Vehículo Eléctrico 11 kW (220V)',
    caracteristicas: 'Estación de carga AC Nivel 2 de 11 kW a 220V para vehículos eléctricos.',
    requeridos: 4,
    donados: 0,
    unidad: 'pzas',
    precioUnitario: 642.85,
  },
  {
    id: 'interconexion',
    nombre: 'Kit de interconexión Victron + PylonTech',
    caracteristicas: 'Accesorios y cableado especializado para interconectar inversores y baterías.',
    requeridos: 1,
    donados: 0,
    unidad: 'kit',
    precioUnitario: 10352.85,
  },
];

const Sponsors = () => {
  const metaPaneles = 50;
  const panelesDonados = 10;
  const faltantesPaneles = metaPaneles - panelesDonados;
  const porcentaje = ((panelesDonados / metaPaneles) * 100).toFixed(0);

  // Estado para los materiales seleccionados en la tabla y mostrar el formulario
  const [selectedIds, setSelectedIds] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleMaterial = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedMaterials = MATERIALES_ELECTROLINERA.filter((m) =>
    selectedIds.includes(m.id)
  );

  const handleOpenForm = () => {
    if (selectedIds.length === 0) {
      alert('Por favor selecciona al menos un material de la tabla para continuar.');
      return;
    }
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('submenu-pago')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nombresMateriales = selectedMaterials.map((m) => m.nombre).join(' | ');

    const dataToSend = {
      Nombre: formData.get('Nombre'),
      Correo: formData.get('Correo'),
      Nivel: nombresMateriales,
      Monto: formData.get('Monto'),
    };

    fetch('https://sheetdb.io/api/v1/lm54bvx7sz457', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: [dataToSend] }),
    })
      .then((response) => response.json())
      .then(() => {
        alert('¡Registro exitoso! Los datos se han guardado en Google Sheets.');
        setShowForm(false);
        setSelectedIds([]);
      })
      .catch((error) => {
        alert('Hubo un error al guardar los datos.');
        console.error(error);
      });
  };

  return (
    <section id="inversores" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Energía que Trasciende: ESIQIE Sustentable 2030
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sé parte de la transición energética. Ayúdanos a instalar la red de paneles solares y estaciones de carga de la Electrolinera IPN.
          </p>
        </div>

        {/* Sección Dinámica: Avance de Paneles y Agencias Donadoras */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Gráfica de Barras de Paneles */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-slate-800">
              Avance de Donación de Paneles Solares
            </h3>

            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Paneles Donados</span>
                <h3 className="text-3xl font-extrabold text-[#16A34A]">
                  {panelesDonados} paneles
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-500 uppercase">Faltantes</span>
                <h3 className="text-xl font-bold text-slate-600">
                  {faltantesPaneles} paneles
                </h3>
              </div>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-6 mb-4 overflow-hidden flex">
              <div
                className="bg-gradient-to-r from-[#6A0032] to-[#16A34A] h-6 transition-all duration-1000"
                style={{ width: `${porcentaje}%` }}
              ></div>
            </div>
            <p className="text-sm font-semibold text-slate-500 text-center">
              Meta de Módulos Fotovoltaicos: {metaPaneles} paneles ({porcentaje}% alcanzado)
            </p>
          </div>

          {/* Lista de Agencias Donadoras */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
            <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
              🏆 Agencias Donadoras
            </h3>
            <ul className="space-y-4">
              {AGENCIAS_DONADORAS.map((agencia, idx) => (
                <li
                  key={agencia.name}
                  className={`flex justify-between items-center text-sm ${
                    idx !== AGENCIAS_DONADORAS.length - 1 ? 'border-b pb-2' : ''
                  }`}
                >
                  <span className="font-bold text-slate-900">Agencia {agencia.name}</span>
                  <span className="text-[#16A34A] font-bold bg-green-50 px-2.5 py-0.5 rounded-full text-xs">
                    {agencia.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabla Interactiva de Materiales Requeridos */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Materiales Requeridos para la Electrolinera IPN
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Selecciona uno o varios materiales de la tabla y haz clic en contribuir para registrar tu donación.
              </p>
            </div>
            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-bold">
              Seleccionados: {selectedIds.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-5 text-center">Elegir</th>
                  <th className="py-4 px-5">Material / Equipo</th>
                  <th className="py-4 px-5">Características</th>
                  <th className="py-4 px-5 text-center">Faltantes / Meta</th>
                  <th className="py-4 px-5 text-right">Ref. Unitaria (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {MATERIALES_ELECTROLINERA.map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  const faltantes = item.requeridos - item.donados;

                  return (
                    <tr
                      key={item.id}
                      onClick={() => toggleMaterial(item.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#16A34A]/10 hover:bg-[#16A34A]/15'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-4 px-5 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          className="w-5 h-5 accent-[#6A0032] rounded cursor-pointer"
                          aria-label={`Seleccionar ${item.nombre}`}
                        />
                      </td>
                      <td className="py-4 px-5 font-bold text-slate-900">
                        {item.nombre}
                        {item.donados > 0 && (
                          <span className="ml-2 inline-block px-2 py-0.5 text-[11px] font-bold bg-green-100 text-[#16A34A] rounded-full">
                            {item.donados} donados
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-slate-600 max-w-md">
                        {item.caracteristicas}
                      </td>
                      <td className="py-4 px-5 text-center whitespace-nowrap">
                        <span className="font-extrabold text-slate-900">
                          {faltantes} {item.unidad}
                        </span>
                        <span className="block text-xs text-slate-400">
                          de {item.requeridos} totales
                        </span>
                      </td>
                      <td className="py-4 px-5 text-right font-bold text-slate-800 whitespace-nowrap">
                        ${item.precioUnitario.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              {selectedIds.length > 0
                ? `Has seleccionado ${selectedIds.length} concepto(s) para donar.`
                : 'Marca las casillas de los equipos con los que deseas apoyar.'}
            </p>
            <button
              type="button"
              onClick={handleOpenForm}
              className="w-full sm:w-auto py-3 px-8 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#6A0032] transition-colors shadow-md"
            >
              Contribuir con lo seleccionado
            </button>
          </div>
        </div>

        {/* Submenú de Donación Dinámico conectado a Google Sheets (SheetDB) */}
        {showForm && selectedMaterials.length > 0 && (
          <div id="submenu-pago" className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl transition-all">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2">Registro de Donación Institucional</h3>
              <p className="text-slate-300 mb-6">
                Has seleccionado los siguientes materiales para apoyar al proyecto:
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {selectedMaterials.map((m) => (
                  <span
                    key={m.id}
                    className="px-3 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ade80] text-xs font-bold"
                  >
                    {m.nombre}
                  </span>
                ))}
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left">
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-300">
                        Nombre o Empresa
                      </label>
                      <input
                        type="text"
                        name="Nombre"
                        required
                        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                        placeholder="Ej. Juan Pérez / Agencia SA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-slate-300">
                        Correo Institucional / Contacto
                      </label>
                      <input
                        type="email"
                        name="Correo"
                        required
                        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-300">
                      Cantidad o detalle de tu aportación
                    </label>
                    <input
                      type="text"
                      name="Monto"
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                      placeholder="Ej. 2 paneles solares / 1 cargador de 11 kW"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-[#16A34A] hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Confirmar Registro
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="bg-transparent border border-slate-500 hover:border-white text-slate-300 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Sponsors;