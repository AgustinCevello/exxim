import Icon from './Icon'
import { useI18n } from '../../i18n/I18nContext'

/* Tarjeta de servicio. variant: 'compact' | 'full' (con bullets). */
export default function ServiceCard({ service, variant = 'compact' }) {
  const { t, L } = useI18n()
  const full = variant === 'full'

  return (
    <article className={`svc-card panel ${full ? 'svc-card--full' : ''}`} id={full ? service.slug : undefined}>
      <div className="svc-head">
        <span className="svc-icon">
          <Icon name={service.icon} size={24} />
        </span>
        <span className="svc-tag">{L(service.tag)}</span>
      </div>

      <h3 className="svc-title">{L(service.title)}</h3>
      <p className="svc-text t-muted">{full ? L(service.description) : L(service.short)}</p>

      {full && (
        <>
          <p className="svc-includes">{t('servicespage.includes')}</p>
          <ul className="svc-bullets">
            {L(service.bullets).map((b) => (
              <li key={b}>
                <Icon name="check" size={16} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <style>{`
        .svc-card{padding:1.75rem;display:flex;flex-direction:column;height:100%;
          transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;}
        .svc-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift);border-color:var(--color-accent-300);}
        .svc-card--full{padding:2rem;scroll-margin-top:96px;}
        .svc-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.1rem;}
        .svc-icon{
          display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;
          border-radius:13px;background:var(--color-navy-900);color:#fff;
        }
        .svc-tag{
          font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
          color:var(--accent);background:var(--accent-soft);padding:.3rem .6rem;border-radius:999px;
        }
        .svc-title{font-size:1.22rem;margin-bottom:.6rem;}
        .svc-text{font-size:.96rem;line-height:1.62;margin-bottom:1.1rem;flex:1;}
        .svc-includes{
          font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--text-muted);margin-bottom:.7rem;
        }
        .svc-bullets{list-style:none;margin:0 0 .25rem;padding:0;display:grid;gap:.55rem;}
        .svc-bullets li{display:flex;gap:.55rem;align-items:flex-start;font-size:.92rem;color:var(--text);}
        .svc-bullets svg{color:var(--color-signal-green);flex-shrink:0;margin-top:2px;}
        .svc-link{margin-top:auto;}
      `}</style>
    </article>
  )
}
