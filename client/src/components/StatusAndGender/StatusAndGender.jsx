import React from 'react';
//import { useState } from 'react';
import {/*  useDispatch, */ useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//zimport { getCharByGender, getCharByStatus } from '../../redux/actions';
//import SearchBar from '../SearchBar/SearchBar';
import CharacterCard from '../CharacterCard/CharacterCard';
import SearchBar from '../SearchBar/SearchBar';




const StatusAndGender = (props) => {
    //const [chars, setChars] = useState([]);
    //const dispatch = useDispatch();
    const getStatus = useSelector((state) => state.getStatus)
    const getGender = useSelector((state) => state.getGender)

  


    return(
        <div className="grid-card">
        <SearchBar setFilter={props.setFilter}/> 
     <div className="chars-list">
        {getStatus && getStatus.length > 0 ? ( //Cuando se busque por nombre, se renderizará este primer bloque de código. Si no hay búsqueda, se renderizará solo el segundo bloque de código.
          getStatus.map((e) => (
            <Link key={e.id} to={`/characters/${e.id}`}>
            <li key={e.id + e.name} className="chararacters">
              <CharacterCard
                key={e.id}
                image={e.image}
                name={e.name}
                status={e.status}
                specie={e.specie}
                gender={e.gender}
                location={e.location}
              />
            </li>
            </Link>
          ))
        ) : (
          <div className="characters">
            <li className="characters">
              {getGender &&
                getGender.map((e) => (
                  <Link key={e.id} to={`/characters/${e.id}`}>
                    <CharacterCard
                      key={e.id}
                      image={e.image}
                      name={e.name}
                      status={e.status}
                      specie={e.specie}
                      gender={e.gender}
                      location={e.location.name}
                    />
                  </Link>
                ))}
            </li>
          </div>
        )} 
      </div>
    </div>
    )
}

export default StatusAndGender;