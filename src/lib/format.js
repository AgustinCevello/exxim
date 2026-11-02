export function formatCurrency(amount, lang = 'es') {
  try {
    return new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    return `$ ${amount.toLocaleString('es-AR')}`
  }
}

export function formatDate(iso, lang = 'es') {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-AR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}
