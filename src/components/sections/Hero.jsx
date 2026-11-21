import Icon from '../ui/Icon'
import MaritimeBackdrop from '../ui/MaritimeBackdrop'
import GlowBackdrop from '../ui/GlowBackdrop'
import { media } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      {/* Capas de fondo: color base + foto + degradado + luces con grano + motivo marítimo */}
      <div className="hero-photo" style={{ backgroundImage: `url(${media.heroPort})` }} />
      <div className="hero-overlay" />
      <GlowBackdrop variant="hero" />
      <MaritimeBackdrop opacity={0.6} />

      <div className="container-x hero-inner">
        <div className="hero-content">
          <span className="eyebrow eyebrow--light hero-badge">{t('hero.badge')}</span>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary">
              {t('cta.quote')}
              <Icon name="arrow-right" size={17} />
            </a>
            <a href="#nosotros" className="btn btn-ghost-light">
              {t('cta.learnMore')}
            </a>
          </div>

          <div className="hero-stats">
            <Stat value="20" label={t('hero.stat1')} />
            <span className="hero-stat-div" />
            <Stat value="40+" label={t('hero.stat2')} />
            <span className="hero-stat-div" />
            <Stat value="1:1" label={t('hero.stat3')} />
          </div>
        </div>
      </div>

      <style>{`
        .hero{position:relative;overflow:hidden;background:var(--color-navy-950);
          display:flex;align-items:center;min-height:min(86vh,760px);
          padding-block:4.5rem;}
        .hero-photo{
          position:absolute;inset:0;background-size:cover;background-position:center;
          opacity:.62;
        }
        /* Oscuro a la izquierda (texto legible) y abierto a la derecha (se ve la foto). */
        .hero-overlay{
          position:absolute;inset:0;
          background:
            linear-gradient(104deg, rgba(18,9,4,.95) 0%, rgba(31,17,9,.78) 42%, rgba(31,17,9,.18) 100%),
            linear-gradient(0deg, rgba(18,9,4,.85) 0%, rgba(18,9,4,0) 38%);
        }
        /* En el hero la luz y el grano acompañan a la foto, no la tapan. */
        .hero .glow-bd__a{
          background:radial-gradient(closest-side, rgba(255,122,41,.30), rgba(255,122,41,.09) 55%, transparent);
        }
        .hero .glow-bd__grain{opacity:.12;}
        .hero-inner{position:relative;z-index:2;width:100%;}
        .hero-content{max-width:640px;}
        .hero-badge{margin-bottom:1.4rem;}
        .hero-title{
          color:#fff;font-size:clamp(2.1rem,5.2vw,3.5rem);line-height:1.08;
          letter-spacing:-.02em;
        }
        .hero-subtitle{
          margin-top:1.4rem;font-size:clamp(1.02rem,1.6vw,1.2rem);line-height:1.6;
          color:rgba(246,236,228,.86);max-width:36rem;
        }
        .hero-cta{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem;}
        .hero-stats{
          display:flex;align-items:center;gap:1.4rem;margin-top:3rem;flex-wrap:wrap;
          padding-top:1.8rem;border-top:1px solid rgba(255,255,255,.14);
        }
        .hero-stat-div{width:1px;height:34px;background:rgba(255,255,255,.16);}
        .hero-stat{display:flex;flex-direction:column;gap:.15rem;}
        .hero-stat-value{
          font-family:var(--font-display);font-size:1.9rem;font-weight:800;font-style:italic;color:#fff;line-height:1;
        }
        .hero-stat-label{font-size:.82rem;color:rgba(246,236,228,.72);max-width:11rem;line-height:1.35;}
        @media (max-width:520px){
          .hero-stat-div{display:none;}
          .hero-stats{gap:1.1rem 1.6rem;}
        }
      `}</style>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="hero-stat">
      <span className="hero-stat-value">{value}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}
