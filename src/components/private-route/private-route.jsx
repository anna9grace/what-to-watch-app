import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { AppRoutes, AuthorizationStatus } from '../../const';

import { getAuthStatus } from '../../store/user/selectors';

function PrivateRoute({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoutes.SIGN_IN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
