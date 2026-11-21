/* Fondo decorativo marítimo: arcos de ruta punteados y nodos.
   Se usa dentro de secciones azul marino. Totalmente autocontenido. */
export default function MaritimeBackdrop({ className = '', opacity = 0.5 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity }}
    >
      <defs>
        <radialGradient id="mb-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5c3820" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5c3820" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mb-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7d4f2f" stopOpacity="0" />
          <stop offset="50%" stopColor="#ff9a55" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7d4f2f" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="600" fill="url(#mb-glow)" />

      {/* Grid sutil */}
      <g stroke="#5c3820" strokeOpacity="0.14" strokeWidth="1">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
        ))}
      </g>

      {/* Arcos de ruta */}
      <g fill="none" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round">
        <path d="M120 430 C 350 180, 650 180, 900 120" stroke="url(#mb-line)" />
        <path d="M160 500 C 500 420, 760 360, 1080 250" stroke="url(#mb-line)" />
        <path d="M80 300 C 300 320, 520 120, 760 90" stroke="#7d4f2f" strokeOpacity="0.45" />
      </g>

      {/* Nodos */}
      <g>
        {[
          [120, 430],
          [900, 120],
          [1080, 250],
          [760, 90],
          [160, 500],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="9" fill="#ff9a55" fillOpacity="0.14" />
            <circle cx={cx} cy={cy} r="3.5" fill="#ff9a55" />
          </g>
        ))}
      </g>
    </svg>
  )
}
