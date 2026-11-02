import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Logo'
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
          <Link to="/portal" className="btn btn-outline btn-sm">
            {t('cta.portal')}
          </Link>
          <a href="#contacto" className="btn btn-primary btn-sm">
            {t('cta.quote')}
          </a>
          <SettingsMenu />
        </div>

        {/* Botón hamburguesa animado (3 líneas → X) */}
        <button
          type="button"
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label={t('nav.menu')}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="burger-box" aria-hidden="true">
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </span>
        </button>
      </nav>

      {/* Scrim + panel móvil (drawer lateral derecho) */}
      <div
        className={`mobile-scrim ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-links" aria-label={t('nav.menu')}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`mobile-link ${active === l.id ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

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
      </aside>

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
          width:44px;height:44px;border-radius:10px;border:1px solid var(--border);
          background:var(--surface);color:var(--heading);cursor:pointer;
          transition:border-color .16s ease, background .16s ease;
        }
        .nav-burger:hover{border-color:var(--color-accent-500);background:var(--surface-2);}
        /* Ícono hamburguesa animado → X */
        .burger-box{position:relative;width:22px;height:16px;display:inline-block;}
        .burger-line{position:absolute;left:0;width:100%;height:2px;border-radius:2px;
          background:currentColor;
          transition:top .3s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1), opacity .2s ease;}
        .burger-line:nth-child(1){top:0;}
        .burger-line:nth-child(2){top:7px;}
        .burger-line:nth-child(3){top:14px;}
        .nav-burger.is-open .burger-line:nth-child(1){top:7px;transform:rotate(45deg);}
        .nav-burger.is-open .burger-line:nth-child(2){opacity:0;transform:scaleX(.2);}
        .nav-burger.is-open .burger-line:nth-child(3){top:7px;transform:rotate(-45deg);}

        /* Scrim + drawer lateral derecho */
        .mobile-scrim{position:fixed;left:0;right:0;top:72px;bottom:0;
          background:rgba(10,21,33,.5);z-index:54;
          opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s;}
        .mobile-scrim.is-open{opacity:1;visibility:visible;}
        .mobile-panel{
          position:fixed;top:72px;right:0;bottom:0;width:min(82vw,280px);
          background:var(--surface);border-left:1px solid var(--border);box-shadow:var(--shadow-lift);
          transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);
          overflow-y:auto;z-index:55;padding:1.4rem 1.25rem 1.75rem;
          display:flex;flex-direction:column;gap:1.25rem;
        }
        .mobile-panel.is-open{transform:translateX(0);}
        .mobile-links{display:flex;flex-direction:column;gap:.15rem;}
        .mobile-link{
          padding:.6rem .45rem;font-size:1.02rem;font-weight:600;color:var(--heading);
          border-radius:8px;cursor:pointer;transition:color .16s ease,background .16s ease;
        }
        .mobile-link:hover{color:var(--accent);background:var(--surface-2);}
        .mobile-link.active{color:var(--accent);}
        .mobile-cta{display:grid;gap:.6rem;}
        .mobile-settings{
          border-top:1px solid var(--border-soft);padding-top:1.25rem;display:grid;gap:1rem;
          margin-top:auto;
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
