import {ActionType} from './action';
import { AuthorizationStatus } from '../const';

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_SORT_TYPE = 'Popular';

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.AUTH,
  offers: [],
  reviews: [],
  review: {},
  isDataLoaded: false,
  authInfo: {},
  offerNearby: [],

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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFER_NEARBY:
      return {
        ...state,
        offerNearby: action.payload,
      };
    case ActionType.AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    case ActionType.CHECK_STATUS_LOAD:
      return {
        ...state,
        isDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
