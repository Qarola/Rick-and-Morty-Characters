import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Pagination.css";

export default function Pagination({ allCharacters, page }) {
  const totalPages = Math.ceil(allCharacters.length / 9); // se obtiene el total de páginas según el número de recipes

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


/* const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = []
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>)
  }
  return (
    <div>
      {prevPage && (<button onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button onClick={nextPage}>Next</button>)}
    </div>
  )
}

export default Pagination;
 */


/* const Pagination = ({charPerPage, paginate}) => {
  const allCharacters = useSelector(state => state.allCharacters)
  const pageNumbers = [];
 

  for (let i=1; i<= Math.ceil(allCharacters.length / charPerPage); i++){pageNumbers.push(i)}

  return (
    <div className='pag'>
      <div className="page-item">
        {/* <a className="page-link" href="#previous" aria-label="Previous" >
        <span aria-hidden="true">&laquo;</span>
        </a> *
        <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#characters">
               {number}   
            </a>
         
           
          </li>
          
        ))}
        {/*  <div className="page-item">
         <a className="page-link" href="#next" aria-label="Next">
           <span aria-hidden="true">&raquo;</span>
           </a>
           </div> *
        </ul>
      </div>

        </div>
     
  )
}

export default Pagination;
 */