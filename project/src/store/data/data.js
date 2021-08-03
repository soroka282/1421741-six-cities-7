import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadOffer, loadOfferNearby, loadReviews, checkStatusLoad, loadFavorites} from '../action';

const initialState = {
  offers: [],
  offer: [],
  reviews: [],
  review: {},
  isDataLoaded: false,
  offerNearby: [],
  favorites: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(checkStatusLoad, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(loadOfferNearby, (state, action) => {
      state.offerNearby = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    });
});

export {data};
