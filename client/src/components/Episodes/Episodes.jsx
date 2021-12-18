import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "../../redux/actions";
import { Link } from "react-router-dom";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";


const Episodes= (props) => {
  
  const charDetail = useSelector((state) => state.episodes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEpisodes())
  }, [dispatch])

  return (
    <>
      <div className="detail">
        <Link to="/" className="detail__back">
          <p className="detail__back">
            <BsFillArrowUpLeftCircleFill />
            Go back
          </p>
        </Link>
        {charDetail.map(e =>
        <section className="detail__art">
        <img
          className="detail__art--img"
          src={props.e.image}
          alt={props.e.name}
        />
        <div className="detail__art--info" key={props.e.id}>
          <h2 className="detail__art--info-name">{props.e.name}</h2>
          <p className="detail__art--info-all">Specie: {props.e.species}</p>
          <p className="detail__article--info-all">Status: {props.e.status}</p>
          <p className="detail__article--info-all">Gender: {props.e.gender}</p>
          <p className="detail__article--info-all">
            Location: {props.e.location}
          </p>
          <p className="detail__article--info-all">
            Episode: {props.e.episode}
          </p>
        </div>
      </section>
          )}
        
      </div>
    </>
  );
}
export default Episodes;