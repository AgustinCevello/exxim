import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { demoCredentials } from '../data/portal'

const AuthContext = createContext(null)
const STORAGE_KEY = 'exxim:auth'

function readStored() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(readStored)

  useEffect(() => {
    try {
      if (authed) window.sessionStorage.setItem(STORAGE_KEY, '1')
      else window.sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [authed])

  /* Login hardcodeado (prototipo). Acepta el usuario demo o un email de demo. */
  const login = (user, password) => {
    const u = (user || '').trim().toLowerCase()
    const okUser = u === demoCredentials.user || u === 'admin@exximsrl.com.ar' || u === 'demo'
    if (okUser && password === demoCredentials.password) {
      setAuthed(true)
      return true
    }
    return false
  }

  const logout = () => setAuthed(false)

  const value = useMemo(() => ({ authed, login, logout }), [authed])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
