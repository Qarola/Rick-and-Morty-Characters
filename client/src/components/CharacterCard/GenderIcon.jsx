import React from "react";
import { MdFemale, MdMale } from "react-icons/md";
import { GoQuestion } from 'react-icons/go';
import './GenderIcon.css';


const GenderIcon = (props) => {
    const female = <MdFemale className='female' />
    const male = <MdMale className='male' />
    const unknown = <GoQuestion className='unknown' />


 const genders = (gender) => {
    if(gender.toLowerCase() === 'female') {
        return female;
    } else if (gender.toLowerCase() === 'male') {
        return male;
    } else if (gender.toLowerCase() === 'unknown') {
        return unknown;
    }
  };
  return <>{genders(props.gender)}</>
}

export default GenderIcon;
