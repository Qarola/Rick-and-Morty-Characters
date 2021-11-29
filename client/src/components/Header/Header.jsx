import React from 'react';
import logo from '../../img/letras.jpg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__image" src={logo} alt="logo rick and morty" />
      </Link>
    </header>
  );
}
export default Header;
