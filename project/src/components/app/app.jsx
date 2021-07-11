import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../../components-page/main/main-page';
import SignInPage from '../../components-page/login/login-page.jsx';
import FavoritePage from '../../components-page/favorites/favorites-page.jsx';
import RoomPage from '../../components-page/offers/room-page.jsx';
import NotFoundPage from '../../components-page/not-found/not-found-page.jsx';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../app/browser-history';
import {AppRoute} from '../../const.js';

function App(props) {
  const {offers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>

        <Route exact path={AppRoute.LOG_IN}>
          <SignInPage />
        </Route>

        <PrivateRoute
          exact
          path = {AppRoute.FAVORITES}
          render={() => (
            <FavoritePage/>
          )}
        >
        </PrivateRoute>

        <Route exact path={`${AppRoute.ROOM}:id`} render={({match}) => {
          const id = match.params.id;
          const filteredOffer = offers.find((offerElem) => offerElem.id === Number(id));
          return <RoomPage filteredOffer={filteredOffer} />;
        }}
        >
        </Route>
        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export default connect(mapStateToProps, null)(App);
