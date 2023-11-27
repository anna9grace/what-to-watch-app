import React from 'react';
import {Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoutes } from '../../const';
import { isCheckedAuth } from '../../utils/utils';
import { getDataStatus, getPromoDataStatus } from '../../store/main-data/selectors';
import { getAuthStatus } from '../../store/user/selectors';

import 'react-toastify/dist/ReactToastify.css';

const renderLoadingScreen = () => <LoadingScreen />;

const renderAppScreen = () => (
  <Switch>
    <Route exact path={AppRoutes.ROOT}>
      <MainScreen />
    </Route>

    <Route exact path={AppRoutes.SIGN_IN}
      render={() => <SignInScreen />}
    />

    <PrivateRoute exact path={AppRoutes.MY_LIST}
      render={() => <MyListScreen />}
    />

    <Route
      exact path={`${AppRoutes.FILM}/:id`}
      render={(data) => (
        <FilmScreen
          filmId={data.match.params.id}
        />)}
    />

    <PrivateRoute
      exact path={`${AppRoutes.FILM}/:id/review`}
      render={(data) => (
        <AddReviewScreen
          filmId={data.match.params.id}
        />)}
    />

    <Route
      exact path={`${AppRoutes.PLAYER}/:id`}
      render={(data) => (
        <PlayerScreen
          filmId={data.match.params.id}
        />
      )}
    />

    <Route>
      <NotFoundScreen />
    </Route>
  </Switch>
);


function App(props) {
  const { authorizationStatus, isDataLoaded, isPromoDataLoaded } = props;
  const isPageSuccess = isCheckedAuth(authorizationStatus) && isDataLoaded && isPromoDataLoaded;

  return (
    <React.Fragment>
      {(isPageSuccess && renderAppScreen()) || renderLoadingScreen()}

      <ToastContainer
        autoClose={false}
      />
    </React.Fragment>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getDataStatus(state),
  isPromoDataLoaded: getPromoDataStatus(state),
  authorizationStatus: getAuthStatus(state),
});

export { App };
export default connect(mapStateToProps, null)(App);
