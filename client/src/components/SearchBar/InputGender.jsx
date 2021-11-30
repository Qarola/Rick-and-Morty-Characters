import React, {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getLocationByType  } from '../../redux/actions';
import { RiSearch2Line } from 'react-icons/ri';
 

const InputLocation = (props) => {
   const dispatch = useDispatch();
  const [location, setLocation] = useState('');

 
   const handleInputChangeLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value)
    console.log(location)
   }


   const handleClickLocation = (e) => {
    e.preventDefault();
    dispatch(getLocationByType(location))
    setLocation('')
   } 

  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        <input
          type="text"
          name="type"
          id='name'
          placeholder="Search by character name..."
          value={props.type}
          onChange={handleInputChangeLocation}
          className="form__input"
        />
         <button className='btn' type="submit" onClick={handleClickLocation}>
           <RiSearch2Line />
         </button> 
      </label>
    </form>
  );
      
}
export default InputLocation;