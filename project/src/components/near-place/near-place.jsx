import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-item/offer-card';
import {Type} from '../../const';

const ADDITIONAL_PLACES = 3;

function NearPlace(props) {
  const {offers} = props;
  return (
    <div className="near-places__list places__list">
      {offers.slice(0, ADDITIONAL_PLACES).map((offer) => <OfferCard offer={offer} key={offer.id} type={Type.ROOM}/> )}
    </div>);
}

NearPlace.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default NearPlace;
