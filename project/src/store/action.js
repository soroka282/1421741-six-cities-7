import {createAction} from '@reduxjs/toolkit';

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
  LOAD_FAVORITES: 'data/loadFavorites',
};

export const changingCity = createAction(ActionType.CHANGING_CITY, (cityName) => ({
  payload: cityName,
}));

export const sortCard = createAction(ActionType.SORT_CARD, (types) => ({
  payload: types,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: adaptedOffersToClient(offers),
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: adaptedOffersToClient([offer]),
}));

export const loadOfferNearby = createAction(ActionType.LOAD_OFFER_NEARBY, (offerNearby) => ({
  payload: adaptedOffersToClient(offerNearby),
}));

export const authInfo = createAction(ActionType.AUTH_INFO, (auth) => ({
  payload: auth,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: adaptedReviewsToClient(reviews),
}));

export const checkStatusLoad = createAction(ActionType.CHECK_STATUS_LOAD, (isDataLoaded) => ({
  payload: isDataLoaded,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logOut = createAction(ActionType.LOGOUT, () => ({
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: adaptedOffersToClient([favorites]),
}));
