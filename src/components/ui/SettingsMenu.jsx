import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { useTheme } from '../../context/ThemeContext'
import { useI18n } from '../../i18n/I18nContext'

/* Menú de Ajustes: tema claro/oscuro + idioma (ES/EN). */
export default function SettingsMenu({ compact = false }) {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t('settings.label')}
        className="settings-trigger"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: compact ? '0.5rem' : '0.5rem 0.7rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          color: 'var(--text)',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 600,
          transition: 'border-color .18s ease, background .18s ease',
        }}
      >
        <Icon name="settings" size={18} />
        {!compact && <span>{t('settings.lang.' + lang + '.short')}</span>}
        <Icon name="chevron-down" size={14} />
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(100% + 10px)',
            width: '244px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-lift)',
            padding: '0.85rem',
            zIndex: 80,
          }}
        >
          <SettingsPanel theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} t={t} />
        </div>
      )}
    </div>
  )
}

/* Contenido del panel, reutilizable también en el menú móvil. */
export function SettingsPanel({ theme, setTheme, lang, setLang, t }) {
  return (
    <div>
      <p className="settings-group-label">{t('settings.appearance')}</p>
      <div className="segmented">
        <SegBtn active={theme === 'light'} onClick={() => setTheme('light')}>
          <Icon name="sun" size={16} /> {t('settings.theme.light')}
        </SegBtn>
        <SegBtn active={theme === 'dark'} onClick={() => setTheme('dark')}>
          <Icon name="moon" size={16} /> {t('settings.theme.dark')}
        </SegBtn>
      </div>

      <p className="settings-group-label" style={{ marginTop: '0.9rem' }}>
        {t('settings.language')}
      </p>
      <div className="segmented">
        <SegBtn active={lang === 'es'} onClick={() => setLang('es')}>
          {t('settings.lang.es')}
        </SegBtn>
        <SegBtn active={lang === 'en'} onClick={() => setLang('en')}>
          {t('settings.lang.en')}
        </SegBtn>
      </div>

      <style>{`
        .settings-group-label{
          font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--text-muted);margin:0 0 .5rem;
        }
        .segmented{display:grid;grid-template-columns:1fr 1fr;gap:.4rem;}
        .seg-btn{
          display:inline-flex;align-items:center;justify-content:center;gap:.35rem;
          padding:.5rem .4rem;border-radius:8px;cursor:pointer;font-size:.85rem;font-weight:600;
          border:1px solid var(--border);background:var(--surface-2);color:var(--text);
          transition:all .16s ease;
        }
        .seg-btn:hover{border-color:var(--color-navy-500);}
        .seg-btn.is-active{
          background:var(--color-accent-500);border-color:var(--color-accent-500);color:#fff;
        }
      `}</style>
    </div>
  )
}

function SegBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={onClick}
      className={`seg-btn ${active ? 'is-active' : ''}`}
    >
      {children}
    </button>
  )
}
