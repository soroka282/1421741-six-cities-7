import React from 'react';
import PropTypes from 'prop-types';

function CardPrice(props) {
  const {offer} = props;

  return (
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{offer.price}</b>
        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>
      <button className={offer.isFavorite ? 'place-card__bookmark-button--active button place-card__bookmark-button' : 'place-card__bookmark-button button'} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

CardPrice.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default CardPrice;
