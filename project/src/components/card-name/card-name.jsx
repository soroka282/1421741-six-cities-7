import React from 'react';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import PropTypes from 'prop-types';

function CardName(props) {
  const {offer} = props;
  return (
    <h2 className="place-card__name">
      <Link to={`${AppRoute.ROOM}${offer.id}`}>{offer.title}</Link>
    </h2>
  );
}

CardName.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default CardName;
