import React from "react";
//import { Link } from "react-router-dom";
import GenderIcon from "./GenderIcon";
import AliveOrDeadChar from "./AliveOrDeadChar";
import { GiHumanTarget } from "react-icons/gi";
//import { FaMapMarkerAlt } from "react-icons/fa";
//import { RiRecordCircleFill } from "react-icons/ri";

//import "./CharacterCard.css";

const CharacterCard = (props) => {
  return (
    <>
      <div className="char__li--art" key={props.name + props.id}>
        <img className="char__li--art-img" src={props.image} alt={props.name} />
        <div className="char__li--art-info">
          <h2 className="char__li--art-info-name" key={props.id}>
            {props.name}
          </h2>
          <h3>
            Status: <AliveOrDeadChar className="card" status={props.status} />
            {props.status}
          </h3>
          <h3>
            Specie: <GiHumanTarget className="card" /> {props.specie}
          </h3>
          <h3>
            Gender: <GenderIcon className="card" gender={props.gender} />
            {props.gender}
          </h3>
        
           {/*  <h3>
              Location:
              <FaMapMarkerAlt className="card" location={props.location} />
              {props.location}
            </h3>
         
         
            <h3>
              Episodes:
              <RiRecordCircleFill className="card" episode={props.episode} />
              {props.episode}
            </h3> */}
         
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
