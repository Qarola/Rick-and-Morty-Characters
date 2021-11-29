import React from 'react';

const FilterEpByName = (props) => {
    const handleInputEp = (e) => {
        props.handleFilter({episodeValue: e.target.value,
            key: "name"
        })
    };
    return (
        <>
        <input
        className="filter__form--select"
        placeholder="Search by episode name"
        onChange={handleInputEp}
        value={props.lsEpisode}
        />
        </>
    )
}
export default FilterEpByName;