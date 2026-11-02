import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { stats } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

/* Sección "Nosotros" condensada para la landing. */
export default function AboutSection() {
  const { t, L } = useI18n()

  const pillars = [
    { icon: 'badge', t: t('about.pillar1.t'), d: t('about.pillar1.d') },
    { icon: 'route', t: t('about.pillar2.t'), d: t('about.pillar2.d') },
    { icon: 'check-shield', t: t('about.pillar3.t'), d: t('about.pillar3.d') },
  ]

  return (
    <section className="section surface-page">
      <div className="container-x">
        <div className="about-sec-grid">
          <Reveal>
            <SectionHeading eyebrow={t('about.badge')} title={t('about.title')} intro={t('about.lead')} />
            <p className="about-sec-p" style={{ marginTop: '1.5rem' }}>{t('about.story1')}</p>
            <p className="about-sec-p" style={{ marginTop: '1rem' }}>{t('about.story2')}</p>
          </Reveal>

          <Reveal delay={120} className="about-sec-pillars">
            {pillars.map((p) => (
              <div key={p.t} className="about-sec-pillar panel">
                <span className="about-sec-pillar-icon"><Icon name={p.icon} size={22} /></span>
                <div>
                  <h3 className="about-sec-pillar-title">{p.t}</h3>
                  <p className="t-muted" style={{ fontSize: '.92rem' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Franja de métricas */}
        <Reveal>
          <div className="about-sec-stats panel">
            {stats.map((s) => (
              <div key={L(s.label)} className="about-sec-stat">
                <span className="about-sec-stat-value">{s.value}</span>
                <span className="about-sec-stat-suffix">{L(s.suffix)}</span>
                <span className="about-sec-stat-label t-muted">{L(s.label)}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-sec-grid{display:grid;grid-template-columns:1fr;gap:2.5rem;align-items:start;}
        .about-sec-p{font-size:1.01rem;line-height:1.7;color:var(--text);}
        .about-sec-pillars{display:grid;gap:1rem;}
        .about-sec-pillar{display:flex;gap:1rem;align-items:flex-start;padding:1.25rem;
          transition:transform .22s ease, box-shadow .22s ease;}
        .about-sec-pillar:hover{transform:translateY(-3px);box-shadow:var(--shadow-lift);}
        .about-sec-pillar-icon{display:inline-flex;align-items:center;justify-content:center;
          width:46px;height:46px;border-radius:12px;background:var(--color-navy-900);color:#fff;flex-shrink:0;}
        .about-sec-pillar-title{font-size:1.08rem;margin-bottom:.3rem;}
        .about-sec-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);
          overflow:hidden;padding:0;margin-top:3rem;}
        .about-sec-stat{background:var(--surface);padding:1.6rem 1.4rem;display:flex;
          flex-direction:column;gap:.1rem;align-items:flex-start;}
        .about-sec-stat-value{font-family:var(--font-serif);font-size:2rem;font-weight:600;color:var(--heading);line-height:1;}
        .about-sec-stat-suffix{font-size:.82rem;color:var(--accent);font-weight:600;}
        .about-sec-stat-label{font-size:.85rem;margin-top:.35rem;}
        @media (min-width:860px){
          .about-sec-grid{grid-template-columns:1.1fr .9fr;gap:3.5rem;}
          .about-sec-stats{grid-template-columns:repeat(4,1fr);}
        }
      `}</style>
    </section>
  )
}
