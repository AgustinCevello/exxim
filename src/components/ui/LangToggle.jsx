import { useI18n } from '../../i18n/I18nContext'

/* Switch de idioma ES / EN: un clic en cualquier parte alterna el idioma
   (igual que el switch de tema). El thumb se desliza a la opción activa. */
export default function LangToggle() {
  const { lang, setLang } = useI18n()
  const isEn = lang === 'en'

  return (
    <button
      type="button"
      className="lang-switch"
      role="switch"
      aria-checked={isEn}
      aria-label="Idioma / Language"
      title={isEn ? 'Cambiar a español' : 'Switch to English'}
      data-lang={lang}
      onClick={() => setLang(isEn ? 'es' : 'en')}
    >
      <span className="lang-thumb" aria-hidden="true" />
      <span className={`lang-opt ${!isEn ? 'is-active' : ''}`}>ES</span>
      <span className={`lang-opt ${isEn ? 'is-active' : ''}`}>EN</span>
    </button>
  )
}
