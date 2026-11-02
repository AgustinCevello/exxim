import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../../components/ui/Icon'
import { Wordmark } from '../../components/ui/Logo'
import MaritimeBackdrop from '../../components/ui/MaritimeBackdrop'
import SettingsMenu from '../../components/ui/SettingsMenu'
import { useAuth } from '../../context/AuthContext'
import { useI18n } from '../../i18n/I18nContext'

function MicrosoftLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 21 21" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  )
}

export default function Login() {
  const { t } = useI18n()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (login(user, password)) {
      navigate('/portal/operaciones')
    } else {
      setError(true)
    }
  }

  return (
    <div className="login-wrap">
      {/* Panel de marca */}
      <aside className="login-brand">
        <MaritimeBackdrop opacity={0.6} />
        <div className="login-brand-inner">
          <Link to="/" aria-label="Exxim Alliance">
            <Wordmark dark size="2rem" />
          </Link>
          <div>
            <span className="eyebrow eyebrow--light">{t('login.badge')}</span>
            <h1 className="login-brand-title">{t('login.title')}</h1>
            <p className="login-brand-text">{t('login.subtitle')}</p>
          </div>
          <Link to="/" className="login-back">
            <Icon name="arrow-right" size={15} style={{ transform: 'rotate(180deg)' }} />
            {t('login.backToSite')}
          </Link>
        </div>
      </aside>

      {/* Formulario */}
      <main className="login-main">
        <div className="login-topbar">
          <SettingsMenu />
        </div>

        <div className="login-card-wrap">
          <form className="login-card" onSubmit={onSubmit} noValidate>
            <div className="login-card-head">
              <Wordmark size="1.6rem" />
              <h2 className="login-card-title">{t('login.title')}</h2>
            </div>

            <button type="button" className="btn ms-btn">
              <MicrosoftLogo />
              {t('login.microsoft')}
            </button>

            <div className="login-divider"><span>{t('login.or')}</span></div>

            <div className="field">
              <label>{t('login.user')}</label>
              <input
                className="input"
                type="text"
                value={user}
                onChange={(e) => { setUser(e.target.value); setError(false) }}
                autoComplete="username"
                placeholder="admin"
              />
            </div>
            <div className="field" style={{ marginTop: '.9rem' }}>
              <label>{t('login.password')}</label>
              <div className="input-icon">
                <Icon name="lock" size={16} />
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false) }}
                  autoComplete="current-password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <p className="login-error">
                <Icon name="close" size={15} /> {t('login.error')}
              </p>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.25rem' }}>
              {t('login.submit')}
              <Icon name="arrow-right" size={16} />
            </button>
          </form>
        </div>
      </main>

      <style>{`
        .login-wrap{display:grid;grid-template-columns:1fr;min-height:100vh;background:var(--page);}
        .login-brand{position:relative;overflow:hidden;background:var(--color-navy-950);display:none;}
        .login-brand-inner{position:relative;z-index:2;height:100%;padding:3rem;display:flex;
          flex-direction:column;justify-content:space-between;gap:2rem;}
        .login-brand-title{color:#fff;font-size:2.4rem;margin-top:1rem;line-height:1.1;}
        .login-brand-text{color:rgba(226,235,243,.82);margin-top:1rem;font-size:1.05rem;max-width:24rem;}
        .login-back{display:inline-flex;align-items:center;gap:.45rem;color:rgba(226,235,243,.8);
          font-size:.9rem;font-weight:500;}
        .login-back:hover{color:#fff;}

        .login-main{display:flex;flex-direction:column;}
        .login-topbar{display:flex;justify-content:flex-end;align-items:center;gap:.6rem;padding:1.25rem 1.5rem 0;}
        .login-card-wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:1.5rem;}
        .login-card{width:100%;max-width:420px;}
        .login-card-head{margin-bottom:1.5rem;}
        .login-card-title{font-size:1.5rem;margin-top:.9rem;}
        .ms-btn{width:100%;background:var(--surface);border:1px solid var(--border);color:var(--heading);}
        .ms-btn:hover{background:var(--surface-2);}
        .login-divider{display:flex;align-items:center;gap:.9rem;margin:1.25rem 0;color:var(--text-muted);font-size:.82rem;}
        .login-divider::before,.login-divider::after{content:'';flex:1;height:1px;background:var(--border);}
        .field label{display:block;font-size:.85rem;font-weight:600;color:var(--heading);margin-bottom:.4rem;}
        .input{width:100%;padding:.75rem .85rem;border:1px solid var(--border);border-radius:9px;
          background:var(--surface-2);color:var(--heading);font-size:.95rem;font-family:inherit;}
        .input:focus{outline:none;border-color:var(--color-accent-500);
          box-shadow:0 0 0 3px rgba(232,116,42,.16);background:var(--surface);}
        .input-icon{position:relative;}
        .input-icon svg{position:absolute;left:.8rem;top:50%;transform:translateY(-50%);color:var(--text-muted);}
        .input-icon .input{padding-left:2.3rem;}
        .login-error{display:flex;align-items:center;gap:.4rem;color:var(--color-signal-red);font-size:.88rem;
          margin-top:.9rem;background:rgba(210,84,75,.1);padding:.6rem .8rem;border-radius:8px;}
        @media (min-width:900px){
          .login-wrap{grid-template-columns:1.05fr 1fr;}
          .login-brand{display:block;}
        }
      `}</style>
    </div>
  )
}
