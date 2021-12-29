import React from "react";
import GenderIcon from "./GenderIcon";
import AliveOrDeadChar from "./AliveOrDeadChar";
import { GiHumanTarget } from "react-icons/gi";
//import { FaMapMarkerAlt } from "react-icons/fa";
//import { RiRecordCircleFill } from "react-icons/ri";

const CharacterCard = (props) => {
  return (
    <>
      <div className="char__li--art" key={props.name + props.id}>
        <img className="char__li--art-img" src={props.image} alt={props.name} />
        <div className="char__li--art-info">
          <div className="char__li--art-info-name" key={props.id}>
            <h2 className="text-name">{props.name}</h2>
          </div>
          <div className="property">Status:
          <div className="value">{props.status}<AliveOrDeadChar className="value" status={props.status} /></div>
          </div>
          <div className="property">Specie:
          <div className="value">{props.specie}<GiHumanTarget className="value" /> </div>
          </div>
          <div className="property">Gender:
          <div className="value">{props.gender}<GenderIcon className="value" gender={props.gender} /></div>
            </div>
          </div>

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
    </>
  );
};

export default CharacterCard;
