import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
