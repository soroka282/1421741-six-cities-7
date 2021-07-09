import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OfferCard from '../../components/offer-item/offer-card';
import {Type} from '../../const';
import {isCheckedAuth} from '../../utils/common';
import LoadingPage from '../../components-page/loading-page/loading-page';

function OffersList(props) {
  const {offers, setSelectedPoint, isDataLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => <OfferCard setSelectedPoint={setSelectedPoint} offer={offer} key={offer.id} type={Type.OFFER}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  setSelectedPoint: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps, null)(OffersList);

