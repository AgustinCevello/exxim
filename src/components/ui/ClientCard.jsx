import { useI18n } from '../../i18n/I18nContext'

/* Placeholder de cliente con monograma (no se usan logos de terceros). */
export default function ClientCard({ client }) {
  const { L } = useI18n()
  return (
    <div className="client-card panel">
      <span className="client-mono" aria-hidden="true">
        {client.initials}
      </span>
      <div>
        <p className="client-name">{client.name}</p>
        <p className="client-industry t-muted">{L(client.industry)}</p>
      </div>

      <style>{`
        .client-card{display:flex;align-items:center;gap:1.1rem;padding:1.4rem 1.6rem;}
        .client-mono{
          display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;
          width:56px;height:56px;border-radius:12px;font-family:var(--font-serif);
          font-weight:600;font-size:1.3rem;letter-spacing:.02em;
          color:#fff;background:linear-gradient(135deg,var(--color-navy-800),var(--color-navy-600));
        }
        .client-name{font-weight:600;font-size:1.08rem;color:var(--heading);}
        .client-industry{font-size:.88rem;margin-top:.1rem;}
      `}</style>
    </div>
  )
}
