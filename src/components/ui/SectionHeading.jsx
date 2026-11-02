import Reveal from './Reveal'

/* Encabezado de sección con eyebrow, título e intro. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  maxWidth = '42rem',
}) {
  const centered = align === 'center'
  return (
    <Reveal
      className={centered ? 'mx-auto text-center' : ''}
      style={{ maxWidth: centered ? maxWidth : undefined }}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className="mt-4 text-[1.9rem] sm:text-[2.35rem] leading-[1.12]"
        style={{ color: light ? '#f4f7fa' : undefined }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[1.03rem] ${centered ? 'mx-auto' : ''}`}
          style={{
            color: light ? 'rgba(226,235,243,0.82)' : 'var(--text-muted)',
            maxWidth,
          }}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
