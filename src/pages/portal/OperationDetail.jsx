import { Link, useParams } from 'react-router-dom'
import Icon from '../../components/ui/Icon'
import StatusBadge from '../../components/portal/StatusBadge'
import Timeline from '../../components/portal/Timeline'
import TrackingMap from '../../components/portal/TrackingMap'
import CostBreakdown from '../../components/portal/CostBreakdown'
import { operations } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'

export default function OperationDetail() {
  const { id } = useParams()
  const { t, L } = useI18n()
  const op = operations.find((o) => o.id === id)

  if (!op) {
    return (
      <div className="panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <p className="t-muted">{t('opd.notFound')}</p>
        <Link to="/portal/operaciones" className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>
          {t('opd.back')}
        </Link>
      </div>
    )
  }

  const typeLabel = op.type === 'import' ? t('ops.type.import') : t('ops.type.export')

  const overview = [
    { label: t('opd.type'), value: typeLabel },
    { label: t('opd.merchandise'), value: L(op.merchandise) },
    { label: t('opd.origin'), value: L(op.originCity) },
    { label: t('opd.destination'), value: L(op.destinationCity) },
    { label: t('opd.incoterm'), value: op.incoterm },
  ]

  return (
    <div>
      <Link to="/portal/operaciones" className="opd-back">
        <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
        {t('opd.back')}
      </Link>

      {/* Header */}
      <div className="opd-header">
        <div>
          <div className="opd-id-row">
            <span className="opd-id">{op.id}</span>
            <StatusBadge status={op.status} />
          </div>
          <h1 className="opd-title">{L(op.merchandise)}</h1>
          <p className="opd-route t-muted">
            {L(op.originCity)} <Icon name="arrow-right" size={14} /> {L(op.destinationCity)}
          </p>
        </div>
        <div className="opd-eta">
          <Icon name="clock" size={17} />
          <span>{L(op.eta)}</span>
        </div>
      </div>

      {/* Overview */}
      <div className="panel opd-overview">
        {overview.map((o) => (
          <div key={o.label} className="opd-ov-item">
            <p className="opd-ov-label">{o.label}</p>
            <p className="opd-ov-value">{o.value}</p>
          </div>
        ))}
      </div>

      {/* Timeline + Map */}
      <div className="opd-grid">
        <Card title={t('opd.timelineTitle')} hint={t('opd.timelineHint')} icon="route">
          <Timeline operation={op} />
        </Card>
        <Card title={t('opd.mapTitle')} hint={t('opd.mapHint')} icon="map-pin">
          <TrackingMap operation={op} />
        </Card>
      </div>

      {/* Costs + Docs */}
      <div className="opd-grid">
        <Card title={t('opd.costsTitle')} hint={t('opd.costsHint')} icon="scale">
          <CostBreakdown operation={op} />
        </Card>
        <Card title={t('opd.docsTitle')} hint={t('opd.docsHint')} icon="file">
          <ul className="docs-list">
            {op.documents.map((d, i) => (
              <li key={i} className="doc-row">
                <span className="doc-info">
                  <span className="doc-icon"><Icon name="file" size={18} /></span>
                  <span className="doc-name">{L(d.name)}</span>
                </span>
                {d.ready ? (
                  <button type="button" className="doc-dl">
                    <Icon name="download" size={16} /> {t('opd.download')}
                  </button>
                ) : (
                  <span className="doc-pending">{t('opd.docPending')}</span>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <style>{`
        .opd-back{display:inline-flex;align-items:center;gap:.4rem;color:var(--text-muted);
          font-size:.9rem;font-weight:500;margin-bottom:1.25rem;}
        .opd-back:hover{color:var(--accent);}
        .opd-header{display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;
          align-items:flex-start;margin-bottom:1.5rem;}
        .opd-id-row{display:flex;align-items:center;gap:.75rem;margin-bottom:.5rem;}
        .opd-id{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-weight:600;
          font-size:.85rem;color:var(--accent);}
        .opd-title{font-size:1.6rem;}
        .opd-route{display:flex;align-items:center;gap:.4rem;margin-top:.4rem;font-size:.95rem;}
        .opd-eta{display:inline-flex;align-items:center;gap:.5rem;padding:.6rem .9rem;border-radius:10px;
          background:var(--accent-soft);color:var(--color-accent-700);font-weight:600;font-size:.88rem;}
        :root[data-theme='dark'] .opd-eta{color:var(--color-accent-400);}

        .opd-overview{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);
          overflow:hidden;padding:0;margin-bottom:1.5rem;}
        .opd-ov-item{background:var(--surface);padding:1.1rem 1.25rem;}
        .opd-ov-label{font-size:.75rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
          color:var(--text-muted);margin-bottom:.3rem;}
        .opd-ov-value{color:var(--heading);font-weight:500;font-size:.96rem;}

        .opd-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:1.5rem;}

        .docs-list{list-style:none;margin:0;padding:0;display:grid;gap:.6rem;}
        .doc-row{display:flex;align-items:center;justify-content:space-between;gap:.75rem;
          padding:.8rem .9rem;border:1px solid var(--border);border-radius:10px;background:var(--surface-2);}
        .doc-info{display:flex;align-items:center;gap:.7rem;min-width:0;}
        .doc-icon{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;
          border-radius:8px;background:var(--surface);color:var(--color-navy-600);border:1px solid var(--border);flex-shrink:0;}
        .doc-name{font-size:.93rem;color:var(--heading);font-weight:500;overflow:hidden;text-overflow:ellipsis;}
        .doc-dl{display:inline-flex;align-items:center;gap:.35rem;background:none;border:0;cursor:pointer;
          color:var(--accent);font-weight:600;font-size:.86rem;white-space:nowrap;}
        .doc-dl:hover{text-decoration:underline;}
        .doc-pending{font-size:.78rem;color:var(--text-muted);border:1px dashed var(--border);
          padding:.25rem .55rem;border-radius:7px;white-space:nowrap;}

        @media (min-width:400px){.opd-overview{grid-template-columns:repeat(3,1fr);}}
        @media (min-width:900px){
          .opd-grid{grid-template-columns:1fr 1fr;align-items:start;}
          .opd-overview{grid-template-columns:repeat(5,1fr);}
        }
      `}</style>
    </div>
  )
}

function Card({ title, hint, icon, children }) {
  return (
    <section className="panel opd-card" style={{ padding: '1.5rem' }}>
      <header style={{ display: 'flex', gap: '.7rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38,
          borderRadius: 10, background: 'var(--accent-soft)', color: 'var(--color-accent-600)', flexShrink: 0,
        }}>
          <Icon name={icon} size={19} />
        </span>
        <div>
          <h2 style={{ fontSize: '1.15rem' }}>{title}</h2>
          {hint && <p className="t-muted" style={{ fontSize: '.82rem', marginTop: '.15rem' }}>{hint}</p>}
        </div>
      </header>
      {children}
    </section>
  )
}
