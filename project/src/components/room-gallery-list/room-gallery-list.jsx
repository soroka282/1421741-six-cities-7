import React from 'react';
import PropTypes from 'prop-types';
import RoomGallery from '../../components/room-gallery/room-gallery';

function RoomGalleryList(props) {
  const {images} = props;
  return (
    <div className="property__gallery">
      {images.map((image, id) => <RoomGallery image={image} key={id++} /> )}
    </div>
  );
}

RoomGalleryList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default RoomGalleryList;
