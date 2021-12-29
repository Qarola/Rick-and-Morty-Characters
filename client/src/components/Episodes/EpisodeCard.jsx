import React from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

const EpisodeCard = (props) => {
  return (
    <>
      <div className="char__li--art" key={props.name + props.id}>
        <div className="char__li--art-info">
          <div className="char__li--art-info-name" key={props.id}>
            <h2>{props.name}</h2>
          </div>
          <h4>
            Episode: <MdOutlineConfirmationNumber className="card" />
            {props.episode}
          </h4>
          <h4>
            AirDate: <BsCalendarDate className="card" />
            {props.airDate}
          </h4>
          <h4>
            Characters: <IoIosPeople className="card" />
            {props.charactrs}
          </h4>
        </div>
      </div>
    </>
  );
};

export default EpisodeCard;
