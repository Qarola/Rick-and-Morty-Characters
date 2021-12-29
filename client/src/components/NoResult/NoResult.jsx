import React from "react";
import portal from "../../img/portal-gif.gif";

const NoResult = (props) => {
  return (
    <>
      <div className="noResults">
        <p className="noResults__text">
          Oops!{" "}
          <span className="noResults__text-input">{props.filterChars}</span>This
          is not in this dimension.
        </p>
        <img className="noResults__img" src={portal} alt="Not found" />
      </div>
    </>
  );
};
export default NoResult;
