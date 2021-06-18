import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../../components/offer-item/offer-card';
import {Type} from '../../const';

function OffersList(props) {
  const {offers, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => <OfferCard onListItemHover={onListItemHover} offer={offer} key={offer.id} type={Type.OFFER}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  onListItemHover: PropTypes.func,
};

export default OffersList;
