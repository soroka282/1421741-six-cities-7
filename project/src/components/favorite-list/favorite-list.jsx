import React from 'react';
import PropTypes from 'prop-types';
import FavoriteItem from '../favorite-item/favorite-item';

function FavoriteList(props) {
  const {offers} = props;
  return (
    <ul className="favorites__list">
      { offers.map((offer) => offer.isFavorite && <FavoriteItem offer={offer} key={offer.id} /> )}
    </ul>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default FavoriteList;
