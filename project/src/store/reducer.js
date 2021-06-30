import {ActionType} from './action';
import {offers} from '../mock/offers';
import {reviews} from '../mock/comment';

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_SORT_TYPE = 'Popular';

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  sortType: DEFAULT_SORT_TYPE,
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
    case ActionType.SORT_CARD:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
