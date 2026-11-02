import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ClientCard from '../ui/ClientCard'
import { clients } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function ClientsStrip() {
  const { t } = useI18n()
  return (
    <section className="section surface-page">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('clients.eyebrow')}
          title={t('clients.title')}
          intro={t('clients.intro')}
          align="center"
          maxWidth="40rem"
        />

        <div className="clients-grid">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <ClientCard client={c} />
            </Reveal>
          ))}
        </div>

        <p className="clients-note t-muted">{t('clients.disclaimer')}</p>
      </div>

      <style>{`
        .clients-grid{
          display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.75rem;
          max-width:820px;margin-inline:auto;
        }
        .clients-note{text-align:center;font-size:.82rem;margin-top:1.75rem;}
        @media (min-width:600px){.clients-grid{grid-template-columns:1fr 1fr;}}
      `}</style>
    </section>
  )
}
