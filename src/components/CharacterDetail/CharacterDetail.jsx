import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

const CharacterDetail = (props) => {
  const charId = useSelector((state) => state.characterDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <React.Fragment>
      <div className="detail" key={charId.id}>
        <Link to="/" className="detail__back">
          <button className="detail__back">
            <BsFillArrowUpLeftCircleFill />
            Go back
          </button>
        </Link>
        {charId.name && (
          <section className="detail__art">
            <img
              className="detail__art--img"
              src={charId.image}
              alt={charId.name}
            />
            <div className="detail__art--info" key={charId.id}>
              <h2 className="detail__art--info-name">{charId.name}</h2>
              <p className="detail__art--info-all">Specie: {charId.specie}</p>
              <p className="detail__article--info-all">
                Status: {charId.status}
              </p>
              <p className="detail__article--info-all">
                Gender: {charId.gender}
              </p>
              <p className="detail__article--info-all">
                Location: {charId.location}
              </p>
              <p className="detail__article--info-all">
                Episodes: {charId.episode}
              </p>
            </div>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};
export default CharacterDetail;
