import React from "react";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";

import "./Pagination.css";


const Pagination = ({charPerPage, paginate}) => {
  const allCharacters = useSelector(state => state.allCharacters)
  const pageNumbers = [];
 

  for (let i=1; i<= Math.ceil(allCharacters.length / charPerPage); i++){pageNumbers.push(i)}

  return (
    <div className='pag'>
      <div className="page-item">
        {/* <a className="page-link" href="#previous" aria-label="Previous" >
        <span aria-hidden="true">&laquo;</span>
        </a> */}
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
           </div> */}
        </ul>
      </div>

        </div>
     
  )
}

export default Pagination;
