import React from "react";
import { useSelector } from "react-redux";

const PaginationThree = ({ epiPerPage, paginated }) => {
  const allEpisodes = useSelector((state) => state.allEpisodes);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allEpisodes.length / epiPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div className="pagination">
        <a className="btn" href="#previous" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>{" "}
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginated(number)} href="#episodes">
                {number}
              </a>
            </li>
          ))}
          <div className="pagination">
            <a className="btn" href="#next" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PaginationThree;
