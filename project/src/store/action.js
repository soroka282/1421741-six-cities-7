import {
  adaptedOffersToClient,
  adaptedReviewsToClient
} from '../const';

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
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFER_NEARBY: 'data/loadOfferNearby',
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
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: adaptedOffersToClient([offer]),
  }),
  loadOfferNearby: (offerNearby) => ({
    type: ActionType.LOAD_OFFER_NEARBY,
    payload: adaptedOffersToClient(offerNearby),
  }),
  authInfo: (auth) => ({
    type: ActionType.AUTH_INFO,
    payload: auth,
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
