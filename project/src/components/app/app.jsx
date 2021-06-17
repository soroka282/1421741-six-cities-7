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
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers}/>
        </Route>

        <Route exact path={AppRoute.LOG_IN}>
          <SignInPage />
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <FavoritePage offers={offers}/>
        </Route>

        <Route exact path={`${AppRoute.ROOM}:id`} render={({match}) => {
          const id = match.params.id;
          const filteredOffersById = offers.filter((offerElem) => offerElem.id === Number(id));
          const [filteredOffer] = filteredOffersById;
          return <RoomPage filteredOffer={filteredOffer} reviews={reviews} offers={offers}/>;
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
  reviews: PropTypes.arrayOf(PropTypes.object),
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default App;
