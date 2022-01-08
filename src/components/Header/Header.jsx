/* import React from 'react';
import portal from "../../img/portal-gif.gif";
import rickmorty from "../../img/names.png";
import rickmorty from "../../img/header.gif";

const Header = () => {
  return (
    <header className="header">
      <img src={rickmorty} alt="Rick and Morty" className="rick-morty" />
    </header>
  );
};

export default Header; */



import React from "react";
import logo from "../../img/rick-morty-header.jpg";

function Header() {
  return (
    <header id="header">
      <img className="header" src={logo} alt="logo rick and morty" />
    </header>
  );
}
export default Header;
