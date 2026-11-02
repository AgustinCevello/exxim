import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CTABand from '../components/sections/CTABand'
import { differentiators, media, stats } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

export default function About() {
  const { t, L } = useI18n()

  const pillars = [
    { icon: 'badge', t: t('about.pillar1.t'), d: t('about.pillar1.d') },
    { icon: 'route', t: t('about.pillar2.t'), d: t('about.pillar2.d') },
    { icon: 'check-shield', t: t('about.pillar3.t'), d: t('about.pillar3.d') },
  ]

  return (
    <>
      <PageHeader badge={t('about.badge')} title={t('about.title')} lead={t('about.lead')} />

      {/* Historia */}
      <section className="section surface-page">
        <div className="container-x about-story">
          <Reveal className="about-story-text">
            <span className="eyebrow">{t('about.storyTitle')}</span>
            <p className="about-p" style={{ marginTop: '1.25rem' }}>{t('about.story1')}</p>
            <p className="about-p" style={{ marginTop: '1rem' }}>{t('about.story2')}</p>
          </Reveal>

          <Reveal delay={120} className="about-visual">
            <div
              className="about-photo"
              style={{ backgroundImage: `url(${media.cargoShip})` }}
            />
            <div className="about-photo-badge panel">
              <span className="about-photo-num">20</span>
              <span className="about-photo-label t-muted">
                {L({ es: 'años de trayectoria', en: 'years in business' })}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pilares */}
      <section className="section surface-alt">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">{t('about.pillarsTitle')}</span>
          </Reveal>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="pillar panel">
                <span className="pillar-icon">
                  <Icon name={p.icon} size={24} />
                </span>
                <h3 className="pillar-title">{p.t}</h3>
                <p className="t-muted" style={{ fontSize: '.95rem' }}>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misión + valores */}
      <section className="section surface-page">
        <div className="container-x about-mission">
          <Reveal className="about-mission-main panel">
            <span className="eyebrow">{t('about.missionTitle')}</span>
            <p className="about-mission-text">{t('about.mission')}</p>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">{t('about.valuesTitle')}</span>
            <ul className="about-values">
              {differentiators.map((d) => (
                <li key={L(d)}>
                  <Icon name="check" size={18} />
                  <span>{L(d)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Stats band */}
        <div className="container-x">
          <div className="about-stats panel">
            {stats.map((s) => (
              <div key={L(s.label)} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-suffix">{L(s.suffix)}</span>
                <span className="about-stat-label t-muted">{L(s.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .about-p{font-size:1.02rem;line-height:1.7;color:var(--text);}
        .about-story{display:grid;grid-template-columns:1fr;gap:2.5rem;align-items:center;}
        .about-visual{position:relative;}
        .about-photo{
          width:100%;aspect-ratio:4/3;border-radius:16px;background-size:cover;background-position:center;
          background-color:var(--color-navy-800);box-shadow:var(--shadow-lift);
        }
        .about-photo-badge{
          position:absolute;left:-12px;bottom:-18px;padding:1rem 1.25rem;display:flex;
          flex-direction:column;align-items:flex-start;min-width:140px;
        }
        .about-photo-num{font-family:var(--font-serif);font-size:2.2rem;font-weight:600;color:var(--accent);line-height:1;}
        .about-photo-label{font-size:.82rem;margin-top:.2rem;}
        .pillars-grid{display:grid;grid-template-columns:1fr;gap:1.4rem;margin-top:1.75rem;}
        .pillar{padding:1.9rem;}
        .pillar-icon{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;
          border-radius:13px;background:var(--color-navy-900);color:#fff;margin-bottom:1rem;}
        .pillar-title{font-size:1.2rem;margin-bottom:.5rem;}
        .about-mission{display:grid;grid-template-columns:1fr;gap:2rem;margin-bottom:3rem;}
        .about-mission-main{padding:2.25rem;background:var(--surface);
          border-left:4px solid var(--color-accent-500);}
        .about-mission-text{font-family:var(--font-serif);font-size:1.3rem;line-height:1.5;color:var(--heading);margin-top:1rem;}
        .about-values{list-style:none;margin:1.1rem 0 0;padding:0;display:grid;gap:.85rem;}
        .about-values li{display:flex;gap:.65rem;align-items:flex-start;font-size:1.02rem;color:var(--text);}
        .about-values svg{color:var(--color-signal-green);flex-shrink:0;margin-top:3px;}
        .about-stats{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);
          overflow:hidden;padding:0;}
        .about-stat{background:var(--surface);padding:1.75rem 1.5rem;display:flex;flex-direction:column;gap:.1rem;align-items:flex-start;}
        .about-stat-value{font-family:var(--font-serif);font-size:2.1rem;font-weight:600;color:var(--heading);line-height:1;}
        .about-stat-suffix{font-size:.85rem;color:var(--accent);font-weight:600;}
        .about-stat-label{font-size:.88rem;margin-top:.35rem;}
        @media (min-width:860px){
          .about-story{grid-template-columns:1.1fr .9fr;gap:3.5rem;}
          .pillars-grid{grid-template-columns:repeat(3,1fr);}
          .about-mission{grid-template-columns:1.4fr 1fr;gap:3rem;align-items:start;}
          .about-stats{grid-template-columns:repeat(4,1fr);}
        }
      `}</style>
    </>
  )
}
