import Icon from '../../components/ui/Icon'
import { accountSummary } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'
import { formatCurrency } from '../../lib/format'

export default function Account() {
  const { t, L, lang } = useI18n()
  const a = accountSummary
  const max = Math.max(...a.monthly.flatMap((m) => [m.honorarios, m.tributos]))

  const cards = [
    { label: t('acc.paidHonorarios'), value: a.paidHonorarios, icon: 'check-shield', tone: 'green' },
    { label: t('acc.paidTributos'), value: a.paidTributos, icon: 'check-shield', tone: 'green' },
    { label: t('acc.dueHonorarios'), value: a.dueHonorarios, icon: 'clock', tone: 'amber' },
    { label: t('acc.dueTributos'), value: a.dueTributos, icon: 'clock', tone: 'amber' },
  ]

  return (
    <div>
      <header className="page-intro">
        <h1 className="page-title">{t('acc.title')}</h1>
        <p className="t-muted">{t('acc.subtitle')}</p>
      </header>

      <div className="acc-cards">
        {cards.map((c) => (
          <div key={c.label} className="panel acc-card">
            <span className={`acc-card-icon acc-${c.tone}`}><Icon name={c.icon} size={20} /></span>
            <div>
              <p className="acc-card-label t-muted">{c.label}</p>
              <p className="acc-card-value">{formatCurrency(c.value, lang)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico */}
      <section className="panel acc-chart-card">
        <header className="acc-chart-head">
          <div>
            <h2 style={{ fontSize: '1.2rem' }}>{t('acc.chartTitle')}</h2>
            <p className="t-muted" style={{ fontSize: '.84rem', marginTop: '.15rem' }}>{t('acc.chartHint')}</p>
          </div>
          <div className="acc-legend">
            <span className="acc-leg"><span className="acc-leg-dot" style={{ background: '#e8742a' }} />{t('acc.legend.honorarios')}</span>
            <span className="acc-leg"><span className="acc-leg-dot" style={{ background: '#1d3f63' }} />{t('acc.legend.tributos')}</span>
          </div>
        </header>

        <div className="acc-chart" role="img"
          aria-label={`${t('acc.chartTitle')}: ${t('acc.legend.honorarios')} / ${t('acc.legend.tributos')}`}>
          {a.monthly.map((m) => (
            <div key={L(m.month)} className="acc-col">
              <div className="acc-bars">
                <div className="acc-bar acc-bar-h" style={{ height: `${(m.honorarios / max) * 100}%` }}>
                  <span className="acc-bar-tip">{formatCurrency(m.honorarios, lang)}</span>
                </div>
                <div className="acc-bar acc-bar-t" style={{ height: `${(m.tributos / max) * 100}%` }}>
                  <span className="acc-bar-tip">{formatCurrency(m.tributos, lang)}</span>
                </div>
              </div>
              <span className="acc-col-label">{L(m.month)}</span>
            </div>
          ))}
        </div>

        {/* Tabla de apoyo */}
        <div className="acc-table-wrap">
          <table className="acc-table">
            <thead>
              <tr>
                <th>{t('acc.tableMonth')}</th>
                <th>{t('acc.legend.honorarios')}</th>
                <th>{t('acc.legend.tributos')}</th>
              </tr>
            </thead>
            <tbody>
              {a.monthly.map((m) => (
                <tr key={L(m.month)}>
                  <td>{L(m.month)}</td>
                  <td>{formatCurrency(m.honorarios, lang)}</td>
                  <td>{formatCurrency(m.tributos, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
        .page-intro{margin-bottom:1.5rem;}
        .page-title{font-size:1.7rem;margin-bottom:.3rem;}
        .acc-cards{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;}
        .acc-card{padding:1.25rem;display:flex;gap:.85rem;align-items:center;}
        .acc-card-icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;
          border-radius:11px;flex-shrink:0;}
        .acc-green{background:rgba(46,158,107,.14);color:#1f7d52;}
        .acc-amber{background:rgba(224,163,58,.16);color:#9a6b12;}
        .acc-card-label{font-size:.8rem;}
        .acc-card-value{font-family:var(--font-serif);font-size:1.3rem;font-weight:600;color:var(--heading);
          margin-top:.15rem;font-variant-numeric:tabular-nums;}

        .acc-chart-card{padding:1.5rem;}
        .acc-chart-head{display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;align-items:flex-start;margin-bottom:1.75rem;}
        .acc-legend{display:flex;gap:1rem;}
        .acc-leg{display:inline-flex;align-items:center;gap:.4rem;font-size:.84rem;color:var(--text);}
        .acc-leg-dot{width:11px;height:11px;border-radius:3px;}

        .acc-chart{display:grid;grid-template-columns:repeat(6,1fr);gap:.5rem;align-items:end;
          height:220px;padding-bottom:.5rem;border-bottom:1px solid var(--border);}
        .acc-col{display:flex;flex-direction:column;align-items:center;gap:.5rem;height:100%;justify-content:flex-end;}
        .acc-bars{display:flex;gap:4px;align-items:flex-end;height:100%;width:100%;justify-content:center;}
        .acc-bar{width:36%;max-width:26px;border-radius:5px 5px 0 0;position:relative;min-height:4px;
          transition:filter .15s ease;}
        .acc-bar-h{background:linear-gradient(180deg,#ef8f4e,#e8742a);}
        .acc-bar-t{background:linear-gradient(180deg,#2b537d,#1d3f63);}
        .acc-bar:hover{filter:brightness(1.08);}
        .acc-bar-tip{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:6px;
          background:var(--color-navy-900);color:#fff;font-size:.72rem;font-weight:600;padding:.2rem .45rem;
          border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease;z-index:2;}
        .acc-bar:hover .acc-bar-tip{opacity:1;}
        .acc-col-label{font-size:.82rem;color:var(--text-muted);font-weight:500;}

        .acc-table-wrap{margin-top:1.5rem;overflow-x:auto;}
        .acc-table{width:100%;border-collapse:collapse;font-size:.9rem;}
        .acc-table th{text-align:left;font-size:.74rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
          color:var(--text-muted);padding:.6rem .75rem;border-bottom:1px solid var(--border);}
        .acc-table th:not(:first-child),.acc-table td:not(:first-child){text-align:right;font-variant-numeric:tabular-nums;}
        .acc-table td{padding:.65rem .75rem;border-bottom:1px solid var(--border-soft);color:var(--text);}
        .acc-table tbody tr:last-child td{border-bottom:0;}

        @media (min-width:640px){.acc-cards{grid-template-columns:repeat(4,1fr);}}
      `}</style>
    </div>
  )
}
