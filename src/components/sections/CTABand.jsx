import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import GlowBackdrop from '../ui/GlowBackdrop'
import { company } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function CTABand() {
  const { t } = useI18n()
  return (
    <section className="cta-band">
      {/* Luces naranja y ámbar con grano, como la tarjeta "gradiente con grano". */}
      <GlowBackdrop variant="cta" />

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
        .cta-band{position:relative;overflow:hidden;isolation:isolate;background:var(--color-navy-950);padding-block:5rem;}
        .cta-inner{position:relative;z-index:2;text-align:center;max-width:44rem;margin-inline:auto;}
        .cta-title{color:#fff;font-size:clamp(1.7rem,3.5vw,2.5rem);text-shadow:0 2px 24px rgba(22,11,5,.45);}
        .cta-text{color:rgba(236,240,248,.92);margin-top:1rem;font-size:1.05rem;text-shadow:0 1px 14px rgba(22,11,5,.55);}
        .cta-actions{display:flex;flex-wrap:wrap;gap:.8rem;justify-content:center;margin-top:2rem;}
      `}</style>
    </section>
  )
}
