import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import PublicLayout from './components/layout/PublicLayout'
import PortalLayout from './components/portal/PortalLayout'
import Landing from './pages/Landing'
import Login from './pages/portal/Login'
import Operations from './pages/portal/Operations'
import OperationDetail from './pages/portal/OperationDetail'
import Account from './pages/portal/Account'
import Advisor from './pages/portal/Advisor'
import Help from './pages/portal/Help'
import { useI18n } from './i18n/I18nContext'

function NotFound() {
  const { t } = useI18n()
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '3rem 1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 600, color: 'var(--accent)' }}>404</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>{t('common.backHome')}</Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Sitio público — landing de una sola página */}
        <Route element={<PublicLayout />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Redirecciones de las rutas antiguas a las secciones de la landing */}
        <Route path="/nosotros" element={<Navigate to="/#nosotros" replace />} />
        <Route path="/servicios" element={<Navigate to="/#servicios" replace />} />
        <Route path="/clientes" element={<Navigate to="/#clientes" replace />} />
        <Route path="/presencia-internacional" element={<Navigate to="/#internacional" replace />} />
        <Route path="/novedades" element={<Navigate to="/#novedades" replace />} />
        <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />

        {/* Portal — login */}
        <Route path="/portal" element={<Login />} />

        {/* Portal — área privada */}
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="operaciones" element={<Operations />} />
          <Route path="operaciones/:id" element={<OperationDetail />} />
          <Route path="cuenta" element={<Account />} />
          <Route path="asesor" element={<Advisor />} />
          <Route path="ayuda" element={<Help />} />
        </Route>
      </Routes>
    </>
  )
}
