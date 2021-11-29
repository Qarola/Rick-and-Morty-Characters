import React from 'react';
import InputChar from './InputChar';
//import InputEpisode from './InputEpisode';
//import InputLocation from './InputLocation';

const SearchBar = (props) => {

  
  return (
    <form className="form">
      <InputChar />
     {/*  <InputEpisode />
      <InputLocation /> */}
    </form>
  );
      
}
export default SearchBar;
































/* import React, {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { searchCharacter, getEpisodesByName, getLocationByType  } from '../../redux/actions';
import Reset from '../Reset/Reset';
import { RiSearch2Line } from 'react-icons/ri';
 

const SearchBar = (props) => {
   const dispatch = useDispatch();
   const [nameChar, setNameChar] = useState('');
  const [episode, setEpisode] = useState('');
  const [location, setLocation] = useState('');

   const handleInputChangeChar = (e) => {
     setNameChar(e.target.value)
  
   }

   const handleSubmitChar = (e) => {
    e.preventDefault();
    dispatch(searchCharacter(nameChar))
    setNameChar('');
   }


   const handleInputChangeEpisode = (e) => {
    e.preventDefault();
    setEpisode(e.target.value)
    console.log(episode) 
   }

   const handleClickEpisode = (e) => {
    e.preventDefault();
    dispatch(getEpisodesByName(episode))
    setEpisode('')
   }

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

   const resetInputs = () => {
     setNameChar('');
     setEpisode('');
     setLocation('')
   }


  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
       {/*  Search by characters name *
        <input
          type="text"
          name="name"
          placeholder="Search by character name..."
          value={props.name}
          onChange={handleInputChangeChar}
          className="form__input"
        />
         <button className='btn' type="submit" onSubmit={handleSubmitChar}>
           <RiSearch2Line />
         </button>
       </label>
      <label htmlFor="name" className="form__label">
     
        <input
          type="text"
          name="name"
          id='name'
          placeholder="Search by character name..."
          value={props.name}
          onChange={handleInputChangeEpisode}
          className="form__input"
        />
         <button className='btn' type="submit" onClick={handleClickEpisode}>
           <RiSearch2Line />
         </button>
      </label>
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
      <Reset resetInputs={resetInputs} />
    </form>
  );
      
}
export default SearchBar; */