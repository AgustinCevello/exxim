import Icon from './Icon'
import { useTheme } from '../../context/ThemeContext'
import { useI18n } from '../../i18n/I18nContext'

/* Switch deslizante claro/oscuro (ancho fijo: no desplaza el layout). */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-switch"
      role="switch"
      aria-checked={isDark}
      aria-label={t('settings.appearance')}
      title={isDark ? t('settings.theme.light') : t('settings.theme.dark')}
      onClick={toggleTheme}
    >
      <span className="track-icon sun"><Icon name="sun" size={14} /></span>
      <span className="track-icon moon"><Icon name="moon" size={13} /></span>
      <span className="knob" />
    </button>
  )
}
