import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocationByType } from "../../redux/actions";

const FilterByType = (props) => {
  const [type, setType] = useState("");
  // eslint-disable-next-line
  const searchedTypes = useSelector((state) => state.searchedLocation);

  const dispatch = useDispatch();

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmitType = (e) => {
    e.preventDefault();
    dispatch(getLocationByType(type));
  };

  const onClear = () => {
    setType("");
    window.location.reload();
  };

  let onlyTypes = [
    "Planet",
    "Cluster",
    "Space Station",
    "Microverse",
    "TV",
    "Resort",
    "Fantasy Town",
    "Dream",
    "unknown",
    "Menagerie",
    "Game",
    "Customs",
    "Daycare",
    "Dwarf planet",
    "Teenyverse",
    "Box",
    "Spacecraft",
    "Artificially generated world",
    "Machine",
    "Arcade",
    "Spa",
    "Quadrant",
    "Quasar",
    "Mount",
    "Liquid",
    "Convention",
    "Woods",
    "Diegesis",
    "Non-Diegetic Alternative Reality",
    "Nightmare",
    "Asteroide",
    "Acid Plant",
    "Dimension",
    "Reality",
    "Death Star",
    "Base",
    "Elemental Rings",
    "Human",
    "Hell",
    "Police Department",
    " Country",
    "Consciousness",
    "Memory",
  ];

  return (
    <div className="form">
      <div>
        <button className="form__select-btn">
          <Link className="text" to="/">
            Characters
          </Link>{" "}
        </button>
      </div>
      <select
        className="form__dropdown"
        type="text"
        id="type"
        placeholder="Search by location type"
        value={type.type}
        onChange={handleType}
        onClick={handleSubmitType}
      >
        <option>Search location by type</option>
        {onlyTypes.map((el) => (
          <>
            <option key={onlyTypes} value={el.item}>
              {el}
            </option>
          </>
        ))}
      </select>
      <button className="form__select-btn" type="submit" onClick={onClear}>
        {" "}
        <Link className="text" to="/locations">
          Reset
        </Link>
      </button>
    </div>
  );
};
export default FilterByType;
