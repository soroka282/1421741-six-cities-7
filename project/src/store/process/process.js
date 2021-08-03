import {createReducer} from '@reduxjs/toolkit';
import {changingCity, sortCard} from '../action';

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_SORT_TYPE = 'Popular';

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  sortType: DEFAULT_SORT_TYPE,
};

const process = createReducer(initialState, (builder) => {
  builder
    .addCase(changingCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(sortCard, (state, action) => {
      state.sortType = action.payload;
    });
});

export {process};
