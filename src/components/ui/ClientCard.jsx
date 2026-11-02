import { useI18n } from '../../i18n/I18nContext'

/* Placeholder de cliente con monograma (no se usan logos de terceros). */
export default function ClientCard({ client }) {
  const { L } = useI18n()
  return (
    <div className="client-card panel">
      <span className="client-mono" aria-hidden="true">
        {client.initials}
      </span>
      <div className="client-info">
        <p className="client-name">{client.name}</p>
        <p className="client-industry t-muted">{L(client.industry)}</p>
      </div>

      <style>{`
        .client-card{display:flex;align-items:center;gap:1.4rem;padding:2rem 1.9rem;
          position:relative;overflow:hidden;}
        .client-card::before{content:'';position:absolute;inset:0 0 auto 0;height:3px;
          background:linear-gradient(90deg,var(--color-accent-500),var(--color-accent-300));}
        .client-mono{
          display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;
          width:68px;height:68px;border-radius:15px;font-family:var(--font-serif);
          font-weight:600;font-size:1.65rem;letter-spacing:.02em;
          color:#fff;background:linear-gradient(135deg,var(--color-navy-800),var(--color-navy-600));
          box-shadow:0 8px 20px -10px rgba(16,32,48,.5);
        }
        .client-info{min-width:0;}
        .client-name{font-weight:700;font-size:1.22rem;color:var(--heading);line-height:1.2;}
        .client-industry{font-size:.92rem;margin-top:.25rem;}
      `}</style>
    </div>
  )
}
