import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SortList from '../../components/sort-list/sort-list';

function SortForm({sortType}) {

  const [showSortList, setShowSortList] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={ () => showSortList === false ? setShowSortList(true) : setShowSortList(false)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      < SortList showSortList={showSortList} />
    </form>
  );
}

SortForm.propTypes = {
  sortType: PropTypes.string,
};

const mapStateToProps = ({sortType}) => ({
  sortType,
});

export default connect(mapStateToProps)(SortForm);
