import { useEffect, useState } from 'react'

const DATE_UNITS = [
  // A cuanto equivale cada unidad en segundos
  // Necesitamos el nombre de la unidad en el Intl
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const elapsed = (now - timestamp) / 1000 // diferencia entre hora actual y hora del devit
  // le restamos mil para quitar los milisegundos al timestamp, y quedar solo con los segundos
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (elapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(elapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeAgo(newTimeAgo)
    }, 5000)
    return () => clearInterval(interval)
  }, [timestamp])

  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'short'
  })

  const { value, unit } = timeAgo

  return rtf.format(value, unit)
}
