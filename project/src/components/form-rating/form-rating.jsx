import React from 'react';
import PropTypes from 'prop-types';
import RatingInput from '../rating-input/rating-input';

const RATINGS = [5, 4, 3, 2, 1];

function FormRating(props) {
  const {setUserRating} = props;
  return (
    <div className="reviews__rating-form form__rating">
      {RATINGS.map((rating) => <RatingInput rating={rating} key={rating} setUserRating={setUserRating} /> ) }
    </div>
  );
}

FormRating.propTypes = {
  setUserRating: PropTypes.func.isRequired,
};

export default FormRating;
