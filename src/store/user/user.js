import {createReducer} from '@reduxjs/toolkit';

import { requireAuthorization, logout } from '../action';
import { AuthorizationStatus } from '../../const';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authInfo = {};
    });
});

export { user };

