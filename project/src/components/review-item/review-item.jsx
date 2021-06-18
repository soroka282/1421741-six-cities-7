import React from 'react';
import dayjs from 'dayjs';
import ReviewProp from '../../utils/review.prop';
import {getRatingPercent} from '../../utils/common';
import {FormatDate} from '../../const';

function ReviewItem(props) {
  const {review} = props;
  const {
    user,
    rating,
    comment,
    date,
  } = review;

  function getParseDate(time, format) {
    return dayjs(time).format(format);
  }

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getParseDate(date, FormatDate.DAY_MONTH_YEAR)}>{getParseDate(date, FormatDate.MONTH_YEAR)}</time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: ReviewProp,
};

export default ReviewItem;
