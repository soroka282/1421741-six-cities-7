import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.jsx';
import OfferList from '../../components/offer-list/offer-list';
import LocationList from '../../components/locations-list/locations-list';
import SortForm from '../../components/sort-form/sort-form';
import MapCity from '../../components/map/map';
import {connect} from 'react-redux';
import {getSortCardElement} from '../../utils/common';
import NoFreePlaces from '../../components/no-places/no-places';
import {fetchOffersList} from '../../store/api-actions';
import { checkStatusLoad } from '../../store/action.js';

function MainPage(props) {
  const {cityName, sortOffers, loadOffersList, getCheckStatusLoad} = props;
  const [selectedPoint, setSelectedPoint] = useState(0);

  useEffect(() => {
    loadOffersList();
    getCheckStatusLoad();
  }, [loadOffersList, getCheckStatusLoad]);

  return (
    <section>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList />
            </section>
          </div>
          <div className="cities">
            { sortOffers.length ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortOffers.length} places to stay in {cityName}</b>
                  <SortForm />
                  <OfferList offers={sortOffers} setSelectedPoint={setSelectedPoint}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <MapCity points={sortOffers} cityName={cityName} selectedPoint={selectedPoint}/>
                  </section>
                </div>
              </div>
              : <NoFreePlaces /> }
          </div>
        </main>
      </div>
    </section>
  );
}

MainPage.propTypes = {
  cityName: PropTypes.string.isRequired,
  sortOffers: PropTypes.array.isRequired,
  loadOffersList: PropTypes.func.isRequired,
  getCheckStatusLoad: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  cityName: PROCESS.cityName,
  offers: DATA.offers,
  sortOffers: getSortCardElement(PROCESS.sortType, DATA.offers.filter((offer) => offer.city.name === PROCESS.cityName)),
  sortType: PROCESS.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffersList() {
    dispatch(fetchOffersList());
  },
  getCheckStatusLoad() {
    dispatch(checkStatusLoad());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
