import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
  Popup,
} from "react-leaflet";

const Map = ({ height = "400px", clickable, position, setPosition }) => {
  const [coordsMap, setCoordsMap] = useState([-12.0262542, -77.1525914]);

  //es para poder utilizar caracteristicas que trae leaflet por si solo
  const LocationMarker = () => {
    //volar en el mapa
    if(coordsMap) {
      // console.log(coordsMap);
      //esto me permite utilizar los métodos de leaflet
      const _map = useMap();
      _map.flyTo(coordsMap);
    }
  };

  useEffect(() => {
    //para saber si tengo permisos
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        // console.log(location)
        const { coords: { latitude, longitude }} = location;
        setCoordsMap( [ latitude, longitude ] );
      })
    }
  }, []);

  return (
    <div className="w-full border-2 border-gray-600 rounded" style={{ height }}>
      <MapContainer center={coordsMap} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {/* manera estática */}
        <Marker position={coordsMap} >
          <Popup>
            Hola!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
