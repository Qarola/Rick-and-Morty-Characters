import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ allEpisodes, page }) {
  const totalPages = Math.ceil(allEpisodes.length / 18); // se obtiene el total de páginas según el número de tarjetas

  const totalPagesToArray = [];
  for (let i = 1; i <= totalPages; i++) {
    // me irá gnerando el array...
    totalPagesToArray.push(i);
  }
  const next = page ? page < totalPages : true;
  const prev = page > 1; //si está en una página mayor que 1, se mostrará el prev.

  return (
    <div className="pag">
      {prev ? (
        <Link
          key="PREV"
          className="pag-link"
          to={`/episodes?page=${parseInt(page) - 1}`}
        >
          <button>Prev</button>
        </Link>
      ) : (
        ""
      )}
      {totalPagesToArray.map((p) => (
        <Link key={p} className="pag-link" to={`/episodes?page=${p}`}>
          <button className={page === p ? "active" : ""}>{p}</button>
        </Link>
      ))}
      {next ? (
        <Link
          key="NEXT"
          className="pag-link"
          to={`/episodes?page=${parseInt(page) + 1}`}
        >
          <button>Next</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

/* import React from "react";
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
            <li  className="btn" key={number}>
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
 */
