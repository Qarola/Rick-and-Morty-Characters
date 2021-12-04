import React from 'react';
import logo from '../../img/rick-and-morty-31015.png';
import logo2 from '../../img/white-block.png';
import logo3 from '../../img/rick-y-morty-10.gif';
//import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
    {/*   <Link to="/"> */}
        <img className="header__image" src={logo} alt="logo rick and morty" />
        <img className="floatRight" src={logo2} alt="logo rick and morty" />
        <img className='floatRight' src={logo3} alt='logo rick, morty and summer' />
     {/*  </Link> */}
    </header>
  );
}
export default Header;
