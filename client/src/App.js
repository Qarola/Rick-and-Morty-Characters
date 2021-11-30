import React from "react";
//import { useSelector } from 'react-redux';
import Characters from './components/Characters/Characters.jsx';
import Header from './components/Header/Header.jsx';
import CharacterDetail from './components/CharacterDetail/CharacterDetail.jsx';
//import NoCharacterDetail from "./components/NoCharacterDetail/NoCharacterDetail.jsx";
import Episodes from './components/Episodes/Episodes.jsx';
import Locations from './components/Locations/Locations.jsx';
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { Route } from "react-router-dom"; 

import "./stylesheets/App.scss";

function App() {
/*   const charDetail = useSelector((state) => state.characterDetail)

  const renderCharacterDetail = (routerProps) => {
    const routerId = routerProps.match.params.id;
    const characterFound = charDetail.find((character) => character.id === parseInt(routerId)
    );
    if(characterFound) {
      return <CharacterDetail character={characterFound} />
    } else {
      return <NoCharacterDetail />
    }
  };
   */
  
  return (
    <div className="App">
      <React.Fragment>
      <Route exact path="/" component={Header} />
{/*       <Route path='/' component={SearchBar} />
 */}      <Route exact path="/" component={Characters} />
      <Route path="/characters/:id" component={CharacterDetail} />      {/*    render={renderCharacterDetail} /> */}
      <Route path="/episodes" component={Episodes} />
      <Route path="/locations" component={Locations} /> 
    </React.Fragment>
    </div>  

  );
}

export default App;
