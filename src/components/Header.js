import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  let link = '',
    linkText = '';
  if (props.location.pathname === '/sign-in') {
    link = '/sign-up';
    linkText = 'Регистрация';
  } else if (props.location.pathname === '/sign-up') {
    link = '/sign-in';
    linkText = 'Войти';
  }

  console.log(props);

  return (
    <header className="header">
      <a className="header__logo" href="/">
        &nbsp;
      </a>
      <div className="header__menu">
        {props.loggedIn ? (
          <>
            <div className="header__user-email">{props.email}</div>
            <button className="header__exit-button" onClick={props.handleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <Link className="header__link" to={link}>
            {linkText}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
