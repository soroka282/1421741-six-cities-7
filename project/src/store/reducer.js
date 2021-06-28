import {ActionType} from './action';
import {offers} from '../mock/offers';
import {reviews} from '../mock/comment';

const DEFAULT_CITY_NAME = 'Paris';

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGING_CITY:
      return {
        ...state,
        cityName: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
