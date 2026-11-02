import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/ui/ServiceCard'
import CTABand from '../components/sections/CTABand'
import { services } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

export default function Services() {
  const { t } = useI18n()
  return (
    <>
      <PageHeader
        badge={t('servicespage.badge')}
        title={t('servicespage.title')}
        lead={t('servicespage.lead')}
      />

      <section className="section surface-page">
        <div className="container-x">
          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} variant="full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .services-grid{display:grid;grid-template-columns:1fr;gap:1.6rem;}
        @media (min-width:800px){.services-grid{grid-template-columns:1fr 1fr;}}
      `}</style>
    </>
  )
}
