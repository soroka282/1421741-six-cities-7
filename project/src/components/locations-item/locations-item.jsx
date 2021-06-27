import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action.js';

function LocationItem(props) {
  const {location, name, changingCity, fillingState} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${location === name && 'tabs__item--active'} `} href='/#'
        onClick={() => {
          changingCity(location);
          fillingState(location);
        }}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changingCity: PropTypes.func.isRequired,
  fillingState: PropTypes.func.isRequired,
};

const mapStateToProps = ( {name} ) => ({
  name,
});

const mapDispatchToProps = (dispatch) => ({
  changingCity(name) {
    dispatch(ActionCreator.changingCity(name));
  },
  fillingState(name) {
    dispatch(ActionCreator.fillingState(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
