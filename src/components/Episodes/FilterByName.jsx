import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodesByName } from "../../redux/actions/index";
//import { RiSearch2Line } from "react-icons/ri";

const FilterByName = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChangeEpi = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmitEpisode = (e) => {
    e.preventDefault();
    dispatch(getEpisodesByName(name));
    setName("");
  };

  const onClear = () => {
    setName("");
    window.location.reload();
  };

  return (
    <form className="form" onClick={(e) => handleSubmitEpisode(e)}>
      <div>
        <button className="form__select-btn">
          <Link className="text" to="/">
            Characters
          </Link>{" "}
        </button>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Search by episode name..."
        value={name}
        onChange={(e) => handleInputChangeEpi(e)}
        className="form__input-text"
      />
      {/*      <button
          className="btn"
          type="submit"
          onClick={(e) => handleSubmitEpisode(e)}
        >
          <RiSearch2Line />
        </button> */}
      <button className="form__select-btn" type="submit" onClick={onClear}>
        {" "}
        <Link className="text" to="/episodes">
          Reset
        </Link>
      </button>
    </form>
  );
};
export default FilterByName;
