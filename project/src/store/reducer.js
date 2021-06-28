import {ActionType} from './action';
import {offers} from '../mock/offers';
import {reviews} from '../mock/comment';

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_SORT_TYPE = 'Popular';

const initialState = {
  name: DEFAULT_CITY_NAME,
  sortType: DEFAULT_SORT_TYPE,
  offers: offers
    .slice()
    .filter((offer) => offer.city.name === DEFAULT_CITY_NAME)
    .sort(),
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGING_CITY:
      return {
        ...state,
        name: action.payload,
        sortType: DEFAULT_SORT_TYPE,
      };
    case ActionType.FILLING_STATE:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name ===  action.payload),
      };
    case ActionType.SORT_CARD:
      return {
        ...state,
        sortType: action.payload,
        offers: action.offers,
      };
    default:
      return state;
  }
};

export {reducer};
