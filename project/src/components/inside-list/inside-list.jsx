import React from 'react';
import PropTypes from 'prop-types';
import RoomInside from '../../components/room-inside/room-inside';

function InsideList(props) {
  const {goods} = props;
  return (
    <ul className="property__inside-list">
      {goods.map((good, id) => <RoomInside good={good} key={id++}/>)}
    </ul>
  );
}

InsideList.propTypes = {
  goods: PropTypes.array,
};

export default InsideList;
