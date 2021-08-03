import React from 'react';
import PropTypes from 'prop-types';
import FavoriteItem from '../favorite-item/favorite-item';
import NoFavoritePlaces from '../../components/no-favorite/no-favorite';

function FavoriteList(props) {
  const {offers} = props;

  const offersFavorite = offers.filter((i) => i.isFavorite === true);

  if (!offersFavorite.length) {
    return <NoFavoritePlaces />;
  }

  const offersCity = offers.map((i) => i.city.name);
  const offersCitySet = Array.from(new Set(offersCity));

  return (
    <ul className="favorites__list">
      { offersCitySet.map((city, id) => <FavoriteItem offers={offers} city={city} key={++id} /> )}
    </ul>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default FavoriteList;
