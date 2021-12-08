import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../redux/actions";
import { RiSearch2Line } from 'react-icons/ri';

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();
  
  //const searchedChar = useSelector((state) => state.searchedCharacter);

 const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCharacter(name));
   
  };
 
  /* const searchChar = searchedChar.find((char) => {
    return char.name.toLowerCase()
  }) */


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
        onChange={handleInputChange}
        className="input-name"
      />
      <button className='btn-search' 
      type='submit'
      onSubmit={handleSubmit}><RiSearch2Line /> {/* 🔍 */}
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
