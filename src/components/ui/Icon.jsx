/* Set de íconos SVG propios (línea, 24x24, trazo coherente). */

const paths = {
  // Value props
  advisor: (
    <>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  radar: (
    <>
      <path d="M12 12 19 5" />
      <path d="M12 21a9 9 0 1 0-9-9" />
      <path d="M12 16a4 4 0 1 0-4-4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M7 7h10" />
      <path d="M7 7 4 14a3 3 0 0 0 6 0L7 7Z" />
      <path d="M17 7l-3 7a3 3 0 0 0 6 0l-3-7Z" />
      <path d="M8 21h8" />
    </>
  ),
  badge: (
    <>
      <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="m8.5 13-1.2 7L12 17.8 16.7 20l-1.2-7" />
    </>
  ),
  // Services
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  stamp: (
    <>
      <path d="M9 5a3 3 0 0 1 6 0c0 1.5-1 2-1 3.5S15 11 15 11H9s1-1 1-2.5S9 6.5 9 5Z" />
      <path d="M5 15h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2Z" />
      <path d="M4 21h16" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
    </>
  ),
  // UI
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  'chevron-right': <path d="m9 6 6 6-6 6" />,
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3-.1.5a5 5 0 0 0 2.6 2.3c.2.1.4 0 .5-.1l.6-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.3.3.5v.5c0 .5-.4.9-.9 1.1-.6.2-1.4.2-3.3-.6a8 8 0 0 1-3.8-3.8c-.7-1.8-.6-2.6-.5-3Z" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10m0 0 4-4m-4 4-4-4" />
      <path d="M5 19h14" />
    </>
  ),
  filter: <path d="M4 6h16l-6 7v5l-4 2v-7L4 6Z" />,
  logout: (
    <>
      <path d="M14 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 12H3m0 0 3.5-3.5M3 12l3.5 3.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  file: (
    <>
      <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  'life-buoy': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5.5 5.5 4 4M14.5 14.5l4 4M18.5 5.5l-4 4M9.5 14.5l-4 4" />
    </>
  ),
  ship: (
    <>
      <path d="M3 17l1.5-5h15L21 17" />
      <path d="M3 17a3 3 0 0 0 4.5 1 3 3 0 0 0 4.5 0 3 3 0 0 0 4.5 0A3 3 0 0 0 21 17" />
      <path d="M12 3v9M8 7h8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 2.5 14.7 0 17M12 3.5c-2.5 2.3-2.5 14.7 0 17" />
    </>
  ),
  'check-shield': (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  send: <path d="m4 12 16-7-7 16-2.5-6.5L4 12Z" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12v9M4 7.5l8 4.5 8-4.5" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 7l1.9 1.1M17.9 15.9l1.9 1.1M4.2 17l1.9-1.1M17.9 8.1l1.9-1.1" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />,
  translate: (
    <>
      <path d="M4 5h9M8.5 3v2c0 4-2.2 7-5 8.5" />
      <path d="M6 9c0 2.5 2.5 5 6 6" />
      <path d="m12 20 3.5-8 3.5 8M13.2 17h4.6" />
    </>
  ),
}

export default function Icon({ name, size = 22, className = '', strokeWidth = 1.6, ...rest }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  )
}
