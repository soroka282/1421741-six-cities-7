import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mock/offers.js';
import {reviews} from './mock/comment.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
