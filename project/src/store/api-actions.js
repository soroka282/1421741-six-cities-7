import {
  loadOffers,
  loadReviews,
  loadOffer,
  loadOfferNearby,
  loadFavorites,
  requireAuthorization,
  authInfo,
  redirectToRoute,
  logOut
} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS + id)
    .then(({data}) => dispatch(loadReviews(data)))
);

export const fetchOfferItem = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => {
      dispatch(loadOffer(data));
    })
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const sendFavorites = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(loadFavorites(data)))
);

export const fetchNearbyOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadOfferNearby(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('X-Token', data.token);
      dispatch(authInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const sendReview = ({idCard, comment, rating}) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS + idCard, {comment, rating})
    .then(({data}) => dispatch(loadReviews(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => dispatch(authInfo({})))
    .then(() => localStorage.removeItem('X-Token'))
    .then(() => dispatch(logOut()))
);
