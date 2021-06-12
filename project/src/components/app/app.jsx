import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../../components-page/main/main-page';
import SignInPage from '../../components-page/login/login-page.jsx';
import FavoritePage from '../../components-page/favorites/favorites-page.jsx';
import RoomPage from '../../components-page/offers/room-page.jsx';
import NotFoundPage from '../../components-page/not-found/not-found-page.jsx';
import {AppRoute} from '../../const.js';

function App(props) {
  const {data} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={data}/>
        </Route>

        <Route exact path={AppRoute.LOG_IN}>
          <SignInPage />
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <FavoritePage />
        </Route>

        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
