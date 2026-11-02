import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom'
import Icon from '../ui/Icon'
import { Wordmark } from '../ui/Logo'
import SettingsMenu from '../ui/SettingsMenu'
import { useAuth } from '../../context/AuthContext'
import { useI18n } from '../../i18n/I18nContext'
import { demoClient } from '../../data/portal'

const items = [
  { to: '/portal/operaciones', key: 'portal.nav.operations', icon: 'grid' },
  { to: '/portal/cuenta', key: 'portal.nav.account', icon: 'wallet' },
  { to: '/portal/asesor', key: 'portal.nav.advisor', icon: 'user' },
  { to: '/portal/ayuda', key: 'portal.nav.help', icon: 'life-buoy' },
]

export default function PortalLayout() {
  const { authed, logout } = useAuth()
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const [drawer, setDrawer] = useState(false)

  useEffect(() => setDrawer(false), [location.pathname])

  if (!authed) return <Navigate to="/portal" replace />

  const onLogout = () => {
    logout()
    navigate('/portal')
  }

  // En el tablero, "atrás" lleva al sitio público; en el resto, al paso previo.
  const onBack = () => {
    if (location.pathname === '/portal/operaciones') navigate('/')
    else navigate(-1)
  }

  return (
    <div className="portal">
      <div className="portal-body">
        {/* Sidebar */}
        <aside className={`portal-side ${drawer ? 'is-open' : ''}`}>
          <div className="portal-side-top">
            <Link to="/portal/operaciones" aria-label="Exxim"><Wordmark size="1.5rem" /></Link>
            <button className="portal-side-close" onClick={() => setDrawer(false)} aria-label="Cerrar">
              <Icon name="close" size={22} />
            </button>
          </div>

          <div className="portal-client">
            <span className="portal-client-avatar">{initials(demoClient.company)}</span>
            <div>
              <p className="portal-client-name">{demoClient.company}</p>
              <p className="portal-client-role t-muted">{t('portal.account')}</p>
            </div>
          </div>

          <nav className="portal-nav">
            {items.map((it) => (
              <NavLink key={it.to} to={it.to} className="portal-nav-link">
                <Icon name={it.icon} size={20} />
                <span>{t(it.key)}</span>
              </NavLink>
            ))}
          </nav>

          <div className="portal-side-foot">
            <Link to="/" className="portal-foot-link">
              <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
              {t('portal.backToSite')}
            </Link>
            <button className="portal-foot-link" onClick={onLogout}>
              <Icon name="logout" size={18} />
              {t('portal.logout')}
            </button>
          </div>
        </aside>

        {drawer && <div className="portal-scrim" onClick={() => setDrawer(false)} />}

        {/* Contenido */}
        <div className="portal-main">
          <header className="portal-topbar">
            <button className="portal-burger" onClick={() => setDrawer(true)} aria-label={t('nav.menu')}>
              <Icon name="menu" size={22} />
            </button>
            <button className="portal-back" onClick={onBack} aria-label={t('opd.back')} title={t('opd.back')}>
              <Icon name="arrow-left" size={18} />
            </button>
            <p className="portal-greeting">
              <span className="t-muted">{t('portal.greeting')},</span>{' '}
              <strong>{demoClient.company}</strong>
            </p>
            <div className="portal-topbar-actions">
              <SettingsMenu />
              <button className="portal-logout-btn" onClick={onLogout} aria-label={t('portal.logout')}>
                <Icon name="logout" size={18} />
              </button>
            </div>
          </header>

          <div className="portal-content">
            <div className="route-fade" key={location.pathname}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portal{min-height:100vh;display:flex;flex-direction:column;background:var(--page-alt);width:100%;}
        .portal-body{flex:1;display:flex;position:relative;}

        .portal-side{
          position:fixed;top:0;left:0;bottom:0;width:264px;z-index:60;background:var(--surface);
          border-right:1px solid var(--border);display:flex;flex-direction:column;padding:1.25rem;
          transform:translateX(-100%);transition:transform .28s ease;
        }
        .portal-side.is-open{transform:translateX(0);box-shadow:var(--shadow-lift);}
        .portal-side-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;}
        .portal-side-close{background:none;border:0;color:var(--text);cursor:pointer;}
        .portal-client{display:flex;align-items:center;gap:.7rem;padding:.9rem;border-radius:12px;
          background:var(--surface-2);margin-bottom:1.25rem;}
        .portal-client-avatar{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;
          border-radius:10px;background:var(--color-navy-900);color:#fff;font-weight:700;font-size:.9rem;flex-shrink:0;}
        .portal-client-name{font-weight:600;font-size:.92rem;color:var(--heading);line-height:1.2;}
        .portal-client-role{font-size:.78rem;margin-top:.1rem;}
        .portal-nav{display:flex;flex-direction:column;gap:.3rem;flex:1;}
        .portal-nav-link{display:flex;align-items:center;gap:.75rem;padding:.7rem .8rem;border-radius:9px;
          color:var(--text);font-weight:500;font-size:.95rem;transition:background .15s ease,color .15s ease;}
        .portal-nav-link:hover{background:var(--surface-2);color:var(--heading);}
        .portal-nav-link.active{background:var(--color-navy-900);color:#fff;}
        :root[data-theme='dark'] .portal-nav-link.active{background:var(--color-navy-700);}
        .portal-side-foot{display:flex;flex-direction:column;gap:.25rem;padding-top:1rem;
          border-top:1px solid var(--border-soft);}
        .portal-foot-link{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;border-radius:9px;
          color:var(--text-muted);font-size:.9rem;font-weight:500;background:none;border:0;cursor:pointer;
          width:100%;text-align:left;}
        .portal-foot-link:hover{color:var(--accent);background:var(--surface-2);}
        .portal-scrim{position:fixed;inset:0;background:rgba(10,21,33,.5);z-index:55;}

        .portal-main{flex:1;min-width:0;display:flex;flex-direction:column;}
        .portal-topbar{position:sticky;top:0;z-index:35;display:flex;align-items:center;gap:1rem;
          padding:.85rem 1.25rem;background:var(--surface);border-bottom:1px solid var(--border);}
        .portal-burger{display:inline-flex;background:none;border:0;color:var(--heading);cursor:pointer;}
        .portal-back{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;
          border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--heading);
          cursor:pointer;flex-shrink:0;transition:border-color .16s ease,background .16s ease,color .16s ease;}
        .portal-back:hover{border-color:var(--color-accent-500);color:var(--accent);background:var(--surface-2);}
        .portal-greeting{font-size:.95rem;color:var(--heading);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
        .portal-topbar-actions{margin-left:auto;display:flex;align-items:center;gap:.6rem;}
        .portal-logout-btn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;
          border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;}
        .portal-logout-btn:hover{color:var(--color-signal-red);border-color:var(--color-signal-red);}
        .portal-content{padding:1.5rem 1.25rem 3rem;flex:1;width:100%;max-width:1160px;margin:0 auto;}

        @media (min-width:1000px){
          .portal-side{position:sticky;transform:none;height:calc(100vh - 0px);top:0;}
          .portal-side-close,.portal-burger{display:none;}
          .portal-scrim{display:none;}
          .portal-content{padding:2rem 2rem 3.5rem;}
        }
      `}</style>
    </div>
  )
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}
