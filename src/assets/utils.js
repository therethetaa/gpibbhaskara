export const formatCurrency = (number) => {
  const text = new Intl.NumberFormat('id-ID', {
    // style: 'currency',
    // currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number || 0)

  return text.replace(/\xa0/g, ' ').replace(/\u202f/g, ' ')
}

/** Format date locale */
export const formatDate = (date, hideTime = false, short = false) => {
  let dateObj = Date.parse(date)

  if (!dateObj) {
    dateObj = new Date(Date.now())
  }

  return new Intl.DateTimeFormat('id', {
    weekday: !short ? 'long' : undefined,
    day: 'numeric',
    month: !short ? 'long' : 'short',
    year: 'numeric',
    hour: !hideTime ? 'numeric' : undefined,
    minute: !hideTime ? 'numeric' : undefined,
  }).format(dateObj)
}

export const formatTime = (date) => {
  const dateObj = Date.parse(date)

  if (!dateObj) {
    return '-'
  }

  return new Intl.DateTimeFormat('id', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(dateObj)
}

export const formatEkspedisi = (ekspedisi) => {
  if (!ekspedisi) return '-'
  const splittedEkspedisi = ekspedisi.split('|')
  return `${splittedEkspedisi[0].toUpperCase()} ${splittedEkspedisi[1].toUpperCase()}`
}
