import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
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

    /* const handleChars = () => {
      
    } */
 
 
   return (
     <form className="form">
       <div className='link'>
         <button><Link to='/' onClick={handleSubmitChar}>Characters</Link> </button>
       </div>
       <div className='link'>
         <button><Link to='/locations'>Locations</Link> </button>
       </div>
       <div className='link'>
         <button><Link to='/episodes'>Episodes</Link> </button>
       </div>
       <div className='link'>
         <button><Link to='/statusandgender'>Filter by status or gender</Link></button>
       </div>
       <label htmlFor="name" className="form__label">
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


