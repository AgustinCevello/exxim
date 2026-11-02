import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Logo'
import Icon from '../ui/Icon'
import ThemeToggle from '../ui/ThemeToggle'
import LangToggle from '../ui/LangToggle'
import SettingsMenu from '../ui/SettingsMenu'
import { navLinks } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: resalta en la navegación la sección visible.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Bloquear scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
        transition: 'box-shadow .25s ease',
      }}
    >
      <nav className="container-x" style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '72px' }}>
        <a href="#top" aria-label="Exxim Alliance — Inicio" className="nav-logo" onClick={() => setOpen(false)}>
          <Wordmark size="1.55rem" />
        </a>

        {/* Links desktop */}
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`nav-link ${active === l.id ? 'active' : ''}`}>
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones desktop */}
        <div className="nav-actions">
          <SettingsMenu />
          <Link to="/portal" className="btn btn-outline btn-sm">
            {t('cta.portal')}
          </Link>
          <a href="#contacto" className="btn btn-primary btn-sm">
            {t('cta.quote')}
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          className="nav-burger"
          aria-label={t('nav.menu')}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </nav>

      {/* Panel móvil */}
      <div className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-panel-inner">
          <ul className="mobile-links">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="mobile-link" onClick={() => setOpen(false)}>
                  <span>{t(l.key)}</span>
                  <Icon name="chevron-right" size={18} />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-cta">
            <Link to="/portal" className="btn btn-outline" style={{ width: '100%' }} onClick={() => setOpen(false)}>
              {t('cta.portal')}
            </Link>
            <a href="#contacto" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setOpen(false)}>
              {t('cta.quote')}
            </a>
          </div>

          <div className="mobile-settings">
            <div className="mobile-settings-row">
              <span className="mobile-settings-label">{t('settings.language')}</span>
              <LangToggle />
            </div>
            <div className="mobile-settings-row">
              <span className="mobile-settings-label">{t('settings.appearance')}</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-logo{flex-shrink:0;display:inline-flex;align-items:center;margin-right:.25rem;}
        .nav-link{
          font-family:var(--font-sans);font-size:1rem;font-weight:600;letter-spacing:-0.01em;
          color:var(--text);padding:.45rem .15rem;
          position:relative;transition:color .18s ease;white-space:nowrap;cursor:pointer;
        }
        .nav-link:hover{color:var(--heading);}
        .nav-link.active{color:var(--accent);}
        .nav-link::after{
          content:'';position:absolute;left:0;right:0;bottom:-5px;height:2px;
          background:var(--color-accent-500);border-radius:2px;
          transform:scaleX(0);transform-origin:left;transition:transform .22s ease;
        }
        .nav-link:hover::after{transform:scaleX(.5);}
        .nav-link.active::after{transform:scaleX(1);}
        .nav-links{
          display:none;list-style:none;margin:0;padding:0;gap:1.6rem;align-items:center;
          margin-inline:auto;
        }
        .nav-actions{display:none;align-items:center;gap:.6rem;flex-shrink:0;}
        .nav-burger{
          display:inline-flex;align-items:center;justify-content:center;margin-left:auto;
          width:44px;height:44px;border-radius:9px;border:1px solid var(--border);
          background:var(--surface);color:var(--heading);cursor:pointer;
          transition:border-color .16s ease, background .16s ease;
        }
        .nav-burger:hover{border-color:var(--color-accent-500);background:var(--surface-2);}

        /* Panel móvil */
        .mobile-panel{
          position:fixed;left:0;right:0;top:72px;bottom:0;background:var(--page);
          transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);
          overflow-y:auto;z-index:55;
        }
        .mobile-panel.is-open{transform:translateX(0);}
        .mobile-panel-inner{padding:1.25rem 1.25rem 2.5rem;max-width:560px;margin:0 auto;}
        .mobile-links{list-style:none;margin:0 0 1.25rem;padding:0;}
        .mobile-link{
          display:flex;align-items:center;justify-content:space-between;cursor:pointer;
          padding:1rem .25rem;font-size:1.1rem;font-weight:500;color:var(--heading);
          border-bottom:1px solid var(--border-soft);transition:color .16s ease;
        }
        .mobile-link:hover{color:var(--accent);}
        .mobile-cta{display:grid;gap:.6rem;margin-bottom:1.5rem;}
        .mobile-settings{
          border-top:1px solid var(--border-soft);padding-top:1.25rem;display:grid;gap:1rem;
        }
        .mobile-settings-row{display:flex;align-items:center;justify-content:space-between;}
        .mobile-settings-label{
          font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--text-muted);
        }

        @media (min-width:1000px){
          .nav-links{display:flex;}
          .nav-actions{display:flex;}
          .nav-burger{display:none;}
          .mobile-panel{display:none;}
        }
      `}</style>
    </header>
  )
}
