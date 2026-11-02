import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CorrespondentMap from '../components/ui/CorrespondentMap'
import CTABand from '../components/sections/CTABand'
import { countries } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

export default function International() {
  const { t, L } = useI18n()
  const list = [...countries].sort((a) => (a.home ? -1 : 1))

  return (
    <>
      <PageHeader badge={t('intl.badge')} title={t('intl.title')} lead={t('intl.lead')} />

      <section className="section surface-page">
        <div className="container-x">
          <div className="intl-layout">
            <Reveal className="intl-map-col">
              <span className="eyebrow">{t('intl.mapTitle')}</span>
              <div style={{ marginTop: '1rem' }}>
                <CorrespondentMap />
              </div>
              <p className="t-muted" style={{ fontSize: '.82rem', marginTop: '.9rem' }}>
                {t('intl.note')}
              </p>
            </Reveal>

            <Reveal delay={120} className="intl-list-col">
              <span className="eyebrow">{t('intl.partnersTitle')}</span>
              <ul className="intl-list">
                {list.map((c) => (
                  <li key={c.code} className={`intl-item ${c.home ? 'is-home' : ''}`}>
                    <span className="intl-flag">
                      <Icon name={c.home ? 'map-pin' : 'globe'} size={18} />
                    </span>
                    <div>
                      <p className="intl-name">{L(c.name)}</p>
                      <p className="intl-role t-muted">{L(c.role)}</p>
                      <p className="intl-note t-muted">{L(c.note)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .intl-layout{display:grid;grid-template-columns:1fr;gap:2.5rem;}
        .intl-list{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.9rem;}
        .intl-item{display:flex;gap:.9rem;align-items:flex-start;padding:1rem 1.1rem;
          border:1px solid var(--border);border-radius:12px;background:var(--surface);}
        .intl-item.is-home{border-color:var(--color-accent-300);background:var(--accent-soft);}
        .intl-flag{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;
          border-radius:9px;background:var(--color-navy-900);color:#fff;flex-shrink:0;}
        .intl-item.is-home .intl-flag{background:var(--color-accent-500);}
        .intl-name{font-weight:600;color:var(--heading);}
        .intl-role{font-size:.82rem;font-weight:600;color:var(--accent);margin-top:.1rem;}
        .intl-note{font-size:.88rem;margin-top:.25rem;}
        @media (min-width:900px){
          .intl-layout{grid-template-columns:1.5fr 1fr;align-items:start;}
        }
      `}</style>
    </>
  )
}
