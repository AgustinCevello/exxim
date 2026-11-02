import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { valueProps } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function ValueProps() {
  const { t, L } = useI18n()
  return (
    <section className="section surface-page">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('value.eyebrow')}
          title={t('value.title')}
          intro={t('value.intro')}
        />

        <div className="value-grid">
          {valueProps.map((v, i) => (
            <Reveal key={v.icon} delay={i * 80} className="value-card panel">
              <span className="value-icon">
                <Icon name={v.icon} size={24} />
              </span>
              <h3 className="value-card-title">{L(v.title)}</h3>
              <p className="value-card-text t-muted">{L(v.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .value-grid{
          display:grid;grid-template-columns:1fr;gap:1.25rem;margin-top:3rem;
        }
        .value-card{padding:1.75rem;transition:transform .22s ease, box-shadow .22s ease;}
        .value-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift);}
        .value-icon{
          display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;
          border-radius:13px;background:var(--accent-soft);color:var(--color-accent-600);
          margin-bottom:1.1rem;
        }
        .value-card-title{font-size:1.18rem;margin-bottom:.55rem;}
        .value-card-text{font-size:.95rem;line-height:1.6;}
        @media (min-width:560px){.value-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:1000px){.value-grid{grid-template-columns:repeat(4,1fr);gap:1.4rem;}}
      `}</style>
    </section>
  )
}
