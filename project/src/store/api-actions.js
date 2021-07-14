import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS + id)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const fetchOfferItem = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
);

export const fetchNearbyOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOfferNearby(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('X-Token', data.token);
      dispatch(ActionCreator.authInfo(data));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const sendReview = ({idCard, comment, rating}) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS + idCard, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.authInfo({})))
    .then(() => localStorage.removeItem('X-Token'))
    .then(() => dispatch(ActionCreator.logout()))
);
