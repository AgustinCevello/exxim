/* ============================================================
   Datos institucionales de Exxim Alliance SRL
   Contenido real de la empresa. Campos traducibles: { es, en }.
   ============================================================ */

export const company = {
  name: 'Exxim Alliance SRL',
  shortName: 'Exxim',
  address: 'Av. Rivadavia 877, piso 5, Ciudad Autónoma de Buenos Aires',
  addressShort: 'Av. Rivadavia 877, 5° — CABA',
  email: 'contacto@exximsrl.com.ar',
  whatsapp: '+54 9 11 6155-5520',
  whatsappHref: 'https://wa.me/5491161555520',
  phone: '+54 9 11 6155-5520',
  phoneHref: 'tel:+5491161555520',
  coords: { lat: -34.609, lng: -58.3845 },
}

/* Secciones de la landing (una sola página). El `id` ancla el scroll
   y `key` es la etiqueta traducible que se muestra en la navegación. */
export const navLinks = [
  { key: 'nav.about', id: 'nosotros' },
  { key: 'nav.services', id: 'servicios' },
  { key: 'nav.clients', id: 'clientes' },
  { key: 'nav.internationalShort', id: 'internacional' },
  { key: 'nav.news', id: 'novedades' },
  { key: 'nav.contact', id: 'contacto' },
]

export const valueProps = [
  {
    icon: 'advisor',
    title: { es: 'Un asesor dedicado', en: 'A dedicated advisor' },
    text: {
      es: 'Cada cliente trabaja con un asesor asignado que conoce su operatoria de punta a punta. Un solo interlocutor, siempre.',
      en: 'Every client works with an assigned advisor who knows their operation end to end. A single point of contact, always.',
    },
  },
  {
    icon: 'radar',
    title: { es: 'Seguimiento online', en: 'Online tracking' },
    text: {
      es: 'Portal privado donde cada operación se sigue en tiempo real: hitos aduaneros, costos y documentación en un solo lugar.',
      en: 'A private portal where each operation is tracked in real time: customs milestones, costs and documents in one place.',
    },
  },
  {
    icon: 'scale',
    title: { es: 'Transparencia en costos', en: 'Transparent costs' },
    text: {
      es: 'Honorarios y tributos siempre a la vista, separados y detallados. Sin sorpresas en plazos ni en montos.',
      en: 'Fees and taxes always in plain sight, itemized and separated. No surprises in timelines or amounts.',
    },
  },
  {
    icon: 'badge',
    title: { es: '40+ años de experiencia', en: '40+ years of experience' },
    text: {
      es: 'Socios con más de cuatro décadas en comercio exterior y aduana respaldan cada gestión.',
      en: 'Partners with more than four decades in foreign trade and customs back every operation.',
    },
  },
]

