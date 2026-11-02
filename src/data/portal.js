/* ============================================================
   DATOS FICTICIOS — Portal de clientes (prototipo)
   Todo el contenido es inventado y sirve solo como demostración.
   Campos traducibles: { es, en }.
   ============================================================ */

export const demoClient = {
  company: 'Importadora del Plata S.A.',
  cuit: '30-71234567-9',
  contact: 'Laura Giménez',
  role: { es: 'Jefa de Comercio Exterior', en: 'Head of Foreign Trade' },
}

export const demoCredentials = {
  user: 'admin',
  password: 'uade92',
}

/* Estados posibles: etiqueta bilingüe + color de señal */
export const operationStatuses = {
  documentacion: { label: { es: 'Documentación', en: 'Documentation' }, tone: 'amber' },
  despacho: { label: { es: 'Despacho oficializado', en: 'Declaration filed' }, tone: 'amber' },
  selectividad: { label: { es: 'En selectividad', en: 'In selectivity' }, tone: 'amber' },
  tributos: { label: { es: 'Pago de tributos', en: 'Duty payment' }, tone: 'amber' },
  liberada: { label: { es: 'Mercadería liberada', en: 'Goods released' }, tone: 'green' },
  entregada: { label: { es: 'Entregada', en: 'Delivered' }, tone: 'green' },
  demorada: { label: { es: 'Demorada', en: 'Delayed' }, tone: 'red' },
}

/* Hitos canónicos de una operación de comercio exterior */
export const milestoneSteps = [
  { key: 'documentacion', label: { es: 'Documentación recibida', en: 'Documentation received' } },
  { key: 'despacho', label: { es: 'Despacho oficializado', en: 'Declaration filed' } },
  { key: 'selectividad', label: { es: 'Canal de selectividad asignado', en: 'Selectivity channel assigned' } },
  { key: 'tributos', label: { es: 'Pago de tributos', en: 'Duty payment' } },
  { key: 'liberada', label: { es: 'Liberación de la mercadería', en: 'Release of goods' } },
  { key: 'entregada', label: { es: 'Entrega al cliente', en: 'Delivery to client' } },
]

const C = {
  honorariosGestion: { es: 'Honorarios Exxim — gestión integral', en: 'Exxim fees — full management' },
  honorariosDespacho: { es: 'Honorarios despacho', en: 'Customs clearance fees' },
  derechosImp: { es: 'Derechos de importación', en: 'Import duties' },
  derechosImpEst: { es: 'Derechos de importación (estimado)', en: 'Import duties (estimated)' },
  derechosExp: { es: 'Derechos de exportación', en: 'Export duties' },
  tasaEstadistica: { es: 'Tasa de estadística', en: 'Statistics fee' },
  ivaAdelantado: { es: 'IVA adelantado', en: 'Advance VAT' },
  ivaAdelantadoEst: { es: 'IVA adelantado (estimado)', en: 'Advance VAT (estimated)' },
  fleteInterno: { es: 'Flete interno y terminal', en: 'Inland freight and terminal' },
  fleteInternacional: { es: 'Flete internacional', en: 'International freight' },
  seguro: { es: 'Seguro', en: 'Insurance' },
  verificacion: { es: 'Verificación y depósito fiscal', en: 'Inspection and bonded warehouse' },
  depositoFiscal: { es: 'Depósito fiscal (demora)', en: 'Bonded warehouse (demurrage)' },
}

const D = {
  facturaComercial: { es: 'Factura comercial', en: 'Commercial invoice' },
  facturaProforma: { es: 'Factura proforma', en: 'Proforma invoice' },
  facturaE: { es: 'Factura E', en: 'Export invoice (E)' },
  packingList: { es: 'Packing list', en: 'Packing list' },
  bl: { es: 'Bill of Lading (B/L)', en: 'Bill of Lading (B/L)' },
  despachoImp: { es: 'Despacho de importación', en: 'Import declaration' },
  permisoEmbarque: { es: 'Permiso de embarque', en: 'Shipping permit' },
  certOrigen: { es: 'Certificado de origen', en: 'Certificate of origin' },
  conocimiento: { es: 'Conocimiento de embarque', en: 'Bill of lading' },
  fitosanitario: { es: 'Certificado fitosanitario', en: 'Phytosanitary certificate' },
}

