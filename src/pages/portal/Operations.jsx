import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../components/ui/Icon'
import StatusBadge from '../../components/portal/StatusBadge'
import { operations, operationStatuses } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'
import { formatDate } from '../../lib/format'

export default function Operations() {
  const { t, L, lang } = useI18n()
  const navigate = useNavigate()
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')
  const [query, setQuery] = useState('')

  const summary = useMemo(() => {
    let active = 0, completed = 0, attention = 0
    operations.forEach((o) => {
      if (o.status === 'demorada') attention += 1
      else if (o.status === 'entregada') completed += 1
      else active += 1
    })
    return { active, completed, attention, total: operations.length }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return operations.filter((o) => {
      if (status !== 'all' && o.status !== status) return false
      if (type !== 'all' && o.type !== type) return false
      if (q) {
        const hay = `${o.id} ${L(o.merchandise)} ${L(o.originCity)} ${L(o.destinationCity)}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [status, type, query, L])

  const typeLabel = (ty) => (ty === 'import' ? t('ops.type.import') : t('ops.type.export'))

  return (
    <div>
      <header className="page-intro">
        <h1 className="page-title">{t('ops.title')}</h1>
        <p className="t-muted">{t('ops.subtitle')}</p>
      </header>

      {/* Resumen */}
      <div className="ops-summary">
        <SummaryCard icon="box" value={summary.total} label={t('ops.summary.total')} tone="navy" />
        <SummaryCard icon="route" value={summary.active} label={t('ops.summary.active')} tone="amber" />
        <SummaryCard icon="check-shield" value={summary.completed} label={t('ops.summary.completed')} tone="green" />
        <SummaryCard icon="bell" value={summary.attention} label={t('ops.summary.attention')} tone="red" />
      </div>

      {/* Filtros */}
      <div className="ops-filters panel">
        <div className="filter-field">
          <Icon name="filter" size={16} />
          <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label={t('ops.filter.status')}>
            <option value="all">{t('ops.filter.status')}: {t('ops.filter.all')}</option>
            {Object.keys(operationStatuses).map((k) => (
              <option key={k} value={k}>{L(operationStatuses[k].label)}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <select value={type} onChange={(e) => setType(e.target.value)} aria-label={t('ops.filter.type')}>
            <option value="all">{t('ops.filter.type')}: {t('ops.filter.all')}</option>
            <option value="import">{t('ops.type.import')}</option>
            <option value="export">{t('ops.type.export')}</option>
          </select>
        </div>
        <div className="filter-field filter-search">
          <Icon name="search" size={16} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('ops.filter.search')}
          />
        </div>
      </div>

      {/* Tabla (desktop) */}
      <div className="ops-table-wrap panel">
        <table className="ops-table">
          <thead>
            <tr>
              <th>{t('ops.col.id')}</th>
              <th>{t('ops.col.type')}</th>
              <th>{t('ops.col.route')}</th>
              <th>{t('ops.col.status')}</th>
              <th>{t('ops.col.updated')}</th>
              <th aria-hidden="true"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} onClick={() => navigate(`/portal/operaciones/${o.id}`)} tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/portal/operaciones/${o.id}`)}>
                <td><span className="ops-id">{o.id}</span></td>
                <td>
                  <span className={`ops-type ops-type--${o.type}`}>
                    <Icon name={o.type === 'import' ? 'download' : 'arrow-up-right'} size={14} />
                    {typeLabel(o.type)}
                  </span>
                </td>
                <td className="ops-route">
                  <span className="ops-route-inner">{L(o.originCity)} <Icon name="arrow-right" size={13} /> {L(o.destinationCity)}</span>
                </td>
                <td><StatusBadge status={o.status} /></td>
                <td className="t-muted">{formatDate(o.updatedAt, lang)}</td>
                <td><Icon name="chevron-right" size={18} className="ops-chevron" /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Cards (mobile) */}
        <div className="ops-cards">
          {filtered.map((o) => (
            <button key={o.id} className="ops-card" onClick={() => navigate(`/portal/operaciones/${o.id}`)}>
              <div className="ops-card-top">
                <span className="ops-id">{o.id}</span>
                <StatusBadge status={o.status} />
              </div>
              <p className="ops-card-route">{L(o.originCity)} <Icon name="arrow-right" size={13} /> {L(o.destinationCity)}</p>
              <div className="ops-card-foot">
                <span className={`ops-type ops-type--${o.type}`}>
                  <Icon name={o.type === 'import' ? 'download' : 'arrow-up-right'} size={14} />
                  {typeLabel(o.type)}
                </span>
                <span className="t-muted">{formatDate(o.updatedAt, lang)}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && <p className="ops-empty t-muted">{t('ops.empty')}</p>}
      </div>

      <style>{`
        .page-intro{margin-bottom:1.5rem;}
        .page-title{font-size:1.7rem;margin-bottom:.3rem;}
        .ops-summary{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;}
        .ops-filters{display:flex;flex-wrap:wrap;gap:.75rem;padding:.85rem;margin-bottom:1.25rem;}
        .filter-field{display:flex;align-items:center;gap:.5rem;background:var(--surface-2);
          border:1px solid var(--border);border-radius:9px;padding:.1rem .7rem;color:var(--text-muted);
          transition:border-color .16s ease, box-shadow .16s ease;}
        .filter-field:focus-within{border-color:var(--color-accent-500);
          box-shadow:0 0 0 3px rgba(232,116,42,.14);}
        .filter-field select,.filter-field input{border:0;background:transparent;color:var(--heading);
          font-size:.9rem;font-family:inherit;padding:.55rem 0;outline:none;min-width:0;}
        .filter-field select{appearance:none;-webkit-appearance:none;cursor:pointer;
          padding-right:1.4rem;font-weight:500;
          background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235a6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>");
          background-repeat:no-repeat;background-position:right center;}
        .filter-search{flex:1;min-width:180px;}
        .filter-search input{width:100%;}

        .ops-table-wrap{padding:0;overflow:hidden;}
        .ops-table{width:100%;border-collapse:collapse;display:none;}
        .ops-table th{text-align:left;font-size:.75rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
          color:var(--text-muted);padding:1rem 1.25rem;border-bottom:1px solid var(--border);}
        .ops-table td{padding:1rem 1.25rem;border-bottom:1px solid var(--border-soft);font-size:.92rem;vertical-align:middle;}
        .ops-table tbody tr{cursor:pointer;transition:background .14s ease;}
        .ops-table tbody tr:hover{background:var(--surface-2);}
        .ops-table tbody tr:last-child td{border-bottom:0;}
        .ops-id{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-weight:600;color:var(--heading);font-size:.88rem;}
        .ops-type{display:inline-flex;align-items:center;gap:.35rem;font-size:.82rem;font-weight:600;padding:.25rem .55rem;border-radius:7px;}
        .ops-type--import{background:rgba(43,83,125,.12);color:var(--color-navy-600);}
        .ops-type--export{background:rgba(232,116,42,.12);color:var(--color-accent-700);}
        :root[data-theme='dark'] .ops-type--import{color:#7ba0c7;}
        :root[data-theme='dark'] .ops-type--export{color:var(--color-accent-400);}
        .ops-route{color:var(--text);}
        .ops-route-inner{display:inline-flex;align-items:center;gap:.4rem;flex-wrap:wrap;}
        .ops-route-inner svg{color:var(--text-muted);flex-shrink:0;}
        .ops-chevron{color:var(--text-muted);}

        .ops-cards{display:grid;gap:.9rem;padding:.9rem;}
        .ops-card{text-align:left;background:var(--surface-2);border:1px solid var(--border);border-radius:12px;
          padding:1rem;cursor:pointer;display:grid;gap:.6rem;}
        .ops-card-top{display:flex;align-items:center;justify-content:space-between;gap:.5rem;}
        .ops-card-route{display:flex;align-items:center;gap:.4rem;color:var(--heading);font-weight:500;font-size:.95rem;}
        .ops-card-route svg{color:var(--text-muted);}
        .ops-card-foot{display:flex;align-items:center;justify-content:space-between;font-size:.82rem;}
        .ops-empty{text-align:center;padding:2.5rem 1rem;}

        @media (min-width:560px){.ops-summary{grid-template-columns:repeat(4,1fr);}}
        @media (min-width:860px){
          .ops-table{display:table;}
          .ops-cards{display:none;}
        }
      `}</style>
    </div>
  )
}

function SummaryCard({ icon, value, label, tone }) {
  const tones = {
    navy: { bg: 'var(--color-navy-900)', fg: '#fff' },
    amber: { bg: 'rgba(224,163,58,.16)', fg: '#9a6b12' },
    green: { bg: 'rgba(46,158,107,.14)', fg: '#1f7d52' },
    red: { bg: 'rgba(210,84,75,.14)', fg: '#b23a31' },
  }
  const c = tones[tone] || tones.navy
  return (
    <div className="panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '.9rem' }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 44, height: 44, borderRadius: 11, background: c.bg, color: c.fg, flexShrink: 0,
      }}>
        <Icon name={icon} size={22} />
      </span>
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--heading)', lineHeight: 1 }}>{value}</p>
        <p className="t-muted" style={{ fontSize: '.82rem', marginTop: '.2rem' }}>{label}</p>
      </div>
    </div>
  )
}