export const services = [
  {
    slug: 'tercerizacion',
    icon: 'layers',
    title: {
      es: 'Tercerización de comercio exterior',
      en: 'Foreign trade outsourcing',
    },
    tag: { es: 'Servicio central', en: 'Core service' },
    short: {
      es: 'Gestionamos todas las operaciones que normalmente resolvería su área interna de comercio exterior.',
      en: 'We handle every operation your internal foreign trade team would normally resolve.',
    },
    description: {
      es: 'Operamos como el departamento de comercio exterior de su empresa: planificamos importaciones y exportaciones, coordinamos con despachantes, transportistas y bancos, controlamos posiciones arancelarias, licencias y plazos, y mantenemos informado a su equipo en cada etapa. Usted se concentra en su negocio; nosotros resolvemos la operatoria.',
      en: "We operate as your company's foreign trade department: we plan imports and exports, coordinate with brokers, carriers and banks, control tariff classifications, licenses and deadlines, and keep your team informed at every stage. You focus on your business; we handle the operation.",
    },
    bullets: {
      es: [
        'Gestión integral de importaciones y exportaciones',
        'Clasificación arancelaria y licencias',
        'Coordinación con despachantes, transporte y bancos',
        'Reportes periódicos y asesor dedicado',
      ],
      en: [
        'End-to-end management of imports and exports',
        'Tariff classification and licenses',
        'Coordination with brokers, transport and banks',
        'Periodic reporting and a dedicated advisor',
      ],
    },
  },
  {
    slug: 'auditorias',
    icon: 'search',
    title: { es: 'Auditorías de comercio exterior', en: 'Foreign trade audits' },
    tag: { es: 'Control externo', en: 'External review' },
    short: {
      es: 'Revisión externa de procesos y operaciones para empresas que ya cuentan con área propia.',
      en: 'External review of processes and operations for companies that already have their own team.',
    },
    description: {
      es: 'Analizamos su operatoria actual con una mirada externa e independiente: detectamos riesgos aduaneros, oportunidades de ahorro en tributos, errores de clasificación y debilidades de procesos. Entregamos un diagnóstico claro y recomendaciones concretas para que su área interna gane previsibilidad y cumplimiento.',
      en: 'We analyze your current operation with an external, independent eye: we detect customs risks, tax-saving opportunities, classification errors and process weaknesses. We deliver a clear diagnosis and concrete recommendations so your internal team gains predictability and compliance.',
    },
    bullets: {
      es: [
        'Diagnóstico de procesos y cumplimiento',
        'Revisión de clasificación y valoración',
        'Detección de riesgos y ahorros',
        'Informe con recomendaciones accionables',
      ],
      en: [
        'Process and compliance diagnosis',
        'Review of classification and valuation',
        'Detection of risks and savings',
        'Report with actionable recommendations',
      ],
    },
  },
  {
    slug: 'despachos',
    icon: 'stamp',
    title: { es: 'Despachos de aduana', en: 'Customs clearance' },
    tag: { es: 'Trámite puntual', en: 'One-off procedure' },
    short: {
      es: 'Gestión de trámites aduaneros para importaciones y exportaciones puntuales.',
      en: 'Customs procedures for one-off imports and exports.',
    },
    description: {
      es: 'Realizamos la gestión aduanera completa de operaciones puntuales: confección y oficialización del despacho, seguimiento de la selectividad, pago de tributos y liberación de la mercadería. Rapidez, precisión documental y comunicación constante en cada paso del trámite.',
      en: 'We carry out the full customs management of one-off operations: preparing and filing the declaration, tracking selectivity, paying duties and releasing the goods. Speed, documentary precision and constant communication at every step.',
    },
    bullets: {
      es: [
        'Confección y oficialización de despachos',
        'Seguimiento de canal de selectividad',
        'Gestión de tributos y liberación',
        'Importación y exportación',
      ],
      en: [
        'Preparation and filing of declarations',
        'Selectivity channel tracking',
        'Duty management and release',
        'Import and export',
      ],
    },
  },
  {
    slug: 'logistica',
    icon: 'route',
    title: { es: 'Logística y planificación', en: 'Logistics & planning' },
    tag: { es: 'Complementario', en: 'Complementary' },
    short: {
      es: 'Asesoramiento en logística internacional y planificación de operaciones.',
      en: 'Advisory on international logistics and operation planning.',
    },
    description: {
      es: 'Acompañamos la planificación logística de sus operaciones: selección de incoterms, modalidades de transporte, tiempos de tránsito y optimización de costos. Un enfoque integral para que la logística deje de ser un cuello de botella y pase a ser una ventaja.',
      en: 'We support the logistics planning of your operations: incoterm selection, transport modes, transit times and cost optimization. An integral approach so logistics stops being a bottleneck and becomes an advantage.',
    },
    bullets: {
      es: [
        'Selección de incoterms y modalidades',
        'Planificación de tiempos y costos',
        'Optimización de la cadena',
        'Enfoque integral de la operación',
      ],
      en: [
        'Incoterm and mode selection',
        'Time and cost planning',
        'Supply chain optimization',
        'Integral approach to the operation',
      ],
    },
  },
]

export const differentiators = [
  { es: 'Asesor asignado a cada cliente', en: 'An advisor assigned to each client' },
  { es: 'Rapidez y eficiencia en la gestión', en: 'Speed and efficiency in every task' },
  { es: 'Transparencia en costos y plazos', en: 'Transparency in costs and timelines' },
  { es: 'Comunicación constante', en: 'Constant communication' },
  { es: 'Seguimiento online de cada operación', en: 'Online tracking of every operation' },
]

export const clients = [
  {
    name: 'Massalin Particulares',
    industry: { es: 'Industria de consumo masivo', en: 'Consumer goods industry' },
    initials: 'MP',
  },
  {
    name: 'Amcor',
    industry: { es: 'Packaging global', en: 'Global packaging' },
    initials: 'AM',
  },
]

export const stats = [
  { value: '20', suffix: { es: 'años', en: 'years' }, label: { es: 'de actividad del estudio', en: 'of the firm in business' } },
  { value: '40+', suffix: { es: 'años', en: 'years' }, label: { es: 'de experiencia de los socios', en: 'of partner experience' } },
  { value: '1', suffix: { es: 'asesor', en: 'advisor' }, label: { es: 'dedicado por cliente', en: 'dedicated per client' } },
  { value: '24/7', suffix: '', label: { es: 'seguimiento online de operaciones', en: 'online operation tracking' } },
]

