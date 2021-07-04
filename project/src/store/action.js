import {adaptedOffersToClient, adaptedReviewsToClient} from '../const';

export const ActionType = {
  CHANGING_CITY: 'main/changingCity',
  FILLING_STATE: 'main/fillingState',
  SORT_CARD: 'sort/type',
  LOAD_OFFERS: 'data/hotels',
  LOAD_REVIEWS: 'data/comments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changingCity: (cityName) => ({
    type: ActionType.CHANGING_CITY,
    payload: cityName,
  }),
  sortCard: (types) => ({
    type: ActionType.SORT_CARD,
    payload: types,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: adaptedOffersToClient(offers),
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: adaptedReviewsToClient(reviews),
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
