import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { advisor } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'

export default function Advisor() {
  const { t, L } = useI18n()
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const onSend = (e) => {
    e.preventDefault()
    if (!msg.trim()) return
    setSent(true)
    setMsg('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div>
      <header className="page-intro">
        <h1 className="page-title">{t('adv.title')}</h1>
        <p className="t-muted">{t('adv.subtitle')}</p>
      </header>

      <div className="adv-layout">
        {/* Tarjeta del asesor */}
        <section className="panel adv-card">
          <div className="adv-top">
            <span className="adv-avatar">{advisor.initials}</span>
            <div>
              <h2 className="adv-name">{advisor.name}</h2>
              <p className="adv-role">{L(advisor.role)}</p>
              <p className="t-muted" style={{ fontSize: '.84rem', marginTop: '.25rem' }}>{L(advisor.since)}</p>
            </div>
          </div>
          <p className="adv-blurb">{L(advisor.blurb)}</p>
          <div className="adv-actions">
            <a href={`tel:${advisor.phone.replace(/\s/g, '')}`} className="adv-btn">
              <Icon name="phone" size={18} /><span>{t('adv.call')}</span>
            </a>
            <a href={`mailto:${advisor.email}`} className="adv-btn">
              <Icon name="mail" size={18} /><span>{t('adv.email')}</span>
            </a>
            <a href={advisor.whatsappHref} target="_blank" rel="noreferrer" className="adv-btn">
              <Icon name="whatsapp" size={18} /><span>{t('adv.whatsapp')}</span>
            </a>
          </div>
          <ul className="adv-contact-list">
            <li><Icon name="mail" size={16} /><a href={`mailto:${advisor.email}`}>{advisor.email}</a></li>
            <li><Icon name="phone" size={16} /><span>{advisor.phone}</span></li>
            <li><Icon name="whatsapp" size={16} /><span>{advisor.whatsapp}</span></li>
          </ul>
        </section>

        {/* Mensaje directo */}
        <section className="panel adv-msg">
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{t('adv.contactTitle')}</h2>
          <form onSubmit={onSend}>
            <textarea
              className="adv-textarea"
              rows={6}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={t('adv.messagePlaceholder')}
            />
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              <Icon name="send" size={17} /> {t('adv.send')}
            </button>
          </form>
          {sent && (
            <p className="adv-sent">
              <Icon name="check" size={16} /> {t('adv.sent')}
            </p>
          )}
        </section>
      </div>

      <style>{`
        .page-intro{margin-bottom:1.5rem;}
        .page-title{font-size:1.7rem;margin-bottom:.3rem;}
        .adv-layout{display:grid;grid-template-columns:1fr;gap:1.5rem;align-items:start;}
        .adv-card{padding:1.75rem;}
        .adv-top{display:flex;gap:1.1rem;align-items:center;margin-bottom:1.25rem;}
        .adv-avatar{display:inline-flex;align-items:center;justify-content:center;width:68px;height:68px;
          border-radius:16px;font-family:var(--font-serif);font-size:1.7rem;font-weight:600;color:#fff;flex-shrink:0;
          background:linear-gradient(135deg,var(--color-navy-800),var(--color-navy-600));}
        .adv-name{font-size:1.3rem;}
        .adv-role{color:var(--accent);font-weight:600;font-size:.9rem;margin-top:.15rem;}
        .adv-blurb{color:var(--text);font-size:.96rem;line-height:1.65;margin-bottom:1.25rem;}
        .adv-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin-bottom:1.25rem;}
        .adv-btn{display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:.8rem .4rem;
          border:1px solid var(--border);border-radius:11px;background:var(--surface-2);color:var(--heading);
          font-size:.82rem;font-weight:600;transition:all .15s ease;}
        .adv-btn:hover{border-color:var(--color-accent-500);color:var(--accent);}
        .adv-btn svg{color:var(--color-accent-600);}
        .adv-contact-list{list-style:none;margin:0;padding:1.1rem 0 0;border-top:1px solid var(--border-soft);
          display:grid;gap:.65rem;}
        .adv-contact-list li{display:flex;align-items:center;gap:.6rem;font-size:.9rem;color:var(--text);}
        .adv-contact-list svg{color:var(--text-muted);}
        .adv-contact-list a{color:var(--accent);}

        .adv-msg{padding:1.75rem;}
        .adv-textarea{width:100%;padding:.85rem;border:1px solid var(--border);border-radius:11px;
          background:var(--surface-2);color:var(--heading);font-family:inherit;font-size:.95rem;resize:vertical;}
        .adv-textarea:focus{outline:none;border-color:var(--color-accent-500);
          box-shadow:0 0 0 3px rgba(232,116,42,.16);background:var(--surface);}
        .adv-sent{display:flex;align-items:center;gap:.4rem;margin-top:1rem;color:var(--color-signal-green);
          font-size:.9rem;font-weight:500;background:rgba(46,158,107,.12);padding:.6rem .8rem;border-radius:9px;}

        @media (min-width:860px){.adv-layout{grid-template-columns:1.1fr 1fr;}}
      `}</style>
    </div>
  )
}
