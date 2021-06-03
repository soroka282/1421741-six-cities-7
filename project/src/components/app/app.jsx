import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main/main';

function App(props) {
  const {data} = props;
  return (
    <MainScreen offers={data}/>
  );
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
