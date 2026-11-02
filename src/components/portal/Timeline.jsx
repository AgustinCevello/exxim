import Icon from '../ui/Icon'
import { milestoneSteps } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'
import { formatDate } from '../../lib/format'

const channelColors = {
  verde: '#2e9e6b',
  naranja: '#e8742a',
  rojo: '#d2544b',
}

export default function Timeline({ operation }) {
  const { t, L, lang } = useI18n()
  const completed = operation.completedMilestones
  const currentKey = completed[completed.length - 1]

  return (
    <ol className="timeline">
      {milestoneSteps.map((step, i) => {
        const done = completed.includes(step.key)
        const isCurrent = step.key === currentKey && operation.status !== 'entregada'
        const date = operation.milestoneDates?.[step.key]
        const state = done ? (isCurrent ? 'current' : 'done') : 'pending'
        const showChannel = step.key === 'selectividad' && operation.channel && done

        return (
          <li key={step.key} className={`tl-item tl-${state}`}>
            <div className="tl-marker">
              {done ? <Icon name="check" size={14} /> : <span className="tl-dot" />}
              {i < milestoneSteps.length - 1 && <span className="tl-line" />}
            </div>
            <div className="tl-body">
              <div className="tl-row">
                <p className="tl-label">{L(step.label)}</p>
                {isCurrent && <span className="tl-badge">{t('opd.current')}</span>}
              </div>
              {date && <p className="tl-date t-muted">{formatDate(date, lang)}</p>}
              {showChannel && (
                <span className="tl-channel" style={{ '--ch': channelColors[operation.channel] }}>
                  <span className="tl-channel-dot" />
                  {t('opd.channel')}: {t(`opd.channel.${operation.channel}`)}
                </span>
              )}
            </div>
          </li>
        )
      })}

      <style>{`
        .timeline{list-style:none;margin:0;padding:0;}
        .tl-item{display:flex;gap:1rem;}
        .tl-marker{display:flex;flex-direction:column;align-items:center;flex-shrink:0;}
        .tl-marker > :first-child{display:inline-flex;align-items:center;justify-content:center;
          width:30px;height:30px;border-radius:50%;flex-shrink:0;z-index:1;}
        .tl-line{flex:1;width:2px;background:var(--border);margin:2px 0;min-height:18px;}
        .tl-dot{width:9px;height:9px;border-radius:50%;background:var(--text-muted);opacity:.5;}
        .tl-body{padding-bottom:1.4rem;}
        .tl-row{display:flex;align-items:center;gap:.6rem;}
        .tl-label{font-weight:600;color:var(--heading);font-size:.98rem;}
        .tl-date{font-size:.84rem;margin-top:.15rem;}
        .tl-badge{font-size:.68rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
          color:#fff;background:var(--color-accent-500);padding:.18rem .5rem;border-radius:999px;}

        /* Estados */
        .tl-done .tl-marker > :first-child{background:var(--color-signal-green);color:#fff;}
        .tl-done .tl-line{background:var(--color-signal-green);opacity:.5;}
        .tl-current .tl-marker > :first-child{background:var(--color-accent-500);color:#fff;
          box-shadow:0 0 0 4px rgba(232,116,42,.2);}
        .tl-pending .tl-marker > :first-child{background:var(--surface-2);border:1px solid var(--border);}
        .tl-pending .tl-label{color:var(--text-muted);font-weight:500;}

        .tl-channel{display:inline-flex;align-items:center;gap:.4rem;margin-top:.5rem;font-size:.82rem;
          font-weight:600;color:var(--ch);background:color-mix(in srgb, var(--ch) 14%, transparent);
          padding:.28rem .6rem;border-radius:999px;}
        .tl-channel-dot{width:8px;height:8px;border-radius:50%;background:var(--ch);}
      `}</style>
    </ol>
  )
}
