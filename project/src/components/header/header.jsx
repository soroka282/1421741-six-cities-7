import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {logout} from '../../store/api-actions';

function Header({logOut, authorizationStatus, authInfo}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH &&
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img style={{borderRadius: '100%'}} src='https://7.react.pages.academy/static/avatar/5.jpg' alt='user' />
                    </div>
                    <span className="header__user-name user__name">{authInfo.email}</span>
                  </Link>
                </li>}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.LOG_IN} onClick={logOut}>
                  <span className="header__signout">{authorizationStatus === AuthorizationStatus.AUTH ? 'Sign out' : 'Sign in'}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.object.isRequired,
};

const mapStateToProps = ({authorizationStatus, authInfo}) => ({
  authorizationStatus,
  authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logOut() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
