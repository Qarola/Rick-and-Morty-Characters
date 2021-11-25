import React from "react";
import { connect } from "react-redux";
import { searchRecipes, filterRecipesByDiet } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import "./FilteredDiet.css";

function FilteredDiet(props) {
  return (
    <div id="filter-sort">
      <div className="ord">
        <button className="dropdown-btn">
          <strong>Sort by</strong>
        </button>
        <div className="o">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.order("A-Z");
            }}>
            A - Z
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.order("Z-A");
            }}>
            Z - A
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.order("bestHScore");
            }}>
            Best Health Score
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.order("worstHScore");
            }}>
            Worst Health Score
          </button>
        </div>
      </div>
      <div className="filt">
        <button className="dropdown-btn">
          <strong>Filter by</strong>
        </button>
        <div className="f">
          <button
            className="grid-search"
            onClick={(e) => {
              e.preventDefault();
              props.filter("");
            }}>
            Clean Filters
          </button>
          {props.diets &&
            props.diets.map((d) => (
              <button
                key={d.name}
                onClick={(e) => {
                  e.preventDefault();
                  filterRecipesByDiet('')
                  props.filter(d.name);
                 
                }}>
                {d.name}
              </button>
            ))}
        </div>
      </div>
      <div>
        <button
          className="dropdown-btn"
          onClick={(e) => {
            e.preventDefault();
            searchRecipes("");
            props.filter();
          }}>
          <Link to="/home" className="link">
            <strong>Clean Search</strong>
          </Link>
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    diets: state.allDiets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipes: (data) => dispatch(searchRecipes(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredDiet);
