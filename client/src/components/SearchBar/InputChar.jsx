import React, {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { searchCharacter  } from '../../redux/actions/index';
import { RiSearch2Line } from 'react-icons/ri';


const InputChar = (props) => {
    const dispatch = useDispatch();
    const [nameChar, setNameChar] = useState('');
   
    const handleInputChangeChar = (e) => {
      setNameChar(e.target.value)
   
    }
 
    const handleSubmitChar = (e) => {
     e.preventDefault();
     //props.searchCharacter(nameChar)
     dispatch(searchCharacter(nameChar))
     setNameChar('');
    }
 
 
   return (
     <form className="form">
       <label htmlFor="name" className="form__label">
        {/*  Search by characters name */}
         <input
           type="text"
           name="name"
           placeholder="Search by character name..."
           value={nameChar}
           onChange={handleInputChangeChar}
           className="form__input"
         />
          <button className='btn' type="submit" value='search' onSubmit={handleSubmitChar}>
            <RiSearch2Line />
          </button>
        </label>
     </form>
   );
       
 }
 export default InputChar;


