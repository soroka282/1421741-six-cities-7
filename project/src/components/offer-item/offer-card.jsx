import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRatingPercent} from '../../utils/common';
import {Type, AppRoute, CardType} from '../../const';
import { sendFavorites } from '../../store/api-actions';

function OfferCard(props) {

  const {offer, type, setSelectedPoint, userFavorite} = props;

  const listItemHoverHandler = () => {
    if (!setSelectedPoint) {
      return;
    }
    setSelectedPoint(Number(offer.id));
  };

  return (
    <article className={CardType[type].classNameArticle}
      onMouseMove={listItemHoverHandler}
    >
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
          <button className={offer.isFavorite ? 'place-card__bookmark-button--active button place-card__bookmark-button' : 'place-card__bookmark-button button'} onClick={({target})=> {

            userFavorite({
              id: offer.id,
              status: + !offer.isFavorite,
            });

          }} type="button"
          >
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
        <h2 className="place-card__name" onMouseMove={listItemHoverHandler}>
          <Link to={`${AppRoute.ROOM}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type" onMouseMove={listItemHoverHandler}>{offer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  setSelectedPoint: PropTypes.func,
  userFavorite: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  userFavorite(data) {
    dispatch(sendFavorites(data));
  },
});

export default connect(null, mapDispatchToProps)(OfferCard);