export const operations = [
  {
    id: 'IMP-2026-0481',
    type: 'import',
    merchandise: { es: 'Maquinaria industrial (bienes de capital)', en: 'Industrial machinery (capital goods)' },
    originCity: { es: 'Shanghái, China', en: 'Shanghai, China' },
    destinationCity: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    origin: { lat: 31.23, lng: 121.47 },
    destination: { lat: -34.61, lng: -58.37 },
    incoterm: 'FOB Shanghái',
    status: 'selectividad',
    channel: 'naranja',
    updatedAt: '2026-10-29',
    eta: { es: 'ETA estimada: 04/11/2026', en: 'Estimated ETA: Nov 4, 2026' },
    completedMilestones: ['documentacion', 'despacho', 'selectividad'],
    milestoneDates: { documentacion: '2026-10-18', despacho: '2026-10-24', selectividad: '2026-10-29' },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 920000 },
      { concept: C.honorariosDespacho, type: 'honorarios', amount: 310000 },
      { concept: C.derechosImp, type: 'tributos', amount: 2140000 },
      { concept: C.tasaEstadistica, type: 'tributos', amount: 268000 },
      { concept: C.ivaAdelantado, type: 'tributos', amount: 1980000 },
      { concept: C.fleteInterno, type: 'terceros', amount: 540000 },
    ],
    documents: [
      { name: D.facturaComercial, ready: true },
      { name: D.packingList, ready: true },
      { name: D.bl, ready: true },
      { name: D.despachoImp, ready: false },
    ],
  },
  {
    id: 'EXP-2026-0318',
    type: 'export',
    merchandise: { es: 'Alimentos envasados', en: 'Packaged food products' },
    originCity: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    destinationCity: { es: 'Santos, Brasil', en: 'Santos, Brazil' },
    origin: { lat: -34.61, lng: -58.37 },
    destination: { lat: -23.96, lng: -46.33 },
    incoterm: 'CIF Santos',
    status: 'entregada',
    channel: 'verde',
    updatedAt: '2026-10-21',
    eta: { es: 'Entregada el 21/10/2026', en: 'Delivered on Oct 21, 2026' },
    completedMilestones: ['documentacion', 'despacho', 'selectividad', 'tributos', 'liberada', 'entregada'],
    milestoneDates: {
      documentacion: '2026-09-30', despacho: '2026-10-03', selectividad: '2026-10-04',
      tributos: '2026-10-07', liberada: '2026-10-11', entregada: '2026-10-21',
    },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 680000 },
      { concept: C.derechosExp, type: 'tributos', amount: 410000 },
      { concept: C.fleteInternacional, type: 'terceros', amount: 1250000 },
      { concept: C.seguro, type: 'terceros', amount: 180000 },
    ],
    documents: [
      { name: D.facturaE, ready: true },
      { name: D.permisoEmbarque, ready: true },
      { name: D.certOrigen, ready: true },
      { name: D.conocimiento, ready: true },
    ],
  },
  {
    id: 'IMP-2026-0456',
    type: 'import',
    merchandise: { es: 'Componentes electrónicos', en: 'Electronic components' },
    originCity: { es: 'Rotterdam, Países Bajos', en: 'Rotterdam, Netherlands' },
    destinationCity: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    origin: { lat: 51.95, lng: 4.14 },
    destination: { lat: -34.61, lng: -58.37 },
    incoterm: 'CFR Buenos Aires',
    status: 'tributos',
    channel: 'rojo',
    updatedAt: '2026-10-27',
    eta: { es: 'ETA estimada: 02/11/2026', en: 'Estimated ETA: Nov 2, 2026' },
    completedMilestones: ['documentacion', 'despacho', 'selectividad', 'tributos'],
    milestoneDates: {
      documentacion: '2026-10-10', despacho: '2026-10-19', selectividad: '2026-10-22', tributos: '2026-10-27',
    },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 760000 },
      { concept: C.derechosImp, type: 'tributos', amount: 1560000 },
      { concept: C.ivaAdelantado, type: 'tributos', amount: 1340000 },
      { concept: C.verificacion, type: 'terceros', amount: 420000 },
    ],
    documents: [
      { name: D.facturaComercial, ready: true },
      { name: D.packingList, ready: true },
      { name: D.despachoImp, ready: false },
    ],
  },
  {
    id: 'IMP-2026-0502',
    type: 'import',
    merchandise: { es: 'Insumos textiles', en: 'Textile inputs' },
    originCity: { es: 'Estambul, Turquía', en: 'Istanbul, Turkey' },
    destinationCity: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    origin: { lat: 41.01, lng: 28.98 },
    destination: { lat: -34.61, lng: -58.37 },
    incoterm: 'FOB Estambul',
    status: 'documentacion',
    channel: null,
    updatedAt: '2026-10-30',
    eta: { es: 'ETA estimada: 18/11/2026', en: 'Estimated ETA: Nov 18, 2026' },
    completedMilestones: ['documentacion'],
    milestoneDates: { documentacion: '2026-10-30' },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 540000 },
      { concept: C.derechosImpEst, type: 'tributos', amount: 980000 },
      { concept: C.ivaAdelantadoEst, type: 'tributos', amount: 870000 },
    ],
    documents: [{ name: D.facturaProforma, ready: true }],
  },
  {
    id: 'EXP-2026-0295',
    type: 'export',
    merchandise: { es: 'Autopartes', en: 'Auto parts' },
    originCity: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    destinationCity: { es: 'Veracruz, México', en: 'Veracruz, Mexico' },
    origin: { lat: -34.61, lng: -58.37 },
    destination: { lat: 19.17, lng: -96.13 },
    incoterm: 'FCA Buenos Aires',
    status: 'liberada',
    channel: 'verde',
    updatedAt: '2026-10-25',
    eta: { es: 'ETA estimada: 09/11/2026', en: 'Estimated ETA: Nov 9, 2026' },
    completedMilestones: ['documentacion', 'despacho', 'selectividad', 'tributos', 'liberada'],
    milestoneDates: {
      documentacion: '2026-10-08', despacho: '2026-10-14', selectividad: '2026-10-15',
      tributos: '2026-10-18', liberada: '2026-10-25',
    },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 720000 },
      { concept: C.derechosExp, type: 'tributos', amount: 350000 },
      { concept: C.fleteInternacional, type: 'terceros', amount: 1480000 },
    ],
    documents: [
      { name: D.facturaE, ready: true },
      { name: D.permisoEmbarque, ready: true },
      { name: D.certOrigen, ready: true },
    ],
  },
  {
    id: 'IMP-2026-0399',
    type: 'import',
    merchandise: { es: 'Repuestos agrícolas', en: 'Agricultural spare parts' },
    originCity: { es: 'Hamburgo, Alemania', en: 'Hamburg, Germany' },
    destinationCity: { es: 'Rosario, Argentina', en: 'Rosario, Argentina' },
    origin: { lat: 53.55, lng: 9.99 },
    destination: { lat: -32.95, lng: -60.64 },
    incoterm: 'CIF Buenos Aires',
    status: 'demorada',
    channel: 'rojo',
    updatedAt: '2026-10-28',
    eta: { es: 'En revisión documental', en: 'Under documentary review' },
    completedMilestones: ['documentacion', 'despacho', 'selectividad'],
    milestoneDates: { documentacion: '2026-10-05', despacho: '2026-10-16', selectividad: '2026-10-20' },
    costs: [
      { concept: C.honorariosGestion, type: 'honorarios', amount: 690000 },
      { concept: C.derechosImp, type: 'tributos', amount: 1120000 },
      { concept: C.ivaAdelantado, type: 'tributos', amount: 1010000 },
      { concept: C.depositoFiscal, type: 'terceros', amount: 360000 },
    ],
    documents: [
      { name: D.facturaComercial, ready: true },
      { name: D.packingList, ready: true },
      { name: D.fitosanitario, ready: false },
    ],
  },
]

