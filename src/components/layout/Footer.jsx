import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Logo'
import Icon from '../ui/Icon'
import { company, navLinks, services } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function Footer() {
  const { t, L } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-navy-950)', color: '#cdd8e3' }}>
      <div className="container-x" style={{ paddingBlock: '3.75rem 1.5rem' }}>
        <div className="footer-grid">
          {/* Marca */}
          <div style={{ maxWidth: '22rem' }}>
            <Wordmark dark size="1.7rem" />
            <p style={{ marginTop: '1rem', fontSize: '.95rem', lineHeight: 1.65, color: 'rgba(205,216,227,.78)' }}>
              {t('footer.tagline')}
            </p>
            <Link
              to="/contacto"
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1.4rem' }}
            >
              {t('cta.quote')}
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="footer-title">{t('footer.nav')}</h4>
            <ul className="footer-list">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="footer-title">{t('footer.services')}</h4>
            <ul className="footer-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicios#${s.slug}`} className="footer-link">
                    {L(s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer-title">{t('footer.contact')}</h4>
            <ul className="footer-list footer-contact">
              <li>
                <Icon name="map-pin" size={17} />
                <span>{company.address}</span>
              </li>
              <li>
                <Icon name="mail" size={17} />
                <a href={`mailto:${company.email}`} className="footer-link">
                  {company.email}
                </a>
              </li>
              <li>
                <Icon name="whatsapp" size={17} />
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="footer-link">
                  {company.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {company.name}. {t('footer.rights')}
          </p>
          <p style={{ color: 'rgba(205,216,227,.5)' }}>{t('footer.disclaimer')}</p>
        </div>
      </div>

      <style>{`
        .footer-grid{
          display:grid;grid-template-columns:1fr;gap:2.5rem;
          padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,.1);
        }
        .footer-title{
          color:#fff;font-family:var(--font-sans);font-size:.78rem;font-weight:700;
          letter-spacing:.12em;text-transform:uppercase;margin-bottom:1rem;
        }
        .footer-list{list-style:none;margin:0;padding:0;display:grid;gap:.7rem;}
        .footer-link{font-size:.93rem;color:rgba(205,216,227,.82);transition:color .16s ease;}
        .footer-link:hover{color:var(--color-accent-400);}
        .footer-contact li{display:flex;gap:.6rem;align-items:flex-start;font-size:.93rem;color:rgba(205,216,227,.82);}
        .footer-contact svg{flex-shrink:0;margin-top:1px;color:var(--color-accent-400);}
        .footer-bottom{
          display:flex;flex-direction:column;gap:.4rem;padding-top:1.5rem;
          font-size:.85rem;color:rgba(205,216,227,.62);
        }
        @media (min-width:640px){
          .footer-grid{grid-template-columns:1.4fr 1fr 1fr;}
        }
        @media (min-width:960px){
          .footer-grid{grid-template-columns:2fr 1fr 1fr 1.3fr;}
          .footer-bottom{flex-direction:row;justify-content:space-between;align-items:center;}
        }
      `}</style>
    </footer>
  )
}
