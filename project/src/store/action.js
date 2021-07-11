import {adaptedOffersToClient, adaptedReviewsToClient, adaptedUserInfoToClient} from '../const';

export const ActionType = {
  CHANGING_CITY: 'main/changingCity',
  FILLING_STATE: 'main/fillingState',
  SORT_CARD: 'sort/type',
  LOAD_OFFERS: 'data/hotels',
  LOAD_REVIEWS: 'data/comments',
  CHECK_STATUS_LOAD: 'data/checkStatusLoad',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  AUTH_INFO: 'user/authInfo',
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
  authInfo: (auth) => ({
    type: ActionType.AUTH_INFO,
    payload: adaptedUserInfoToClient(auth),
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: adaptedReviewsToClient(reviews),
  }),
  checkStatusLoad: (isDataLoaded) => ({
    type: ActionType.CHECK_STATUS_LOAD,
    payload: isDataLoaded,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
