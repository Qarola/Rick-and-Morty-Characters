import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodesByName } from "../../redux/actions/index";
import { RiSearch2Line } from "react-icons/ri";

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
    <form className="form">
      <div className="link">
        <button>
          <Link to="/">Characters</Link>{" "}
        </button>
      </div>
      <label htmlFor="name" className="form__label">
        <input
          type="text"
          name="name"
          placeholder="Search by episode name..."
          value={name}
          onChange={(e) => handleInputChangeEpi(e)}
          className="form__input"
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => handleSubmitEpisode(e)}
        >
          <RiSearch2Line />
        </button>
      </label>
      <button className="btn-clear" type="submit" onClick={onClear}>
        {" "}
        <Link to="/episodes">Reset</Link>
      </button>
    </form>
  );
};
export default FilterByName;
