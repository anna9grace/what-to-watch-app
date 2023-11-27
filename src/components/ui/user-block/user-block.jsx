import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AppRoutes, AuthorizationStatus} from '../../../const';
import { systemLogout } from '../../../store/api-actions';
import { getAuthInfo, getAuthStatus } from '../../../store/user/selectors';

const renderUserBlockAuthorized = (history, userData, onLogout) => (
  <React.Fragment>
    <li className="user-block__item" data-testid="user-block">
      <div
        className="user-block__avatar"
        onClick={() => history.push(`${AppRoutes.MY_LIST}`)}
      >
        <img src={userData.avatar_url} alt="User avatar" width="63" height="63" />
      </div>
    </li>
    <li className="user-block__item">

      <Link
        className="user-block__link"
        onClick={(evt) => {
          evt.preventDefault();
          onLogout();
        }}
        to='/'
      >
        Sign out
      </Link>
    </li>
  </React.Fragment>
);

const renderUserBlockUnauthorized = () => (
  <Link
    className="user-block__link"
    to={AppRoutes.SIGN_IN}
  >
    Sign in
  </Link>
);


function UserBlock() {
  const authorizationStatus = useSelector(getAuthStatus);
  const authInfo = useSelector(getAuthInfo);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(systemLogout());
  };

  const history = useHistory();

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? renderUserBlockAuthorized(history, authInfo, onLogout)
          : renderUserBlockUnauthorized()
      }
    </ul>
  );
}

export default UserBlock;
