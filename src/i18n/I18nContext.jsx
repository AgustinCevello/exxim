import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './ui'

const I18nContext = createContext(null)
const STORAGE_KEY = 'exxim:lang'
const DEFAULT_LANG = 'es'

function readStored() {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    if (v === 'es' || v === 'en') return v
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(readStored)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const setLang = (next) => setLangState(next === 'en' ? 'en' : 'es')
  const toggleLang = () => setLangState((p) => (p === 'es' ? 'en' : 'es'))

  const t = useMemo(() => {
    const dict = translations[lang] || translations.es
    const fallback = translations.es
    return (key) => dict[key] ?? fallback[key] ?? key
  }, [lang])

  /* Devuelve el valor de un campo bilingüe { es, en } o el valor plano. */
  const L = useMemo(() => {
    return (value) => {
      if (value && typeof value === 'object' && ('es' in value || 'en' in value)) {
        return value[lang] ?? value.es ?? value.en ?? ''
      }
      return value
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, toggleLang, t, L }), [lang, t, L])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
