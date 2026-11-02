import { CircleMarker, MapContainer, Polyline, Popup, TileLayer, Tooltip } from 'react-leaflet'
import { countries } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

const home = countries.find((c) => c.home)
const others = countries.filter((c) => !c.home)

export default function CorrespondentMap() {
  const { L } = useI18n()

  return (
    <div className="corr-map panel">
      <MapContainer
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
        .corr-map{height:clamp(340px,52vh,520px);overflow:hidden;padding:0;}
        .corr-map .leaflet-container{border-radius:14px;}
      `}</style>
    </div>
  )
}
