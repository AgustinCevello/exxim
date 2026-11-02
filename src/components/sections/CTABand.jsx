import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import MaritimeBackdrop from '../ui/MaritimeBackdrop'
import { company, media } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function CTABand() {
  const { t } = useI18n()
  return (
    <section className="cta-band">
      <div className="cta-photo" style={{ backgroundImage: `url(${media.ctaContainers})` }} />
      <div className="cta-overlay" />
      <MaritimeBackdrop opacity={0.45} />

      <div className="container-x cta-inner">
        <Reveal>
          <h2 className="cta-title">{t('ctaband.title')}</h2>
          <p className="cta-text">{t('ctaband.text')}</p>
          <div className="cta-actions">
            <a href="#contacto" className="btn btn-primary">
              {t('ctaband.primary')}
              <Icon name="arrow-right" size={17} />
            </a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
              <Icon name="whatsapp" size={18} />
              {t('ctaband.secondary')}
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cta-band{position:relative;overflow:hidden;background:var(--color-navy-900);padding-block:4.5rem;}
        .cta-photo{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.22;}
        .cta-overlay{position:absolute;inset:0;
          background:linear-gradient(100deg,rgba(15,36,59,.95),rgba(15,36,59,.7));}
        .cta-inner{position:relative;z-index:2;text-align:center;max-width:44rem;margin-inline:auto;}
        .cta-title{color:#fff;font-size:clamp(1.7rem,3.5vw,2.5rem);}
        .cta-text{color:rgba(226,235,243,.85);margin-top:1rem;font-size:1.05rem;}
        .cta-actions{display:flex;flex-wrap:wrap;gap:.8rem;justify-content:center;margin-top:2rem;}
      `}</style>
    </section>
  )
}
