import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
 
  return (
    <div className="lp">
      <div id="info">
        <h1 className="inf">
          <strong>Discover the world's recipes</strong>
        </h1>
        <button className="welcome-btn">
          <Link className="link" to="/home">
            <strong>Welcome</strong>
          </Link>
        </button>
      </div>
    </div>
  );
}


export default LandingPage;
