import React from "react";
import { MdTagFaces, MdMoodBad } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import "./AliveOrDead.css";

const AliveOrDeadChar = (props) => {
  const alive = <MdTagFaces className="alive" />;
  const dead = <MdMoodBad className="dead" />;
  const unknown = <GoQuestion className="unknown" />;

  const isAlive = (status) => {
    if (status.toLowerCase() === "alive") {
      return alive;
    } else if (status.toLowerCase() === "dead") {
      return dead;
    } else if (status.toLowerCase() === "unknown") {
      return unknown;
    }
  };
  return <>{isAlive(props.status)}</>;
};

export default AliveOrDeadChar;
