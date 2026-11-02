import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'
import { useI18n } from '../../i18n/I18nContext'

/* Tuerquita de ajustes: agrupa idioma y tema en un popover.
   Ancho del disparador fijo (38px): no desplaza el layout. */
export default function SettingsMenu({ align = 'right' }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="settings-menu" ref={ref}>
      <button
        type="button"
        className={`settings-trigger ${open ? 'is-open' : ''}`}
        aria-label={t('settings.title')}
        title={t('settings.title')}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="settings" size={19} />
      </button>

      <div className={`settings-pop settings-pop--${align} ${open ? 'is-open' : ''}`} role="menu">
        <p className="settings-pop-head">{t('settings.title')}</p>
        <div className="settings-pop-row">
          <span className="settings-pop-label">{t('settings.language')}</span>
          <LangToggle />
        </div>
        <div className="settings-pop-row">
          <span className="settings-pop-label">{t('settings.appearance')}</span>
          <ThemeToggle />
        </div>
      </div>

      <style>{`
        .settings-menu{position:relative;display:inline-flex;flex-shrink:0;}
        .settings-trigger{display:inline-flex;align-items:center;justify-content:center;
          width:38px;height:38px;border-radius:9px;border:1px solid var(--border);
          background:var(--surface);color:var(--text);cursor:pointer;
          transition:border-color .16s ease,background .16s ease,color .16s ease;}
        .settings-trigger svg{transition:transform .35s cubic-bezier(.4,0,.2,1);}
        .settings-trigger:hover{border-color:var(--color-accent-500);color:var(--accent);
          background:var(--surface-2);}
        .settings-trigger:hover svg{transform:rotate(70deg);}
        .settings-trigger.is-open{border-color:var(--color-accent-500);color:var(--accent);
          background:var(--accent-soft);}
        .settings-trigger.is-open svg{transform:rotate(130deg);}

        .settings-pop{position:absolute;top:calc(100% + 10px);z-index:80;min-width:216px;
          padding:.9rem 1rem 1rem;border-radius:13px;background:var(--surface);
          border:1px solid var(--border);box-shadow:var(--shadow-lift);
          display:grid;gap:.85rem;
          opacity:0;visibility:hidden;pointer-events:none;
          transform:translateY(-8px) scale(.97);transform-origin:top right;
          transition:opacity .18s ease,transform .18s ease,visibility .18s;}
        .settings-pop--right{right:0;}
        .settings-pop--left{left:0;transform-origin:top left;}
        .settings-pop.is-open{opacity:1;visibility:visible;pointer-events:auto;
          transform:translateY(0) scale(1);}
        .settings-pop-head{font-size:.72rem;font-weight:700;letter-spacing:.11em;
          text-transform:uppercase;color:var(--text-muted);margin-bottom:.1rem;}
        .settings-pop-row{display:flex;align-items:center;justify-content:space-between;gap:1rem;}
        .settings-pop-label{font-size:.9rem;font-weight:500;color:var(--heading);}
      `}</style>
    </div>
  )
}
