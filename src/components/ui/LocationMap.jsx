import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import { company } from '../../data/site'

export default function LocationMap() {
  const { lat, lng } = company.coords
  return (
    <div className="loc-map panel">
      <MapContainer
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
        .loc-map{height:300px;overflow:hidden;padding:0;}
        .loc-map .leaflet-container{border-radius:14px;}
      `}</style>
    </div>
  )
}
