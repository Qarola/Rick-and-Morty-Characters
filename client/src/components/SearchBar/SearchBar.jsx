import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharacter } from '../../redux/actions';

const SearchBar = (props) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCharacter(name))
  }


  const onSubmit = (e) => {
    e.preventDefault();
    props.setFillter({
      name,
      status,
      gender
    })
  };

  const onClear = () => {
    setName('');
    setStatus('');
    setGender('');

    props.setFilter({
      name,
      status,
      gender
    })
  };
 
  return (
   <div className='form'>
     <input className='input-name'
     key={props.name}
        type='text'
        placeholder='Search by character name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        onSubmit={handleSubmit}
     />
     <select className='dropdown'
     placeholder='Search by character status'
     value={status}
     onChange={(e) => setStatus(e.target.value)}
     onSubmit={onSubmit}
     >
        <otionn value='Search by status'>Search by status</otionn>
       <option value='Alive'>Alive</option>
       <option value='Dead'>Dead</option>
       <option value='unknown'>Unknown</option>
     </select>
    <select className='dropdown'
    placeholder='Search by character gender'
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    onSubmit={onSubmit}
    >
        <otionn value='Search by gender'>Search by gender</otionn>
       <otionn value='Male'>Male</otionn>
      <option value='Female'>Female</option>
      <option value='Unknown'>Unknown</option>
    </select>
    <button className='btn-clear'
    type='submit'
    onClick={onClear}
    > Filter
    </button>
   </div>
  )
}
export default SearchBar;




