import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon'
import { faqs } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'

export default function Help() {
  const { t, L } = useI18n()
  const [open, setOpen] = useState(0)

  return (
    <div>
      <header className="page-intro">
        <h1 className="page-title">{t('help.title')}</h1>
        <p className="t-muted">{t('help.subtitle')}</p>
      </header>

      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={i} className={`panel faq-item ${isOpen ? 'is-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{L(f.q)}</span>
                <Icon name="chevron-down" size={20} className="faq-chevron" />
              </button>
              <div className="faq-a" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                <p>{L(f.a)}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="faq-cta panel">
        <Icon name="life-buoy" size={22} />
        <p>{t('help.contactAdvisor')}</p>
        <Link to="/portal/asesor" className="btn btn-primary btn-sm">
          {t('adv.title')}
          <Icon name="arrow-right" size={15} />
        </Link>
      </div>

      <style>{`
        .page-intro{margin-bottom:1.5rem;}
        .page-title{font-size:1.7rem;margin-bottom:.3rem;}
        .faq-list{display:grid;gap:.8rem;max-width:760px;}
        .faq-item{overflow:hidden;transition:border-color .18s ease;}
        .faq-item.is-open{border-color:var(--color-accent-300);}
        .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;
          padding:1.15rem 1.35rem;background:none;border:0;cursor:pointer;text-align:left;
          font-size:1.02rem;font-weight:600;color:var(--heading);font-family:inherit;}
        .faq-chevron{color:var(--text-muted);transition:transform .22s ease;flex-shrink:0;}
        .faq-item.is-open .faq-chevron{transform:rotate(180deg);color:var(--accent);}
        .faq-a{overflow:hidden;transition:max-height .28s ease;}
        .faq-a p{padding:0 1.35rem 1.25rem;color:var(--text-muted);font-size:.95rem;line-height:1.65;}

        .faq-cta{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;padding:1.4rem 1.5rem;margin-top:1.5rem;
          max-width:760px;background:var(--accent-soft);border-color:var(--color-accent-300);}
        .faq-cta > svg{color:var(--color-accent-600);flex-shrink:0;}
        .faq-cta p{flex:1;min-width:200px;color:var(--heading);font-weight:500;}
      `}</style>
    </div>
  )
}
