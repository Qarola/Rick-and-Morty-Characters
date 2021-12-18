import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { getAllCharacters, searchCharacter } from "../../redux/actions/index.js";
import CharacterCard from "../CharacterCard/CharacterCard";
import NoResult from "../NoResult/NoResult";
import InputChar from "../SearchBar/InputName";



const Characters = (props) => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);
  const searchedChar = useSelector((state) => state.searchedCharacter);

  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1); //it starts in the page 1...

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (props.location.search !== "") {
      setPage(
        parseInt(props.location.search.slice(props.location.search.indexOf("=") + 1))
      );
    }
  }, [props.location.search]);

  useEffect(() => {
    if (searchedChar.length > 0) {
      setChars(searchedChar);
    } else {
      setChars(allCharacters);
    }
  }, [allCharacters, searchedChar]);

  useEffect(() => {
    return searchCharacter("");
  }, []);
 
  const filterChars = allCharacters.filter((char) => {
    return char.name.toLowerCase()//.includes(name.toLowerCase());
  });

  //optional message if there is not character with this name...
  const optionalMessage = () => {
    if (filterChars.length === 0) {
      return <NoResult filterChars={props.filterChars} />;
    }
  };

    return (
      <div className="grid-card">
        <InputChar />
       <div className="chars-list">
          {searchedChar && searchedChar.length > 0 ? ( //Cuando se busque por nombre, se renderizará este primer bloque de código. Si no hay búsqueda, se renderizará solo el segundo bloque de código.
            searchedChar.map((e) => (
              <Link key={e.id} to={`/characters/${e.id}`}>
              <li key={e.id + e.name} className="chararacters">
                <CharacterCard
                  key={Math.floor(Math.random() * 10000)}
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
              {chars?.slice((page - 1) * 9, page * 9).map((e) => (
                  <Link key={e.id} to={`/characters/${e.id}`}>
                    <CharacterCard
                      key={e.id}
                      image={e.image}
                      name={e.name}
                      status={e.status}
                      specie={e.specie}
                      gender={e.gender}
                      location={e.location}
                    />
                  </Link>
                ))}
            </li>
          </div>
        )} 
      </div>
        <div className="optionalMessage">{optionalMessage()}</div>
        <Pagination className="pagtn" allCharacters={chars} page={page} />
      </div>
      
    );
   
};
export default Characters;




