import React, {useRef, useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../utils/use-map';
import PropTypes from 'prop-types';

const ICON_URL = 'img/pin.svg';
const ICON_ACTIVE_URL = 'img/pin-active.svg';
const ICON_SIZE = [30, 30];
const ICON_ANCHOR = [15, 30];

function MapCity(props) {
  const {city, offers, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    const icon = L.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    const iconActive = L.icon({
      iconUrl: ICON_ACTIVE_URL,
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    if (map) {
      offers.forEach((point) => {
        L.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
          zoom: point.location.zoom,
        },
        {
          icon: (point.id === selectedPoint)
            ? iconActive
            : icon,
        })
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef}></div>
  );
}

MapCity.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  city: PropTypes.object,
  selectedPoint: PropTypes.number,
};

export default MapCity;
