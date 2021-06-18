import React from 'react';
import PropTypes from 'prop-types';

function RatingInput(props) {
  const {rating, setUserRating} = props;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" onChange={({target}) => {
        const value = target.value;
        setUserRating(value);}}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

RatingInput.propTypes = {
  rating: PropTypes.number,
  setUserRating: PropTypes.func.isRequired,
};

export default RatingInput;
