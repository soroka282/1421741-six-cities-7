import React, {useState} from 'react';
import FormRating from '../form-rating/form-rating';

const MIN_LENGTH = 50;

function FormComment() {
  const [userText, setUserText] = useState('');
  const [userRating, setUserRating] = useState(0);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating setUserRating={setUserRating}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" onChange={({target}) => {
        setUserText(target.value);}}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={userText.length < MIN_LENGTH || !userRating} onClick={(evt) => {
          evt.preventDefault();}}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
