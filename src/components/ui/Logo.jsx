import logoImg from '../../assets/exximLogoTransparente.png'

/* Logo en imagen (para fondos claros). */
export function BrandMark({ className = '', height = 34 }) {
  return (
    <img
      src={logoImg}
      alt="Exxim Alliance"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
      className={className}
    />
  )
}

/* Wordmark de texto (para fondos oscuros, siempre legible).
   Reproduce la identidad: "xx" en naranja; "e", "i" y "m" en claro/carbón. */
export function Wordmark({ dark = false, className = '', size = '1.5rem' }) {
  // dark = fondo siempre oscuro (footer, panel oscuro). Si no, usa el color
  // de encabezado, que se adapta a los temas claro/oscuro.
  const mid = dark ? '#fbf6f2' : 'var(--heading)'
  return (
    <span
      className={className}
      style={{
        // Igual que en las tarjetas: Montserrat ExtraBold Italic.
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: size,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
      }}
      aria-label="Exxim Alliance"
    >
      <span style={{ color: mid }}>e</span>
      <span style={{ color: 'var(--color-accent-500)' }}>xx</span>
      <span style={{ color: mid }}>im</span>
    </span>
  )
}
