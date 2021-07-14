import React from 'react';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage() {
  return (
    <main className="page__main">
      <div style={{textAlign:'center', fontSize: '50px'}}>
        <p>«404 Not Found»</p>
        <p>Переход на
          <Link style={{color: '#4481c3'}} to={AppRoute.MAIN}> главную страницу</Link>
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;


