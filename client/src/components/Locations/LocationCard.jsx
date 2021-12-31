import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiConcentricCrescents } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const LocationCard = (props) => {
  return (
    <>
      <div className="char__li--art--loc" key={props.name + props.id}>
        <div className="char__li--art-info">
          <div className="char__li--art-info-name-loc" key={props.id}>
            <h2>{props.name}</h2>
          </div>
          <div className="property-loc">Type:
          <div className="value-loc">{props.type}</div>
          <FaMapMarkerAlt className="card" />
          </div>
          <div className="property-loc">Dimension:
          <div className="value-loc">{props.dimension}</div>
          <GiConcentricCrescents className="card" />
          </div>
          <div className="property-loc">Residents:
          <div className="value-loc">{props.residents}</div>
          <IoIosPeople className="card" />
            </div>
         {/*  <h4>
            Type: <FaMapMarkerAlt className="card" />
            {props.type}
          </h4>
          <h4>
            Dimension: <GiConcentricCrescents className="card" />
            {props.dimension}
          </h4>
          <h4>
            Residents: <IoIosPeople className="card" />
            {props.residents}
          </h4> */}
        </div>
      </div>
    </>
  );
};

export default LocationCard;
