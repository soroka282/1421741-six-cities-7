import React from 'react';
import PropTypes from 'prop-types';

function RoomGallery(props) {
  const {image} = props;
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt=" studio" />
    </div>
  );
}

RoomGallery.propTypes = {
  image: PropTypes.string.isRequired,
};

export default RoomGallery;
