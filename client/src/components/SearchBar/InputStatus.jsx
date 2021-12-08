import React, {useState } from 'react';
//import {  useDispatch } from 'react-redux';
//import { RiSearch2Line } from 'react-icons/ri';
 

const DropdownStatus = (props) => {
   //const dispatch = useDispatch();
  const [status, setStatus] = useState('');


   /* const handleChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value)
    
   } */

   const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch((status))
    setStatus('')
   }

  return (
    <form>
   <select
        className="dropdown"
        placeholder="Search by character status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
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