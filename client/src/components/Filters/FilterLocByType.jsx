import React from 'react';

const FilterLocByType = (props) => {
    const handleInputLoc = (e) => {
        props.handleFilter({locationValue: e.target.value,
            key: "type"
        })
    };
    return (
        <>
        <input
        className="filter__form--select"
        placeholder="Search by location type"
        onChange={handleInputLoc}
        value={props.lsLocation}
        />
        </>
    )
}
export default FilterLocByType;