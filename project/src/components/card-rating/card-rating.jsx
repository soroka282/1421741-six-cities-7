import React from 'react';
import PropTypes from 'prop-types';
import {getRatingPercent} from '../../utils/common';

function CardRating(props) {
  const {offer} = props;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${getRatingPercent(offer.rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

CardRating.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default CardRating;
