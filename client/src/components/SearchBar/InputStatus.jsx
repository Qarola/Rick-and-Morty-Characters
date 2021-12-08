import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
//import {  useDispatch } from 'react-redux';
//import { RiSearch2Line } from 'react-icons/ri';

 

const DropdownStatus = (props) => {
   //const dispatch = useDispatch();
  const [status, setStatus] = useState('');
 // const allChars = useSelector((state) => state.allCharacters)
  const searching = useSelector((state) => state.searchedCharacter)


 const handleChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value)
    
   } 

   const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('')
   }
/* 
   const alive = <MdTagFaces className='alive' />
   const dead = <MdMoodBad className='dead' />
   const unknown = <GoQuestion className='unknown' />

 function findStatus(status) {
   for(let i = 0; i < allChars.length; i++) {
    if(allChars[i].status.toLowerCase() === 'alive') {
        return alive;
    } else if (allChars[i].status.toLowerCase() === 'dead') {
        return dead;
    } else if (allChars[i].status.toLowerCase() === 'unknown') {
        return unknown;
    }
  };
 }
 */

 useEffect(() => {
  if(searching.status  === 'alive') {
    return searching.status === 'alive';
  }
  else if(searching.status === 'dead') {
    return searching.status === 'dead';
  }
  else if(searching.status === 'unknown') {
    return searching.status === 'unknown'
  }
})

  return (
    <form>
   <select
        className="dropdown"
        placeholder="Search by character status"
        value={status}
        onChange={(e) => handleChange(e)}
        onSubmit={handleSubmit}
      >
        <option value="Search by status">Search by status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </form>
  );
      
}
export default DropdownStatus;

/* className="form__input"
 */