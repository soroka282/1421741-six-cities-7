import {createReducer} from '@reduxjs/toolkit';
import {authInfo, requireAuthorization, logOut} from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authInfo: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(authInfo, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(logOut, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {user};
