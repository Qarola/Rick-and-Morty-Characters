import React from 'react';
/* import FilterCharByName from "./FilterCharByName";
import FilterEpByName from './FilterEpByName'
import FilterLocByType from "./FilterLocByType"; */
import Reset from '../Reset/Reset';


const Filter = (props) => {
    const handleCharacter = (event) => {
      props.handleFilter(event.target.name, event.target.value);
    };
  
    /* preventDefault for form */
  
    const handleForm = (event) => {
      event.preventDefault();
    };
  
    return (
      <form className="form" onSubmit={handleForm}>
        <label htmlFor="name" className="form__label">
          Search by characters name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search by character name..."
            value={props.name}
            onChange={handleCharacter}
            className="form__input"
          />
        </label>
        <label htmlFor="species" className="form__label">
          Search by episodes name
          <input
            type="text"
            name="name"
            id="episode"
            placeholder="Search by episode name..."
            value={props.name}
            onChange={handleCharacter}
            className="form__input"
          />
        </label>
        <label htmlFor="status" className="form__label">
          Search by location name
          <input
          type="text"
            name="location"
            id="location"
            placeholder="Search by location name..."
            value={props.type}
            onChange={handleCharacter}
            className="form__input"
          />
        </label>
        <Reset resetInputs={props.resetInputs} />
      </form>
    );
  };
  export default Filter;


/* const Filters = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="filter__form" onSubmit={handleSubmit}>
        <FilterCharByName
          handleFilter={props.handleFilter}
          lsFilter={props.lsFilter}
        />
        <FilterEpByName
          handleFilter={props.handleFilter}
          lsSpecie={props.lsEpisode}
        />
        <FilterLocByType
        handleFilter={props.handleFilter}
        lsSpecie={props.lsLocation}
      />
      </form>
    </>
  );
};
export default Filters; */