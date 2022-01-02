import React from "react";
import Characters from './components/Characters/Characters.jsx';
import Header from './components/Header/Header.jsx';
import CharacterDetail from './components/CharacterDetail/CharacterDetail.jsx';
import Episodes from './components/Episodes/Episodes.jsx';
import Locations from './components/Locations/Locations.jsx';
import StatusAndGender from "./components/StatusAndGender/StatusAndGender.jsx";
import Footer from "./components/Footer/Footer.jsx"
import initialization from "../../Firebase/firebase.init";
import { Route } from "react-router-dom"; 
import "./stylesheets/App.scss";

initialization();

function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
      <Route exact path="/" component={Characters} />
      <Route path="/characters/:id" component={CharacterDetail} />      
      <Route path="/statusandgender" component={StatusAndGender} />
      <Route path="/locations" component={Locations} /> 
      <Route path="/episodes" component={Episodes} />
    </React.Fragment>
    <Footer />
    </div>  

  );
}

export default App;
