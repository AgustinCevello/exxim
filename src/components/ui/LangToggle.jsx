import { useI18n } from '../../i18n/I18nContext'

/* Toggle de idioma ES / EN (ancho fijo: no desplaza el layout al cambiar). */
export default function LangToggle() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        className={lang === 'es' ? 'is-active' : ''}
        aria-pressed={lang === 'es'}
        onClick={() => setLang('es')}
      >
        ES
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
