import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import LocationMap from '../components/ui/LocationMap'
import { company } from '../data/site'
import { useI18n } from '../i18n/I18nContext'

export default function Contact() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'quote',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Prototipo: sin backend, simulamos el envío.
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 700)
  }

  const reset = () => {
    setForm({ name: '', company: '', email: '', phone: '', type: 'quote', message: '' })
    setSent(false)
  }

  return (
    <>
      <PageHeader badge={t('contact.badge')} title={t('contact.title')} lead={t('contact.lead')} />

      <section className="section surface-page">
        <div className="container-x contact-layout">
          {/* Formulario */}
          <Reveal className="contact-form-col panel">
            {!sent ? (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="contact-form-title">{t('contact.formTitle')}</h2>
                <div className="field-grid">
                  <Field label={t('contact.name')} required>
                    <input type="text" required value={form.name} onChange={update('name')} className="input" autoComplete="name" />
                  </Field>
                  <Field label={t('contact.company')}>
                    <input type="text" value={form.company} onChange={update('company')} className="input" autoComplete="organization" />
                  </Field>
                  <Field label={t('contact.email')} required>
                    <input type="email" required value={form.email} onChange={update('email')} className="input" autoComplete="email" />
                  </Field>
                  <Field label={t('contact.phone')}>
                    <input type="tel" value={form.phone} onChange={update('phone')} className="input" autoComplete="tel" />
                  </Field>
                  <Field label={t('contact.type')} full>
                    <select value={form.type} onChange={update('type')} className="input">
                      <option value="quote">{t('contact.type.quote')}</option>
                      <option value="contact">{t('contact.type.contact')}</option>
                    </select>
                  </Field>
                  <Field label={t('contact.message')} full required>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      className="input"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </Field>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1.25rem' }} disabled={sending}>
                  {sending ? t('contact.sending') : t('contact.submit')}
                  {!sending && <Icon name="send" size={17} />}
                </button>
              </form>
            ) : (
              <div className="contact-success">
                <span className="success-icon"><Icon name="check" size={30} /></span>
                <h2 className="contact-form-title" style={{ marginTop: '1rem' }}>{t('contact.successTitle')}</h2>
                <p className="t-muted" style={{ marginTop: '.5rem' }}>{t('contact.successText')}</p>
                <button type="button" className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={reset}>
                  {t('contact.sendAnother')}
                </button>
              </div>
            )}
          </Reveal>

          {/* Info de contacto */}
          <Reveal delay={120} className="contact-info-col">
            <h2 className="contact-form-title">{t('contact.infoTitle')}</h2>
            <ul className="contact-info-list">
              <InfoItem icon="map-pin" label={t('contact.address')}>
                {company.address}
              </InfoItem>
              <InfoItem icon="mail" label="Email">
                <a href={`mailto:${company.email}`} className="contact-info-link">{company.email}</a>
              </InfoItem>
              <InfoItem icon="whatsapp" label={t('contact.whatsapp')}>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="contact-info-link">
                  {company.whatsapp}
                </a>
              </InfoItem>
              <InfoItem icon="clock" label={t('contact.hours')}>
                {t('contact.hoursValue')}
              </InfoItem>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <LocationMap />
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .contact-layout{display:grid;grid-template-columns:1fr;gap:2.25rem;align-items:start;}
        .contact-form-col{padding:2rem;}
        .contact-form-title{font-size:1.4rem;margin-bottom:1.5rem;}
        .field-grid{display:grid;grid-template-columns:1fr;gap:1.1rem;}
        .field label{display:block;font-size:.85rem;font-weight:600;color:var(--heading);margin-bottom:.4rem;}
        .field .req{color:var(--color-signal-red);margin-left:.15rem;}
        .input{
          width:100%;padding:.75rem .85rem;border:1px solid var(--border);border-radius:9px;
          background:var(--surface-2);color:var(--heading);font-size:.95rem;font-family:inherit;
          transition:border-color .16s ease, box-shadow .16s ease;
        }
        .input:focus{outline:none;border-color:var(--color-accent-500);
          box-shadow:0 0 0 3px rgba(232,116,42,.16);background:var(--surface);}
        textarea.input{resize:vertical;min-height:120px;}
        .contact-success{text-align:center;padding:1.5rem 0;}
        .success-icon{display:inline-flex;align-items:center;justify-content:center;width:68px;height:68px;
          border-radius:50%;background:rgba(46,158,107,.14);color:var(--color-signal-green);}
        .contact-info-list{list-style:none;margin:0;padding:0;display:grid;gap:1.1rem;}
        .contact-info-item{display:flex;gap:.9rem;align-items:flex-start;}
        .contact-info-icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;
          border-radius:10px;background:var(--accent-soft);color:var(--color-accent-600);flex-shrink:0;}
        .contact-info-label{font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted);}
        .contact-info-value{color:var(--heading);font-size:.98rem;margin-top:.15rem;}
        .contact-info-link{color:var(--accent);font-weight:500;}
        @media (min-width:560px){.field-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:900px){.contact-layout{grid-template-columns:1.3fr 1fr;gap:3rem;}}
      `}</style>
    </>
  )
}

function Field({ label, children, required, full }) {
  return (
    <div className="field" style={full ? { gridColumn: '1 / -1' } : undefined}>
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      {children}
    </div>
  )
}

function InfoItem({ icon, label, children }) {
  return (
    <li className="contact-info-item">
      <span className="contact-info-icon"><Icon name={icon} size={19} /></span>
      <div>
        <p className="contact-info-label">{label}</p>
        <p className="contact-info-value">{children}</p>
      </div>
    </li>
  )
}
