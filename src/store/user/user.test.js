import { ActionType } from '../action';
import { user } from './user';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const userData = {login: 'a@ff.ru', password: 'qwerty'};


describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = initialState;

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        authStatus: AuthorizationStatus.AUTH,
        authInfo: userData,
      },
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: userData,
      });
  });

  it('should update authorizationStatus to "NO_AUTH" by logout', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      authInfo: userData,
    };

    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      });
  });
});
