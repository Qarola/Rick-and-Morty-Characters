import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import About from "./components/About/About.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import NewRecipes from "./components/NewRecipes/NewRecipes.jsx";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail.jsx";
import { Route } from "react-router-dom";

function App() {
  const routes = ["/home", "/about", "/recipes/:id", "/add"];
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path={routes} component={NavBar} />
      <Route exact path={routes[0]} component={Recipes} />
      <Route path={routes[1]} component={About} />
      <Route path={routes[2]} component={RecipeDetail} />
      <Route path={routes[3]} component={NewRecipes} />
    </div>
  );
}

export default App;
