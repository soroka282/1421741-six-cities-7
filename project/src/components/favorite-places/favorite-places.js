import React from 'react';
import OfferCard from '../../components/offer-item/offer-card';
import {Type} from '../../const';
import PropTypes from 'prop-types';

function FavoritePlaces(props) {
  const {offer} = props;

  return(
    <li style={{listStyle: 'none'}}>
      <OfferCard offer={offer} type={Type.FAVORITE}/>
    </li>
  );
}

FavoritePlaces.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default FavoritePlaces;
