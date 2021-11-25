import React, { useState } from "react";
import { connect } from "react-redux";
import { searchRecipes } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo-food.png";
import "./NavBar.css";

function NavBar(props) {
  const [recipe, setRecipe] = useState("");

  function handleChange(e) {
    setRecipe(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.searchRecipes(recipe);
    setRecipe("");
  }

  return (
    <nav className="nav-b">
      <div className="links">
        <img className="logo" src={Logo} alt="" />
        <Link className="link-ho" to="/home">
          HOME
        </Link>
        <Link className="link-addR" to="/add">
          ADD A RECIPE
        </Link>
        <Link className="link-ab" to="/about">
          ABOUT
        </Link>

        <div className="form">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}>
            <input
              className="search-input"
              type="text"
              placeholder="Recipes by name"
              value={recipe}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input className="search-submit-btn" type="submit" value="search" />
          </form>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipes: (recipe) => dispatch(searchRecipes(recipe)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
