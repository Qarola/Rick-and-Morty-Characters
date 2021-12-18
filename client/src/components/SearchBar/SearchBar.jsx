import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCharByStatus, getCharByGender } from "../../redux/actions";


const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const initialFilter = {
    name: "",
    status: "",
    gender: "",
  };
  // eslint-disable-next-line
  const [filter, setFilter] = useState({ initialFilter });

  //>>>>>>>> handle status <<<<<<<<<<
  const handleStatus = (e) => {
    setStatus(e.target.value)
  
  }
  const handleSubmitStatus = (e) => {
    e.preventDefault();
     dispatch(getCharByStatus(status))
   };


  //>>>>>>>> handle gender <<<<<<<<<<
  const handleGender = (e) => {
    setGender(e.target.value)
     
  }

   const handleSubmitGender = (e) => {
    e.preventDefault();
     dispatch(getCharByGender(gender))
   };


  const onClear = () => {
    setStatus("");
    setGender("");
    window.location.reload()

    setFilter({
      status,
      gender,
    });
    
  };

  return (
    <div className="form">
      <div className='link'>
         <button><Link to='/'>Characters</Link> </button>
       </div>
      <select
        className="dropdown"
        type='submit'
        id='status'
        placeholder="Search by character status"
        value={status}
        onChange={(e) => handleStatus(e)}
        onClick={handleSubmitStatus}
      >
        <option value="Search by status">Search by status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="dropdown"
        type='submit'
        id='gender'
        placeholder="Search by character gender"
        value={gender}
        onChange={(e) => handleGender(e)}
        onClick={handleSubmitGender}
      >
        <option value="Search by gender">Search by gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button className="btn-clear" type="submit" onClick={onClear}>
        {" "}
        <Link to='/statusandgender'>Reset</Link>
      </button>
    </div>
  );
};
export default SearchBar;