/* Resumen de cuenta — valores de ejemplo */
export const accountSummary = {
  paidHonorarios: 4850000,
  paidTributos: 12640000,
  dueHonorarios: 1230000,
  dueTributos: 3320000,
  monthly: [
    { month: { es: 'May', en: 'May' }, honorarios: 640000, tributos: 1680000 },
    { month: { es: 'Jun', en: 'Jun' }, honorarios: 720000, tributos: 1920000 },
    { month: { es: 'Jul', en: 'Jul' }, honorarios: 580000, tributos: 1450000 },
    { month: { es: 'Ago', en: 'Aug' }, honorarios: 810000, tributos: 2240000 },
    { month: { es: 'Sep', en: 'Sep' }, honorarios: 760000, tributos: 2010000 },
    { month: { es: 'Oct', en: 'Oct' }, honorarios: 1340000, tributos: 3340000 },
  ],
}

/* Asesor asignado (ficticio) */
export const advisor = {
  name: 'Martín Ferreyra',
  role: { es: 'Asesor de comercio exterior asignado', en: 'Assigned foreign trade advisor' },
  email: 'martin.ferreyra@exximsrl.com.ar',
  phone: '+54 11 4000-0012',
  whatsapp: '+54 9 11 5555-0150',
  whatsappHref: 'https://wa.me/5491155550150',
  initials: 'MF',
  since: { es: 'Trabaja con su cuenta desde 2023', en: 'Working with your account since 2023' },
  blurb: {
    es: 'Soy su punto de contacto directo en Exxim. Conozco su operatoria y coordino cada importación y exportación de principio a fin. Escríbame cuando lo necesite.',
    en: 'I am your direct point of contact at Exxim. I know your operation and coordinate every import and export from start to finish. Write to me whenever you need.',
  },
}

