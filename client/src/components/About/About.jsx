import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-ctn">
      <h3 className="txt">Food Web Application</h3>
      <hr />
      <div className="about-info">
        <p>
          This <strong>Food App</strong> is an application Full-Stack. It has
          been created with ReactJS, Redux, Express, Sequelize, and PostgreSQL.
        </p>
        <p>
          Here, you'll find several recipes from different diets, only searching
          by their name. Also, it will show you the health score from each
          recipe.
        </p>
        <p>
          You can get more information about each recipe detail where it will
          show you the name, summary, and step-by-step of the recipe.
        </p>
      </div>
    </div>
  );
}
