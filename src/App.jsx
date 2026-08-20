import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, ChevronUp, Zap, BatteryCharging, 
  Car, Calendar, MapPin, Mail, Phone, CheckCircle, 
  ArrowRight, Leaf, ShieldCheck, Users, TrendingUp,
  Facebook, Twitter, Instagram, Linkedin, ExternalLink
} from 'lucide-react';

const THEME = {
  primary: '#6A0032', // IPN Guinda
  secondary: '#16A34A', // Verde Sustentable
  dark: '#0F172A',
  bg: '#F8FAFC',
  text: '#1E293B'
};

const STATS = [
  { id: 1, value: '+10', label: 'Marcas Invitadas', icon: Car },
  { id: 2, value: '+20', label: 'Vehículos Exhibidos', icon: Zap },
  { id: 3, value: '+1k', label: 'Asistentes Esperados', icon: Users },
  { id: 4, value: '30k', label: 'tCO₂ Evitadas al año', icon: Leaf },
];

const BRANDS = [
  "Renault", "BYD", "Audi", "Changan", "VW", "GWM", "Ford", "Mazda", "Hyundai", "Kia", "Toyota", "GAC", "Lexus"
];

const VEHICLES = [
  { id: 1, name: 'Megane E-Tech 2026', brand: 'Renault', type: 'BEV', range: '450 km', chargeTime: '30 min (80%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.36.09_2.jpeg' },
  { id: 12, name: 'Koleos esprit Alpine', brand: 'Renault', type: 'HEV', range: '241 hp Full Hybrid', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.37.35.jpeg' },
  { id: 13, name: 'Arkana hybrid E-Tech', brand: 'Renault', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.38.39.jpeg' },
  { id: 21, name: 'King GL', brand: 'BYD', type: 'PHEV', range: 'Alta Eficiencia combinada', chargeTime: 'Híbrido Enchufable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.15.00.jpeg' },
  { id: 22, name: 'Dolphin Mini', brand: 'BYD', type: 'BEV', range: '300 km', chargeTime: 'Carga Rápida / AC', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.15.22.jpeg' },
  { id: 23, name: 'Yuan Pro DM-i', brand: 'BYD', type: 'PHEV', range: '1,045 km (Combinada)', chargeTime: 'Híbrido Enchufable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.15.50.jpeg' },
  { id: 3, name: 'Q6 e-tron 2026', brand: 'Audi', type: 'BEV', range: '625 km', chargeTime: '21 min (80%)', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Deepal S05 2026', brand: 'Changan', type: 'REEV', range: '158 km (EV) / 1,129 km (Total)', chargeTime: '30 min (80%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.36.17.jpeg' },
  { id: 15, name: 'Eado Plus iDD 2026', brand: 'Changan', type: 'PHEV', range: '150 km (EV) / 1,000 km (Total)', chargeTime: '30 min (80%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.37.24.jpeg' },
  { id: 51, name: 'Jetta 2027', brand: 'VW', type: 'MHEV', range: 'Alta Eficiencia', chargeTime: 'Combustión / Eficiente', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.20.40.jpeg' },
  { id: 52, name: 'Tiguan 2026', brand: 'VW', type: 'MHEV', range: 'Alta Eficiencia', chargeTime: 'Combustión / Eficiente', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.22.35.jpeg' },
  { id: 61, name: 'Ora 5 2026', brand: 'GWM', type: 'BEV', range: '500 km', chargeTime: '40 min (80%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.46.58.jpeg' },
  { id: 62, name: 'Haval H6 PHEV 2026', brand: 'GWM', type: 'PHEV', range: 'Alta Eficiencia', chargeTime: 'Doméstica / Rápida', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.49.17.jpeg' },
  { id: 71, name: 'Territory Híbrida 2027', brand: 'Ford', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.39.09.jpeg' },
  { id: 72, name: 'Edge Híbrida 2026', brand: 'Ford', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.39.52.jpeg' },
  { id: 73, name: 'Maverick Híbrida 2026', brand: 'Ford', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.40.24.jpeg' },
  { id: 74, name: 'Bronco Sport 2026', brand: 'Ford', type: 'AWD', range: 'Off-Road', chargeTime: 'Combustión', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.40.58.jpeg' },
  { id: 81, name: 'CX-90 PHEV 2027', brand: 'Mazda', type: 'PHEV', range: 'Modos Mi-Drive', chargeTime: 'Híbrido Enchufable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.17.01.jpeg' },
  { id: 82, name: 'Mazda2 Sedán 2026', brand: 'Mazda', type: 'MHEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.17.50.jpeg' },
  { id: 91, name: 'Elantra Híbrido 2026', brand: 'Hyundai', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.44.19.jpeg' },
  { id: 92, name: 'Tucson Híbrida 2026', brand: 'Hyundai', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.45.01.jpeg' },
  { id: 101, name: 'Sportage Híbrida 2027', brand: 'Kia', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.42.55.jpeg' },
  { id: 102, name: 'EV3 SXL 2027', brand: 'Kia', type: 'BEV', range: '605 km', chargeTime: 'Doméstica / Rápida', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.42.24.jpeg' },
  { id: 131, name: 'Yaris Sedán HEV', brand: 'Toyota', type: 'HEV', range: '29.4 km/l', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.56.39.jpeg' },
  { id: 132, name: 'Prius HEV', brand: 'Toyota', type: 'HEV', range: '31.1 km/l', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.58.04.jpeg' },
  { id: 133, name: 'RAV4 PHEV', brand: 'Toyota', type: 'PHEV', range: 'Hasta 650 km', chargeTime: '2.5 hrs (100%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.58.54.jpeg' },
  { id: 141, name: 'HYPTEC HT Ultra', brand: 'GAC', type: 'BEV', range: 'Alta Eficiencia', chargeTime: '30 min (80%)', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.55.13.jpeg' },
  { id: 142, name: 'AION UT Standard', brand: 'GAC', type: 'BEV', range: '420 km (NEDC)', chargeTime: 'Rápida / Doméstica', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.54.19.jpeg' },
  { id: 143, name: 'GS7 PHEV 2WD', brand: 'GAC', type: 'PHEV', range: 'Extendida', chargeTime: 'Híbrido Enchufable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 20.53.14.jpeg' },
  { id: 161, name: 'NX Hybrid 2026', brand: 'Lexus', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.44.14.jpeg' },
  { id: 162, name: 'RX Hybrid Electric 2026', brand: 'Lexus', type: 'HEV', range: 'Alta Eficiencia', chargeTime: 'Autorrecargable', image: '/FOTOS_AUTOS/WhatsApp Image 2026-08-18 at 21.45.25.jpeg' },
];

const PROGRAM_SCHEDULE = [
  {
    date: '28 de Agosto',
    events: [
      { time: '10:00', title: 'Inicio de la expo', speaker: 'Acceso General', category: 'Apertura' },
      { time: '11:00', title: 'Inauguración Oficial', speaker: 'Autoridades IPN', category: 'Inauguración' },
      { time: '11:30', title: 'Lanzamiento RAV 4 PHVA', speaker: 'Toyota', category: 'Lanzamiento' },
      { time: '13:00', title: 'Lanzamiento KIA EV 3', speaker: 'KIA', category: 'Lanzamiento' },
      { time: '15:00', title: 'Presentación Proyecto electromovilidad sustentable IPN 2026', speaker: 'Investigadores IPN', category: 'Presentación' },
      { time: '16:00', title: 'Presentación conversión Buggie gasolina a híbrido por ESIME Zacatenco', speaker: 'ESIME Zacatenco', category: 'Presentación' }
    ]
  },
  {
    date: '29 de Agosto',
    events: [
      { time: '11:00', title: 'Lanzamiento GWM Ora 5', speaker: 'GWM', category: 'Lanzamiento' },
      { time: '13:00', title: 'Presentación ahorro de gasolina y electricidad en los vehículos', speaker: 'Especialistas en Eficiencia', category: 'Presentación' },
      { time: '15:00', title: 'Presentación auto eléctrico ESFM', speaker: 'ESFM', category: 'Presentación' },
      { time: '16:30', title: 'Clausura de la expo', speaker: 'Comité Organizador', category: 'Clausura' }
    ]
  }
];

const FAQS = [
  { q: '¿El evento tiene algún costo?', a: 'No, la entrada general y el acceso a las conferencias son totalmente gratuitos, previo registro en esta plataforma.' },
  { q: '¿Quiénes pueden asistir?', a: 'El evento está abierto a toda la comunidad politécnica (estudiantes, docentes, personal) y al público en general interesado en la movilidad sustentable.' },
  { q: '¿Dónde se llevará a cabo?', a: 'La Expo se realizará en la Plaza del Carrillón y el Centro Cultural Jaime Torres Bodet, en Zacatenco, CDMX.' },
  { q: '¿Necesito licencia para las pruebas de manejo?', a: 'Sí, para participar en las pruebas de manejo (Test Drives) es obligatorio presentar una licencia de conducir física y vigente.' },
];

const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef); 
      }
    }, options);

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

const Reveal = ({ children, className = "", delay = 0, type = 'fade-up' }) => {
  const [ref, isVisible] = useScrollReveal();
  
  let baseClass = "transition-all duration-1000 ease-out will-change-transform";
  let hiddenClass = "";
  let visibleClass = "";

  switch(type) {
    case 'fade-up':
      hiddenClass = "opacity-0 translate-y-12";
      visibleClass = "opacity-100 translate-y-0";
      break;
    case 'fade-left':
      hiddenClass = "opacity-0 -translate-x-12";
      visibleClass = "opacity-100 translate-x-0";
      break;
    case 'fade-right':
      hiddenClass = "opacity-0 translate-x-12";
      visibleClass = "opacity-100 translate-x-0";
      break;
    case 'fade-in':
    default:
      hiddenClass = "opacity-0 scale-95";
      visibleClass = "opacity-100 scale-100";
  }

  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${isVisible ? visibleClass : hiddenClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
  const variants = {
    primary: `bg-[#6A0032] text-white hover:bg-[#8B0042] shadow-lg shadow-[#6A0032]/30 focus:ring-[#6A0032]`,
    secondary: `bg-[#16A34A] text-white hover:bg-[#15803d] shadow-lg shadow-[#16A34A]/30 focus:ring-[#16A34A]`,
    outline: `border-2 border-[#6A0032] text-[#6A0032] hover:bg-[#6A0032] hover:text-white focus:ring-[#6A0032]`,
    glass: `bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20`
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <Reveal type="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1.5 w-20 bg-[#6A0032] rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </Reveal>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Programa', href: '#program' },
    { name: 'Vehículos', href: '#vehicles' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6A0032] to-[#8B0042] flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                <Zap size={24} />
              </div>
              <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
                Expo<span className="text-[#16A34A]">Sustentable</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#16A34A] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#register">
              <Button variant={scrolled ? 'primary' : 'glass'} className="!py-2 !px-5 text-sm">
                Registrarme
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-white'}`}
              aria-label="Menú principal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#6A0032]"
              >
                {link.name}
              </a>
            ))}
            <a href="#register" onClick={() => setIsOpen(false)} className="block mt-4">
              <Button variant="primary" className="w-full">
                Registrarme Ahora
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2000" 
          alt="Vehículo eléctrico moderno cargando" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/60 to-[#F8FAFC]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal type="fade-up" delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
            Zacatenco, IPN • Agosto 2026
          </div>
        </Reveal>
        
        <Reveal type="fade-up" delay={300}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Expo Movilidad <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-emerald-300">
              Sustentable IPN
            </span>
          </h1>
        </Reveal>

        <Reveal type="fade-up" delay={500}>
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Descubre el futuro de la movilidad eléctrica, híbrida y sustentable en el Instituto Politécnico Nacional.
          </p>
        </Reveal>

        <Reveal type="fade-in" delay={700}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#register">
              <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                Registrarme Gratis <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <a href="#program">
              <Button variant="glass" className="w-full sm:w-auto text-lg px-8 py-4">
                Conocer Programa
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal type="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6A0032] to-[#16A34A] rounded-2xl transform translate-x-4 translate-y-4 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1663143586071-7975b9f93ee7?auto=format&fit=crop&q=80&w=1000" 
                alt="Carport de carga para vehículos eléctricos" 
                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-[#16A34A]/10 p-3 rounded-full text-[#16A34A]">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">PROMOVIENDO AL</p>
                    <p className="text-lg font-bold text-[#6A0032]">IPN Sustentable</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={200}>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#6A0032] uppercase mb-3">La Técnica al Servicio de la Patria</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Liderando la transición hacia un futuro más limpio.</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                La Expo Electromovilidad IPN 2026 es un espacio de integración, innovación y transferencia de conocimiento que impulsa la movilidad sostenible y la transición energética en México. Organizada por el Instituto Politécnico Nacional, tiene como objetivo acercar a la comunidad académica, al sector productivo, al gobierno y a la sociedad a las tecnologías que contribuirán a la reducción de emisiones, la eficiencia energética y el desarrollo de ciudades más sostenibles.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Exhibición de vehículos eléctricos (BEV), híbridos (HEV) e híbridos enchufables (PHEV), mostrando sus beneficios tecnológicos, ambientales y económicos.',
                  'Demostración de infraestructura de recarga inteligente, energías renovables y soluciones de gestión energética para la movilidad eléctrica.',
                  'Presentación de proyectos de investigación, innovación y desarrollo tecnológico del IPN relacionados con electromovilidad, almacenamiento de energía y sostenibilidad.',
                  'Vinculación estratégica entre academia, industria, gobierno y organismos de financiamiento para acelerar la adopción de tecnologías limpias.',
                  'Difusión de iniciativas alineadas con los Objetivos de Desarrollo Sostenible (ODS) y las metas de reducción de emisiones de carbono.',
                  'Promoción de la formación de talento especializado y la generación de capacidades técnicas para la expansión de la electromovilidad en más de 20 unidades académicas del IPN.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#16A34A] shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.id} type="fade-up" delay={i * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="inline-flex p-4 rounded-xl bg-slate-50 text-[#6A0032] mb-4 group-hover:bg-[#6A0032] group-hover:text-white transition-colors">
                  <stat.icon size={32} />
                </div>
                <h4 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</h4>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredVehicles = selectedBrand 
    ? VEHICLES.filter(v => v.brand === selectedBrand)
    : VEHICLES;

  return (
    <section id="vehicles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="El Ecosistema Eléctrico" 
          subtitle="Conoce de cerca los vehículos que están redefiniendo la forma en que nos movemos. Desde compactos urbanos hasta SUVs de alto rendimiento."
        />

        <Reveal type="fade-in" delay={200}>
          <div className="mb-16">
            <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Filtrar por Marcas Participantes</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {BRANDS.map((brand, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)}
                  className={`text-lg md:text-xl font-bold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    brand === selectedBrand 
                      ? 'bg-[#6A0032] text-white shadow-md scale-105' 
                      : 'text-slate-500 hover:text-[#6A0032] bg-slate-50 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  {brand}
                </button>
              ))}
              {selectedBrand && (
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="text-sm text-slate-500 hover:text-slate-800 underline ml-2"
                >
                  Ver todos
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, i) => (
            <Reveal key={vehicle.id} type="fade-up" delay={(i % 3) * 100}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={vehicle.image} 
                    alt={`Vehículo ${vehicle.name} de ${vehicle.brand}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full shadow-sm text-slate-800">
                    {vehicle.type}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-bold tracking-wider text-[#6A0032] mb-1 uppercase">{vehicle.brand}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">{vehicle.name}</h3>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-1"><Zap size={14} className="text-[#16A34A]"/> Autonomía</span>
                      <span className="font-bold text-slate-800 text-lg">{vehicle.range}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-semibold text-slate-500 uppercase flex items-center justify-end gap-1"><BatteryCharging size={14} className="text-[#16A34A]"/> Carga (80%)</span>
                      <span className="font-bold text-slate-800 text-lg">{vehicle.chargeTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {filteredVehicles.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              <Car size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">Próximamente se revelarán los modelos para esta marca.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Program = () => {
  return (
    <section id="program" className="py-24 bg-[#0F172A] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Programa Oficial" 
          subtitle="Dos días intensivos de aprendizaje, exhibiciones tecnológicas y networking estratégico."
          centered={true}
        />
        <style dangerouslySetInnerHTML={{__html: `
          #program h2 { color: white !important; }
          #program p { color: #94a3b8 !important; }
        `}} />

        <div className="mt-20 space-y-24">
          {PROGRAM_SCHEDULE.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <Reveal type="fade-up">
                <div className="flex justify-center mb-16">
                  <h3 className="text-3xl font-bold text-[#16A34A] border-b-2 border-slate-700 pb-4 px-8 tracking-tight">{day.date}</h3>
                </div>
              </Reveal>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {day.events.map((item, i) => (
                    <Reveal key={`${dayIndex}-${i}`} type={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 100}>
                      <div className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-[#16A34A] border-4 border-[#0F172A] transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(22,163,74,0.6)] hidden md:block"></div>
                        
                        <div className="w-full md:w-[45%]">
                          <div className="bg-slate-800/80 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-slate-700 hover:border-[#16A34A]/60 transition-colors shadow-lg">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className="text-lg font-bold text-[#16A34A] font-mono">{item.time}</span>
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                                {item.category}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
                            <p className="text-slate-400 text-sm flex items-center gap-2">
                              <Users size={16} className="text-slate-500 shrink-0"/> 
                              <span className="truncate">{item.speaker}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="hidden md:block w-[45%]"></div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Registration = () => {
  return (
    <section id="register" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          <div className="w-full lg:w-3/5 p-4 md:p-8 relative min-h-[600px] flex flex-col">
            <Reveal type="fade-right" className="w-full h-full flex-grow flex flex-col">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 px-4 pt-4">Asegura tu lugar</h2>
              <div className="flex-grow w-full rounded-xl overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=2fRL-ZeAlEet9qVGbKKFY5_1DTWk4O5HlOXCR7ztX2VUNzJBS09PWEtTR1A1WFJHMURDVDFVQlVCNi4u&embed=true" 
                  frameBorder="0" 
                  marginWidth="0" 
                  marginHeight="0" 
                  style={{border: "none", minHeight: "550px", maxHeight: "100vh"}} 
                  allowFullScreen 
                  title="Formulario de Registro"
                ></iframe>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-2/5 bg-[#6A0032] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10">Detalles del Evento</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 backdrop-blur-sm"><Calendar size={28}/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fecha y Hora</h4>
                    <p className="text-slate-200">28 y 29 de agosto, 2026<br/>10:00 hrs a 17:00 hrs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 backdrop-blur-sm"><MapPin size={28}/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Sede Oficial</h4>
                    <p className="text-slate-200">
                      Estacionamiento del edificio 1 de ESIME Zacatenco. CDMX.<br/>
                      <a href="https://maps.app.goo.gl/9i5tb9apJt92zaea8" target="_blank" rel="noreferrer" className="text-[#16A34A] hover:text-white font-medium flex items-center gap-1 mt-1 transition-colors">
                        Ver en Google Maps <ExternalLink size={14} />
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 backdrop-blur-sm"><Mail size={28}/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contacto Organizador</h4>
                    <p className="text-slate-200">emaldonadom@ipn.mx<br/>WhatsApp: 55 3287 3697</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 bg-[#8B0042] rounded-2xl p-6 shadow-inner">
              <h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheck size={24} className="text-[#16A34A]"/> Acceso Seguro</h4>
              <p className="text-sm text-slate-200 leading-relaxed">Contamos con estrictos protocolos de protección civil, servicios médicos de primer contacto y seguridad en todas las zonas de exhibición para tu tranquilidad.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas principales sobre la logística y participación en la Expo." />
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} type="fade-up" delay={index * 100}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#6A0032] shadow-lg ring-1 ring-[#6A0032]/20' : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-bold text-lg pr-4 ${openIndex === index ? 'text-[#6A0032]' : 'text-slate-800'}`}>{faq.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#6A0032]/10 text-[#6A0032]' : 'text-slate-400'}`}>
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0F172A] pt-24 pb-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        <div className="col-span-1 lg:col-span-5">
          <a href="#home" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6A0032] to-[#8B0042] flex items-center justify-center text-white">
              <Zap size={24} />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              Expo<span className="text-[#16A34A]">Sustentable</span>
            </span>
          </a>
          <p className="text-slate-400 text-base mb-8 leading-relaxed pr-4 max-w-md">
            Impulsando la transición tecnológica hacia un futuro más limpio y eficiente, uniendo a la academia, la industria automotriz y la sociedad.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2.5 rounded-full hover:bg-[#6A0032]"><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2.5 rounded-full hover:bg-[#6A0032]"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2.5 rounded-full hover:bg-[#6A0032]"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2.5 rounded-full hover:bg-[#6A0032]"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 lg:ml-auto">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Explorar</h4>
          <ul className="space-y-4">
            {['Inicio', 'Acerca de', 'Programa', 'Vehículos', 'Registro'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-[#16A34A] transition-colors text-base font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-4">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Sede del Evento</h4>
          <ul className="space-y-5 text-base text-slate-400">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-[#6A0032] shrink-0 mt-1" />
              <span>Estacionamiento del edificio 1 de ESIME Zacatenco, CDMX</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-[#6A0032] shrink-0" />
              <span>+52 (55) 3287 3697</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-[#6A0032] shrink-0" />
              <span>emaldonadom@ipn.mx</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Expo Movilidad Sustentable IPN. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
          <a href="#" className="hover:text-white transition-colors">Código de Conducta</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.title = "Expo Movilidad Sustentable IPN 2026 | El futuro es eléctrico";
    document.documentElement.lang = 'es';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Evento oficial del Instituto Politécnico Nacional. Descubre vehículos eléctricos, híbridos, infraestructura de carga y energías renovables. Regístrate gratis.";

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Expo Movilidad Sustentable IPN 2026",
      "startDate": "2026-08-28T10:00-06:00",
      "endDate": "2026-08-29T17:00-06:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "ESIME Zacatenco IPN",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Luis Enrique Erro S/N",
          "addressLocality": "Ciudad de México",
          "postalCode": "07738",
          "addressCountry": "MX"
        }
      },
      "image": [
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200"
      ],
      "description": "Exhibición y ciclo de conferencias sobre vehículos eléctricos, infraestructura de carga y tecnologías sostenibles en el Instituto Politécnico Nacional.",
      "offers": {
        "@type": "Offer",
        "url": "https://expo-sustentable.ipn.mx/#register",
        "price": "0",
        "priceCurrency": "MXN",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Instituto Politécnico Nacional",
        "url": "https://www.ipn.mx"
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    }
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-[#F8FAFC] antialiased selection:bg-[#6A0032] selection:text-white scroll-smooth flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Fleet />
        <Program />
        <Registration />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}