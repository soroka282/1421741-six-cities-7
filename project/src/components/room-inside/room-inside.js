import React from 'react';
import PropTypes from 'prop-types';

function RoomInside(props) {
  const {good} = props;
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

RoomInside.propTypes = {
  good: PropTypes.string,
};

export default RoomInside;
