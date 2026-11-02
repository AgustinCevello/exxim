import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import ClientCard from '../components/ui/ClientCard'
import CTABand from '../components/sections/CTABand'
import { clients, differentiators } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

export default function Clients() {
  const { t, L } = useI18n()
  return (
    <>
      <PageHeader
        badge={t('clientspage.badge')}
        title={t('clientspage.title')}
        lead={t('clientspage.lead')}
      />

      <section className="section surface-page">
        <div className="container-x">
          <div className="clients-page-grid">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <ClientCard client={c} />
              </Reveal>
            ))}
          </div>
          <p className="t-muted" style={{ textAlign: 'center', fontSize: '.82rem', marginTop: '1.75rem' }}>
            {t('clients.disclaimer')}
          </p>
        </div>
      </section>

      <section className="section surface-alt">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">{t('clientspage.whyTitle')}</span>
          </Reveal>
          <div className="why-grid">
            {differentiators.map((d, i) => (
              <Reveal key={L(d)} delay={i * 60} className="why-item panel">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="why-check"><Icon name="check" size={18} /></div>
                <span className="why-text">{L(d)}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .clients-page-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;max-width:720px;margin-inline:auto;}
        .why-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.75rem;}
        .why-item{display:flex;align-items:center;gap:1rem;padding:1.3rem 1.5rem;position:relative;}
        .why-num{font-family:var(--font-serif);font-size:1.1rem;color:var(--accent);font-weight:600;width:1.8rem;}
        .why-check{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;
          border-radius:9px;background:var(--accent-soft);color:var(--color-signal-green);flex-shrink:0;}
        .why-text{font-size:1.02rem;color:var(--heading);font-weight:500;}
        @media (min-width:560px){.clients-page-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:800px){.why-grid{grid-template-columns:1fr 1fr;}}
      `}</style>
    </>
  )
}
