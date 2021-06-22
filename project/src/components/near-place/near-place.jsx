import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-item/offer-card';
import {Type} from '../../const';

function NearPlace(props) {
  const {offers, setSelectedPoint} = props;
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => <OfferCard offer={offer} setSelectedPoint={setSelectedPoint} key={offer.id} type={Type.ROOM}/> )}
    </div>);
}

NearPlace.propTypes = {
  offers: PropTypes.array.isRequired,
  setSelectedPoint: PropTypes.func,
};

export default NearPlace;
