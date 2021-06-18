import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ReviewItem from '../review-item/review-item';

function ReviewsList(props) {
  const {reviews} = props;
  const reviewsSortByDate = reviews.sort((a, b) => dayjs(b.date).diff(a.date));
  return (
    <ul className="reviews__list">
      {reviewsSortByDate.map((review) => <ReviewItem review={review} key={review.id}/> )}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
