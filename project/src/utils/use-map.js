import {useEffect, useState} from 'react';
import L from 'leaflet';

function useMap(mapRef, city, cityName) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = L.map(mapRef.current).setView([city[cityName].lat, city[cityName].lng], city[cityName].zoom);
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city, cityName]);

  return map;
}

export default useMap;
