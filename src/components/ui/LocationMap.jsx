import { useEffect, useState } from 'react'
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import { company } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

export default function LocationMap() {
  const { lat, lng } = company.coords
  const { t } = useI18n()
  const [map, setMap] = useState(null)
  const [active, setActive] = useState(false)

  // Mapa bloqueado hasta hacer clic (no se roba el scroll de la página).
  useEffect(() => {
    if (!map) return
    const parts = ['dragging', 'scrollWheelZoom', 'doubleClickZoom', 'touchZoom', 'boxZoom', 'keyboard']
    parts.forEach((p) => {
      if (map[p]) active ? map[p].enable() : map[p].disable()
    })
    if (map.tap) active ? map.tap.enable() : map.tap.disable()
  }, [map, active])

  return (
    <div className="loc-map panel" onMouseLeave={() => setActive(false)}>
      {!active && (
        <button type="button" className="map-gate" onClick={() => setActive(true)} aria-label={t('map.activate')}>
          <span className="map-gate-pill">{t('map.activate')}</span>
        </button>
      )}
      <MapContainer
        ref={setMap}
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
        <CircleMarker
          center={[lat, lng]}
          radius={11}
          pathOptions={{ color: '#fff', weight: 2.5, fillColor: '#e8742a', fillOpacity: 1 }}
        >
          <Popup>
            <strong>{company.name}</strong>
            <br />
            {company.address}
          </Popup>
        </CircleMarker>
      </MapContainer>

      <style>{`
        .loc-map{position:relative;isolation:isolate;height:300px;overflow:hidden;padding:0;}
        .loc-map .leaflet-container{border-radius:14px;}
        .loc-map .map-gate{position:absolute;inset:0;z-index:1200;display:flex;align-items:flex-end;
          justify-content:center;padding-bottom:16px;background:transparent;border:0;cursor:pointer;}
        .loc-map .map-gate-pill{display:inline-flex;align-items:center;gap:.4rem;background:rgba(10,21,33,.82);
          color:#fff;font-size:.82rem;font-weight:600;padding:.5rem .9rem;border-radius:999px;
          box-shadow:0 4px 16px rgba(0,0,0,.35);transition:background .18s ease;}
        .loc-map .map-gate:hover .map-gate-pill{background:rgba(10,21,33,.94);}
      `}</style>
    </div>
  )
}
