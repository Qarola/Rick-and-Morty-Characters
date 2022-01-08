import React from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

const EpisodeCard = (props) => {
  return (
    <>
      <div className="char__li--art--epi" key={props.name + props.id}>
        <div className="char__li--art-info">
          <div className="char__li--art-info-name-loc" key={props.id}>
          <h2>{props.name}</h2>
          </div>
          <div className="property-loc">Episode:
          <div className="value-loc">{props.episode}</div>
          <MdOutlineConfirmationNumber className="card" />
          </div>
          <div className="property-loc">Air Date:
          <div className="value-loc">{props.airDate} </div>
          <BsCalendarDate className="card" />
          </div>
          <div className="property-loc">Characters:
          <div className="value-loc">{props.charactrs} </div>
          <IoIosPeople className="card" />
            </div>

        {/*   <h4>
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
          </h4> */}
        </div>
      </div>
    </>
  );
};

export default EpisodeCard;
