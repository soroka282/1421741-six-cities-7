import React from 'react';
import LocationItem from '../locations-item/locations-item';
import {LOCATIONS} from '../../const';

function LocationsList() {

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location, id) => <LocationItem key={id++} location={location}/>)}
    </ul>);
}

export default LocationsList;
