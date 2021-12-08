import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { searchCharacter  } from '../../redux/actions/index';
import { RiSearch2Line } from 'react-icons/ri';


const InputChar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    const handleInputChangeChar = (e) => {
      e.preventDefault();
      setName(e.target.value)
   
    }
 
    const handleSubmitChar = (e) => {
     e.preventDefault();
      dispatch(searchCharacter(name))
     setName('');
    }
 
 
   return (
     <form className="form">
       <label htmlFor="name" className="form__label">
        {/*  Search by characters name */}
         <input
           type="text"
           name="name"
           placeholder="Search by character name..."
           value={name}
           onChange={(e) => handleInputChangeChar(e)}
           className="form__input"
         />
          <button className='btn' type="submit" onClick={(e) => handleSubmitChar(e)}>
            <RiSearch2Line />
          </button>
        </label>
     </form>
   );
       
 }
 export default InputChar;


