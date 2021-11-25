import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipeDetail } from "../../redux/actions/index.js";
import "./Recipe.css";

function Recipe(props) {
  return (
    <div className="recp">
      <h3 className="recp-name">{props.name}</h3>
      <div className="recp-info">
        <div className="diet-s">
          <span className="diets" key={props.name + props.id}>
            <strong>{props.diets?.join(", ")}</strong>
          </span>
        </div>
      </div>
      <img
        src={props.image}
        className="recp-img"
        alt="recipe"
        width="200"
        height="200"
      />
      <Link to={`/recipes/${props.id}`}>
        <button
          onClick={() => props.getRecipeDetail(props.id)}
          className="more-info">
          More Info
        </button>
      </Link>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipeDetail: (recipe) => dispatch(getRecipeDetail(recipe)),
  };
}

export default connect(null, mapDispatchToProps)(Recipe);
