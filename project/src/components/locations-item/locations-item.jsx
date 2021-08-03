import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { changingCity } from '../../store/action.js';

function LocationItem(props) {
  const {location, cityName, getChangingCity} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${location === cityName && 'tabs__item--active'} `} href='/#'
        onClick={() => {
          getChangingCity(location);
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
  getChangingCity: PropTypes.func.isRequired,
};

const mapStateToProps = ( {PROCESS} ) => ({
  cityName: PROCESS.cityName,
});

const mapDispatchToProps = (dispatch) => ({
  getChangingCity(cityName) {
    dispatch(changingCity(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
