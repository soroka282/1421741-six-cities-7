import React from 'react';
import {Link} from 'react-router-dom';
import FavoritePlaces from '../../components/favorite-places/favorite-places';
import PropTypes from 'prop-types';

function FavoriteItem(props) {
  const {offers, city} = props;

  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <ul className="favorites__places">
        {offers.map((offer, id) => offer.city.name === city && offer.isFavorite && < FavoritePlaces key={++id} offer={offer} />)}
      </ul>
    </li>
  );
}

FavoriteItem.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoriteItem;
