import { useI18n } from '../../i18n/I18nContext'
import { formatCurrency } from '../../lib/format'

const groupOrder = ['honorarios', 'tributos', 'terceros']

export default function CostBreakdown({ operation }) {
  const { t, L, lang } = useI18n()

  const groups = groupOrder
    .map((g) => ({
      key: g,
      items: operation.costs.filter((c) => c.type === g),
    }))
    .filter((g) => g.items.length > 0)

  const total = operation.costs.reduce((s, c) => s + c.amount, 0)

  return (
    <div className="costs">
      {groups.map((g) => {
        const subtotal = g.items.reduce((s, c) => s + c.amount, 0)
        return (
          <div key={g.key} className="cost-group">
            <div className="cost-group-head">
              <span className={`cost-tag cost-tag--${g.key}`}>{t(`opd.costs.${g.key}`)}</span>
              <span className="cost-subtotal">
                {t('opd.costs.subtotal')}: <strong>{formatCurrency(subtotal, lang)}</strong>
              </span>
            </div>
            <ul className="cost-list">
              {g.items.map((c, i) => (
                <li key={i} className="cost-row">
                  <span className="cost-concept">{L(c.concept)}</span>
                  <span className="cost-amount">{formatCurrency(c.amount, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}

      <div className="cost-total">
        <span>{t('opd.costs.total')}</span>
        <span className="cost-total-val">{formatCurrency(total, lang)}</span>
      </div>

      <style>{`
        .costs{display:flex;flex-direction:column;gap:1.1rem;}
        .cost-group-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;
          flex-wrap:wrap;margin-bottom:.5rem;}
        .cost-tag{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
          padding:.28rem .6rem;border-radius:7px;}
        .cost-tag--honorarios{background:rgba(232,116,42,.14);color:var(--color-accent-700);}
        .cost-tag--tributos{background:rgba(43,83,125,.12);color:var(--color-navy-600);}
        .cost-tag--terceros{background:var(--surface-2);color:var(--text-muted);border:1px solid var(--border);}
        :root[data-theme='dark'] .cost-tag--honorarios{color:var(--color-accent-400);}
        :root[data-theme='dark'] .cost-tag--tributos{color:#7ba0c7;}
        .cost-subtotal{font-size:.84rem;color:var(--text-muted);}
        .cost-subtotal strong{color:var(--heading);}
        .cost-list{list-style:none;margin:0;padding:0;}
        .cost-row{display:flex;justify-content:space-between;gap:1rem;padding:.6rem 0;
          border-bottom:1px solid var(--border-soft);font-size:.93rem;}
        .cost-concept{color:var(--text);}
        .cost-amount{color:var(--heading);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap;}
        .cost-total{display:flex;justify-content:space-between;align-items:center;gap:1rem;
          margin-top:.4rem;padding:1rem 1.1rem;border-radius:12px;background:var(--color-navy-900);color:#fff;}
        :root[data-theme='dark'] .cost-total{background:var(--color-navy-700);}
        .cost-total span:first-child{font-weight:600;}
        .cost-total-val{font-family:var(--font-serif);font-size:1.3rem;font-weight:600;font-variant-numeric:tabular-nums;}
      `}</style>
    </div>
  )
}
