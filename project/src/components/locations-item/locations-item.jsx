import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action.js';

function LocationItem(props) {
  const {location, cityName, changingCity} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${location === cityName && 'tabs__item--active'} `} href='/#'
        onClick={() => {
          changingCity(location);
        }}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  changingCity: PropTypes.func.isRequired,
};

const mapStateToProps = ( {cityName} ) => ({
  cityName,
});

const mapDispatchToProps = (dispatch) => ({
  changingCity(cityName) {
    dispatch(ActionCreator.changingCity(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
