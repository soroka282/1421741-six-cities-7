import React, {useRef, useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../utils/use-map';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {city} from '../../const';


const ICON_URL = 'img/pin.svg';
const ICON_ACTIVE_URL = 'img/pin-active.svg';
const ICON_SIZE = [30, 30];
const ICON_ANCHOR = [15, 30];

function MapCity(props) {
  const {points, selectedPoint, cityName} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city, cityName);

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

    const layerPoints = L.layerGroup();

    if (map) {
      layerPoints.addTo(map);

      points.forEach((point) => {
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
          .addTo(layerPoints);
      });
    }

    return () => {
      layerPoints.clearLayers();
    };
  }, [map, points, selectedPoint]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef}></div>
  );
}

MapCity.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  selectedPoint: PropTypes.number,
  cityName: PropTypes.string,
};

const mapStateToProps = ( {cityName} ) => ({
  cityName,
});

export default connect(mapStateToProps)(MapCity);
