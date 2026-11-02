import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import CorrespondentMap from '../ui/CorrespondentMap'
import { countries } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

/* Sección "Presencia internacional" condensada para la landing. */
export default function InternationalSection() {
  const { t, L } = useI18n()
  const list = [...countries].sort((a) => (a.home ? -1 : 1))

  return (
    <section className="section surface-alt">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('intl.badge')}
          title={t('intl.title')}
          intro={t('intl.lead')}
          maxWidth="42rem"
        />

        <div className="intl-sec-layout">
          <Reveal className="intl-sec-map">
            <CorrespondentMap />
            <p className="t-muted" style={{ fontSize: '.8rem', marginTop: '.9rem' }}>{t('intl.note')}</p>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">{t('intl.partnersTitle')}</span>
            <ul className="intl-sec-list">
              {list.map((c) => (
                <li key={c.code} className={`intl-sec-item ${c.home ? 'is-home' : ''}`}>
                  <span className="intl-sec-flag">
                    <Icon name={c.home ? 'map-pin' : 'globe'} size={17} />
                  </span>
                  <div>
                    <p className="intl-sec-name">{L(c.name)}</p>
                    <p className="intl-sec-role">{L(c.role)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <style>{`
        .intl-sec-layout{display:grid;grid-template-columns:1fr;gap:2.25rem;margin-top:3rem;align-items:start;}
        .intl-sec-list{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.75rem;}
        .intl-sec-item{display:flex;gap:.8rem;align-items:center;padding:.85rem 1rem;
          border:1px solid var(--border);border-radius:11px;background:var(--surface);}
        .intl-sec-item.is-home{border-color:var(--color-accent-300);background:var(--accent-soft);}
        .intl-sec-flag{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;
          border-radius:9px;background:var(--color-navy-900);color:#fff;flex-shrink:0;}
        .intl-sec-item.is-home .intl-sec-flag{background:var(--color-accent-500);}
        .intl-sec-name{font-weight:600;color:var(--heading);font-size:.96rem;}
        .intl-sec-role{font-size:.8rem;font-weight:600;color:var(--accent);margin-top:.1rem;}
        @media (min-width:900px){
          .intl-sec-layout{grid-template-columns:1.5fr 1fr;gap:2.5rem;}
        }
      `}</style>
    </section>
  )
}
