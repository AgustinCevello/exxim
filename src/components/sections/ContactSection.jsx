import { useRef, useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import LocationMap from '../ui/LocationMap'
import { company } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

const EMPTY = { name: '', company: '', email: '', phone: '', type: 'quote', message: '' }

export default function ContactSection() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  const update = (k) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [k]: value }))
    // Limpia el error del campo apenas el usuario lo corrige.
    setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.required')
    if (!form.email.trim()) next.email = t('contact.required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = t('contact.invalidEmail')
    if (!form.message.trim()) next.message = t('contact.required')
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      // Enfoca el primer campo con error.
      const first = ['name', 'email', 'message'].find((k) => next[k])
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }
    setErrors({})
    setSending(true)
    // Prototipo: sin backend, simulamos el envío.
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 700)
  }

  const reset = () => {
    setForm(EMPTY)
    setErrors({})
    setSent(false)
  }

  return (
    <section className="section surface-alt">
      <div className="container-x">
        <SectionHeading
          eyebrow={t('contact.badge')}
          title={t('contact.title')}
          intro={t('contact.lead')}
          maxWidth="42rem"
        />

        <div className="contact-layout">
          {/* Formulario */}
          <Reveal className="contact-form-col panel">
            {!sent ? (
              <form onSubmit={onSubmit} ref={formRef} noValidate>
                <h3 className="contact-form-title">{t('contact.formTitle')}</h3>
                <div className="field-grid">
                  <Field label={t('contact.name')} required error={errors.name}>
                    <input name="name" type="text" value={form.name} onChange={update('name')}
                      className="input" autoComplete="name" aria-invalid={!!errors.name} />
                  </Field>
                  <Field label={t('contact.company')}>
                    <input name="company" type="text" value={form.company} onChange={update('company')}
                      className="input" autoComplete="organization" />
                  </Field>
                  <Field label={t('contact.email')} required error={errors.email}>
                    <input name="email" type="email" value={form.email} onChange={update('email')}
                      className="input" autoComplete="email" aria-invalid={!!errors.email} />
                  </Field>
                  <Field label={t('contact.phone')}>
                    <input name="phone" type="tel" value={form.phone} onChange={update('phone')}
                      className="input" autoComplete="tel" />
                  </Field>
                  <Field label={t('contact.type')} full>
                    <select name="type" value={form.type} onChange={update('type')} className="input">
                      <option value="quote">{t('contact.type.quote')}</option>
                      <option value="contact">{t('contact.type.contact')}</option>
                    </select>
                  </Field>
                  <Field label={t('contact.message')} full required error={errors.message}>
                    <textarea name="message" rows={5} value={form.message} onChange={update('message')}
                      className="input" placeholder={t('contact.messagePlaceholder')}
                      aria-invalid={!!errors.message} />
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
                <h3 className="contact-form-title" style={{ marginTop: '1rem' }}>{t('contact.successTitle')}</h3>
                <p className="t-muted" style={{ marginTop: '.5rem' }}>{t('contact.successText')}</p>
                <button type="button" className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={reset}>
                  {t('contact.sendAnother')}
                </button>
              </div>
            )}
          </Reveal>

          {/* Info de contacto */}
          <Reveal delay={120} className="contact-info-col">
            <h3 className="contact-form-title">{t('contact.infoTitle')}</h3>
            <ul className="contact-info-list">
              <InfoItem icon="map-pin" label={t('contact.address')}>{company.address}</InfoItem>
              <InfoItem icon="mail" label="Email">
                <a href={`mailto:${company.email}`} className="contact-info-link">{company.email}</a>
              </InfoItem>
              <InfoItem icon="whatsapp" label={t('contact.whatsapp')}>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="contact-info-link">{company.whatsapp}</a>
              </InfoItem>
              <InfoItem icon="phone" label={t('contact.phoneLabel')}>
                <a href={company.phoneHref} className="contact-info-link">{company.phone}</a>
              </InfoItem>
              <InfoItem icon="clock" label={t('contact.hours')}>{t('contact.hoursValue')}</InfoItem>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <LocationMap />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-layout{display:grid;grid-template-columns:1fr;gap:2.25rem;align-items:start;margin-top:3rem;}
        .contact-form-col{padding:2rem;}
        .contact-form-title{font-size:1.3rem;margin-bottom:1.5rem;}
        .field-grid{display:grid;grid-template-columns:1fr;gap:1.1rem;}
        .field label{display:block;font-size:.85rem;font-weight:600;color:var(--heading);margin-bottom:.4rem;}
        .field .req{color:var(--color-signal-red);margin-left:.15rem;}
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
        .contact-info-link:hover{text-decoration:underline;}
        @media (min-width:560px){.field-grid{grid-template-columns:1fr 1fr;}}
        @media (min-width:900px){.contact-layout{grid-template-columns:1.3fr 1fr;gap:3rem;}}
      `}</style>
    </section>
  )
}

function Field({ label, children, required, full, error }) {
  return (
    <div className="field" style={full ? { gridColumn: '1 / -1' } : undefined}>
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      {children}
      {error && (
        <span className="field-error" role="alert">
          <Icon name="alert" size={14} />
          {error}
        </span>
      )}
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
