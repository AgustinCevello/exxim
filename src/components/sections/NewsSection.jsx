import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { news } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'
import { formatDate } from '../../lib/format'

/* Sección "Novedades" condensada para la landing (contenido de muestra). */
export default function NewsSection() {
  const { t, L, lang } = useI18n()

  return (
    <section className="section surface-page">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('news.badge')}
          title={t('news.title')}
          intro={t('news.lead')}
          maxWidth="40rem"
        />

        <div className="news-sec-grid">
          {news.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <article className="news-sec-card panel">
                <div className="news-sec-meta">
                  <span className="news-sec-cat">{L(n.category)}</span>
                  <span className="t-muted">{formatDate(n.date, lang)}</span>
                </div>
                <h3 className="news-sec-title">{L(n.title)}</h3>
                <p className="t-muted news-sec-excerpt">{L(n.excerpt)}</p>
                <span className="news-sec-foot t-muted">{L(n.readingTime)} · {t('news.sample')}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .news-sec-grid{display:grid;grid-template-columns:1fr;gap:1.4rem;margin-top:3rem;}
        .news-sec-card{padding:1.6rem;display:flex;flex-direction:column;height:100%;
          transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;}
        .news-sec-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift);border-color:var(--color-accent-300);}
        .news-sec-meta{display:flex;align-items:center;justify-content:space-between;gap:.5rem;
          font-size:.8rem;margin-bottom:.9rem;}
        .news-sec-cat{font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:.7rem;
          color:var(--accent);background:var(--accent-soft);padding:.25rem .6rem;border-radius:999px;}
        .news-sec-title{font-size:1.12rem;line-height:1.3;margin-bottom:.6rem;}
        .news-sec-excerpt{font-size:.93rem;line-height:1.6;flex:1;}
        .news-sec-foot{display:inline-block;margin-top:1.1rem;font-size:.78rem;font-weight:500;}
        @media (min-width:700px){.news-sec-grid{grid-template-columns:repeat(3,1fr);}}
      `}</style>
    </section>
  )
}
