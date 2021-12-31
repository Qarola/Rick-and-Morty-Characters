import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchCharacter } from "../../redux/actions/index";
//import { RiSearch2Line } from "react-icons/ri";

const InputChar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChangeChar = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmitChar = (e) => {
    e.preventDefault();
    dispatch(searchCharacter(name));
    setName("");
  };

  return (
    <form className="form" onSubmit={handleSubmitChar}>
      <div>
        <button className="form__select">
          <Link to="/" onClick={handleSubmitChar} className="text">
            Characters
          </Link>{" "}
        </button>
      </div>
      <div>
        <button className="form__select">
          <Link to="/locations" className="text">
            Locations
          </Link>{" "}
        </button>
      </div>
      <div>
        <button className="form__select">
          <Link to="/episodes" className="text">
            Episodes
          </Link>{" "}
        </button>
      </div>
      <div>
        <button className="form__text-link">
          <Link to="/statusandgender" className="text">
            Filter by status or gender
          </Link>
        </button>
      </div>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search by character name, e.g: Morty"
        value={name}
        onChange={handleInputChangeChar}
        className="form__input-text"
      />
      {/*  <button
          className="btn"
          type="submit"
         
        >
          <RiSearch2Line />
        </button> */}
    </form>
  );
};
export default InputChar;
