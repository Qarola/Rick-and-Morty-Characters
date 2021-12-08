import React from 'react';
//import { Link } from 'react-router-dom'
//import  { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import {useSelector } from "react-redux";
import { searchCharacter } from "../../redux/actions";
import { RiSearch2Line } from 'react-icons/ri';
//import InputChar from "./InputName";
//import DropdownStatus from "./InputStatus";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  //const [foundChars, setFoundChars] = useState(searchedChar)
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  

  const handleInputChangeChar = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  
  const handleSubmitChar = (e) => {
   e.preventDefault();
    dispatch(searchCharacter(name))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.setFillter({
      name,
      status,
      gender,
    });
  };

  const onClear = () => {
    setName("");
    setStatus("");
    setGender("");

    props.setFilter({
      name,
      status,
      gender,
    });
  };

  return (
    <div className="form">
      <form>
     
      <input
        id='name'
        name='name'
        type="text"
        placeholder="Search by character name"
        value={name}
        onChange={(e) => handleInputChangeChar(e)}
        className="input-name"
      />
      <button className='btn-search' 
      type='submit'
      onClick={(e) => handleSubmitChar(e)}><RiSearch2Line /> {/* 🔍 */}
      </button>
       </form>
      <select
        className="dropdown"
        type='submit'
        placeholder="Search by character status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        onClick={onSubmit}
      >
        <option value="Search by status">Search by status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="dropdown"
        type='submit'
        placeholder="Search by character gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        onClick={onSubmit}
      >
        <option value="Search by gender">Search by gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button className="btn-clear" type="submit" onClick={onClear}>
        {" "}
        Filter
      </button>
    </div>
  );
};
export default SearchBar;