export const countries = [
  {
    code: 'BR',
    name: { es: 'Brasil', en: 'Brazil' },
    role: { es: 'Corresponsal — Mercosur', en: 'Correspondent — Mercosur' },
    coords: { lat: -15.78, lng: -47.93 },
    note: {
      es: 'Operaciones regionales y tránsito terrestre.',
      en: 'Regional operations and land transit.',
    },
  },
  {
    code: 'US',
    name: { es: 'Estados Unidos', en: 'United States' },
    role: { es: 'Corresponsal — Norteamérica', en: 'Correspondent — North America' },
    coords: { lat: 38.9, lng: -77.04 },
    note: {
      es: 'Importaciones industriales y bienes de capital.',
      en: 'Industrial imports and capital goods.',
    },
  },
  {
    code: 'CN',
    name: { es: 'China', en: 'China' },
    role: { es: 'Corresponsal — Asia', en: 'Correspondent — Asia' },
    coords: { lat: 31.23, lng: 121.47 },
    note: {
      es: 'Consolidación y origen de manufacturas.',
      en: 'Consolidation and origin of manufactured goods.',
    },
  },
  {
    code: 'ES',
    name: { es: 'España', en: 'Spain' },
    role: { es: 'Corresponsal — Europa', en: 'Correspondent — Europe' },
    coords: { lat: 40.42, lng: -3.7 },
    note: {
      es: 'Puerta de entrada al mercado europeo.',
      en: 'Gateway to the European market.',
    },
  },
  {
    code: 'AR',
    name: { es: 'Argentina', en: 'Argentina' },
    role: { es: 'Casa central — Buenos Aires', en: 'Head office — Buenos Aires' },
    coords: { lat: -34.61, lng: -58.38 },
    note: {
      es: 'Sede del estudio y centro de operaciones.',
      en: 'Firm headquarters and operations center.',
    },
    home: true,
  },
]

export const news = [
  {
    slug: 'arca-nuevas-disposiciones',
    date: '2026-10-14',
    readingTime: { es: '4 min', en: '4 min' },
    category: { es: 'Normativa', en: 'Regulation' },
    title: {
      es: 'ARCA actualiza disposiciones para operaciones de importación',
      en: 'ARCA updates provisions for import operations',
    },
    excerpt: {
      es: 'Repasamos los principales cambios anunciados por ARCA y qué implican, en la práctica, para quienes importan de forma habitual. Qué revisar antes de su próxima operación.',
      en: 'We review the main changes announced by ARCA and what they mean, in practice, for regular importers. What to check before your next operation.',
    },
  },
  {
    slug: 'tercerizar-comercio-exterior',
    date: '2026-09-02',
    readingTime: { es: '5 min', en: '5 min' },
    category: { es: 'Gestión', en: 'Management' },
    title: {
      es: 'Tercerizar el comercio exterior: cuándo conviene y qué esperar',
      en: 'Outsourcing foreign trade: when it pays off and what to expect',
    },
    excerpt: {
      es: 'Para muchas empresas, mantener un área interna de comercio exterior es costoso y difícil de escalar. Analizamos cuándo la tercerización ordena costos y gana previsibilidad.',
      en: 'For many companies, keeping an internal foreign trade team is costly and hard to scale. We analyze when outsourcing streamlines costs and gains predictability.',
    },
  },
  {
    slug: 'incoterms-2020-errores',
    date: '2026-07-21',
    readingTime: { es: '6 min', en: '6 min' },
    category: { es: 'Operaciones', en: 'Operations' },
    title: {
      es: 'Incoterms 2020: cinco errores frecuentes que encarecen una operación',
      en: 'Incoterms 2020: five common mistakes that raise your costs',
    },
    excerpt: {
      es: 'Elegir mal un incoterm puede trasladar costos y riesgos a quien no corresponde. Revisamos los errores más comunes y cómo evitarlos desde la planificación.',
      en: 'Choosing the wrong incoterm can shift costs and risks to the wrong party. We review the most common mistakes and how to avoid them from the planning stage.',
    },
  },
]

/* Imágenes de fondo (hotlink Unsplash), siempre sobre degradado azul
   marino; si una imagen no carga, el degradado sostiene el diseño. */
export const media = {
  heroPort:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=70',
  containersYard:
    'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=70',
  cargoShip:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=70',
  portCrane:
    'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1600&q=70',
  ctaContainers:
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=70',
}
