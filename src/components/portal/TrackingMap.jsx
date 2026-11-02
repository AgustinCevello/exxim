import { useEffect, useMemo, useRef, useState } from 'react'
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip } from 'react-leaflet'
import { milestoneSteps } from '../../data/portal'
import { useI18n } from '../../i18n/I18nContext'

/* Curva (bezier cuadrática) entre origen y destino, con arco. */
function buildCurve(a, b, segments = 120) {
  const mx = (a.lng + b.lng) / 2
  const my = (a.lat + b.lat) / 2
  const dx = b.lng - a.lng
  const dy = b.lat - a.lat
  // control desplazado perpendicular para dar el arco
  const cx = mx - dy * 0.22
  const cy = my + dx * 0.22
  const pts = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const lat = (1 - t) ** 2 * a.lat + 2 * (1 - t) * t * cy + t ** 2 * b.lat
    const lng = (1 - t) ** 2 * a.lng + 2 * (1 - t) * t * cx + t ** 2 * b.lng
    pts.push([lat, lng])
  }
  return pts
}

function MovingMarker({ curve, progress }) {
  const [idx, setIdx] = useState(0)
  const raf = useRef(null)
  const maxIdx = Math.max(1, Math.round(curve.length * progress))

  useEffect(() => {
    let start = null
    const duration = 4200
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setIdx(maxIdx - 1)
      return
    }
    const tick = (ts) => {
      if (start === null) start = ts
      const elapsed = (ts - start) % (duration + 900)
      const t = Math.min(1, elapsed / duration)
      setIdx(Math.floor(t * (maxIdx - 1)))
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [maxIdx])

  const pos = curve[Math.min(idx, curve.length - 1)]
  if (!pos) return null
  return (
    <>
      <CircleMarker center={pos} radius={10} pathOptions={{ color: '#e8742a', weight: 3, fillColor: '#e8742a', fillOpacity: 0.25 }} />
      <CircleMarker center={pos} radius={5} pathOptions={{ color: '#fff', weight: 2, fillColor: '#e8742a', fillOpacity: 1 }} />
    </>
  )
}

export default function TrackingMap({ operation }) {
  const { L } = useI18n()
  const curve = useMemo(() => buildCurve(operation.origin, operation.destination), [operation])
  const progress = Math.min(
    1,
    operation.completedMilestones.length / milestoneSteps.length,
  )
  const traveledCount = Math.max(1, Math.round(curve.length * progress))
  const traveled = curve.slice(0, traveledCount)

  const bounds = [
    [operation.origin.lat, operation.origin.lng],
    [operation.destination.lat, operation.destination.lng],
  ]

  return (
    <div className="track-map panel">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [50, 50] }}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />

        {/* Ruta completa punteada */}
        <Polyline positions={curve} pathOptions={{ color: '#5a6b7b', weight: 2, opacity: 0.5, dashArray: '3 7' }} />
        {/* Tramo recorrido */}
        <Polyline positions={traveled} pathOptions={{ color: '#e8742a', weight: 3.5, opacity: 0.95 }} />

        {/* Origen */}
        <CircleMarker center={[operation.origin.lat, operation.origin.lng]} radius={7}
          pathOptions={{ color: '#fff', weight: 2, fillColor: '#15304d', fillOpacity: 1 }}>
          <Tooltip direction="top">{L(operation.originCity)}</Tooltip>
        </CircleMarker>
        {/* Destino */}
        <CircleMarker center={[operation.destination.lat, operation.destination.lng]} radius={7}
          pathOptions={{ color: '#fff', weight: 2, fillColor: '#2e9e6b', fillOpacity: 1 }}>
          <Tooltip direction="top">{L(operation.destinationCity)}</Tooltip>
        </CircleMarker>

        <MovingMarker curve={curve} progress={progress} />
      </MapContainer>

      <style>{`
        .track-map{height:clamp(300px,45vh,420px);overflow:hidden;padding:0;}
        .track-map .leaflet-container{border-radius:14px;}
      `}</style>
    </div>
  )
}
