import { operationStatuses } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'

const toneColors = {
  green: { bg: 'rgba(46,158,107,.14)', fg: '#1f7d52', dot: '#2e9e6b' },
  amber: { bg: 'rgba(224,163,58,.16)', fg: '#9a6b12', dot: '#e0a33a' },
  red: { bg: 'rgba(210,84,75,.14)', fg: '#b23a31', dot: '#d2544b' },
}

export default function StatusBadge({ status }) {
  const { L } = useI18n()
  const s = operationStatuses[status]
  if (!s) return null
  const c = toneColors[s.tone] || toneColors.amber
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.4rem',
        padding: '.28rem .65rem',
        borderRadius: '999px',
        fontSize: '.78rem',
        fontWeight: 600,
        background: c.bg,
        color: c.fg,
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot }} />
      {L(s.label)}
    </span>
  )
}
