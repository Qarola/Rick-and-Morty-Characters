import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

const CharacterDetail = (props) => {
  const { id } = props.match.params;
  const charDetail = useSelector((state) => state.characterDetail);
  const dispatch = useDispatch(); 
  //const { id } = useParams();

  useEffect(() => {
    dispatch(getCharacterDetail(id))
  }, [dispatch, id]) 

  return (
    <>
      <div className="detail" key={props.name + props.id}>
        <Link to="/" className="detail__back">
          <p className="detail__back">
            <BsFillArrowUpLeftCircleFill />
            Go back
          </p>
        </Link>
     { charDetail.map((c) => 
        <section className="detail__art">
        <img
          className="detail__art--img"
          src={props.c.image}
          alt={props.c.name}
        />
        <div className="detail__art--info" key={props.c.id}>
          <h2 className="detail__art--info-name">{props.c.name}</h2>
          <p className="detail__art--info-all">Specie: {props.c.species}</p>
          <p className="detail__article--info-all">Status: {props.c.status}</p>
          <p className="detail__article--info-all">Gender: {props.c.gender}</p>
          <p className="detail__article--info-all">
            Location: {props.c.location}
          </p>
          <p className="detail__article--info-all">
            Episode: {props.c.episode}
          </p>
        </div>
      </section>
     )} 
        
      </div>
    </>
  );
};
export default CharacterDetail;

//character --> viene de la iteración del find() en App.js