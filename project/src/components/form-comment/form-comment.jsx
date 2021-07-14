import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FormRating from '../form-rating/form-rating';
import {sendReview} from '../../store/api-actions';
import { fetchReviewsList} from '../../store/api-actions.js';

const MIN_LENGTH = 50;

function FormComment(props) {

  const {userReview, idCard} = props;

  const [userText, setUserText] = useState('');
  const [userRating, setUserRating] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    userReview({
      comment: userText,
      rating: userRating,
      idCard,
    });

    setUserText('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating setUserRating={setUserRating}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={userText} placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength='300' onChange={({target}) => {
        setUserText(target.value);}}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={userText.length < MIN_LENGTH || !userRating}>
          Submit
        </button>
      </div>
    </form>
  );
}

FormComment.propTypes = {
  userReview: PropTypes.func.isRequired,
  idCard: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userReview(review) {
    dispatch(sendReview(review));
  },

  loadReviewsList(id) {
    dispatch(fetchReviewsList(id));
  },
});

export default connect(null, mapDispatchToProps)(FormComment);
