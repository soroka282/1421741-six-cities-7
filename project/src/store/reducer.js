import {ActionType} from './action';
import {offers} from '../mock/offers';
import {reviews} from '../mock/comment';

const DEFOLT_NAME = 'Paris';

const initialState = {
  name: DEFOLT_NAME,
  offers: offers.filter((offer) => offer.city.name === DEFOLT_NAME ),
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGING_CITY:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.FILLING_STATE:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name ===  action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
