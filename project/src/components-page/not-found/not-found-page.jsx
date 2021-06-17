import React from 'react';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage() {
  return (
    <div>
      <p>«404 Not Found»</p>
      <p>Переход на
        <Link to={AppRoute.MAIN}> главную страницу</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;