export const faqs = [
  {
    q: { es: '¿Cómo sigo el estado de una operación?', en: 'How do I track the status of an operation?' },
    a: {
      es: 'Desde el Tablero de operaciones puede ver todas sus operaciones con su estado actual. Al hacer clic en una, accede al detalle con la línea de tiempo de hitos, el mapa de seguimiento, el desglose de costos y la documentación.',
      en: 'From the Operations board you can see all your operations with their current status. Clicking one opens the detail with the milestone timeline, the tracking map, the cost breakdown and the documentation.',
    },
  },
  {
    q: { es: '¿Qué significan los canales de selectividad?', en: 'What do the selectivity channels mean?' },
    a: {
      es: 'Al oficializar un despacho, la aduana asigna un canal: verde (libramiento sin controles adicionales), naranja (control documental) o rojo (control documental y físico de la mercadería). En el detalle de cada operación indicamos el canal asignado.',
      en: 'When a declaration is filed, customs assigns a channel: green (release with no further controls), orange (documentary control) or red (documentary and physical control of the goods). The assigned channel is shown in each operation detail.',
    },
  },
  {
    q: { es: '¿Cómo leo el desglose de costos?', en: 'How do I read the cost breakdown?' },
    a: {
      es: 'Separamos siempre los honorarios de Exxim de los tributos y costos de terceros, con subtotales y total. Así puede distinguir con claridad qué corresponde a nuestro servicio y qué a impuestos o proveedores externos.',
      en: "We always separate Exxim's fees from taxes and third-party costs, with subtotals and a total. That way you can clearly tell what belongs to our service and what belongs to taxes or external providers.",
    },
  },
  {
    q: { es: '¿Puedo descargar la documentación de mis operaciones?', en: 'Can I download my operation documents?' },
    a: {
      es: 'Sí. En la sección Documentación de cada operación encontrará los documentos disponibles para descargar. En este prototipo los botones de descarga son ilustrativos.',
      en: 'Yes. In the Documentation section of each operation you will find the available documents to download. In this prototype the download buttons are illustrative.',
    },
  },
  {
    q: { es: '¿Con quién me comunico ante una duda?', en: 'Who do I contact if I have a question?' },
    a: {
      es: 'Con su asesor asignado. En la sección "Mi asesor" tiene su correo, teléfono y WhatsApp directo, además de un cuadro para enviarle un mensaje.',
      en: 'With your assigned advisor. In the "My advisor" section you have their email, phone and direct WhatsApp, plus a box to send a message.',
    },
  },
]
