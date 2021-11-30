import React, {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { searchharacter } from '../../redux/actions';
import { RiSearch2Line } from 'react-icons/ri';
 

const InputStatus = (props) => {
   const dispatch = useDispatch();
  const [status, setStatus] = useState('');


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

  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        <input
          type="text"
          name="name"
          id='name'
          placeholder="Search by episodes name..."
          value={props.name}
          onChange={handleInputChangeEpisode}
          className="form__input"
        />
         <button className='btn' type="submit" onClick={handleClickEpisode}>
           <RiSearch2Line />
         </button>
      </label>
    </form>
  );
      
}
export default InputEpisode;