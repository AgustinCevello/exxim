import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function ServicesPreview() {
  const { t } = useI18n()
  return (
    <section className="section surface-alt">
      <div className="container-x">
        <div className="svc-preview-head">
          <SectionHeading
            eyebrow={t('services.eyebrow')}
            title={t('services.title')}
            intro={t('services.intro')}
            maxWidth="38rem"
          />
          <Link to="/servicios" className="btn btn-outline btn-sm svc-preview-all">
            {t('cta.allServices')}
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <div className="svc-preview-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard service={s} variant="compact" />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .svc-preview-head{display:flex;flex-wrap:wrap;gap:1rem;align-items:flex-end;justify-content:space-between;}
        .svc-preview-all{flex-shrink:0;}
        .svc-preview-grid{
          display:grid;grid-template-columns:1fr;gap:1.4rem;margin-top:3rem;
        }
        @media (min-width:600px){.svc-preview-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:1000px){.svc-preview-grid{grid-template-columns:repeat(4,1fr);}}
      `}</style>
    </section>
  )
}
