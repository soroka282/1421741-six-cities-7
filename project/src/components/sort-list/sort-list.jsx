import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action.js';

const Sort = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function SortList(props) {
  const {showSortList, sortType, sortCard} = props;

  return (
    <ul className={`places__options places__options--custom ${showSortList && 'places__options--opened'} `}>
      {Sort.map((item, id) =>  <li className={`places__option ${item === sortType && 'places__option--active'} `} key={id++} tabIndex="0" onClick={() => sortCard(item)}>{item}</li>)}
    </ul>
  );
}

SortList.propTypes = {
  showSortList: PropTypes.bool,
  sortType: PropTypes.string,
  sortCard: PropTypes.func,
};

const mapStateToProps = ({sortType, offers}) => ({
  sortType,
  offers,
});

const mapDispatchToProps = (dispatch) => ({
  sortCard(types) {
    dispatch(ActionCreator.sortCard(types));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
