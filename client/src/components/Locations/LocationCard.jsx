import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiConcentricCrescents } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';


const CharacterCard = (props) => {
  return (
    <>
      <div className="char__li--art" key={props.name + props.id}>
        <div className="char__li--art-info">
          <h2 className="char__li--art-info-name" key={props.id}>
            {props.name}
          </h2>
          <h3>
            Type: <FaMapMarkerAlt className="card" status={props.type} />
            {props.type}
          </h3>
          <h3>
            Dimension: <GiConcentricCrescents className="card" /> 
            {props.dimension}
          </h3>
          <h3>
            Residents: <IoIosPeople className="card" gender={props.residents} />
            {props.residents}
          </h3>
    
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
