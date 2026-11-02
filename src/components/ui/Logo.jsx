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
   Reproduce la identidad: "e" y "m" en naranja; "xxi" en claro/carbón. */
export function Wordmark({ dark = false, className = '', size = '1.5rem' }) {
  // dark = fondo siempre oscuro (footer, panel navy). Si no, usa el color
  // de encabezado, que se adapta a los temas claro/oscuro.
  const mid = dark ? '#f4f7fa' : 'var(--heading)'
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 800,
        fontSize: size,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
      }}
      aria-label="Exxim Alliance"
    >
      <span style={{ color: 'var(--color-accent-500)' }}>e</span>
      <span style={{ color: mid }}>xxi</span>
      <span style={{ color: 'var(--color-accent-500)' }}>m</span>
    </span>
  )
}
