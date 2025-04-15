import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import mapData from './../mapdata.json'

const geoUrl = process.env.PUBLIC_URL + '/countries-110m.json'

export default function MapWithInteraction() {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      className='svg__body'
    >
      <ZoomableGroup
        center={[10.0, 50.0]}
        zoom={4}
        minZoom={3.2}
        maxZoom={6}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#222"
                stroke="#444"
                strokeWidth={0.4}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' }
                }}
              />
            ))
          }
        </Geographies>

        {mapData.map((point, index) => (
          <Marker key={index} coordinates={[point.lng, point.lat]}>
            <foreignObject width={38} height={23} x={0} y={0}>
              <a
                href={point.videoUrl}
                xmlns="http://www.w3.org/1999/xhtml"
                className="map__element__container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={point.thumbnail} className="map__element__preview" alt={point.title} />
                <span className="map__element_name">{point.title}</span>
                <span className="map__element__years">{point.years}</span>
              </a>
            </foreignObject>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  )
}
