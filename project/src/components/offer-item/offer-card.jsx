import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getRatingPercent} from '../../utils/common';
import {CardType} from '../../utils/setting';
import {Type, AppRoute} from '../../const';

function OfferCard(props) {
  const {offer, type, onListItemHover} = props;

  const listItemHoverHandler = (evt) => {
    onListItemHover(offer.id);
  };

  return (
    <article className={CardType[type].classNameArticle} onMouseMove={listItemHoverHandler}>
      {offer.isPremium && CardType[Type.OFFER] === CardType[type] &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={CardType[type].classNameImg}>
        <Link to={`${AppRoute.ROOM}${offer.id}`} offer={offer}>
          <img className="place-card__image" onMouseMove={listItemHoverHandler} src={offer.previewImage} width={CardType[type].width} height={CardType[type].height} alt="Place"/>
        </Link>
      </div>
      <div className={CardType[type].classNameDiv} onMouseMove={listItemHoverHandler}>
        <div className="place-card__price-wrapper" onMouseMove={listItemHoverHandler}>
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
        <div className="place-card__rating rating" onMouseMove={listItemHoverHandler}>
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" >
          <Link to={`${AppRoute.ROOM}${offer.id}`} onMouseMove={listItemHoverHandler}>{offer.title}</Link>
        </h2>
        <p className="place-card__type" onMouseMove={listItemHoverHandler}>{offer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onListItemHover: PropTypes.func,
};


export default OfferCard;
