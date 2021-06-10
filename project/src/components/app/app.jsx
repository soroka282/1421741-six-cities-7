import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import SignInScreen from '../login/login.jsx';
import FavoriteScreen from '../favorites/favorites.jsx';
import RoomScreen from '../offers/room.jsx';
import NotFoundScreen from '../not-found/not-found.jsx';
import {AppRoute} from '../../const.js';

function App(props) {
  const {data} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen offers={data}/>
        </Route>

        <Route exact path={AppRoute.LOG_IN}>
          <SignInScreen />
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <FavoriteScreen />
        </Route>

        <Route exact path={AppRoute.ROOM}>
          <RoomScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
