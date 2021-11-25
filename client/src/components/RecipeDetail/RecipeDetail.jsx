import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import loading from "../../img/loading-line.gif";
import { Link } from "react-router-dom";
import "./RecipeDetail.css";

function RecipeDetails({ recipe, diets }) {
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  const [r, setR] = useState({});
  useEffect(() => {
    setR(recipe);
  }, [recipe]);
  useEffect(() => {
    return setR({});
  }, []);
  if (r.name !== undefined) {
    return (
      <div className="details">
        {console.log(r)}
        <button className="back-btn" onClick={() => setR({})}>
          <Link className="link" to="/home">
            Back to Home
          </Link>
        </button>
        <div className="info">
          <h2>{r.name}</h2>
          <h3>Health Score: {r.healthScore}</h3>
          <div className="diets">
            {diets
              .filter((d) => {
                return (
                  r.diets.includes(d.name.toLowerCase()) ||
                  r.diets.find((diet) => d.name === diet.name)
                );
              })
              .map((d) => (
                <h3 className="diets" key={d.name}>
                  {d.name}
                </h3>
              ))}
          </div>
          <img
            className="recipe-img"
            src={r.image}
            height="225px"
            width="200px"
            alt="recipe"
          />
          <div className="summary">
            {renderHTML(r.summary)}
            <p className="sbs"> Step by Step:</p>
            {renderHTML(r.stepByStep)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img src={loading} alt="loading-line.gif" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipeDetail, //inialState de Redux
    diets: state.allDiets,
  };
}

export default connect(mapStateToProps)(RecipeDetails);
