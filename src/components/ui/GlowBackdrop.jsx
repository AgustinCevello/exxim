/* Fondo con luces difusas naranja/ámbar y textura de grano.
   Variantes: hero (oscuro, intenso), cta (como la tarjeta "grano"),
   footer (luz que sube desde abajo) y soft (secciones claras, sutil).
   El contenedor padre necesita la clase .fx-host. */
export default function GlowBackdrop({ variant = 'soft' }) {
  return (
    <div className={`glow-bd glow-bd--${variant}`} aria-hidden="true">
      <span className="glow-bd__a" />
      <span className="glow-bd__b" />
      <span className="glow-bd__grain" />
    </div>
  )
}
