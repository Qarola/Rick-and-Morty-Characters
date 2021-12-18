import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocationByType } from "../../redux/actions";

const FilterByType = (props) => {
  const [type, setType] = useState("");
  // eslint-disable-next-line
  const searchedTypes = useSelector((state) => state.searchedLocation);
  const allTypes = useSelector((state) => state.allLocations);

  const dispatch = useDispatch();

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleSubmitType = (e) => {
    e.preventDefault();
    dispatch(getLocationByType(type));
  };

  let filteredTypes = [];
  // eslint-disable-next-line
  const filterTypes = (planet) => {
    let onlyTypes = allTypes.map((el) => el.type);
    onlyTypes.forEach((planet) => {
      if (!filteredTypes.includes(planet)) {
        filteredTypes.push(planet);
      }
    });
    return filterTypes;
  };

  return (
    <div className="form">
      <div className="link">
        <button>
          <Link to="/">Characters</Link>{" "}
        </button>
      </div>
      <select
        className="dropdown"
        type="submit"
        id="type"
        placeholder="Search by location type"
        value={type}
        onChange={(e) => handleType(e)}
        onClick={handleSubmitType}
      >
        <option>Search by location by type</option>
        {filteredTypes.map((el) => (
          <option value='type'>{el}</option>
        ))}
      </select>
    </div>
  );
};
export default FilterByType;
