import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CTABand from '../components/sections/CTABand'
import { news } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

function formatDate(iso, lang) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function News() {
  const { t, L, lang } = useI18n()
  return (
    <>
      <PageHeader badge={t('news.badge')} title={t('news.title')} lead={t('news.lead')} />

      <section className="section surface-page">
        <div className="container-x">
          <div className="news-grid">
            {news.map((n, i) => (
              <Reveal key={n.slug} delay={i * 80}>
                <article className="news-card panel">
                  <div className="news-cover">
                    <span className="news-cat">{L(n.category)}</span>
                    <Icon name="file" size={26} />
                  </div>
                  <div className="news-body">
                    <div className="news-meta t-muted">
                      <span>{formatDate(n.date, lang)}</span>
                      <span className="news-dot" />
                      <span>{L(n.readingTime)}</span>
                    </div>
                    <h3 className="news-title">{L(n.title)}</h3>
                    <p className="news-excerpt t-muted">{L(n.excerpt)}</p>
                    <div className="news-footer">
                      <button type="button" className="link-arrow" style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0 }}>
                        {t('news.readMore')}
                        <Icon name="arrow-right" size={16} />
                      </button>
                      <span className="news-sample">{t('news.sample')}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .news-grid{display:grid;grid-template-columns:1fr;gap:1.6rem;}
        .news-card{overflow:hidden;display:flex;flex-direction:column;height:100%;
          transition:transform .22s ease, box-shadow .22s ease;}
        .news-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift);}
        .news-cover{position:relative;height:140px;display:flex;align-items:center;justify-content:center;
          color:rgba(255,255,255,.35);
          background:linear-gradient(135deg,var(--color-navy-900),var(--color-navy-700));}
        .news-cat{position:absolute;top:1rem;left:1rem;font-size:.7rem;font-weight:700;
          letter-spacing:.08em;text-transform:uppercase;color:#fff;
          background:var(--color-accent-500);padding:.3rem .6rem;border-radius:999px;}
        .news-body{padding:1.5rem;display:flex;flex-direction:column;flex:1;}
        .news-meta{display:flex;align-items:center;gap:.6rem;font-size:.82rem;}
        .news-dot{width:3px;height:3px;border-radius:50%;background:currentColor;opacity:.6;}
        .news-title{font-size:1.2rem;margin:.6rem 0 .6rem;line-height:1.25;}
        .news-excerpt{font-size:.95rem;line-height:1.6;flex:1;}
        .news-footer{display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-top:1.25rem;}
        .news-sample{font-size:.7rem;color:var(--text-muted);border:1px dashed var(--border);
          padding:.2rem .5rem;border-radius:6px;}
        @media (min-width:680px){.news-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:1000px){.news-grid{grid-template-columns:repeat(3,1fr);}}
      `}</style>
    </>
  )
}
