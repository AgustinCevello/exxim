import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BrandMark, Wordmark } from '../ui/Logo'
import Icon from '../ui/Icon'
import SettingsMenu, { SettingsPanel } from '../ui/SettingsMenu'
import { navLinks } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar el menú al navegar
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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
        <Link to="/" aria-label="Exxim Alliance — Inicio" style={{ flexShrink: 0, display: 'inline-flex' }}>
          {theme === 'dark' ? <Wordmark size="1.6rem" /> : <BrandMark height={30} />}
        </Link>

        {/* Links desktop */}
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className="nav-link">
                {t(l.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Acciones desktop */}
        <div className="nav-actions">
          <SettingsMenu />
          <Link to="/portal" className="btn btn-outline btn-sm">
            {t('cta.portal')}
          </Link>
          <Link to="/contacto" className="btn btn-primary btn-sm">
            {t('cta.quote')}
          </Link>
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
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className="mobile-link">
                  <span>{t(l.key)}</span>
                  <Icon name="chevron-right" size={18} />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-cta">
            <Link to="/portal" className="btn btn-outline" style={{ width: '100%' }}>
              {t('cta.portal')}
            </Link>
            <Link to="/contacto" className="btn btn-primary" style={{ width: '100%' }}>
              {t('cta.quote')}
            </Link>
          </div>

          <div className="mobile-settings">
            <SettingsPanel theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} t={t} />
          </div>
        </div>
      </div>

      <style>{`
        .nav-link{
          font-size:.93rem;font-weight:500;color:var(--text);padding:.4rem .1rem;
          position:relative;transition:color .18s ease;white-space:nowrap;
        }
        .nav-link:hover{color:var(--heading);}
        .nav-link.active{color:var(--accent);}
        .nav-link.active::after{
          content:'';position:absolute;left:0;right:0;bottom:-6px;height:2px;
          background:var(--color-accent-500);border-radius:2px;
        }
        .nav-links{
          display:none;list-style:none;margin:0;padding:0;gap:1.35rem;align-items:center;
          margin-left:.5rem;
        }
        .nav-actions{display:none;align-items:center;gap:.6rem;margin-left:auto;}
        .nav-burger{
          display:inline-flex;align-items:center;justify-content:center;margin-left:auto;
          width:44px;height:44px;border-radius:9px;border:1px solid var(--border);
          background:var(--surface);color:var(--heading);cursor:pointer;
        }

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
          display:flex;align-items:center;justify-content:space-between;
          padding:1rem .25rem;font-size:1.1rem;font-weight:500;color:var(--heading);
          border-bottom:1px solid var(--border-soft);
        }
        .mobile-link.active{color:var(--accent);}
        .mobile-cta{display:grid;gap:.6rem;margin-bottom:1.5rem;}
        .mobile-settings{
          border-top:1px solid var(--border-soft);padding-top:1.25rem;
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
