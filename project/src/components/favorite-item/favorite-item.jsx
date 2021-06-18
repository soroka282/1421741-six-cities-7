import React from 'react';
import {Link} from 'react-router-dom';
import OfferCard from '../../components/offer-item/offer-card';
import {Type} from '../../const';
import PropTypes from 'prop-types';

function FavoriteItem(props) {
  const {offer} = props;

  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#/">
            <span>{offer.city.name}</span>
          </Link>
        </div>
      </div>
      <ul className="favorites__places">
        <li style={{listStyle: 'none'}}>
          <OfferCard offer={offer} type={Type.FAVORITE}/>
        </li>
      </ul>
    </li>
  );
}

FavoriteItem.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default FavoriteItem;
