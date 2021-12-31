import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Pagination({ allCharacters, page }) {
  const totalPages = Math.ceil(allCharacters.length / 18); // se obtiene el total de páginas según el número de tarjetas
 
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
          className="pag-link-left"
          to={`/?page=${parseInt(page) - 1}`}>
          <button>Prev</button>
        </Link>
      ) : (
        ""
      )}
      {totalPagesToArray.map((p) => (
        <Link key={p} className="pag-link-center" to={`/?page=${p}`}>
          <button className={page === p ? "active" : ""}>{p}</button>
        </Link>
      ))}
      {next ? (
        <Link
          key="NEXT"
          className="pag-link-right"
          to={`/?page=${parseInt(page) + 1}`}>
          <button>Next</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

