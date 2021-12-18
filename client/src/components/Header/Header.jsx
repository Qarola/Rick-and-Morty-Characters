import React from 'react';
import logo from '../../img/rick-morty-header.jpg'

function Header() {
  return (
    <header className="header">
    {/*   <Link to="/"> */}
        <img className='header__image'src={logo} alt="logo rick and morty" />
       {/*  <img className="floatRight" src={logo2} alt="logo rick and morty" />
        <img className='floatRight' src={logo3} alt='logo rick, morty and summer' /> */}
     {/*  </Link> */}
    </header>
  );
}
export default Header;
