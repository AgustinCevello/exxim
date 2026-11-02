import { useEffect, useState } from 'react'
import { CircleMarker, MapContainer, Polyline, Popup, TileLayer, Tooltip } from 'react-leaflet'
import { countries } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

const home = countries.find((c) => c.home)
const others = countries.filter((c) => !c.home)

export default function CorrespondentMap() {
  const { L, t } = useI18n()
  const [map, setMap] = useState(null)
  const [active, setActive] = useState(false)

  // El mapa arranca "bloqueado": no captura el scroll de la página.
  // Se activa al hacer clic y se vuelve a bloquear al salir con el mouse.
  useEffect(() => {
    if (!map) return
    const parts = ['dragging', 'scrollWheelZoom', 'doubleClickZoom', 'touchZoom', 'boxZoom', 'keyboard']
    parts.forEach((p) => {
      if (map[p]) active ? map[p].enable() : map[p].disable()
    })
    if (map.tap) active ? map.tap.enable() : map.tap.disable()
  }, [map, active])

  return (
    <div className="corr-map panel" onMouseLeave={() => setActive(false)}>
      {!active && (
        <button type="button" className="map-gate" onClick={() => setActive(true)} aria-label={t('map.activate')}>
          <span className="map-gate-pill">{t('map.activate')}</span>
        </button>
      )}
      <MapContainer
        ref={setMap}
        center={[10, -30]}
        zoom={2}
        minZoom={2}
        scrollWheelZoom={false}
        worldCopyJump
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
        />

        {/* Líneas desde la casa central a cada corresponsal */}
        {home &&
          others.map((c) => (
            <Polyline
              key={`line-${c.code}`}
              positions={[
                [home.coords.lat, home.coords.lng],
                [c.coords.lat, c.coords.lng],
              ]}
              pathOptions={{ color: '#e8742a', weight: 1.5, opacity: 0.55, dashArray: '4 6' }}
            />
          ))}

        {/* Corresponsales */}
        {others.map((c) => (
          <CircleMarker
            key={c.code}
            center={[c.coords.lat, c.coords.lng]}
            radius={8}
            pathOptions={{ color: '#15304d', weight: 2, fillColor: '#2b537d', fillOpacity: 0.9 }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {L(c.name)}
            </Tooltip>
            <Popup>
              <strong>{L(c.name)}</strong>
              <br />
              <span style={{ color: '#5a6b7b' }}>{L(c.role)}</span>
              <br />
              {L(c.note)}
            </Popup>
          </CircleMarker>
        ))}

        {/* Casa central */}
        {home && (
          <CircleMarker
            center={[home.coords.lat, home.coords.lng]}
            radius={10}
            pathOptions={{ color: '#fff', weight: 2.5, fillColor: '#e8742a', fillOpacity: 1 }}
          >
            <Tooltip direction="top" offset={[0, -6]} permanent>
              {L(home.name)}
            </Tooltip>
            <Popup>
              <strong>{L(home.name)}</strong>
              <br />
              <span style={{ color: '#5a6b7b' }}>{L(home.role)}</span>
              <br />
              {L(home.note)}
            </Popup>
          </CircleMarker>
        )}
      </MapContainer>

      <style>{`
        .corr-map{position:relative;isolation:isolate;height:clamp(340px,52vh,520px);overflow:hidden;padding:0;}
        .corr-map .leaflet-container{border-radius:14px;}
        .map-gate{position:absolute;inset:0;z-index:1200;display:flex;align-items:flex-end;
          justify-content:center;padding-bottom:16px;background:transparent;border:0;cursor:pointer;}
        .map-gate-pill{display:inline-flex;align-items:center;gap:.4rem;background:rgba(10,21,33,.82);
          color:#fff;font-size:.82rem;font-weight:600;padding:.5rem .9rem;border-radius:999px;
          box-shadow:0 4px 16px rgba(0,0,0,.35);transition:background .18s ease;}
        .map-gate:hover .map-gate-pill{background:rgba(10,21,33,.94);}
      `}</style>
    </div>
  )
}
