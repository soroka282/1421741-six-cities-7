import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardName from  '../../components/card-name/card-name';
import CardRating from '../../components/card-rating/card-rating';
import CardPrice from '../../components/card-price/card-price';
import {CardType} from '../../utils/setting';
import {Type, AppRoute} from '../../const';

function OfferCard(props) {
  const {offer, type} = props;
  const [ ,setUserChoicePlaceId] = useState('');
  return (
    <article className={CardType[type].classNameArticle} data-id={offer.id}
      onMouseEnter={({target}) => {
        setUserChoicePlaceId(target.getAttribute('data-id'));
      }}
    >
      {offer.isPremium && CardType[Type.OFFER] === CardType[type] &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={CardType[type].classNameImg}>
        <Link to={`${AppRoute.ROOM}${offer.id}`} offer={offer}>
          <img className="place-card__image" src={offer.previewImage} width={CardType[type].width} height={CardType[type].height} alt="Place"/>
        </Link>
      </div>
      <div className={CardType[type].classNameDiv}>
        <CardPrice offer={offer} />
        <CardRating offer={offer} />
        <CardName offer={offer} />
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};


export default OfferCard;
